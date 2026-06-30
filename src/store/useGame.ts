import { create } from "zustand";
import localforage from "localforage";
import { LANGUAGES, getLanguage } from "../data/languages";
import { ACHIEVEMENTS, type AchState } from "../data/achievements";
import { pick } from "../content/types";
import { useToast } from "./useToast";
import { useWorkshop } from "./useWorkshop";

/**
 * O'yin holati — HackHub quest tizimidan ilhomlangan.
 * Har dars: locked → unlocked → completed.
 * Progress localforage (IndexedDB) orqali saqlanadi.
 *
 * Eslatma: bu bir foydalanuvchili, offline ilova — progress lokal va
 * server tomonidan tekshirilmaydi. Quyidagi tekshiruvlar "aldashni" butunlay
 * to'xtatish uchun emas (renderer baribir ochiq), balki TASODIFIY/korrupt
 * holatlardan (Infinity XP, soxta dars id, buzilgan saqlash) ilovani
 * himoya qilish va o'yin mantig'ini izchil saqlash uchun.
 */

export type LessonState = "locked" | "unlocked" | "completed";

export interface GameState {
  hydrated: boolean;
  xp: number;
  /** Til bo'yicha tugatilgan dars id'lari */
  completed: Record<string, string[]>;
  /** Kunlik streak */
  streak: number;
  /** Oxirgi faol kun (YYYY-MM-DD) — streak hisoblash uchun */
  lastActiveDay?: string;
  /** "Barqarorlik" — HackHub Suspicion'ning ijobiy analogi (xato qilsa tushadi) */
  stability: number;
  /** Ochilgan yutuq id'lari */
  achievements: string[];
  settings: {
    theme: "neon" | "light";
    locale: "uz" | "en" | "ru";
    music: boolean;
    sfx: boolean;
    volume: number;
    /** Kompilyatsiya tillarini tashqi serverga yuborib ishga tushirishga rozilik */
    onlineRun: boolean;
  };

  // amallar
  hydrate: () => Promise<void>;
  addXp: (n: number) => void;
  completeLesson: (langId: string, lessonId: string, xp?: number) => void;
  isCompleted: (langId: string, lessonId: string) => boolean;
  completedCount: (langId: string) => number;
  /** Dars to'g'ri/noto'g'ri tekshirilganda barqarorlikni yangilaydi */
  recordCheck: (passed: boolean) => void;
  /** Dars oldingilari tugatilganmi — URL/terminal orqali oldinga sakrashni to'sadi */
  isLessonUnlocked: (langId: string, lessonId: string) => boolean;
  /** Til track bo'yicha ochilganmi (Home gating bilan bir xil) */
  isLanguageUnlocked: (langId: string) => boolean;
  setSetting: <K extends keyof GameState["settings"]>(
    key: K,
    value: GameState["settings"][K]
  ) => void;
  reset: () => void;
}

const STORE_KEY = "feekr-code:save";

localforage.config({ name: "feekr-code", storeName: "save" });

const DEFAULT_SETTINGS: GameState["settings"] = {
  theme: "neon",
  locale: "uz",
  music: true,
  sfx: true,
  volume: 0.6,
  onlineRun: false,
};

// ── kichik yordamchilar (validatsiya) ─────────────────────────────────────
const finiteNum = (v: unknown, d: number): number =>
  typeof v === "number" && Number.isFinite(v) ? v : d;
const clamp = (v: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, v));
/** Dars id'si haqiqiy diapazonda (langId-N, 1 ≤ N ≤ lang.lessons) ekanini tekshiradi */
function lessonNumber(langId: string, lessonId: string): number | null {
  const lang = getLanguage(langId);
  if (!lang) return null;
  const n = parseInt(lessonId.split("-").pop() ?? "", 10);
  if (!Number.isInteger(n) || n < 1 || n > lang.lessons) return null;
  return n;
}

/** XP'dan level hisoblash — har level 25% qiyinroq. Noto'g'ri/cheksiz XP'dan himoyalangan. */
export function levelFromXp(xpRaw: number): { level: number; into: number; need: number } {
  // ⚠️ Muhim: Infinity/NaN/manfiy XP bu yerda cheksiz tsiklga olib kelardi va
  // HudBar har renderда chaqirgani uchun butun ilovani muzlatib qo'yardi.
  const xp = Number.isFinite(xpRaw) && xpRaw > 0 ? xpRaw : 0;
  let level = 1;
  let need = 100;
  let remaining = xp;
  while (remaining >= need) {
    remaining -= need;
    level += 1;
    need = Math.round(need * 1.25);
  }
  return { level, into: remaining, need };
}

async function persist(state: GameState) {
  await localforage.setItem(STORE_KEY, {
    xp: state.xp,
    completed: state.completed,
    streak: state.streak,
    lastActiveDay: state.lastActiveDay,
    stability: state.stability,
    achievements: state.achievements,
    settings: state.settings,
  });
}

function computeAchState(s: GameState): AchState {
  const perLang: Record<string, number> = {};
  let totalCompleted = 0;
  let started = 0;
  let finished = 0;
  for (const l of LANGUAGES) {
    const n = s.completed[l.id]?.length ?? 0;
    perLang[l.id] = n;
    totalCompleted += n;
    if (n >= 1) started++;
    if (n >= l.lessons) finished++;
  }
  const { level } = levelFromXp(s.xp);
  return { xp: s.xp, level, totalCompleted, languagesStarted: started, languagesFinished: finished, perLang };
}

/** Yangi ochilgan yutuqlarni topadi, saqlaydi va toast chiqaradi */
function checkAchievements(get: () => GameState, set: (p: Partial<GameState>) => void) {
  const st = get();
  const ach = computeAchState(st);
  const newly = ACHIEVEMENTS.filter((a) => a.check(ach) && !st.achievements.includes(a.id));
  if (!newly.length) return;
  set({ achievements: [...st.achievements, ...newly.map((a) => a.id)] });
  persist(get());
  const loc = get().settings.locale;
  newly.forEach((a) =>
    useToast.getState().push({ icon: a.icon, title: pick(a.title, loc), desc: pick(a.desc, loc) })
  );
}

// MAHALLIY (local) sana — UTC emas. UTC ishlatilsa kun chegarasi noto'g'ri vaqtda
// almashar va streak xato hisoblanardi (masalan UTC+5'da kun 05:00 da almashardi).
const pad2 = (n: number) => String(n).padStart(2, "0");
const localDay = (d: Date = new Date()) =>
  `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const todayStr = () => localDay();

export const useGame = create<GameState>((set, get) => ({
  hydrated: false,
  xp: 0,
  completed: {},
  streak: 0,
  lastActiveDay: undefined,
  stability: 100,
  achievements: [],
  settings: DEFAULT_SETTINGS,

  hydrate: async () => {
    let saved: Partial<GameState> | null = null;
    try {
      saved = await localforage.getItem<Partial<GameState>>(STORE_KEY);
    } catch {
      saved = null;
    }
    if (saved) {
      // Har maydonni tipi bo'yicha tekshirib, korrupt qiymatlarni default'ga qaytaramiz.
      const rawSettings =
        saved.settings && typeof saved.settings === "object" ? saved.settings : {};
      const settings = { ...DEFAULT_SETTINGS, ...rawSettings };
      settings.volume = clamp(finiteNum(settings.volume, 0.6), 0, 1);
      set({
        xp: Math.max(0, finiteNum(saved.xp, 0)),
        completed:
          saved.completed && typeof saved.completed === "object" && !Array.isArray(saved.completed)
            ? (saved.completed as Record<string, string[]>)
            : {},
        streak: Math.max(0, finiteNum(saved.streak, 0)),
        lastActiveDay: typeof saved.lastActiveDay === "string" ? saved.lastActiveDay : undefined,
        stability: clamp(finiteNum(saved.stability, 100), 0, 100),
        achievements: Array.isArray(saved.achievements) ? saved.achievements : [],
        settings,
        hydrated: true,
      });
    } else {
      set({ hydrated: true });
    }
    applyTheme(get().settings.theme);
    // Mavjud progress uchun yutuqlarni retroaktiv beramiz
    checkAchievements(get, set);
  },

  addXp: (n) => {
    const delta = clamp(finiteNum(n, 0), 0, 100000);
    if (delta === 0) return;
    set((s) => ({ xp: Math.max(0, s.xp + delta) }));
    persist(get());
    checkAchievements(get, set);
  },

  completeLesson: (langId, lessonId, xp = 20) => {
    // Soxta/diapazon tashqi dars id'lariga XP bermaymiz.
    if (lessonNumber(langId, lessonId) === null) return;
    // Qulflangan darsни tugatib bo'lmaydi — invariant store darajasida (yagona manba).
    // Shu sabab kelajakdagi istalgan chaqiruvchi (Terminal, yangi view) ham bepul
    // XP/unlock bera olmaydi.
    if (!get().isLessonUnlocked(langId, lessonId) && !get().isCompleted(langId, lessonId)) return;
    const safeXp = clamp(finiteNum(xp, 20), 0, 1000);
    const today = todayStr();
    set((s) => {
      const cur = s.completed[langId] ?? [];
      if (cur.includes(lessonId)) return s; // allaqachon tugatilgan — o'zgartirmaymiz
      // streak: bugun birinchi faollik bo'lsa yangilaymiz
      let streak = s.streak;
      let lastActiveDay = s.lastActiveDay;
      if (s.lastActiveDay !== today) {
        const yesterday = localDay(new Date(Date.now() - 864e5));
        streak = s.lastActiveDay === yesterday ? s.streak + 1 : 1;
        lastActiveDay = today;
      }
      return {
        completed: { ...s.completed, [langId]: [...cur, lessonId] },
        xp: Math.max(0, s.xp + safeXp),
        streak,
        lastActiveDay,
        // to'g'ri dars tugatilganda barqarorlik biroz tiklanadi
        stability: clamp(s.stability + 2, 0, 100),
      };
    });
    persist(get());
    checkAchievements(get, set);
  },

  isCompleted: (langId, lessonId) =>
    (get().completed[langId] ?? []).includes(lessonId),

  completedCount: (langId) => (get().completed[langId] ?? []).length,

  recordCheck: (passed) => {
    set((s) => ({
      stability: clamp(s.stability + (passed ? 1 : -4), 0, 100),
    }));
    persist(get());
  },

  isLessonUnlocked: (langId, lessonId) => {
    const lang = getLanguage(langId);
    if (!lang) return false;
    const n = lessonNumber(langId, lessonId);
    if (n === null) return false;
    const done = get().completed[langId] ?? [];
    // birinchi tugatilmagan darsning raqami (1-asosli); dars shu raqamdan oshmasa — ochiq
    let firstOpen = lang.lessons + 1;
    for (let i = 1; i <= lang.lessons; i++) {
      if (!done.includes(`${langId}-${i}`)) {
        firstOpen = i;
        break;
      }
    }
    return n <= firstOpen;
  },

  isLanguageUnlocked: (langId) => {
    const lang = getLanguage(langId);
    if (!lang) return false;
    const sameTrack = LANGUAGES.filter((l) => l.track === lang.track).sort((a, b) => a.order - b.order);
    const i = sameTrack.findIndex((l) => l.id === langId);
    if (i <= 0) return true; // track'dagi birinchi til doim ochiq
    const c = get().completed;
    return (c[sameTrack[i - 1].id]?.length ?? 0) >= 1 || (c[langId]?.length ?? 0) >= 1;
  },

  setSetting: (key, value) => {
    let v: any = value;
    if (key === "volume") {
      const n = Number(value);
      v = Number.isFinite(n) ? clamp(n, 0, 1) : 0.6;
    }
    set((s) => ({ settings: { ...s.settings, [key]: v } }));
    if (key === "theme") applyTheme(v as "neon" | "light");
    persist(get());
  },

  reset: () => {
    // Progressni to'liq tozalaymiz. Afzalliklar (mavzu/til/musiqa/ovoz) saqlanadi,
    // ammo onlineRun rozligi qaytariladi — "boshidan boshlash" desa, kodni tashqi
    // serverga yuborishga qayta rozilik so'ralsin.
    set((s) => ({
      xp: 0,
      completed: {},
      streak: 0,
      lastActiveDay: undefined,
      stability: 100,
      achievements: [],
      settings: { ...s.settings, onlineRun: false },
    }));
    persist(get());
    // Foydalanuvchi yaratgan Workshop darslarini ham tozalaymiz (orphan holat qolmasin).
    useWorkshop.getState().clear();
  },
}));

export function applyTheme(theme: "neon" | "light") {
  document.documentElement.setAttribute("data-theme", theme);
}

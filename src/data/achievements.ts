import type { Loc } from "../content/types";

export interface AchState {
  xp: number;
  level: number;
  totalCompleted: number;
  languagesStarted: number;
  languagesFinished: number;
  perLang: Record<string, number>;
}

export interface Achievement {
  id: string;
  icon: string;
  title: Loc;
  desc: Loc;
  check: (s: AchState) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first_step", icon: "🌱",
    title: { uz: "Birinchi qadam", en: "First step", ru: "Первый шаг" },
    desc: { uz: "Birinchi darsni tugat", en: "Complete your first lesson", ru: "Завершите первый урок" },
    check: (s) => s.totalCompleted >= 1,
  },
  {
    id: "warming_up", icon: "🔥",
    title: { uz: "Qizishyapmiz", en: "Warming up", ru: "Разогрев" },
    desc: { uz: "5 ta dars tugat", en: "Complete 5 lessons", ru: "Завершите 5 уроков" },
    check: (s) => s.totalCompleted >= 5,
  },
  {
    id: "polyglot", icon: "🌍",
    title: { uz: "Poliglot", en: "Polyglot", ru: "Полиглот" },
    desc: { uz: "3 ta tilni boshla", en: "Start 3 languages", ru: "Начните 3 языка" },
    check: (s) => s.languagesStarted >= 3,
  },
  {
    id: "level5", icon: "⭐",
    title: { uz: "5-daraja", en: "Level 5", ru: "Уровень 5" },
    desc: { uz: "5-darajaga yet", en: "Reach level 5", ru: "Достигните 5 уровня" },
    check: (s) => s.level >= 5,
  },
  {
    id: "xp250", icon: "💎",
    title: { uz: "Tajribali", en: "Experienced", ru: "Опытный" },
    desc: { uz: "250 XP to'pla", en: "Earn 250 XP", ru: "Наберите 250 XP" },
    check: (s) => s.xp >= 250,
  },
  {
    id: "web_master", icon: "🕸️",
    title: { uz: "Veb ustasi", en: "Web master", ru: "Веб-мастер" },
    desc: { uz: "10 ta veb darsi (HTML/JS/TS)", en: "10 web lessons (HTML/JS/TS)", ru: "10 веб-уроков (HTML/JS/TS)" },
    check: (s) => (s.perLang.htmlcss ?? 0) + (s.perLang.javascript ?? 0) + (s.perLang.typescript ?? 0) >= 10,
  },
  {
    id: "first_lang", icon: "🏆",
    title: { uz: "Til zabt etildi", en: "Language conquered", ru: "Язык покорён" },
    desc: { uz: "Bitta tilni to'liq tugat", en: "Finish a whole language", ru: "Пройдите язык полностью" },
    check: (s) => s.languagesFinished >= 1,
  },
  {
    id: "dedicated", icon: "🚀",
    title: { uz: "Bag'rikeng", en: "Dedicated", ru: "Преданный" },
    desc: { uz: "25 ta dars tugat", en: "Complete 25 lessons", ru: "Завершите 25 уроков" },
    check: (s) => s.totalCompleted >= 25,
  },
];

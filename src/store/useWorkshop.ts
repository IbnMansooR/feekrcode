import { create } from "zustand";
import localforage from "localforage";

/** Workshop — foydalanuvchi yaratgan maxsus darslar (HackHub Steam Workshop analogi). */

export interface CustomLesson {
  id: string;
  title: string;
  langId: string;
  task: string;
  starterCode: string;
  createdAt: number;
}

interface WorkshopState {
  hydrated: boolean;
  lessons: CustomLesson[];
  hydrate: () => Promise<void>;
  add: (l: Omit<CustomLesson, "id" | "createdAt">) => CustomLesson;
  remove: (id: string) => void;
  /** Barcha maxsus darslarni o'chiradi (progressni tozalashda chaqiriladi) */
  clear: () => void;
  get: (id: string) => CustomLesson | undefined;
}

const KEY = "feekr-code:workshop";
const store = localforage.createInstance({ name: "feekr-code", storeName: "workshop" });

// Cheksiz kattalikdagi kiritma IndexedDB'ni shishirmasligi uchun chegaralar.
const MAX_TITLE = 80;
const MAX_TASK = 2000;
const MAX_STARTER = 20000;
let counter = 0;

async function persist(lessons: CustomLesson[]) {
  await store.setItem(KEY, lessons);
}

export const useWorkshop = create<WorkshopState>((set, get) => ({
  hydrated: false,
  lessons: [],
  hydrate: async () => {
    let saved: CustomLesson[] | null = null;
    try {
      saved = await store.getItem<CustomLesson[]>(KEY);
    } catch {
      saved = null;
    }
    // Korrupt saqlash (massiv emas) Workshop sahifasini buzmasligi uchun.
    set({ lessons: Array.isArray(saved) ? saved : [], hydrated: true });
  },
  add: (l) => {
    const lesson: CustomLesson = {
      title: String(l.title ?? "").slice(0, MAX_TITLE),
      langId: String(l.langId ?? ""),
      task: String(l.task ?? "").slice(0, MAX_TASK),
      starterCode: String(l.starterCode ?? "").slice(0, MAX_STARTER),
      // Date.now() + o'suvchi hisoblagich — bir millisekundда bir nechta yaratishda
      // id to'qnashmasligi uchun.
      id: `ws_${Date.now()}_${++counter}`,
      createdAt: Date.now(),
    };
    set((s) => ({ lessons: [lesson, ...s.lessons] }));
    persist(get().lessons);
    return lesson;
  },
  remove: (id) => {
    set((s) => ({ lessons: s.lessons.filter((x) => x.id !== id) }));
    persist(get().lessons);
  },
  clear: () => {
    set({ lessons: [] });
    persist([]);
  },
  get: (id) => get().lessons.find((x) => x.id === id),
}));

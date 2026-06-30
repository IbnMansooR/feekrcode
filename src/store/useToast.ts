import { create } from "zustand";

export interface Toast {
  id: number;
  title: string;
  desc?: string;
  icon?: string;
}

interface ToastState {
  toasts: Toast[];
  push: (t: Omit<Toast, "id">) => void;
  remove: (id: number) => void;
}

let counter = 0;
const MAX_TOASTS = 4; // bir vaqtda ko'rinadigan toast soni (korrupt saqlashda 8 tasi birdan chiqib ketmasin)

export const useToast = create<ToastState>((set) => ({
  toasts: [],
  push: (t) => {
    const id = ++counter;
    // Eng eskilarini tashlab, faqat oxirgi MAX_TOASTS tasini ko'rsatamiz.
    set((s) => ({ toasts: [...s.toasts, { ...t, id }].slice(-MAX_TOASTS) }));
    setTimeout(() => set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) })), 5000);
  },
  remove: (id) => set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) })),
}));

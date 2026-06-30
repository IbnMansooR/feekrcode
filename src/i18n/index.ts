import { uz } from "./locales/uz";
import { en } from "./locales/en";
import { ru } from "./locales/ru";
import { useGame } from "../store/useGame";

export type Dict = typeof uz;
export type Locale = "uz" | "en" | "ru";

const DICTS: Record<Locale, Dict> = { uz, en, ru };

/** Komponentlarda matn olish uchun hook */
export function useT() {
  const locale = useGame((s) => s.settings.locale);
  const dict = DICTS[locale] ?? uz;
  return (key: keyof Dict, vars?: Record<string, string | number>): string => {
    let str = (dict[key] ?? uz[key] ?? String(key)) as string;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(new RegExp(`{${k}}`, "g"), String(v));
      }
    }
    return str;
  };
}

export const LOCALES: { id: Locale; label: string; flag: string }[] = [
  { id: "uz", label: "O'zbekcha", flag: "UZ" },
  { id: "en", label: "English", flag: "EN" },
  { id: "ru", label: "Русский", flag: "RU" },
];

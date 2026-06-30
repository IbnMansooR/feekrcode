import type { Loc } from "../content/types";

export type Track = "web" | "backend" | "system";

export interface LanguageDef {
  id: string;
  name: string;
  /** Qisqa tavsif (3 tilda) — kartalarda */
  tagline: Loc;
  /** 1 jumlali "bu nima" (generatsiya qilingan darslar uchun) */
  desc: Loc;
  color: string;
  glyph: string;
  track: Track;
  lessons: number;
  order: number;
}

/** Oxirgi 5 yilda eng ko'p ishlatilgan top 12 til. */
export const LANGUAGES: LanguageDef[] = [
  {
    id: "htmlcss", name: "HTML + CSS", color: "#e44d26", glyph: "</>", track: "web", lessons: 6, order: 1,
    tagline: { uz: "Veb poydevori", en: "Web foundation", ru: "Основа веба" },
    desc: {
      uz: "HTML sahifa skeletini, CSS esa uning ko'rinishini yaratadi.",
      en: "HTML builds the page skeleton, CSS makes it look good.",
      ru: "HTML создаёт каркас страницы, а CSS — её внешний вид.",
    },
  },
  {
    id: "javascript", name: "JavaScript", color: "#f7df1e", glyph: "JS", track: "web", lessons: 8, order: 2,
    tagline: { uz: "Brauzer tili", en: "The browser's language", ru: "Язык браузера" },
    desc: {
      uz: "Veb sahifalarni jonlantiradigan, interaktiv qiladigan til.",
      en: "The language that brings web pages to life and makes them interactive.",
      ru: "Язык, который оживляет веб-страницы и делает их интерактивными.",
    },
  },
  {
    id: "python", name: "Python", color: "#4b8bbe", glyph: "Py", track: "backend", lessons: 8, order: 3,
    tagline: { uz: "Universal til", en: "All-purpose language", ru: "Универсальный язык" },
    desc: {
      uz: "Oddiy sintaksisli, AI'dan avtomatlashtirishgacha ishlatiladigan til.",
      en: "A simple-syntax language used for everything from AI to automation.",
      ru: "Простой язык, используемый от ИИ до автоматизации.",
    },
  },
  {
    id: "sql", name: "SQL", color: "#00758f", glyph: "DB", track: "backend", lessons: 8, order: 4,
    tagline: { uz: "Ma'lumotlar bazasi", en: "Databases", ru: "Базы данных" },
    desc: {
      uz: "Ma'lumotlar bazasidan ma'lumot so'rash va boshqarish tili.",
      en: "The language for querying and managing databases.",
      ru: "Язык запросов и управления базами данных.",
    },
  },
  {
    id: "typescript", name: "TypeScript", color: "#3178c6", glyph: "TS", track: "web", lessons: 8, order: 5,
    tagline: { uz: "Tipli JavaScript", en: "Typed JavaScript", ru: "Типизированный JS" },
    desc: {
      uz: "Xatolarni oldindan tutadigan, tiplar qo'shilgan JavaScript.",
      en: "JavaScript with types that catch errors before they happen.",
      ru: "JavaScript с типами, ловящими ошибки заранее.",
    },
  },
  {
    id: "java", name: "Java", color: "#e76f00", glyph: "Jv", track: "backend", lessons: 8, order: 6,
    tagline: { uz: "Korporativ + Android", en: "Enterprise + Android", ru: "Корпоратив + Android" },
    desc: {
      uz: "Yirik tizimlar va Android ilovalari uchun ishonchli til.",
      en: "A reliable language for large systems and Android apps.",
      ru: "Надёжный язык для крупных систем и приложений Android.",
    },
  },
  {
    id: "csharp", name: "C#", color: "#9b4f96", glyph: "C#", track: "backend", lessons: 8, order: 7,
    tagline: { uz: ".NET va o'yinlar", en: ".NET and games", ru: ".NET и игры" },
    desc: {
      uz: "Microsoft .NET va Unity o'yin dvigateli tili.",
      en: "The language of Microsoft .NET and the Unity game engine.",
      ru: "Язык Microsoft .NET и игрового движка Unity.",
    },
  },
  {
    id: "cpp", name: "C++", color: "#00599c", glyph: "C+", track: "system", lessons: 8, order: 9,
    tagline: { uz: "Tizim + o'yin dvigatel", en: "Systems + game engines", ru: "Системы + движки" },
    desc: {
      uz: "Yuqori unumdorlik kerak bo'lgan tizim va o'yinlar tili.",
      en: "A high-performance language for systems and games.",
      ru: "Высокопроизводительный язык для систем и игр.",
    },
  },
  {
    id: "c", name: "C", color: "#5c6bc0", glyph: "C", track: "system", lessons: 8, order: 8,
    tagline: { uz: "Past daraja, OS", en: "Low-level, OS", ru: "Низкий уровень, ОС" },
    desc: {
      uz: "Operatsion tizimlar va qurilmalar yoziladigan asosiy til.",
      en: "The foundational language for operating systems and devices.",
      ru: "Базовый язык для операционных систем и устройств.",
    },
  },
  {
    id: "php", name: "PHP", color: "#777bb3", glyph: "ph", track: "backend", lessons: 8, order: 10,
    tagline: { uz: "Veb backend", en: "Web backend", ru: "Веб-бэкенд" },
    desc: {
      uz: "Saytlar serverini boshqaradigan til (WordPress, Laravel).",
      en: "The language that powers website servers (WordPress, Laravel).",
      ru: "Язык, управляющий серверами сайтов (WordPress, Laravel).",
    },
  },
  {
    id: "go", name: "Go", color: "#00add8", glyph: "Go", track: "backend", lessons: 8, order: 11,
    tagline: { uz: "Bulut + DevOps", en: "Cloud + DevOps", ru: "Облако + DevOps" },
    desc: {
      uz: "Tez va sodda — bulut xizmatlari va DevOps tili.",
      en: "Fast and simple — the language of cloud services and DevOps.",
      ru: "Быстрый и простой — язык облачных сервисов и DevOps.",
    },
  },
  {
    id: "rust", name: "Rust", color: "#dea584", glyph: "Rs", track: "system", lessons: 8, order: 12,
    tagline: { uz: "Xavfsiz tizim tili", en: "Safe systems language", ru: "Безопасный язык систем" },
    desc: {
      uz: "Xotira xavfsizligini kafolatlaydigan zamonaviy tizim tili.",
      en: "A modern systems language that guarantees memory safety.",
      ru: "Современный системный язык с гарантией безопасности памяти.",
    },
  },
];

export function getLanguage(id: string): LanguageDef | undefined {
  return LANGUAGES.find((l) => l.id === id);
}

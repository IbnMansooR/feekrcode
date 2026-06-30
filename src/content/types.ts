export type Locale = "uz" | "en" | "ru";
export type Loc = Record<Locale, string>;

/** Loc obyektidan joriy tilni oladi (uz — zaxira) */
export const pick = (loc: Loc, l: Locale): string => loc[l] ?? loc.uz;

/** Darsning bir bo'limi — "Bu nima?", "Nega kerak?" va h.k. */
export interface Section {
  icon?: string;
  heading: Loc;
  body: Loc;
}

/**
 * Dars yechimini XULQ-ATVOR (behavior) bo'yicha tekshirish spetsifikatsiyasi.
 *
 * Avvalgi tizim faqat matnni `solution` bilan aynan solishtirardi — bu ikki
 * tomonlama xato berardi: (1) to'g'ri, ammo boshqacha yozilgan yechim rad
 * etilardi; (2) `print("istalgan axlat")` kabi noto'g'ri javob qabul qilinardi.
 *
 * Endi tekshiruv kodning NATIJASIGA qaraydi: dastur ishga tushiriladi, chiqishi
 * (yoki HTML uchun render qilingan tuzilma) shartlarга solishtiriladi. Shu sabab
 * o'quvchi o'z ismini/uslubini yozsa ham, agar natija to'g'ri bo'lsa — o'tadi.
 */
export interface LessonCheck {
  /** Kod xatosiz ishga tushishi shart (ijro etiladigan tillar uchun; default: true) */
  mustRun?: boolean;
  /** Dastur chiqishi shu bo'laklarning HAMMASINI o'z ichiga olishi shart (registrsiz, bo'shliqqa bardoshli) */
  outputContains?: string[];
  /** Dastur chiqishi shunga aniq teng bo'lishi shart (normallashtirilgan) */
  outputEquals?: string;
  /** Dastur chiqishi shu regular-expression'ga mos kelishi shart */
  outputMatches?: string;
  /** Foydalanuvchi KODIDA shu bo'laklar bo'lishi shart (tushuncha qo'llanganini tekshirish, masalan "for") */
  sourceContains?: string[];
  /** HTML darslar uchun: render qilingan tuzilmada shu CSS-selektorlar bo'lishi shart */
  dom?: { selector: string; min?: number; text?: string }[];
  /** Bo'sh chiqishga ruxsat (faqat tuzilma muhim bo'lgan HTML/CSS darslari uchun) */
  allowEmptyOutput?: boolean;
}

export interface LessonContent {
  title: Loc;
  /** Qisqa kirish (hook) */
  intro: Loc;
  /** Pedagogik bo'limlar: nima / nega / nima qiladi / qayerda */
  sections: Section[];
  /** Amaliy vazifa matni */
  task: Loc;
  hint?: Loc;
  /**
   * Muharrirda BOSHIDA ko'rinadigan "iskala" (scaffold) — to'liq yechim EMAS,
   * balki tuzilma + `// TODO`. O'quvchi shu yerdan davom ettiradi. Bo'sh ham bo'lishi mumkin.
   */
  starterCode: string;
  /** To'liq to'g'ri yechim — "Yechimni ko'rsatish" va ghost-text uchun namuna. */
  solution: string;
  /** Yechimni tekshirish sharti. Berilmasa — `solution` bilan tolerant tuzilma solishtiruvi. */
  check?: LessonCheck;
  monacoLang: string;
  /** Natija paneli rejimi */
  preview: "html" | "js" | "none";
  xp: number;
}

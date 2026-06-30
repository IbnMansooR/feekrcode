import type { RunResult } from "./types";

/** Kompilyatsiya qilinadigan tillarni Wandbox API orqali ishga tushiramiz (online).
 *  (Ommaviy Piston API 2026-02 dan whitelist-only bo'ldi.)
 *
 *  ⚠️ Diqqat: bu funksiya foydalanuvchi kodini tashqi serverga (wandbox.org)
 *  yuboradi. Shu sabab chaqiruvchi (Lesson/WorkshopPlay) avval foydalanuvchidan
 *  rozilik so'raydi (settings.onlineRun). Bu yerda esa timeout va natija
 *  chegarasi qo'yamiz, toki javob kelmasa dars abadiy "…" holatida qotib qolmasin. */

const API = "https://wandbox.org/api";
const TIMEOUT_MS = 20000;
const OUT_CAP = 100_000;

/** Bizning til id → Wandbox "language" maydoni */
const LANG_FIELD: Record<string, string> = {
  java: "Java",
  csharp: "C#",
  cpp: "C++",
  c: "C",
  go: "Go",
  rust: "Rust",
  php: "PHP",
};

let compilerCache: Record<string, string> | null = null;

/** AbortController bilan timeout'li fetch — javob kelmasa ham ilib qolmaymiz. */
async function fetchT(url: string, init?: RequestInit): Promise<Response> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

/** Wandbox kompilyatorlar ro'yxatini olib, har til uchun birinchi mosini tanlaymiz */
async function getCompiler(langId: string): Promise<string | null> {
  if (!compilerCache) {
    const r = await fetchT(API + "/list.json");
    const list: any[] = await r.json();
    const map: Record<string, string> = {};
    for (const c of list) {
      const lang = c.language;
      // har til uchun faqat birinchisini (odatda eng yangisi) saqlaymiz
      const key = Object.keys(LANG_FIELD).find((k) => LANG_FIELD[k] === lang);
      if (key && !map[key]) map[key] = c.name;
    }
    compilerCache = map;
  }
  return compilerCache[langId] ?? null;
}

export async function runRemote(langId: string, code: string): Promise<RunResult> {
  // Kompilyatsiya tillari (Java/C++/C#/C/Go/Rust/PHP) brauzerda ishlamaydi — kod
  // tashqi serverga yuboriladi. Internet yo'q bo'lsa, 20s kutib qotib qolmasdan
  // darhol aniq xabar beramiz.
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return {
      output: "🌐 Bu til kodni ishga tushirish uchun internet talab qiladi. Hozir internet yo'q.",
      error: true,
    };
  }
  let compiler: string | null;
  try {
    compiler = await getCompiler(langId);
  } catch {
    compilerCache = null;
    return { output: "Ishga tushirish xizmatiga ulanib bo'lmadi (vaqt tugadi yoki internet yo'q).", error: true };
  }
  if (!compiler) return { output: `${langId} uchun kompilyator topilmadi.`, error: true };

  try {
    const res = await fetchT(API + "/compile.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ compiler, code, save: false }),
    });
    const data = await res.json();
    const parts = [data.compiler_error, data.program_output, data.program_error].filter(
      (x: string) => x && x.trim()
    );
    let out = parts.join("\n").trim();
    if (out.length > OUT_CAP) out = out.slice(0, OUT_CAP) + "\n… (natija qisqartirildi)";
    const failed = (data.status && data.status !== "0") || Boolean(data.compiler_error && !data.program_output);
    return { output: out || "(natija bo'sh)", error: failed };
  } catch (e: any) {
    const aborted = e?.name === "AbortError";
    return {
      output: aborted
        ? "Ishga tushirish xizmati javob bermadi (vaqt tugadi)."
        : "Ishga tushirishda xato: " + String(e?.message ?? e),
      error: true,
    };
  }
}

import type { LessonContent } from "../content/types";

/**
 * Dars yechimini tekshirish — XULQ-ATVOR (behavior) asosida.
 *
 * Eski tizim faqat foydalanuvchi kodini `solution` matni bilan AYNAN solishtirardi.
 * Bu ikki jiddiy xatoga olib kelardi:
 *   1) To'g'ri, ammo boshqacha yozilgan yechim ("x=5" vs "x = 5", izoh qo'shilgan,
 *      o'z ismini yozgan) — RAD etilardi (false-negative).
 *   2) `print("istalgan axlat")` kabi noto'g'ri javob — QABUL qilinardi, chunki
 *      satr ichi e'tiborga olinmasdi (false-positive).
 *
 * Yangi `evaluateLesson` kodning NATIJASIGA qaraydi: dastur ishga tushiriladi va
 * chiqishi (yoki HTML uchun render qilingan tuzilma) `LessonCheck` shartlarига
 * solishtiriladi. Shu sabab o'quvchi o'z uslubida yozsa ham, natija to'g'ri bo'lsa
 * — o'tadi; natija noto'g'ri bo'lsa — o'tmaydi.
 *
 * `check` berilmagan darslar uchun — `solution` bilan TOLERANT tuzilma solishtiruvi
 * (zaxira; operator atrofidagi bo'shliqqa bardoshli).
 */

export interface CheckInput {
  /** Foydalanuvchi yozgan manba kod */
  source: string;
  /** Dastur chiqishi (python/sql/js/remote uchun); HTML'da bo'lmaydi */
  output?: string;
  /** Ishga tushirishda xato bo'ldimi */
  error?: boolean;
  /** Tekshiruv paytida internet bormi (offline'da nafis degradatsiya uchun) */
  offline?: boolean;
}

export interface CheckResult {
  passed: boolean;
  /** O'tmasa — nima yetishmayotganini tushuntiruvchi sabablar (foydalanuvchiga ko'rsatish uchun) */
  reasons: string[];
}

/** Substring/teng solishtiruv uchun: registrsiz, barcha bo'shliqlar bitta probelga, trim. */
function loose(s: string): string {
  return (s ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}

/** Tuzilma zaxira solishtiruvi: qator tuzilmasini saqlaydi, qator ichidagi bo'shliqni
 *  butunlay olib tashlaydi (shunda `x=5` == `x = 5`), satr ichini va registrни e'tiborsiz qoldiradi. */
function structural(s: string): string {
  return (s ?? "")
    .replace(/"[^"]*"/g, '""')
    .replace(/'[^']*'/g, "''")
    .replace(/`[^`]*`/g, "``")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.replace(/\s+/g, "")) // qator ichidagi BARCHA bo'shliqni olib tashlaymiz
    .filter((line) => line.length > 0)
    .join("\n")
    .toLowerCase();
}

/** Eski API — tolerant tuzilma solishtiruvi (zaxira yo'l uchun saqlanadi). */
export function checkPass(userCode: string, solution: string): boolean {
  const u = structural(userCode);
  if (!u) return false;
  return u === structural(solution);
}

/** HTML manbasini (skript ishga tushirmasdan) tahlil qilib, selektorlarni tekshirish uchun. */
function parseHtml(source: string): Document | null {
  try {
    return new DOMParser().parseFromString(source, "text/html");
  } catch {
    return null;
  }
}

/**
 * Darsni xulq-atvor bo'yicha baholaydi.
 * Lesson view kodni ishga tushirib (output/error), so'ng buni chaqiradi.
 */
export function evaluateLesson(content: LessonContent, input: CheckInput): CheckResult {
  const source = input.source ?? "";
  const reasons: string[] = [];

  if (!source.trim()) {
    return { passed: false, reasons: ["Muharrir bo'sh — kodingizni yozing."] };
  }

  const c = content.check;

  // ── Zaxira yo'l: check yo'q bo'lsa, namuna yechim bilan tolerant tuzilma solishtiruvi.
  if (!c) {
    const ok = structural(source) === structural(content.solution ?? content.starterCode);
    return {
      passed: ok,
      reasons: ok ? [] : ["Kod kutilgan tuzilmaga mos kelmadi."],
    };
  }

  const out = input.output ?? "";
  const usableOutput = out.trim().length > 0;
  const wantsOutput = !!(c.outputEquals || c.outputContains || c.outputMatches);
  const offline = !!input.offline;

  // ── Manba kodidagi tushunchalar (run talab qilmaydi — offline ham ishlaydi) ──
  if (c.sourceContains) {
    const src = loose(source);
    for (const token of c.sourceContains) {
      if (!src.includes(loose(token))) {
        reasons.push(`Kodingizda \`${token}\` ishlatilishi kerak.`);
      }
    }
  }

  // ── HTML tuzilmasi (run talab qilmaydi — manbadan tahlil qilinadi) ──
  if (c.dom && content.preview === "html") {
    const doc = parseHtml(source);
    if (!doc) {
      reasons.push("HTML'ni o'qib bo'lmadi.");
    } else {
      for (const rule of c.dom) {
        const els = Array.from(doc.querySelectorAll(rule.selector));
        const min = rule.min ?? 1;
        if (els.length < min) {
          reasons.push(`Kamida ${min} ta \`${rule.selector}\` element bo'lishi kerak.`);
        } else if (rule.text) {
          const want = loose(rule.text);
          if (!els.some((el) => loose(el.textContent ?? "").includes(want))) {
            reasons.push(`\`${rule.selector}\` ichida "${rule.text}" matni bo'lishi kerak.`);
          }
        }
      }
    }
  }

  // ── Dastur natijasi (output) ──
  if (wantsOutput) {
    if (usableOutput) {
      if (c.outputEquals !== undefined && loose(out) !== loose(c.outputEquals)) {
        reasons.push(`Natija "${c.outputEquals}" bo'lishi kerak edi.`);
      }
      if (c.outputContains) {
        const lo = loose(out);
        for (const part of c.outputContains) {
          if (!lo.includes(loose(part))) {
            reasons.push(`Natijada "${part}" bo'lishi kerak.`);
          }
        }
      }
      if (c.outputMatches) {
        try {
          if (!new RegExp(c.outputMatches, "i").test(out)) {
            reasons.push("Natija kutilgan ko'rinishga mos kelmadi.");
          }
        } catch {
          /* yaroqsiz regex — e'tiborsiz */
        }
      }
    } else if (offline) {
      // Internet yo'q — kodni ishga tushirib natijani tekshirib bo'lmadi.
      // Agar boshqa (manba/DOM) tekshiruvlar bo'lsa — shularga tayanamiz; bo'lmasa
      // namuna yechim bilan tuzilma solishtiruvi (offline degradatsiya).
      if (!c.sourceContains && !c.dom) {
        if (structural(source) !== structural(content.solution ?? content.starterCode)) {
          reasons.push("Internet yo'q — kod ishga tushmadi va namuna yechimга mos kelmadi.");
        }
      }
    } else {
      reasons.push("Dastur kutilgan natijani bermadi.");
    }
  }

  // ── Ishga tushganda xato (faqat online'da; offline'da run umuman bo'lmaydi) ──
  // Bu hatto output talab qilinmagan (faqat sourceContains) darslarda ham xato
  // bergan kodning o'tib ketishini to'sadi.
  if (c.mustRun !== false && input.error === true && !offline) {
    const msg = "Kod xato bilan tugadi — avval xatoni tuzating.";
    if (!reasons.includes(msg)) reasons.push(msg);
  }

  return { passed: reasons.length === 0, reasons };
}

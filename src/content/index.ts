import { getLanguage, type LanguageDef } from "../data/languages";
import { MONACO_LANG, STARTER, PREVIEW_MODE } from "../data/lessons";
import { htmlcssLessons } from "./htmlcss";
import { javascriptLessons } from "./javascript";
import { pythonLessons } from "./python";
import { sqlLessons } from "./sql";
import { typescriptLessons } from "./typescript";
import { javaLessons } from "./java";
import { csharpLessons } from "./csharp";
import { cppLessons } from "./cpp";
import { cLessons } from "./c";
import { phpLessons } from "./php";
import { goLessons } from "./go";
import { rustLessons } from "./rust";
import type { LessonContent } from "./types";

/** Qo'lda + parallel agentlar yozgan chuqur darslar (12 til, 3 tilda). */
const AUTHORED: Record<string, LessonContent[]> = {
  htmlcss: htmlcssLessons,
  javascript: javascriptLessons,
  python: pythonLessons,
  sql: sqlLessons,
  typescript: typescriptLessons,
  java: javaLessons,
  csharp: csharpLessons,
  cpp: cppLessons,
  c: cLessons,
  php: phpLessons,
  go: goLessons,
  rust: rustLessons,
};

export interface LessonMeta {
  id: string;
  index: number;
  xp: number;
  authored: boolean;
}

export function getLessonList(langId: string): LessonMeta[] {
  const lang = getLanguage(langId);
  if (!lang) return [];
  return Array.from({ length: lang.lessons }, (_, i) => {
    const authored = AUTHORED[langId]?.[i];
    return {
      id: `${langId}-${i + 1}`,
      index: i + 1,
      xp: authored?.xp ?? 20 + (i % 5) * 5,
      authored: Boolean(authored),
    };
  });
}

export function getLessonContent(langId: string, lessonId: string): LessonContent | undefined {
  const lang = getLanguage(langId);
  if (!lang) return undefined;
  const idx = parseInt(lessonId.split("-").pop() ?? "", 10);
  // Diapazon tashqarisidagi (masalan python-99999) "dars"lar render bo'lib
  // soxta XP/progress bermasligi uchun chegaralaymiz.
  if (!Number.isInteger(idx) || idx < 1 || idx > lang.lessons) return undefined;
  const authored = AUTHORED[langId]?.[idx - 1];
  if (authored) return authored;
  return generated(lang, idx);
}

/** Hali yozilmagan darslar uchun 3 tilli, tuzilmali zaxira mazmun. */
function generated(lang: LanguageDef, idx: number): LessonContent {
  const name = lang.name;
  return {
    title: {
      uz: `${name} — ${idx}-dars`,
      en: `${name} — lesson ${idx}`,
      ru: `${name} — урок ${idx}`,
    },
    intro: {
      uz: `${lang.tagline.uz}. Bu darsda ${name} tilining navbatdagi mavzusini o'rganamiz.`,
      en: `${lang.tagline.en}. In this lesson we explore the next ${name} topic.`,
      ru: `${lang.tagline.ru}. В этом уроке мы изучим следующую тему ${name}.`,
    },
    sections: [
      {
        icon: "ti-help-circle",
        heading: { uz: "Bu nima?", en: "What is it?", ru: "Что это?" },
        body: lang.desc,
      },
      {
        icon: "ti-bulb",
        heading: { uz: "Nega kerak?", en: "Why do you need it?", ru: "Зачем это нужно?" },
        body: {
          uz: `${name} — oxirgi yillarda eng ko'p ishlatilgan tillardan biri, shuning uchun uni bilish ish topishda katta afzallik.`,
          en: `${name} is one of the most-used languages of recent years, so knowing it is a big advantage when looking for work.`,
          ru: `${name} — один из самых популярных языков последних лет, поэтому его знание — большое преимущество при поиске работы.`,
        },
      },
      {
        icon: "ti-tool",
        heading: { uz: "Nimalar qila oladi?", en: "What can it do?", ru: "Что он умеет?" },
        body: {
          uz: `Ushbu darsda ${name} sintaksisini amaliyotda qo'llab, kichik vazifani hal qilasiz.`,
          en: `In this lesson you'll apply ${name} syntax in practice and solve a small task.`,
          ru: `В этом уроке вы примените синтаксис ${name} на практике и решите небольшую задачу.`,
        },
      },
      {
        icon: "ti-world",
        heading: { uz: "Qayerda ishlatamiz?", en: "Where do we use it?", ru: "Где мы это используем?" },
        body: lang.desc,
      },
    ],
    task: {
      uz: `Muharrirda ${name} kodini yozib, "Ishga tushirish"ni bosing. To'liq amaliy mazmun Bosqich 5–7'da qo'shiladi.`,
      en: `Write ${name} code in the editor and press "Run". Full hands-on content arrives in Stages 5–7.`,
      ru: `Напишите код ${name} в редакторе и нажмите «Запуск». Полный практический контент появится на этапах 5–7.`,
    },
    starterCode: STARTER[lang.id] ?? `// ${name}\n`,
    solution: STARTER[lang.id] ?? `// ${name}\n`,
    monacoLang: MONACO_LANG[lang.id] ?? "plaintext",
    preview: PREVIEW_MODE[lang.id] ?? "none",
    xp: 20 + (idx % 5) * 5,
  };
}

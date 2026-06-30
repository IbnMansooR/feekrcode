export type RunResult = { output: string; error?: boolean };

export type RunMode = "iframe-html" | "iframe-js" | "python" | "sql" | "remote";

/** Til id'sidan ishga tushirish rejimini aniqlaydi */
export function getRunMode(langId: string): RunMode {
  if (langId === "htmlcss") return "iframe-html";
  if (langId === "javascript" || langId === "typescript") return "iframe-js";
  if (langId === "python") return "python";
  if (langId === "sql") return "sql";
  return "remote";
}

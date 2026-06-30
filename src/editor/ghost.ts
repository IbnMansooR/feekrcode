import * as monaco from "monaco-editor";

/**
 * Shell/Kali uslubidagi "ghost text" avtoto'ldirish.
 * Joriy darsning to'g'ri kodi (target) muharrirda shaffof ko'rinadi;
 * foydalanuvchi yozgani bilan taklif qisqaradi, Tab bilan qabul qilinadi.
 */

let target = "";

export function setGhostTarget(code: string) {
  target = code ?? "";
}

const LANGS = [
  "html", "javascript", "python", "sql", "typescript", "java",
  "csharp", "cpp", "c", "php", "go", "rust", "plaintext",
];

let registered = false;

export function registerGhost() {
  if (registered) return;
  registered = true;

  const provider: monaco.languages.InlineCompletionsProvider = {
    provideInlineCompletions(model, position) {
      if (!target) return { items: [] };
      const full = model.getValue();
      const offset = model.getOffsetAt(position);
      // Faqat kursor matn oxirida bo'lsa (shell kabi) va yozilgani target boshiga mos kelsa
      if (offset !== full.length) return { items: [] };
      if (!target.startsWith(full)) return { items: [] };
      const remainder = target.slice(full.length);
      if (!remainder) return { items: [] };
      // Butun yechimni bir Tab bilan bermaymiz — faqat JORIY QATORning qolganini
      // taklif qilamiz. Shunda foydalanuvchi satrma-satr o'zi yozadi/qabul qiladi,
      // "bir Tab bilan hamma narsa" tarzida darsni o'ylamasdan tugatib bo'lmaydi.
      const nl = remainder.indexOf("\n");
      const lineRemainder = nl === -1 ? remainder : remainder.slice(0, nl);
      if (!lineRemainder) return { items: [] };
      return {
        items: [
          {
            insertText: lineRemainder,
            range: new monaco.Range(
              position.lineNumber,
              position.column,
              position.lineNumber,
              position.column
            ),
          },
        ],
      };
    },
    freeInlineCompletions() {
      /* noop */
    },
  };

  for (const lang of LANGS) {
    monaco.languages.registerInlineCompletionsProvider(lang, provider);
  }
}

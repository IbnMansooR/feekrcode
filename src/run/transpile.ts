/** TypeScript'ni brauzerda ishga tushirish uchun JS'ga aylantiramiz.
 *  typescript paketi faqat kerak bo'lganda yuklanadi (dynamic import). */
export async function transpileTS(code: string): Promise<string> {
  try {
    const ts = await import("typescript");
    const res = ts.transpileModule(code, {
      compilerOptions: {
        target: ts.ScriptTarget.ES2019,
        module: ts.ModuleKind.None,
      },
    });
    return res.outputText;
  } catch {
    // Transpiler yuklanmasa — kodni o'zidek qaytaramiz
    return code;
  }
}

/** Monaco muharriri til id'lari va boshlang'ich kodlar.
 *  Dars mazmuni endi src/content/ ichida (trilingual). */

export const MONACO_LANG: Record<string, string> = {
  htmlcss: "html",
  javascript: "javascript",
  python: "python",
  sql: "sql",
  typescript: "typescript",
  java: "java",
  csharp: "csharp",
  cpp: "cpp",
  c: "c",
  php: "php",
  go: "go",
  rust: "rust",
};

export const STARTER: Record<string, string> = {
  htmlcss: "<h1>Salom, dunyo!</h1>\n<p>Bu mening birinchi sahifam.</p>",
  javascript: 'console.log("Salom, dunyo!");',
  python: 'print("Salom, dunyo!")',
  sql: "SELECT 'Salom, dunyo!' AS xabar;",
  typescript: 'const xabar: string = "Salom, dunyo!";\nconsole.log(xabar);',
  java: 'class Main {\n  public static void main(String[] args) {\n    System.out.println("Salom, dunyo!");\n  }\n}',
  csharp: 'using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine("Salom, dunyo!");\n  }\n}',
  cpp: '#include <iostream>\nint main() {\n  std::cout << "Salom, dunyo!";\n  return 0;\n}',
  c: '#include <stdio.h>\nint main() {\n  printf("Salom, dunyo!");\n  return 0;\n}',
  php: '<?php\necho "Salom, dunyo!";',
  go: 'package main\nimport "fmt"\nfunc main() {\n  fmt.Println("Salom, dunyo!")\n}',
  rust: 'fn main() {\n    println!("Salom, dunyo!");\n}',
};

/** Til preview rejimi — qaysi tillarni brauzerda jonli ko'rsata olamiz */
export const PREVIEW_MODE: Record<string, "html" | "js" | "none"> = {
  htmlcss: "html",
  javascript: "js",
  typescript: "js",
};

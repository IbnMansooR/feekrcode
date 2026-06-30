// Feekr Code — izolyatsiyalangan ishga tushiruvchi (Web Worker).
//
// Nega Worker? Foydalanuvchi ixtiyoriy Python/SQL kod yozadi. Uni asosiy
// oqimda (renderer) ishga tushirsak:
//   • `while True: pass` butun ilovani abadiy muzlatadi (bekor qilib bo'lmaydi);
//   • Pyodide `import js` orqali `window`/IndexedDB/DOM'ga chiqib XP'ni aldaydi
//     yoki ma'lumot o'g'irlaydi.
// Worker'da esa: (1) cheksiz tsiklni asosiy oqim `worker.terminate()` bilan
// uzadi; (2) `import js` faqat Worker'ning bo'sh global doirasiga (DOM yo'q,
// window yo'q, app holati yo'q) chiqadi. Shu bilan ikkala muammo ham yopiladi.
//
// Bu fayl klassik (iife) worker — tashqi CDN skriptlari `importScripts` bilan
// yuklanadi, shuning uchun ES import ishlatmaymiz.

const OUT_CAP = 100_000; // natija matni uzunligi chegarasi (xotira portlashidan saqlaydi)
const ROW_CAP = 2000; // SQL natijasidagi qatorlar chegarasi

// Pyodide va sql.js LOKAL bundle qilingan (public/ → dist/) — ilova internetsiz
// (offline) ishlashi uchun. Worker dist/assets/ ichida, fayllar dist/pyodide/ va
// dist/sqljs/ ichida bo'ladi, shu sabab worker manzilidan nisbatan ../ bilan topamiz.
const PY_BASE = new URL("../pyodide/", self.location.href).href;
const SQL_BASE = new URL("../sqljs/", self.location.href).href;

/** Darslar uchun namuna baza — SELECT/WHERE/JOIN/GROUP BY darslar shu jadvallar bilan ishlaydi. */
const SEED = `
CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, city TEXT, email TEXT);
INSERT INTO users (name, age, city, email) VALUES
 ('Ali', 25, 'Toshkent', 'ali@mail.uz'),
 ('Vali', 30, 'Samarqand', 'vali@mail.uz'),
 ('Hasan', 22, 'Buxoro', 'hasan@mail.uz'),
 ('Gulnora', 28, 'Toshkent', 'gulnora@mail.uz'),
 ('Dilnoza', 35, 'Samarqand', 'dilnoza@mail.uz');
CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, price REAL, category TEXT);
INSERT INTO products (name, price, category) VALUES
 ('Olma', 1.5, 'Meva'), ('Non', 0.8, 'Non'), ('Sut', 2.0, 'Ichimlik'),
 ('Choy', 3.5, 'Ichimlik'), ('Guruch', 4.0, 'Don');
CREATE TABLE orders (id INTEGER PRIMARY KEY, user_id INTEGER, product_id INTEGER, quantity INTEGER);
INSERT INTO orders (user_id, product_id, quantity) VALUES
 (1, 1, 3), (1, 2, 2), (2, 3, 1), (3, 1, 5), (4, 4, 2), (2, 5, 1);
`;

const G = self as any;

let pyPromise: Promise<any> | null = null;
let sqlPromise: Promise<any> | null = null;

function cap(s: string): string {
  return s.length > OUT_CAP ? s.slice(0, OUT_CAP) + "\n… (natija qisqartirildi)" : s;
}

/** Qiymatni console uslubida matnga aylantiradi (obyekt → JSON). */
function fmtVal(x: any): string {
  try {
    return typeof x === "object" && x !== null ? JSON.stringify(x) : String(x);
  } catch {
    return String(x);
  }
}

/**
 * JavaScript (va transpil qilingan TypeScript) kodini WORKER ichida ishga tushiradi.
 * Nega worker? iframe'da `while(1){}` cheksiz tsiklini uzib bo'lmasdi; worker'da esa
 * asosiy oqim 8 soniyadan keyin `terminate()` qiladi. Worker izolyatsiyalangan —
 * DOM, window yoki app holati yo'q. `console.*` ushlanib, matn sifatida qaytariladi.
 */
function runJS(code: string, post: (m: any) => void) {
  post({ type: "exec" }); // ijro boshlandi — asosiy oqim shu paytdan 8s timeout boshlaydi
  let out = "";
  const append = (s: string) => {
    if (out.length < OUT_CAP) out += s;
  };
  const line = (...a: any[]) => append(a.map(fmtVal).join(" ") + "\n");
  const fakeConsole = { log: line, info: line, warn: line, error: line, debug: line };
  try {
    // "use strict" — sirpanib ketgan global'larni oldini oladi. console — yagona berilgan kirish.
    const fn = new Function("console", '"use strict";\n' + code);
    fn(fakeConsole);
    post({ type: "result", output: cap(out.trim()) || "(natija bo'sh)", error: false });
  } catch (e: any) {
    post({ type: "result", output: cap((out ? out + "\n" : "") + String(e?.message ?? e)), error: true });
  }
}

async function getPy(post: (m: any) => void): Promise<any> {
  if (!pyPromise) {
    post({ type: "status", text: "Python muhiti yuklanmoqda (bir martalik)…" });
    G.importScripts(PY_BASE + "pyodide.js");
    pyPromise = G.loadPyodide({ indexURL: PY_BASE });
  }
  return pyPromise;
}

async function getSQL(post: (m: any) => void): Promise<any> {
  if (!sqlPromise) {
    post({ type: "status", text: "SQL muhiti yuklanmoqda (bir martalik)…" });
    G.importScripts(SQL_BASE + "sql-wasm.js");
    sqlPromise = G.initSqlJs({ locateFile: (f: string) => SQL_BASE + f });
  }
  return sqlPromise;
}

async function runPython(code: string, post: (m: any) => void) {
  let py: any;
  try {
    py = await getPy(post);
  } catch {
    pyPromise = null;
    post({ type: "result", output: "Python muhitini yuklab bo'lmadi — internetga ulanishni tekshiring.", error: true });
    return;
  }
  // Muhit tayyor — endi foydalanuvchi kodi ishga tushadi (asosiy oqim shu paytdan timeout boshlaydi).
  post({ type: "exec" });
  let out = "";
  const append = (s: string) => {
    if (out.length < OUT_CAP) out += s;
  };
  try {
    py.setStdout({ batched: append });
    py.setStderr({ batched: append });
    await py.runPythonAsync(code);
  } catch (e: any) {
    post({ type: "result", output: cap((out ? out + "\n" : "") + String(e?.message ?? e)), error: true });
    return;
  }
  post({ type: "result", output: cap(out.trim()) || "(natija bo'sh)", error: false });
}

async function runSQL(code: string, post: (m: any) => void) {
  let SQL: any;
  try {
    SQL = await getSQL(post);
  } catch {
    sqlPromise = null;
    post({ type: "result", output: "SQL muhitini yuklab bo'lmadi — internetga ulanishni tekshiring.", error: true });
    return;
  }
  post({ type: "exec" });
  const db = new SQL.Database();
  try {
    if (!/create\s+table/i.test(code)) db.run(SEED);
    const results = db.exec(code);
    if (!results.length) {
      post({ type: "result", output: "(bajarildi — qaytariladigan natija yo'q)", error: false });
      return;
    }
    let out = "";
    for (const res of results) {
      out += res.columns.join(" | ") + "\n";
      out += res.columns.map(() => "---").join(" | ") + "\n";
      let n = 0;
      for (const row of res.values) {
        if (n++ >= ROW_CAP) {
          out += `… (${res.values.length - ROW_CAP} qator yashirildi)\n`;
          break;
        }
        out += row.map((v: any) => (v === null ? "NULL" : String(v))).join(" | ") + "\n";
      }
      out += "\n";
    }
    post({ type: "result", output: cap(out.trim()), error: false });
  } catch (e: any) {
    post({ type: "result", output: String(e?.message ?? e), error: true });
  } finally {
    db.close();
  }
}

G.onmessage = (e: MessageEvent) => {
  const { id, kind, code } = (e.data || {}) as { id: number; kind: string; code: string };
  const post = (m: any) => G.postMessage({ id, ...m });
  if (kind === "python") runPython(code, post);
  else if (kind === "sql") runSQL(code, post);
  else if (kind === "js") runJS(code, post);
};

import type { RunResult } from "./types";

// Izolyatsiyalangan ishga tushiruvchining asosiy-oqim boshqaruvchisi.
// Worker'ni boshqaradi, ENVIRONMENT yuklash uchun uzoq, KOD bajarish uchun
// qisqa timeout qo'yadi va kerak bo'lsa `terminate()` bilan majburan to'xtatadi.

const EXEC_TIMEOUT_MS = 8000; // foydalanuvchi kodi shu vaqtdan oshsa — cheksiz tsikl deb to'xtatamiz
const LOAD_TIMEOUT_MS = 120000; // birinchi yuklashda Pyodide ~10MB yuklanadi (sekin internetga zaxira)

let worker: Worker | null = null;
let seq = 0;

interface Active {
  id: number;
  resolve: (r: RunResult) => void;
  onStatus?: (s: string) => void;
  loadTimer: ReturnType<typeof setTimeout> | null;
  execTimer: ReturnType<typeof setTimeout> | null;
}
let active: Active | null = null;

function spawn(): Worker {
  const w = new Worker(new URL("./sandbox.worker.ts", import.meta.url));
  w.onmessage = (e) => onMsg(e.data);
  w.onerror = () => finish({ output: "Ishga tushirish muhitida kutilmagan xato.", error: true }, true);
  return w;
}

function getWorker(): Worker {
  if (!worker) worker = spawn();
  return worker;
}

function clearTimers(a: Active) {
  if (a.loadTimer) clearTimeout(a.loadTimer);
  if (a.execTimer) clearTimeout(a.execTimer);
}

/** Joriy ishni yakunlaydi. hard=true bo'lsa worker'ni butunlay o'ldiradi (cheksiz tsikldan keyin). */
function finish(r: RunResult, hard = false) {
  const a = active;
  active = null;
  if (a) {
    clearTimers(a);
    a.resolve(r);
  }
  if (hard && worker) {
    worker.terminate();
    worker = null;
  }
}

function onMsg(m: any) {
  if (!active || !m || m.id !== active.id) return;
  if (m.type === "status") {
    active.onStatus?.(m.text);
    return;
  }
  if (m.type === "exec") {
    // Muhit yuklandi — yuklash timeout'ini olib, bajarish timeout'ini boshlaymiz.
    if (active.loadTimer) clearTimeout(active.loadTimer);
    active.loadTimer = null;
    active.onStatus?.("");
    active.execTimer = setTimeout(
      () =>
        finish(
          { output: "⏱ Vaqt tugadi — kod 8 soniyada tugamadi (cheksiz tsikl?). Ishga tushirish to'xtatildi.", error: true },
          true
        ),
      EXEC_TIMEOUT_MS
    );
    return;
  }
  if (m.type === "result") {
    finish({ output: m.output, error: Boolean(m.error) });
    return;
  }
}

function run(kind: "python" | "sql" | "js", code: string, onStatus?: (s: string) => void): Promise<RunResult> {
  // Bir vaqtda bitta ish; oldingisi qolgan bo'lsa to'xtatamiz.
  if (active) stopRun();
  return new Promise<RunResult>((resolve) => {
    const w = getWorker();
    const id = ++seq;
    const loadTimer = setTimeout(
      () => finish({ output: "Ishga tushirish muhiti yuklanmadi — internetga ulanishni tekshiring.", error: true }, true),
      LOAD_TIMEOUT_MS
    );
    active = { id, resolve, onStatus, loadTimer, execTimer: null };
    w.postMessage({ id, kind, code });
  });
}

/** Python kodini izolyatsiyalangan worker'da ishga tushiradi (timeout + bekor qilish bilan). */
export function runPython(code: string, onStatus?: (s: string) => void): Promise<RunResult> {
  return run("python", code, onStatus);
}

/** SQL'ni izolyatsiyalangan worker'da ishga tushiradi. */
export function runSQL(code: string): Promise<RunResult> {
  return run("sql", code);
}

/** JavaScript/TypeScript(transpil) kodini izolyatsiyalangan worker'da ishga tushiradi
 *  (8s timeout — `while(1){}` ilovani muzlatmaydi). */
export function runJS(code: string): Promise<RunResult> {
  return run("js", code);
}

/** "To'xtatish" tugmasi uchun — joriy ishni majburan uzadi. */
export function stopRun(): boolean {
  if (!active) return false;
  finish({ output: "⏹ To'xtatildi.", error: true }, true);
  return true;
}

/** Hozir biror kod ishlayaptimi? */
export function isRunning(): boolean {
  return active !== null;
}

const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

/** Tashqi havola xavfsizmi — faqat http/https tizim brauzerida ochiladi.
 *  smb:, file:, va boshqa OS protokollari (NTLM sızması, fayl ochish) bloklanadi. */
function isSafeExternal(url) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

function applyGuards(contents) {
  // window.open(...) → faqat xavfsiz http(s) havolani tashqarida ochamiz, qolganini rad.
  contents.setWindowOpenHandler(({ url }) => {
    if (isSafeExternal(url)) shell.openExternal(url);
    return { action: "deny" };
  });
  // Ilovani tashqi saytga "navigatsiya qilib ketish"ni to'samiz (faqat o'z file:// sahifalari).
  contents.on("will-navigate", (e, url) => {
    if (!url.startsWith("file://")) e.preventDefault();
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 940,
    minHeight: 600,
    backgroundColor: "#05080d",
    autoHideMenuBar: true,
    title: "Feekr Code",
    icon: path.join(__dirname, "..", "build", "icon.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      // DevTools faqat ishlab chiqishda — paketlangan build'da ochiq global'lar/aldash yo'q.
      devTools: !app.isPackaged,
      // Lokal ilova: file:// ostida Monaco workerlari va CDN (Pyodide/sql.js) yuklanishi
      // uchun webSecurity o'chirilgan. Qo'shimcha himoya: index.html'dagi CSP (connect-src
      // faqat ishonchli CDN'lar), preview iframe'dagi `default-src 'none'` CSP, va kod
      // ijrosining izolyatsiyalangan Web Worker'ga ko'chirilishi.
      // To'liq yopish (webSecurity:true) uchun keyingi qadam — Pyodide/sql.js'ni
      // lokal bundle qilish.
      webSecurity: false,
    },
  });

  win.loadFile(path.join(__dirname, "..", "dist", "index.html"));
  // Eslatma: himoyalar 'web-contents-created' hook orqali qo'llanadi (u asosiy
  // oynani ham qamrab oladi), shu sabab bu yerda qayta chaqirmaymiz.
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Har qanday yangi web-contents'ga (iframe/preview) ham bir xil himoyani qo'llaymiz.
app.on("web-contents-created", (_e, contents) => {
  applyGuards(contents);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

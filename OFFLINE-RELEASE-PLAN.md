# Feekr Code — To'liq Offline + Relizga Tayyor Qilish (Claude uchun topshiriq)

> Bu faylni Claude o'qiydi. Maqsad: ilovani **internetsiz (offline)** to'liq ishlaydigan va
> **muammosiz tarqatiladigan** holatga keltirish. Quyida aniq vazifalar, fayllar, "tuzoqlar"
> (gotchas) va qabul qilish mezonlari (acceptance criteria) berilgan.

## 0. Hozirgi holat (kontekst)
- Electron + React + Vite + TypeScript ilova. 12 dasturlash tilini o'rgatadi.
- Kod ijrosi izolyatsiyalangan **Web Worker**da (`src/run/sandbox.worker.ts`), timeout + "To'xtatish" bilan.
- **Hozir internetga bog'liq joylar:**
  1. **Pyodide** (Python) — `cdn.jsdelivr.net`dan yuklanadi (`sandbox.worker.ts` ichidagi `PY_BASE`).
  2. **sql.js** (SQL) — `cdnjs.cloudflare.com`dan (`SQL_BASE`).
  3. **Wandbox** (Java/C++/C#/C/Go/Rust/PHP) — `wandbox.org/api`ga kod yuboradi (`src/run/piston.ts`).
- Monaco muharriri **allaqachon lokal** (`src/monaco-setup.ts`), internet talab qilmaydi.
- Paketlash: NSIS installer (`package.json` → `build.nsis`), `npm run dist`.

## ⚠️ Muhim haqiqat (avval qaror qiling)
**HTML/CSS, JavaScript, TypeScript, Python, SQL** — bularni to'liq offline qilish mumkin.
**Java/C++/C#/C/Go/Rust/PHP (7 ta kompilyatsiya tili)** — bularni offline ishlatib bo'lmaydi
(brauzerda C++/Java kompilyatorini yuritish ~gigabaytlik WASM talab qiladi, amaliy emas).
Shuning uchun kompilyatsiya tillari uchun **eng yaxshi yechim**: internet yo'q bo'lsa "Bu til
internet talab qiladi" deb aniq xabar ko'rsatish (ijroni bloklash). Buni 1.4-bandda hal qilamiz.

---

## 1. ASOSIY ISH — Offline qilish

### 1.1. Pyodide'ni (Python) lokal joylashtirish
1. `npm i -D pyodide@0.26.2` (yoki GitHub'dan `pyodide-0.26.2.tar.bz2`).
2. Quyidagi fayllarni `public/pyodide/` ichiga nusxalang (node_modules/pyodide dan):
   `pyodide.js`, `pyodide.asm.js`, `pyodide.asm.wasm`, `python_stdlib.zip`, `pyodide-lock.json`.
   (Faqat shular yetarli — numpy/pandas kabi paketlar shart emas. ~15-20 MB.)
3. `src/run/sandbox.worker.ts` da CDN URL'ini lokalga o'zgartiring:
   ```ts
   // CDN o'rniga — worker faylidan nisbatan dist/pyodide/ ga
   const PY_BASE = new URL("../pyodide/", self.location.href).href;
   ```
   (Worker `dist/assets/`da, Pyodide fayllari `dist/pyodide/`da bo'ladi.)

### 1.2. sql.js'ni (SQL) lokal joylashtirish
1. `npm i -D sql.js@1.10.3`.
2. `node_modules/sql.js/dist/`dan `sql-wasm.js` + `sql-wasm.wasm` ni `public/sqljs/` ga nusxalang.
3. `src/run/sandbox.worker.ts` da:
   ```ts
   const SQL_BASE = new URL("../sqljs/", self.location.href).href;
   ```
   `locateFile: (f) => SQL_BASE + f` allaqachon to'g'ri ishlaydi.

### 1.3. 🔴 KRITIK TUZOQ — `asar` va WASM
Vite `public/`ni `dist/` ga ko'chiradi, `dist/**/*` esa installerga kiradi — yaxshi.
**LEKIN** electron-builder fayllarni `app.asar` ichiga qadoqlaydi va renderer/worker `fetch`/`importScripts`
orqali `.wasm`/`.zip` ni asar ichidan o'qiganda muammo bo'lishi mumkin.
**Yechim** (`package.json` → `build` ichiga):
```json
"asarUnpack": ["**/pyodide/**", "**/sqljs/**"]
```
Agar baribir yuklanmasa — eng ishonchli zaxira: `"asar": false`.
Buni albatta haqiqiy o'rnatilgan ilovada tekshiring (3-bo'lim).

### 1.4. Kompilyatsiya tillari — offline'da aniq xabar
`src/run/piston.ts` (yoki chaqiruvchi `Lesson.tsx`/`WorkshopPlay.tsx`)da:
- Ishga tushirishdan oldin `if (!navigator.onLine)` ni tekshiring; offline bo'lsa darhol
  "Bu til kodni ishga tushirish uchun internet talab qiladi" deb qaytaring (20s timeout kutmasdan).
- (Ixtiyoriy, sifatliroq) Bu tillar uchun darsда "kutilgan natija"ni oldindan ko'rsatib,
  offline'da o'qish/o'rganishni davom ettirish imkonini bering.

### 1.5. (Tavsiya, lekin majburiy emas) Xavfsizlikni mustahkamlash
Hozir `electron/main.cjs`da `webSecurity:false` (oldin CDN yuklash uchun kerak edi). Hammasi
lokal bo'lgach buni yopish mumkin:
- **Eng to'g'ri yo'l:** maxsus `app://` protokol ro'yxatdan o'tkazib (Electron `protocol.handle`),
  ilovani `file://` o'rniga `app://` orqali yuklang, so'ng `webSecurity:true` qo'ying.
  Bu lokal `fetch`/CSP'ni barqaror qiladi.
- `index.html` CSP'dan `cdn.jsdelivr.net` va `cdnjs.cloudflare.com` ni olib tashlang
  (`'wasm-unsafe-eval'`, `blob:`, `worker-src 'self' blob:` qoladi). Kompilyatsiya tillari
  online qolsa, `connect-src`da faqat `https://wandbox.org` qoldiring.
- Agar `app://` murakkab bo'lsa — `webSecurity:false` qolsa ham offline ishlaydi; bu xavfsizlik
  yaxshilanishi, offlinening sharti emas.

---

## 2. RELIZ MUAMMOLARINI YOPISH (boshqa balolar)

### 2.1. SmartScreen / "Unknown publisher" ogohlantirishi
Installer imzolanmagan → Windows "noma'lum nashriyot" deb qo'rqitadi. Variantlar:
- **To'g'ri yechim:** Code-signing sertifikati sotib olish (OV ~$100-200/yil yoki EV) va
  `package.json` `build.win.signtoolOptions` orqali imzolash.
- Vaqtincha: foydalanuvchilarga "More info → Run anyway" deyishni tushuntirish.

### 2.2. `.exe` ikonasi (rcedit / winCodeSign tuzog'i)
Bu mashinada `npm run dist` `winCodeSign`ni ocholmadi (Windows "symbolic link" huquqi yo'q),
shuning uchun `npm run dist:nosign` ishlatildi va ichki `Feekr Code.exe` standart Electron
ikonasida qoldi. **To'g'rilash:** Windows **Developer Mode**ni yoqing (Sozlamalar → Dasturchilar
uchun) yoki terminalni **Administrator** sifatida oching, so'ng oddiy `npm run dist` — rcedit
Feekr ikonasini joylaydi. (`dist:nosign` faqat zaxira.)

### 2.3. Offline UX — yuklanish va xatolar
- Pyodide/sql.js birinchi yuklanishida (lokal bo'lsa ham bir-ikki soniya) status matni ko'rinsin
  (allaqachon bor). Xato bo'lsa tushunarli xabar bersin.
- `navigator.onLine` bilan kompilyatsiya tillarida aniq xabar (1.4).

### 2.4. `release/` papkasini tozalash
`release/` ichida eski portable `Feekr Code.exe` (145 MB, Jun 24) yotibdi — chalkashmaslik uchun
o'chiring; faqat yangi `Feekr Code Setup <version>.exe` qolsin.

---

## 3. VERIFIKATSIYA — Acceptance Criteria (MAJBURIY, haqiqiy sinov)
> Eng muhim QA qadami: kodni o'qish emas, ilovani **haqiqatan ishga tushirib** sinash.

1. `npm run build` toza o'tadi (tsc + vite, xatosiz).
2. Installer yasaladi: `npm run dist` → `release/Feekr Code Setup <ver>.exe`.
3. **Toza muhitda sinov** (boshqa kompyuter yoki Windows Sandbox/VM, dev vositalarisiz):
   - Installer ochiladi, EULA ko'rinadi, o'rnatish joyi tanlanadi, o'rnatiladi, ilova ochiladi.
4. **OFFLINE sinov (internetni o'chiring / Wi-Fi uzing):**
   - [ ] Ilova ochiladi, Boot → Home ishlaydi.
   - [ ] HTML/CSS darsi: preview ko'rinadi.
   - [ ] JavaScript darsi: `console.log` natijasi chiqadi.
   - [ ] TypeScript darsi: ishlaydi.
   - [ ] **Python darsi:** `print("salom")` → natija chiqadi (Pyodide lokaldan yuklanadi).
   - [ ] **SQL darsi:** `SELECT ...` → jadval chiqadi (sql.js lokaldan).
   - [ ] Kompilyatsiya tili (masalan C++): "internet talab qiladi" degan **aniq xabar** chiqadi
         (uzoq kutib qotib qolmaydi).
   - [ ] `while True: pass` (Python) → ilova muzlamaydi, "To'xtatish" yoki 8s timeout ishlaydi.
5. **Online sinov (internet bilan):** kompilyatsiya tillari (rozilik so'ragach) ishlaydi.
6. Ilova ikonasi (Developer Mode bilan qurilgan bo'lsa) taskbar/yorliqda Feekr ikonasi.
7. Regressiya: oldingi QA tuzatishlari (gating, XP butunligi, stability/streak) buzilmagan.

---

## 4. Claude'ga beriladigan tayyor prompt
> Quyidagini Claude'ga (dastur papkasi bilan birga) ko'chirib bering:

```
Bu Feekr Code Electron ilovasi. OFFLINE-RELEASE-PLAN.md faylini o'qi va unga amal qil.
Maqsad: ilovani to'liq offline ishlaydigan (HTML/JS/TS/Python/SQL internetsiz) va relizga tayyor
qilish. 1-bo'limdan boshla (Pyodide va sql.js'ni lokal bundle qilish), 1.3-dagi asar tuzog'iga
e'tibor ber, keyin 1.4 (kompilyatsiya tillari offline xabari) va 2-bo'lim (reliz muammolari).
Har bir o'zgarishdan keyin `npm run build` bilan tekshir. Oxirida 3-bo'limdagi acceptance
criteria bo'yicha menga aniq sinov ro'yxatini ber. webSecurity:true (1.5) ni faqat offline
ishlаgani tasdiqlangandan keyin qil. Kompilyatsiya tillarini offline qilishga urinma — ular
internet talab qiladi, shuni aniq xabar bilan ko'rsat.
```

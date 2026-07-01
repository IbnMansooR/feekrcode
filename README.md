# Feekr Code

> 12 ta dasturlash tilini o'yin orqali o'rgatadigan desktop ilova.

## Nima bu?

Feekr Code — boshlovchidan professional darajagacha **12 dasturlash tilini**
bosqichma-bosqich o'rgatadigan gamified ilova:

`HTML+CSS · JavaScript · Python · SQL · TypeScript · Java · C# · C++ · C · PHP · Go · Rust`

Har til — "missiya", har dars — Duolingo uslubidagi yo'lda tugun. Kod ichki
**Code++** (Monaco) muharririda yoziladi, XP/daraja, streak va "barqarorlik"
mexanikasi bilan.

## Vizual

Uchta yo'nalish sintezi:
- **Neo Terminal** (qora "hacker desktop", yashil terminal) — asos
- **Sci-fi HUD** (doiraviy progress, panjarali fon) — statistika
- **Duolingo** (vertikal dars yo'li) — o'rganish oqimi

Mavzular: `neon` (asosiy) va `light`. `data-theme` atributi orqali almashadi.

## Texnologiyalar

| Qatlam | Vosita |
|--------|--------|
| Build | Vite 5 |
| UI | React 18 + react-router (HashRouter) |
| Kod muharriri | Monaco (`@monaco-editor/react`) |
| Holat | Zustand |
| Saqlash | localforage (IndexedDB) |
| Dars matni | react-markdown + remark-gfm |
| i18n | maxsus yengil hook (Uz / En / Ru) |

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # ishlab chiqarish build (dist/)
```

## Tuzilma

```
src/
  main.tsx, App.tsx        # entry + router + boot gate
  theme/tokens.css         # fused tema o'zgaruvchilari
  styles/global.css        # global stillar
  data/languages.ts        # 12 til metadata
  data/lessons.ts          # dars generatori (Bosqich 5–7'da real kontent)
  store/useGame.ts         # XP/level/progress + localforage persist
  i18n/                    # uz/en/ru lug'atlar
  shell/                   # HudBar, Layout
  views/                   # Boot, Home, LanguagePath, Lesson, Settings
  components/              # ProgressRing
```

## 9 bosqichli reja

1. **Poydevor** ✅ — scaffold, Monaco, store, i18n, fused visual, boot→home→path→lesson oqimi
2. Visual qobiq + audio menejer (HackHub kabi music + SFX)
3. Dars dvigateli — Markdown+frontmatter + quest engine (`locked→unlocked→completed`)
4. Kod runner — HTML/CSS/JS (iframe), Python (Pyodide), qolgan (Piston API) + testlar
5. Web bloki — HTML/CSS, JavaScript, TypeScript, SQL darslari
6. Backend bloki — Python, Java, C#, PHP, Go
7. Tizim bloki — C, C++, Rust + capstone
8. Gamifikatsiya + workshop — yutuqlar, kunlik challenge, jamoa darslari
9. Paketlash — portable `.exe` "Feekr Code" (Tauri yoki Electron) + auto-updater

## Holat

To'liq o'ynaladigan: Boot → Missiya markazi (12 til + gating) → Duolingo dars yo'li →
Code++ muharriri, XP/daraja/streak/barqarorlik va localforage saqlash.

**94 ta dars** (3 tilda) yozilgan. Dars tekshiruvi **xulq-atvor** asosida — kod
ishga tushiriladi va NATIJASI (yoki HTML tuzilmasi) `LessonCheck` shartlariga
solishtiriladi (matnni aynan ko'chirish shart emas; noto'g'ri natija o'tmaydi).

**Offline:** HTML/CSS, JavaScript, TypeScript, Python (Pyodide lokal),
SQL (sql.js lokal) — internetsiz ishlaydi. 7 ta kompilyatsiya tili
(Java/C#/C++/C/PHP/Go/Rust) Wandbox API orqali **online** ishlaydi; internet
yo'q bo'lsa aniq xabar ko'rsatiladi.

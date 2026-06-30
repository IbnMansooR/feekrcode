import { useEffect, useRef, useState } from "react";

type Mode = "html" | "js" | "none";

/** Brauzerda jonli natija: HTML render yoki JS console.
 *
 *  Xavfsizlik: iframe `sandbox="allow-scripts"` (allow-same-origin YO'Q) — opaque
 *  origin, ota-sahifa holatiga (IndexedDB/cookie) kira olmaydi. Qo'shimcha ravishda
 *  srcDoc ichiga CSP qo'yamiz: `default-src 'none'` tarmoqqa chiqishni (eksfiltratsiya)
 *  butunlay to'sadi. HTML rejimida script umuman ishlamaydi (script-src yo'q), shu
 *  sabab HTML darsidagi <script>while(1)</script> ham muzlatmaydi. JS rejimida esa
 *  kod faqat "Ishga tushir" bosilganda (remount) bajariladi — yozayotganda emas. */
export function LivePreview({ code, mode }: { code: string; mode: Mode }) {
  const [doc, setDoc] = useState("");
  // JS kodi har klavish bosilganda emas, faqat mount paytida (ya'ni "Ishga tushir"
  // → key o'zgarishi → remount) qurilsin.
  const builtJs = useRef(false);

  useEffect(() => {
    if (mode === "html") {
      // HTML render xavfsiz (script bloklangan) — jonli yangilab turamiz.
      const id = setTimeout(() => setDoc(buildDoc(code, mode)), 250);
      return () => clearTimeout(id);
    }
    if (mode === "js" && !builtJs.current) {
      builtJs.current = true;
      setDoc(buildDoc(code, mode));
    }
  }, [code, mode]);

  if (mode === "none") {
    return (
      <div
        className="mono"
        style={{
          height: "100%",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          color: "var(--text-2)",
          fontSize: 13,
          padding: 16,
        }}
      >
        Bu til uchun jonli ishga tushiruvchi Bosqich 4'da ulanadi.
        <br />
        (Python → Pyodide, qolganlari → Piston API)
      </div>
    );
  }

  return (
    <iframe
      title="preview"
      srcDoc={doc}
      sandbox="allow-scripts"
      style={{ width: "100%", height: "100%", border: "none", background: "#fff", display: "block" }}
    />
  );
}

function buildDoc(code: string, mode: Mode): string {
  if (mode === "html") {
    // HTML/CSS preview: script-src berilmaydi → ichidagi <script> ishlamaydi
    // (na muzlatish, na tarmoq eksfiltratsiyasi). Lekin rasm/shrift/stil darslari
    // ishlashi uchun https: rasm va shriftlarga ruxsat (rasm kod ishga tushira olmaydi).
    const csp =
      "default-src 'none'; style-src 'unsafe-inline' https:; img-src data: https:; font-src data: https:;";
    return `<!doctype html><html><head><meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<style>html,body{margin:0;padding:16px;font-family:system-ui,sans-serif;color:#111}</style>
</head><body>${code}</body></html>`;
  }
  // js / ts: console.log'ni terminal ko'rinishida ushlaymiz.
  // `</script>` bilan chiqib ketishni neytrallaymiz; CSP esa tarmoqqa (fetch/Image)
  // chiqishni to'sadi — preview kodi ma'lumot eksfiltratsiya qila olmaydi.
  const safeCode = code.replace(/<\/script/gi, "<\\/script");
  const csp = "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';";
  return `<!doctype html><html><head><meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<style>html,body{margin:0;padding:12px;background:#05080d;color:#39d353;
font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13px;line-height:1.6;white-space:pre-wrap}
.err{color:#ff5d5d}</style></head>
<body><div id="o"></div>
<script>
  var o=document.getElementById('o');
  function fmt(a){return a.map(function(x){try{return typeof x==='object'?JSON.stringify(x):String(x)}catch(e){return String(x)}}).join(' ')}
  console.log=function(){o.textContent+=fmt([].slice.call(arguments))+'\\n'};
  console.info=console.log;console.warn=console.log;
  console.error=function(){var s=document.createElement('span');s.className='err';s.textContent=fmt([].slice.call(arguments))+'\\n';o.appendChild(s)};
  try{
${safeCode}
  }catch(e){console.error(e && e.message ? e.message : e)}
</script></body></html>`;
}

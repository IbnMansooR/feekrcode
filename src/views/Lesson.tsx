import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams, Link, Navigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getLanguage } from "../data/languages";
import { getLessonList, getLessonContent } from "../content";
import { pick } from "../content/types";
import { useGame } from "../store/useGame";
import { useT } from "../i18n";
import { LivePreview } from "../components/LivePreview";
import { audio } from "../audio/sfx";
import { getRunMode, runPython, runRemote, runSQL, runJS, transpileTS, stopRun } from "../run";
import { setGhostTarget } from "../editor/ghost";
import { evaluateLesson } from "../editor/check";

export function Lesson() {
  const t = useT();
  const locale = useGame((s) => s.settings.locale);
  const nav = useNavigate();
  const { langId = "", lessonId = "" } = useParams();
  const lang = getLanguage(langId);
  const content = getLessonContent(langId, lessonId);
  const list = getLessonList(langId);
  const completeLesson = useGame((s) => s.completeLesson);
  const isCompleted = useGame((s) => s.isCompleted);
  const isLessonUnlocked = useGame((s) => s.isLessonUnlocked);
  const recordCheck = useGame((s) => s.recordCheck);
  const onlineRun = useGame((s) => s.settings.onlineRun);
  const setSetting = useGame((s) => s.setSetting);

  const mode = getRunMode(langId);
  const idx = parseInt(lessonId.split("-").pop() ?? "0", 10);
  // Ghost-text: muharrir bo'sh boshlanadi, to'g'ri kod shaffof ko'rinadi
  const [code, setCode] = useState("");
  const editorRef = useRef<any>(null);
  const [previewH, setPreviewH] = useState(360);
  const [nonce, setNonce] = useState(0);
  const [output, setOutput] = useState("");
  const [outErr, setOutErr] = useState(false);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState("");
  // Tekshiruv: dars faqat to'g'ri kod yozilganda yakunlanadi
  const [passed, setPassed] = useState(false);
  const [checked, setChecked] = useState(false);
  // O'tmasa — nima yetishmayotgani (xulq-atvor tekshiruvidan)
  const [reasons, setReasons] = useState<string[]>([]);

  useEffect(() => {
    // Muharrir "iskala" (scaffold) bilan boshlanadi — to'liq yechim emas.
    setCode(content?.starterCode ?? "");
    setOutput("");
    setStatus("");
    setChecked(false);
    setReasons([]);
    setPassed(isCompleted(langId, lessonId)); // ilgari tugatilgan bo'lsa ochiq qoladi
    setNonce((n) => n + 1);
    setGhostTarget(content?.solution ?? content?.starterCode ?? "");
    // Ghost taklifni darhol ko'rsatamiz
    const id = setTimeout(() => {
      editorRef.current?.trigger("feekr", "editor.action.inlineSuggest.trigger", {});
    }, 250);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  const done = content ? isCompleted(langId, lessonId) : false;
  const next = useMemo(() => list.find((l) => l.index === idx + 1), [list, idx]);

  if (!lang || !content) return <div style={{ padding: 40 }}>Dars topilmadi.</div>;

  // Gating: oldingi darslar tugatilmasdan URL/terminal orqali oldinga sakrashni to'samiz.
  if (!isLessonUnlocked(langId, lessonId) && !isCompleted(langId, lessonId))
    return <Navigate to={`/lang/${langId}`} replace />;

  const isHtml = mode === "iframe-html";
  const solution = content.solution ?? content.starterCode;

  async function runNow() {
    let output = "";
    let error = false;
    if (isHtml) {
      // HTML/CSS — jonli previewни yangilaymiz; tekshiruv render qilingan tuzilma bo'yicha.
      setNonce((n) => n + 1);
    } else if (mode === "iframe-js") {
      // JS/TS — izolyatsiyalangan worker'da (8s timeout). TS ijro oldidan JS'ga transpil qilinadi.
      setRunning(true);
      setOutput("");
      setStatus("");
      const js = langId === "typescript" ? await transpileTS(code) : code;
      const res = await runJS(js);
      output = res.output;
      error = Boolean(res.error);
      setOutput(output);
      setOutErr(error);
      setRunning(false);
    } else {
      // Kompilyatsiya tillari kodni tashqi serverga yuboradi — avval rozilik so'raymiz.
      if (mode === "remote" && !onlineRun) {
        if (!window.confirm(t("online_confirm"))) return;
        setSetting("onlineRun", true);
      }
      setRunning(true);
      setOutput("");
      setStatus("");
      const res =
        mode === "python"
          ? await runPython(code, setStatus)
          : mode === "sql"
          ? await runSQL(code)
          : await runRemote(langId, code);
      output = res.output;
      error = Boolean(res.error);
      setStatus("");
      setOutput(output);
      setOutErr(error);
      setRunning(false);
    }
    // Xulq-atvor bo'yicha tekshiruv: kod NATIJASI (yoki HTML tuzilmasi) shartlarга mos
    // kelsa — o'tadi. Matnni aynan ko'chirish shart emas; noto'g'ri natija o'tmaydi.
    const offline = typeof navigator !== "undefined" && navigator.onLine === false;
    const result = evaluateLesson(content!, { source: code, output, error, offline });
    setReasons(result.reasons);
    setPassed(result.passed || done);
    setChecked(true);
    recordCheck(result.passed); // barqarorlik: xato qilsa tushadi, to'g'ri bo'lsa biroz tiklanadi
    audio.play(result.passed ? "success" : "error");
  }

  function complete() {
    if (!passed && !done) return; // faqat to'g'ri javobdan keyin
    audio.play(done ? "click" : "complete");
    completeLesson(langId, lessonId, content!.xp);
    if (next) nav(`/lang/${langId}/lesson/${next.id}`);
    else nav(`/lang/${langId}`);
  }

  function onDragStart(e: React.MouseEvent) {
    e.preventDefault();
    const startY = e.clientY;
    const startH = previewH;
    const move = (ev: MouseEvent) =>
      setPreviewH(Math.min(680, Math.max(150, startH - (ev.clientY - startY))));
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 18px", borderBottom: "1px solid var(--border)" }}>
        <Link to={`/lang/${langId}`} style={{ color: "var(--text-1)", fontSize: 13 }}>
          ← {lang.name}
        </Link>
        <span style={{ color: "var(--text-2)" }}>/</span>
        <span style={{ fontWeight: 600 }}>{pick(content.title, locale)}</span>
        <span className="mono" style={{ marginLeft: "auto", fontSize: 12, color: "var(--accent-3)" }}>
          +{content.xp} XP
        </span>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "minmax(300px, 40%) 1fr", minHeight: 0 }}>
        {/* ── Chuqur vazifa paneli ── */}
        <div
          style={{ padding: "20px 24px 40px", overflowY: "auto", borderRight: "1px solid var(--border)", background: "var(--bg-1)" }}
          className="lesson-md"
        >
          <h2 style={{ marginTop: 0, marginBottom: 6 }}>{pick(content.title, locale)}</h2>
          <p style={{ color: "var(--text-1)", marginTop: 0 }}>{pick(content.intro, locale)}</p>

          {content.sections.map((s, i) => (
            <div key={i} style={{ borderLeft: "3px solid var(--accent-2)", paddingLeft: 14, margin: "18px 0" }}>
              <div style={{ color: "var(--accent-2)", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>
                {pick(s.heading, locale)}
              </div>
              <div style={{ fontSize: 14, color: "var(--text-1)" }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{pick(s.body, locale)}</ReactMarkdown>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 22, background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: 12, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
              ▸ {t("lesson_instructions")}
            </div>
            <div style={{ fontSize: 14.5, color: "var(--text-0)" }}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{pick(content.task, locale)}</ReactMarkdown>
            </div>
            {content.hint && (
              <div style={{ marginTop: 10, fontSize: 13, color: "var(--text-2)" }}>
                💡 {t("lesson_hint")}:{" "}
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ p: ({ children }) => <span className="mono">{children}</span> }}>
                  {pick(content.hint, locale)}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>

        {/* ── Code++ + ishga tushirish ── */}
        <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#e2503f" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#e0a020" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#2bbf6a" }} />
            <span className="mono" style={{ marginLeft: 8, fontSize: 12.5, color: "var(--text-1)" }}>
              Code++ · {content.monacoLang}
            </span>
            <span className="mono" style={{ fontSize: 11, color: "var(--text-2)" }}>
              ⇥ Tab — taklifni qabul qil
            </span>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
              {checked && (
                <span className="mono" style={{ fontSize: 12, fontWeight: 600, color: passed ? "var(--success)" : "var(--danger)" }}>
                  {passed ? `✓ ${t("check_correct")}` : `✗ ${t("check_wrong")}`}
                </span>
              )}
              <button
                onClick={() => {
                  setCode(solution);
                  setChecked(false);
                  setPassed(done);
                  setReasons([]);
                }}
                className="mono"
                title={t("lesson_reveal_hint")}
                style={{
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--text-2)",
                  fontSize: 12.5,
                }}
              >
                💡 {t("lesson_reveal")}
              </button>
              <button
                onClick={runNow}
                disabled={running}
                className="mono"
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--border-strong)",
                  background: "transparent",
                  color: running ? "var(--text-2)" : "var(--accent-2)",
                  fontSize: 12.5,
                }}
              >
                {running ? "…" : "▶"} {t("lesson_run")}
              </button>
              {running && !isHtml && (
                <button
                  onClick={() => stopRun()}
                  className="mono"
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--danger)",
                    background: "transparent",
                    color: "var(--danger)",
                    fontSize: 12.5,
                  }}
                >
                  ■ {t("lesson_stop")}
                </button>
              )}
              {(passed || done) && (
                <button
                  onClick={complete}
                  className="mono fade-up"
                  style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: done ? "var(--done)" : "var(--accent)", color: "#04121a", fontWeight: 700, fontSize: 12.5 }}
                >
                  {done ? `✓ ${t("lesson_done")}` : t("lesson_complete_btn", { xp: content.xp })}
                </button>
              )}
            </div>
          </div>

          {/* editor */}
          <div style={{ flex: 1, minHeight: 120 }}>
            <Editor
              height="100%"
              theme="vs-dark"
              language={content.monacoLang}
              path={lessonId}
              value={code}
              onChange={(v) => {
                setCode(v ?? "");
                setChecked(false);
                setPassed(false);
                setReasons([]);
              }}
              onMount={(editor) => {
                editorRef.current = editor;
                // Faqat ishlab chiqishda — ishlab chiqarish build'ida global ochmaymiz.
                if (import.meta.env.DEV) (window as any).__feekrEditor = editor;
                setGhostTarget(content!.solution ?? content!.starterCode);
                setTimeout(() => editor.trigger("feekr", "editor.action.inlineSuggest.trigger", {}), 200);
              }}
              options={{
                fontFamily: "JetBrains Mono, Fira Code, monospace",
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                padding: { top: 12 },
                automaticLayout: true,
                inlineSuggest: { enabled: true },
                quickSuggestions: false,
              }}
            />
          </div>

          {/* resizer */}
          <div onMouseDown={onDragStart} style={{ height: 7, cursor: "row-resize", background: "var(--bg-3)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ width: 36, height: 3, borderRadius: 3, background: "var(--border-strong)" }} />
          </div>

          {/* natija / preview */}
          <div style={{ height: previewH, display: "flex", flexDirection: "column", background: "var(--bg-2)" }}>
            <div style={{ fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: 1, padding: "7px 14px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: running ? "var(--accent-3)" : "var(--accent)" }} />
              {isHtml ? t("lesson_preview") : t("lesson_output")}
              {mode === "remote" && <span style={{ textTransform: "none", color: "var(--text-2)", fontSize: 11 }}>· online</span>}
            </div>
            {checked && !passed && reasons.length > 0 && (
              <div className="mono" style={{ padding: "8px 14px", background: "rgba(255,93,93,0.08)", borderTop: "1px solid var(--danger)", color: "var(--danger)", fontSize: 12, lineHeight: 1.6 }}>
                {reasons.map((r, i) => (
                  <div key={i}>• {r}</div>
                ))}
              </div>
            )}
            <div style={{ flex: 1, minHeight: 0 }}>
              {isHtml ? (
                <LivePreview key={nonce} code={code} mode="html" />
              ) : (
                <RunOutput running={running} status={status} output={output} error={outErr} mode={mode} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RunOutput({ running, status, output, error, mode }: { running: boolean; status: string; output: string; error: boolean; mode: string }) {
  return (
    <div className="mono" style={{ height: "100%", overflowY: "auto", padding: "12px 16px", background: "#05080d", fontSize: 13, lineHeight: 1.6 }}>
      {running ? (
        <div style={{ color: "var(--accent-3)" }}>
          <span className="cursor" /> {status || "Ishga tushirilmoqda…"}
        </div>
      ) : output ? (
        <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: error ? "var(--danger)" : "var(--accent)" }}>{output}</pre>
      ) : (
        <div style={{ color: "var(--text-2)" }}>
          ▶{" "}
          {mode === "python"
            ? "Python kodini ishga tushirish uchun tugmani bosing."
            : mode === "sql"
            ? "SQL so'rovini ishga tushirish uchun tugmani bosing."
            : mode === "iframe-js"
            ? "Kodni ishga tushirish uchun tugmani bosing."
            : "Kodni ishga tushirish uchun tugmani bosing (online)."}
        </div>
      )}
    </div>
  );
}

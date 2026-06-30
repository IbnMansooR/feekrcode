import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { useWorkshop } from "../store/useWorkshop";
import { useGame } from "../store/useGame";
import { MONACO_LANG } from "../data/lessons";
import { useT } from "../i18n";
import { LivePreview } from "../components/LivePreview";
import { audio } from "../audio/sfx";
import { getRunMode, runPython, runRemote, runSQL, transpileTS, stopRun } from "../run";
import { setGhostTarget } from "../editor/ghost";

export function WorkshopPlay() {
  const t = useT();
  const nav = useNavigate();
  const { id = "" } = useParams();
  const hydrated = useWorkshop((s) => s.hydrated);
  const hydrate = useWorkshop((s) => s.hydrate);
  const lessons = useWorkshop((s) => s.lessons);
  const onlineRun = useGame((s) => s.settings.onlineRun);
  const setSetting = useGame((s) => s.setSetting);

  useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrated, hydrate]);

  const lesson = lessons.find((x) => x.id === id);

  const [code, setCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [output, setOutput] = useState("");
  const [outErr, setOutErr] = useState(false);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState("");
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    if (lesson) setCode(lesson.starterCode);
    setGhostTarget(""); // workshop'da ghost o'chiq — starter ko'rinib turadi
  }, [lesson?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (lesson?.langId === "typescript") {
      transpileTS(code).then(setJsCode);
    } else {
      setJsCode(code);
    }
  }, [code, lesson?.langId]);

  if (!hydrated) return null;
  if (!lesson) return <div style={{ padding: 40 }}>{t("ws_notfound")} <Link to="/workshop">Workshop</Link></div>;

  const monacoLang = MONACO_LANG[lesson.langId] ?? "plaintext";
  const mode = getRunMode(lesson.langId);
  const isIframe = mode === "iframe-html" || mode === "iframe-js";

  async function runNow() {
    if (isIframe) {
      setNonce((n) => n + 1);
      audio.play("click");
      return;
    }
    if (mode === "remote" && !onlineRun) {
      if (!window.confirm(t("online_confirm"))) return;
      setSetting("onlineRun", true);
    }
    setRunning(true);
    setOutput("");
    const res =
      mode === "python"
        ? await runPython(code, setStatus)
        : mode === "sql"
        ? await runSQL(code)
        : await runRemote(lesson!.langId, code);
    setStatus("");
    setOutput(res.output);
    setOutErr(Boolean(res.error));
    setRunning(false);
    audio.play(res.error ? "error" : "success");
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 18px", borderBottom: "1px solid var(--border)" }}>
        <Link to="/workshop" style={{ color: "var(--text-1)", fontSize: 13 }}>
          ← Workshop
        </Link>
        <span style={{ color: "var(--text-2)" }}>/</span>
        <span style={{ fontWeight: 600 }}>{lesson.title}</span>
        <button
          onClick={runNow}
          disabled={running}
          className="mono"
          style={{ marginLeft: "auto", padding: "6px 16px", borderRadius: 8, border: "none", background: "var(--accent)", color: "#04121a", fontWeight: 700, fontSize: 13 }}
        >
          {running ? "…" : "▶"} {t("lesson_run")}
        </button>
        {running && !isIframe && (
          <button
            onClick={() => stopRun()}
            className="mono"
            style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid var(--danger)", background: "transparent", color: "var(--danger)", fontWeight: 700, fontSize: 13 }}
          >
            ■ {t("lesson_stop")}
          </button>
        )}
      </div>

      {lesson.task && (
        <div style={{ padding: "10px 18px", borderBottom: "1px solid var(--border)", background: "var(--bg-1)", fontSize: 14, color: "var(--text-1)" }}>
          <span style={{ color: "var(--accent)", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginRight: 8 }}>
            {t("lesson_instructions")}
          </span>
          {lesson.task}
        </div>
      )}

      <div style={{ flex: 1, display: "grid", gridTemplateRows: "1fr 280px", minHeight: 0 }}>
        <Editor
          height="100%"
          theme="vs-dark"
          language={monacoLang}
          value={code}
          onChange={(v) => setCode(v ?? "")}
          options={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14, minimap: { enabled: false }, automaticLayout: true, padding: { top: 12 } }}
        />
        <div style={{ borderTop: "1px solid var(--border)", minHeight: 0 }}>
          {isIframe ? (
            <LivePreview key={nonce} code={mode === "iframe-js" ? jsCode : code} mode={mode === "iframe-html" ? "html" : "js"} />
          ) : (
            <div className="mono" style={{ height: "100%", overflowY: "auto", padding: "12px 16px", background: "#05080d", fontSize: 13 }}>
              {running ? (
                <div style={{ color: "var(--accent-3)" }}>
                  <span className="cursor" /> {status || "Ishga tushirilmoqda…"}
                </div>
              ) : (
                <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: outErr ? "var(--danger)" : "var(--accent)" }}>
                  {output || "▶ " + t("lesson_run")}
                </pre>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

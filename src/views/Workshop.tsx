import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkshop } from "../store/useWorkshop";
import { LANGUAGES } from "../data/languages";
import { STARTER } from "../data/lessons";
import { useT } from "../i18n";
import { audio } from "../audio/sfx";

export function Workshop() {
  const t = useT();
  const nav = useNavigate();
  const lessons = useWorkshop((s) => s.lessons);
  const hydrated = useWorkshop((s) => s.hydrated);
  const hydrate = useWorkshop((s) => s.hydrate);
  const add = useWorkshop((s) => s.add);
  const remove = useWorkshop((s) => s.remove);

  const [title, setTitle] = useState("");
  const [langId, setLangId] = useState("htmlcss");
  const [task, setTask] = useState("");
  const [starter, setStarter] = useState(STARTER.htmlcss ?? "");

  useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrated, hydrate]);

  function create() {
    if (!title.trim()) return;
    const l = add({ title: title.trim(), langId, task: task.trim(), starterCode: starter });
    audio.play("success");
    setTitle("");
    setTask("");
    nav(`/workshop/${l.id}`);
  }

  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "28px 24px 60px" }} className="fade-up">
      <h1 style={{ marginTop: 0 }}>{t("nav_workshop")}</h1>
      <p style={{ color: "var(--text-1)", marginTop: 0 }}>{t("ws_intro")}</p>

      {/* Yaratish formasi */}
      <div className="panel" style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12, marginBottom: 26 }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t("ws_name")}
            maxLength={80}
            style={inputStyle}
          />
          <select
            value={langId}
            onChange={(e) => {
              setLangId(e.target.value);
              setStarter(STARTER[e.target.value] ?? "");
            }}
            style={{ ...inputStyle, flex: "0 0 180px" }}
          >
            {LANGUAGES.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder={t("ws_task")}
          rows={2}
          maxLength={2000}
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <textarea
          value={starter}
          onChange={(e) => setStarter(e.target.value)}
          placeholder={t("ws_starter")}
          rows={5}
          maxLength={20000}
          className="mono"
          style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-mono)", fontSize: 13 }}
        />
        <button
          onClick={create}
          style={{
            alignSelf: "flex-start",
            padding: "10px 20px",
            borderRadius: 10,
            border: "none",
            background: "var(--accent)",
            color: "#04121a",
            fontWeight: 700,
          }}
        >
          + {t("ws_create")}
        </button>
      </div>

      {/* Mavjud darslar */}
      {lessons.length === 0 ? (
        <p style={{ color: "var(--text-2)" }}>{t("ws_empty")}</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
          {lessons.map((l) => {
            const lang = LANGUAGES.find((x) => x.id === l.langId);
            return (
              <div key={l.id} className="panel" style={{ padding: 16 }}>
                <div style={{ fontWeight: 700, color: "var(--text-0)" }}>{l.title}</div>
                <div style={{ fontSize: 12.5, color: "var(--text-2)", marginBottom: 12 }}>{lang?.name ?? l.langId}</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => nav(`/workshop/${l.id}`)}
                    style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "var(--accent-2)", color: "#04121a", fontWeight: 600, fontSize: 13 }}
                  >
                    ▶ {t("ws_play")}
                  </button>
                  <button
                    onClick={() => remove(l.id)}
                    style={{ padding: "6px 12px", borderRadius: 8, border: "1px solid var(--danger)", background: "transparent", color: "var(--danger)", fontSize: 13 }}
                  >
                    {t("ws_delete")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 160,
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid var(--border)",
  background: "var(--bg-2)",
  color: "var(--text-0)",
  fontSize: 14,
  outline: "none",
};

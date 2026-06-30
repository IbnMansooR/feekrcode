import { useEffect, useState } from "react";
import { useT } from "../i18n";

const LINES = [
  "feekr-os v0.1 — booting…",
  "loading kernel modules......... ok",
  "mounting /lessons ............. ok",
  "initializing code++ engine .... ok",
  "loading 12 language packs ..... ok",
  "audio subsystem ............... ok",
  "ready.",
];

/** HackHub LogoIntro uslubidagi terminal boot ekrani */
export function Boot({ onEnter }: { onEnter: () => void }) {
  const t = useT();
  const [shown, setShown] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (shown < LINES.length) {
      const id = setTimeout(() => setShown((n) => n + 1), 230);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => setReady(true), 400);
      return () => clearTimeout(id);
    }
  }, [shown]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg-0)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="app-bg" />
      <div style={{ position: "relative", width: 480, maxWidth: "90vw" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: 40,
            letterSpacing: 2,
            textAlign: "center",
            marginBottom: 20,
          }}
          className="glow"
        >
          FEEKR <span style={{ color: "var(--accent)" }}>CODE</span>
        </div>
        <div
          className="panel mono"
          style={{ padding: "16px 18px", fontSize: 13, color: "var(--accent)", minHeight: 180 }}
        >
          {LINES.slice(0, shown).map((l, i) => (
            <div key={i} style={{ opacity: 0.95 }}>
              <span style={{ color: "var(--text-2)" }}>$</span> {l}
            </div>
          ))}
          {shown < LINES.length && <span className="cursor" />}
        </div>

        {ready && (
          <button
            onClick={onEnter}
            className="fade-up"
            style={{
              marginTop: 22,
              width: "100%",
              padding: "14px",
              borderRadius: 12,
              border: "1px solid var(--accent)",
              background: "var(--accent)",
              color: "#04121a",
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: 1,
            }}
          >
            {t("boot_enter")} →
          </button>
        )}
        <div style={{ textAlign: "center", marginTop: 14, color: "var(--text-2)", fontSize: 13 }}>
          {t("tagline")}
        </div>
      </div>
    </div>
  );
}

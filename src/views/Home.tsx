import { useNavigate } from "react-router-dom";
import { LANGUAGES, type Track } from "../data/languages";
import { pick } from "../content/types";
import { useGame } from "../store/useGame";
import { useT } from "../i18n";
import { ProgressRing } from "../components/ProgressRing";

const TRACKS: Track[] = ["web", "backend", "system"];

export function Home() {
  const t = useT();
  const nav = useNavigate();
  const locale = useGame((s) => s.settings.locale);
  const completed = useGame((s) => s.completed);
  const isLanguageUnlocked = useGame((s) => s.isLanguageUnlocked);
  const trackLabel = (tr: Track) => t(`home_track_${tr}` as "home_track_web");

  const totalLessons = LANGUAGES.reduce((a, l) => a + l.lessons, 0);
  const doneLessons = LANGUAGES.reduce(
    (a, l) => a + (completed[l.id]?.length ?? 0),
    0
  );
  const overall = totalLessons ? doneLessons / totalLessons : 0;

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "28px 24px 60px" }} className="fade-up">
      {/* Sarlavha + umumiy progress */}
      <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 28, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <h1 style={{ margin: 0, fontSize: 30, letterSpacing: 0.5 }}>
            {t("home_title")}
          </h1>
          <p style={{ margin: "6px 0 0", color: "var(--text-1)", fontSize: 15 }}>
            {t("home_subtitle")}
          </p>
        </div>
        <div className="panel" style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 20px" }}>
          <ProgressRing value={overall} size={68} stroke={6} color="var(--accent)">
            <span style={{ fontWeight: 700, fontSize: 16 }}>{Math.round(overall * 100)}%</span>
          </ProgressRing>
          <div>
            <div style={{ fontSize: 12, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: 1 }}>
              {t("home_progress")}
            </div>
            <div className="mono" style={{ fontSize: 16, color: "var(--text-0)", fontWeight: 600 }}>
              {doneLessons} / {totalLessons}
            </div>
          </div>
        </div>
      </div>

      {/* Track'lar bo'yicha guruh */}
      {TRACKS.map((track) => {
        const langs = LANGUAGES.filter((l) => l.track === track).sort((a, b) => a.order - b.order);
        return (
          <section key={track} style={{ marginBottom: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--accent-2)",
                  border: "1px solid var(--border)",
                  padding: "3px 10px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {trackLabel(track)}
              </span>
              <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(232px, 1fr))",
                gap: 14,
              }}
            >
              {langs.map((lang, i) => {
                const done = completed[lang.id]?.length ?? 0;
                const prog = lang.lessons ? done / lang.lessons : 0;
                // Gating — store bilan yagona manba (Home alohida mantiq yozmaydi).
                const unlocked = isLanguageUnlocked(lang.id);
                return (
                  <button
                    key={lang.id}
                    onClick={() => unlocked && nav(`/lang/${lang.id}`)}
                    disabled={!unlocked}
                    className="panel"
                    style={{
                      textAlign: "left",
                      padding: 16,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      cursor: unlocked ? "pointer" : "not-allowed",
                      opacity: unlocked ? 1 : 0.5,
                      transition: "transform 0.15s, border-color 0.15s",
                      borderColor: prog > 0 ? lang.color : "var(--border)",
                    }}
                    onMouseEnter={(e) => unlocked && (e.currentTarget.style.transform = "translateY(-3px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 11,
                          display: "grid",
                          placeItems: "center",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                          fontSize: 15,
                          color: lang.color,
                          background: `${lang.color}1a`,
                          border: `1px solid ${lang.color}55`,
                        }}
                      >
                        {lang.glyph}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 16, color: "var(--text-0)" }}>
                          {lang.name}
                        </div>
                        <div style={{ fontSize: 12.5, color: "var(--text-2)" }}>{pick(lang.tagline, locale)}</div>
                      </div>
                      {!unlocked && <span style={{ color: "var(--text-2)" }}>🔒</span>}
                    </div>

                    {/* progress bar */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, marginBottom: 5 }}>
                        <span className="mono" style={{ color: "var(--text-2)" }}>
                          {done}/{lang.lessons} {t("lang_lessons")}
                        </span>
                        <span className="mono" style={{ color: lang.color }}>
                          {Math.round(prog * 100)}%
                        </span>
                      </div>
                      <div style={{ height: 5, background: "var(--bg-3)", borderRadius: 5, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${prog * 100}%`, background: lang.color, transition: "width 0.5s" }} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

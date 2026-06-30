import { ACHIEVEMENTS } from "../data/achievements";
import { useGame } from "../store/useGame";
import { pick } from "../content/types";
import { useT } from "../i18n";

export function Achievements() {
  const t = useT();
  const locale = useGame((s) => s.settings.locale);
  const unlocked = useGame((s) => s.achievements);

  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "28px 24px 60px" }} className="fade-up">
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <h1 style={{ margin: 0 }}>{t("nav_achievements")}</h1>
        <span className="mono" style={{ color: "var(--accent)", fontSize: 16 }}>
          {unlocked.length}/{ACHIEVEMENTS.length}
        </span>
      </div>

      <div
        style={{
          marginTop: 22,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 14,
        }}
      >
        {ACHIEVEMENTS.map((a) => {
          const has = unlocked.includes(a.id);
          return (
            <div
              key={a.id}
              className="panel"
              style={{
                padding: 16,
                display: "flex",
                alignItems: "center",
                gap: 14,
                opacity: has ? 1 : 0.45,
                borderColor: has ? "var(--accent)" : "var(--border)",
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  width: 50,
                  height: 50,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 12,
                  background: has ? "rgba(57,211,83,0.12)" : "var(--bg-3)",
                  filter: has ? "none" : "grayscale(1)",
                }}
              >
                {has ? a.icon : "🔒"}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-0)" }}>{pick(a.title, locale)}</div>
                <div style={{ fontSize: 12.5, color: "var(--text-2)" }}>{pick(a.desc, locale)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useGame, levelFromXp } from "../store/useGame";
import { useT } from "../i18n";
import { ProgressRing } from "../components/ProgressRing";

export function HudBar() {
  const t = useT();
  const { pathname } = useLocation();
  const xp = useGame((s) => s.xp);
  const streak = useGame((s) => s.streak);
  const stability = useGame((s) => s.stability);
  const { level, into, need } = levelFromXp(xp);

  const navItems = [
    { to: "/", label: t("nav_home") },
    { to: "/workshop", label: t("nav_workshop") },
    { to: "/achievements", label: "🏆" },
    { to: "/settings", label: t("nav_settings") },
  ];

  return (
    <header
      style={{
        position: "relative",
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "12px 20px",
        borderBottom: "1px solid var(--border)",
        background: "linear-gradient(180deg, var(--bg-1), transparent)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 9,
            border: "1px solid var(--border-strong)",
            display: "grid",
            placeItems: "center",
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
            fontWeight: 700,
          }}
          className="glow"
        >
          &gt;_
        </div>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontWeight: 700, color: "var(--text-0)", letterSpacing: 0.5 }}>
            FEEKR <span style={{ color: "var(--accent)" }}>CODE</span>
          </div>
          <div style={{ fontSize: 11, color: "var(--text-2)" }} className="mono">
            v0.2.0
          </div>
        </div>
      </Link>

      {/* Level ring */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 8 }}>
        <ProgressRing value={need ? into / need : 1} size={48} stroke={4} color="var(--accent-2)">
          <span style={{ fontWeight: 700, fontSize: 15 }}>{level}</span>
        </ProgressRing>
        <div>
          <div style={{ fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: 1 }}>
            {t("hud_level")}
          </div>
          <div className="mono" style={{ fontSize: 12, color: "var(--text-1)" }}>
            {into} / {need} XP
          </div>
        </div>
      </div>

      <Stat label={t("hud_streak")} value={`${streak} ${t("hud_day")}`} color="var(--accent-3)" icon="🔥" />
      <Stat label={t("hud_stability")} value={`${stability}%`} color="var(--accent)" bar={stability / 100} />

      <div style={{ flex: 1 }} />

      <nav style={{ display: "flex", gap: 6 }}>
        {navItems.map((n) => {
          const active = pathname === n.to;
          return (
            <Link
              key={n.to}
              to={n.to}
              style={{
                padding: "7px 14px",
                borderRadius: 9,
                fontSize: 13,
                color: active ? "var(--bg-0)" : "var(--text-1)",
                background: active ? "var(--accent)" : "transparent",
                border: `1px solid ${active ? "var(--accent)" : "var(--border)"}`,
                fontWeight: 600,
              }}
            >
              {n.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

function Stat({
  label,
  value,
  color,
  icon,
  bar,
}: {
  label: string;
  value: string;
  color: string;
  icon?: string;
  bar?: number;
}) {
  return (
    <div style={{ minWidth: 92 }}>
      <div style={{ fontSize: 11, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: 1 }}>
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {icon && <span style={{ fontSize: 13 }}>{icon}</span>}
        <span className="mono" style={{ fontSize: 14, color, fontWeight: 600 }}>
          {value}
        </span>
      </div>
      {bar !== undefined && (
        <div style={{ height: 4, background: "var(--bg-3)", borderRadius: 4, marginTop: 4, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${bar * 100}%`, background: color, transition: "width 0.5s" }} />
        </div>
      )}
    </div>
  );
}

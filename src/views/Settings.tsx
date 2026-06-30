import { useGame } from "../store/useGame";
import { useT, LOCALES } from "../i18n";

export function Settings() {
  const t = useT();
  const settings = useGame((s) => s.settings);
  const setSetting = useGame((s) => s.setSetting);
  const reset = useGame((s) => s.reset);

  return (
    <div style={{ maxWidth: 620, margin: "0 auto", padding: "28px 24px" }} className="fade-up">
      <h1 style={{ marginTop: 0 }}>{t("nav_settings")}</h1>

      <div className="panel" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Mavzu */}
        <Row label={t("set_theme")}>
          <Segmented
            value={settings.theme}
            options={[
              { id: "neon", label: t("theme_neon") },
              { id: "light", label: t("theme_light") },
            ]}
            onChange={(v) => setSetting("theme", v as "neon" | "light")}
          />
        </Row>

        {/* Til */}
        <Row label={t("set_language")}>
          <Segmented
            value={settings.locale}
            options={LOCALES.map((l) => ({ id: l.id, label: l.flag }))}
            onChange={(v) => setSetting("locale", v as "uz" | "en" | "ru")}
          />
        </Row>

        {/* Musiqa */}
        <Row label={t("set_music")}>
          <Toggle value={settings.music} onChange={(v) => setSetting("music", v)} />
        </Row>

        {/* SFX */}
        <Row label={t("set_sfx")}>
          <Toggle value={settings.sfx} onChange={(v) => setSetting("sfx", v)} />
        </Row>

        {/* Online ishga tushirish (kompilyatsiya tillari kodni tashqi serverga yuboradi) */}
        <Row label={t("set_online")}>
          <Toggle value={settings.onlineRun} onChange={(v) => setSetting("onlineRun", v)} />
        </Row>

        {/* Balandlik */}
        <Row label={t("set_volume")}>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={settings.volume}
            onChange={(e) => setSetting("volume", parseFloat(e.target.value))}
            style={{ width: 180 }}
          />
        </Row>
      </div>

      <button
        onClick={() => {
          if (confirm(t("set_reset_confirm"))) reset();
        }}
        style={{
          marginTop: 20,
          padding: "10px 18px",
          borderRadius: 10,
          border: "1px solid var(--danger)",
          background: "transparent",
          color: "var(--danger)",
          fontWeight: 600,
        }}
      >
        {t("set_reset")}
      </button>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
      <span style={{ color: "var(--text-1)", fontSize: 15 }}>{label}</span>
      {children}
    </div>
  );
}

function Segmented({
  value,
  options,
  onChange,
}: {
  value: string;
  options: { id: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: "flex", gap: 4, background: "var(--bg-2)", padding: 4, borderRadius: 10 }}>
      {options.map((o) => {
        const active = o.id === value;
        return (
          <button
            key={o.id}
            onClick={() => onChange(o.id)}
            style={{
              padding: "6px 14px",
              borderRadius: 7,
              border: "none",
              background: active ? "var(--accent)" : "transparent",
              color: active ? "#04121a" : "var(--text-1)",
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      style={{
        width: 50,
        height: 28,
        borderRadius: 20,
        border: "none",
        background: value ? "var(--accent)" : "var(--bg-3)",
        position: "relative",
        transition: "background 0.2s",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: value ? 25 : 3,
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.2s",
        }}
      />
    </button>
  );
}

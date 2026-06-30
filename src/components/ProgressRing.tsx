interface Props {
  /** 0..1 */
  value: number;
  size?: number;
  stroke?: number;
  color?: string;
  track?: string;
  children?: React.ReactNode;
}

/** Sci-fi HUD doiraviy progress ko'rsatkichi */
export function ProgressRing({
  value,
  size = 64,
  stroke = 5,
  color = "var(--accent-2)",
  track = "var(--bg-3)",
  children,
}: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  // NaN/Infinity (masalan 0/0) halqani ko'rinmas qilib qo'yardi — 0'ga qaytaramiz.
  const safe = Number.isFinite(value) ? value : 0;
  const clamped = Math.max(0, Math.min(1, safe));
  const offset = c * (1 - clamped);
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      {children && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

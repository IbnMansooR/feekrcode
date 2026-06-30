import { useToast } from "../store/useToast";

/** Yutuq/bildirishnoma toast'lari (pastki o'ng burchak) */
export function Toaster() {
  const toasts = useToast((s) => s.toasts);
  const remove = useToast((s) => s.remove);
  return (
    <div
      style={{
        position: "fixed",
        right: 18,
        bottom: 78,
        zIndex: 60,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        pointerEvents: "none",
      }}
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          onClick={() => remove(t.id)}
          className="fade-up"
          style={{
            pointerEvents: "auto",
            cursor: "pointer",
            minWidth: 240,
            maxWidth: 320,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 14px",
            borderRadius: 12,
            background: "var(--panel-solid)",
            border: "1px solid var(--accent)",
            boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
          }}
        >
          {t.icon && <span style={{ fontSize: 26 }}>{t.icon}</span>}
          <div>
            <div style={{ fontWeight: 700, color: "var(--text-0)", fontSize: 14 }}>{t.title}</div>
            {t.desc && <div style={{ fontSize: 12.5, color: "var(--text-2)" }}>{t.desc}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

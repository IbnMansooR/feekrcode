import { Component, type ReactNode } from "react";
import localforage from "localforage";

/** Butun ilovani o'rab turuvchi xato to'sig'i.
 *  Korrupt saqlash yoki kutilmagan render xatosi butun ekranni "oq" qilib
 *  ilovani ochilmas holatga keltirmasligi uchun — tushunarli xabar + tiklash. */
export class ErrorBoundary extends Component<{ children: ReactNode }, { err: Error | null }> {
  state: { err: Error | null } = { err: null };

  static getDerivedStateFromError(err: Error) {
    return { err };
  }

  componentDidCatch(err: Error) {
    // eslint-disable-next-line no-console
    console.error("Feekr Code — render xatosi:", err);
  }

  render() {
    if (!this.state.err) return this.props.children;
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "grid",
          placeItems: "center",
          background: "#05080d",
          color: "#e6edf3",
          fontFamily: "system-ui, sans-serif",
          padding: 24,
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>⚠️</div>
          <h2 style={{ margin: "0 0 8px" }}>Nimadir noto'g'ri ketdi</h2>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              color: "#ff8a8a",
              fontSize: 12.5,
              background: "rgba(255,255,255,0.04)",
              padding: 12,
              borderRadius: 8,
              maxHeight: 160,
              overflow: "auto",
            }}
          >
            {String(this.state.err.message || this.state.err)}
          </pre>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 16 }}>
            <button
              onClick={() => location.reload()}
              style={btn("#39d353")}
            >
              Qayta yuklash
            </button>
            <button
              onClick={async () => {
                try {
                  await localforage.clear();
                } catch {
                  /* e'tibor bermaymiz */
                }
                location.reload();
              }}
              style={btn("#ff8a8a")}
            >
              Ma'lumotni tozalab qayta yuklash
            </button>
          </div>
          <p style={{ color: "#7d8590", fontSize: 12, marginTop: 14 }}>
            Agar muammo takrorlansa, "Ma'lumotni tozalash" saqlangan progressni nolga qaytaradi.
          </p>
        </div>
      </div>
    );
  }
}

function btn(color: string): React.CSSProperties {
  return {
    padding: "9px 16px",
    borderRadius: 9,
    border: `1px solid ${color}`,
    background: "transparent",
    color,
    fontWeight: 600,
    cursor: "pointer",
  };
}

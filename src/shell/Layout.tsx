import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { HudBar } from "./HudBar";
import { Terminal } from "./Terminal";
import { Toaster } from "../components/Toaster";
import { audio } from "../audio/sfx";

export function Layout() {
  const [termOpen, setTermOpen] = useState(false);

  // Ctrl+~ bilan terminalni ochish/yopish (Monaco'dagi backtick'ga xalaqit bermaydi)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === "Backquote") {
        e.preventDefault();
        setTermOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="app-bg" />
      <HudBar />
      <main style={{ position: "relative", zIndex: 2, flex: 1, overflowY: "auto" }}>
        <Outlet />
      </main>

      <Terminal open={termOpen} onClose={() => setTermOpen(false)} />
      <Toaster />

      {/* Suzuvchi terminal tugmasi */}
      {!termOpen && (
        <button
          onClick={() => {
            audio.play("click");
            setTermOpen(true);
          }}
          title="Terminal (Ctrl+~)"
          style={{
            position: "absolute",
            right: 18,
            bottom: 18,
            zIndex: 40,
            width: 46,
            height: 46,
            borderRadius: 12,
            border: "1px solid var(--border-strong)",
            background: "var(--panel-solid)",
            color: "var(--accent)",
            fontFamily: "var(--font-mono)",
            fontSize: 18,
            fontWeight: 700,
            boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          }}
        >
          &gt;_
        </button>
      )}
    </div>
  );
}

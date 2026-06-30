import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LANGUAGES, getLanguage } from "../data/languages";
import { useGame, levelFromXp } from "../store/useGame";
import { pick } from "../content/types";
import { audio } from "../audio/sfx";

type Line = { kind: "in" | "out" | "err" | "sys"; text: string };

const BANNER: Line[] = [
  { kind: "sys", text: "feekr-shell v0.2 — yordam uchun 'help' yozing" },
];

const HELP: Line[] = [
  { kind: "out", text: "Buyruqlar / commands:" },
  { kind: "out", text: "  help              — bu yordam" },
  { kind: "out", text: "  ls | languages    — 12 tilni ko'rsatish" },
  { kind: "out", text: "  open <id>         — tilni ochish (masalan: open python)" },
  { kind: "out", text: "  start <id>        — tilning 1-darsini boshlash" },
  { kind: "out", text: "  progress | stats  — daraja, XP, progress" },
  { kind: "out", text: "  theme <neon|light>— mavzuni almashtirish" },
  { kind: "out", text: "  lang <uz|en|ru>   — interfeys tili" },
  { kind: "out", text: "  home | settings   — sahifaga o'tish" },
  { kind: "out", text: "  whoami | about    — ma'lumot" },
  { kind: "out", text: "  clear             — terminalni tozalash" },
];

export function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const nav = useNavigate();
  const locale = useGame((s) => s.settings.locale);
  const xp = useGame((s) => s.xp);
  const completed = useGame((s) => s.completed);
  const setSetting = useGame((s) => s.setSetting);
  const isLanguageUnlocked = useGame((s) => s.isLanguageUnlocked);

  const [lines, setLines] = useState<Line[]>(BANNER);
  const [input, setInput] = useState("");
  const [hist, setHist] = useState<string[]>([]);
  const [hi, setHi] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
  }, [open]);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, open]);

  function out(arr: Line[]) {
    setLines((l) => [...l, ...arr]);
  }

  function go(path: string) {
    onClose();
    nav(path);
  }

  function exec(raw: string): Line[] {
    const parts = raw.trim().split(/\s+/);
    const cmd = (parts[0] || "").toLowerCase();
    const arg = parts[1]?.toLowerCase();
    switch (cmd) {
      case "":
        return [];
      case "help":
        return HELP;
      case "ls":
      case "languages":
        return LANGUAGES.map((l) => {
          const done = completed[l.id]?.length ?? 0;
          return { kind: "out" as const, text: `  ${l.id.padEnd(12)} ${l.name.padEnd(12)} ${done}/${l.lessons} — ${pick(l.tagline, locale)}` };
        });
      case "open": {
        const lng = arg && getLanguage(arg);
        if (!lng) return [{ kind: "err", text: `Til topilmadi: ${arg ?? ""}. 'ls' bilan ro'yxatni ko'ring.` }];
        if (!isLanguageUnlocked(lng.id))
          return [{ kind: "err", text: `🔒 ${lng.name} hali qulflangan — avval track'dagi oldingi tilni boshlang.` }];
        go(`/lang/${lng.id}`);
        return [{ kind: "out", text: `→ ${lng.name} ochilmoqda...` }];
      }
      case "start": {
        const lng = arg && getLanguage(arg);
        if (!lng) return [{ kind: "err", text: `Til topilmadi: ${arg ?? ""}.` }];
        if (!isLanguageUnlocked(lng.id))
          return [{ kind: "err", text: `🔒 ${lng.name} hali qulflangan — avval track'dagi oldingi tilni boshlang.` }];
        go(`/lang/${lng.id}/lesson/${lng.id}-1`);
        return [{ kind: "out", text: `▶ ${lng.name} 1-dars boshlanmoqda...` }];
      }
      case "progress":
      case "stats": {
        const { level, into, need } = levelFromXp(xp);
        const total = LANGUAGES.reduce((a, l) => a + l.lessons, 0);
        const done = LANGUAGES.reduce((a, l) => a + (completed[l.id]?.length ?? 0), 0);
        return [
          { kind: "out", text: `Daraja: ${level}   XP: ${xp} (${into}/${need})` },
          { kind: "out", text: `Darslar: ${done}/${total} tugatildi` },
        ];
      }
      case "theme":
        if (arg === "neon" || arg === "light") {
          setSetting("theme", arg);
          return [{ kind: "out", text: `Mavzu: ${arg}` }];
        }
        return [{ kind: "err", text: "Foydalanish: theme <neon|light>" }];
      case "lang":
        if (arg === "uz" || arg === "en" || arg === "ru") {
          setSetting("locale", arg);
          return [{ kind: "out", text: `Til: ${arg}` }];
        }
        return [{ kind: "err", text: "Foydalanish: lang <uz|en|ru>" }];
      case "home":
        go("/");
        return [{ kind: "out", text: "→ Bosh sahifa" }];
      case "settings":
        go("/settings");
        return [{ kind: "out", text: "→ Sozlamalar" }];
      case "whoami":
        return [{ kind: "out", text: "feekr-coder — bo'lajak dasturchi 🚀" }];
      case "about":
        return [
          { kind: "out", text: "Feekr Code — 12 tilni o'yin orqali o'rgatadigan ilova." },
          { kind: "out", text: "HackHub interfeysidan ilhomlangan." },
        ];
      case "feekr":
        return [
          { kind: "sys", text: " ___ ___ ___ _  _ ___" },
          { kind: "sys", text: "| __| __| __| |/ / _ \\" },
          { kind: "sys", text: "| _|| _|| _|| ' <|   /" },
          { kind: "sys", text: "|_| |___|___|_|\\_\\_|_\\  CODE" },
        ];
      case "clear":
        setTimeout(() => setLines(BANNER), 0);
        return [];
      default:
        return [{ kind: "err", text: `Noma'lum buyruq: ${cmd}. 'help' yozing.` }];
    }
  }

  function submit() {
    const raw = input;
    const result = exec(raw);
    out([{ kind: "in", text: `$ ${raw}` }, ...result]);
    if (raw.trim()) setHist((h) => [raw, ...h]);
    setHi(-1);
    setInput("");
    audio.play("type");
  }

  if (!open) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        background: "rgba(3, 6, 11, 0.55)",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(2px)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          height: "58%",
          minHeight: 280,
          background: "rgba(5, 9, 14, 0.97)",
          borderBottom: "2px solid var(--accent)",
          boxShadow: "0 18px 60px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-mono)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 14px",
            borderBottom: "1px solid var(--border)",
            color: "var(--text-2)",
            fontSize: 12,
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#e2503f" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#e0a020" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#2bbf6a" }} />
          <span style={{ marginLeft: 6 }}>feekr-shell — Ctrl+~ yoki ESC bilan yopiladi</span>
          <button
            onClick={onClose}
            style={{ marginLeft: "auto", background: "transparent", border: "none", color: "var(--text-2)", fontSize: 16 }}
          >
            ✕
          </button>
        </div>

        <div ref={bodyRef} style={{ flex: 1, overflowY: "auto", padding: "12px 16px", fontSize: 13, lineHeight: 1.6 }}>
          {lines.map((l, i) => (
            <div
              key={i}
              style={{
                color:
                  l.kind === "err"
                    ? "var(--danger)"
                    : l.kind === "in"
                    ? "var(--text-0)"
                    : l.kind === "sys"
                    ? "var(--accent-2)"
                    : "var(--accent)",
                whiteSpace: "pre-wrap",
              }}
            >
              {l.text}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderTop: "1px solid var(--border)" }}>
          <span style={{ color: "var(--accent)" }}>$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
              else if (e.key === "Escape") onClose();
              else if (e.key === "ArrowUp") {
                e.preventDefault();
                const ni = Math.min(hist.length - 1, hi + 1);
                if (hist[ni] !== undefined) { setHi(ni); setInput(hist[ni]); }
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                const ni = hi - 1;
                if (ni < 0) { setHi(-1); setInput(""); } else { setHi(ni); setInput(hist[ni]); }
              }
            }}
            spellCheck={false}
            autoComplete="off"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--text-0)",
              fontFamily: "var(--font-mono)",
              fontSize: 14,
            }}
          />
        </div>
      </div>
    </div>
  );
}

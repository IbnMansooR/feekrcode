import { useNavigate, useParams, Link } from "react-router-dom";
import { getLanguage } from "../data/languages";
import { getLessonList } from "../content";
import { pick } from "../content/types";
import { useGame } from "../store/useGame";
import { useT } from "../i18n";

/** Duolingo uslubidagi vertikal dars yo'li */
export function LanguagePath() {
  const t = useT();
  const nav = useNavigate();
  const { langId = "" } = useParams();
  const locale = useGame((s) => s.settings.locale);
  const lang = getLanguage(langId);
  const lessons = getLessonList(langId);
  // Butun completed obyektini tanlaymiz (barqaror referens), massivni shu yerda olamiz.
  // Selektorda `?? []` qaytarish har renderда yangi massiv yaratib, infinite loop'ga olib keladi.
  const completed = useGame((s) => s.completed);
  const doneIds = completed[langId] ?? [];

  if (!lang) return <div style={{ padding: 40 }}>Til topilmadi.</div>;

  // Birinchi tugatilmagan dars — "joriy"
  const currentIdx = lessons.findIndex((l) => !doneIds.includes(l.id));

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "24px 24px 80px" }} className="fade-up">
      {/* Sarlavha */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
        <Link
          to="/"
          style={{
            color: "var(--text-1)",
            fontSize: 13,
            border: "1px solid var(--border)",
            padding: "6px 12px",
            borderRadius: 8,
          }}
        >
          ← {t("lang_back")}
        </Link>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            display: "grid",
            placeItems: "center",
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            color: lang.color,
            background: `${lang.color}1a`,
            border: `1px solid ${lang.color}55`,
          }}
        >
          {lang.glyph}
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: 20 }}>{lang.name}</h2>
          <div style={{ fontSize: 12.5, color: "var(--text-2)" }}>
            {doneIds.length}/{lessons.length} {t("lang_completed")} · {pick(lang.tagline, locale)}
          </div>
        </div>
      </div>

      {/* Yo'l */}
      <div style={{ position: "relative", marginTop: 28 }}>
        {lessons.map((lesson, i) => {
          const done = doneIds.includes(lesson.id);
          const isCurrent = i === currentIdx;
          const locked = i > currentIdx && currentIdx !== -1;
          // ilonsimon joylashuv
          const offset = Math.sin(i * 0.9) * 90;
          const state = done ? "done" : isCurrent ? "current" : locked ? "locked" : "unlocked";
          const bg =
            state === "done"
              ? "var(--done)"
              : state === "current"
              ? "var(--current)"
              : "var(--locked)";
          return (
            <div
              key={lesson.id}
              style={{
                display: "flex",
                justifyContent: "center",
                transform: `translateX(${offset}px)`,
                marginBottom: 6,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button
                  onClick={() => !locked && nav(`/lang/${langId}/lesson/${lesson.id}`)}
                  disabled={locked}
                  title={`${lang.name} — ${lesson.index}`}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    border: isCurrent ? "3px solid var(--accent-2)" : "2px solid var(--border)",
                    background: bg,
                    color: state === "locked" ? "var(--locked-text)" : "#04121a",
                    fontWeight: 700,
                    fontSize: 18,
                    display: "grid",
                    placeItems: "center",
                    cursor: locked ? "not-allowed" : "pointer",
                    boxShadow: isCurrent ? "0 0 22px var(--accent-glow)" : "none",
                    transition: "transform 0.15s",
                  }}
                  onMouseEnter={(e) => !locked && (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {done ? "✓" : locked ? "🔒" : lesson.index}
                </button>
                {i < lessons.length - 1 && (
                  <div style={{ width: 3, height: 22, background: done ? "var(--done)" : "var(--bg-3)" }} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./shell/Layout";
import { Boot } from "./views/Boot";
import { Home } from "./views/Home";
import { LanguagePath } from "./views/LanguagePath";
import { Lesson } from "./views/Lesson";
import { Settings } from "./views/Settings";
import { Achievements } from "./views/Achievements";
import { Workshop } from "./views/Workshop";
import { WorkshopPlay } from "./views/WorkshopPlay";
import { useGame } from "./store/useGame";
import { audio } from "./audio/sfx";

export default function App() {
  const hydrate = useGame((s) => s.hydrate);
  const hydrated = useGame((s) => s.hydrated);
  const sfx = useGame((s) => s.settings.sfx);
  const music = useGame((s) => s.settings.music);
  const volume = useGame((s) => s.settings.volume);
  const [entered, setEntered] = useState(
    () => sessionStorage.getItem("feekr:entered") === "1"
  );

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  // Audio sozlamalarini sinxronlaymiz (musiqa birinchi gesturedan keyin yangraydi)
  useEffect(() => {
    audio.setSettings({ sfx, music, volume });
  }, [sfx, music, volume]);

  if (!hydrated) return null;

  if (!entered) {
    return (
      <Boot
        onEnter={() => {
          audio.play("boot");
          sessionStorage.setItem("feekr:entered", "1");
          setEntered(true);
        }}
      />
    );
  }

  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="workshop/:id" element={<WorkshopPlay />} />
          <Route path="lang/:langId" element={<LanguagePath />} />
          <Route path="lang/:langId/lesson/:lessonId" element={<Lesson />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

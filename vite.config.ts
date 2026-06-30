import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Paketlash keyinroq hal qilinadi (Tauri/Electron). Hozir nisbiy yo'l bilan
// quramiz, shunda har qanday host ostida ishlaydi.
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 2000,
  },
});

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./monaco-setup";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

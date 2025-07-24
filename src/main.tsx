import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./builder-registry";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Welcome from "./pages/Welcome.tsx";
import { HashRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import DressingRoom from "./pages/DressingRoom.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dressing-room" element={<DressingRoom />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router와 Routes, Route를 임포트
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import ManagementPage from "./pages/ManagementPage";
import GlobalStyle from "../src/GlobalStyle";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/project/:gen/:id" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

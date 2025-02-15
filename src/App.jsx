import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router와 Routes, Route를 임포트
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import ManagementPage from "./pages/ManagementPage";
import CurriculumPage from "./pages/CurriculumPage";
import GlobalStyle from "../src/GlobalStyle";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import FAQPage from "./pages/FAQPage";
import MainHeader from "./components/header/MainHeader";
import MainFooter from "./components/footer/MainFooter";

function App() {
  return (
    <Router>
      <MainHeader/>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/curriculum/:part" element={<CurriculumPage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>    
      <MainFooter/>
    </Router>
  );
}

export default App;

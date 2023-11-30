import React from "react";
import Index from "./components/Index";
import { Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;

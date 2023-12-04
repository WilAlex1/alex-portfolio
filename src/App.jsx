import React from "react";
import Index from "./components/Index";
import { Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import Loading from './components/Loading'
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [loadingicon, setLoading] = useState(true);
useEffect(()=>{
  setLoading(true)
setTimeout(()=>{
  setLoading(false)
},2000)
},[])

  return (
    <div className="">
  {
    loadingicon ? <Loading /> : (
        <div>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
      )
     }
    </div>
  );
};

export default App;

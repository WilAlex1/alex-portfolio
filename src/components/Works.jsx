import React from "react";
import WorkdCard from "./WorkdCard";

const Works = () => {
  return (
    <div className="bg-[#1A1A1A] py-16" id="works">
      <div className="w-11/12 m-auto">
        <h1 className="text-white font-bold text-4xl uppercase text-center py-8">
          My Projects
        </h1>

        <WorkdCard />
      </div>
    </div>
  );
};

export default Works;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { works } from "./localdatabases";
const ProjectDetail = () => {
  const { id } = useParams();
  const projectD = works.find((x) => x._id === id);

  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-1 py-8 gap-4 md:grid-cols-2 p-4 bg-[#1A1A1A] border-b-2 border-white text-white">
        <div className="">
          <img src={projectD.image} alt="image1" className="rounded-lg" />
          <h1 className="font-bold text-2xl py-2">{projectD.project_name}</h1>
          <p className="text-xl py-4">{projectD.description}</p>
          <p className="font-bold text-2xl py-2">Project Duration</p>
          <p className="py-4">
            <span className="font-bold ">Technologies used:</span>{" "}
            {projectD.technologie}
          </p>
          <div className="flex items-center justify-between ">
            <a href="https://wa.me/message/PVALPBYVSQIBF1" target="blank">
              <button className="bg-green-400 rounded text-white p-4 w-full  flex items-center">
                <p className="font-bold uppercase"> Whatsap me</p>
                <FaWhatsapp className="mx-4" size={35} />
              </button>
            </a>
            <a href="mailto:wdounang@gmail.com" target="blank">
              <button className="bg-yellow-500 rounded text-white p-4 w-full flex items-center">
                <p className="font-bold uppercase"> Email me</p>
                <SiGmail className="mx-4" size={35} />
              </button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={projectD.image}
            alt=""
            className="h-full w-full border-[1px] border-white rounded p-[1px]"
          />
          <img
            src={projectD.image}
            alt=""
            className="h-full w-full border-[1px] border-white rounded p-[1px]"
          />
          <img
            src={projectD.image}
            alt=""
            className="h-full w-full border-[1px] border-white rounded p-[1px]"
          />
          <img
            src={projectD.image}
            alt=""
            className="h-full w-full border-[1px] border-white rounded p-[1px]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;

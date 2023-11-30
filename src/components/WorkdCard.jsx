import React from "react";
import { works } from "./localdatabases";
import { Link } from "react-router-dom";
const WorkdCard = () => {
  // const { image, description, technologie, project_name } = work;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {works.map((x) => (
        <div className="bg-gray-100 rounded-lg" key={x._id}>
          <img
            src={x.image}
            alt="project"
            className="overflow-auto rounded-t-lg"
          />
          <div className="p-4">
            <p className=" font-bold">{x.project_name}</p>
            <p>{x.description}</p>
            <p>
              <small className="font-bold">Technologies used</small>:{" "}
              {x.technologie}
            </p>
            <Link to={`/${x._id}`}>
              <button className="text-center bg-[#1A1A1A] text-white border-none p-2 rounded font-bold  w-full ">
                View project{" "}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkdCard;

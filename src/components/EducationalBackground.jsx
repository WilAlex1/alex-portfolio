import React from "react";
import { educationalBackground, experiences } from "./localdatabases";

const EducationalBackground = () => {
  return (
    <div className="bg-black text-white py-16 " id="Education">
      <div className="w-10/12 m-auto">
        <div className="pb-16">
          <p className="font-bold lg:text-4xl py-4">Educational Background</p>
          {educationalBackground.map((x) => (
            <div className="md:grid md:grid-cols-3 gap-4" key={x._id}>
              <div className="">
                <div className="flex items-center">
                  <h1>Institution:</h1>
                  <p className="ml-4">{x.school}</p>
                </div>
              </div>
              <p>{x.duration}</p>
              <div className="">{x.level_of_education}</div>
            </div>
          ))}
        </div>
        <p className="font-bold lg:text-4xl py-4">Experiences</p>
        {experiences.map((x) => (
          <div className="" key={x._id}>
            <div className="md:grid md:grid-cols-4 gap-4">
              <div className="">
                <p>Institution</p>
                <p className="uppercase font-bold">{x.company}</p>
              </div>
              <div className="">
                <p>Starting date</p>
                <p>{x.statingDate}</p>
              </div>
              <div className="">
                <p>End date</p>
                <p>{x.endDate}</p>
              </div>
              <div className="">
                <p>Roles</p>
                <p>{x.Roles}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalBackground;

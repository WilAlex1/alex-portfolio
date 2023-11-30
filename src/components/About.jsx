import React from "react";

const About = () => {
  return (
    <div className="bg-[#1A1A1A] text-white py-16 " id="about">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 w-10/12 m-auto gap-8">
        <div className="py-16px">
          <h1 className=" font-bold text-white text-3xl">
            Let's Try to get to know me{" "}
          </h1>
          <p className="text-xl py-4  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            aspernatur. Adipisci, neque alias. Sunt laudantium, reiciendis
            exercitationem quae unde earum at culpa nisi consequatur esse cumque
            velit animi dolor sed.
          </p>
          <p className="text-xl py-4  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            aspernatur. Adipisci, neque alias. Sunt laudantium, reiciendis
            exercitationem quae unde earum at culpa nisi consequatur esse cumque
            velit animi dolor sed.
          </p>
          <p className="text-xl py-4  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            aspernatur. Adipisci
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./alex1.jpg"
            alt="alex"
            className="rounded-[50%] border-white border-2 alex text-center"
          />
          <p className="text-center font-bold uppercase py-4 text-2xl">
            Wilfried Alex Dounang{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

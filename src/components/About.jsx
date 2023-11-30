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
          Dynamique, tolérant, ambitieux, toujours avide de savoir, 
          je possède un esprit de travail collaboratif et une expertise 
          de très bonne qualités en Génie Civil. 
          </p>
          <p className="text-xl py-  ">
            
          Mes compétences s'étendent également
           aux logiciels d'études techniques , travail et conduite des travaux sur chantier et à des connaissances générales
            en informatique. 
          </p>
          <p className="text-xl py-4  ">
          Ces qualités me définissent parfaitement et contribuent
             à rendre mon profil professionnel particulier.
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

import React from "react";

const Homepage = () => {
  return (
    <div className="bg-black  ">
      <div className="w-10/12 m-auto py-16 flex items-center md:h-ful ">
        <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 text-white">
          <div className="">
            <img
              src="/homepage.jpg"
              alt="homepage"
              className="h-full w-full rounded border-white border-2"
            />
          </div>
          <div className="">
            <h1 className="md:text-2xl homepage_text">
            Dans l'élan passionné d'un rêve devenu réalité, émerge une idée lumineuse.
            </h1>{" "}
            <br />
            <p className="md:text-2xl homepage_text"> Mon amour pour ce que je fais m'inspire à créer non seulement pour 
              moi-même mais aussi pour impacter positivement ceux qui m'entourent.</p>
              <br />
            <p className="md:text-2xl homepage_text">
            Embarquez avec moi 
          dans un périple visionnaire au 
          cœur de l'industrie de la construction, là où l'innovation est notre boussole
            </p>
            
           
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

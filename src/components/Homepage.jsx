import React from "react";

const Homepage = () => {
  return (
    <div className="bg-black h-[calc(100vh-84px)]">
      <div className="w-10/12 m-auto py-16 flex items-center md:h-full ">
        <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 text-white">
          <div className="">
            <img
              src="/homepage.jpg"
              alt="homepage"
              className="h-full w-full rounded border-white border-2"
            />
          </div>
          <div className="">
            <h1 className="md:text-4xl homepage_text">
              Embark on a visionary construction journey with our AutoCAD and
              Revit master. At the innovation forefront,
            </h1>{" "}
            <br />
            <p className="md:text-4xl homepage_text">
              they skillfully transform blueprints into awe-inspiring
              structures, shaping a future of construction excellence.
            </p>
            <br />
            <p className="md:text-4xl homepage_text">
              they skillfully transform blueprints into awe-inspiring
              structures, shaping a future of construction excellence.
            </p>
            <br />
            <p className="md:text-4xl homepage_text">
              they skillfully transform blueprints into awe-inspiring
              structures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

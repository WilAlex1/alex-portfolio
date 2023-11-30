import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-[#1A1A1A] py-16 text-white" id="testimonials">
      <div className="w-11/12 m-auto flex flex-col items-center">
        <p className="text-center text-2xl md:w-[60%] m-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          temporibus quidem laborum explicabo incidunt nulla hic quaerat aliquam
          modi dolorem?
        </p>
        <div className="py-4">
          <div className="flex flex-col items-center">
            <img src="/alison.jpg" alt="ali" className="alison rounded-[50%]" />
            <p className="py-4">Alison De Best</p>
            <p className="font-bold text-yellow-500">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

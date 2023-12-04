import React, { useState } from "react";
import { useEffect } from "react";
import { testimonials } from "./localdatabases";

const Testimonial = () => {

  const [currentSlide, setCurrentSlide]= useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1)),
      10000
    );
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="bg-[#1A1A1A] py-16 text-white" id="testimonials">
      <div className="w-11/12 m-auto flex flex-col items-center">
        <p className="text-center text-2xl md:w-[60%] m-auto">
         {testimonials[currentSlide]?.text}
        </p>
        <div className="py-4">
          <div className="flex flex-col items-center">
            <img src={testimonials[currentSlide]?.photo}
             alt="ali" className="alison rounded-[50%]" />
            <p className="py-4"> {testimonials[currentSlide]?.name}</p>
            <p className="font-bold text-yellow-500">{testimonials[currentSlide]?.titre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

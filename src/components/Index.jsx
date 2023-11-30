import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import Testimonial from "./Testimonial";
import Works from "./Works";
import EducationalBackground from "./EducationalBackground";
const Index = () => {
  return (
    <div>
      <Header />

      <Homepage />
      <About />
      <EducationalBackground />
      <Works />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Index;

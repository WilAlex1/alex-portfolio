import React from "react";
import { FaMailBulk, FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#131313] text-white py-16" id="Contact">
      <div className="w-10/12 m-auto">
        <h1 className="capitalize text-yellow-500 font-bold text-center py-2">
          get in touch with me
        </h1>
        <p className="text-white text-center font-bold text-3xl underline">
          wdounang@gmail.com
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 py-16">
          <div className="flex flex-col  items-center">
            <img className="logo" src="/logo_alex.png" alt="logo1" />
            <p className="text-white uppercase font-4xl font-bold">D.W.A</p>
          </div>
          <div className="">
            Salé Tabriquet <br />
            Av Mohamed 5, Station La Post
          </div>
          <div className="">
            <h1>+2126019915106</h1>
            <div className="flex items-center py-2">
              <a href="https://wa.me/message/PVALPBYVSQIBF1 " target="blank">
                <FaWhatsappSquare size={25} />
              </a>
              <a href="" target="blank">
                <FaInstagramSquare size={25} className="m-2" />
              </a>
              <a href="" target="blank">
                <FaLinkedin size={25} className="m-2" />
              </a>
              <a href="mailto:wdounang@gmail.com">
                <IoIosMail size={35} className="m-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright border-t-2 py-4  border-white">
          <p className="text-center ">
            &copy; 2017-{new Date().getFullYear()} &nbsp; DWA- Zenith
            Constructions. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

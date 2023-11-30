import React, { useState } from "react";
import { navigations } from "./localdatabases";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#1A1A1A] py-4 h-20">
        <div className="w-11/12 m-auto text-white">
          {/* desktop */}
          <div className="w-11/12 m-auto desktop flex items-center justify-between ">
            <div className="logo1">
              <Link to="/">
                <img
                  src="/logo_alex1.png"
                  alt="logo"
                  className="h-[60px] rounded"
                />
              </Link>
            </div>
            <div className=" flex items-center">
              {navigations.map((x) => (
                <ul key={x._id} className="flex">
                  <a href={`/#${x.lien}`}>
                    <li className="ml-4 font-bold capitalize link">{x.lien}</li>
                  </a>
                </ul>
              ))}
            </div>
          </div>
          {/* mobile */}
          <nav className="mobile md:hidden  ">
            <div className="flex items-center justify-between">
              <div className="">
                <img
                  src="/logo_alex1.png"
                  alt="logo"
                  className="h-[40px] rounded"
                />
              </div>
              <div className="">
                {open ? (
                  <GrClose onClick={() => setOpen(false)} />
                ) : (
                  <BiMenuAltRight size={30} onClick={() => setOpen(true)} />
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="mobile_view">
          {open && (
            <div className="h-[calc(100vh-84px)] bg-black">
              {navigations.map((x) => (
                <ul key={x._id}>
                  <a
                    href={`/#${x.lien}`}
                    onClick={() => setOpen(false)}
                    className=""
                  >
                    <li className="bg-[#1A1A1A] text-white capitalize mobile_link p-4 border-[1px] border-white rounded m-2">
                      {x.lien}
                    </li>
                  </a>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

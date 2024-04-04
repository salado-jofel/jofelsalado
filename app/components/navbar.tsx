"use client";
import React, { useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className=" w-full h-24 bg-black fixed top-0  z-50 bg-opacity-30">
        <div className="px-10 h-full  flex flex-row justify-between items-center">
          <div className="h-full text-white font  flex items-center">LOGO</div>
          <div className="h-full text-white font flex items-center">
            <div
              className="cursor-pointer text-[1.8rem]"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode == false ? <MdDarkMode /> : <MdOutlineDarkMode />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { Provider, useDispatch } from "react-redux";
import { darkModePressed } from "../home/_redux/dark-mode-slice";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className=" w-full h-[75px] bg-black fixed top-0  z-50 bg-opacity-30">
      <div className="px-10 h-full  flex flex-row justify-between items-center">
        <div className="h-full text-white font  flex items-center">LOGO</div>
        <div className="h-full text-white font flex items-center gap-[40px]">
          <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
            Github
          </span>
          <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
            Resume
          </span>
          <div
            className="cursor-pointer text-[24px]"
            onClick={() => {
              setDarkMode(!darkMode);
              dispatch(darkModePressed(!darkMode));
            }}
          >
            {darkMode == false ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </div>
        </div>
      </div>
    </div>
  );
}

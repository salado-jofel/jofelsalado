"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { Provider, useDispatch } from "react-redux";
import { darkModePressed } from "../home/_redux/dark-mode-slice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

export default function Navbar() {
  const state = useAppSelector((state: RootState) => state.darkMode);
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      dispatch(darkModePressed(true));
    }
  }, []);

  useEffect(() => {
    if (!state.darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [state.darkMode, dispatch]);

  return (
    <div className=" w-full h-[75px] bg-black fixed top-0  z-50 bg-opacity-30">
      <div className="px-10 h-full  flex flex-row justify-between items-center">
        <div className="h-full text-white  dark:text-[#8FD400] font  flex items-center font-roboto font-[1000] text-[24px] tracking-[0.5rem]">
          JFL
        </div>
        <div className="h-full text-white dark:text-[#8FD400] font flex items-center gap-[40px]">
          <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
            Github
          </span>
          <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
            Resume
          </span>
          <div
            className="cursor-pointer text-[24px]"
            onClick={() => {
              dispatch(darkModePressed(!state.darkMode));
            }}
          >
            {state.darkMode == false ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []); // Include dispatch in the dependency array

  useEffect(() => {
    if (darkMode == true) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className=" w-full h-[75px] bg-black fixed top-0  z-50 ">
      <div className="px-10 h-full  flex flex-row justify-between items-center">
        <div className="h-full dark:text-white  text-[#8FD400] flex items-start justify-start w-full duration-300">
          {darkMode == false ? (
            <Image
              unoptimized
              width={2000}
              height={346}
              src={"/assets/images/logodark.png"}
              alt={""}
              className="object-contain w-[130px]  md:w-[170px] h-full duration-300"
            />
          ) : (
            <Image
              unoptimized
              width={2000}
              height={346}
              src={"/assets/images/logolight.png"}
              alt={""}
              className="object-contain w-[130px] md:w-[170px] h-full duration-300"
            />
          )}
        </div>
        <div className="h-full dark:text-white text-[#8FD400] font flex items-center gap-[40px] duration-300 justify-center">
          <Link
            href={"https://github.com/salado-jofel/my-portfolio"}
            target="_blank"
          >
            <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
              Github
            </span>
          </Link>

          <Link
            href={""}
            target="_blank"
          >
            <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
              Resume
            </span>
          </Link>
          <div
            className="cursor-pointer text-[24px]"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode === false ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </div>
        </div>
      </div>
    </div>
  );
}
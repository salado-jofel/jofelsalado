"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import headerlogodark from "../../public/assets/images/logodark.png";
import headerlogolight from "../../public/assets/images/logolight.png";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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
    <div className=" w-full h-[75px] bg-black sticky top-0  z-[999] ">
      <div className="px-[30px] h-full  flex flex-row justify-between items-center ">
        <div className="h-full dark:text-white  text-[#8FD400] flex items-start justify-start w-full duration-300">
          {darkMode == false ? (
            <Image
              priority={true}
              quality={100}
              unoptimized={true}
              width={2000}
              height={346}
              src={headerlogodark}
              alt={"Logo"}
              className="object-contain w-[130px]  md:w-[170px] h-full duration-300"
            />
          ) : (
            <Image
              priority={true}
              quality={100}
              unoptimized={true}
              width={2000}
              height={346}
              src={headerlogolight}
              alt={"Logo"}
              className="object-contain w-[130px] md:w-[170px] h-full duration-300"
            />
          )}
        </div>
        <div className="h-full dark:text-white text-[#8FD400] font flex items-center gap-[25px] duration-300 justify-center ">
          <div
            className=" visible md:hidden  w-full cursor-pointer"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <RxHamburgerMenu className="dark:text-white text-[#8FD400] text-[24px]" />
          </div>
          <div className=" items-center gap-[15px] hidden md:flex">
            <Link href={"../"}>
              <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
                Home
              </span>
            </Link>

            <Link href={"../resume"}>
              <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
                Resume
              </span>
            </Link>
            <Link
              href={"https://github.com/salado-jofel/my-portfolio"}
              target="_blank"
            >
              <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
                Github
              </span>
            </Link>
          </div>
          <div
            className="cursor-pointer text-[24px] "
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode === false ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </div>
        </div>
      </div>
      <div
        className={`${
          openMenu ? "h-[150px] pt-[20px] pb-[10px]   " : "h-[0px]"
        } dark:border-white border-t border-[#8FD400] overflow-hidden duration-300 flex flex-col justify-between w-full z-[999] bg-black  visible md:hiddsen  dark:text-white text-[#8FD400] px-[20px] `}
      >
        <div className="flex-col flex items-start justify-center gap-[8px] z-[999]">
          <Link
            href={"../"}
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
              Home
            </span>
          </Link>

          <Link
            href={"../resume"}
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
              Resume
            </span>
          </Link>
          <Link
            onClick={() => {
              setOpenMenu(false);
            }}
            href={"https://github.com/salado-jofel/my-portfolio"}
            target="_blank"
          >
            <span className=" font-roboto font-[800] text-[14px] cursor-pointer">
              Github
            </span>
          </Link>
        </div>
        <div
          className="w-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <div className=" w-[27px] flex items-center justify-center h-[27px] relative overflow-hidden">
            {darkMode == false ? (
              <Image
                unoptimized
                width={2000}
                height={346}
                src={"/assets/images/logoicondark.png"}
                alt={""}
                className="object-contain w-[130px]  md:w-[170px] h-full duration-300"
              />
            ) : (
              <Image
                unoptimized
                width={2000}
                height={346}
                src={"/assets/images/logoiconlight.png"}
                alt={""}
                className="object-contain w-[130px]  md:w-[170px] h-full duration-300"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function HomeTitle() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col dark:bg-[#F5F5F7]/60  bg-[#8FD400]/80 sdark:bg-[#A3CB1E]/60 rounded-lg shadow-2xl backdrop-blur-xs hover:backdrop-blur-md cursor-pointer duration-300 group">
      <div className="scale-100 group-hover:scale-125 cursor-pointer duration-300 flex flex-col items-center justify-center">
        <h1 className=" font-roboto font-[800] tracking-[5px] dark:text-black  text-[26px] sm:text-[28px] md:text-[34px] text-white duration-300">
          JOFEL SALADO
        </h1>
        <h1 className=" font-roboto font-[600] tracking-[10px] dark:text-gray-800 text-gray-700  text-[8px] sm:text-[10px] md:text-[12px] italic duration-300">
          SOFTWARE ENGINEER
        </h1>
      </div>
    </div>
  );
}

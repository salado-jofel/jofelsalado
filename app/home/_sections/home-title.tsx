import React from "react";

export default function HomeTitle() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-[#F5F5F7]/60  dark:bg-[#8FD400]/80 sdark:bg-[#A3CB1E]/60 rounded-lg shadow-2xl backdrop-blur-xs hover:backdrop-blur-md cursor-pointer duration-300 group">
      <div className="scale-100 group-hover:scale-125 cursor-pointer duration-300 flex flex-col items-center justify-center">
        <h1 className=" font-roboto font-[800] tracking-[5px] text-black  text-[26px] sm:text-[28px] md:text-[34px] dark:text-white">
          JOFEL SALADO
        </h1>
        <h1 className=" font-roboto font-[600] tracking-[10px] text-gray-800 dark:text-gray-700  text-[8px] sm:text-[10px] md:text-[12px] italic">
          SOFTWARE ENGINEER
        </h1>
      </div>
    </div>
  );
}

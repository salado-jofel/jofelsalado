import React from "react";

export default function HomeTitle() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-[#F5F5F7]/60 rounded-lg shadow-2xl backdrop-blur-xs hover:backdrop-blur-md cursor-pointer duration-300 group">
      <div className="scale-100 group-hover:scale-125 cursor-pointer duration-300">
        <h1 className=" font-roboto font-[800] tracking-[5px] text-black text-[34px]">
          JOFEL SALADO
        </h1>
        <h1 className=" font-roboto font-[600] tracking-[10px] text-gray-800 text-[12px] italic">
          SOFTWARE ENGINEER
        </h1>
      </div>
    </div>
  );
}

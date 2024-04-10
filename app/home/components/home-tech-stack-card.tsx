import React from "react";
import Image from "next/image";

export default function HomeTechStackCard({
  iconTitle,
  iconPath,
  iconAlt,
}: {
  iconTitle: string;
  iconPath: string;
  iconAlt: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-[10px] hover:scale-125 duration-300 cursor-pointer group">
      <h1 className="font-roboto text-white font-[800] text-[16px]">
        {iconTitle}
      </h1>
      <div className=" border-2 p-[25px] rounded-lg border-white group-hover:bg-[#F5F5F7]/60 duration-300">
        <Image
          width={100}
          height={100}
          src={iconPath}
          alt={iconAlt}
          className="w-[60px] h-[60px]"
        />
      </div>
    </div>
  );
}

import React, { ReactNode } from "react";

export default function HomeWorkExperienceCard({
  company,
  position,
  date,
  details,
}: {
  company: string;
  position: string;
  date: string;
  details: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[20px] dark:bg-[#F5F5F7]/60  bg-[#8FD400]/80 rounded-lg shadow-2xl backdrop-blur-xs p-[20px] duration-300">
      <div className="flex flex-col">
        <h1 className=" font-roboto font-[800] text-[20px] md:text-[24px] dark:text-black text-white">
          {company}
        </h1>
        <span className=" font-roboto font-[800] text-[12px] md:text-[14px] dark:text-gray-700 text-white">
          {position}
        </span>
        <span className=" font-roboto font-[800] text-[12px] dark:text-gray-700 italic text-white">
          {date}
        </span>
      </div>
      {details}
    </div>
  );
}

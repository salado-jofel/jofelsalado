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
    <div className="flex flex-col gap-[20px] bg-[#F5F5F7]/60  dark:bg-[#8FD400]/80 rounded-lg shadow-2xl backdrop-blur-xs p-[20px]">
      <div className="flex flex-col">
        <h1 className=" font-roboto font-[800] text-[24px] text-black dark:text-white">
          {company}
        </h1>
        <span className=" font-roboto font-[800] text-[14px] text-gray-700 dark:text-white">
          {position}
        </span>
        <span className=" font-roboto font-[800] text-[12px] text-gray-700 italic dark:text-white">
          {date}
        </span>
      </div>
      {details}
    </div>
  );
}

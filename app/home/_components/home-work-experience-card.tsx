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
    <div className="flex flex-col gap-[20px] bg-[#F5F5F7]/60 rounded-lg shadow-2xl backdrop-blur-xs p-[20px]">
      <div className="flex flex-col">
        <h1 className=" font-roboto font-[800] text-[24px] text-black">
          {company}
        </h1>
        <span className=" font-roboto font-[800] text-[14px] text-gray-700">
          {position}
        </span>
        <span className=" font-roboto font-[800] text-[12px] text-gray-700 italic">
          {date}
        </span>
      </div>
      {details}
    </div>
  );
}

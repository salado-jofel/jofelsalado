import React from "react";
import resume from "../../../public/assets/images/jofelsalado.png";
import ResumeFrame from "../_components/resume-frame";

export default function ResumeViewer() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[50px]">
      <ResumeFrame resumePath={resume} />
      <a
        className="duration-300 scale-100 hover:scale-125"
        href="/assets/jofelsalado.pdf"
        target="_blank"
        download
      >
        <div className="py-[12px] px-[16px] bg-[#8FD400] shadow-lg whitespace-nowrap font-roboto text-[14px] font-[800] rounded-md text-white dark:bg-white dark:text-black">
          Download PDF
        </div>
      </a>
    </div>
  );
}

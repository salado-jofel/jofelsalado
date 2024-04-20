import React from "react";
import Image from "next/image";
import resume from "../../../public/assets/images/jflresume.jpg";
export default function Resume() {
  return (
    <div className="bg-[#8FD400] dark:bg-white w-full p-[30px] rounded-md shadow-lg duration-300">
      <Image
        quality={100}
        loading="lazy"
        placeholder="blur"
        width={2482}
        height={3510}
        src={resume}
        alt={"Resume"}
        className="object-contain  duration-300"
      />
    </div>
  );
}

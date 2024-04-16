import React from "react";

export default function HomeContentTitle({ title }: { title?: string }) {
  return (
    <h1 className="dark:text-white text-[#8FD400] font-roboto text-[24px] md:text-[30px] font-[800] duration-300">
      {title}
    </h1>
  );
}

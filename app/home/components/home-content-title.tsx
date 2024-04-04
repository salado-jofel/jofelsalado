import React from "react";

export default function HomeContentTitle({ title }: { title?: string }) {
  return (
    <h1 className="text-white font-roboto text-[30px] font-[800]">{title}</h1>
  );
}

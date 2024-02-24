import React from "react";

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      className=" absolute top-0 z-[-1] w-full h-full object-cover"
      src={require("../../public/assets/videos/day.mp4")}
    />
  );
}

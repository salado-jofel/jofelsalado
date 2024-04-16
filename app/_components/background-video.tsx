import React from "react";
export function BackgroundVideo() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className=" fixed top-0 left-0 right-0 bottom-0 z-[-1] w-full h-full object-cover visible dark:invisible"
      >
        <source
          src="/assets/videos/night.mp4"
          type="video/mp4"
        />
      </video>
      <video
        autoPlay
        loop
        muted
        className=" fixed top-0 left-0 right-0 bottom-0 z-[-1] w-full h-full object-cover invisible dark:visible"
      >
        <source
          src="/assets/videos/day.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

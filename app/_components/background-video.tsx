import React from "react";
export function BackgroundVideo() {
  return (
    <>
      <video
        poster="/assets/images/nightposterblur.png"
        autoPlay
        loop
        muted
        className=" opacity-50 fixed top-0 left-0 right-0 bottom-0 z-[-999] w-screen h-screen object-cover visible dark:invisible"
      >
        <source
          src="/assets/videos/night.mp4"
          type="video/mp4"
        />
      </video>
      <video
        poster="/assets/images/dayposterblur.png"
        autoPlay
        loop
        muted
        className="opacity-50 fixed top-0 left-0 right-0 bottom-0 z-[-999] w-screen h-screen object-cover invisible dark:visible"
      >
        <source
          src="/assets/videos/day.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

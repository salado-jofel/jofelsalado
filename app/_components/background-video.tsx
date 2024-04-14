import React from "react";
export function BackgroundVideo() {
  return (
    <>
      {/* <video
        autoPlay
        muted
        loop
        // className={` absolute top-0 z-[-1] w-full h-full object-cover ${
        //   state.darkMode == false ? "visible" : "hidden"
        // }`}
        className=" absolute top-0 z-[-1] w-full h-full object-cover visible dark:invisible"
        src={require("../../public/assets/videos/night.mp4")}
      /> */}
      <video
        autoPlay
        loop
        muted
      >
        <source
          src="day.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* <video
        autoPlay
        muted
        loop
        // className={` absolute top-0 z-[-1] w-full h-full object-cover ${
        //   state.darkMode == true ? "visible" : "hidden"
        // }`}
        className=" absolute top-0 z-[-1] w-full h-full object-cover invisible dark:visible"
        src={require("../../public/assets/videos/day.mp4")}
      /> */}
    </>
  );
}

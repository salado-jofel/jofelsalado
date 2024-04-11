"use client";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React from "react";

export function BackgroundVideo() {
  const state = useAppSelector((state: RootState) => state.darkMode);
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className={` absolute top-0 z-[-1] w-full h-full object-cover ${
          state.darkMode == false ? "visible" : "hidden"
        }`}
        src={require("../../public/assets/videos/night.mp4")}
      />
      <video
        autoPlay
        muted
        loop
        className={` absolute top-0 z-[-1] w-full h-full object-cover ${
          state.darkMode == true ? "visible" : "hidden"
        }`}
        src={require("../../public/assets/videos/day.mp4")}
      />
    </>
  );
}

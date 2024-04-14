"use client";
import Slider from "@ant-design/react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { twMerge } from "tailwind-merge";
export default function HomeCarousel({
  containerClassName,
  carouselSlide,
  carouselSettings,
}: {
  containerClassName?: string;
  carouselSlide?: any;
  carouselSettings?: any;
}) {
  return (
    <div
      className={twMerge(
        "bg-black  w-full md:w-[350px] h-[400px] overflow-hidden rounded-lg shadow-2xl",
        containerClassName
      )}
    >
      <Slider
        {...carouselSettings}
        className="overflow-hidden bg-black"
      >
        {carouselSlide}
      </Slider>
    </div>
  );
}

"use client";
import Slider from "@ant-design/react-slick";
import React, { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ContentTitle from "./home-content-title";
import ContentDetails from "./home-content-details";
import { twMerge } from "tailwind-merge";
export default function HomeCarousel({
  containerClassName,
  carouselSlide,
  carouselSettings,
}: {
  containerClassName?: string;
  carouselSlide?: ReactNode;
  carouselSettings?: any;
}) {
  var images = [
    {
      id: 0,
      path: "/assets/images/aboutme1.jpg",
    },
    {
      id: 1,
      path: "/assets/images/aboutme2.jpg",
    },
    {
      id: 3,
      path: "/assets/images/aboutme2.jpg",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div
      className={twMerge(
        "bg-[#F5F5F7]/60 w-[350px] h-[400px] overflow-hidden rounded-lg shadow-2xl",
        containerClassName
      )}
    >
      <Slider
        {...settings}
        className="overflow-hidden"
      >
        {/* <>
          {images.map((image) => {
            console.log(image);
            <div className=" h-[400px] overflow-hidden">
              <Image
                width={4032}
                height={3032}
                src={image.path}
                alt={""}
                className="object-cover w-full h-full"
              />
            </div>;
          })}
        </> */}
        <div className=" h-[400px] overflow-hidden">
          <Image
            width={4032}
            height={3032}
            src={"/assets/images/aboutme2.jpg"}
            alt={""}
            className="object-cover w-full h-full"
          />
        </div>
        ;
        {/* <div className=" h-[400px] overflow-hidden">
          <Image
            width={4032}
            height={3032}
            src={"/assets/images/aboutme1.jpg"}
            alt={""}
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" h-[400px] overflow-hidden">
          <Image
            width={4032}
            height={3032}
            src={"/assets/images/aboutme1.jpg"}
            alt={""}
            className="object-cover w-full h-full"
          />
        </div> */}
      </Slider>
    </div>
  );
}

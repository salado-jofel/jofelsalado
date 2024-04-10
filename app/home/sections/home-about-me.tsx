"use client";
import Slider from "@ant-design/react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ContentTitle from "../components/home-content-title";
import ContentDetails from "../components/home-content-details";
import Carousel from "../components/home-carousel";
import HomeContentDetails from "../components/home-content-details";
import HomeContentTitle from "../components/home-content-title";
import HomeCarousel from "../components/home-carousel";
export default function HomeAboutMe() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  var images = [
    {
      id: 0,
      path: "/assets/images/about_me_1.jpg",
    },
    {
      id: 1,
      path: "/assets/images/about_me_2.jpg",
    },
    {
      id: 3,
      path: "/assets/images/about_me_3.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-[30px]">
      <HomeContentTitle title="About Me" />
      <div className="flex flex-col md:flex-row gap-[30px] ">
        <HomeContentDetails
          details={
            <p className="text-white flex-1">
              Hey there! I'm Jofel Salado, a software engineer with a year of
              hands-on experience. I thrive on solving complex problems and
              crafting innovative solutions. I'm an avid learner and always
              exploring new technologies. Let's build something amazing
              together!
            </p>
          }
        />

        <HomeCarousel
          carouselSettings={settings}
          carouselSlide={images.map((image: any) => (
            <div
              key={image.id}
              className="h-[400px] overflow-hidden bg-black"
            >
              <Image
                width={4032}
                height={3032}
                src={image.path}
                alt={""}
                className="object-cover w-full h-full opacity-70 bg-black"
              />
            </div>
          ))}
        />
      </div>
    </div>
  );
}

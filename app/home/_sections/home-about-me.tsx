import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import HomeContentDetails from "../_components/home-content-details";
import HomeContentTitle from "../_components/home-content-title";
import HomeCarousel from "../_components/home-carousel";

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
      path: "/assets/images/aboutme1.jpg",
    },
    {
      id: 1,
      path: "/assets/images/aboutme2.jpg",
    },
    {
      id: 3,
      path: "/assets/images/aboutme3.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-[30px] ">
      <HomeContentTitle title="About Me" />
      <div className="flex flex-col md:flex-row gap-[30px] ">
        <HomeContentDetails
          details={
            <p className="text-white flex-1 ">
              Hey there! I&apos;m Jofel Salado, a software engineer with a year
              of hands-on experience. I thrive on solving complex problems and
              crafting innovative solutions. I&apos;m an avid learner and always
              exploring new technologies. Let&apos;s build something amazing
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
                unoptimized
                width={4032}
                height={3032}
                src={image.path}
                alt={""}
                className="object-cover w-full h-full dark:opacity-70 opacity-50 bg-black"
              />
            </div>
          ))}
        />
      </div>
    </div>
  );
}

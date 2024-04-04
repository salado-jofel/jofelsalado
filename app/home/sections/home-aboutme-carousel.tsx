"use client";
import Slider from "@ant-design/react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ContentTitle from "../components/home-content-title";
import ContentDetails from "../components/home-content-details";
import Carousel from "../components/home-carousel";
export default function HomeAboutMeCarousel() {
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
      path: "/assets/images/aboutme2.jpg",
    },
  ];
  return (
    <div className="w-full">
      <ContentTitle title="About Me" />
      <div className="flex flex-row gap-[20px]">
        <ContentDetails
          details="Hey there! I'm Jofel Salado, a software engineer with a year of hands-on
      experience. I thrive on solving complex problems and crafting innovative
      solutions. I'm an avid learner and always exploring new technologies.
      Let's build something amazing together!"
        />
        {/* <Carousel
        // carouselSettings={settings}
        // carouselSlide={
        //   <>
        //     {images.map((image) => {
        //       <div
        //         key={image.id}
        //         className=" h-[400px] overflow-hidden"
        //       >
        //         <Image
        //           width={4032}
        //           height={3032}
        //           src={image.path}
        //           alt={""}
        //           className="object-cover w-full h-full"
        //         />
        //       </div>;
        //     })}
        //   </>
        // }
        /> */}
        <div className="bg-[#F5F5F7]/60 w-[350px] h-[400px] overflow-hidden rounded-lg shadow-2xl">
          <Slider
            {...settings}
            className="overflow-hidden"
          >
            <>
              {images.map((image) => {
                <div
                  key={image.id}
                  className=" h-[400px] overflow-hidden"
                >
                  <Image
                    width={4032}
                    height={3032}
                    src={image.path}
                    alt={""}
                    className="object-cover w-full h-full"
                  />
                </div>;
              })}
            </>

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
      </div>
    </div>
  );
}

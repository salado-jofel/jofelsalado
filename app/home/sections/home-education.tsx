import React from "react";
import Image from "next/image";
import HomeCarousel from "../components/home-carousel";
import HomeContentTitle from "../components/home-content-title";
import HomeContentDetails from "../components/home-content-details";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
var images = [
  {
    id: 0,
    path: "/assets/images/education1.jpg",
  },
  {
    id: 1,
    path: "/assets/images/education2.jpg",
  },
  {
    id: 3,
    path: "/assets/images/education3.jpg",
  },
];
export default function HomeEducation() {
  return (
    <div className="w-full flex items-center justify-start flex-col gap-[30px] ">
      <HomeContentTitle title="Educational Attainment" />
      <div className="flex flex-col gap-[40px] justify-center items-center">
        <HomeCarousel
          containerClassName="w-full md:w-[650px] h-[400px] md:h-[350px]"
          carouselSettings={settings}
          carouselSlide={images.map((image: any) => (
            <div
              key={image.id}
              className="h-[350px] overflow-hidden bg-black"
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
        <div className="flex w-full items-center justify-start">
          <HomeContentDetails
            details={
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col">
                  <h1 className=" font-roboto font-[800] text-[24px]">
                    University of Cebu - LM Campus
                  </h1>
                  <span className=" font-roboto font-[800] text-[14px] text-gray-400 italic">
                    2019 - 2023
                  </span>
                </div>
                <ul className="font-robot font-[800] text-gray-300 text-[16px]">
                  <li>- Bachelor of Science in Information Technology</li>
                  <li>- Major in Programming</li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

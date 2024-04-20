import React from "react";
import Image from "next/image";
import HomeCarousel from "../_components/home-carousel";
import HomeContentTitle from "../_components/home-content-title";
import HomeContentDetails from "../_components/home-content-details";
import education1 from "../../../public/assets/images/education1.jpg";
import education2 from "../../../public/assets/images/education2.jpg";
import education3 from "../../../public/assets/images/education3.jpg";
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
    path: education1,
  },
  {
    id: 1,
    path: education2,
  },
  {
    id: 3,
    path: education3,
  },
];
export default function HomeEducation() {
  return (
    <div className=" flex  flex-col gap-[30px] ">
      <div className="w-full flex justify-center items-center">
        <HomeContentTitle title="Educational Attainment" />
      </div>
      <div className="flex flex-col gap-[40px] justify-center items-center">
        <HomeCarousel
          containerClassName="w-full md:w-[650px] h-[350px] "
          carouselSettings={settings}
          carouselSlide={images.map((image: any) => (
            <div
              key={image.id}
              className="h-[350px] overflow-hidden bg-black"
            >
              <Image
                quality={100}
                loading="lazy"
                placeholder="blur"
                width={4032}
                height={3032}
                src={image.path}
                alt={"Education Images"}
                className="object-cover w-full h-full dark:opacity-70 opacity-50 bg-black duration-300"
              />
            </div>
          ))}
        />
        <div className="flex w-full items-center justify-start">
          <HomeContentDetails
            details={
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col">
                  <h1 className=" font-roboto font-[800] text-[20px] sm:text-[24px]">
                    University of Cebu - LM Campus (College)
                  </h1>
                  <span className=" font-roboto font-[800] text-[14px] text-gray-400 italic">
                    2019 - 2023
                  </span>
                </div>
                <ul className="font-robot font-[800] text-gray-300 text-[14px] sm:text-[16px]">
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

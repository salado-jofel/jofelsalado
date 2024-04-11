import React from "react";

import HomeCarousel from "../_components/home-carousel";
import HomeContentDetails from "../_components/home-content-details";
import HomeContentTitle from "../_components/home-content-title";
import HomeWorkExperienceCard from "../_components/home-work-experience-card";
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
export default function HomeWorkExperience() {
  return (
    <div className="w-full flex items-start justify-start flex-col gap-[30px]">
      <HomeContentTitle title="Work Experience" />
      <div className="flex flex-col gap-[20px] justify-center items-center">
        <div className="flex w-full items-center justify-start">
          <HomeContentDetails
            details={
              <div className="flex gap-[25px] flex-col">
                <HomeWorkExperienceCard
                  company={"Koda Kollectiv"}
                  position={"Software Engineer Intern"}
                  date={"09/19/2022 - 02/20/2023"}
                  details={
                    <ul className="font-robot font-[800] text-[16px] text-gray-700">
                      <li>- Assist minor/major software development tasks</li>
                    </ul>
                  }
                />
                <HomeWorkExperienceCard
                  company={"Koda Kollectiv"}
                  position={"Software Engineer"}
                  date={"02/20/2023 - Present"}
                  details={
                    <ul className="font-robot font-[800] text-[16px] text-gray-700">
                      <li>
                        - Bulding and maintaining websites using Next JS,
                        Typescript and Tailwind CSS
                      </li>
                      <li>
                        - Bulding and maintaining mobile apps for both Android
                        and iOS using Flutter
                      </li>
                    </ul>
                  }
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

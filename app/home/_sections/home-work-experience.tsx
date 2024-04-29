import React from "react";
import HomeContentDetails from "../_components/home-content-details";
import HomeContentTitle from "../_components/home-content-title";
import HomeWorkExperienceCard from "../_components/home-work-experience-card";

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
                    <ul className="font-robot font-[800] text-[14px] sm:text-[16px] dark:text-gray-700 text-white duration-300">
                      <li>- Assist minor/major front-end development tasks</li>
                    </ul>
                  }
                />
                <HomeWorkExperienceCard
                  company={"Koda Kollectiv"}
                  position={"Software Engineer"}
                  date={"02/20/2023 - Present"}
                  details={
                    <ul className="font-robot font-[800] text-[14px] sm:text-[16px] dark:text-gray-700 text-white duration-300 space-y-[10px]">
                      <li>- Building UI/UX of the website</li>
                      <li>- Web/mobile front-end development</li>
                      <li>
                        - Maintain front-end related projects for web and mobile
                      </li>
                      <li>
                        - Collaborate with the team for better system
                        optimizations
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

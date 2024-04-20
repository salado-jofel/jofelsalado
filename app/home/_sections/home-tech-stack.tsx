import React from "react";
import HomeContentDetails from "../_components/home-content-details";
import HomeContentTitle from "../_components/home-content-title";
import HomeTechStackCard from "../_components/home-tech-stack-card";
import htmlIcon from "../../../public/assets/icons/html5/html5-original.png";
import cssIcon from "../../../public/assets/icons/css3/css3-original.png";
import typescriptIcon from "../../../public/assets/icons/typescript/typescript-original.png";
import nextjsIcon from "../../../public/assets/icons/nextjs/nextjs-original.png";
import tailwindcssIcon from "../../../public/assets/icons/tailwindcss/tailwindcss-original.png";
import flutterIcon from "../../../public/assets/icons/flutter/flutter-original.png";

var icons = [
  {
    id: 0,
    icon: "HTML",
    path: htmlIcon,
    alt: "HTML5 Icon",
  },
  {
    id: 1,
    icon: "CSS",
    path: cssIcon,
    alt: "CSS Icon",
  },
  {
    id: 2,
    icon: "Typescript",
    path: typescriptIcon,
    alt: "Typescript Icon",
  },
  {
    id: 3,
    icon: "Next JS",
    path: nextjsIcon,
    alt: "Next JS Icon",
  },

  {
    id: 4,
    icon: "Tailwind CSS",
    path: tailwindcssIcon,
    alt: "Tailwind CSS Icon",
  },
  {
    id: 5,
    icon: "Flutter",
    path: flutterIcon,
    alt: "Flutter Icon",
  },
];
export default function HomeTechStack() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[30px]">
      <HomeContentTitle title="Tech Stacks" />
      <div className="flex flex-col gap-[20px] justify-center items-center">
        <div className="flex w-full items-center justify-start">
          <HomeContentDetails
            details={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[50px] duration-300">
                {icons.map((value: any) => (
                  <HomeTechStackCard
                    key={value.id}
                    iconTitle={value.icon}
                    iconPath={value.path}
                    iconAlt={value.alt}
                  />
                ))}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

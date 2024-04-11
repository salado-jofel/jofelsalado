import React from "react";
import HomeContentDetails from "../_components/home-content-details";
import HomeContentTitle from "../_components/home-content-title";
import Image from "next/image";
import HomeTechStackCard from "../_components/home-tech-stack-card";
var icons = [
  {
    id: 0,
    icon: "HTML",
    path: "/assets/icons/html5/html5-original.svg",
    alt: "HTML5 Icon",
  },
  {
    id: 1,
    icon: "CSS",
    path: "/assets/icons/css3/css3-original.svg",
    alt: "CSS Icon",
  },
  {
    id: 2,
    icon: "Typescript",
    path: "/assets/icons/typescript/typescript-original.svg",
    alt: "Typescript Icon",
  },
  {
    id: 3,
    icon: "Next JS",
    path: "/assets/icons/nextjs/nextjs-original.svg",
    alt: "Next JS Icon",
  },
  {
    id: 4,
    icon: "React",
    path: "/assets/icons/react/react-original.svg",
    alt: "React Icon",
  },
  {
    id: 5,
    icon: "Tailwind CSS",
    path: "/assets/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS Icon",
  },
  {
    id: 6,
    icon: "Flutter",
    path: "/assets/icons/flutter/flutter-original.svg",
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
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

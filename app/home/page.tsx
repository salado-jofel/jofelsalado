import React from "react";
import HomeTitle from "./sections/home-title";
import HomeAboutMeCarousel from "./sections/home-about-me";
import HomeEducationCarousel from "./sections/home-education";
import HomeWorkExperience from "./sections/home-work-experience";
import HomeTechStack from "./sections/home-tech-stack";

export function HomePage() {
  return (
    <article className="pb-[100px] px-[30px]">
      <section className="max-w-4xl mt-[30px] m-auto space-y-[100px]">
        <HomeTitle />
        <HomeAboutMeCarousel />
        <HomeEducationCarousel />
        <HomeWorkExperience />
        <HomeTechStack />
      </section>
    </article>
  );
}

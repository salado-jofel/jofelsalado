import React from "react";
import HomeTitle from "./_sections/home-title";
import HomeAboutMeCarousel from "./_sections/home-about-me";
import HomeWorkExperience from "./_sections/home-work-experience";
import HomeTechStack from "./_sections/home-tech-stack";
import HomeEducation from "./_sections/home-education";

export function HomePage() {
  return (
    <main className=" w-full h-full overflow-hidden z-[900]">
      <article className=" px-[30px]">
        <section className="max-w-4xl mt-[30px] mb-[60px] m-auto space-y-[100px]">
          <HomeTitle />
          <HomeAboutMeCarousel />
          <HomeEducation />
          <HomeWorkExperience />
          <HomeTechStack />
        </section>
      </article>
    </main>
  );
}

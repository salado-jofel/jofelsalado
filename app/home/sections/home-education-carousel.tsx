import React from "react";
import ContentTitle from "../components/home-content-title";

export default function HomeEducationCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <ContentTitle title="Educational Attainment" />
    </div>
  );
}

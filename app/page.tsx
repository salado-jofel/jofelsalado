// import lofiVideo from "../public/assets/videos/day.mp4";

import { BackgroundAudio } from "./components/background-audio";
import { HomePage } from "./home/page";

export default function Home() {
  return (
    <main className="h-screen w-screen relative">
      <div className=" w-full pt-20 h-screen overflow-auto no-sc ">
        <HomePage />
      </div>
    </main>
  );
}

import { Metadata } from "next";
import { HomePage } from "./home/home-page";
import { BackgroundVideo } from "./_components/background-video";

export const metadata: Metadata = {
  title: "Jofel Salado",
  description: "My Portfolio",
};
export default function Page() {
  return (
    <main className=" w-full h-full bg-black/50 overflow-hidden">
      <BackgroundVideo />
      <div className=" w-full h-full ">
        <HomePage />
      </div>
    </main>
  );
}

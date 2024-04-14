import { Metadata } from "next";
import { Home } from "./home/page";

export const metadata: Metadata = {
  title: "Jofel Salado",
  description: "My Portfolio",
};
export default function Page() {
  return (
    <main className="h-screen w-screen relative bg-black/50">
      <div className=" w-full h-screen overflow-auto no-sc ">
        <Home />
      </div>
    </main>
  );
}

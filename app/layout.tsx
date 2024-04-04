import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { BackgroundVideo } from "./components/background-video";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jofel Salado",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        <BackgroundVideo />
      </body>
    </html>
  );
}

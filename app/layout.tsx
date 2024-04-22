import "./globals.css";
import Navbar from "./_components/navbar";
import { BackgroundVideo } from "./_components/background-video";
import { Metadata } from "next";
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
      <body className="bg-black">
        <Navbar />
        {children}
        <BackgroundVideo />
      </body>
    </html>
  );
}

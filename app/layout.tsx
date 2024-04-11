"use client";
import "./globals.css";
import Navbar from "./components/navbar";
import { BackgroundVideo } from "./components/background-video";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Navbar />
          {children}
          <BackgroundVideo />
        </body>
      </Provider>
    </html>
  );
}

import "./globals.css";
import Navbar from "./components/navbar";
import { BackgroundVideo } from "./components/background-video";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <BackgroundVideo />
      </body>
    </html>
  );
}

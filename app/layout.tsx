import "./globals.css";
import Navbar from "./_components/navbar";
import { BackgroundVideo } from "./_components/background-video";

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

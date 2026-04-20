import type { Metadata } from "next";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "Curators Editions",
  description: "The Art of Minimal Living",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <SmoothScrollProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

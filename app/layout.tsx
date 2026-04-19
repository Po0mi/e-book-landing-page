import type { Metadata } from "next";
import Navbar from "@/layouts/Navbar";
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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

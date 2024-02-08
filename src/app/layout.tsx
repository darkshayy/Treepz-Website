import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: [
    {
      path: "./fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Treepz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className="flex flex-col">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

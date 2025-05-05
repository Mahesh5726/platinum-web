import "./globals.css";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { Metadata } from "next";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Platinum",
  description: "Top Tech News",
};

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>{props.children}</body>
    </html>
  );
};

export default RootLayout;

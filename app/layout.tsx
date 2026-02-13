import type { Metadata } from "next";
import { Pacifico, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Very Serious Question 💘",
  description: "Made with love (and a bit of dramatic flair).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pacifico.variable} ${nunito.variable} antialiased bg-pink-50 text-gray-800`}
      >
        <BackgroundEffects />
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}

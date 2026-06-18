import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Stamina 69 - Power, Vigour & Vitality Supplement Combo | JASEARTH",
  description: "Unlock your energy, endurance, and overall wellness with the JASEARTH Stamina 69 DesireXtract Capsules + Oil Combo. 100% natural Ayurvedic formula featuring Gold Shilajit, Ashwagandha, and Kesar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#FAF8F5] text-[#1D3228] font-sans">{children}</body>
    </html>
  );
}

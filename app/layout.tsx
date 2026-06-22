import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Stamina 69 - Feel Stronger. Last Longer. Live Better. | Premium Herbal Formula",
  description: "Premium Herbal Formula with Gold, Shilajit & African Herbs. 100% Natural, No Side Effects, Fast Delivery. Improve stamina, energy and performance naturally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AutoPriceAI — Car Price Predictor & Analytics",
    template: "%s | AutoPriceAI",
  },
  description:
    "Predict used car market value using a Random Forest ML model. Interactive analytics dashboard with brand, mileage, and year insights.",
  keywords: ["car price prediction", "machine learning", "random forest", "used cars", "analytics"],
  authors: [{ name: "AutoPriceAI" }],
  openGraph: {
    title: "AutoPriceAI — Car Price Predictor",
    description: "ML-powered car valuation and analytics dashboard",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

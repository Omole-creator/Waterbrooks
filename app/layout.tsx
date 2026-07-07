import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waterbrooks-technologies.vercel.app"),
  title: {
    default: "WaterBrooks Technologies | Solar-Powered Food Preservation",
    template: "%s | WaterBrooks Technologies",
  },
  description:
    "WaterBrooks Technologies helps farmers and agribusinesses in Africa cut post-harvest losses with solar-powered cold storage and smart IoT and AI monitoring.",
  keywords: [
    "solar cold storage",
    "post-harvest loss",
    "agritech Africa",
    "IoT food preservation",
    "WaterBrooks Technologies",
    "cold storage Nigeria",
  ],
  openGraph: {
    title: "WaterBrooks Technologies",
    description:
      "Solar-powered cold storage that keeps harvests fresh for up to 21 days and cuts spoilage by as much as 65 percent.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

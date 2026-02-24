import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Common/Layout/Layout";
import { helveticaNow } from "./fonts";
import ScrollToTopButton from "@/components/Common/ScrollToTopButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Analytics } from "@vercel/analytics/next";
import FloatingSticky from "@/components/Common/FloatingSticky/FloatingSticky";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Acts as the base domain for all relative URLs in your app
  metadataBase: new URL("https://cec.edu.in"), 
  
  title: {
    // Fallback title for the homepage or if a page forgets a title
    default: "Canara Engineering College, Mangalore | NAAC A Grade Institution", 
    // Template automatically applies to all inner pages (e.g., "About | Canara Engineering College")
    template: "%s | Canara Engineering College", 
  },
  description:
    "Canara College, accredited with A Grade by NAAC and affiliated to Mangalore University, offers premier undergraduate programs. Join a legacy of excellence in education since 1973!",
  keywords: [
    "Canara Engineering College",
    "Best Engineering College in Mangalore",
    "Top Engineering College in Karnataka",
    "NBA Accredited Engineering College",
    "NAAC A Grade Engineering College",
    "Engineering College affiliated to VTU",
    "Computer Science Engineering Mangalore",
    "Artificial Intelligence Engineering Mangalore",
    "Information Science Engineering Mangalore",
    "Electronics and Communication Engineering Mangalore",
    "Mechanical Engineering Mangalore",
    "Canara College Placements",
    "Engineering Admissions Karnataka",
    "CET Engineering Colleges Mangalore",
    "COMEDK Engineering Colleges Mangalore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${helveticaNow.variable}  antialiased`}>
        <SpeedInsights />
        <Analytics />
        <Layout>
          {children}
          <ScrollToTopButton />
          <FloatingSticky />
        </Layout>
      </body>
    </html>
  );
}

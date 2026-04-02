import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Common/Layout/Layout";
import { helveticaNow } from "./fonts";
import ScrollToTopButton from "@/components/Common/ScrollToTopButton";

import FloatingSticky from "@/components/Common/FloatingSticky/FloatingSticky";
import Script from "next/script";

// 1. Import the official GoogleTagManager and GoogleAnalytics components
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cec.edu.in"), 
  title: {
    default: "Canara Engineering College, Mangalore | NAAC A Grade Institution", 
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
  verification: {
    google: "-Bpv8fhe20Z5fhxjIm712LCBfsVP34uv_PvlTIXxrQw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${helveticaNow.variable}  antialiased`}>
        
    
    <Toaster
  position="top-center"
  toastOptions={{
    style: {
      whiteSpace: "nowrap",
      maxWidth: "none",
    },
  }}
/>
        <Layout>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollegeOrUniversity",
                name: "Canara Engineering College",
                url: "https://cec.edu.in",
                logo: "https://cec.edu.in/assets/images/logo.png",
                description: "Canara Engineering College is a private engineering college in Karnataka, India, approximately 22 km from Mangaluru in the surroundings of Benjanapadavu. It was established in 2001 as a Millennium project by Canara High School Association. The college is affiliated to Visvesvaraya Technological University, Belgaum.",
                foundingDate: "2001",
                telephone: "+91-8792727001",
                sameAs: [
                  "https://www.facebook.com/share/1AjszML4e3",
                  "https://www.instagram.com/cecmangalore/",
                  "https://www.linkedin.com/school/canara-engineering-college-official",
                  "https://www.youtube.com/@canaraengineeringcollegema3340",
                  "https://x.com/cecmangalore",
                  "https://en.wikipedia.org/wiki/Canara_Engineering_College"
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Benjanapadavu, Bantwal Taluk",
                  addressLocality: "Mangaluru",
                  addressRegion: "Karnataka",
                  postalCode: "574219",
                  addressCountry: "IN",
                },
              }),
            }}
          />
          <ScrollToTopButton />
          <Script src="/smoothScroll/smoothScroll.js" strategy="afterInteractive" />
          <FloatingSticky />
        </Layout>
      </body>
      
      {/* 2. Add the components at the end of the HTML tag */}
      <GoogleTagManager gtmId="GTM-543CDW9N" />
      <GoogleAnalytics gaId="G-YJ09NRG5NX" />
    </html>
  );
}
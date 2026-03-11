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
          <FloatingSticky />
        </Layout>
      </body>
    </html>
  );
}

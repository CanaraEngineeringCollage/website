import HeroSection from "@/components/AboutPageComponents/OurFounderPage/FounderSection/FounderSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import React from "react";

export const metadata = {
  title: "Our Founder | Canara College",
  description: "Learn about the visionary founder of Canara College and their contributions to education and community.",
  openGraph: {
    title: "Our Founder | Canara College",
    description: "Discover the inspiring story of the founder of Canara College and their dedication to education and service.",
    url: "https://your-website-url.com/our-founder", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-founder.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Founder of Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Founder | Canara College",
    description: "Learn about the founder of Canara College and their legacy.",
    images: ["https://your-website-url.com/og-founder.jpg"], // update
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
};

export default page;

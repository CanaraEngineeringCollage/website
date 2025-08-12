import CardSection from "@/components/CampusFacilitiesPageComponents/Infrastructure/CardSection/CardSection";
import HeroSection from "@/components/CampusFacilitiesPageComponents/Infrastructure/HeroSection.tsx/HeroSection";
import React from "react";

export const metadata = {
  title: "Infrastructure | Canara College",
  description:
    "Explore the modern infrastructure at Canara College, including state-of-the-art facilities, resources, and services that support a vibrant academic environment.",
  openGraph: {
    title: "Infrastructure | Canara College",
    description: "Discover the infrastructure at Canara College, featuring modern facilities and resources that enhance the student experience.",
    url: "https://your-website-url.com/infrastructure", // Update with the actual URL
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-infrastructure.jpg", // Update image URL
        width: 1200,
        height: 630,
        alt: "Infrastructure at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infrastructure | Canara College",
    description: "Explore the infrastructure and modern facilities at Canara College that support an enriching academic environment.",
    images: ["https://your-website-url.com/og-infrastructure.jpg"], // Update image URL
  },
};

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <CardSection />
      </section>
    
    </>
  );
};

export default page;

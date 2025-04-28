import HeroSection from "@/components/AcademicsPageComponents/LearningHubPage/HeroSection/HeroSection";
import React from "react";

export const metadata = {
  title: "Learning Hub | Canara College",
  description: "Explore the Learning Hub at Canara College, offering resources, study materials, and academic support for students.",
  openGraph: {
    title: "Learning Hub | Canara College",
    description:
      "The Learning Hub provides resources, study materials, and academic support for Canara College students to succeed in their studies.",
    url: "https://your-website-url.com/learning-hub", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-learning-hub.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Learning Hub at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Hub | Canara College",
    description: "Access resources, study materials, and academic support through the Learning Hub at Canara College.",
    images: ["https://your-website-url.com/og-learning-hub.jpg"], // update this
  },
};

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
    </>
  );
};

export default page;

import HeroSection from "@/components/AboutPageComponents/OurManagementPage/MangementSection/MangementSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import React from "react";

export const metadata = {
  title: "Our Management | Canara College",
  description: "Meet the management team of Canara College, dedicated to providing quality education and leading the institution toward success.",
  openGraph: {
    title: "Our Management | Canara College",
    description: "Learn about the leadership and management team at Canara College, responsible for shaping the future of education.",
    url: "https://your-website-url.com/our-management", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-management.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Our Management Team at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Management | Canara College",
    description: "Meet the leadership and management team of Canara College.",
    images: ["https://your-website-url.com/og-management.jpg"], // update
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

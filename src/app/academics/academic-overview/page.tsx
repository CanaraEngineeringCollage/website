import HeroSection from "@/components/AcademicsPageComponents/AcacemicOverviewPage/HeroSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import EmpoweringFutures from "@/components/Common/EmpoweringFutures/EmpoweringFutures";
import ExplorePrograms from "@/components/Common/ExplorePrograms/ExplorePrograms";
import { Testimonials } from "@/components/Common/Testimonials/Testimonials";
import React from "react";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";

export const metadata = {
  title: "Academic Overview | Canara College",
  description:
    "Explore the academic programs, opportunities, and student testimonials at Canara College. Empowering futures through quality education.",
  openGraph: {
    title: "Academic Overview | Canara College",
    description: "Learn about the academic offerings at Canara College, from diverse programs to student experiences and opportunities.",
    url: "https://your-website-url.com/academic-overview",
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-academic-overview.jpg",
        width: 1200,
        height: 630,
        alt: "Academic Overview at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Overview | Canara College",
    description: "Discover the academic programs and student experiences at Canara College.",
    images: ["https://your-website-url.com/og-academic-overview.jpg"],
  },
};

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="pl-6 md:pl-12 lg:pl-16 xl:px-0">
        <ExplorePrograms />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <EmpoweringFutures />
      </section>
      <section>
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          youtubeUrl="https://youtu.be/rv0KerNW4QE?si=ObYcwEiaqF0UD90P"
          thumbnail="https://res.cloudinary.com/dvandhsai/image/upload/v1745994337/bzjmgq1zvi0ksxyptkz6.png"
        />
      </section>
      <section className="px-0 bg-white">
        <Testimonials />
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
};

export default page;

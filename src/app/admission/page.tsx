import HeroSection from "@/components/AdmissionPageComponents/HeroSection/HeroSection";
import HowToApply from "@/components/AdmissionPageComponents/HowToApply/HowToApply";
import YoutubeSection from "@/components/AdmissionPageComponents/YoutubeSection/YoutubeSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import EmpoweringFutures from "@/components/Common/EmpoweringFutures/EmpoweringFutures";
import ExplorePrograms from "@/components/Common/ExplorePrograms/ExplorePrograms";
import { Testimonials } from "@/components/Common/Testimonials/Testimonials";
import React from "react";

export const metadata = {
  title: "Admissions | Canara College",
  description: "Find all the information you need for admission to Canara College, including how to apply, programs offered, and more.",
  openGraph: {
    title: "Admissions | Canara College",
    description: "Apply to Canara College and learn about our admission process, available programs, and future opportunities.",
    url: "https://your-website-url.com/admission", // Update URL
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-admission.jpg", // Update image URL
        width: 1200,
        height: 630,
        alt: "Canara College Admission",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions | Canara College",
    description: "Learn how to apply and find details on admissions at Canara College.",
    images: ["https://your-website-url.com/og-admission.jpg"], // Update image URL
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      <section className="pl-6 md:pl-12 lg:pl-16 xl:px-0">
        <ExplorePrograms />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <EmpoweringFutures />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <HowToApply />
      </section>

      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YoutubeSection />
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

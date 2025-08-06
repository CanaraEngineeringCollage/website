import ExploreCampusSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/ExploreCampusSection/ExploreCampusSection";
import HeroSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/HeroSection/HeroSection";
import HolisticStudent from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/HolisticStudent/HolisticStudent";
import YourSkills from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/YourSkills/YourSkills";
import YoutubeSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/YoutubeSection/YoutubeSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import React from "react";

export const metadata = {
  title: "Student Life Engagement | Canara College",
  description:
    "At Canara College, we focus on holistic student development. Explore opportunities for personal growth, skills development, and engagement with campus activities.",
  openGraph: {
    title: "Student Life Engagement | Canara College",
    description:
      "Discover the student life engagement opportunities at Canara College. Learn about our holistic approach to student development, campus activities, and skill-building initiatives.",
    url: "https://your-website-url.com/studentlife-engagement", // Update with the actual URL
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-student-life-engagement.jpg", // Update image URL
        width: 1200,
        height: 630,
        alt: "Student Life Engagement at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Life Engagement | Canara College",
    description: "Explore student life engagement at Canara College, including holistic development, skill-building activities, and campus life.",
    images: ["https://your-website-url.com/og-student-life-engagement.jpg"], // Update image URL
  },
};
const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <HolisticStudent />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YourSkills />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YoutubeSection />
      </section>
      <section className="px-6 -mt-[36px] md:mb-10 md:px-12 lg:px-16 xl:px-0">
        <ExploreCampusSection />
      </section>
      <section className="bg-[#e5e5ea] ">
        <FooterCard />
      </section>
    </>
  );
};

export default page;

import ExploreCampusSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/ExploreCampusSection/ExploreCampusSection";
import HeroSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/HeroSection/HeroSection";
import HolisticStudent from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/HolisticStudent/HolisticStudent";
import YourSkills from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/YourSkills/YourSkills";
import YoutubeSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/YoutubeSection/YoutubeSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";
import CollapsSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/CollapsSection/CollapsSection";
import React from "react";
import StudentClubs from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/StudentClubs/StudentClubs";
import VideoSwiper from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/VideoSwiper/VideoSwiper";

export const metadata = {
  title: "Student Life Engagement | Canara College",
  description:
    "At Canara College, we focus on holistic student development. Explore opportunities for personal growth, skills development, and engagement with campus activities.",
  openGraph: {
    title: "Student Life Engagement | Canara College",
    description:
      "Discover the student life engagement opportunities at Canara College. Learn about our holistic approach to student development, campus activities, and skill-building initiatives.",
    url: "https://cec.edu.in/studentlife-engagement", // Update with the actual URL
    siteName: "Canara College",
    images: [
      {
        url: "https://cec.edu.in/og-student-life-engagement.jpg", // Update image URL
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
    images: ["https://cec.edu.in/og-student-life-engagement.jpg"], // Update image URL
  },
};
const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 lg:px-0 xl:px-0">
        <HolisticStudent />
      </section>

      {/* <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YourSkills />
      </section> */}

      <section className="px-6  lg:px-0 xl:px-0 ">
        <StudentClubs />
      </section>
      <section className="px-6  lg:px-0 xl:px-0 py-10">
        <CollapsSection />
      </section>
      <section className=" lg:-mt-16  lg:pt-10 pb-16 lg:pb-20 lg:px-16 xl:px-0 px-1 md:px-12 ">
        <VideoPlayer thumbnail="/youtubeThumbnails/Akrathi Aftermovie - Thumbail@300x.webp" youtubeUrl="oHWMDPeP1Ew" />
      </section>
      <section>
        <VideoSwiper/>
      </section>
      <section className="bg-[#e5e5ea] ">
        <FooterCard />
      </section>
    </>
  );
};

export default page;

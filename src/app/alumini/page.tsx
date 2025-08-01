import AluminiHeroBanner from "@/components/AluminiComponents/AluminiHerobanner/AluminiHerobanner";
import EmpowerNextGeneration from "@/components/AluminiComponents/EmpowerNextGeneration/EmpowerNextGeneration";
import LegacyExcellance from "@/components/AluminiComponents/LegacyExcellence/LegacyExcellence";
import StudentLIfeInCanara from "@/components/AluminiComponents/StudentLIfeInCanara/StudentLIfeInCanara";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import React from "react";

export const metadata = {
  title: "Alumni | Canara College",
  description:
    "Discover the impact Canara College alumni have made through success stories, their experiences, and how they are empowering the next generation.",
  openGraph: {
    title: "Alumni | Canara College",
    description: "Explore Canara College alumni's legacy, their role in empowering future students, and their impact on the community.",
    url: "https://your-website-url.com/alumni", // Update with actual URL
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-alumni.jpg", // Update image URL
        width: 1200,
        height: 630,
        alt: "Alumni Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumni | Canara College",
    description: "Learn about the achievements of Canara College alumni and their ongoing contributions to education and society.",
    images: ["https://your-website-url.com/og-alumni.jpg"], // Update image URL
  },
};

const page = () => {
  return (
    <>
      <AluminiHeroBanner />
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <StudentLIfeInCanara />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <EmpowerNextGeneration />
      </section>
      <section>
        <LegacyExcellance />
      </section>
      {/* <section className="px-6 bg-[#E5E5EA] md:px-12 mt-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section> */}
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
};

export default page;

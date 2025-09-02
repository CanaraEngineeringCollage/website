import AmenitiesSection from "@/components/CampusFacilitiesPageComponents/HostelLife/AmenitiesSection/AmenitiesSection";
import HeroSection from "@/components/CampusFacilitiesPageComponents/HostelLife/HeroSection/HeroSection";
import LifeAtHostels from "@/components/CampusFacilitiesPageComponents/HostelLife/LifeAtHostels/LifeAtHostels";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";
import React from "react";

export const metadata = {
  title: "Hostel Life | Canara College",
  description:
    "Explore the vibrant hostel life at Canara College, featuring amenities, student life, and the facilities available to make the stay comfortable and enjoyable.",
  openGraph: {
    title: "Hostel Life | Canara College",
    description: "Discover the unique aspects of hostel life at Canara College, including amenities, activities, and life in the hostels.",
    url: "https://your-website-url.com/hostel-life", // Update with the actual URL
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-hostel-life.jpg", // Update image URL
        width: 1200,
        height: 630,
        alt: "Hostel Life at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hostel Life | Canara College",
    description: "Learn about the facilities, amenities, and student life in the hostels at Canara College.",
    images: ["https://your-website-url.com/og-hostel-life.jpg"], // Update image URL
  },
};

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <LifeAtHostels />
      </section>
      <section className="pt-8 lg:pt-0 w-full pb-10 lg:pb-5">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          youtubeUrl="https://youtu.be/m0znTqrPg1k?si=axPi_tWGFHTHxZNl"
          thumbnail="/youtubeThumbnails/iseThumb.webp"
          startTime={165} // Start at 30 seconds
        />
      </section>
      <section className="md:pt-10 pt-6 xl:py-10 pb-2  max-w-7xl xl:max-w-[75%] mx-auto lg:px-32">
      <p className="text-textGray  text-[20px]">
         Life in the hostel at CEC is a balance of academics, fitness, and fun all in a setting that’s amidst nature, calm, and away from the city’s rush. We’re confident you’ll enjoy your time here and create wonderful memories over the next four years.
        </p>
        </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 lg:my-0 -mt-6">
        <AmenitiesSection />
      </section>
     
    
      {/* <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section> */}
      <section className="bg-[#e5e5ea]">
        <FooterCard />
      </section>
    </>
  );
};

export default page;

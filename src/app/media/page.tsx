import MediaSection from "@/components/MediaPageComponents/MediaSection/MediaSection";
import React from "react";

export const metadata = {
  title: "Media Section | Canara College",
  description: "Explore the latest media coverage and events at Canara College.",
  openGraph: {
    title: "Media Section | Canara College",
    description: "Stay updated with Canara College's media section, showcasing the latest coverage, events, and news.",
    url: "https://your-website.com/media-section",
    siteName: "Canara College",
  },
};


const page = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 xl:px-0">
      <MediaSection />
    </section>
  );
};

export default page;

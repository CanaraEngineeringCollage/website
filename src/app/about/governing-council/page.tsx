import ProfileCard from "@/components/AboutPageComponents/GoverningCounsilPage/CardComponent/CardComponent";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import React from "react";

export const metadata = {
  title: "Governing Council | Visionary Leadership at Canara College",
  description: "Discover the distinguished members of the Governing Council who guide Canara College towards academic excellence and innovation.",
  openGraph: {
    title: "Governing Council | Visionary Leadership at Canara College",
    description:
      "Meet the leaders and decision-makers shaping the future of Canara College, Mangalore, committed to fostering educational excellence.",
    url: "https://your-website-url.com/governing-council", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-governing-council-image.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Governing Council of Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Governing Council | Visionary Leadership at Canara College",
    description: "Learn about the distinguished Governing Council members who drive strategic excellence at Canara College.",
    images: ["https://your-website-url.com/og-governing-council-image.jpg"], // update
  },
};

const page = () => {
  return (
    <>
      <ProfileCard />
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
};

export default page;

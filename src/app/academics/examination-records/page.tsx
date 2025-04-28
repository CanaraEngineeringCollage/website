import FormSection from "@/components/AcademicsPageComponents/ExaminationsAndRecords/FormSection/FormSection";
import React from "react";

export const metadata = {
  title: "Examination Records | Canara College",
  description: "Access the examination records, schedules, and important updates for students at Canara College.",
  openGraph: {
    title: "Examination Records | Canara College",
    description: "Explore the examination records, results, schedules, and important updates for Canara College students.",
    url: "https://your-website-url.com/examination-records", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-examination-records.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Examination Records at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Examination Records | Canara College",
    description: "Get the latest updates on examination records, schedules, and more at Canara College.",
    images: ["https://your-website-url.com/og-examination-records.jpg"], // update this
  },
};

const page = () => {
  return (
    <>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <FormSection />
      </section>
    </>
  );
};

export default page;

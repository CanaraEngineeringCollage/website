import FormSection from "@/components/AcademicsPageComponents/ExaminationsAndRecords/FormSection/FormSection";
import React from "react";
import { Suspense } from "react";

export const metadata = {
  alternates: {
    canonical: "/examination-records",
  },
  title: "Examination Records | Canara College",
  description: "Access the examination records, schedules, and important updates for students at Canara College.",
  openGraph: {
    title: "Examination Records | Canara College",
    description: "Explore the examination records, results, schedules, and important updates for Canara College students.",
    url: "https://cec.edu.in/examination-records", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://cec.edu.in/og-examination-records.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Examination Records at Canara College",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Examination Records | Canara College",
    description: "Get the latest updates on examination records, schedules, and more at Canara College.",
    images: ["https://cec.edu.in/og-examination-records.jpg"], // update this
  },
};

const page = () => {
  return (
    <>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <Suspense fallback={<div>Loading department info...</div>}>
          <FormSection />
        </Suspense>
      </section>
    </>
  );
};

export default page;

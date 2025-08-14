import ScStGrievance from "@/components/AboutPageComponents/ScStGrievanceComponents/ScStGrievance/ScStGrievance";
import React from "react";
export const metadata = {
  title: "SC/ST Grievance Cell | Canara Engineering College",
  description:
    "Learn about the SC/ST Grievance Cell at Canara Engineering College, established to address concerns, ensure equality, and provide support to students and staff from SC/ST communities.",
  openGraph: {
    title: "SC/ST Grievance Cell | Canara Engineering College",
    description:
      "Discover the role of the SC/ST Grievance Cell at Canara Engineering College in promoting equality, addressing grievances, and fostering an inclusive campus environment.",
    url: "https://your-website-url.com/about/mandatory-disclosure/sc-st-grievance", // update this
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://your-website-url.com/og-sc-st-grievance.jpg", // update this
        width: 1200,
        height: 630,
        alt: "SC/ST Grievance Cell - Canara Engineering College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SC/ST Grievance Cell | Canara Engineering College",
    description:
      "Understand the functions of the SC/ST Grievance Cell at Canara Engineering College and its commitment to equality and support.",
    images: ["https://your-website-url.com/og-sc-st-grievance.jpg"], // update this
  },
}

const page = () => {
  return (
    <section className="py-10">
     <ScStGrievance/>
    </section>
  );
};

export default page;

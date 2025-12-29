import React from 'react'
import ExploreCampus from "@/components/Common/ExploreCampus/ExploreCampus";

export const metadata = {
  title: "Campus Buzz | Canara Engineering College",
  description:
    "Explore the latest campus news, events, student achievements, and highlights from Canara Engineering College. Stay connected with everything happening on campus.",

  openGraph: {
    title: "Campus Buzz | Canara Engineering College",
    description:
      "Stay updated with campus events, student success stories, and all the latest happenings at Canara Engineering College.",
    url: "https://apiserver.cec.edu.in/campus-buzz",
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://apiserver.cec.edu.in/assets/images/og-campus-buzz.jpg",
        width: 1200,
        height: 630,
        alt: "Campus Buzz - Canara Engineering College",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Campus Buzz | Canara Engineering College",
    description:
      "Get the latest updates on events, news, and student achievements from Canara Engineering College.",
    images: ["https://apiserver.cec.edu.in/assets/images/og-campus-buzz.jpg"],
  },
};

const Page = () => {
    return(<section className='px-6 md:px-12 lg:px-16 xl:px-0'> <ExploreCampus  title="Explore More Campus" description='Stay updated with the latest news, events & achievements from across our campus' />;
</section>)
}

export default Page

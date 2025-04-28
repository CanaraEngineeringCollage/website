import GrievanceRedressalCell from "@/components/AboutPageComponents/StudentWelfarePage/GrievanceRedressalCell/GrievanceRedressalCell";
import React from "react";

export const metadata = {
  title: 'Grievance Redressal Cell | Student Support at Canara College',
  description: 'Learn about the Grievance Redressal Cell at Canara College, ensuring a fair, transparent, and supportive environment for students.',
  openGraph: {
    title: 'Grievance Redressal Cell | Student Support at Canara College',
    description: 'Canara College is committed to addressing student grievances with fairness and transparency through its Grievance Redressal Cell.',
    url: 'https://your-website-url.com/grievance-redressal-cell', // update this
    siteName: 'Canara College',
    images: [
      {
        url: 'https://your-website-url.com/og-grievance-redressal.jpg', // update this
        width: 1200,
        height: 630,
        alt: 'Grievance Redressal Cell at Canara College',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grievance Redressal Cell | Student Support at Canara College',
    description: 'Ensuring fairness, transparency, and a supportive environment for students at Canara College.',
    images: ['https://your-website-url.com/og-grievance-redressal.jpg'], // update
  },
};


const page = () => {
  return (
    <>
      <section>
        <GrievanceRedressalCell />
      </section>
    </>
  );
};

export default page;

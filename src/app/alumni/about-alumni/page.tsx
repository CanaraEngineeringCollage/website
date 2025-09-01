import AlumniPortal from '@/components/AluminiComponents/AlumniPortal/AlumniPortal'
import React from 'react'
export const metadata = {
  title: "About Alumni | Canara Engineering College",
  description:
    "Discover the achievements, contributions, and success stories of Canara Engineering College alumni who continue to make an impact across industries and communities.",

  openGraph: {
    title: "About Alumni | Canara Engineering College",
    description:
      "Learn more about the distinguished alumni of Canara Engineering College, their professional journeys, and their contributions to society.",
    url: "https://cec.edu.in/alumni", // ✅ update to your actual 'About Alumni' page URL
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://cec.edu.in/assets/images/og-about-alumni.jpg", // ✅ replace with real OG image path
        width: 1200,
        height: 630,
        alt: "Canara Engineering College Alumni",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Alumni | Canara Engineering College",
    description:
      "Explore the legacy and impact of Canara Engineering College alumni through their achievements and contributions.",
    images: ["https://cec.edu.in/assets/images/og-about-alumni.jpg"], // ✅ same OG image
  },
};

const page = () => {
  return (
    <div>
      <AlumniPortal/>
    </div>
  )
}

export default page

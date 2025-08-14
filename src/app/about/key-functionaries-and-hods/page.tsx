import ProfileCard from '@/components/AboutPageComponents/GoverningCounsilPage/CardComponent/CardComponent'
import FooterCard from '@/components/Common/FooterCard/FooterCard'
import React from 'react'
import datam from "../../../utils/hodData/hodData.json"
export const metadata = {
  title: "Key Functionaries & HODs | Canara Engineering College",
  description: "Meet the key functionaries and Heads of Departments at Canara Engineering College, leading academic excellence and innovation across various disciplines.",
  openGraph: {
    title: "Key Functionaries & HODs | Canara Engineering College",
    description: "Explore profiles of key functionaries and Heads of Departments at Canara Engineering College, guiding students and driving innovation.",
    url: "https://your-website-url.com/about/key-functionaries-and-hods", // update this
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://your-website-url.com/og-key-functionaries-hods.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Key Functionaries & HODs of Canara Engineering College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Functionaries & HODs | Canara Engineering College",
    description: "Get to know the key functionaries and Heads of Departments at Canara Engineering College.",
    images: ["https://your-website-url.com/og-key-functionaries-hods.jpg"], // update this
  },
}
const page = () => {
  return (
    <div>
       <ProfileCard datam={datam} title="Head of the Departments"/>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </div>
  )
}

export default page

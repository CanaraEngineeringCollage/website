import ResearchPageSection from '@/components/ResearchPageComponents/ResearchPageSection/ResearchPageSection'
import React from 'react'
export const metadata = {
  title: "Research | Canara College",
  description: "Discover research initiatives at Canara College, including innovative projects, publications, and contributions from faculty and students.",
  openGraph: {
    title: "Research | Canara College",
    description: "Explore research work at Canara College, featuring innovative projects, impactful publications, and faculty & student contributions.",
    url: "https://your-website-url.com/academics/research", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-research.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Research at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research | Canara College",
    description: "Explore research initiatives, publications, and innovative projects from Canara College.",
    images: ["https://your-website-url.com/og-research.jpg"], // update this
  },
}
const page = () => {
  return (
    <section>
      <ResearchPageSection/>
    </section>
  )
}

export default page

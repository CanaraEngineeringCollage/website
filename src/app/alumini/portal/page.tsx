import AlumniPortal from '@/components/AluminiComponents/AlumniPortal/AlumniPortal'
import React from 'react'
export const metadata = {
  title: "Alumni Portal | Canara Engineering College",
  description: "Connect with the Canara Engineering College alumni community through our dedicated Alumni Portal. Stay updated, network, and contribute to the growth of your alma mater.",
  openGraph: {
    title: "Alumni Portal | Canara Engineering College",
    description: "Join the Canara Engineering College Alumni Portal to reconnect, collaborate, and stay informed about events, news, and opportunities.",
    url: "https://your-website-url.com/alumini/portal", // update this
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://your-website-url.com/og-alumni-portal.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Alumni Portal - Canara Engineering College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumni Portal | Canara Engineering College",
    description: "Stay connected with the Canara Engineering College alumni network via the Alumni Portal.",
    images: ["https://your-website-url.com/og-alumni-portal.jpg"], // update this
  },
}
const page = () => {
  return (
    <div>
      <AlumniPortal/>
    </div>
  )
}

export default page

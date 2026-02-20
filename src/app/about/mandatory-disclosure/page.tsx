import MandayDisclosure from "@/components/AboutPageComponents/MandatoryDisclosure/MandatoryDisclosure";
import React from "react";

export const metadata = {
  title: "Mandatory Disclosure | Canara College",
  description: "Canara College’s Mandatory Disclosure section provides legal and regulatory information as per the requirements of the institution.",
  openGraph: {
    title: "Mandatory Disclosure | Canara College",
    description: "Explore the mandatory disclosure documents required for transparency and legal compliance at Canara College.",
    url: "https://cec.edu.in/about/mandatory-disclosure", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://cec.edu.in/og-mandatory-disclosure.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Mandatory Disclosure at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandatory Disclosure | Canara College",
    description: "Access the mandatory disclosure and legal documents for transparency at Canara College.",
    images: ["https://cec.edu.in/og-mandatory-disclosure.jpg"], // update
  },
};

const page = () => {
  return (
    <>
      <MandayDisclosure />
    </>
  );
};

export default page;

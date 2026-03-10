import DistinctivePracties from "@/components/AboutPageComponents/DistinctivePracties/page";
import FooterCard from "@/components/Common/FooterCard/FooterCard";

export const metadata = {
  alternates: {
    canonical: '/about/distinctive-practices'
  },
  title: "Distinctive Practices | Canara Engineering College",
  description:
    "Discover the distinctive practices of Canara Engineering College that foster innovation, academic excellence, and holistic student development.",
  openGraph: {
    title: "Distinctive Practices | Canara Engineering College",
    description:
      "Explore the innovative approaches and unique institutional practices that set Canara Engineering College apart.",
    url: "https://apiserver.cec.edu.in/about/distinctive-practices",
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://apiserver.cec.edu.in/assets/images/og-distinctive-practices.jpg",
        width: 1200,
        height: 630,
        alt: "Distinctive Practices - Canara Engineering College",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Distinctive Practices | Canara Engineering College",
    description:
      "Learn about the distinctive practices that make Canara Engineering College a hub for innovation and growth.",
    images: [
      "https://apiserver.cec.edu.in/assets/images/og-distinctive-practices.jpg",
    ],
  },
};


export default function DistinctiveCec() {
  return (
    <>
      <section className="">
        <DistinctivePracties />
      </section>
      {/* <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section> */}
    </>
  );
}

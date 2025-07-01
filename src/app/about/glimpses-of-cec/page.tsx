
import Glimpses from "@/components/AboutPageComponents/GlimpsesOfCec/page";
import FooterCard from "@/components/Common/FooterCard/FooterCard";

export const metadata = {
  title: 'Glimpses of Canara College | A Legacy of Excellence',
  description: 'Explore the rich history of Canara College, from its foundation in 1973 to its current position as a leader in education.',
  openGraph: {
    title: 'History of Canara College | A Legacy of Excellence',
    description: 'Discover the founding history, milestones, and achievements of Canara College, one of Mangalore’s prestigious institutions.',
    url: 'https://your-website-url.com/history-of-cec', // update this
    siteName: 'Canara College',
    images: [
      {
        url: 'https://your-website-url.com/og-history-cec.jpg', // update this
        width: 1200,
        height: 630,
        alt: 'History of Canara College',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'History of Canara College | A Legacy of Excellence',
    description: 'A legacy of excellence since 1973. Learn more about Canara College’s inspiring history.',
    images: ['https://your-website-url.com/og-history-cec.jpg'], // update
  },
};

export default function GlimpsesOfCec() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <Glimpses />
      </section>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
  
    </>
  );
}

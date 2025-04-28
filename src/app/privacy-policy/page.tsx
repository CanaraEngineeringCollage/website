import PrivacySection from "@/components/PrivacyPolicyPageComponents/PrivacySection/PrivacySection";
import React from "react";

export const metadata = {
  title: "Privacy Policy | Your Website",
  description: "Read our Privacy Policy to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Your Website",
    description: "Learn about our privacy practices and how we safeguard your information on our website.",
    url: "https://your-website.com/privacy-policy",
    siteName: "Your Website",
  },
};

const page = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 xl:px-0">
      <PrivacySection />
    </section>
  );
};

export default page;

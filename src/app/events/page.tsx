import YoutubeSection from "@/components/AdmissionPageComponents/YoutubeSection/YoutubeSection";
import AlumniMentorshipAndEvents from "@/components/campusComponent/AlumniMentorshipAndEvents/AlumniMentorshipAndEvents";
import EventVision from "@/components/campusComponent/EventVision/EventVision";
import JoinAluminiNetwork from "@/components/campusComponent/JoinAuminiNetwork/JoinAuminiNetwork";
import NetworkEvent from "@/components/campusComponent/NetworkEvent/page";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";

import React from "react";

export const metadata = {
  title: "Events | Canara College",
  description: "Discover the Alumni Mentorship and Events at Canara College, providing opportunities for networking and career development.",
  openGraph: {
    title: "Alumni Mentorship & Events | Canara College",
    description: "Explore the mentorship programs, events, and networking opportunities available through Canara College's alumni network.",
    url: "https://your-website.com/alumni-mentorship-events",
    siteName: "Canara College",
  },
};

const page = () => {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <NetworkEvent />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AlumniMentorshipAndEvents />
      </section>
      <section className="px-6 py-12 xl:pt-56 md:px-12 lg:px-16 xl:px-0">
        <YoutubeSection />
      </section>
      <section className="px-6  md:px-12 lg:px-16 xl:px-0">
        <EventVision />
      </section>
      <section>
        <JoinAluminiNetwork />
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section>
    </>
  );
};

export default page;

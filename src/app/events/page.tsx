import AlumniMentorshipAndEvents from "@/components/campusComponent/AlumniMentorshipAndEvents/AlumniMentorshipAndEvents";
import EventVision from "@/components/campusComponent/EventVision/EventVision";
import JoinAluminiNetwork from "@/components/campusComponent/JoinAuminiNetwork/JoinAuminiNetwork";
import NetworkEvent from "@/components/campusComponent/NetworkEvent/page";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";

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
      <section className="px-6 -mt-8 md:px-12 lg:px-16 xl:px-0">
        <AlumniMentorshipAndEvents />
      </section>
      <section className="py-10">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          youtubeUrl="https://youtu.be/rv0KerNW4QE?si=ObYcwEiaqF0UD90P"
          thumbnail="https://res.cloudinary.com/dvandhsai/image/upload/v1746007133/yfqf8rnceq50jdtttp7y.png"
        />
      </section>
      <section className="px-6 pb-10  md:px-12 lg:px-16 xl:px-0">
        <EventVision />
      </section>
      <section>
        <JoinAluminiNetwork />
      </section>
      {/* <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section> */}
    </>
  );
};

export default page;

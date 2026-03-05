"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ClubData {
  title: string;
  description: string;
  activities: string[];
}

// --- Data Definitions ---

const nonTechnicalClubs: ClubData[] = [
  {
    title: "Media and Publications Club",
    description: "Supports institutional communication through content creation and event documentation.",
    activities: ["Campus event media coverage", "Newsletter and publication content support", "Communication design initiatives"],
  },
  {
    title: "Fine Arts Club",
    description: "Promotes artistic expression through creative and cultural engagement.",
    activities: ["Art and poster-making activities", "Cultural creativity initiatives", "Exhibition participation"],
  },
  {
    title: "Skill Sphere",
    description: "Focuses on personality development and professional readiness.",
    activities: ["Soft-skill enhancement sessions", "Communication development activities", "Career-readiness workshops"],
  },
  {
    title: "Sports Club",
    description: "Encourages physical fitness and competitive participation.",
    activities: ["Intercollegiate sports participation", "Team and fitness activities", "Tournament coordination"],
  },
  {
    title: "Adventure Club",
    description: "Builds teamwork and resilience through outdoor engagement.",
    activities: ["Trekking and exploration activities", "Experiential team-building programmes"],
  },
  {
    title: "Gavel Club",
    description: "Develops communication and leadership skills.",
    activities: ["Public speaking and debate activities", "Writing competitions", "Communication skill development"],
  },
  {
    title: "ESR",
    description: "Promotes social responsibility and community engagement.",
    activities: ["Outreach initiatives", "Awareness programmes", "Volunteer participation"],
  },
  {
    title: "Nexus Club (Alumni Connect)",
    description: "Strengthens alumni-student networking.",
    activities: ["Mentorship interactions", "Career guidance engagements", "Experience-sharing sessions"],
  },
  {
    title: "Unstop Igniters",
    description: "Encourages participation in competitive platforms and skill-based challenges.",
    activities: ["Student engagement in competitions", "Innovation and performance-driven activities"],
  },
];

const technicalClubs: ClubData[] = [
  {
    title: "Coding Club - CSE",
    description: "Enhances programming and problem-solving skills.",
    activities: ["Coding challenges", "Programming competitions", "Collaborative learning sessions"],
  },
  {
    title: "Design Club - CSD",
    description: "Explores UI/UX and digital creativity.",
    activities: ["Interface design workshops", "Digital visualization projects"],
  },
  {
    title: "Geek Hub - ISE",
    description: "Promotes exploration of emerging technologies.",
    activities: ["Technical workshops", "Knowledge-sharing forums"],
  },
  {
    title: "Technovation Club - ECE",
    description: "Encourages innovation in electronics and hardware systems.",
    activities: ["Electronics experimentation", "Technical demonstrations"],
  },
  {
    title: "Respawn Syndicate - CSD",
    description: "Focuses on gaming technology and creative development.",
    activities: ["Game-tech exploration", "Interactive project work"],
  },
  {
    title: "AI Club - AIML",
    description: "Engages students in AI-driven learning and innovation.",
    activities: ["AI/ML sessions", "Data-driven project discussions"],
  },
  {
    title: "Stratalyze - CSBS",
    description: "Integrates analytics with business technology thinking.",
    activities: ["Strategy workshops", "Industry-oriented discussions"],
  },
  {
    title: "Canara Student Open-Source Community (COSC)",
    description: "Promotes collaborative global tech contribution.",
    activities: ["Open-source participation", "Community coding initiatives"],
  },
];

// --- Reusable Component for a List of Clubs ---

const ClubList = ({ title, clubs }: { title: string; clubs: ClubData[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12 text-[#1D1D1F]">
      <h2 className="text-3xl font-bold mb-6 text-[#1D1D1F]  ">{title}</h2>
      <div className="space-y-4">
        {clubs.map((club, index) => (
          <div key={index} className="border border-gray-200 rounded-lg  overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center p-5 text-left font-medium transition-colors duration-200 ${
                openIndex === index ? "bg-gray-100 " : "bg-white text-textGray hover:bg-gray-50"
              }`}
            >
              <span className="text-lg">{club.title}</span>
              <span className={`transform text-textGray transition-transform duration-200 ${openIndex === index ? "" : ""}`}>
                {openIndex === index ? <FaChevronUp className="text-textGray" /> : <FaChevronDown className="text-textGray" />}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden bg-white`}
            >
              <div className="p-5 border-t border-gray-200 bg-gray-50/50">
                <p className="text-textGray text-lg font-medium mb-3">{club.description}</p>
                {/* <h4 className="text-sm font-semibold text-textGray uppercase tracking-wide mb-2">Key Activities:</h4> */}
                <ul className="list-disc list-inside text-lg space-y-1 text-textGray pl-2">
                  {club.activities.map((activity, actIndex) => (
                    <li key={actIndex}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Layout Component ---

const CollapsSection = () => {
  return (
    <div className="w-full max-w-7xl xl:max-w-[80%] mx-auto py-5 lg:pb-10 lg:pt-0">
      {/* Non-Technical Section */}
      <ClubList title="Non-Technical Clubs" clubs={nonTechnicalClubs} />

      {/* Technical Section */}
      <ClubList title="Technical Clubs (Department Supported)" clubs={technicalClubs} />

      {/* Summary Footer */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-[#1D1D1F]">
        <div className="flex flex-col justify-center items-center rounded-[30px] p-8 bg-gray-50 h-full min-h-[180px] text-center transition-transform hover:scale-[1.02] duration-300">
          <h3 className="text-5xl md:text-6xl font-extrabold text-[#1D1D1F] mb-3">17</h3>
          <p className="font-bold text-xl text-[#1D1D1F]">Total Clubs</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-[30px] p-8 bg-gray-50 h-full min-h-[180px] text-center transition-transform hover:scale-[1.02] duration-300">
          <h3 className="font-bold text-2xl text-[#1D1D1F] mb-3">Club Hours</h3>
          <p className="text-textGray text-lg font-medium">Wednesdays</p>
          <p className="text-textGray text-lg">2:00 PM – 4:30 PM</p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-[30px] p-8 bg-gray-50 h-full min-h-[180px] text-center transition-transform hover:scale-[1.02] duration-300">
          <h3 className="font-bold text-2xl text-[#1D1D1F] mb-3">Focus Areas</h3>
          <p className="text-textGray text-base leading-relaxed max-w-[280px]">
            Creativity • Technology • Leadership • Innovation • Social Responsibility
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollapsSection;

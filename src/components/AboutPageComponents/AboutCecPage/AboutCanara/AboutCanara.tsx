"use client";

import { useRef, useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";

export default function AboutCanara() {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    // If currently showing more (expanding), we are about to collapse.
    // Scroll back to the top of the container.
    if (showMore && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-7xl mx-auto xl:max-w-[75%] text-justify text-[#1D1D1F]">
      <h4 className="text-xl text-textGray text-center pt-10 lg:pt-7 pb-6">
        About Canara Engineering College
      </h4>
      <h1 className="text-3xl text-[#1D1D1F] text-center md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">
        A Campus Like No other
      </h1>

      {/* Always visible paragraphs */}
      <div ref={contentRef} className="px-1 md:px-6 lg:px-8 lg2:px-1">
        <p className="lg:text-xl text-lg text-justify leading-7 pt-8 md:pt-10 text-textGray">
          Canara Engineering College (CEC), established in 2001 as a millennium
          project of the Canara High School Association, is a premier autonomous
          engineering institution located on a lush 26-acre campus at
          Benjanapadavu, Mangalore. Blending values with technology, CEC has
          emerged as a leading center for technical education in the coastal
          region of Karnataka.
        </p>
        <p className="lg:text-xl text-lg text-justify leading-7 pt-6 text-textGray">
          The vision of our founder, Late Sri Ammembal Subba Rao Pai, was to
          provide{" "}
          quality, affordable education{" "}
          to aspiring students. Today, this vision is a reality at CEC driven by
          highly qualified faculty, cutting-edge infrastructure, and a vibrant
          learning ecosystem.
        </p>

        <div className="lg:text-xl text-lg text-justify leading-7 pt-6 text-textGray">
          Starting with just 180 students in three programs, CEC has grown to an
          intake of 750 students across seven dynamic branches:
          <ul className="mt-4 list-decimal list-inside leading-7">
            <li>Computer Science & Engineering </li>
            <li>Electronics & Communication Engineering </li>
            <li>Information Science & Engineering </li>
            <li>Computer Science & Design </li>
            <li>Computer Science & Business Systems </li>
            <li>Artificial Intelligence & Machine Learning </li>
            <li>Mechanical Engineering </li>
          </ul>
        </div>

        {/* Animated hidden section */}
        <div
          className={`grid transition-[grid-template-rows] duration-700 ease-in-out ${
            showMore ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="lg:text-xl text-lg text-justify leading-7 pt-6 text-textGray">
              All programs are approved by the{" "}
              AICTE, New Delhi, and
              affiliated with{" "}
              
                Visvesvaraya Technological University (VTU)
              
              , Belagavi. As an{" "}
              autonomous institution, CEC now
              has the academic freedom to design innovative curricula aligned
              with emerging industry needs,
              ensuring students are future-ready. We take pride that all
              eligible B.E. programs are accredited by the{" "}
              
                National Board of Accreditation (NBA)
              {" "}
              and the institution itself is accredited by{" "}
              
                NAAC with an “A” grade (CGPA 3.24)
              
              .
            </p>
            <p className="lg:text-xl text-lg leading-7 pt-6 text-textGray">
              Today, with nearly 2,000 students and 100+ faculty members (many
              with doctoral qualifications), CEC maintains a good student
              faculty in line with national standards. Around 35% of our
              students reside in modern, eco-friendly hostels on campus. Our
              students consistently excel in academics, securing{" "}
              
                university ranks, gold medals, and 100% results
              {" "}
              in leading branches, while also achieving national-level
              recognition in cultural, technical, and sports arenas.
            </p>
            <p className="lg:text-xl text-lg leading-7 pt-6 text-textGray">
              CEC is home to a vibrant student life with{" "}
              
                active clubs, IEEE student chapter, state-level fests, and
                impactful outreach programs
              
              , all fostering holistic growth and leadership. Our modern
              library, advanced laboratories, and digital learning centers
              provide students with rich resources and hands-on experiences.
            </p>

            <p className="lg:text-xl text-lg leading-7 pt-6 text-textGray">
              Our Training & Placement Cell{" "}
              ensures career readiness through regular training in soft skills,
              communication, and aptitude, while the{" "}
              
                Entrepreneurship Development Cell (EDC)
              {" "}
              nurtures innovation and startups. With strong industry
              partnerships and academic tie-ups including Infosys, Ace
              Micromatic, ICT Academy, Niveus, MAHE, Q-Spiders, Ethnus, and more
              CEC bridges the gap between academia and industry.
            </p>

            <p className="lg:text-xl text-lg leading-7 pt-6 text-textGray">
              Placement outcomes remain one of our strongest highlights, with{" "}
              
                nearly 90% of eligible students placed in CSE and allied
                branches
              
              , a median salary of ₹7 LPA,
              and{" "}
              
                highest CTC packages ranging from ₹17–24 LPA
              
              . In addition, several faculty and student-led{" "}
              
                R&D projects funded by DST and other agencies
              {" "}
              are in progress, showcasing our research potential.{" "}
            </p>

            <p className="lg:text-xl text-lg leading-7 pt-6 text-textGray">
              CEC continues to expand its infrastructure and learning
              opportunities, staying in step with the demands of{" "}
              Industry 4.0 and beyond. With a
              perfect balance of tradition, innovation, and excellence, Canara
              Engineering College is not just an institution it’s a launchpad
              for{" "}
              
                tomorrow’s engineers, innovators, and leaders
              
            </p>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <div className="text-center">
        <button
          aria-label={showMore ? "Read Less" : "Learn More"}
          onClick={handleToggle}
          className="pt-8 inline-flex items-center cursor-pointer text-primary font-medium"
        >
          {showMore ? "Read Less" : "Read More"}
          {showMore ? (
            <MdKeyboardArrowUp className="text-xl text-primary" />
          ) : (
            <MdKeyboardArrowDown className="text-xl text-primary" />
          )}
        </button>
      </div>
    </div>
  );
}
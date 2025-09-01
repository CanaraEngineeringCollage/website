"use client";

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";

export default function AboutCanara() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-7xl mx-auto xl:max-w-[75%] text-justify  text-black">
      <h4 className="text-3xl text-textGray text-center pt-10 lg:pt-7 pb-6">
        About Canara Engineering College
      </h4>
      <h1 className="text-3xl text-[#1D1D1F] text-center md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">
        A Campus Like No other
      </h1>

      {/* Always visible paragraphs */}
      <p className="lg:text-xl md:text-lg text-[14px] text-justify leading-7 pt-16 text-textGray">
        Canara Engineering College(CEC), established in the year 2001 as a new
        millennium project of Canara High School Association, in the sprawling
        campus of 26 acres of pristine natural beauty at Benjanapadavu,
        Mangalore has now grown as a promising engineering institution with
        distinction in the coastal region of Karnataka, India, where values and
        technology converge! The lofty dream of our founder, Late Sri Ammembal
        Subba Rao Pai, of providing quality education to the needy student
        community at affordable costs, is being realized today at CEC, through
        well qualified and motivated faculty, state-of-the-art infrastructure
        and distinguished learning-centric facilities.
      </p>
      <p className="lg:text-xl md:text-lg text-[14px] text-justify leading-7 pt-12 text-textGray">
        Started with just an intake of 180 in three branches, today the
        institute boasts of a total intake of 630 in seven branches, namely
        Mechanical Engg., Computer Science & Engg., Electronics & Communication
        Engg., Information Science & Engg., recently introduced
        inter-disciplinary programs in demand, namely Computer Science & Design,
        Computer Science & Business System and Artificial Intelligence & Machine
        Learning. All these programs being approved by All India Council for
        Technical Education (AICTE), New Delhi and affiliated to Visveswaraya
        Technological University(VTU), Belagavi; CEC ensures that the students
        are well trained on existing engineering practices and acquainted with
        latest industrial trends. Glad to inform that all eligible BE programs
        here are accredited by National Board of Accreditation(NBA), New Delhi
        and the institute is also accredited by National Assessment and
        Accreditation Council(NAAC) with A Grade-CGPA-3.24
      </p>

      {/* Animated hidden section */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          showMore ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="lg:text-xl md:text-lg text-[14px] text-justify leading-7 pt-12 text-textGray">
          CEC today having a total student strength of around 1900 in the
          campus with about 35% of them staying in the ergonomically built
          college hostels and a faculty strength of 100+ with many doctorates
          and maintaining faculty-student ratio of 1:15 strictly in line with
          regulatory body guidelines; our well-trained students are showing
          outstanding performance in VTU examinations securing university ranks,
          gold medals, 100% results in leading branches, bagging district level,
          state level and national level championships & awards in co-curricular
          & extra-curricular activities through several student clubs & active
          IEEE student chapter in the institute and organizing many social
          outreach programs and state level intercollegiate techno-cultural fests
          successfully, towards total personality development and better
          visibility!
        </p>
        <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-12 text-textGray">
          The institute library has a treasure trove of books, magazines,
          journals and e-journals as well as digital library and e-learning
          centres. All laboratories and workshops are equipped with the most
          modern and sophisticated instruments, machinery and equipment,
          fulfilling the quest for practical knowledge of the students. The
          active Training and Placement department along with Entrepreneurship
          Development Cell organizes several programs like training the students
          to face campus recruitment tests and interviews through regular soft
          skill/communication skill development programs, Entrepreneurship
          Awareness Camps and helping the desired students to
          productize/commercialize their creative ideas.
        </p>
        <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-12 text-textGray">
          Campus placement statistics are encouraging with nearly 90% of the
          eligible students getting placed in CSE & allied branches, with a
          median salary of 7 lakhs and highest CTC of 17 to 24 lakhs. Reputed
          DST and other agency funded, a few R&D Projects are being executed in
          the institute. Active Academic tie-ups with some industries &
          universities like Infosys, Ace-Micromatic, ICT Academy, Niveus, Nitte
          University, MAHE-Manipal School of Information Sciences, Q-Spiders,
          Kakunje Softwares, Ethnus etc. are helping the students and faculty
          towards getting exposed to latest technical know-how and hands-on
          experiences. Motivated and well guided faculty are into research
          activity, with increasing Ph.D. registrations and Scopus indexed or web
          of science or quartile ranked journal publications, in the recent past!
          Infrastructure additions with modern facilities are happening in the
          campus, in full swing
        </p>
      </div>

      {/* Toggle button */}
      <div className="text-center">
      <button
        aria-label={showMore ? "Read Less" : "Learn More"}
        onClick={() => setShowMore(!showMore)}
        className="pt-8 inline-flex items-center  cursor-pointer text-[#0066CC] font-medium"
      >
        {showMore ? "Read Less" : "Read More"}
        {showMore ? (
          <MdKeyboardArrowUp className="text-xl text-[#0066CC]" />
        ) : (
          <MdKeyboardArrowDown className="text-xl text-[#0066CC]" />
        )}
      </button>
      </div>
    </div>
  );
}

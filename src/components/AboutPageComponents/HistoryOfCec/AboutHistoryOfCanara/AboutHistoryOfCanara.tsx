import React from "react";
import image1 from "../../../../../public/aboutPageImages/campusLegacy/historyimage.png";
import image2 from "../../../../../public/aboutPageImages/campusLegacy/History Image-2.webp";


import Image from "next/image";

const AboutHistoryCanara = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 lg:px-18 xl:px-16 pb-16 pt-5 text-black">
      {/* Sub Heading */}
      <h4 className="text-2xl md:text-3xl text-textGray py-5 xl:py-12">
        About Canara Engineering College
      </h4>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl text-[#1D1D1F] font-bold">
        A Campus Like No Other
      </h1>

      {/* Paragraph 1 */}
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-8 xl:pt-16 text-textGray text-justify">
        Canara Engineering College (CEC), established in the year 2001 as a new
        millennium project of Canara High School Association, in the sprawling
        campus of 26 acres of pristine natural beauty at Benjanapadavu, Mangalore
        has now grown as a promising engineering institution with distinction in
        the coastal region of Karnataka, India, where values and technology
        converge! The lofty dream of our founder, Late Sri Ammembal Subba Rao
        Pai, of providing quality education to the needy student community at
        affordable costs, is being realized today at CEC, through well qualified
        and motivated faculty, state-of-the-art infrastructure and distinguished
        learning-centric facilities.
      </p>

      {/* Paragraph 2 */}
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 py-12 text-textGray text-justify">
        Started with just an intake of 180 in three branches, today the institute
        boasts of a total intake of 630 in seven branches, namely Mechanical Engg.,
        Computer Science & Engg., Electronics & Communication Engg., Information
        Science & Engg., recently introduced inter-disciplinary programs in demand,
        namely Computer Science & Design, Computer Science & Business System and
        Artificial Intelligence & Machine Learning. All these programs being
        approved by AICTE, New Delhi and affiliated to VTU, Belagavi; CEC ensures
        that the students are well trained on existing engineering practices and
        acquainted with latest industrial trends. Glad to inform that all eligible
        BE programs here are accredited by NBA, New Delhi and the institute is also
        accredited by NAAC with A Grade-CGPA-3.24.
      </p>

      {/* Image 1 */}
      <div className="overflow-hidden w-full rounded-3xl my-7">
        <Image
          src={image2}
          alt="historyimage"
          className="object-cover w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]"
        />
      </div>

      {/* Paragraph 3 */}
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-12 text-textGray text-justify">
        CEC today having a total student strength of around 1900 in the campus
        with about 35% of them staying in the ergonomically built college hostels
        and a faculty strength of 100+ with many doctorates and maintaining
        faculty-student ratio of 1:15 strictly in line with regulatory body
        guidelines; our well-trained students are showing outstanding performance
        in VTU examinations securing university ranks, gold medals, 100% results
        in leading branches, bagging district level, state level and national level
        championships & awards in co-curricular & extra-curricular activities
        through several student clubs & active IEEE student chapter in the
        institute and organizing many social outreach programs and state level
        intercollegiate techno-cultural fests successfully, towards total
        personality development and better visibility!
      </p>

      {/* Paragraph 4 */}
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 py-12 text-textGray text-justify">
        The institute library has a treasure trove of books, magazines, journals
        and e-journals as well as digital library and e-learning centres. All
        laboratories and workshops are equipped with the most modern and
        sophisticated instruments, fulfilling the quest for practical knowledge of
        the students. The active Training and Placement department along with
        Entrepreneurship Development Cell organizes several programs like training
        the students to face campus recruitment tests and interviews through
        regular soft skill/communication skill development programs, Entrepreneurship
        Awareness Camps and helping the desired students to productize their creative
        ideas.
      </p>

      {/* Image 2 */}
      <div className="overflow-hidden w-full rounded-3xl my-7">
        <Image
          src={image1}
          alt="historyimage"
          className="object-cover w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]"
        />
      </div>

      {/* Paragraph 5 */}
      <p className="lg:text-xl md:text-lg text-[14px] py-12 leading-7 text-textGray text-justify">
        The institute library has a treasure trove of books, magazines, journals
        and e-journals as well as digital library and e-learning centres. All
        laboratories and workshops are equipped with the most modern and sophisticated
        instruments, fulfilling the quest for practical knowledge of the students.
        The active Training and Placement department along with Entrepreneurship
        Development Cell organizes several programs like training the students to
        face campus recruitment tests and interviews through soft skill programs,
        Entrepreneurship Awareness Camps and helping students to commercialize
        their creative ideas.
      </p>

      {/* Roadmap Heading */}
      <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl text-[#1D1D1F] font-bold ">
        Canara Engineering College Road Map
      </h1>

      {/* Roadmap Intro */}
      <p className="lg:text-xl md:text-lg text-[14px] pb-5 pt-8 xl:pt-12 leading-7 text-textGray text-justify">
        In an attempt to impart holistic education, to make "Canara Engineering
        College" a role model in higher education and the most preferred choice of
        students, staff, parents, society and industry in the near future; the
        following few proposals or action plans are projected, for 2 to 3 years down
        the lane:
      </p>

      {/* Roadmap List */}
      <ul className="list-disc pl-6 space-y-4 text-textGray text-[14px] md:text-lg lg:text-xl leading-7">
        <li>
          In line with NEP-2020, adding new UG and PG programs in emerging and
          multidisciplinary areas like Cyber Security, Data Science, IOT, Business
          Management, Automation & Robotics etc. Building of strong PG & Ph.D.
          programs is needed for further growth.
        </li>
        <li>
          To promote creative power & innovative ideas of the students, developing
          state-of-the-art "Student Activity Centre" is proposed.
        </li>
        <li>
          To explore introduction of 'Internationalization' with MOUs, student
          internships, joint projects, joint research funding & publications.
        </li>
        <li>
          Planned to possess necessary infrastructure & modern lab facilities for
          research, start-up incubation centres, technology development centres etc.
        </li>
        <li>
          To explore 'Academic Partnerships' with reputed companies, providing
          access to modern learning assets, lab assistance and specialized training.
        </li>
        <li>
          To tap leading companies & R&D organizations for training, courseware
          redesign, live projects and finishing school concepts.
        </li>
        <li>
          To encourage participation in online education platforms like Coursera,
          Udemy, SWAYAM, NPTEL etc.
        </li>
        <li>
          Planning ambitious programs to promote visibility like IEEE Conferences,
          Smart India Hackathon, TEDx, Ideathons, Technology Conclaves etc.
        </li>
        <li>
          Developing Smart Classrooms with intelligent interactive panels for
          modern pedagogy.
        </li>
        <li>
          To set benchmarks against reputed institutes for enhanced visibility and
          higher ranking.
        </li>
      </ul>
    </div>
  );
};

export default AboutHistoryCanara;

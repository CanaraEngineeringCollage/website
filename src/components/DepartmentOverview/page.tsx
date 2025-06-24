"use client";
import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const menuItems = [
  "Department Profile",
  "Organisation Structure",
  "Head of Department",
  "Faculty & Staff",
  "Academic Programs",
  "PEO & PO-PSO",
  "Course Outcomes (CO)",
  "Facilities",
  "Student Achievement",
  "Research & Product Development",
  "Publications",
  "Events",
  "Gallery",
];

const content = {
  vision:
    "To be recognized as a center of knowledge dissemination in Computer Science and Engineering by imparting value-added education to transform budding minds into competent computer professionals.",
  mission: [
    "Provide a value-based learning environment enriched with ethics, honesty and integrity that equips students to cater to the needs of society and industry.",
    "Augment the knowledge of students towards cutting-edge technologies and state-of-the-art tools of Computer Science & Engineering.",
    "Create opportunities for all-round development of students through co-curricular and extra-curricular activities.",
    "Promote research, innovation and development activities in the field of Computer Science among staff and students without any bias.",
  ],
  departmentProfile: `The department was started in the year 2001 to offer under graduate degree programme in Bachelor of Engineering (BE) in Computer Science & Engineering (CSE). The department also offered post graduate programme in engineering i.e. M.Tech in Computer Science Engineering (CSE) from 2010 to 2021. The department has dedicated, qualified and experienced faculty members to guide the students in academics. The faculty members are actively involved in teaching, product development and research. The faculty members have published number of research and review papers/articles in referred international journals and reputed International Conferences which are archived at IEEE/ACM/Springer and other renowned digital libraries.

The department frequently organizes training programmes for the faculty, technical staff and students. The faculty frequently attends staff development programmes (SDP/FDP/Seminars) to update themselves in technological advancements and conferences to present research findings. The department is also involved in the students’ career by placing special emphasis on all-round development through continuous interaction with industry. Interactive sessions with experts from academia, research laboratories and industry are constantly held so as to enable students to gain knowledge on emerging trends. The campus placement has been scaling higher and higher pass right from its inception with multinational companies recruiting students in large numbers. To enhance the opportunity of placements to students, the department conducts soft skills training programmes, technical skill development activities and initiatives on self-learning (Spoken Tutorial programmes by IIT Bombay).

The department promotes extra-curricular activities under the umbrella of the students’ association & SPECS. The department brings out Annual technical magazine and newsletter which provides an opportunity for the students and staff to publish innovative ideas, programming skills and articles on current trends in computing and technology. The student’s association and National Service Scheme (NSS) wing frequently conducts various programmes to strengthen leadership skills, teamwork and communication, and awareness on protection of environment and societal responsibilities.`,
};

const DepartmentOverview = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="py-10 xl:py-36 text-black bg-white">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
        <h1 className="text-[20px] lg:text-[34px]  text-black">Department of</h1>
        <h1 className="text-[30px] lg:text-[54px] font-bold pb-32 text-black">Computer Science & Engineering</h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Sidebar Menu */}
          <aside className="md:col-span-4 border-r border-gray-300 pr-4">
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`cursor-pointer flex items-center text-[18px] ${
                    selectedIndex === index ? "text-[#2884CA] font-semibold" : "text-gray-600"
                  }`}
                >
                  <HiOutlineChevronRight className="mr-2" />
                  {item}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-8 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-black mb-2">Vision</h2>
              <p className="text-[17px] text-gray-700 leading-relaxed">{content.vision}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-2">Mission</h2>
              <ul className="list-disc list-inside space-y-2 text-[17px] text-gray-700">
                {content.mission.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-2">Department Profile</h2>
              <p className="text-[17px] text-gray-700 whitespace-pre-line leading-relaxed">
                {content.departmentProfile}
              </p>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
};

export default DepartmentOverview;

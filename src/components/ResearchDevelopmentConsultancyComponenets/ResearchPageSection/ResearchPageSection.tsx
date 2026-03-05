"use client";
import React, { useState } from "react";

const IframLinks = ({ title, link }: { title?: string; link?: string }) => {
  return (
    <div className="mb-10">
      <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">{title}</h2>
      <ul className="space-y-1">
        <li className="flex items-center gap-2 text-[17px] text-textGray hover:text-blue-600 cursor-pointer">
          <iframe src={link} className="w-full h-[70vh]" />
        </li>
      </ul>
    </div>
  );
};

// Vision and Mission Section
const VisionMission = () => (
  <div className="text-textGray text-[17px] space-y-5">
    <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Vision</h2>
    <p>
      To foster a culture of innovation, interdisciplinary research, and knowledge creation that contributes to societal progress and global
      excellence.
    </p>
    <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Mission</h2>
    <ul className="list-disc ml-5 space-y-1">
      <li>Promote high-quality research in emerging areas of science, engineering, and technology.</li>
      <li>Encourage faculty and students to publish in reputed journals and conferences.</li>
      <li>Strengthen industry–institute partnerships through collaborative research.</li>
      <li>Support innovations, patents, and entrepreneurship.</li>
      <li>Uphold ethics and integrity in all research endeavors.</li>
    </ul>
  </div>
);

// Research Policies Section
const ResearchPolicies = () => (
  <div className="text-textGray text-[17px] space-y-6">
    {/* Existing Section */}
    <div className="space-y-5">
      <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Research Policies and Guidelines</h2>
      <p>
        The Research Policy of Canara Engineering College provides a framework to promote, support, and regulate research activities across all
        departments. It ensures quality, ethical practices, and alignment with institutional goals.
      </p>
      <ul className="list-disc ml-5 space-y-1">
        <li>Research Incentives (publications, patents, funded projects)</li>
        <li>Seed Grant / Internal Funding Schemes</li>
        <li>Research exchange programs</li>
        <li>Publication & Authorship guidelines</li>
      </ul>
    </div>

    {/* New Section: Research Support Schemes */}
    <div className="space-y-5">
      <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Research Support Schemes at CEC</h2>

      {/* 1. Research Grants */}
      <div>
        <h3 className="text-[19px] text-[#1d1d1f] font-bold">1. Research Grants & Internal Funding</h3>
        <p className="mt-2">
          CEC provides structured research grant schemes to encourage faculty to initiate, strengthen, and expand their research activities.
        </p>
        <p className="mt-1">The support enables faculty to:</p>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          <li>Start new research ideas and pilot studies.</li>
          <li>Build preliminary data for external funding proposals.</li>
          <li>Promote interdisciplinary and collaborative research.</li>
          <li>Align research with institutional priority areas and emerging thematic domains.</li>
        </ul>
      </div>

      {/* 2. Publication Support */}
      <div>
        <h3 className="text-[19px] text-[#1d1d1f] font-bold">2. Publication Support</h3>
        <p className="mt-2">To promote high-quality research dissemination, CEC supports:</p>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          <li>Publications in reputed national and international journals.</li>
          <li>Indexed conference publications (faculty and student-driven).</li>
          <li>Support for article processing charges (APC) in credible journals.</li>
          <li>Encouragement for impactful, ethical, and responsible publishing practices.</li>
        </ul>
      </div>

      {/* 3. Patent Support */}
      <div>
        <h3 className="text-[19px] text-[#1d1d1f] font-bold">3. Patent Support & Intellectual Property Facilitation</h3>
        <p className="mt-2">CEC encourages innovation and technology development through:</p>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          <li>Support for patent filing and examination processes.</li>
          <li>Incentives for patent publication and granted patents.</li>
          <li>Guidance for protecting intellectual property generated through institutional research.</li>
          <li>Promotion of translational research and commercialization potential.</li>
        </ul>
      </div>

      {/* 4. Research Exchange */}
      <div>
        <h3 className="text-[19px] text-[#1d1d1f] font-bold">4. Research Exchange & Mobility Programs</h3>
        <p className="mt-2">To strengthen research exposure and collaboration, CEC supports:</p>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          <li>Faculty participation in national workshops, training, and research visits.</li>
          <li>International research exchange opportunities for global academic engagement.</li>
          <li>Short-term visits for research discussions, technology demonstrations, or project-based collaborations.</li>
          <li>Capacity building through exposure to advanced laboratories, institutions, and industrial R&D environments.</li>
        </ul>
      </div>

      {/* 5. Additional Incentives */}
      <div>
        <h3 className="text-[19px] text-[#1d1d1f] font-bold">5. Additional Research Incentives</h3>
        <p className="mt-2">CEC provides recognition and institutional support for:</p>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          <li>Books and book chapters published with reputed publishers.</li>
          <li>Externally funded projects and consultancy work.</li>
          <li>Student research mentorship and supervision.</li>
          <li>Projects with societal, community, or rural impact.</li>
          <li>Training, capacity-building, and upskilling programs.</li>
          <li>Outstanding research contributions and academic achievements.</li>
        </ul>
      </div>
    </div>
  </div>
);

// Research Bodies Section
const ResearchBodies = () => (
  <div className="text-textGray text-[17px] space-y-5">
    <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Research Bodies & Committees</h2>
    <ul className="list-disc ml-5 space-y-2">
      <li>
        <strong>Research Advisory Committee (RAC):</strong> Review and approve research proposals, guide research policies, monitor funded projects,
        and ensure all research adheres to national ethical guidelines.
        <br />
        <strong>Chairperson:</strong> Principal
        <br />
        <strong>Members:</strong>
        <ul className="list-disc ml-5 space-y-1">
          <li>Dean (R&D)</li>
          <li>Chief R&D Coordinator</li>
          <li>Senior Faculty Member</li>
          <li>Industry Expert</li>
        </ul>
      </li>
      <li>
        <strong>Intellectual Property Rights (IPR) Cell:</strong> Supports patent filing, publishing, granting, copyrights, and other intellectual
        property processes.
        <br />
        <strong>Chairperson:</strong> Dean (R&D)
        <br />
        <strong>Members:</strong>
        <ul className="list-disc ml-5 space-y-1">
          <li>Chief R&D Coordinator</li>
          <li>Co-Coordinator</li>
          <li>Faculty Members (AIML, CSE, ECE, ISE, CSD, CSBS, S&H)</li>
        </ul>
      </li>
      <li>
        <strong>Entrepreneurship Development Cell (EDC):</strong> Promote innovation, startups, and entrepreneurship.
        <br />
        <strong>Chairperson:</strong> Dean (R&D)
        <br />
        <strong>Members:</strong>
        <ul className="list-disc ml-5 space-y-1">
          <li>Faculty Coordinator</li>
          <li>Student Representatives</li>
        </ul>
      </li>
    </ul>
  </div>
);

// Department Highlights Section
const DepartmentHighlights = () => (
  <div className="text-textGray text-[17px] space-y-4">
    <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Department-wise Research Highlights</h2>

    {/* AIML */}
    <h3 className="font-bold text-[20px]">Artificial Intelligence & Machine Learning (AIML)</h3>
    <p>
      <strong>Thrust Areas:</strong> Artificial Intelligence, Machine Learning, Internet of Things and Robotics, Deep Learning, Industrial Automation,
      Cloud Computing, Cryptography, Information Security.
    </p>
    <p>
      <strong>Specialized Labs/Facilities:</strong> Intelligent System Laboratory (AIL06) equipped with high-performance HP Z-series workstations for
      advanced computing in AI, ML, Data Science, and related fields. Supports complex algorithms, intelligent systems, and cutting-edge research.
    </p>

    <h3 className="font-bold text-[20px]">Student Research & Achievements (Patents)</h3>
    <div className="rounded overflow-x-auto border border-gray-200 w-full">
      <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px] text-textGray">
        <thead>
          <tr className="bg-[#F3F8FC] text-[#2884CA]">
            <th className="py-3 md:px-4 px-1 border-b">S.No</th>
            <th className="py-3 md:px-4 px-1 border-b">Student Name(s)</th>
            <th className="py-3 md:px-4 px-1 border-b">Title / Achievement</th>
            <th className="py-3 md:px-4 px-1 border-b">Agency / Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">1</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">
              Mehul Muralidhar Kini, Anoop S Prabhu K, Shashank S, M Akhila Prabhu, Sarthak Pramod Pai, Sharan Raghveer Pai
            </td>
            <td className="py-3 md:px-4 align-top px-1 border-b">UAV Assisted Waste Segregation for Urban Areas</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Indian Patent, 2025</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">2</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Pratham R, Shreya M, Sidharth K, Jayashree A R</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">
              AI-based Acoustic Wave Monitoring of Rail Wear, Quality, Along with Other Parameters
            </td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Indian Patent, 2025</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">3</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Akshata Krishna Hegde, Abhijna, Karishma B, Shriram Udaya Kumar Shenoy</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">AI-Based Road Inspection System</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Indian Patent, 2025</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">4</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Chitra, Akshay M, Karishma K, Nithin Kamath</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Artificial Intelligence for Smart Agriculture</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Indian Patent, 2025</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">5</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Shreelakshmi R Hegde, Komal Naik, Siddarth Kini Ullal, Jagat Pal</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">CookCommander - An IoT-Based Robust Stove Control System</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Indian Patent, 2025</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">6</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">M Sooraj Shenoy, Denzil Serrao, Yatheesha K V, Karthik Baliga</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Dashboard for Swacchta Using Artificial Intelligence-Based Image Analysis</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Indian Patent, 2025</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">7</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">
              Abhishek Sudesh Naik, Manish Anandu Naik, Karthik Ravi Achari, Tejas Suresh Tandel
            </td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Smart Bin Incentives System</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Indian Patent, 2025</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong>Collaborations & MoUs:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>NexaInnovSolutions - Internships, projects, research, placements</li>
      <li>Accolade Tech Solutions Pvt. Ltd. - Internships, projects, research, placements</li>
    </ul>

    {/* Science & Humanities */}
    <h3 className="font-bold text-[20px]">Science & Humanities (S&H)</h3>
    <p>
      <strong>Research Centre:</strong> Chemistry Research Centre since 2010.
    </p>
    <p>
      <strong>Focus Areas:</strong> Organic Synthesis, Corrosion Science, Green Chemistry, Industrial relevance research.
    </p>
    <p>
      <strong>Research Supervisors:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>Dr. Priya V. Frank</li>
      <li>Dr. Lavanya D. Kateel</li>
    </ul>
    <p>
      <strong>Research Infrastructure (selected equipment):</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>Boiling Water Bath</li>
      <li>Digital Melting Point Apparatus</li>
      <li>Electronic Balance</li>
      <li>Fume Exhaust Hood</li>
      <li>Hot Air Oven</li>
      <li>Heating Mantle</li>
      <li>Hot Plate</li>
      <li>Ion Exchange Plant</li>
      <li>Ice Flaker</li>
      <li>Micro Oven Grill</li>
      <li>Magnetic Stirrer</li>
      <li>Oil-Free Vacuum Pump</li>
      <li>Oil Bath</li>
      <li>Rotary Vacuum Flash Evaporator</li>
      <li>UV-Visible Spectrophotometer</li>
      <li>Water Bath Thermostatic</li>
    </ul>

    <img src="/rsdImages/1.png" />

    {/* CSBS */}
    <h3 className="font-bold text-[20px]">Computer Science & Business Systems (CSBS)</h3>
    <p>
      <strong>Thrust Areas:</strong> Networking, Cloud Computing, Deep Learning, Artificial Intelligence, Machine Learning, Renewable Energy,
      Operations Management, Cryptography, Cyber Security, Healthcare, Medical Imaging, Nanosensor.
    </p>
    <p>
      <strong>Student Achievements:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>Varun Raj - Top 12 finalists, Emerge Ideathon (Feb 2025)</li>
      <li>Melisha - Top 12 finalists, Emerge Ideathon (Feb 2025)</li>
      <li>Diya H S - Top 12 finalists, Emerge Ideathon (Feb 2025)</li>
    </ul>

    {/* CSD */}
    <h3 className="font-bold text-[20px]">Computer Science & Design (CSD)</h3>
    <p>
      <strong>Research Strengths:</strong> Full Stack Development, Multimedia Design, UI/UX, Machine Learning, Data Science.
    </p>
    <p>
      <strong>Thrust Areas:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>Full Stack Development – modern frameworks, scalable architectures, cloud-native deployment, DevOps practices</li>
      <li>Multimedia Design – digital content creation, animation, game development, computer graphics, interactive media</li>
      <li>UI/UX – human–computer interaction, user-centered design, accessibility, usability testing</li>
      <li>Machine Learning and Data Science – predictive analytics, deep learning, big data techniques</li>
    </ul>
    <p>
      <strong>Upcoming / Ongoing Initiatives:</strong> 2-day hands-on workshop on “Generative AI and Applications for Education”
    </p>

    {/* CSE */}
    <h3 className="font-bold text-[20px]">Computer Science & Engineering (CSE)</h3>
    <p>
      <strong>Department Research Highlights:</strong> Data Science, ML, Deep Learning, Cyber Security, GIS, Remote Sensing, Cloud Computing.
      Recognized as a Research Center with six approved research guides.
    </p>
    <p>
      <strong>Research Guides:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>Dr. Nagesh H R</li>
      <li>Dr. Demian Antony D’Mello</li>
      <li>Dr. Udaya Kumar K Shenoy</li>
      <li>Dr. Karthik Pai B H</li>
      <li>Dr. Basappa Kodada</li>
      <li>Dr. H Manoj Gadiyar</li>
    </ul>
    <h3 className="font-bold text-[20px]">Student Research & Achievements</h3>
    <div className="rounded overflow-x-auto border border-gray-200 w-full">
      <table className="w-full border border-gray-300 text-left text-textGray">
        <thead>
          <tr className="bg-[#F3F8FC] text-[#2884CA]">
            <th className="py-3 md:px-4 px-1 border-b">S.No</th>
            <th className="py-3 md:px-4 px-1 border-b">Student Name(s)</th>
            <th className="py-3 md:px-4 px-1 border-b">Title / Achievement</th>
            <th className="py-3 md:px-4 px-1 border-b">Conference / Journal / Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">1</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Guruprasad Bhat, Sneha Shanbhag, Swati Shet, Vasudeva</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Avatar Closet: An AR-Based Multi-Modal Virtual Try-On System for Fashion Retail</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">3rd IEEE ICRAIS, 2025</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">2</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Sruthi K S</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">
              A Unified Computer Vision System for Multilingual Bi-directional Gesture Recognition
            </td>
            <td className="py-3 md:px-4 align-top px-1 border-b">3rd IEEE ICRAIS, 2025</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">3</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Trayee Shridhar Nayak</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Deep Learning for Tulsi Leaf Disease Identification</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">IEEE AIDE, 2025</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">4</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Parimi Uma Sahithya</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Harnessing Deep Learning for Missing Child Identification</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">ICAIT, 2024</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">5</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Nikitha Mogaveer</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Handwritten Character Recognition of Kannada using CNN</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">IJARCCE, 2024</td>
          </tr>
          <tr>
            <td className="py-3 md:px-4 align-top px-1 border-b">6</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Ananya Mrutyunjaya et al.</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">Virtudine: Discover Nutrient-Rich Flavors Through Pixels using AR</td>
            <td className="py-3 md:px-4 align-top px-1 border-b">NCDTE, 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <strong>Research Infrastructure:</strong> Research lab with 8 PCs.
    </p>
    <p>
      <strong>Collaborations & MoUs:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>DLithe, Bengaluru - Industrial training, Internship, R&D, Skill development, Guest lectures, FDPs</li>
      <li>GlowLogics Solutions - Webinar</li>
      <li>Karunadu Technologies - FDPs and Internships</li>
    </ul>
    <p>
      <strong>Upcoming Initiatives:</strong> Workshop on “Manuscript Writing”, Skill Development Programme on “IoT Unplugged: Connecting the Future”
    </p>

    {/* ECE */}
    <h3 className="font-bold text-[20px]">Electronics & Communication Engineering (ECE)</h3>
    <p>
      <strong>Thrust Areas:</strong> VLSI, Embedded Systems & IoT, Advanced Communication Systems, Signal/Image/AI Processing, RF, Microwave & Antenna
      Design, Robotics, Control & Automation.
    </p>
    <p>
      <strong>Research Guides:</strong> Dr. Ganesh V Bhat, Dr. Dayananda G K
    </p>
    <p>
      <strong>Student Research & Achievements:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>Sindhu Shenoy M - Aid for Visually Challenged People (ICWITE 2024)</li>
      <li>Bharath H M - Reflecting on Technology: Smart Mirror Review (Springer Nature 2024)</li>
      <li>Prathap M - Efficient Vehicle Management through Automated License Plate Recognition (ICCSST-2023)</li>
      <li>Bhavyashree - Pothole Detection using YOLOv5 (ICCSST-2023)</li>
      <li>Pavan - Recognition of diseases in Tomato and Potato plant (NCETE-2023)</li>
    </ul>
    <p>
      <strong>Research Infrastructure:</strong> Research/Project Lab with 3D Printer and additional lab access beyond working hours.
    </p>
    <p>
      <strong>Collaborations & MoUs:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>Govt Tool and Training Centre - Internships and Training</li>
      <li>Kakunje Software Pvt. Ltd. - Workshops and Projects</li>
    </ul>

    <p>
      <strong>Research/Project</strong>
    </p>
    <img src="/rsdImages/2.png" />
    <p>
      <strong>Research Lab</strong>
    </p>
    <img src="/rsdImages/3.png" />
    <p>
      <strong>3D Printer</strong>
    </p>
    <img src="/rsdImages/4.png" />
    <p>
      <strong>Research/Project</strong>
    </p>
    <img src="/rsdImages/5.png" />

    <p className="mt-3">
      <strong>Upcoming Initiatives:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>Hackathons</li>
      <li>Invited Talks</li>
      <li>FDP on Applied Embedded Systems (STM32F410RE)</li>
      <li>Mini Project Exhibition</li>
      <li>Major Project Exhibition</li>
      <li>MoU-linked Activities</li>
    </ul>

    {/* ISE */}
    <h3 className="font-bold text-[20px]">Information Science & Engineering (ISE)</h3>
    <p>
      <strong>Department Research Highlights:</strong> Strong research culture with patents, grants, FDPs, student projects, and industry
      collaborations.
    </p>
    <p>
      <strong>Student Research & Achievements (selected Utility Patents & Grants):</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>
        Diya, Prithvi S Nayak, Samridhi S, Shraddha J Naik - Innovative Web-Based Platform for Sustainable and Efficient Canteen Operations (Utility
        Patent, 2025)
      </li>
      <li>
        Amulya Jois, Rakshitha Shetty A, Tilak Shetty, Venkatesh R Kamath - Intercode - Seamless Real-Time Code Collaboration for Technical Interviews
        (Utility Patent, 2025)
      </li>
      <li>Sujal V Kanchan - PrivAI - Intelligent Privacy Detection and Protection Solution for Social Media Users (Utility Patent, 2025)</li>
      <li>Aniketh K, Darshan, Nishan, Varshith B A - AI Talentsuite – Dual Application System for Candidate Upskilling (Utility Patent, 2025)</li>
      <li>
        Sumedha, Sinchana Sn, Shreesha, Sujnan Acharya - AI-Based Women and Child Health Monitoring Application During Pregnancy Stages (Utility
        Patent, 2025)
      </li>
      <li>
        Krishna H Pallan, Akash Javali, Payal, P Rethi Kumaar - Mind-Care: Multimodal Sentiment Analysis Framework for Mental Health Detection
        (Utility Patent, 2025)
      </li>
      <li>B Lipika, Devika Bhandary, Rashmi S, Shraddha K - Agriflow: Revolutionizing Irrigation with IoT Automation (Utility Patent, 2025)</li>
      <li>
        Chirag Honnavarkar, Pradhyumna Prabhu, Abhay S K, Chaithra Nayak - Retinaguard: Optimal CNN Solution for Diabetic Retinopathy (Utility Patent,
        2024)
      </li>
    </ul>
    <p>
      <strong>Other Notable Achievements:</strong> KSCST-funded projects, hackathon prizes, conference publications, national-level awards (2023–2025)
    </p>
  </div>
);

// Research Output Section
const ResearchOutput = () => (
  <div className="text-textGray text-[17px] ">
    <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Research Output</h2>
    <div className="mb-4">
      <h3 className="text-[20px] text-[#1d1d1f] mb-2 font-bold">Research Output Summary (2020–2025)</h3>
      <img src="https://apiserver.cec.edu.in/files/rdcc" className="" alt="" />
      <ul className="list-disc ml-5 mt-3 space-y-1">
        <li>Number of patents published/granted (published/granted): 123</li>
        <li>External Project funds received (total amount): ₹31,41,764</li>
      </ul>
    </div>
    <div className="mb-2">
      <h3 className="text-[20px] text-[#1d1d1f] mb-2 font-bold">Department-Wise Unique Research Publications (2021–2025)</h3>
      <img src="https://apiserver.cec.edu.in/files/deptUniqueResearch" className="mb-6" alt="" />
      <img src="https://apiserver.cec.edu.in/files/deptUniqueResearch-2" className="" alt="" />
    </div>
  </div>
);

// Research Infrastructure Section
const ResearchInfrastructure = () => (
  <div className="text-textGray text-[17px] ">
    <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Research Infrastructure</h2>
    <p className="mb-3">
      <strong>CEC provides advanced facilities to support research across departments:</strong>
    </p>
    <ul className="list-disc ml-5 space-y-1">
      <li>Department-level research laboratories equipped for projects and experiments.</li>
      <li>High-performance computing systems and specialized workstations (HP Z-Series in AIML lab).</li>
      <li>Specialized equipment and instruments for Chemistry, ECE, and other departments.</li>
      <li>Access to project labs and additional lab hours beyond regular schedules for research scholars and student projects.</li>
    </ul>
  </div>
);

// Collaborations Section
const Collaborations = () => (
  <div className="text-textGray text-[17px] space-y-5">
    <h2 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Collaborations & MoUs</h2>
    <ul className="list-disc ml-5 space-y-1">
      <li>Govt. Tool Room and Training Centre, Baikampady</li>
      <li>ScleraVDMS Pvt. Ltd.</li>
      <li>Nexalnnov Solutions</li>
      <li>Megamind Advertising Pvt. Ltd.</li>
      <li>DLithe, Bengaluru</li>
      <li>GlowLogics Solutions</li>
      <li>Karunadu Technologies</li>
      <li>Mangalore University (Cardiff)</li>
      <li>Accolade Tech Solutions Pvt. Ltd.</li>
      <li>Manipal Academy of Higher Education</li>
      <li>QSPIDER</li>
      <li>ETHNUS</li>
    </ul>
  </div>
);

import CustomSelect from "@/components/Common/CustomSelect/CustomSelect";

const RsdPageSection = () => {
  const titles = [
    "Vision & Mission",
    "Research Policies",
    "Research Bodies",
    "Department Highlights",
    "Research Output",
    "Infrastructure",
    "Collaborations",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-10 xl:py-20 text-[#1D1D1F] overflow-hidden">
      <div className="lg2:mx-24 mx-5">
        <h1 className="text-[30px] lg:text-[54px] font-bold pb-1 leading-[1.2] lg:pb-10 text-[#1D1D1F]">
          Research &amp; Development <br /> and Consultancy Cell
        </h1>
        <div className="md:grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-12 mt-10">
          <div className="col-span-3 sticky top-20 md:top-32 self-start md:mb-0">
            <div className="sticky top-20 h-fit">
              {/* Mobile Dropdown */}
              <div className="block md:hidden mb-7">
                <CustomSelect
                  value={titles[selectedIndex]}
                  onChange={(e) => {
                    const newIndex = titles.indexOf(e.target.value);
                    if (newIndex !== -1) setSelectedIndex(newIndex);
                  }}
                  options={titles}
                />
              </div>

              {/* Desktop Sidebar */}
              <div className="hidden md:block">
                {titles.map((title, index) => (
                  <h1
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`text-[20px] pb-3 mb-3 cursor-pointer ${index !== titles.length - 1 ? "border-b-2 border-border" : ""} ${
                      selectedIndex === index ? "text-[#2884CA] font-bold" : "text-textGray font-[500]"
                    }`}
                  >
                    {title}
                  </h1>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-8 mt-3 md:mt-0 max-h-[70vh] md:max-h-[90vh] overflow-y-auto pr-2 scrollable">
            {selectedIndex === 0 && <VisionMission />}
            {selectedIndex === 1 && <ResearchPolicies />}
            {selectedIndex === 2 && <ResearchBodies />}
            {selectedIndex === 3 && <DepartmentHighlights />}
            {selectedIndex === 4 && <ResearchOutput />}
            {selectedIndex === 5 && <ResearchInfrastructure />}
            {selectedIndex === 6 && <Collaborations />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsdPageSection;

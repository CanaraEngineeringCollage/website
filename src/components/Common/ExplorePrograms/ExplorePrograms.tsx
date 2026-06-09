"use client";

import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

type DescriptionProps = {
  subtitle1: string;
  subDescription1: string;
  subtitle2: string;
  subDescription2: string;
  subtitle3: string;
  subDescription3: string;
  src: string;
  url?: string;
};

interface CardContentProps {
  description: DescriptionProps;
}

export default function ExplorePrograms() {
  const cards = programData.map((card, index) => <Card key={card.title} card={card} index={index} />);

  return (
    <div className="w-full  h-full  text-[#1D1D1F] ">
      <div className="xl:max-w-[75%] max-w-7xl mx-auto">
        <h2 className="    xl:ps-0   lg:ms-0 text-center  mx-auto text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-[#1D1D1F]">
          Explore our Programmes
        </h2>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

// 👇 These are the actual program cards
const programData = [
  {
    category: "Masters of Business Administration in",
    title: "FinTech and Data Analytics",
    src: "/engineeringProgrammImages/mba.webp",
    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/mba.webp",
          subtitle1: "Overview of the Department ",
          subDescription1:
            "The MBA in FinTech & Data Analytics at Canara Engineering College is a two-year postgraduate management programme structured around modern business environments. Offered in collaboration with QSpiders Eduversity, the programme equips students with a dual foundation that covers FinTech domains including banking, investment banking, insurance, and branch operations, alongside data analytics tools such as SQL, Power BI, and Advanced Excel. Practical learning, expert mentorship, and structured internship access are built into the curriculum from the outset, ensuring that students develop the professional readiness that financial services employers demand. Graduates are positioned for roles in financial analysis, business intelligence, FinTech consultancy, and analytics-driven management across a range of industry sectors.",
         
          url: "/department/mba",
        }}
      />
    ),
  },
  {
    category: "Masters of Computer Applications in",
    title: "Full Stack Development with AI and ML",
    src: "/engineeringProgrammImages/mca.webp",
    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/mca.webp",
          subtitle1: "Overview of the Department ",
          subDescription1:
            "Canara Engineering College offers a two-year Master of Computer Applications (MCA) programme specialising in Full Stack Development with Artificial Intelligence and Machine Learning, delivered in academic collaboration with QSpiders Eduversity. The programme is structured to equip postgraduate students with advanced competencies in software development, AI-driven systems, cloud technologies, and modern application frameworks through a curriculum that integrates academic depth with industry-oriented training. Students benefit from hands-on project development, expert mentorship from senior industry professionals, and structured placement support embedded across all semesters of the programme. The MCA in Full Stack Development with AI & ML prepares graduates for roles in software engineering, artificial intelligence, and cloud computing within the evolving technology sector.",
         
          url: "/department/mca",
        }}
      />
    ),
  },
   {
    category: "Bachelor of Engineering in",
    title: "Artificial Intelligence and Data Science",
    src: "/engineeringProgrammImages/aidsLtest.webp",
    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/aidsLtest.webp",
          subtitle1: "Overview of the Department ",
          subDescription1:
            "The Department of Artificial Intelligence and Data Science (AIDS) stands out for its comprehensive and structured approach to skill enrichment and enhancement programs. It offers and executes a unique model ensuring students gain hands-on experience in data science, artificial intelligence, and data analytics, data engineering, and visualization techniques. The department also encourages students to pursue self-learning through various platforms enabling them to stay updated with evolving technologies and industry trends. By integrating industry internships, placement training, real-time data-driven projects, and research initiatives, the department ensures students are industry-ready, enhancing their analytical capabilities, employability, and competitiveness in the data-driven job market.",
         
          url: "/department/artificial-intelligence-data-science",
        }}
      />
    ),
  },
   {
    category: "Bachelor of Engineering in",
    title: "Artificial Intelligence and Machine Learning",
    src: "/engineeringProgrammImages/ai.webp",
    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/ai.webp",
          subtitle1: "Overview of the Department ",
          subDescription1:
            "The Department of Artificial Intelligence and Machine Learning (AIML), established in 2021, offers a Bachelor of Engineering (BE) program focused on cutting-edge technologies in AI and ML. With a vision to become a leading learning center in AI and ML education, the department aims to produce skilled engineers who can address industry and societal challenges. The curriculum emphasizes core areas like machine learning, data science, computer vision, and programming, supported by skill enhancement programs, research initiatives, and industry collaborations. Graduates are well-prepared for diverse career opportunities in sectors such as healthcare, finance, logistics, and more, driven by the rapid growth of the global AI market.",
          subtitle2: "Overview of programme",
          subDescription2:
            "The Department of Artificial Intelligence and Machine Learning (AIML) stands out for its comprehensive and structured approach to skill enrichment and. enhancement programs. It offers and execute a unique SEA like skill foundational, skill advancement, and skill utilization programs, ensuring students gain hands- on experience in AI, ML, IoT, and web & mobile application development. The department also encourage the students for self-learning through various platforms like NPTEL and Coursera, preparing students for real-world challenges. By integrating industry internships, placement training, and project work, the department ensures students are industry-ready, enhancing their employability and competitiveness in the job market.",
          subtitle3: "Course Outcomes",
          subDescription3:
            "The unique initiatives of the Department of Artificial Intelligence and Machine Learning (AIML), our students will be industry-ready equipped with strong technical expertise, practical problem-solving skills, and essential soft skills. The SEA efforts ensure graduates are competitive in the job market and capable of contributing effectively to the evolving demands of the AI and ML industry.",
          url: "/department/artificial-intelligence-machine-learning",
        }}
      />
    ),
  },
   {
    category: "Bachelor of Engineering in",
    title: "Computer Science and Business System",
    src: "/engineeringProgrammImages/csb.webp",

    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/csb.webp",
          subtitle1: "Overview of the Department",
          subDescription1:
            "The Department of Computer Science & Business System (CSBS) bridges technology and business, equipping students with industry-relevant technical and managerial skills. With a focus on innovation, entrepreneurship, and hands-on learning, the department nurtures future-ready professionals through industry interaction and research.",
          subtitle2: "Overview of programme",
          subDescription2:
            "The Bachelor of Engineering in CSBS integrates computing with business strategy, emphasizing emerging technologies, data analytics, and software development. The program prepares students for diverse roles as IT professionals, researchers, and entrepreneurs, addressing industry and societal challenges.",
          subtitle3: "Course Outcomes",
          subDescription3:
            "Graduates will apply AI, data analytics, and business intelligence to develop innovative IT solutions. With strong problem-solving, ethical values, and entrepreneurial skills, they will drive technological advancements and industry growth.",
          url: "/department/computer-science-business-system",
        }}
      />
    ),
  },
  {
    category: "Bachelor of Engineering in",
    title: "Computer Science and Design",
    src: "/engineeringProgrammImages/csd.webp",

    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/csd.webp",
          subtitle1: "Overview of the Department",
          subDescription1:
            "How is Computer Science and Design at Canara Engineering College different from other Computer Science programmes. Along with fundamentals of Computer Science, students are taught to incorporate design thinking. It is an interdisciplinary field that is an amalgamation of computer science and design principles that involves study of software development, human computer interaction and user experience design.",
          subtitle2: "Overview of programme",
          subDescription2:
            "CSD students learn to build functional software that is visually appealing and easy to use. They learn to apply design principles to software development with emphasis on usability and accessibility. Students learn about new media technologies and applications. ",
          subtitle3: "Course Outcomes",
          subDescription3:
            "Students of Computer Science and Design will be able to create innovative solutions in areas including animation, AI, Game Development and Virtual Reality. They will be able to apply core computer science concepts and the diverse programming paradigms in the real world. They will be able to apply system design principles to design plan and implement software projects. They will be equipped with design language and its elements and principles. They will be able to demonstrate design skills and knowledge through a design portfolio.",
          url: "/department/computer-science-design",
        }}
      />
    ),
  },
  {
    category: "Bachelor of Engineering in",
    title: "Computer Science and Engineering",
    src: "/engineeringProgrammImages/cs.webp", // use your real images or external links
    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/cs.webp",
          subtitle1: "Overview of the Department",
          subDescription1:
            "Established in 2001, the Computer Science and Engineering (CSE) Department offers the Bachelor of Engineering (BE) degree in Computer Science & Engineering (CS&E). The department is supported by a team of highly qualified, dedicated, and experienced faculty members who are deeply involved in teaching, research, and product development. The department actively promotes co-curricular/extracurricular activities and publishes technical magazine and newsletter, serving as a platform for students and faculty to showcase innovative ideas, programming expertise, and insights on cutting edge technologies in computing and technology.",
          subtitle2: "Overview of the programme",
          subDescription2:
            "The Computer Science and Engineering (CSE) programme is designed to equip students with a strong foundation in computing principles, software development, and system design. It integrates theoretical knowledge and practical skills, covering core areas such as programming, algorithms, computer architecture, data structures, artificial intelligence, cybersecurity, and cloud computing. Through a comprehensive curriculum, the program prepares students to tackle real-world technological challenges and innovate in the field of computing",
          // subtitle3: "Course Outcomes",
          // subDescription3:
          //   "The Computer Science and Engineering (CSE) course equips graduates with a solid foundation in computing principles, problem-solving abilities, and technical expertise. The course equips critical thinking, analytical skills, and teamwork, preparing graduates for diverse career opportunities in software development, research, and entrepreneurship. Through internships, projects, and industry collaborations, students acquire hands-on experience, making the students well-equipped to excel in top technology firms, startups, and higher education, while contributing to innovation and technological progress.",
          url: "/department/computer-science-engineering",
        }}
      />
    ),
  },
 
  {
    category: "Bachelor of Engineering in",
    title: "Electronics and Communication Engineering",
    src: "/engineeringProgrammImages/ec.webp",

    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/ec.webp",
          subtitle1: "Overview of the Department",
          subDescription1:
            "The Department was established in 2001 and has experienced faculties focused on innovation in cutting-edge electronics and communication technologies. We provide students with a strong foundation in both theoretical and practical aspects. Our faculties are dedicated to the overall development of students. ",
          subtitle2: "Overview of programme",
          subDescription2:
            "The program covers core areas like analog/digital circuits, signal processing, and communication systems. It also integrates advanced topics such as VLSI design, embedded systems, and Internet of Things (IoT) technologies. Students gain hands-on experience through labs and projects spanning circuit design, system integration, and IoT application development. The curriculum is further strengthened with outcome-based add-on courses to align with evolving industry requirements and emerging technological trends.",
          subtitle3: "Course Outcomes",
          subDescription3:
            "Graduates will be proficient in designing and implementing analog/digital circuits, communication systems, VLSI, embedded systems, and IoT applications, equipped with practical skills, modern tools, and effective communication to solve real- world engineering problems and adapt to evolving technologies.",
          url: "/department/electronics-communication-engineering",
        }}
      />
    ),
  },
  
  {
    category: "Bachelor of Engineering in",
    title: "Information Science and Engineering",
    src: "/engineeringProgrammImages/is.webp",

    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/is.webp",
          subtitle1: "Overview of the Department",
          subDescription1:
            "The Department of Information Science and Engineering at Canara Engineering College offers a comprehensive curriculum focused on computer science, software engineering, and information technology. It is equipped with modern labs and infrastructure to support hands-on learning and research. The department also emphasizes industry collaboration and provides opportunities for internships and career development.",
          subtitle2: "Overview of programme",
          subDescription2:
            "ISE offers state-of-the-art labs with the latest technologies to foster innovation and research. The department also emphasizes holistic development with a blend of technical skills, soft skills, and entrepreneurship.The Department of Information Science and Engineering focuses on the study and application of computer science, software development, and information technology to solve real-world problems.",
          subtitle3: "Course Outcomes",
          subDescription3:
            "Graduates from the Information Science and Engineering Department are expected to possess strong technical skills in software development, data analysis, and system design. They will be equipped to solve complex engineering problems, contribute to research, and thrive in dynamic industries through innovative solutions and critical thinking.",
          url: "/department/information-science-engineering",
        }}
      />
    ),
  },
 
  {
    category: "Bachelor of Engineering in",
    title: "Mechanical Engineering",
    src: "/engineeringProgrammImages/me.webp",

    content: (
      <CardContent
        description={{
          src: "/engineeringProgrammImages/me.webp",
          subtitle1: "Overview of the Department",
          subDescription1:
            "The Department of Mechanical Engineering is dedicated to shaping skilled engineers who blend innovation with practical knowledge. The department emphasizes core mechanical principles, design thinking, and sustainable engineering practices. Through modern laboratories, research initiatives, and industry collaborations, it prepares students to meet the challenges of evolving technologies and global engineering demands.",
          subtitle2: "Overview of programme",
          subDescription2:
            "The Bachelor of Engineering in Mechanical Engineering provides a strong foundation in mechanics, thermodynamics, manufacturing, and design. The program integrates theoretical understanding with real-world applications through projects, internships, and industry exposure. Students gain the technical expertise and analytical skills required to design, develop, and optimize mechanical systems across diverse sectors.",
          subtitle3: "Course Outcomes",
          subDescription3:
            "Graduates will be capable of applying mechanical engineering principles to solve complex engineering problems. They will demonstrate proficiency in modern tools, sustainable design, and innovative thinking. With strong ethical values, leadership qualities, and a commitment to lifelong learning, they will contribute effectively to industrial development and technological progress.",
          url: "/department/mechanical-engineering",
        }}
      />
    ),
  },
];

// Reusable card content (can be empty or a "+" button, etc.)
// CardContent.jsx or inside the same file
function CardContent({ description }: CardContentProps) {
  return (
    <div>
      <Image
        src={description.src}
        alt="Image"
        loading="lazy"
        width={1000}
        height={300}
        className=" object-cover lg:h-[700px] h-[400px] rounded-2xl mb-10"
      />
      <div className="p-4 space-y-4 text-justify text-sm text-[#1D1D1F] bg-white">
        <div>
          <h3 className="text-2xl mb-2 font-semibold">{description.subtitle1}</h3>
          <p className="text-lg text-textGray">{description.subDescription1}</p>
        </div>
        <div>
          <h3 className="text-2xl mb-2 font-semibold">{description.subtitle2}</h3>
          <p className="text-lg   text-textGray">{description.subDescription2}</p>
        </div>
        {description.subtitle3 && description.subDescription3 && (
          <div>
            <h3 className="text-2xl mb-2 font-semibold">{description.subtitle3}</h3>
            <p className="text-lg  text-textGray">{description.subDescription3}</p>
          </div>
        )}
        <Link href={description.url}>
          <button aria-label="Explore the Department" className="pt-4 inline-flex items-center text-lg cursor-pointer text-primary">
            Explore the Department
            <MdKeyboardArrowRight className="text-xl text-primary" />
          </button>
        </Link>
      </div>
    </div>
  );
}

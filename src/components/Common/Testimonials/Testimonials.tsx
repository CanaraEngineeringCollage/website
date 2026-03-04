"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AlumniModal from "./AlumniModal";

interface Testimonial {
  quote: string;
  author: string;
  course: string;
  year: string;
}

export interface FeaturedAlumni {
  name: string;
  batch: string;
  branch: string;
  employer: string;
  designation: string;
  testimonial: string;
  imageUrl: string;
}

interface TestimonialsProps {
  className?: string;
}

// Render for the Special Blue Cards
const renderFeaturedRow = (featured: FeaturedAlumni[], onReadMore: (item: FeaturedAlumni) => void) => (
  <div className="marquee-container mb-8">
    <div className="animate-marquee reverse flex">
      {[...featured, ...featured].map((item, index) => (
        <div
          key={index}
          className="mx-4 flex-shrink-0 w-[550px] md:w-[650px] bg-primary rounded-[28px] overflow-hidden flex items-center text-white shadow-lg p-6"
        >
          {/* Left Side: Fully Rounded Image */}
          <div className="w-1/4 flex justify-center items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/20">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Alumni";
                }}
              />
            </div>
          </div>

          {/* Right Side: Description and Details (All left-aligned) */}
          <div className="w-3/4 pl-6 flex flex-col justify-center relative">
            <div className="mb-3">
              <p className="text-sm md:text-base line-clamp-3">&ldquo;{item.testimonial}&rdquo;</p>
              {item.testimonial.length > 120 && (
                <button onClick={() => onReadMore(item)} className="text-xs md:text-sm font-semibold text-white/90 hover:text-white underline mt-1">
                  Read more
                </button>
              )}
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
              <p className="text-xs font-medium opacity-90">{item.designation}</p>
              <p className="text-[11px] opacity-75 mt-1">
                Batch: {item.batch} | Branch: {item.branch} | {item.employer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Render for the Standard White Cards
const renderTestimonials = (testimonials: Testimonial[], reverse = false) => (
  <div className="marquee-container">
    <div className={`animate-marquee ${reverse ? "reverse" : ""}`}>
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div
          className="p-[2px] rounded-[28px] mx-4 hover:!bg-primary group transition-colors duration-300"
          style={{
            background: "linear-gradient(90deg, #2884CA, #6DC0EB)",
          }}
          key={index}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.1 }}
            className="testimonial-card bg-white rounded-[26px] p-6 w-[350px] h-[220px] group-hover:bg-blue-100 transition-colors duration-300"
          >
            <div className="h-full max-w-2xl flex flex-col">
              <p className="text-lg text-textGray flex-grow mb-4 line-clamp-3">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-auto">
                <p className="font-semibold text-textGray">{testimonial.author}</p>
                <p className="text-sm text-textGray">
                  {testimonial.course} - {testimonial.year}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

export function Testimonials({ className }: TestimonialsProps) {
  const [selectedAlumni, setSelectedAlumni] = useState<FeaturedAlumni | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (alumni: FeaturedAlumni) => {
    setSelectedAlumni(alumni);
    setIsModalOpen(true);
  };

  const featuredAlumni: FeaturedAlumni[] = [
    {
      name: "Anirudh Shenoy",
      batch: "2017",
      branch: "ME",
      employer: "Automotive Axles Ltd, Mysore",
      designation: "Senior Manager - Manufacturing Engineering, NPD & Gear engineering",
      imageUrl: "https://apiserver.cec.edu.in/files/Anirudh%20Shenoy.jpeg",
      testimonial:
        "My journey at Canara Engineering College laid a strong foundation for my professional career in manufacturing engineering. The curriculum combined with hands-on learning through mini projects and final-year projects helped me develop strong analytical thinking and practical problem-solving skills.Being part of SAE BAJA was a turning point in my journey. Designing, manufacturing, and assembling an all-terrain vehicle under real-world constraints taught me teamwork, time management, cost control, and the importance of design validation. It gave me exposure to manufacturing processes, tolerance stack-ups, quality checks, and cross-functional coordination — experiences that directly relate to my current role in axle assembly manufacturing.The college not only shaped my technical capabilities but also instilled confidence, leadership, and a practical approach to engineering challenges, which continue to help me in handling production, CapEx projects, and remote manufacturing operations today.",
    },
    {
      name: "Anusha G Shetty",
      batch: "2024",
      branch: "ME",
      employer: "M.Tech in welding Engineering from NIT-Trichy",
      designation: "Student",
      imageUrl: "https://apiserver.cec.edu.in/files/Anusha%20photo.jpeg",
      testimonial:
        "The college fostered a student-friendly environment where everyone was encouraged to participate in techno-cultural fests, sports events, and academic activities. It provided equal opportunities to explore talents, gain knowledge, and build confidence, creating a vibrant campus life and a supportive learning atmosphere.",
    },
    {
      name: "Dwithi DP",
      batch: "2025",
      branch: "ME",
      employer: "Bosch Limited",
      designation: "Logistics Executive",
      imageUrl: "https://apiserver.cec.edu.in/files/Dwithi.jpeg",
      testimonial:
        "As a girl in Mechanical Engineering at Canara Engineering College, my four-year journey made me stronger and more confident. With many assignments, internals, and final exams, I developed technical knowledge, discipline, and self-belief that prepared me for my professional career.",
    },
    {
      name: "T Pranav Pai",
      batch: "2025",
      branch: "ME",
      employer: "Sobha Limited",
      designation: "Engineer - Design and Engineering.",
      imageUrl: "https://apiserver.cec.edu.in/files/Pranav%20Pai.jpeg",
      testimonial:
        "My time at Canara Engineering College helped me build strong technical knowledge and confidence. The support from teachers and the learning environment played an important role in my career growth. I am grateful and proud to be an alumnus of this institution.",
    },
{
    name: "Ramakanth Shenoy Mangalpady",
    batch: "2009",
    branch: "CSE",
    employer: "EGDK India Private Limited",
     imageUrl: "https://apiserver.cec.edu.in/files/Ramakanth%20Shenoy.jpg",
    designation: "Solution Architect.",
    testimonial: "I joined Canara in 1991, completing an 18-year academic journey ending with my 2009 graduation from Canara Engineering College. A 16-year IT veteran in Mangalore with experience at firms like Infosys and Niveus, I am currently a Solution Architect at EGDK India, a subsidiary of EG A/S Denmark."
  },
  {
    name: "Sudheendra Shenoy",
    batch: "2005",
    branch: "CSE",
    employer: "Accenture",
     imageUrl: "https://apiserver.cec.edu.in/files/Sudheendra%20Shenoy.jpg",
    designation: "Manager",
    testimonial: "My years at Canara engineering college were a blend of learning, growth and lifelong friendships. The experience helped me build discipline, confidence and a strong career direction. It laid the groundwork for the professional I am today."
  },
  {
    name: "Niranjana N K",
    batch: "2018",
    branch: "CSE",
    employer: "Persistent Systems",
     imageUrl: "https://apiserver.cec.edu.in/files/Niranjana%20N%20K.jpg",
    designation: "Project Lead",
    testimonial: "Canara Engineering College offered more than just a degree; it provided a nurturing environment for growth. Through its vibrant campus life and dedicated mentors, I developed the leadership and interpersonal skills that still drive my professional success today. An unforgettable journey!"
  },
  {
    name: "Neeraj Fernandes",
    batch: "2005",
    branch: "CSE",
     imageUrl: "https://apiserver.cec.edu.in/files/Neeraj%20Fernandes.jpg",
    employer: "Data Template Infotech Pvt Ltd",
    designation: "Manager QA",
    testimonial: "I am deeply honoured to congratulate Canara Engineering College on its 25 years of excellence. Being part of the very first batch, I feel proud to have witnessed the institution’s humble beginnings and steady growth. The dedication of the management and faculty played a vital role in shaping our knowledge, skills, and professional values. Their guidance and support laid a strong foundation for our careers and personal development. The college not only provided quality education but also instilled confidence, discipline, and lifelong learning in us. It is truly inspiring to see how the institution has grown into a respected center of academic excellence over the past 25 years. I will always cherish my association with Canara Engineering College and remain grateful for the opportunities it provided. I wish the college continued success and many more milestones in the years ahead."
  },
  {
    name: "Adithya Pai B",
    batch: "2023", 
    imageUrl: "https://apiserver.cec.edu.in/files/Adithya%20Pai%20B.JPG",
    branch: "CSE",
    employer: "NetApp",
    designation: "Member of Technical Staff – Software Engineer 2 (MTS Software Engineer 2)",
    testimonial: "Looking back, the four years I spent at CEC were truly transformative and played a major role in shaping who I am today. My transition from a student to a working professional was significant, and I am deeply grateful to the institution for the support and guidance I received throughout that journey. The faculty at CEC deserve special appreciation. Their in-depth knowledge, passion for teaching, and clarity in fundamentals helped me build a strong academic foundation. The quality and standards of the content delivered were excellent, and today, if my core fundamentals meet professional standards, I credit my lecturers for their dedication and expertise. Beyond academics, CEC felt like a close-knit family. Every student felt like a cousin, every lecturer like a mentor and well-wisher, and every event felt like a celebration at home. The leadership and technical opportunities I received, especially during my third year, significantly boosted my confidence and prepared me for my professional career. I will always remain truly thankful to CEC for the learning, experiences, and values that continue to guide me today."
  }
    
  ];

  const testimonials: Testimonial[] = [
    { quote: "CEC’s training and guidance helped me become an engineer at Intel.", author: "Sneha K", course: "CSE", year: "2013-17" },
    { quote: "CEC nurtured excellence; I topped my batch and got into NITK via GATE.", author: "Dr. Vighnesha Nayak", course: "ME", year: "2005-09" },
    {
      quote: "Supportive CSE faculty and serene campus helped shape my career at Nokia.",
      author: "Samhitha Padiyar",
      course: "CSE",
      year: "2010-14",
    },
    { quote: "CEC enhanced my confidence and soft skills to thrive at Infosys.", author: "Akshatha Shenoy", course: "ISE", year: "2012-16" },
    { quote: "Ranked 3rd in CS; CEC trained me to excel at White Clarke.", author: "Preethi Hebbar", course: "CSE", year: "2015-19" },
    { quote: "Faculty guidance and tech exposure landed me a role at VMware.", author: "Navami Kini", course: "ECE", year: "2013-17" },
    {
      quote: "CEC’s collaborative learning environment paved my way to Oracle Australia.",
      author: "Venkatesh P. Mundkur",
      course: "ECE",
      year: "2005-09",
    },
    { quote: "CEC helped me found LEVO and develop COVID-era safety solutions.", author: "Arther Vishruth D.B", course: "ECE", year: "2013-17" },
    { quote: "CEC’s faculty, notes, and labs fueled my growth at Infosys.", author: "Ganesh B. Bhat", course: "ECE", year: "2006-10" },
    { quote: "CEC and ISE faculty inspired my journey into Tech Mahindra.", author: "Ganesh Shenoy", course: "ISE", year: "2013-17" },
    {
      quote: "Faculty support and workshops helped me succeed at Siemens Healthineers.",
      author: "Floyd J. Sequeira",
      course: "EEE",
      year: "2013-17",
    },
    { quote: "Practical workshops and training at CEC placed me in Infinite Solutions.", author: "Harisha", course: "ME", year: "2013-17" },
    {
      quote: "Balanced curriculum and co-curricular support shaped my path to TE Connectivity.",
      author: "M Rajath Bhandarkar",
      course: "ME",
      year: "2014-18",
    },
    { quote: "Thanks to EEE faculty, I launched my career at L&T.", author: "Akshatha Mallya", course: "EEE", year: "2013-17" },
  ];

  const middleIndex = Math.ceil(testimonials.length / 2);
  const topTestimonials = testimonials.slice(0, middleIndex);
  const bottomTestimonials = testimonials.slice(middleIndex);

  return (
    <div className={cn("w-full mx-auto py-6 overflow-hidden ", className)}>
      <div className="text-center px-6 lg:px-0 mb-12">
        <h2 className="text-3xl md:text-[40px] lg2:text-[45.75px] xl:text-6xl font-bold text-[#1D1D1F] mb-4">Testimonials</h2>
        <p className="text-[14px] md:text-[23.25px] text-textGray max-w-3xl mx-auto">
          Insights & experiences from our graduates on how Canara Engineering College shaped & prepared them for their future
        </p>
      </div>

      <div className="flex flex-col gap-7">
        {/* New Featured Row (Blue Cards) */}
        <div>{renderFeaturedRow(featuredAlumni, handleReadMore)}</div>

        {/* Standard Rows */}
        <div className="hidden md:block">{renderTestimonials(topTestimonials)}</div>

        <div className="block">{renderTestimonials(bottomTestimonials, true)}</div>
      </div>

      <AlumniModal isOpen={isModalOpen} onClose={setIsModalOpen} alumniData={selectedAlumni} />
    </div>
  );
}

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
      name: "Ramakanth Shenoy Mangalpady",
      batch: "2009",
      branch: "CSE",
      employer: "EGDK India Private Limited",
      designation: "Solution Architect",
      imageUrl: "https://apiserver.cec.edu.in/files/test",
      testimonial:
        "I joined Canara in 1991, completing an 18-year academic journey ending with my 2009 graduation from Canara Engineering College. A 16-year IT veteran in Mangalore with experience at firms like Infosys and Niveus, I am currently a Solution Architect at EGDK India, a subsidiary of EG A/S Denmark.",
    },
    {
      name: "Sandeep Hegde",
      batch: "2011",
      branch: "ISE",
      employer: "Dotdash Meredith",
      designation: "VP of Engineering",
      imageUrl: "https://apiserver.cec.edu.in/files/test",
      testimonial:
        "The technical foundation and mentorship I received at Canara Engineering College were pivotal. It gave me the confidence to lead global engineering teams and navigate the evolving tech landscape in the US.",
    },
    {
      name: "Priya Kulkarni",
      batch: "2015",
      branch: "ECE",
      employer: "Qualcomm",
      designation: "Senior Hardware Engineer",
      imageUrl: "https://apiserver.cec.edu.in/files/test",
      testimonial:
        "The hands-on lab experience and the encouragement from the ECE faculty at CEC helped me specialize in semiconductor technology. It was the perfect launchpad for my career in hardware engineering.",
    },
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

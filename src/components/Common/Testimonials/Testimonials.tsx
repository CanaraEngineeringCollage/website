"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  course: string;
  year: string;
}

interface TestimonialsProps {
  className?: string;
}

const renderTestimonials = (testimonials: Testimonial[], reverse = false) => (
  <div className="marquee-container">
    <div className={`animate-marquee ${reverse ? "reverse" : ""}`}>
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div
          className="p-[2px] rounded-[28px] mx-4 hover:!bg-blue-600 group transition-colors duration-300"
          style={{
            background: "linear-gradient(90deg, #2884CA, #6DC0EB)",
          }}
          key={index}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.1 }}
            className="testimonial-card bg-white rounded-[26px] p-6 w-[350px] h-full group-hover:bg-blue-100 transition-colors duration-300"
          >
            <div className="h-full max-w-2xl flex flex-col">
              <p className="text-lg text-textGray flex-grow mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
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
  const testimonials: Testimonial[]= [
  {
    quote: "CEC’s training and guidance helped me become an engineer at Intel.",
    author: "Sneha K",
    course: "CSE",
    year: "2013-17",
  },
  {
    quote: "CEC nurtured excellence; I topped my batch and got into NITK via GATE.",
    author: "Dr. Vighnesha Nayak",
    course: "ME",
    year: "2005-09",
  },
  {
    quote: "Supportive CSE faculty and serene campus helped shape my career at Nokia.",
    author: "Samhitha Padiyar",
    course: "CSE",
    year: "2010-14",
  },
  {
    quote: "CEC enhanced my confidence and soft skills to thrive at Infosys.",
    author: "Akshatha Shenoy",
    course: "ISE",
    year: "2012-16",
  },
  {
    quote: "Ranked 3rd in CS; CEC trained me to excel at White Clarke.",
    author: "Preethi Hebbar",
    course: "CSE",
    year: "2015-19",
  },
  {
    quote: "Faculty guidance and tech exposure landed me a role at VMware.",
    author: "Navami Kini",
    course: "ECE",
    year: "2013-17",
  },
  {
    quote: "CEC’s collaborative learning environment paved my way to Oracle Australia.",
    author: "Venkatesh P. Mundkur",
    course: "ECE",
    year: "2005-09",
  },
  {
    quote: "CEC helped me found LEVO and develop COVID-era safety solutions.",
    author: "Arther Vishruth D.B",
    course: "ECE",
    year: "2013-17",
  },
  {
    quote: "CEC’s faculty, notes, and labs fueled my growth at Infosys.",
    author: "Ganesh B. Bhat",
    course: "ECE",
    year: "2006-10",
  },
  {
    quote: "CEC and ISE faculty inspired my journey into Tech Mahindra.",
    author: "Ganesh Shenoy",
    course: "ISE",
    year: "2013-17",
  },
  {
    quote: "Faculty support and workshops helped me succeed at Siemens Healthineers.",
    author: "Floyd J. Sequeira",
    course: "EEE",
    year: "2013-17",
  },
  {
    quote: "Practical workshops and training at CEC placed me in Infinite Solutions.",
    author: "Harisha",
    course: "ME",
    year: "2013-17",
  },
  {
    quote: "Balanced curriculum and co-curricular support shaped my path to TE Connectivity.",
    author: "M Rajath Bhandarkar",
    course: "ME",
    year: "2014-18",
  },
  {
    quote: "Thanks to EEE faculty, I launched my career at L&T.",
    author: "Akshatha Mallya",
    course: "EEE",
    year: "2013-17",
  }
];

  // Split testimonials into two halves

  const middleIndex = Math.ceil(testimonials.length / 2);
  const topTestimonials = testimonials.slice(0, middleIndex);
  const bottomTestimonials = testimonials.slice(middleIndex);
  return (
    <div className={cn("w-full  mx-auto px-4 overflow-hidden ", className)}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-[#1D1D1F]  mb-4">What Past Alumni Say</h2>
        <p className="text-[14px] md:text-xl text-textGray max-w-3xl mx-auto">
          Insights & experiences from our graduates on how Canara Engineering College shaped & prepared them for their future
        </p>
      </div>
      {/* Top Half */}
      <div className="flex flex-col gap-7">

      <div className="hidden md:block">
        {renderTestimonials(topTestimonials)} {/* Scrolls left */}
      </div>

      <div className="hidden md:block">
        {renderTestimonials(bottomTestimonials, true)} {/* Scrolls right */}
      </div>
      </div>
    </div>
  );
}

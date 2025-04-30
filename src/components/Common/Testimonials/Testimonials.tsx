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

const renderTestimonials = (testimonials: Testimonial[]) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-marquee mb-12 ">
    {testimonials.map((testimonial, index) => (
      <div
        className="p-[2px] rounded-[28px]"
        style={{
          background: "linear-gradient(90deg, #2884CA, #6DC0EB)",
        }}
        key={index}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-[26px] p-6 w-[350px] h-full"
        >
          <div className="h-full max-w-2xl flex flex-col">
            <p className="text-lg text-textGray  flex-grow mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
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
);
export function Testimonials({ className }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      quote: "Soft skills & technical training made me industry-ready.",
      author: "Raj Sharma",
      course: "CSE",
      year: "2018-19",
    },
    {
      quote: "CEC's faculty & industry-focused curriculum shaped my career.",
      author: "Rahul Sharma",
      course: "CSE",
      year: "2018-19",
    },
    {
        quote: "Innovation-driven approach helped me excel in my field.",
        author: "Anonymous",
        course: "CSE",
        year: "2019-20",
    },
    {
        quote: "Great learning & placement support helped me land my dream job.",
        author: "Priya Menon",
        course: "ISE",
        year: "2016-17",
    },
    {
      quote: "Workshops & projects gave me valuable industry insights.",
      author: "Sneha Reddy",
      course: "CSE",
      year: "2019-20",
    },
    {
      quote: "Hands-on labs & research focus prepared me for real-world challenges.",
      author: "Arjun Desai",
      course: "CSAD",
      year: "2020-21",
    },
    {
      quote: "Soft skills & technical training made me industry-ready.",
      author: "Raj Sharma",
      course: "CSE",
      year: "2018-19",
    },
    {
        quote: "Workshops & projects gave me valuable industry insights.",
        author: "Sneha Reddy",
        course: "CSE",
        year: "2019-20",
    },
    {
        quote: "Innovation-driven approach helped me excel in my field.",
        author: "Anonymous",
        course: "CSE",
        year: "2019-20",
    },
    {
        quote: "Hands-on labs & research focus prepared me for real-world challenges.",
        author: "Arjun Desai",
        course: "CSAD",
        year: "2020-21",
    },
    {
      quote: "CEC's faculty & industry-focused curriculum shaped my career.",
      author: "Rahul Sharma",
      course: "CSE",
      year: "2018-19",
    },
    {
      quote: "Great learning & placement support helped me land my dream job.",
      author: "Priya Menon",
      course: "ISE",
      year: "2016-17",
    },
  ];
  // Split testimonials into two halves
  
  const middleIndex = Math.ceil(testimonials.length / 2);
  const topTestimonials = testimonials.slice(0, middleIndex);
  const bottomTestimonials = testimonials.slice(middleIndex);
  return (
    <div className={cn("w-full  mx-auto px-4 overflow-hidden py-44", className)}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-black  mb-4">What Past Alumni Say</h2>
        <p className="text-[14px] md:text-xl text-textGray max-w-3xl mx-auto">
          Insights & experiences from our graduates on how Canara Engineering College shaped & prepared them for their future
        </p>
      </div>
      {/* Top Half */}
      {renderTestimonials(topTestimonials)}

      {/* Bottom Half */}
      {renderTestimonials(bottomTestimonials)}
    </div>
  );
}

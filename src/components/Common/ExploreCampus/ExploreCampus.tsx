"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

// Define the shape of an event
interface CampusEvent {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

// Define the props for the component
interface ExploreCampusProps {
  campusEvents: CampusEvent[];
}

const ExploreCampus: React.FC<ExploreCampusProps> = ({ campusEvents }) => {
  // Hardcoded categories
  const categories: string[] = ["All", "Sports", "Fest", "Academics", "Cultural Events", "Technical Events", "Exams", "CSR", "Alumni"];
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Filter based on active category
  const filteredEvents = activeCategory === "All" ? campusEvents : campusEvents.filter((event) => event.category === activeCategory);

  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto text-black py-10">
      <div className="flex justify-between items-center pb-5 lg:pb-10 flex-wrap gap-2">
        <button className="border text-lg font-bold px-3 py-1 rounded-4xl cursor-pointer" onClick={() => setActiveCategory("All")}>
          Clear All Filters
        </button>
        {categories.map((category, index) => (
          <h3
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer ${category === activeCategory ? "text-black font-bold" : "text-textGray"} text-[18px]`}
            key={index}
          >
            {category}
          </h3>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        {filteredEvents.map((event) => (
          <div key={event.id} className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-md">
            <div className="flex-shrink-0 w-full md:w-[40%]">
              <Image src={event.image} alt={event.title} width={1000} height={1000} className="rounded-l-2xl object-cover w-full h-[40vh] lg:h-[50vh]" />
            </div>
            <div className="flex flex-col justify-center w-full md:w-1/2 p-6 lg:p-10">
              <p className="text-[17px] text-textGray uppercase font-bold mb-4">{event.date}</p>
              <h2 className="text-[31px] leading-[1.1] font-bold text-[#1D1D1F] mb-2">{event.title}</h2>
              <p className="text-textGray leading-[1.3] text-[21px] mb-4">{event.description}</p>
              <a href="#" className="text-[#2997FF] inline-flex text-[21px] items-center font-medium text-sm">
                Read More <MdKeyboardArrowRight className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#eff1f6] text-black px-5 py-2 cursor-pointer rounded-3xl">Explore More Campus Stories</button>
      </div>
    </section>
  );
};

export default ExploreCampus;

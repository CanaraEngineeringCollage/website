"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";

// 🔹 Dummy event data
const dummyEvents = [
  {
    id: 1,
    title: "Data Dive: The SQL Bootcamp Series",
    date: "03-09-2025",
    image: "",
    description:
      "A hands-on SQL bootcamp for 5th-semester CSE students, focusing on relational database design, key concepts, and SQL queries. The sessions covered database creation, ER modeling, and advanced SQL queries.",
  },
  {
    id: 2,
    title: "TechFest 2025: CodeStorm Challenge",
    date: "15-10-2025",
    image: "",
    description:
      "A national-level hackathon featuring 200+ participants. Students developed AI-driven applications and IoT prototypes. Organized by the Department of Computer Science and Engineering.",
  },
  {
    id: 3,
    title: "AI Seminar: Trends in Machine Learning",
    date: "20-11-2025",
    image: "",
    description:
      "A guest lecture on modern machine learning frameworks and data ethics. Conducted by Dr. Rakshith M D with 150 attendees across multiple departments.",
  },
];
type Event = {
  id: number;
  title: string;
  date: string; // Format: "DD-MM-YYYY"
  image: string;
  description: string;
};
// 🔹 Simple modal animation presets
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2 } },
};

// 🔹 Main Component
const ExploreCampus = ({events}: {events: Event}) => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (event: any) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <section className=" py-10 px-4 text-[#1D1D1F]">
      

      {/* Event Cards */}
      {/* <div className="space-y-6">
        {dummyEvents.map((event) => (
          <div
            key={event.id}
            className="border border-sky-200 shadow-md rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => openModal(event)}
          >
            <div className="bg-slate-800 text-white text-center py-2 font-semibold text-sm">
              {event.title} ({event.date})
            </div>
            <div className="bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">
              {event.description.slice(0, 150)}...
              <div className="text-center mt-3 font-semibold text-yellow-600 hover:text-yellow-700 cursor-pointer">
                Read More &gt;&gt;
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* 🔹 Modal */}
      {/* <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl mx-4 rounded-2xl overflow-hidden relative shadow-2xl"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-full"
                aria-label="Close modal"
              >
                <IconX size={18} />
              </button>

              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                width={800}
                height={500}
                className="object-cover w-full h-[250px]"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
                <p className="text-gray-500 mb-4">{selectedEvent.date}</p>
                <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default ExploreCampus;

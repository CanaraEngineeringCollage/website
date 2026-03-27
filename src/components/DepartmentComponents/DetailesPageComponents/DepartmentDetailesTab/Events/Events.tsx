"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { MdKeyboardArrowRight } from "react-icons/md";

// 🔹 Modal animations
const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 80 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 50,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

// 🔹 Types
type Event = {
  id: number;
  title: string;
  date: string;
  image?: any;
  hasImage?: boolean; // ✅ FIX 1: Added hasImage flag
  description: string;
};

const ExploreCampus = ({ departmentName, events }: { departmentName: string; events: Event[] }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10); // start with 10
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL; // ✅ Added baseUrl

  // ✅ REMOVED bufferToBase64 function

  const openModal = (event: Event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "auto";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedEvent) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent]);

  useOutsideClick(modalRef, () => {
    if (selectedEvent) closeModal();
  });

  return (
    <section className="py-10 lg:py-0 px-4 text-[#1D1D1F]">
      {/* 🔹 Event Cards */}
      {/* <h2 className="text-2xl font-semibold  mb-4 text-[#1D1D1F]">Events</h2> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {events.map((event, index) => {
          // ✅ FIX 2: Used hasImage and the backend URL
          const src = event.hasImage ? `${baseUrl}/events/${event.id}/image` : (event.image || "/fallback-image.png");

          return (
            <div
              key={event.id}
              className="max-w-sm bg-white min-h-[450px] cursor-pointer shadow-sm  rounded-xl lg:rounded-3xl overflow-hidden"
              onClick={() => openModal(event)}
            >
             <div className="h-60 overflow-hidden">
    <img 
      src={src} 
      alt={event.title} 
      className="w-full h-full object-cover object-[center_25%]" 
    />
  </div>

              <div className="p-8 text-center bg-white">
                <div className="flex justify-center items-center space-x-3">
                  {/* <p className="text-textGray text-[17px] mb-1">
                    {event.title}
                  </p> */}

                  {/* <div className="h-5 w-[1px] bg-textGray"></div> */}

                  <p className="text-textGray text-[17px] mb-1">
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <h2 className="text-[27px] font-semibold font-sans text-[#1D1D1F] mb-2 line-clamp-2">{event.title}</h2>

                <button className="text-primary inline-flex text-[17px] items-center hover:underline font-medium">
                  Read More <MdKeyboardArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔹 Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-[999999] hide-scrollbar h-full overflow-auto"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div className="fixed inset-0" onClick={closeModal} />

            <motion.div
              ref={modalRef}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative z-50 max-w-3xl mx-auto my-10 bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-full z-10"
                aria-label="Close modal"
              >
                <IconX size={18} />
              </button>

              {/* Image */}
              {(selectedEvent.hasImage || selectedEvent.image) && (
                <img
                  // ✅ FIX 3: Used hasImage and the backend URL for the modal
                  src={selectedEvent.hasImage ? `${baseUrl}/events/${selectedEvent.id}/image` : (selectedEvent.image || "/fallback-image.png")}
                  alt={selectedEvent.title}
  
                  className="w-full h-auto object-cover bg-black rounded-t-3xl"
                />
              )}

              {/* Text Content */}
              <div className="p-6 sm:p-10 h-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#1D1D1F]">{selectedEvent.title}</h2>
                <p className="text-textGray mb-4">{new Date(selectedEvent.date).toLocaleDateString("en-GB")}</p>
                <p className="text-textGray leading-relaxed text-justify">{selectedEvent.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExploreCampus;
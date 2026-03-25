"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AlumniEvent } from "@/utils/alumniPortalData/alumniEventsUtils";

// ------------------------------------------------------------------
// 🔹 Animation Variants
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// 🔹 Types & Helper Functions
// ------------------------------------------------------------------

interface AlumniEventsProps {
  events: AlumniEvent[];
  loading: boolean;
}

// ------------------------------------------------------------------
// 🔹 Main Component
// ------------------------------------------------------------------

export default function AlumniEvents({ events, loading }: AlumniEventsProps) {
  const [selectedEvent, setSelectedEvent] = useState<AlumniEvent | null>(null);

  // Note: Using a simple ref mechanism for outside click instead of a custom hook import
  // to ensure this component is copy-pasteable.
  const modalContentRef = useRef<HTMLDivElement>(null);

  // 2. Modal Handlers
  const openModal = (event: AlumniEvent) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "auto";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedEvent) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent]);

  if (loading) {
    return <div className="py-20 text-center text-gray-500">Loading events...</div>;
  }

  if (events.length === 0) {
    return null;
  }

  return (
    <section className=" px-4 pb-3 md:pb-10 text-[#1D1D1F]">
      {/* Header Section (Optional, matching typical layout) */}

      {/* 🔹 Event Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {events.map((event) => (
          <motion.div
            key={event.id}
            layoutId={`card-${event.id}`}
            className="max-w-sm w-full mx-auto bg-white min-h-[300px] cursor-pointer rounded-xl lg:rounded-3xl overflow-hidden shadow-sm  transition-shadow duration-300"
            onClick={() => openModal(event)}
          >
            {/* Image/Video Area */}
            <div className="h-60 overflow-hidden relative bg-gray-100">
              {event.isVideo ? (
                <video src={event.imageSrc} muted loop autoPlay playsInline className="w-full h-full object-cover" />
              ) : (
                <Image
                  src={event.imageSrc || "/placeholder.jpg"}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover object-[center_25%]"
                />
              )}
            </div>

            {/* Content Area */}
            <div className="p-8 text-center bg-white">
              <div className="flex justify-center items-center space-x-3 mb-1">
                <p className="text-gray-500 text-[17px]">
                  {event.date
                    ? new Date(event.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : ""}
                </p>
              </div>

              <h3 className="text-[27px] font-semibold font-sans text-[#1D1D1F] mb-2 line-clamp-2 leading-tight">{event.title}</h3>

              <button className="text-primary  inline-flex text-[17px] items-center hover:underline font-medium mt-2">
                Read More <MdKeyboardArrowRight className="ml-1 text-xl" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-[999999] h-full overflow-y-auto overflow-x-hidden flex items-center justify-center p-4 sm:p-6"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div variants={backdropVariants} className="fixed inset-0 bg-black/60" onClick={closeModal} />

            {/* Modal Content */}
            <motion.div
              ref={modalContentRef}
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
              className="relative z-50 w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl my-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 transition-colors"
                aria-label="Close modal"
              >
                <IconX size={20} />
              </button>

              {/* Modal Media */}
              <div className="w-full h-[300px] sm:h-[400px] bg-black relative">
                {selectedEvent.isVideo ? (
                  <video src={selectedEvent.imageSrc} controls playsInline className="w-full h-full object-contain" />
                ) : (
                  <div className="relative w-full h-full">
                    <Image src={selectedEvent.imageSrc || "/placeholder.jpg"} alt={selectedEvent.title} fill className="object-cover" />
                  </div>
                )}
              </div>

              {/* Modal Text */}
              <div className="p-6 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#1D1D1F]">{selectedEvent.title}</h2>

                {selectedEvent.date && (
                  <p className="text-gray-500 mb-6 font-medium">
                    {new Date(selectedEvent.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                )}

                <div className="text-gray-600 leading-relaxed text-justify whitespace-pre-line text-lg">{selectedEvent.description}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

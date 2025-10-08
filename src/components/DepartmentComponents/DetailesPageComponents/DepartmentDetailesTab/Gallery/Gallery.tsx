"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // ← Left arrow added

interface GalleryItem {
  image: string;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2 } },
};

const Gallery = ({ data }: { data: GalleryItem[] }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % data.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + data.length) % data.length);
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 text-[#1D1D1F]">
      {/* 🔹 Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => openModal(index)}
          >
            <Image
              src={item.image}
              alt={"gallery"}
              width={1000}
              height={700}
              className="object-cover w-full h-[250px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* 🔹 Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
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
              className="bg-white max-w-5xl mx-4 rounded-2xl overflow-hidden relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-full z-10"
                aria-label="Close modal"
              >
                <IconX size={18} />
              </button>

              {/* Left Arrow Button */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-800 text-white p-3 rounded-r-full z-10"
                aria-label="Previous image"
              >
                <FaArrowLeft size={20} />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-800 text-white p-3 rounded-l-full z-10"
                aria-label="Next image"
              >
                <FaArrowRight size={20} />
              </button>

              {/* Modal Image */}
              <Image
                src={data[selectedIndex].image}
                alt={"gallery"}
                width={1000}
                height={1000}
                className="object-cover w-full h-[80vh] md:h-[90vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[80vh] select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { MdKeyboardArrowRight } from "react-icons/md";

export interface GalleryItem {
  image: string;
  title?: string;
  description?: string;
}

// 🔹 Animations matched to your LegacyExcellance component
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.3, ease: "easeIn" } },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", type: "spring", damping: 20, stiffness: 100 },
  },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25, ease: "easeIn" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1, ease: "easeOut" } },
};

const Gallery = ({ data }: { data: GalleryItem[] }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % data.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + data.length) % data.length);
    }
  };

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, data.length]);

  return (
    <section className="max-w-7xl mx-auto  px-4 text-[#1D1D1F]">
      {/* 🔹 Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-sm cursor-pointer hover:shadow-lg transition group bg-white"
            onClick={() => openModal(index)}
          >
            <div className="h-[250px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title || "gallery"}
                width={600}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
            {/* Backdrop */}
            <motion.div variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" onClick={closeModal} />

            {/* Modal Card */}
            <motion.div
              variants={cardVariants}
              className="max-w-4xl mx-auto bg-white h-fit z-[60] my-10 pb-10 rounded-3xl font-sans relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                variants={contentVariants}
                className="absolute top-6 me-4 lg:me-8 z-50 h-8 w-8 right-0 cursor-pointer ml-auto bg-[#808080] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconX className="h-5 w-5 text-white" />
              </motion.button>

              {/* Image Content */}
              <motion.div variants={contentVariants}>
                <Image
                  src={data[selectedIndex].image}
                  alt={data[selectedIndex].title || "Gallery Image"}
                  width={1200}
                  height={800}
                  // 🔹 w-full h-auto allows the image to take its complete natural size
                  className="w-full h-auto object-cover rounded-t-3xl min-h-[300px]"
                  priority
                />

                {/* Title & Description */}
                {(data[selectedIndex].title || data[selectedIndex].description) && (
                  <div className="p-4 lg:px-20 space-y-6 text-left text-sm text-[#1D1D1F] bg-white mt-5">
                    <div>
                      {data[selectedIndex].title && (
                        <h2 className="text-[27px] font-semibold  leading-[1.1] lg:max-w-[100%] ">{data[selectedIndex].title}</h2>
                      )}
                      {data[selectedIndex].description && <p className="text-xl text-gray-500 leading-relaxed">{data[selectedIndex].description}</p>}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* 🔹 "Next Up" Section (Exact match) */}
              <motion.div variants={contentVariants} className="p-4 lg:px-20 ">
                <h1
                  className={`${(data[selectedIndex].title || data[selectedIndex].description) && "border-t-2"}  pt-4 text-[10px] md:text-[12px] text-textGray border-t-gray-200`}
                >
                  Next Up
                </h1>
                <h1
                  onClick={nextImage}
                  className="text-primary inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]  hover:opacity-80 transition-opacity"
                >
                  <span className="line-clamp-1">{data[(selectedIndex + 1) % data.length]?.title || "Next Image"}</span>
                  <MdKeyboardArrowRight className="ml-1 mt-0.5 text-[20px] md:text-[25px]" />
                </h1>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { MdKeyboardArrowRight } from "react-icons/md";

// Animations
const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 1, backdropFilter: "blur(8px)", transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2, ease: "easeIn" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.3, ease: "easeIn" } },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", type: "spring", damping: 20, stiffness: 100 } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25, ease: "easeIn" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1, ease: "easeOut" } },
};

const CifGallery = ({ data }: { data: any }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
  }, [selectedIndex, data?.length]);

  return (
    <div className="lg:pe-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md bg-gray-100 group cursor-pointer"
            onClick={() => {
              if (item.image) openModal(index);
            }}
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-4 text-center">
                <span className="text-sm">Please add image path to cifPortalData.json</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && data && (
          <motion.div className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
            {/* Backdrop */}
            <motion.div variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" onClick={closeModal} />

            {/* Modal Card */}
            <motion.div
              variants={cardVariants}
              className="max-w-4xl mx-auto bg-white h-fit z-[60] my-10  rounded-3xl font-sans relative shadow-2xl overflow-hidden"
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
                  className="w-full h-auto object-cover rounded-t-3xl min-h-[300px]"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CifGallery;

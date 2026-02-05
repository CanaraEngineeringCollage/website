"use client";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

// Animation variants (reused from ContactFormModal)
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

interface GlimpsesModalProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  className?: string;
  maxWidth?: string;
}

const GlimpsesModal: React.FC<GlimpsesModalProps> = ({ isOpen, onClose, className = "", maxWidth = "max-w-7xl" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flipbookLink, setFlipbookLink] = useState("");

  useEffect(() => {
    const fetchFlipbookLink = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ppt`, {
          cache: "no-store",
        });
        const data = await res.json();
        setFlipbookLink(data.link);
      } catch (err) {
        console.error("Error loading PPT link:", err);
      }
    };

    if (isOpen && !flipbookLink) {
      fetchFlipbookLink();
    }
  }, [isOpen, flipbookLink]);

  useOutsideClick(containerRef, () => {
    if (isOpen) onClose(false);
  });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) onClose(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 h-screen z-[9999999999999999] overflow-auto" initial="hidden" animate="visible" exit="exit">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            onClick={() => onClose(false)}
          />

          {/* Modal Content */}
          <motion.div
            variants={cardVariants}
            ref={containerRef}
            className={`${maxWidth} mx-auto bg-white h-fit z-[60] my-6 sm:my-10 pb-8 sm:pb-10 rounded-3xl font-sans relative shadow-2xl ${className}`}
          >
            {/* Close Button */}
            <motion.button
              variants={contentVariants}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 h-8 w-8 cursor-pointer bg-[#808080] rounded-full flex items-center justify-center z-50"
              onClick={() => onClose(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconX className="h-6 w-6 text-white" />
            </motion.button>

            {/* Content */}
            <motion.div variants={contentVariants} className="p-4 sm:px-8 py-12 sm:py-12">
              <h1 className="text-center text-[30px] sm:text-[40px] text-[#1D1D1F] font-bold mb-8">Glimpses of CEC</h1>

              {flipbookLink ? (
                <iframe src={flipbookLink} className="w-full h-[60vh] md:h-[80vh] rounded-xl border-none shadow-sm" allowFullScreen></iframe>
              ) : (
                <div className="flex justify-center items-center h-[60vh]">
                  <p className="text-center text-lg text-gray-500">Loading content...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlimpsesModal;

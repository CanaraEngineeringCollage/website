"use client";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconX, IconExternalLink } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

// Animation variants
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

interface PDFModalProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  pdfUrl: string;
  title?: string;
  className?: string;
  maxWidth?: string;
}

const PDFModal: React.FC<PDFModalProps> = ({ isOpen, onClose, pdfUrl, title = "Document Viewer", className = "", maxWidth = "max-w-7xl" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    if (isOpen) onClose(false);
  });

  React.useEffect(() => {
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
            <motion.div variants={contentVariants} className="p-4 sm:px-8 pb-12 pt-16  sm:pb-12 md:pt-24">
              {/* <h1 className="text-center text-[24px] sm:text-[32px] text-[#1D1D1F] font-bold mb-8 px-8">{title}</h1> */}

              {pdfUrl ? (
                <>
                  <iframe src={pdfUrl} className="w-full h-[60vh] md:h-[100vh] rounded-xl border-none shadow-sm hidden md:block" allowFullScreen title={title}></iframe>
                  <div className="flex flex-col items-center justify-center h-[60vh] md:hidden">
                    <p className="text-center text-lg text-gray-700 mb-6 px-4">
                      {title}
                    </p>
                    <a 
                      href={pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#2884CA] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#1f6a9e] transition-colors shadow-md"
                    >
                      <IconExternalLink className="w-5 h-5 text-white" />
                      View Document
                    </a>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center h-[60vh]">
                  <p className="text-center text-lg text-gray-500">Loading document...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PDFModal;

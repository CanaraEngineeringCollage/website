"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import React from "react";
import { FeaturedAlumni } from "./Testimonials";

interface AlumniModalProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  alumniData: FeaturedAlumni | null;
}

export default function AlumniModal({ isOpen, onClose, alumniData }: AlumniModalProps) {
  if (!alumniData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="relative z-[9999999999999]" open={isOpen} onClose={onClose}>
          {/* Overlay */}
          <div className="fixed inset-0 z-40">
            <motion.div
              className="absolute inset-0 backdrop-blur-sm bg-black/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </div>

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-full max-w-4xl bg-[#F5F5F7] rounded-xl shadow-lg overflow-auto max-h-[90vh] p-6"
            >
              <Dialog.Panel>
                {/* Close Button */}
                <div className="sticky top-0 z-50 flex justify-end py-2">
                  <button
                    aria-label="Close Modal"
                    onClick={() => onClose(false)}
                    className="rounded-full bg-[#b1b1b1] flex items-center justify-center w-8 h-8 hover:scale-110 transition"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Profile Info */}
                <div className="py-6 lg:px-10">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                      <div className="rounded-full overflow-hidden w-40 h-40 md:w-56 md:h-56 bg-gray-200 border-4 border-primary">
                        <img
                          src={alumniData.imageUrl}
                          alt={alumniData.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Alumni";
                          }}
                        />
                      </div>
                    </div>

                    <div className="space-y-4 text-[#1D1D1F] flex-1">
                      <div>
                        <h2 className="text-3xl font-bold">{alumniData.name}</h2>
                        <p className="text-xl text-primary font-medium">{alumniData.designation}</p>
                        <p className="text-lg opacity-80">{alumniData.employer}</p>
                      </div>

                      <div className="flex gap-4 text-sm font-medium  p-3 rounded-lg w-fit">
                        <div>
                          <span className="text-textGray block text-xs">Batch</span>
                          {alumniData.batch}
                        </div>
                        <div className="w-px bg-gray-300"></div>
                        <div>
                          <span className="text-textGray block text-xs">Branch</span>
                          {alumniData.branch}
                        </div>
                      </div>

                      <div className="mt-6">
                        
                        <p className="text-lg leading-relaxed  text-textGray">&ldquo;{alumniData.testimonial}&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";

import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";

interface Qualification {
  degree: string;
  passingYear: number;
  college: string;
  specializedArea: string;
  degreeName: string;
}

interface CouncilMember {
  id?: number;
  name: string;
  image: string;
  designation?: string;
  category?: string;
  department?: string;
  joiningDate?: string;
  experience?: string;
  employmentType?: string;
  qualifications?: Qualification[];
  roles?: { title: string; organization: string }[];
  desiganation?: string;
}

interface FacultyModalProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  facultyData: CouncilMember | null;
}

export default function FacultyModal({ isOpen, onClose, facultyData }: FacultyModalProps) {
  if (!facultyData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
          <div className="fixed inset-0 z-40">
            <motion.div className="absolute inset-0 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          </div>

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-full max-w-7xl bg-[#F5F5F7] rounded-xl shadow-lg overflow-auto h-[90vh] p-6 lg:py-32 lg:pl-32"
            >
              <Dialog.Panel>
                <button aria-label="Close Modal" onClick={() => onClose(false)} className="absolute cursor-pointer top-4 right-4">
                  <X className="w-6 h-6 text-black " />
                </button>

                <div className=" gap-6 flex-col lg:flex-row flex items-center">
                  <div className="flex-shrink-0">
                    <div className="rounded-lg overflow-hidden w-60 h-80 bg-sky-400">
                      <Image width={100} height={100} src={facultyData.image} alt="Faculty profile" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className=" space-y-2 justify-center text-xl text-black flex items-center">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex gap-2">
                        <span className="font-bold">Name:</span>
                        <span>{facultyData.name}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold ">Designation:</span>
                        <span>{facultyData.desiganation}</span>
                      </div>
                      {facultyData.department && (
                        <div className="flex gap-2">
                          <span className="font-bold ">Department:</span>
                          <span>{facultyData.department}</span>
                        </div>
                      )}
                      {facultyData.joiningDate && (
                        <div className="flex gap-2">
                          <span className="font-bold ">Joining Date:</span>
                          <span>{facultyData.joiningDate}</span>
                        </div>
                      )}
                      {facultyData.experience && (
                        <div className="flex gap-2">
                          <span className="font-bold ">Experience:</span>
                          <span>{facultyData.experience}</span>
                        </div>
                      )}
                      {facultyData.employmentType && (
                        <div className="flex gap-2">
                          <span className="font-bold">Employment Type:</span>
                          <span>{facultyData.employmentType}</span>
                        </div>
                      )}
                      {facultyData.address && (
                        <div className="flex gap-2">
                          <span className="font-bold">Address:</span>
                          <span>{facultyData.address}</span>
                        </div>
                      )}
                      {facultyData.contact && (
                        <div className="flex gap-2">
                          <span className="font-bold ">Contact:</span>
                          <span>{facultyData.contact}</span>
                        </div>
                      )}
                      {facultyData.email && (
                        <div className="flex gap-2">
                          <span className="font-bold">Email:</span>
                          <span>{facultyData.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {facultyData?.qualifications && (
                  <div className="mt-10 lg:mt-24 text-black">
                    <h3 className="text-xl font-semibold mb-4 text-center">Qualifications</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full table-auto border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead>
                          <tr className="bg-gray-50 text-gray-700">
                            <th className="px-6 py-3 text-left font-semibold">Degree</th>
                            <th className="px-6 py-3 text-left font-semibold">Name Of Degree</th>
                            <th className="px-6 py-3 text-left font-semibold">Passing Year</th>
                            <th className="px-6 py-3 text-left font-semibold">College/University</th>
                            <th className="px-6 py-3 text-left font-semibold">Area of Specialization</th>
                          </tr>
                        </thead>
                        <tbody className=" text-gray-700">
                          {facultyData?.qualifications?.map((qual, index) => (
                            <tr key={index} className="border-t border-gray-200 last:rounded-b-xl">
                              <td className="px-6 py-4">{qual.degree}</td>
                              <td className="px-6 py-4">{qual.degreeName}</td>
                              <td className="px-6 py-4">{qual.passingYear}</td>
                              <td className="px-6 py-4">{qual.college}</td>
                              <td className="px-6 py-4">{qual.specializedArea}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

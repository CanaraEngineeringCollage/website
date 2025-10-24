"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";

interface Qualification {
  degree: string;
  passingYear: string | number;
  college: string;
  specialization: string;
  degreeName?: string;
}

interface DescriptionItem {
  id: string;
  heading: string;
  descriptions: string[];
}

interface CouncilMember {
  id?: number | string;
  name: string;
  image?: string;
  avatar?: { type: string; data: number[] };
  designation?: string;
  category?: string;
  department?: string;
  joiningDate?: string;
  experience?: string;
  employmentType?: string;
  qualifications?: Qualification[];
  achievements?: DescriptionItem[];
  bookChapters?: DescriptionItem[];
  certifications?: DescriptionItem[];
  address?: string;
  contact?: string;
  email?: string;
}

interface FacultyModalProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  facultyData: CouncilMember | null;
}

const bufferToBase64 = (buffer: { type: string; data: number[] }) => {
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return `data:image/jpeg;base64,${base64}`;
};

export default function FacultyModal({ isOpen, onClose, facultyData }: FacultyModalProps) {
  if (!facultyData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="relative z-50" open={isOpen} onClose={onClose}>
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
              className="relative w-full max-w-7xl bg-[#F5F5F7] rounded-xl shadow-lg overflow-auto h-[90vh] p-6"
            >
              <Dialog.Panel>
                {/* Close Button */}
                <div className="sticky top-0 z-50 flex justify-end py-2 ">
                  <button
                    aria-label="Close Modal"
                    onClick={() => onClose(false)}
                    className="rounded-full bg-[#b1b1b1] flex items-center justify-center w-8 h-8 hover:scale-110 transition"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Profile Info */}
                <div className="py-10 lg:px-20">
                  <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <div className="rounded-lg overflow-hidden w-60 h-80 bg-sky-400">
                        <Image
                          width={100}
                          height={100}
                          src={facultyData.avatar ? bufferToBase64(facultyData.avatar) : "/default-avatar.png"}
                          alt="Faculty profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-xl text-[#1D1D1F]">
                      <div className="grid grid-cols-1 gap-3">
                        <Info label="Name" value={facultyData.name} />
                        <Info label="Designation" value={facultyData.designation} />
                        <Info label="Department" value={facultyData.department} />
                        <Info
                          label="Joining Date"
                          value={facultyData.joiningDate ? new Date(facultyData.joiningDate).toLocaleDateString("en-GB") : "N/A"}
                        />
                        <Info label="Experience" value={facultyData.experience} />
                        <Info label="Employment Type" value={facultyData.employmentType} />
                        <Info label="Address" value={facultyData.address} />
                        <Info label="Contact" value={facultyData.contact} />
                        <Info label="Email" value={facultyData.email} />
                      </div>
                    </div>
                  </div>

                  {/* Qualifications Table */}
                  {facultyData?.qualifications?.length ? (
                    <Section title="Qualifications">
                      <div className="overflow-x-auto border border-[#D9D9D9] rounded">
                        <table className="w-full table-auto border border-[#D9D9D9] border-collapse overflow-hidden shadow-sm">
                          <thead className="border-b bg-gray-50">
                            <tr className="text-gray-700">
                              <th className="px-6 py-3 border-r border-[#D9D9D9] text-left font-semibold">Degree</th>
                              <th className="px-6 py-3 border-r border-[#D9D9D9] text-left font-semibold">Name of Degree</th>
                              <th className="px-6 py-3 border-r border-[#D9D9D9] text-left font-semibold">Passing Year</th>
                              <th className="px-6 py-3 border-r border-[#D9D9D9] text-left font-semibold">College/University</th>
                              <th className="px-6 py-3 text-left font-semibold">Area of Specialization</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            {facultyData.qualifications
                              .slice() // create a copy so original data is not mutated
                              .sort((a, b) => {
                                // Extract year as number
                                const getYear = (val: string) => {
                                  const match = val.match(/\d{4}/); // match 4-digit year
                                  return match ? parseInt(match[0], 10) : 0;
                                };
                                return getYear(b.passingYear) - getYear(a.passingYear); // descending
                              })
                              .map((qual, index) => (
                                <tr key={index}>
                                  <td className="px-6 py-3 border-r border-[#D9D9D9]">{qual.degree}</td>
                                  <td className="px-6 py-3 border-r border-[#D9D9D9]">{qual.nameOfDigree}</td>
                                  <td className="px-6 py-3 border-r border-[#D9D9D9]">{qual.passingYear}</td>
                                  <td className="px-6 py-3 border-r border-[#D9D9D9]">
                                    {qual.college.toLowerCase().includes("vtu") ? qual.college.replace(/vtu/i, "VTU") : qual.college}
                                  </td>

                                  <td className="px-6 py-3">{qual.specialization}</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </Section>
                  ) : null}

                  {/* Dynamic Sections: Achievements, Book Chapters, Certifications */}
                  {facultyData.achievements?.length ? <DynamicListSection title="Achievements" items={facultyData.achievements} /> : null}

                  {facultyData.bookChapters?.length ? <DynamicListSection title="Career Advancement" items={facultyData.bookChapters} /> : null}

                  {facultyData.certifications?.length ? <DynamicListSection title="Publications" items={facultyData.certifications} /> : null}
                </div>
              </Dialog.Panel>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

/* ----------- Helper Components ----------- */

const Info = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <div className="flex gap-2">
      <span className="font-bold">{label}:</span>
      <span>{value}</span>
    </div>
  ) : null;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-12 text-[#1D1D1F]">
    <h3 className="text-[32px] font-semibold mb-4 text-center">{title}</h3>
    {children}
  </div>
);

const DynamicListSection = ({ title, items }: { title: string; items: DescriptionItem[] }) => (
  <Section title={title}>
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.id} className="border border-[#D9D9D9] rounded-lg p-5  shadow-sm">
          <h4 className="text-2xl font-semibold mb-3">{item.heading}</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {item.descriptions.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

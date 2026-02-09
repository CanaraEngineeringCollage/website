"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

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

export interface CouncilMember {
  id?: number | string;
  name: string;
  image?: string;
  avatar?: { type: string; data: number[] };
  images?: string;
  emergencycontact?: string;
  timings?: string;
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

export const departmentFullForms: Record<string, string> = {
  // ----- ENGINEERING -----
  cse: "Computer Science and Engineering",
  ise: "Information Science and Engineering",
  it: "Information Technology",
  ece: "Electronics and Communication Engineering",
  eee: "Electrical and Electronics Engineering",
  ee: "Electrical Engineering",
  mech: "Mechanical Engineering",
  me: "Mechanical Engineering",
  civil: "Civil Engineering",
  ce: "Civil Engineering",
  ae: "Aeronautical Engineering",
  areo: "Aeronautical Engineering",
  aiml: "Artificial Intelligence and Machine Learning",
  ai: "Artificial Intelligence",
  ds: "Data Science",
  csd: "Computer Science and Design",
  csb: "Computer Science and Business Systems",
  bt: "Biotechnology",
  chem: "Chemical Engineering",
  che: "Chemical Engineering",
  env: "Environmental Engineering",
  mt: "Mechatronics Engineering",
  iem: "Industrial Engineering and Management",
  im: "Industrial Management",
  te: "Telecommunication Engineering",
  pt: "Production Engineering",
  pe: "Petroleum Engineering",
  min: "Mining Engineering",
  auto: "Automobile Engineering",
  ins: "Instrumentation Engineering",
  ft: "Food Technology",
  text: "Textile Engineering",
  marine: "Marine Engineering",
  agri: "Agricultural Engineering",

  // ----- SCIENCE -----
  phy: "Physics",
  chem_sci: "Chemistry",
  bio: "Biology",
  micro: "Microbiology",
  zoo: "Zoology",
  bot: "Botany",
  stat: "Statistics",
  geo: "Geology",
  cs: "Computer Science",
  math: "Mathematics",
  bsc: "Bachelor of Science",
  msc: "Master of Science",

  // ----- COMMERCE & BUSINESS -----
  bba: "Bachelor of Business Administration",
  mba: "Master of Business Administration",
  bcom: "Bachelor of Commerce",
  mcom: "Master of Commerce",
  ca: "Chartered Accountant",
  cma: "Cost and Management Accounting",
  acca: "Association of Chartered Certified Accountants",
  bms: "Bachelor of Management Studies",
  btm: "Bachelor of Tourism Management",

  // ----- ARTS, HUMANITIES & SOCIAL SCIENCE -----
  ba: "Bachelor of Arts",
  ma: "Master of Arts",
  eng: "English",
  hist: "History",
  psy: "Psychology",
  soc: "Sociology",
  polsci: "Political Science",
  phil: "Philosophy",
  jour: "Journalism",
  comm: "Mass Communication",
  eco: "Economics",
  lang: "Languages",
  hum: "Humanities",

  // ----- LAW -----
  llb: "Bachelor of Law",
  llm: "Master of Law",
  ballb: "BA + LLB Integrated Law",
  bballb: "BBA + LLB Integrated Law",

  // ----- MEDICAL & HEALTH -----
  mbbs: "Bachelor of Medicine and Bachelor of Surgery",
  bds: "Bachelor of Dental Surgery",
  bpharm: "Bachelor of Pharmacy",
  pharmd: "Doctor of Pharmacy",
  nur: "Nursing",
  bpt: "Bachelor of Physiotherapy",
  mpt: "Master of Physiotherapy",
  opt: "Optometry",
  vet: "Veterinary Science",
  bhms: "Homeopathic Medicine",
  bams: "Ayurvedic Medicine",
  bsc_nurs: "B.Sc Nursing",

  // ----- PROFESSIONAL -----
  arch: "Architecture",
  barch: "Bachelor of Architecture",
  fashion: "Fashion Design",
  hm: "Hotel Management",
  bfa: "Bachelor of Fine Arts",
  mfa: "Master of Fine Arts",
  deisgn: "Design",
  media: "Media Studies",
};

const getFullForm = (abbr: string) => {
  if (!abbr) return "";
  const key = abbr.trim().toLowerCase();
  return departmentFullForms[key] || abbr;
};

export const bufferToBase64 = (buffer: { type: string; data: number[] }) => {
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return `data:image/jpeg;base64,${base64}`;
};

export default function FacultyModal({ isOpen, onClose, facultyData }: FacultyModalProps) {
  if (!facultyData) return null;

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
                  <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
                    <div className="flex-shrink-0 mx-auto lg:mx-0">
                      <div className="rounded-lg overflow-hidden w-60 h-80 bg-sky-400">
                        <Image
                          width={100}
                          height={100}
                          src={facultyData.avatar ? bufferToBase64(facultyData.avatar) : facultyData.images}
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
                        {facultyData.joiningDate && (
                          <Info
                            label="Joining Date"
                            value={facultyData.joiningDate ? new Date(facultyData.joiningDate).toLocaleDateString("en-GB") : "N/A"}
                          />
                        )}
                        {facultyData.timings && <Info label="Timings" value={facultyData.timings} />}
                        {facultyData.emergencycontact && <Info label="Emergency Contact" value={facultyData.emergencycontact} />}
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

                                  <td className="px-6 py-3">{getFullForm(qual.specialization)}</td>
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
    <div className="flex flex-col md:flex-row gap-2">
      <span className="font-bold text-xl">{label}:</span>
      <span className="text-lg lg:text-xl">{value}</span>
    </div>
  ) : null;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-12 text-[#1D1D1F]">
    <h3 className="text-[32px] font-semibold mb-4 md:text-center">{title}</h3>
    {children}
  </div>
);

const DynamicListSection = ({ title, items }: { title: string; items: DescriptionItem[] }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activeItem = items[activeIndex];

  return (
    <Section title={title}>
      {/* 🔘 HEADING BUTTONS */}
      <div className="flex flex-col md:flex-row flex-wrap gap-3 mb-4 md:mb-5">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`w-fit px-8 py-2 rounded-md text-sm font-medium border transition
              ${activeIndex === index ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300 hover:bg-[#F8FBFD]"}`}
          >
            {item.heading}
          </button>
        ))}
      </div>

      {/* 📄 CONTENT AREA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg pt-4 lg:pt-0 lg:py-6"
        >
          {/* ✅ ACTIVE HEADING INSIDE CONTENT */}
          <h4 className="text-2xl font-semibold text-[#1D1D1F] mb-4">{activeItem.heading}</h4>

          <ul className=" space-y-3 text-gray-700 text-base">
            {activeItem.descriptions.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

const cleanText = (input: string = "") => {
  if (!input) return "";

  let text = input.trim();

  // Fix missing spaces after punctuation
  text = text.replace(/([.,!?])(?=[^\s])/g, "$1 ");

  // Remove multiple spaces
  text = text.replace(/\s+/g, " ");

  // If all caps → convert to normal sentence case
  if (text === text.toUpperCase()) {
    text = text.toLowerCase();
  }

  // Convert to sentence case (first letter uppercase, rest lowercase)
  text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  return text;
};

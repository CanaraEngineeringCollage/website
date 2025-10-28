"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const generateAdmissionYears = (startYear = 2024, endYear = 2024) => {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(`${year}-${year + 1}`);
  }
  return years;
};

const semesters = [
  "I Semester",
  "II Semester",
  "III Semester",
  "IV Semester",
  "V Semester",
  "VI Semester",
  "VII Semester",
  "VIII Semester",
];

// ✅ Static course data for multiple years



const CourseOutCome = ({staticData,deptName}:{staticData:any;deptName:string }) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSem, setSelectedSem] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  const [hasFetched, setHasFetched] = useState(false);


const admissionYears = generateAdmissionYears(2014,2024);


  const handleFetch = () => {
    const yearCourses = staticData[selectedYear] || [];
    const semesterCourses = yearCourses.filter(
      (course) => `${course.semester} Semester` === selectedSem || course.semester === selectedSem.replace(" Semester", "")
    );
    setFilteredCourses(semesterCourses);
    setHasFetched(true);
  };

  return (
    <div className="lg:px-24 text-textGray text-[17px]">
      <h2 className="text-xl mb-5 font-bold">Course Outcomes (CO)</h2>

      {/* Dropdown filters */}
      <div className="flex flex-col gap-5 md:flex-row md:gap-0 md:justify-between">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border outline-none p-2 rounded pe-20"
        >
          <option value="">Select Admission Year</option>
          {admissionYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={selectedSem}
          onChange={(e) => setSelectedSem(e.target.value)}
          className="border outline-none p-2 rounded pe-20"
        >
          <option value="">Select Semester</option>
          {semesters.map((sem, index) => (
            <option key={index} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </div>

      {/* Fetch button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleFetch}
          className="flex bg-[#2884CA] px-5 py-2 rounded-full text-white justify-center"
        >
          Fetch Details
        </button>
      </div>

      {/* Table Display */}
      {filteredCourses.length > 0 ? (
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Sl. No.</th>
                <th className="px-4 py-2 border">Subject</th>
                <th className="px-4 py-2 border">Semester</th>
                <th className="px-4 py-2 border">View</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{course.subject}</td>
                  <td className="px-4 py-2 border">{course.semester}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      View &gt;&gt;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ):
      hasFetched  ? (
    <div className="mt-5 ">
      <p className="">No Data Found </p>
    </div>
      ): null
      }

      {/* Simple Custom Modal */}
     {selectedCourse && (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-[9999] hide-scrollbar overflow-auto"
      variants={{
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
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setSelectedCourse(null)}
    >
      {/* Backdrop */}
      <motion.div className="fixed inset-0" />

      {/* Modal Content */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 max-w-4xl mx-auto my-10 bg-white rounded-3xl overflow-hidden shadow-2xl"
        variants={{
          hidden: { opacity: 0, scale: 0.9, y: 80 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.35, ease: 'easeOut' },
          },
          exit: {
            opacity: 0,
            scale: 0.95,
            y: 50,
            transition: { duration: 0.25, ease: 'easeIn' },
          },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedCourse(null)}
          className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-full z-10"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="bg-sky-700 text-white text-center py-4 px-6 font-semibold text-xl">
          {selectedCourse.subject}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 max-h-[70vh] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Course Outcomes
          </h3>

          <table className="w-full border border-gray-300 text-sm text-left rounded overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Sl. No</th>
                <th className="px-4 py-2 border">CO No</th>
                <th className="px-4 py-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              {selectedCourse.co.map((item: any, idx: number) => (
                <tr key={idx} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2 border">{idx + 1}</td>
                  <td className="px-4 py-2 border">{item.no}</td>
                  <td className="px-4 py-2 border">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)}

    </div>
  );
};

export default CourseOutCome;

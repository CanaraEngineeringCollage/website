import React from "react";

const admissionYears = [
  "2014-2015",
  "2015-2016",
  "2016-2017",
  "2017-2018",
  "2018-2019",
  "2019-2020",
  "2020-2021",
  "2021-2022",
  "2022-2023",
  "2023-2024",
  "2024-2025",
  "2025-2026",
];

const semesters = ["I Semester", "II Semester", "III Semester", "IV Semester", "V Semester", "VI Semester", "VII Semester", "VIII Semester"];

const CourseOutCome = () => {
  return (
    <div className="lg2:px-24 mx-5 text-[#86868B] text-[17px]">
      <h2 className="text-xl mb-5 font-extrabold">Course Outcomes(CO)</h2>
      <div className="flex  justify-between">
        <select className="border outline-none p-2 rounded pe-20">
          <option value="">Select Admission Year</option>
          {admissionYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select className="border outline-none p-2 rounded pe-20">
          <option value="">Select Semester</option>
          {semesters.map((sem, index) => (
            <option key={index} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mt-10">
        <button className="flex bg-[#2884CA] px-5 py-2 rounded-full text-white justify-center">Fetch Detailes</button>
      </div>
    </div>
  );
};

export default CourseOutCome;

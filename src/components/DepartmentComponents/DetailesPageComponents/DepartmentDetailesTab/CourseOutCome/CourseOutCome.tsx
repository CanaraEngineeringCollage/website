import React from "react";



const generateAdmissionYears = (startYear = 2014) => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = startYear; year <= currentYear + 1; year++) {
    years.push(`${year}-${year + 1}`);
  }

  return years;
};

const semesters = ["I Semester", "II Semester", "III Semester", "IV Semester", "V Semester", "VI Semester", "VII Semester", "VIII Semester"];
 const admissionYears = generateAdmissionYears(2014); // dynamic years
const CourseOutCome = () => {
  return (
    <div className="lg2:px-24  text-[#86868B] text-[17px]">
      <h2 className="text-xl mb-5 font-bold">Course Outcomes(CO)</h2>
      <div className="flex flex-col  gap-5 md:flex-row md:gap-0  md:justify-between">
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
        <button  className="flex bg-[#2884CA] px-5 py-2 rounded-full text-white justify-center">Fetch Details</button>
      </div>
    </div>
  );
};

export default CourseOutCome;

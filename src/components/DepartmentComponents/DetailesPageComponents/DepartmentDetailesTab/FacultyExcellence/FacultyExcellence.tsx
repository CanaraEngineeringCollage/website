import React from "react";

const FacultyExcellence = () => {
  const tableData = [
    { name: "Naveen A Kalal", domain: "Composite material", university: "VTU, Belagavi" },
    { name: "Narayana Swamy R", domain: "Surface Engineering", university: "MIT, Manipal" },
    { name: "Sandeep S", domain: "Composite material", university: "VTU, Belagavi" },
    { name: "Gowrish Nagvekar", domain: "Sustainable materials", university: "MIT, Manipal" },
  ];

  return (
    <div className="text-textGray text-[17px]">
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Faculty Excellence and Continuous Development</h3>
        <p className="mb-6">
          Our faculty members are dedicated to professional growth and academic excellence, fostering a culture of continuous improvement.
        </p>

        <h4 className="text-lg font-semibold mb-3">Key Highlights (2021-2025):</h4>
        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li>
            <strong>Research and Publication:</strong> Faculty actively contribute to their fields through published research, in peer reviewed
            International Journals and Conferences.
          </li>
          <li>
            <strong>Skill Enhancement:</strong> There is a strong commitment to professional development, enriching the knowledge and skills to convey
            to the student community through participation in workshops and Faculty Development Programs (FDPs) at various National and International
            levels.
          </li>
          <li>
            <strong>Professional Certification:</strong> Faculty members continue to enhance their expertise through specialized certifications,
            maintaining a steady presence in advanced professional training.
          </li>
        </ul>
      </div>
      <div className="mb-10">
        <img src="https://apiserver.cec.edu.in/files/meFacultyAchivements21-25" alt="" />
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Faculty Pursuing Doctoral Studies</h3>
        <div className="overflow-x-auto">
          <div className="rounded overflow-hidden border border-gray-200 w-full mb-6">
            <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
              <tbody className="text-[#2884CA]">
                <tr>
                  <td className="py-3 bg-[#F3F8FC] md:px-4 px-1 border-b text-start font-semibold w-1/3">Faculty Name</td>
                  <td className="py-3 bg-[#F3F8FC] md:px-4 px-1 border-b text-start font-semibold w-1/3">Research Domain</td>
                  <td className="py-3 bg-[#F3F8FC] md:px-4 px-1 border-b text-start font-semibold w-1/3">University</td>
                </tr>
                {tableData.map((item, index) => (
                  <tr key={index} className="text-textGray">
                    <td className="py-3 md:px-4 px-1 border-b w-1/3">{item.name}</td>
                    <td className="py-3 md:px-4 px-1 border-b w-1/3">{item.domain}</td>
                    <td className="py-3 md:px-4 px-1 border-b w-1/3">{item.university}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyExcellence;

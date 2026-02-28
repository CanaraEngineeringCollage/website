import React from "react";

const DepartmentalStructure = () => {
  const dacData = [
    { composition: "Head of the Department", role: "Chairman" },
    { composition: "Expert from Academia", role: "Member" },
    { composition: "Expert from Industry", role: "Member" },
    { composition: "Accreditation Coordinator", role: "Member Secretary" },
    { composition: "Senior Faculty Member – 1", role: "Member" },
    { composition: "Senior Faculty Member – 2", role: "Member" },
    { composition: "Faculty Member", role: "Member" },
  ];

  const dqacData = [
    { composition: "Head of the Department", role: "Chairman" },
    { composition: "Accreditation (NBA/NAAC)/Program Coordinator", role: "Member Secretary" },
    { composition: "Assistant Professor – III", role: "Member" },
    { composition: "Assistant Professor – III", role: "Member" },
    { composition: "Assistant Professor – II", role: "Member" },
    { composition: "Assistant Professor – I", role: "Member" },
    { composition: "Dean Accreditation/Dean Academics/Dean Student Welfare/Dean Facility and Infrastructures/Principal", role: "Spl. Invitee(s)" },
  ];

  return (
    <div className="text-textGray text-[17px]">
        <div className="mb-10">
        <img src="https://apiserver.cec.edu.in/files/meDepartmentalStructureImage" alt="" />
      </div>
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">DAC: Departmental Advisory Committee</h3>
        <div className="overflow-x-auto">
          <div className="rounded overflow-hidden border border-gray-200 w-full">
            <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
              <tbody className="text-[#2884CA]">
                <tr>
                  <td colSpan={2} className="py-3 bg-[#F3F8FC] md:px-4 px-1 border-b text-start font-semibold">
                    Composition
                  </td>
                </tr>
                {dacData.map((item, index) => (
                  <tr key={index} className="text-textGray">
                    <td className="py-3 md:px-4 px-1 border-b w-2/3">{item.composition}</td>
                    <td className="py-3 md:px-4 px-1 border-b w-1/3">{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">DQAC: Departmental Quality Assurance Committee</h3>
        <div className="overflow-x-auto">
          <div className="rounded overflow-hidden border border-gray-200 w-full">
            <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
              <tbody className="text-[#2884CA]">
                <tr>
                  <td colSpan={2} className="py-3 bg-[#F3F8FC] md:px-4 px-1 border-b text-start font-semibold">
                    Composition
                  </td>
                </tr>
                {dqacData.map((item, index) => (
                  <tr key={index} className="text-textGray">
                    <td className="py-3 md:px-4 px-1 border-b w-2/3">{item.composition}</td>
                    <td className="py-3 md:px-4 px-1 border-b w-1/3">{item.role}</td>
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

export default DepartmentalStructure;

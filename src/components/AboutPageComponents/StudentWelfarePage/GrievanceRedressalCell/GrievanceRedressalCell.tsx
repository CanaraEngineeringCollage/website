"use client";
import React, { useState } from "react";
import grievanceRedressalCell from "../../../../utils/grievanceData/grievanceData.json";

const GrievanceRedressalCell = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="py-10 text-black lg2:px-24 mx-5 overflow-hidden">
      <div className="">
        <h1 className="text-[30px] lg:text-[54px] font-bold pb-1 lg:pb-10 text-black">Mandatory Disclosure</h1>
        <div className="grid grid-cols-1 gap-3 md:gap-32 md:grid-cols-12 mt-10">
          <div className="col-span-4">
            {grievanceRedressalCell?.map((section, index) => (
              <h1
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border-b-2 text-[20px] pb-3 mb-3 border-border cursor-pointer ${
                  selectedIndex === index ? "text-[#2884CA] font-bold" : "text-textGray font-[500]"
                }`}
              >
                {section.title}
              </h1>
            ))}
          </div>
          <div className="col-span-8">
            {grievanceRedressalCell[selectedIndex]?.data && (
              <>
                <div>
                  <h2 className="text-[20px] font-extrabold text-textGray">{grievanceRedressalCell[selectedIndex].data[0]?.title}</h2>
                  <p className="text-[17px] text-textGray lg:pe-16  mt-2">{grievanceRedressalCell[selectedIndex].data[1]?.description}</p>
                </div>

                <ul className="list-disc pl-5 space-y-1 mt-7">
                  {grievanceRedressalCell[selectedIndex].data[2]?.points?.map((point, i) => (
                    <li key={i} className="text-[17px] text-textGray hover:text-blue-600 cursor-pointer">
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrievanceRedressalCell;

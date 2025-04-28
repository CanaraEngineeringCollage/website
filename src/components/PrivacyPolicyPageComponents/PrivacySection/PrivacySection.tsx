"use client";
import React, { useState } from "react";
import privacyData from "../../../utils/privacyData/privacyData.json";

const PrivacySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="py-10 xl:py-36 text-black lg2:px-24 mx-5 overflow-hidden">
      <div className="">
        <h1 className="text-[30px] lg:text-[54px] font-bold pb-1 lg:pb-10 text-black">Privacy Policy</h1>
        <div className="grid grid-cols-1 gap-3 md:gap-32 md:grid-cols-12 mt-10">
          <div className="col-span-4">
            {privacyData?.map((section, index) => (
              <h1
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border-b-2 text-[20px] pb-5 mb-5 border-border cursor-pointer ${
                  selectedIndex === index ? "text-[#2884CA] font-bold" : "text-textGray font-[500]"
                }`}
              >
                {section.title}
              </h1>
            ))}
          </div>
          <div className="col-span-8">
            {privacyData[selectedIndex]?.data && (
              <>
                <div>
                  {privacyData[selectedIndex].data.map((item, idx) => (
                    <p key={idx} className="text-[17px] text-textGray pb-5 lg:pe-16 mt-2">
                      {item}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;

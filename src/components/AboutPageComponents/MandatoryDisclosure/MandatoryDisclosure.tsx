"use client";
import React, { useState } from "react";
import { HiLink } from "react-icons/hi";
import disclosureData from "../../../utils/mandatoryDisclosure/mandatoryDisclosure.json";

const MandatoryDisclosure = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="py-10 xl:py-36 text-black">
      <div className="lg2:mx-24 mx-5">
        <h1 className="text-[30px] lg:text-[54px]  font-bold pb-1 lg:pb-10 text-black">Mandatory Disclosure</h1>
        <div className="grid grid-cols-1 gap-3 md:gap-32 md:grid-cols-12 mt-10">
          <div className="col-span-4">
            {disclosureData?.map((section, index) => (
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
            {disclosureData[selectedIndex]?.data?.map((item, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-[20px] font-extrabold text-textGray mb-2">{item.title}</h2>
                <ul className="space-y-1">
                  {item?.links?.map((link, i) => (
                    <li key={i} className="flex items-center gap-2 text-[17px] text-textGray hover:text-blue-600 cursor-pointer">
                      <HiLink className="text-textGray" />
                      <a 
                      aria-label="Mandatory Disclosure Link"
                       href={link.href} className="hover:underline">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MandatoryDisclosure;

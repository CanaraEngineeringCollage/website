"use client";
import React, { useState } from "react";
import alumniData from "../../../utils/alumniPortalData/alumniPortalData.json";
import Image from "next/image";
import Link from "next/link";
import { HiLink } from "react-icons/hi";
import About from "./TabComponents/About/About";
import Messages from "./TabComponents/Messages/Messages";
import Advisory from "./TabComponents/Advisory/Advisory";

const AlumniPortal = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="py-10 xl:py-20 text-[#1D1D1F] overflow-hidden">
      <div className="lg2:mx-24 mx-5">
        <h1 className="text-3xl text-[#1D1D1F] md:text-[40px] lg2:text-5xl xl:text-6xl font-bold pb-1 lg:pb-10">About the Alumni Assocation</h1>
        <div className="grid grid-cols-1  md:grid-cols-12 mt-10">
          <div className="col-span-3 sticky top-32 self-start hidden md:block">
            {alumniData?.map((section, index) => (
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
          <div className="col-span-1"></div>
          <div className="col-span-8">
            {selectedIndex === 0 && <About data={alumniData[0].data} />}
            {selectedIndex === 1 && <Messages data={alumniData[1].data} />}
            {selectedIndex === 2 && <Messages data={alumniData[2].data} />}
            {selectedIndex === 3 && <Advisory datam={alumniData[3].data} />}
            {selectedIndex === 4 && <Advisory datam={alumniData[4].data} />}
            {selectedIndex === 5 && (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">{alumniData[5].title}</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead>
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                        <th className="py-3 md:px-4 px-1 border-b">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alumniData[5].data?.map((item, idx) => (
                        <tr key={idx} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b">{idx + 1}</td>
                          <td className="py-3 md:px-4 px-1 border-b">
                            {item.links?.[0]?.href && (
                              <a href={item.links[0].href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                View Acheivement
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniPortal;

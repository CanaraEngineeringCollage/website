"use client";
import React, { useState } from "react";
import cifData from "../../../utils/cifPortalData/cifPortalData.json";
import CustomSelect from "@/components/Common/CustomSelect/CustomSelect";
import About from "../../AluminiComponents/AlumniPortal/TabComponents/About/About";
import Messages from "../../AluminiComponents/AlumniPortal/TabComponents/Messages/Messages";
import Advisory from "../../AluminiComponents/AlumniPortal/TabComponents/Advisory/Advisory";
import CifTable from "./TabComponents/CifTable";
import CifGallery from "./TabComponents/CifGallery";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const CifPortal = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const cifTitles = cifData?.map((section) => section.title) || [];

  return (
    <section className="py-10 xl:py-20 text-[#1D1D1F] overflow-hidden">
      <div className="lg2:mx-24 mx-5">
        <h1 className="text-3xl text-[#1D1D1F] md:text-[40px] lg2:text-5xl xl:text-6xl font-bold pb-0 md:pb-10">Canara Innovation Foundation</h1>
        <div className="grid grid-cols-1  md:grid-cols-12 mt-8 md:mt-10">
          <div className="col-span-3 sticky  self-start block">
            {/* Mobile Dropdown */}
            <div className="block md:hidden ">
              <CustomSelect
                value={cifData[selectedIndex]?.title || ""}
                onChange={(e: any) => {
                  const newIndex = cifData.findIndex((item) => item.title === e.target.value);
                  if (newIndex !== -1) setSelectedIndex(newIndex);
                }}
                options={cifTitles}
              />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block">
              {cifData?.map((section, index) => (
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
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-8 max-h-[70vh] lg:max-h-[100vh] overflow-y-auto scrollable mt-10 md:mt-1">
            {selectedIndex === 0 && <About data={cifData[0].data} />}
            {selectedIndex === 1 && <Messages data={cifData[1].data} />}
            {selectedIndex === 2 && <About data={cifData[2].data} />}
            {selectedIndex === 3 && <CifTable title={cifData[3].title} data={cifData[3].data} />}
            {selectedIndex === 4 && <CifTable title={cifData[4].title} data={cifData[4].data} />}
            {selectedIndex === 5 && <About data={cifData[5].data} />}
            {selectedIndex === 6 && <CifGallery data={cifData[6].data} />}
            {selectedIndex === 7 && <CifGallery data={cifData[7].data} />}
            {selectedIndex === 8 && <About data={cifData[8].data} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CifPortal;

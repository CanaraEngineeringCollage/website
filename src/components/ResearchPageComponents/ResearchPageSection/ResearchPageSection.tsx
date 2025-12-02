"use client";
import React, { useState } from "react";
import Home from "../TabComponents/Home/Home";
import ResearchCenter from "../TabComponents/ResearchCenter/ResearchCenter";
import Publications from "../TabComponents/Publications/Publications";
import Grants from "../TabComponents/Grants/Grants";
import Activities from "../TabComponents/Activities/Activities";
import Patents from "../TabComponents/Patents/Patents";


const IframLinks = ({title,link}:{title?:string;link?:string}) => {return(
  <div className="mb-10">
    <h2 className="text-[24px] text-[#1d1d1f] font-bold  mb-2">{title}</h2>
    <ul className="space-y-1">
      <li className="flex items-center gap-2 text-[17px] text-textGray hover:text-blue-600 cursor-pointer">
        <iframe src={link} className="w-[100%] md:h-[70vh] h-[50vh]" />
      </li>
    </ul>
  </div>)
};


import CustomSelect from "@/components/Common/CustomSelect/CustomSelect";

const ResearchPageSection = () => {
const titles = ["Home", "Research Center", "Publications", "Grants","IPR/Patents", "R&D Cell", "IPR Cell", "IRINS Profile"];

  const [selectedIndex, setSelectedIndex] = useState(0); // use index instead of title string

  return (
    <>
      <section className="py-10 xl:py-20 text-[#1D1D1F] overflow-hidden">
        <div className="lg2:mx-24 mx-5">
          <h1 className="text-[30px] lg:text-[54px]  font-bold pb-1 lg:pb-10 text-[#1D1D1F]">Research at CEC</h1>
          <div className="md:grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-12 mt-10">
            <div className="col-span-3 sticky top-20 md:top-32 self-start  md:mb-0">
              <div className="sticky top-20 h-fit">
              
              {/* Mobile Dropdown */}
              <div className="block md:hidden mb-6">
                <CustomSelect
                  value={titles[selectedIndex]}
                  onChange={(e) => {
                    if (e.target.value === "IRINS Profile") {
                      window.open("https://canaraengineering.irins.org/", "_blank");
                      setSelectedIndex(0);
                      return;
                    }
                    const newIndex = titles.indexOf(e.target.value);
                    if (newIndex !== -1) setSelectedIndex(newIndex);
                  }}
                  options={titles}
                />
              </div>

              {/* Desktop Sidebar */}
              <div className="hidden md:block">
              {titles?.map((title, index) => (
                <React.Fragment key={index}>
                  { title === "IRINS Profile" ? (
                    <h1
                      onClick={() => setSelectedIndex(0)}
                      className={`text-[20px] pb-3 mb-3 cursor-pointer ${index !== titles.length - 1 ? "border-b-2 border-border" : ""} ${
                        selectedIndex === index ? "text-[#2884CA] font-bold" : "text-textGray font-[500]"
                      }`}
                    >
                      <a  href="https://canaraengineering.irins.org/" target="_blank">{title}</a>
                    </h1>
                  ) : (
                    <h1
                      onClick={() => setSelectedIndex(index)}
                      className={`text-[20px] pb-3 mb-3 cursor-pointer ${index !== titles.length - 1 ? "border-b-2 border-border" : ""} ${
                        selectedIndex === index ? "text-[#2884CA] font-bold" : "text-textGray font-[500]"
                      }`}
                    >
                      {title}
                    </h1>
                  )}
                </React.Fragment>
              ))}
              </div>
            </div>
            </div>
            <div className="col-span-1"></div>
            <div className={`col-span-8 ${selectedIndex != 2 && "max-h-[50vh] md:max-h-[90vh]"} scrollable overflow-y-auto pr-2`}>
              {selectedIndex === 0 && <Home />}
              {selectedIndex === 1 && <ResearchCenter />}
              {selectedIndex === 2 && <Publications />}
              {selectedIndex === 3 && <Grants />}
              {/* {selectedIndex === 4 && <Activities />} */}
              {selectedIndex === 4 && <Patents />}
              {selectedIndex === 5 && <IframLinks link="https://apiserver.cec.edu.in/files/R&D%20Cell" title="R&D Cell"/>}
              {selectedIndex === 6 && <IframLinks link="https://apiserver.cec.edu.in/files/IPR%20Cell" title="IPR Cell"/>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchPageSection;



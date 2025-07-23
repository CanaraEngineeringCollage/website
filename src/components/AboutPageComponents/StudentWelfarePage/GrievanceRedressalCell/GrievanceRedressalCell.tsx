"use client";
import React, { useState } from "react";
import grievanceRedressalCell from "../../../../utils/grievanceData/grievanceData.json";

const GrievanceRedressalCell = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("New Grievance");
  const defaultDate = new Date().toLocaleDateString("en-GB");

  return (
    <section className="py-10 text-[#1D1D1F] lg2:px-24 mx-5 overflow-hidden">
      <div>
        <h1 className="text-3xl  md:text-[40px] lg2:text-5xl xl:text-6xl font-bold pb-1 lg:pb-10 text-[#1D1D1F]">Grievance Redressal Cell</h1>
        <div className={`grid grid-cols-1 gap-3  md:grid-cols-12 mt-10`}>
          <div className="col-span-3">
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
          <div className="col-span-1"></div>
          {/* Content */}
          {selectedIndex === 6 ? (
            <div className="col-span-8">
              <div className="flex flex-row justify-center sm:gap-10 gap-4 items-center mb-10">
                <button
                  aria-label="New Grievance"
                  onClick={() => setActiveTab("New Grievance")}
                  className={`border-b-2 ${
                    activeTab == "New Grievance" ? "font-bold border-black" : "border-transparent"
                  } cursor-pointer text-[17px] pb-2 px-6 sm:px-10`}
                >
                  New Grievance
                </button>
                <button
                  aria-label="Know your status"
                  onClick={() => setActiveTab("Know your status")}
                  className={`border-b-2 ${
                    activeTab == "Know your status" ? "font-bold border-black" : "border-transparent"
                  } cursor-pointer text-[17px] pb-2 px-6 sm:px-10`}
                >
                  Know your status
                </button>
              </div>

              {activeTab === "New Grievance" && (
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                  {/* Date */}
                  <div className="flex flex-col">
                    <label className="text-lg mb-3 font-[500]">Date</label>
                    <input
                      type="text"
                      defaultValue={defaultDate}
                      readOnly
                      className="border-b-2 outline-none border-border pb-2 text-textGray text-base"
                    />
                  </div>

                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-lg mb-3 font-[500]">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="border-b-2 outline-none border-border pb-2 text-textGray text-base"
                    />
                  </div>

                  {/* Grievance From */}
                  <div className="flex flex-col">
                    <label className="text-lg mb-3 font-[500]">Grievance From</label>
                    <select className="border-b-2 outline-none border-border pb-[13px] text-textGray text-base">
                      <option>SELECT TYPE</option>
                      <option>STUDENT</option>
                      <option>PARENT</option>
                      <option>FACULTY</option>
                      <option>ANY OTHER STAKE HOLDER</option>
                    </select>
                  </div>

                  {/* Contact Number */}
                  <div className="flex flex-col">
                    <label className="text-lg mb-3 font-[500]">Contact Number</label>
                    <input
                      type="tel"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="Enter valid 10 digit mobile number"
                      className="border-b-2 outline-none border-border pb-2 text-textGray text-base"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-lg mb-3 font-[500]">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your E-Mail address"
                      className="border-b-2 outline-none border-border pb-2 text-textGray text-base"
                    />
                  </div>

                  {/* Grievance Related To */}
                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-lg mb-3 font-[500]">Grievance Related To</label>
                    <select className="border-b-2 outline-none border-border pb-2 text-textGray text-base">
                      <option>SELECT</option>
                      <option>ACADEMICS</option>
                      <option>INFRASTRUCTURE</option>
                      <option>FACILITIES</option>
                      <option>SC/ST/OBC GRIEVANCE</option>
                      <option>ANY OTHER ISSUE</option>
                    </select>
                  </div>

                  {/* Nature of Grievance */}
                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-lg mb-3 font-[500]">Nature of Grievance</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your grievance..."
                      className="border-b-2 outline-none border-border pb-2 text-textGray text-base"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex sm:col-span-2 justify-center gap-4 mt-6">
                    <button type="submit" aria-label="Submit" className="px-6 py-2 rounded-3xl bg-[#2884CA] text-white font-semibold">
                      Submit
                    </button>
                    <button
                      type="reset"
                      aria-label="Reset"
                      className="px-6 py-2 rounded-3xl border border-[#2884CA] text-[#2884CA] bg-white font-semibold"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}

              {activeTab === "Know your status" && (
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
                  <div className="flex flex-col">
                    <label className="text-lg  mb-3 font-[500]">Contact Number</label>
                    <input
                      type="tel"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="Enter valid 10 digit mobile number"
                      className="border-b-2 outline-none border-border pb-2 text-textGray"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg  mb-3 font-[500]">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your E-Mail address"
                      className="border-b-2 outline-none border-border pb-2 text-textGray"
                    />
                  </div>
                </form>
              )}

              <div className="flex justify-center items-center mt-10">
                <button aria-label="Apply Now" className="text-center text-white cursor-pointer px-6 sm:px-8 py-2 rounded-3xl bg-[#2884CA]">
                  Apply Now
                </button>
              </div>
            </div>
          ) : (
            <div className="col-span-8">
              {grievanceRedressalCell[selectedIndex]?.data?.map((item, i) => (
                <div key={i} className="">
                  {/* Title */}
                  {item.title && <h2 className="text-[20px] font-extrabold text-textGray mb-2">{item.title}</h2>}

                  {/* Description */}
                  {"description" in item && item.description && (
                    <p className="md:text-lg  text-[14px] leading-7  text-textGray lg:pe-16 ">{item.description}</p>
                  )}

                  {/* Bullet Points */}
                  {"points" in item && item.points && (
                    <ul className="list-disc mt-5 pl-5  md:text-lg  text-[14px] leading-7  text-textGray">
                      {item.points.map((point: string, j: number) => (
                        <li key={j} className="pb-2">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Iframe */}
                  {"href" in item && item.href && (
                    <iframe
                      src={`${item.href}#toolbar=0&navpanes=0&view=FitH`}
                      className="w-full h-[100vh] mt-6"
                      title={item.title || `Document-${i}`}
                    ></iframe>
                  )}

                  {/* Table */}
                  {"type" in item && item.type === "table" && (
                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                        <thead className="bg-[#F3F8FC] text-[#2884CA]">
                          <tr>
                            {item.headers?.map((header: string, hIndex: number) => (
                              <th key={hIndex} className="py-3 md:px-4 px-1 border-b">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.rows?.map((row: string[], rIndex: number) => (
                            <tr key={rIndex} className="text-textGray">
                              {row.map((cell: string, cIndex: number) => (
                                <td key={cIndex} className="py-3 md:px-4 px-1 border-b">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GrievanceRedressalCell;

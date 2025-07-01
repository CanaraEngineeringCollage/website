"use client";
import React, { useState } from "react";
import grievanceRedressalCell from "../../../../utils/grievanceData/grievanceData.json";

const GrievanceRedressalCell = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("New Grievance");
  return (
    <section className="py-10 text-black lg2:px-24 mx-5 overflow-hidden">
      <div>
        <h1 className="text-[30px] lg:text-[54px] font-bold pb-1 lg:pb-10 text-black">Grievance Redressal Cell</h1>
        <div className="grid grid-cols-1 gap-3 md:gap-32 md:grid-cols-12 mt-10">
          {/* Sidebar */}
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
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Date</label>
                    <input type="text" defaultValue="01/07/2025" readOnly className="border-b-2 outline-none border-border pb-2 text-textGray" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Name</label>
                    <input type="text" placeholder="Enter your full name" className="border-b-2 outline-none border-border pb-2 text-textGray" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Grievance From</label>
                    <select className="border-b-2 outline-none border-border pb-2 text-textGray">
                      <option>SELECT TYPE</option>
                      <option>STUDENT</option>
                      <option>PARENT</option>
                      <option>FACULTY</option>
                      <option>ANY OTHER STAKE HOLDER</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Contact Number</label>
                    <input
                      type="tel"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="Enter valid 10 digit mobile number"
                      className="border-b-2 outline-none border-border pb-2 text-textGray"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your E-Mail address"
                      className="border-b-2 outline-none border-border pb-2 text-textGray"
                    />
                  </div>
                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-sm font-medium">Grievance Related To</label>
                    <select className="border-b-2 outline-none border-border pb-2 text-textGray">
                      <option>SELECT</option>
                      <option>ACADEMICS</option>
                      <option>INFRASTRUCTURE</option>
                      <option>FACILITIES</option>
                      <option>SC/ST/OBC GRIEVANCE</option>
                      <option>ANY OTHER ISSUE</option>
                    </select>
                  </div>
                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-sm font-medium">Nature of Grievance</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your grievance..."
                      className="border-b-2 outline-none border-border pb-2 text-textGray"
                    />
                  </div>
                  <div className="flex sm:col-span-2 justify-center gap-4 mt-6">
                    <button type="submit" aria-label="Submit" className="px-6 py-2 rounded-3xl bg-[#2884CA] text-white font-semibold">Submit</button>
                    <button type="reset" aria-label="Reset" className="px-6 py-2 rounded-3xl border border-[#2884CA] text-[#2884CA] bg-white font-semibold">Reset</button>
                  </div>
                </form>
              )}

              {activeTab === "Know your status" && (
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Contact Number</label>
                    <input
                      type="tel"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="Enter valid 10 digit mobile number"
                      className="border-b-2 outline-none border-border pb-2 text-textGray"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Email</label>
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
                <div key={i} className="mb-6">
                  {/* Title */}
                  {item.title && <h2 className="text-[20px] font-extrabold text-textGray mb-2">{item.title}</h2>}

                  {/* Description */}
                  {"description" in item && item.description && <p className="text-[17px] text-textGray lg:pe-16 mt-1">{item.description}</p>}

                  {/* Bullet Points */}
                  {"points" in item && item.points && (
                    <ul className="list-disc pl-5 space-y-1 mt-4">
                      {item.points.map((point: string, j: number) => (
                        <li key={j} className="text-[17px] text-textGray">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Iframe */}
                  {"href" in item && item.href && (
                    <iframe src={item.href} className="w-full h-[100vh] mt-6" title={item.title || `Document-${i}`}></iframe>
                  )}

                  {/* Table */}
                  {"type" in item && item.type === "table" && (
                    <div className="overflow-x-auto mt-6">
                      <table className="min-w-full text-sm border border-gray-300">
                        <thead className="bg-gray-100">
                          <tr>
                            {item.headers?.map((header: string, hIndex: number) => (
                              <th key={hIndex} className="text-left p-2 border border-gray-300 font-semibold">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.rows?.map((row: string[], rIndex: number) => (
                            <tr key={rIndex} className="hover:bg-gray-50">
                              {row.map((cell: string, cIndex: number) => (
                                <td key={cIndex} className="p-2 border border-gray-300 text-textGray">
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

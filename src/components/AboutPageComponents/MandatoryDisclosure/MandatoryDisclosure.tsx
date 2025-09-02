"use client";
import React, { useState } from "react";
import disclosureData from "../../../utils/mandatoryDisclosure/mandatoryDisclosure.json";
import Image from "next/image";
import Link from "next/link";
import { HiLink } from "react-icons/hi";

const MandatoryDisclosure = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="py-10 xl:py-20 text-[#1D1D1F] overflow-hidden">
      <div className="lg2:mx-24 mx-5">
        <h1 className="text-3xl text-[#1D1D1F] md:text-[40px] lg2:text-5xl xl:text-6xl font-bold pb-1 lg:pb-10">Mandatory Disclosure</h1>
        <div className="grid grid-cols-1  md:grid-cols-12 mt-10">
          <div className="col-span-3  self-start ">
            {disclosureData?.map((section, index) => (
              <h1
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border-b-2  pb-3 mb-3 border-border cursor-pointer ${
                  selectedIndex === index ? "text-[#2884CA] font-bold text-[18px]" : "text-textGray font-[500] text-[20px]"
                }`}
              >
                {section.title}
              </h1>
            ))}
          </div>
            <div className="col-span-1"></div>
          <div className="col-span-8 mt-5 lg:mt-0">
            {selectedIndex === 4 ? (
              <>
                <div className="overflow-x-hidden">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">List of UGC 2(f) Status</h2>
                  <table className="w-[85%] text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead className="bg-gray-100">
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                        <th className="py-3 md:px-4 px-1 border-b">Year</th>
                        <th className="py-3 md:px-4 px-1 border-b">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disclosureData[4]?.data?.map((item, idx) => (
                        <tr key={idx} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b">{idx + 1}</td>
                          <td className="py-3 md:px-4 px-1 border-b">{item.title}</td>
                          <td className="py-3 md:px-4 px-1 border-b">
                            {item.links?.[0]?.href && (
                              <a href={item.links[0].href} target="_blank"  className="text-[#2884CA] hover:underline">
                                {item.links[0].text || "Download"}
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : selectedIndex === 5 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">Audit Report</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead >
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                        <th className="py-3 md:px-4 px-1 border-b">Year</th>
                        <th className="py-3 md:px-4 px-1 border-b">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disclosureData[5]?.data?.map((item, idx) => (
                        <tr key={idx} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b">{idx + 1}</td>
                          <td className="py-3 md:px-4 px-1 border-b">{item.title}</td>
                          <td className="py-3 md:px-4 px-1 border-b">
                            {item.links?.[0]?.href && (
                              <a href={item.links[0].href} target="_blank" rel="noopener noreferrer" className="text-[#2884CA] hover:underline">
                                {item.links[0].text || "Download"}
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ):selectedIndex === 2 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">AICTE Approval</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead >
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                        <th className="py-3 md:px-4 px-1 border-b">Description</th>
                        <th className="py-3 md:px-4 px-1 border-b">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disclosureData[2]?.data?.map((item, idx) => (
                        <tr key={idx} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b">{idx + 1}</td>
                          <td className="py-3 md:px-4 px-1 border-b">{item.title}</td>
                          <td className="py-3 md:px-4 px-1 border-b">
                            {item.links?.[0]?.href && (
                              <a href={item.links[0].href} target="_blank" rel="noopener noreferrer" className="text-[#2884CA] hover:underline">
                                View {item.links[0].text || "Download"}
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ):selectedIndex === 3 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">VTU Affiliation</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead >
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                        <th className="py-3 md:px-4 px-1 border-b">Description</th>
                        <th className="py-3 md:px-4 px-1 border-b">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disclosureData[3]?.data?.map((item, idx) => (
                        <tr key={idx} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b">{idx + 1}</td>
                          <td className="py-3 md:px-4 px-1 border-b">{item.title}</td>
                          <td className="py-3 md:px-4 px-1 border-b">
                            {item.links?.[0]?.href && (
                              <a href={item.links[0].href} target="_blank" rel="noopener noreferrer" className="text-[#2884CA] hover:underline">
                                View {item.links[0].text || "Download"}
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ):selectedIndex === 13 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">UGC Declaration</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead >
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                        <th className="py-3 md:px-4 px-1 border-b">Description</th>
                        <th className="py-3 md:px-4 px-1 border-b">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disclosureData[13]?.data?.map((item, idx) => (
                        <tr key={idx} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b">{idx + 1}</td>
                          <td className="py-3 md:px-4 px-1 border-b">{item.title}</td>
                          <td className="py-3 md:px-4 px-1 border-b">
                            {item.links?.[0]?.href && (
                              <a href={item.links[0].href} target="_blank" rel="noopener noreferrer" className="text-[#2884CA] hover:underline">
                                View UGC Declaration
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ):selectedIndex === 14 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">Fee Refund Policy</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead >
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                        <th className="py-3 md:px-4 px-1 border-b">Description</th>
                        <th className="py-3 md:px-4 px-1 border-b">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disclosureData[14]?.data?.map((item, idx) => (
                        <tr key={idx} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b">{idx + 1}</td>
                          <td className="py-3 md:px-4 px-1 border-b">{item.title}</td>
                          <td className="py-3 md:px-4 px-1 border-b">
                            {item.links?.[0]?.href && (
                              <a href={item.links[0].href} target="_blank" rel="noopener noreferrer" className="text-[#2884CA] hover:underline">
                                View Policy
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ):selectedIndex === 8 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">Fees to be Paid</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead >
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                        <th className="py-3 md:px-4 px-1 border-b">Year</th>
                        <th className="py-3 md:px-4 px-1 border-b">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disclosureData[8]?.data?.map((item, idx) => (
                        <tr key={idx} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b">{idx + 1}</td>
                          <td className="py-3 md:px-4 px-1 border-b">{item.year}</td>
                          <td className="py-3 md:px-4 px-1 border-b">
                            {item.links?.[0]?.href && (
                              <a href={item.links[0].href} target="_blank" rel="noopener noreferrer" className="text-[#2884CA] hover:underline">
                                View UG Fees
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : selectedIndex === 6 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">GC Meeting</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead >
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                        <th className="py-3 md:px-4 px-1 border-b">Description</th>
                        <th className="py-3 md:px-4 px-1 border-b">Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disclosureData[6]?.data?.map((item, idx) => (
                        <tr key={idx} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b">{idx + 1}</td>
                          <td className="py-3 md:px-4 px-1 border-b">{item.title}</td>
                          <td className="py-3 md:px-4 px-1 border-b">
                            {item.links?.[0]?.href && (
                              <a href={item.links[0].href} target="_blank" rel="noopener noreferrer" className="text-[#2884CA] hover:underline">
                                {item.links[0].text || "Download"}
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : selectedIndex === 9 ? (
              <>
                {" "}
                <h2 className="text-[20px] font-bold text-textGray mb-2">Anti Ragging Policy</h2>
                <h2 className="text-lg font-bold text-textGray mb-2">Karnataka Education Act, 1983</h2>
                <h2 className="text-lg font-bold text-textGray mb-2">Section 2(29):</h2>
                <p className=" md:text-lg  text-[14px] leading-7 pt-4 text-textGray">
                  Ragging means causing, inducing, compelling or forcing a student, whether by way of a practical joke or otherwise, to do any act
                  which detracts from human dignity or violated his person or exposes him to ridicule or to forbear from doing any lawful act, by
                  intimidating wrongfully restraining, wrongfully confining, or injuring him or by using criminal force to him or by holding out to
                  him any treat of such intimidation, wrongful restraint, wrongful confinement, injury or the use of criminal force
                </p>
                <h2 className="text-lg font-bold text-textGray mt-6 mb-2">Section 116 – Penalty for Ragging:</h2>
                <ul className="space-y-1 md:text-lg  text-[14px] leading-7  text-textGray">
                  <li className="flex gap-2 items-start text-textGray">
                    No person who is a student in an educational institution including an institution under the direct management of the University or
                    of the Central Government shall commit ragging.
                  </li>
                  <li className="flex gap-2 items-start text-textGray">
                    Any person who contravenes sub-section (1) shall, on conviction, be punished with imprisonment for a term which may extend to one
                    year or with fine which may extend to two thousand rupees or with both.
                  </li>
                </ul>
                <h2 className="text-lg font-bold text-textGray mt-6 mb-2">
                  The following punishments have been laid down for Ragging under the Regulations of the University Grants Commission at the
                  Institutional level.
                </h2>
                <p className=" md:text-lg  text-[14px] leading-7  text-textGray">
                  Depending upon the nature and gravity of the offence as established by the Anti-Ragging Committee of the Institution, the possible
                  punishments for those found guilty of ragging at the institutional level shall be any one or any combination of the following:
                </p>
                <ul className="space-y-2 list-disc pl-5 md:text-lg  text-[14px] leading-7  text-textGray mt-6">
                  <li>Suspension from attending classes and academic privileges.</li>
                  <li>Withholding / withdrawing scholarship / fellowship and other benefits.</li>
                  <li>Debarring from appearing in any test / examination or other evaluation process.</li>
                  <li>Withholding results.</li>
                  <li>
                    Debarring from representing the institution in any regional, national or international meet, tournament, youth festival, etc.
                  </li>
                  <li>Suspension / expulsion from the hostel.</li>
                  <li>Cancellation of admission.</li>
                  <li>Rustication from the institution for a period ranging from 1 to 4 semesters.</li>
                  <li>Expulsion from the institution and consequent debarring from admission to any other institution for a specified period.</li>
                  <li>Fine ranging between Rupees 25,000/- and Rupees 1 lakh.</li>
                  <li>
                    <strong>Collective Punishment:</strong> When the persons committing or abetting the crime of ragging are not identified, the
                    institution shall resort to collective punishment.
                  </li>
                </ul>
                <h2 className="text-lg font-bold text-textGray mt-6 mb-2">Objectives:</h2>
                <ul className="space-y-2 list-disc pl-5 md:text-lg  text-[14px] leading-7  text-textGray  ">
                  <li>To preserve a culture of ragging-free environment in the college campus by prohibiting it as per law.</li>
                  <li>Preventing its occurrence by following provisions of regulations provided as per law.</li>
                  <li>Design strategies and action plan for curbing the menace of ragging in the college.</li>
                  <li>Punishing those who indulge in ragging as per provisions of the law in force.</li>
                </ul>
                <h2 className="text-lg font-bold text-textGray mt-6 mb-2">Outcomes:</h2>
                <ul className="space-y-2 list-disc pl-5 md:text-lg  text-[14px] leading-7  text-textGray  ">
                  <li>Have preserved a ragging free campus with no incidents of ragging been reported so far, in the college and hostel premises.</li>
                </ul>
                <h2 className="text-lg font-bold text-textGray mt-6 mb-2">Anti Ragging Committee Organisation Chart</h2>
                <div className="relative w-[50%] h-[600px] object-cover">
                  <Image alt="ragging" fill src="/mandatory/ragging-commite/antiraggingCommitte.jpg" />
                </div>
                <h2 className="text-lg font-bold text-textGray mt-2 mb-2">Process:</h2>
                <ul className="space-y-2 list-disc pl-5 md:text-lg  text-[14px] leading-7  text-textGray">
                  <li>Anti-Ragging Committee is constituted at the beginning of every Academic Year.</li>
                  <li>Anti-Ragging Squads are formed every year.</li>
                  <li>List of Committee and Squad is displayed on the College notice boards.</li>
                  <li>
                    A meeting of members of the Committee and Squads is called. Rules and regulations and responsibility of members is explained.
                  </li>
                  <li>Anti-ragging posters are displayed on notice boards in the Academic blocks, Canteen, Mess and Hostels.</li>
                  <li>
                    2nd year students and their parents are mandatorily required to submit the online Anti-Ragging Affidavit and submit hard copy of
                    the same to the college.
                  </li>
                  <li>
                    First year students and their parents are informed during the Orientation program, to report any incident of ragging they may
                    face.
                  </li>
                  <li>The Committee meets in case any incident of ragging is reported. Necessary action is taken based on the issue.</li>
                </ul>
                <h2 className="text-lg font-bold text-textGray mt-6 mb-2">Anti Ragging Committee Functioning Flowchart</h2>
                <div className="relative w-[50%] h-[600px] object-cover">
                  <Image alt="ragging" fill src="/mandatory/ragging-commite/antiragging.png" />
                </div>
                {/* <h2 className="text-lg font-bold text-textGray mt-6 mb-2">ANTI RAGGING COMMITTEE (2024-25)</h2>
                <h2 className="text-lg font-bold text-textGray mt-2 mb-2">Review Committee:</h2> */}
                <div className="overflow-x-auto">
                  <h2 className="text-xl font-bold mb-4 mt-8 text-textGray">ANTI RAGGING COMMITTEE (2024-25)</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead>
                      <tr className="bg-[#F3F8FC] text-[#2884CA]">
                        <th className="py-3 md:px-4 px-1 border-b">Name</th>
                        <th className="py-3 md:px-4 px-1 border-b">Designation</th>
                        <th className="py-3 md:px-4 px-1 border-b">Department</th>
                      </tr>
                    </thead>
                    <tbody className="text-textGray">
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. Nagesh H R</td>
                        <td className="py-3 md:px-4 px-1 border-b">Chairman</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. Priya V Frank</td>
                        <td className="py-3 md:px-4 px-1 border-b">Nodal Officer</td>
                        <td className="py-3 md:px-4 px-1 border-b">SW</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. Demian Antony D' Mello</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. N Venkatesh</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">Mech</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. Udaya Kumar K. Shenoy</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. Raghavendra M. Shetty K</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ECE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. H. Manoj T. Gadiyar</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ISE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. Prahaas Amin</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSD</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. Basappa B. Kodada</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">AIML</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mrs. Ashwini K.G.</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSBS</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. N. Satheesha Kumar</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">BSH</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Gowrish Nagvekar</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">Hostel – Chief Warden</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Prathibha M</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mrs. Jacintha Alfred Lobo</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">WARDEN</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Shabarish Kumar B V</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">WARDEN</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Meera P.</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">WARDEN</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mrs. Usha</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">WARDEN</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Prashanth Kamath, AO</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">AO</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Hareesha A</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">PD</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">PSI, Bantwal Rural Police Station, Bantwal</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">Police Dept.</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Roopesh Baliga - 4CB23CS128</td>
                        <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Vaidehi V Pai - 4CB23CS180</td>
                        <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Prapthi Y Poojari - 4CB22EC029</td>
                        <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ECE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Sudeer Nayak - 4CB23IS111</td>
                        <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ISE</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Sangamesh - 4CB21ME008</td>
                        <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">MECH</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Deeksha Divakar - 4CB21AI010</td>
                        <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">AIML</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Ankur A Prabhu – 4CB23CG006</td>
                        <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSD</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Nikshep M P - 4CB21CB030</td>
                        <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSBS</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Rohil S Salian (I year)</td>
                        <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ISE</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto mt-10">
                  <h2 className="text-xl font-bold mb-4 text-textGray">Anti-Ragging Cell (2024–25)</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead className="bg-[#F3F8FC] text-[#2884CA]">
                      <tr>
                        <th className="py-3 md:px-4 px-1 border-b">Name</th>
                        <th className="py-3 md:px-4 px-1 border-b">Designation</th>
                        <th className="py-3 md:px-4 px-1 border-b">Department</th>
                      </tr>
                    </thead>
                    <tbody className="text-textGray">
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. N. Satheesha Kumar</td>
                        <td className="py-3 md:px-4 px-1 border-b">Coordinator</td>
                        <td className="py-3 md:px-4 px-1 border-b">BSH</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Guruprsad Upadhya</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">BSH</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Satish Hegde</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">BSH</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Prashanth Somayaji</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">BSH</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto mt-10">
                  <h2 className="text-xl font-bold mb-4 text-textGray">Flying Squad 1 (2024–25)</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead className="bg-[#F3F8FC] text-[#2884CA]">
                      <tr>
                        <th className="py-3 md:px-4 px-1 border-b">Name</th>
                        <th className="py-3 md:px-4 px-1 border-b">Designation</th>
                        <th className="py-3 md:px-4 px-1 border-b">Department</th>
                        <th className="py-3 md:px-4 px-1 border-b">Contact Number</th>
                      </tr>
                    </thead>
                    <tbody className="text-textGray">
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Satish S Nadig</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">BSH</td>
                        <td className="py-3 md:px-4 px-1 border-b">9945605716</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Geethalaksmi</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ISE</td>
                        <td className="py-3 md:px-4 px-1 border-b">9902331333</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Sandeep Prabhu</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ECE</td>
                        <td className="py-3 md:px-4 px-1 border-b">9901197904</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Sandesh Kamath</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ME</td>
                        <td className="py-3 md:px-4 px-1 border-b">8105658572</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mrs. Yashaswini K L</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSBS</td>
                        <td className="py-3 md:px-4 px-1 border-b">7760824340</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. Sunil Kumar B. L.</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                        <td className="py-3 md:px-4 px-1 border-b">9901723992</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Ananth Krishna Kamath</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSD</td>
                        <td className="py-3 md:px-4 px-1 border-b">8095171377</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Kanmani</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">AIML</td>
                        <td className="py-3 md:px-4 px-1 border-b">8762925854</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mrs. Jacintha Alfred Lobo</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">Warden</td>
                        <td className="py-3 md:px-4 px-1 border-b">7338500283</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Meera P.</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">Warden</td>
                        <td className="py-3 md:px-4 px-1 border-b">9483441367</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto mt-10">
                  <h2 className="text-xl font-bold mb-4 text-textGray">Flying Squad 2 (2024–25)</h2>
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead className="bg-[#F3F8FC] text-[#2884CA]">
                      <tr>
                        <th className="py-3 md:px-4 px-1 border-b">Name</th>
                        <th className="py-3 md:px-4 px-1 border-b">Designation</th>
                        <th className="py-3 md:px-4 px-1 border-b">Department</th>
                        <th className="py-3 md:px-4 px-1 border-b">Contact Number</th>
                      </tr>
                    </thead>
                    <tbody className="text-textGray">
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Ashwini V R</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">BSH</td>
                        <td className="py-3 md:px-4 px-1 border-b">8904555370</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Dr. Narayan Ram Naik</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ISE</td>
                        <td className="py-3 md:px-4 px-1 border-b">9741142469</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Vinay H S</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ECE</td>
                        <td className="py-3 md:px-4 px-1 border-b">9480026957</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Shreenath Salian</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">ME</td>
                        <td className="py-3 md:px-4 px-1 border-b">9964380967</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Pavithra H B</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSBS</td>
                        <td className="py-3 md:px-4 px-1 border-b">8884928744</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Rajgopal K T</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                        <td className="py-3 md:px-4 px-1 border-b">9739367679</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Ms. Pooja N S</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">CSD</td>
                        <td className="py-3 md:px-4 px-1 border-b">9663769021</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Siju V. Soman</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">AIML</td>
                        <td className="py-3 md:px-4 px-1 border-b">9164332645</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Shabarish</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">Warden</td>
                        <td className="py-3 md:px-4 px-1 border-b">9901871973</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mrs. Usha</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">Warden</td>
                        <td className="py-3 md:px-4 px-1 border-b">8095932413</td>
                      </tr>
                      <tr>
                        <td className="py-3 md:px-4 px-1 border-b">Mr. Hareesh</td>
                        <td className="py-3 md:px-4 px-1 border-b">Member</td>
                        <td className="py-3 md:px-4 px-1 border-b">PD</td>
                        <td className="py-3 md:px-4 px-1 border-b">9980206552</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            ) : selectedIndex === 10 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">Internal Committee</h2>
                  <h2 className="text-lg font-bold text-textGray mb-2">Objectives:</h2>
                  <ul className="space-y-1  md:text-lg  text-[14px] leading-7  text-textGray" >
                    <li className="flex gap-2 items-start text-textGray">
                      To handle and resolve complaints related to harassment and discrimination against women effectively.
                    </li>
                    <li className="flex gap-2 items-start text-textGray">
                      To raise awareness about women's rights, gender equality, and the prevention of harassment through educational initiatives and
                      campaigns.
                    </li>
                    <li className="flex gap-2 items-start text-textGray">
                      To offer support, guidance, and counseling to women who have experienced harassment or discrimination, ensuring their well-being
                      and empowerment.
                    </li>
                  </ul>{" "}
                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Outcomes:</h2>
                  <ul className="space-y-1  md:text-lg  text-[14px] leading-7  text-textGray">
                    <li className="flex gap-2 items-start text-textGray">
                      The resolution of complaints ensures a fair and just outcome for all parties involved.
                    </li>
                    <li className="flex gap-2 items-start text-textGray">
                      Their efforts lead to increased awareness and prevention of harassment and discrimination, fostering a more informed and
                      proactive community.
                    </li>
                    <li className="flex gap-2 items-start text-textGray">
                      These committees also contribute to the empowerment of women by providing them with support, resources, and guidance, creating a
                      safer and more inclusive environment.
                    </li>
                  </ul>
                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Functioning Of Internal Committee</h2>
                  <p className=" md:text-lg text-[14px] leading-7  text-textGray">
                    The Cell deals with grievances in the form of written complaints and e-mails with signatures from the students, staff, women,
                    parents and any other stake holders.
                  </p>
                  <div className="overflow-x-auto mt-5">
                    <h2 className="text-xl font-bold mb-4 text-textGray">Internal Committee (IC) 2024–25</h2>
                    <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                      <thead className="bg-[#F3F8FC] text-[#2884CA]">
                        <tr>
                          <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                          <th className="py-3 md:px-4 px-1 border-b">Name</th>
                          <th className="py-3 md:px-4 px-1 border-b">Designation</th>
                          <th className="py-3 md:px-4 px-1 border-b">Department</th>
                        </tr>
                      </thead>
                      <tbody className="text-textGray">
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">1.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Dr. Priya V. Frank</td>
                          <td className="py-3 md:px-4 px-1 border-b">Chair Person</td>
                          <td className="py-3 md:px-4 px-1 border-b">BS&H</td>
                        </tr>
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">2.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Dr. Pavithra D S</td>
                          <td className="py-3 md:px-4 px-1 border-b">Member</td>
                          <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                        </tr>
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">3.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Ms. Vidyalakshmi P.B.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Member</td>
                          <td className="py-3 md:px-4 px-1 border-b">BS&H</td>
                        </tr>
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">4.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Mrs. Vinoda Baliga</td>
                          <td className="py-3 md:px-4 px-1 border-b">Member</td>
                          <td className="py-3 md:px-4 px-1 border-b">BS&H</td>
                        </tr>
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">5.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Mrs. Lavina Monteiro</td>
                          <td className="py-3 md:px-4 px-1 border-b">Member</td>
                          <td className="py-3 md:px-4 px-1 border-b">ADMIN</td>
                        </tr>
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">6.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Ms. Sandhya</td>
                          <td className="py-3 md:px-4 px-1 border-b">Member</td>
                          <td className="py-3 md:px-4 px-1 border-b">BS&H - Counsellor</td>
                        </tr>
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">7.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Mrs. Archana Baliga, Secretary, Samvit Education Trust</td>
                          <td className="py-3 md:px-4 px-1 border-b">Member</td>
                          <td className="py-3 md:px-4 px-1 border-b">NGO</td>
                        </tr>
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">8.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Ms. Sivali Rao – 4CB21CS109</td>
                          <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                          <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                        </tr>
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">9.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Ms. Sanjana Mahale – 4CB23AI087</td>
                          <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                          <td className="py-3 md:px-4 px-1 border-b">AIML</td>
                        </tr>
                        <tr>
                          <td className="py-3 md:px-4 px-1 border-b">10.</td>
                          <td className="py-3 md:px-4 px-1 border-b">Ms. Moolya Praveeksha Narayan – 4CB23CS094</td>
                          <td className="py-3 md:px-4 px-1 border-b">Student Member</td>
                          <td className="py-3 md:px-4 px-1 border-b">CSE</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : selectedIndex === 11 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">SC/ST, OBC, Minority Scholarship Information</h2>

                  <h2 className="text-xl font-bold  text-textGray mb-1">Details of Online Websites to Apply for Scholarships:</h2>
                  <p className="md:text-lg  text-[14px] leading-7 mb-2  text-textGray">The student can apply for only one of the category scholarships given below.</p>

                  <ul className="space-y-1 md:text-lg  text-[14px] leading-7  text-textGray">
                    <li className="flex gap-2 items-start text-textGray">
                      <span className="font-medium">•</span>
                      Lower Income for SC students –{" "}
                      <a href="https://sw.kar.nic.in" className="text-[#2884CA] underline" target="_blank">
                        https://sw.kar.nic.in
                      </a>
                    </li>
                    <li className="flex gap-2 items-start text-textGray">
                      <span className="font-medium">•</span>
                      Lower Income ST students, MHRD, and Beedi Scholarship –{" "}
                      <a href="https://scholarships.gov.in" className="text-[#2884CA] underline" target="_blank">
                        https://scholarships.gov.in
                      </a>
                    </li>
                    <li className="flex gap-2 items-start text-textGray">
                      <span className="font-medium">•</span>
                      Higher Income SC & ST students –{" "}
                      <a href="http://dte.kar.nic.in" className="text-[#2884CA] underline" target="_blank">
                        http://dte.kar.nic.in
                      </a>
                    </li>
                    <li className="flex gap-2 items-start text-textGray">
                      <span className="font-medium">•</span>
                      OBC Scholarship –{" "}
                      <a href="https://karepass.cgg.gov.in" className="text-[#2884CA] underline" target="_blank">
                        https://karepass.cgg.gov.in
                      </a>
                    </li>
                  </ul>

                  <p className="md:text-lg  text-[14px] leading-7  text-textGray mt-2">
                    Hard copy of the application along with uploaded documents should be submitted to the college office without fail.
                  </p>

                  <h2 className="text-xl font-bold mb-2 text-textGray mt-6 ">SC/ST Grievance Redressal & Welfare</h2>
                  <ul className="space-y-1 md:text-lg  text-[14px] leading-7  text-textGray">
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Function as a Grievance Redressal Cell for SC/ST/OBC students and help solve academic and administrative issues.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Ensure implementation of SC/ST/OBC reservation policies as per Government norms.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Encourage SC/ST/OBC students to avail themselves of available facilities.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Motivate academic excellence among SC/ST/OBC students.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Nominate students and faculty to the cell.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Handle every grievance fairly.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold mb-2 text-textGray mt-6">Activities:</h2>
                  <ul className="space-y-1 md:text-lg  text-[14px] leading-7  text-textGray">
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Publishing SC/ST/OBC student facilities on website and college calendar.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Mentoring through Teacher Guardians.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Disbursing government-sanctioned scholarship amounts.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Providing book bank facility to SC/ST students.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Addressing complaints and ensuring resolution.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Nomination of SC/ST/OBC members to the Cell.
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="font-medium">•</span>
                      Conducting regular Cell meetings.
                    </li>
                  </ul>

                  <div className="mt-4">
                    <Link href="/about/mandatory-disclosure/sc-st-grievance" className="text-[#2884CA] underline md:text-lg  text-[14px] leading-7 ">
                      Click Here to Submit Online Grievance
                    </Link>
                   
                  </div>

                  <div className="overflow-x-auto mt-5">
                    <h2 className="text-xl font-bold mb-4 text-textGray">Committee List – SC/ST</h2>
                    <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                      <thead className="bg-[#F3F8FC] text-[#2884CA]">
                        <tr>
                          <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
                          <th className="py-3 md:px-4 px-1 border-b">Name</th>
                          <th className="py-3 md:px-4 px-1 border-b">Designation</th>
                          <th className="py-3 md:px-4 px-1 border-b">Dept</th>
                        </tr>
                      </thead>
                      <tbody className="text-textGray">
                        {[
                          ["1.", "Dr.Basappa Kodada", "Chairman", "AIML"],
                          ["2.", "Mr. Ramesh Nayak", "Member", "ISE"],
                          ["3.", "Mrs. Kanmani", "Member", "AIML"],
                          ["4.", "Mr. Prashant Kamath", "Member", "ADMIN"],
                          ["5.", "Mrs. Meera Hegde", "Member", "ADMIN"],
                          ["6.", "Mr. Pradeep Ganapayya Gond - 4CB20EC027", "Student Member", "ECE"],
                          ["7.", "Ms. Anjali - 4CB20IS008", "Student Member", "ISE"],
                          ["8.", "Ms. Chaithra - 4CB21CS023", "Student Member", "CSE"],
                          ["9.", "Mr. Manohara - 4CB21CB023", "Student Member", "CSBS"],
                          ["10.", "Mr. Ganesh K - 4CB22IS013", "Student Member", "ISE"],
                          ["11.", "Mr. Deekshith - 4CB22CG007", "Student Member", "CSD"],
                        ].map(([sl, name, designation, dept], i) => (
                          <tr key={i}>
                            <td className="py-3 md:px-4 px-1 border-b">{sl}</td>
                            <td className="py-3 md:px-4 px-1 border-b">{name}</td>
                            <td className="py-3 md:px-4 px-1 border-b">{designation}</td>
                            <td className="py-3 md:px-4 px-1 border-b">{dept}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="overflow-x-auto mt-10">
                    <h2 className="text-xl font-bold mb-4 text-textGray">Number of SC/ST/OBC Students Receiving Scholarship</h2>
                    <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                      <thead className="bg-[#F3F8FC] text-[#2884CA]">
                        <tr>
                          <th className="py-3 md:px-4 px-1 border-b">Year</th>
                          <th className="py-3 md:px-4 px-1 border-b">SC Students</th>
                          <th className="py-3 md:px-4 px-1 border-b">ST Students</th>
                          <th className="py-3 md:px-4 px-1 border-b">OBC Students</th>
                        </tr>
                      </thead>
                      <tbody className="text-textGray">
                        {[
                          ["2023", "23", "7", "394"],
                          ["2022", "11", "13", "512"],
                          ["2021", "4", "7", "465"],
                          ["2020", "1", "17", "466"],
                          ["2019", "8", "22", "582"],
                          ["2018", "16", "24", "585"],
                          ["2017", "23", "26", "501"],
                          ["2016", "33", "26", "425"],
                          ["2015", "35", "23", "383"],
                        ].map(([year, sc, st, obc], i) => (
                          <tr key={i}>
                            <td className="py-3 md:px-4 px-1 border-b">{year}</td>
                            <td className="py-3 md:px-4 px-1 border-b">{sc}</td>
                            <td className="py-3 md:px-4 px-1 border-b">{st}</td>
                            <td className="py-3 md:px-4 px-1 border-b">{obc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : selectedIndex === 12 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-2">Privacy Policy of Canara Engineering College</h2>

                  <p className="md:text-lg  text-[14px] leading-7 text-textGray ">
                    Canara Engineering College operates the
                    <a href="https://www.canaraengineering.in/" target="_blank" className="text-[#2884CA] underline ml-1">
                      https://www.canaraengineering.in/
                    </a>{" "}
                    website, which provides the SERVICE.
                  </p>

                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal
                    Information if anyone decided to use our Service, the CEC website.
                  </p>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The
                    Personal Information that we collect is used for providing and improving the Service. We will not use or share your information
                    with anyone except as described in this Privacy Policy.
                  </p>

                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at
                    <a href="https://www.canaraengineering.in/" target="_blank" className="text-[#2884CA] underline ml-1">
                      https://www.canaraengineering.in/
                    </a>
                    , unless otherwise defined in this Privacy Policy.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Information Collection and Use</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray ">
                    For a better experience while using our Service, we may require you to provide us with certain personally identifiable
                    information, including but not limited to your name, phone number, and postal address. The information that we collect will be
                    used to contact or identify you.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Log Data</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray ">
                    We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log
                    Data. This Log Data may include information such as your computer's IP address, browser version, pages of our Service that you
                    visit, the time and date of your visit, the time spent on those pages, and other statistics.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Cookies</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray ">
                    Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier. These are sent to your
                    browser from the website that you visit and are stored on your computer's hard drive.
                  </p>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray ">
                    Our website uses these "cookies" to collect information and to improve our Service. You have the option to either accept or refuse
                    these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to
                    use some portions of our Service.
                  </p>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray ">For more general information on cookies, please read "What Are Cookies".</p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Service Providers</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray ">
                    We may employ third-party companies and individuals due to the following reasons:
                  </p>
                  <ul className="list-disc md:text-lg  text-[14px] leading-7  text-textGray">
                    <li>To facilitate our Service</li>
                    <li>To provide the Service on our behalf</li>
                    <li>To perform Service-related services</li>
                    <li>To assist us in analyzing how our Service is used</li>
                  </ul>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    These third parties have access to your Personal Information only to perform the tasks assigned to them on our behalf. However,
                    they are obligated not to disclose or use the information for any other purpose.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Security</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    We value your trust in providing us your Personal Information, thus we strive to use commercially acceptable means of protecting
                    it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable,
                    and we cannot guarantee its absolute security.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Links to Other Sites</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. These
                    external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have
                    no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Children's Privacy</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from
                    children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete
                    it from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information,
                    please contact us so that we can take necessary actions.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Changes to This Privacy Policy</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will
                    notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are
                    posted.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Contact Us</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                  </p>
                </div>
              </>
            ) : selectedIndex === 12 ? (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">Privacy Policy of Canara Engineering College</h2>

                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    Canara Engineering College operates the
                    <a href="https://www.canaraengineering.in/" target="_blank" className="text-[#2884CA] underline ml-1">
                      https://www.canaraengineering.in/
                    </a>{" "}
                    website, which provides the SERVICE.
                  </p>

                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal
                    Information if anyone decided to use our Service, the CEC website.
                  </p>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The
                    Personal Information that we collect is used for providing and improving the Service. We will not use or share your information
                    with anyone except as described in this Privacy Policy.
                  </p>

                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at
                    <a href="https://www.canaraengineering.in/" target="_blank" className="text-[#2884CA] underline ml-1">
                      https://www.canaraengineering.in/
                    </a>
                    , unless otherwise defined in this Privacy Policy.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Information Collection and Use</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    For a better experience while using our Service, we may require you to provide us with certain personally identifiable
                    information, including but not limited to your name, phone number, and postal address. The information that we collect will be
                    used to contact or identify you.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Log Data</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log
                    Data. This Log Data may include information such as your computer's IP address, browser version, pages of our Service that you
                    visit, the time and date of your visit, the time spent on those pages, and other statistics.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Cookies</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier. These are sent to your
                    browser from the website that you visit and are stored on your computer's hard drive.
                  </p>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    Our website uses these "cookies" to collect information and to improve our Service. You have the option to either accept or refuse
                    these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to
                    use some portions of our Service.
                  </p>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">For more general information on cookies, please read "What Are Cookies".</p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Service Providers</h2>
                  <p className="md:text-lg  text-[14px] leading-7  text-textGray">
                    We may employ third-party companies and individuals due to the following reasons:
                  </p>
                  <ul className="list-disc  text-textGray text-[14px] pt-2 leading-7 space-y-1">
                    <li>To facilitate our Service</li>
                    <li>To provide the Service on our behalf</li>
                    <li>To perform Service-related services</li>
                    <li>To assist us in analyzing how our Service is used</li>
                  </ul>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    These third parties have access to your Personal Information only to perform the tasks assigned to them on our behalf. However,
                    they are obligated not to disclose or use the information for any other purpose.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Security</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    We value your trust in providing us your Personal Information, thus we strive to use commercially acceptable means of protecting
                    it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable,
                    and we cannot guarantee its absolute security.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Links to Other Sites</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. These
                    external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have
                    no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Children's Privacy</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from
                    children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete
                    it from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information,
                    please contact us so that we can take necessary actions.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Changes to This Privacy Policy</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will
                    notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are
                    posted.
                  </p>

                  <h2 className="text-xl font-bold mt-5 mb-2 text-textGray">Contact Us</h2>
                  <p className="md:text-lg  text-[14px] leading-7 text-textGray pt-2">
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                  </p>
                </div>
              </>
            ) : selectedIndex === 0 || selectedIndex === 1 || selectedIndex === 7 ? (
              <>
                {disclosureData[selectedIndex]?.data?.map((item, idx) => (
                  <div key={idx} className="mb-10">
                    
                    <h2 className="text-[20px] font-bold text-textGray mb-2">{item.title}</h2>
                    <ul className="space-y-1">
                      {item?.links?.map((link, i) =>
                        link?.href ? (

                          <li key={i} className="flex group items-center gap-2 text-[17px] text-textGray hover:text-[#2884CA] cursor-pointer">
                            <Link href={link.href} target="_blank" className="flex items-center gap-2 hover:text-[#2884CA]">
                              <HiLink className="text-textGray group-hover:text-[#2884CA] mt-2" />
                              <span className="text-textGray group-hover:text-[#2884CA] text-[16px] pt-2 leading-7">{link.text}</span>
                            </Link>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </div>
                ))}
              </>
            ) : (
              <>
                {disclosureData[selectedIndex]?.data?.map((item, idx) => (
                  <div key={idx} className="mb-10">
                    <h2 className="text-[20px] font-bold text-textGray mb-2">{item.title}</h2>
                    <ul className="space-y-1">
                      {item?.links?.map((link, i) =>
                        link?.href ? (
                          <li key={i} className="flex items-center gap-2 text-[17px] text-textGray hover:text-[#2884CA] cursor-pointer">
                            <iframe src={link.href} className="w-[100%] h-[70vh]" />
                          </li>
                        ) : null
                      )}
                    </ul>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MandatoryDisclosure;

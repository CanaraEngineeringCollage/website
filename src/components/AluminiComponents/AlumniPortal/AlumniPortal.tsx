"use client";
import React, { useState, useEffect } from "react";
import alumniData from "../../../utils/alumniPortalData/alumniPortalData.json";
import Image from "next/image";
import Link from "next/link";
import { HiLink } from "react-icons/hi";
import About from "./TabComponents/About/About";
import Messages from "./TabComponents/Messages/Messages";
import Advisory from "./TabComponents/Advisory/Advisory";

import CustomSelect from "@/components/Common/CustomSelect/CustomSelect";
import AlumniEvents from "./TabComponents/AlumniEvents/AlumniEvents";
import { AlumniEvent, ApiEvent, bufferToBase64 } from "../../../utils/alumniPortalData/alumniEventsUtils";
import { ArrowLeftIcon } from "lucide-react";

const AlumniPortal = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [events, setEvents] = useState<AlumniEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const alumniTitles = alumniData?.map((section) => section.title) || [];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?page=1&limit=1000&category=Alumni`);
        const json = await response.json();
        
        const dataArray = Array.isArray(json.data) ? json.data : (Array.isArray(json) ? json : []);

        const mappedEvents: AlumniEvent[] = dataArray.map((event: ApiEvent) => {
          const isVideo = !!event.videoUrl;
          const imageSrc = isVideo 
            ? event.videoUrl! 
            : (event.image?.data ? bufferToBase64(event.image.data) : "");

          return {
            id: event.id,
            title: event.title,
            description: event.description,
            date: event.date || "",
            imageSrc: imageSrc,
            isVideo: isVideo,
          };
        });

        setEvents(mappedEvents);
      } catch (error) {
        console.error("Failed to fetch alumni events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-10 xl:py-20 text-[#1D1D1F] overflow-hidden">
      <div className="lg2:mx-24 mx-5">
        <div>
           <div className="md:mb-16 mb-8 md:mt-5">
              <Link href={`/alumni`}>
                <button className="flex items-center gap-2 text-[#555]  transition-colors">
                  <ArrowLeftIcon width={20} height={20} />
                  <span className="text-lg text-[#6B6B6B]">Go Back</span>
                </button>
              </Link>
            </div>
        </div>
        <h1 className="text-3xl text-[#1D1D1F] md:text-[40px] lg2:text-5xl xl:text-6xl font-bold pb-0 md:pb-10">About the Alumni Assocation</h1>
        <div className="grid grid-cols-1  md:grid-cols-12 mt-8 md:mt-10">
          <div className="col-span-3 sticky  self-start block">
            
            {/* Mobile Dropdown */}
            <div className="block md:hidden ">
              <CustomSelect
                value={alumniData[selectedIndex]?.title || ""}
                onChange={(e) => {
                  const newIndex = alumniData.findIndex((item) => item.title === e.target.value);
                  if (newIndex !== -1) setSelectedIndex(newIndex);
                }}
                options={alumniTitles}
              />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block">
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
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-8 max-h-[70vh] lg:max-h-[100vh]  overflow-y-auto scrollable mt-10 md:mt-1">
            {selectedIndex === 0 && <About data={alumniData[0].data} />}
            {selectedIndex === 1 && <Messages data={alumniData[1].data} />}
            {selectedIndex === 2 && <Messages data={alumniData[2].data} />}
            {selectedIndex === 3 && <Advisory title={"Advisory Committee"} datam={alumniData[3].data} />}
            {selectedIndex === 4 && <Advisory title={"Office Bearers"} datam={alumniData[4].data} />}
            {selectedIndex === 5 && (
              <>
                <div className="overflow-x-auto">
                  <h2 className="text-[20px] font-bold text-textGray mb-4">{alumniData[5].title}</h2>
                     <div className="rounded overflow-hidden border border-gray-200 w-full">
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
                </div>
              </>
            )}
            {selectedIndex === 6 && (
              <>
                <AlumniEvents events={events} loading={loading} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniPortal;

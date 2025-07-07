"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

export default function AlumniMentorshipAndEvents() {
  const [eventss, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/events");
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to convert Buffer to base64 string
  const bufferToBase64 = (buffer) => {
    if (!buffer || !buffer.data) return "/placeholder.jpg"; // Fallback to placeholder if buffer is invalid
    const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
    const base64 = btoa(binary);
    return `data:image/jpeg;base64,${base64}`;
  };

  // Function to format date from "YYYY-MM-DD" to "DD Mon"
  const formatDate = (dateString) => {
    if (!dateString) return { day: "", month: "", formatted: "" };
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    return { day, month, formatted: `${day} ${month}` };
  };

  return (
    <section className="max-w-7xl mx-auto xl:max-w-[75%] py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg2:gap-16 items-start">
        {/* Left Side - Swiper */}
        <div className="relative w-full">
          <div className="relative">
            {isLoading ? (
              <div className="flex items-center justify-center h-[400px] bg-gray-100 rounded-3xl">
                <p className="text-gray-500">Loading events...</p>
              </div>
            ) : eventss.length === 0 ? (
              <div className="flex items-center justify-center h-[400px] bg-gray-100 rounded-3xl">
                <p className="text-gray-500">No events available</p>
              </div>
            ) : (
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="rounded-3xl overflow-hidden"
              >
                {eventss.map((event) => (
                  <SwiperSlide key={event.id}>
                    <div className="relative">
                      <Image
                        src={bufferToBase64(event.image)}
                        alt={event.title || "Event image"}
                        width={700}
                        height={700}
                        className="w-full object-cover rounded-3xl"
                      />

                      {/* Text Overlay */}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl">
                        <p className="text-xs text-gray-300">{formatDate(event.date).formatted}</p>
                        <h2 className="text-white text-lg font-bold mt-1">{event.title}</h2>
                        <p className="text-gray-400 text-sm mt-2">{event.description}</p>
                        <button
                          aria-label="Read More"
                          className="mt-4 px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {/* Navigation Buttons (bottom-right inside swiper) */}
            {!isLoading && eventss.length > 0 && (
              <div className="mt-22">
                <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                  <button
                    aria-label="Previous Slide"
                    className="swiper-button-prev-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                  >
                    <MdKeyboardArrowLeft />
                  </button>
                  <button
                    aria-label="Next Slide"
                    className="swiper-button-next-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                  >
                    <MdKeyboardArrowRight />
                  </button>
                </div>
                <button
                  aria-label="View More"
                  className="px-6 py-2 text-black rounded-full border hover:bg-gray-800"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Upcoming Events */}
        <div className="bg-white">
          <div className="flex flex-col gap-6 text-black bg-white rounded-3xl h-full md:p-4 lg2:p-6 xl:p-16">
            <h3 className="text-2xl font-bold">Upcoming Events</h3>
            <div className="flex flex-col gap-6">
              {isLoading ? (
                <p className="text-gray-500">Loading events...</p>
              ) : eventss.length === 0 ? (
                <p className="text-gray-500">No events available</p>
              ) : (
                eventss.map((event, index) => {
                  const { day, month } = formatDate(event.date); // Format the date
                  const isLast = index === eventss.length - 1; // Check if it's the last item

                  return (
                    <motion.div
                      key={event.id}
                      className={`flex items-center gap-4 xl:gap-12 py-6 ${!isLast ? "border-b border-[#D0D0D0]" : ""}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-col items-center lg2:text-2xl justify-center lg2:w-20 lg2:h-20 lg:w-16 lg:h-16 w-12 h-12 xl:w-24 xl:h-24 bg-[#6DC0EB] text-white rounded-3xl text-sm font-bold">
                        <span>{day}</span>
                        <span>{month}</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{event.tagline}</p>
                        <h4 className="text-md font-semibold">{event.title}</h4>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
            <div className="mt-6 mx-auto">
              <button
                aria-label="View More"
                className="px-6 py-2 bg-[#F5F5F7] font-normal rounded-full hover:bg-gray-800"
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
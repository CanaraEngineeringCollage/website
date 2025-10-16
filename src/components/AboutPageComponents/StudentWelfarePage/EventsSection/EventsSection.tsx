"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CampusEvent {
  id: string;
  category: string;
  date: string;
  description: string;
  title: string;
  image: { type: string; data: number[] } | null;
}

const bufferToBase64 = (buffer: { type: string; data: number[] } | null) => {
  if (!buffer || !buffer.data) return "";
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = typeof window !== "undefined" ? btoa(binary) : Buffer.from(binary, "binary").toString("base64");
  return `data:image/jpeg;base64,${base64}`;
};

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 1, backdropFilter: "blur(8px)", transition: { duration: 0.3 } },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.3 } },
};

const EventsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [events, setEvents] = useState<CampusEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CampusEvent | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false); // becomes true after fetch

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
      if (!res.ok) throw new Error("Failed to fetch events");
      const data: CampusEvent[] = await res.json();
      setEvents(data || []);
      setIsLoaded(true);
    } catch (err) {
      console.error(err);
      setIsLoaded(true); // still set true so UI doesn't hang; you might show fallback
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // sort by date descending
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const openModal = (event: CampusEvent) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useOutsideClick(modalRef, () => selectedEvent && closeModal());

  // When events change (i.e., after fetch), ensure Swiper updates and autoplay starts
  useEffect(() => {
    if (!swiperRef.current) return;

    // Update slides, re-calc loop/clones etc.
    try {
      swiperRef.current.update();
      if (swiperRef.current.autoplay) {
        // some environments need explicit restart
        swiperRef.current.autoplay.start();
      }
    } catch (e) {
      // ignore if swiper not ready yet
      // console.warn("Swiper update/start failed:", e);
    }
  }, [events.length]);

  return (
    <section className="lg:ml-20 xl:ml-60 md:py-0 lg:pt-24 py-10">
      <div className="lg:flex lg:justify-between md:pb-14 pb-10">
        <h1 className="text-3xl text-[#1D1D1F] md:text-left text-center md:text-[40px] lg2:text-5xl xl:text-6xl font-semibold font-sans md:pb-6 tracking-[0.13px]">
          Events
        </h1>
      </div>

      {/* Render Swiper only after we've loaded data to avoid init-before-slides problem */}
      {isLoaded && sortedEvents.filter(e => e.category === "Student Welfare Department").length > 0 ? (
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          observer={true} // observe DOM changes
          observeParents={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1580: { slidesPerView: 3.8, spaceBetween: 1 },
          }}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // ensure autoplay starts after initialization
            try {
              swiper.autoplay?.start();
              // extra safety: small delay for environments where immediate start fails
              setTimeout(() => {
                swiper.autoplay?.start();
              }, 200);
            } catch (e) {
              // swallow
            }
          }}
          onInit={(swiper) => {
            try {
              swiper.autoplay?.start();
            } catch (e) {}
          }}
        >
          {sortedEvents
            .filter((event) => event.category === "Student Welfare Department")
            .map((event) => {
              const imageSrc = bufferToBase64(event.image);

              return (
                <SwiperSlide key={event.id}>
                  <div
                    className="max-w-sm min-h-[55vh] md:min-h-[45vh] bg-white lg:min-h-[65vh]  xl:min-h-[50vh] rounded-3xl overflow-hidden cursor-pointer"
                    onClick={() => openModal(event)}
                  >
                    <div className="h-60 overflow-hidden">
                      <Image
                        width={400}
                        height={400}
                        src={imageSrc || "/placeholder.jpg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 text-center">
                      <div className="flex justify-center items-center space-x-3">
                        <p className="text-textGray text-[17px] mb-1">
                          {new Date(event.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <h3 className="text-[27px] font-semibold font-sans text-black mb-2 line-clamp-2">
                        {event.title}
                      </h3>
                      <button className="text-[#2997FF] inline-flex text-[17px] items-center hover:underline font-medium text-sm">
                        Read More <MdKeyboardArrowRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      ) : (
        // optional skeleton / fallback UI while fetching or no events
        <div className="text-center py-10 text-textGray">No events to display.</div>
      )}

      {/* Navigation controls */}
      <div className="lg:flex lg:justify-between md:pb-14 pb-10">
        <div className="flex"></div>
        <div className="hidden md:block">
          <div className="flex mr-22 gap-6 mt-20">
            <button
              aria-label="Previous Slide"
              className="swiper-button-prev-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              aria-label="Next Slide"
              className="swiper-button-next-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-[999999] hide-scrollbar h-full overflow-auto"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="fixed inset-0" onClick={closeModal} />

            <motion.div
              ref={modalRef}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative z-50 max-w-3xl mx-auto my-10 bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-full z-10"
                aria-label="Close modal"
              >
                <IconX size={18} />
              </button>

              <Image
                src={bufferToBase64(selectedEvent.image)}
                alt={selectedEvent.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover bg-black rounded-t-3xl"
              />

              <div className="p-6 sm:p-10 max-h-[70vh] overflow-y-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#1D1D1F]">
                  {selectedEvent.title}
                </h2>
                <p className="text-textGray mb-4">
                  {new Date(selectedEvent.date).toLocaleDateString("en-GB")}
                </p>
                <p className="text-textGray leading-relaxed text-justify">{selectedEvent.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;

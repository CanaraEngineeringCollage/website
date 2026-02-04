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
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?category=${encodeURIComponent("Student Welfare Department")}&all=true`);
      if (!res.ok) throw new Error("Failed to fetch events");

      const data = await res.json();
      const eventsList: CampusEvent[] = data?.data || [];

      // Sort by date descending
      const sorted = eventsList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      setEvents(sorted);
      setIsLoaded(true);
    } catch (err) {
      console.error(err);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

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

  // Swiper update when events change
  useEffect(() => {
    if (!swiperRef.current) return;
    try {
      swiperRef.current.update();
      swiperRef.current.autoplay?.start();
    } catch (e) {}
  }, [events.length]);

  return (
    <section className="lg:ml-20  xl:ml-60   pt-16  lg:pt-16 ">
      <div className="lg:flex lg:justify-between xl:pb-12 pb-10">
        <h1 className="text-3xl text-[#1D1D1F] md:text-left text-center md:text-[40px] lg2:text-5xl xl:text-6xl font-bold md:font-semibold font-sans md:pb-6 tracking-[0.13px]">
          Events
        </h1>
      </div>

      {isLoaded && events.length > 0 ? (
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
          observer={true}
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
            try {
              swiper.autoplay?.start();
              setTimeout(() => swiper.autoplay?.start(), 200);
            } catch (e) {}
          }}
          onInit={(swiper) => {
            try {
              swiper.autoplay?.start();
            } catch (e) {}
          }}
        >
          {events.map((event) => {
            const imageSrc = bufferToBase64(event.image);
            return (
              <SwiperSlide key={event.id}>
                <div className="max-w-sm  bg-white  min-h-[450px] rounded-3xl overflow-hidden cursor-pointer" onClick={() => openModal(event)}>
                  <div className="h-60 overflow-hidden">
                    <Image
                      width={400}
                      height={400}
                      src={imageSrc || "/placeholder.jpg"}
                      alt={event.title}
                      className="w-full h-full object-cover object-[center_25%]"
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
                    <h3 className="text-[27px] font-semibold font-sans text-[#1D1D1F] mb-2 line-clamp-2">{event.title}</h3>
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
        <div className="text-center py-10 text-textGray">No events to display.</div>
      )}

      {/* Navigation controls */}
      <div className="lg:flex lg:justify-between md:pb-0 pb-0">
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
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#1D1D1F]">{selectedEvent.title}</h2>
                <p className="text-textGray mb-4">{new Date(selectedEvent.date).toLocaleDateString("en-GB")}</p>
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

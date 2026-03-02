"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { CiPlay1 } from "react-icons/ci";
import Image from "next/image";
import { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Types
interface Amenity {
  imageSrc: string;
  imageSrc2: string;
  title: string;
  description: string;
  date?: string;
  alt?: string;
  isVideo?: boolean;
}

interface ModalContentType extends Amenity {
  id: string;
}
// Define animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.3, ease: "easeIn" } },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", type: "spring", damping: 20, stiffness: 100 } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25, ease: "easeIn" } },
};

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 1, backdropFilter: "blur(8px)", transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2, ease: "easeIn" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1, ease: "easeOut" } },
};

// CardContent Component
function CardContent({ description }: { description: Amenity }) {
  const isVideo = description.isVideo;

  return (
    <div>
      {isVideo ? (
        <video src={description.imageSrc2} controls playsInline className="object-contain rounded-t-2xl w-full lg:h-[500px] h-[400px] mb-10" />
      ) : (
        <Image
          src={description.imageSrc2}
          alt="Image"
          loading="lazy"
          width={1000}
          height={700}
          className="object-cover overflow-hidden rounded-t-2xl w-full lg:h-[500px] h-[400px] mb-10"
        />
      )}
      {description.title && (
        <div className="p-4 lg:px-20 space-y-10 text-left text-sm text-[#1D1D1F] bg-white">
          <div>
            <h3 className="text-[28px] lg:text-[36px] leading-[1.1] lg:max-w-[100%] mb-5 font-bold">{description.title}</h3>
            <p className="text-xl text-textGray">{description.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LegacyExcellance() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContentType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [events, setEvents] = useState<Amenity[]>([]); 
  const swiperRef = useRef<SwiperRef>(null);
  const progressRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const AUTOPLAY_DELAY = 3000;
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://apiserver.cec.edu.in";

  // Fetch data from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${baseUrl}/events?page=1&limit=4&category=Alumni`);
        const json = await response.json();

        const mappedEvents: Amenity[] = json.data.map((event: any) => {
          const isVideo = !!event.videoUrl;
          
          // ✅ Updated to use the direct image endpoint
          const imageSrc = isVideo 
            ? event.videoUrl! 
            : event.hasImage 
              ? `${baseUrl}/events/${event.id}/image` 
              : "";

          return {
            imageSrc: imageSrc,
            imageSrc2: imageSrc,
            title: event.title,
            description: event.description,
            date: event.date || "",
            alt: event.title,
            isVideo: isVideo,
          };
        });

        setEvents(mappedEvents);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, [baseUrl]);

  // Open modal with item data
  const openModal = (item: ModalContentType, index: number) => {
    setModalContent(item);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Go to the next card
  const goToNextCard = () => {
    if (events.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }
  };

  // Progress animation using requestAnimationFrame
  const animateProgress = (startTime: number, from: number = 0) => {
    const step = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      let percent = Math.min(100, from + (elapsed / AUTOPLAY_DELAY) * 100);
      setProgress(percent);
      progressRef.current = percent;
      if (percent < 100 && isPlaying) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  // Reset progress on slide change and when events are loaded
  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const handleSlideChange = () => {
      setProgress(0);
      progressRef.current = 0;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (isPlaying) animateProgress(performance.now());
    };

    swiper.on("slideChange", handleSlideChange);
    swiper.on("autoplay", handleSlideChange);

    if (isPlaying) animateProgress(performance.now());

    return () => {
      swiper.off("slideChange", handleSlideChange);
      swiper.off("autoplay", handleSlideChange);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, events]);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  if (events.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl xl:max-w-[75%] px-5 lg:px-0   mx-auto  py-8 lg:pt-3 lg:pb-10">
      <div className="grid grid-cols-1   lg:grid-cols-2 gap-8 lg2:gap-10 items-start">
        {events.map((item, index) => {
          const isVideo = item.isVideo;
          return (
            <div
              key={index}
              onClick={() => openModal({ ...item, id: index.toString() }, index)}
              className="relative cursor-pointer h-[200px] lg:h-[500px] rounded-3xl overflow-hidden"
            >
              {isVideo ? (
                <video src={item.imageSrc} muted loop autoPlay playsInline preload="metadata" className="w-full h-full object-cover rounded-3xl" />
              ) : (
                <Image src={item.imageSrc} alt={item.title} width={700} height={700} className="w-full h-full object-cover rounded-3xl" />
              )}

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-10">
                <div className="flex items-center justify-between ">
                  <h2 className="text-white text-lg leading-[1.2] lg:text-[30px] line-clamp-1 font-bold">{item.title}</h2>

                  <button
                    aria-label="Learn More"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal({ ...item, id: index.toString() }, index);
                    }}
                    className="px-5 py-2 bg-white rounded-full text-sm lg:text-base font-semibold text-primary hover:bg-gray-200 whitespace-nowrap"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {isModalOpen && modalContent && (
          <motion.div className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
            <motion.div variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" onClick={closeModal} />
            <motion.div
              variants={cardVariants}
              className="max-w-4xl mx-auto bg-white h-fit z-[60] my-10 pb-10 rounded-3xl font-sans relative shadow-2xl"
            >
              <motion.button
                variants={contentVariants}
                className="absolute top-6 me-4 lg:me-8 z-[999999999999] h-8 w-8 right-0 cursor-pointer ml-auto bg-[#808080] rounded-full flex items-center justify-center"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconX className="h-6 w-6 text-white" />
              </motion.button>
              <motion.div variants={contentVariants}>
                <CardContent description={events[currentIndex]} />
              </motion.div>
              <motion.div variants={contentVariants} className="p-4 lg:px-20 mt-4">
                <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">Next Up</h1>
                <h1 onClick={goToNextCard} className="text-primary inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]">
                  <span className="line-clamp-1 ">{events[(currentIndex + 1) % events.length]?.title || "Next"}</span>
                  <MdKeyboardArrowRight className="ml-1 mt-0.5 text-[20px] md:text-[25px]" />
                </h1>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
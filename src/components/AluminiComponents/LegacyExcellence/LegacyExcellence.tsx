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
import data from "../../../utils/aluminiSectionData/carouselData.json";

// Types
interface Amenity {
  imageSrc: string;
  title: string;
  description: string;
  date?: string;
  alt?: string;
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
  return (
    <div>
      <Image
        src={description.imageSrc}
        alt="Image"
        loading="lazy"
        width={1000}
        height={700}
        className="object-cover overflow-hidden rounded-t-2xl w-full lg:h-[700px] h-[400px] mb-10"
      />
      <div className="p-4 lg:px-20 space-y-10 text-left text-sm text-black bg-white">
        <div>
          <h3 className="text-[31px] lg:text-[46px] leading-[1.1] lg:max-w-[70%] mb-5 font-bold">{description.title}</h3>
          <p className="text-xl text-textGray">{description.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function LegacyExcellance() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContentType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const swiperRef = useRef<SwiperRef>(null);
  const progressRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const AUTOPLAY_DELAY = 3000;

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
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

  // Pause or resume the carousel
  const toggleCarousel = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
        setIsPlaying(false);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      } else {
        swiperRef.current.swiper.autoplay.start();
        setIsPlaying(true);
        animateProgress(performance.now(), progressRef.current);
      }
    }
  };

  // Reset progress on slide change
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

    // Start initial progress
    if (isPlaying) animateProgress(performance.now());

    return () => {
      swiper.off("slideChange", handleSlideChange);
      swiper.off("autoplay", handleSlideChange);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return (
    <section className="lg:ml-32  mx-auto  py-8">
      <div className="grid grid-cols-1 gap-8 lg2:gap-16 items-start">
        {/* Left Side - Swiper */}
        <div className="relative w-full">
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              breakpoints={{
                640: { slidesPerView: 1.1, spaceBetween: 20 },
              }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="rounded-l-3xl overflow-hidden"
            >
              {data.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className="relative lg:h-[800px] rounded-3xl">
                    <Image src={item.imageSrc} alt={item.title} width={700} height={700} className="w-full object-cover h-[100%] rounded-3xl" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 lg2:p-16 rounded-b-3xl">
                      <h2 className="text-white text-lg lg:text-[40px] font-bold mt-1">{item.title}</h2>
                      <p className="text-white  mt-2 text-sm lg:text-lg max-w-2/3">{item.description}</p>
                      <button
                        aria-label="Learn More"
                        onClick={() => openModal(item, index)}
                        className="mt-4 px-5 py-2 bg-white rounded-full text-slg font-semibold hover:bg-gray-200 absolute right-6 bottom-14 text-primary"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}

            <div className="flex justify-evenly lg:justify-between items-center mt-12">
              <div className=" cursor-pointer" onClick={toggleCarousel}>
                <svg width="50" height="50" viewBox="0 0 50 50">
                  {/* Background Circle */}
                  <circle cx="25" cy="25" r="22" stroke="#E8E8ED" strokeWidth="2" fill="none" opacity="0.3" />

                  {/* Progress Circle */}
                  <circle
                    cx="25"
                    cy="25"
                    r="22"
                    stroke="#E8E8ED"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={138} // 2 * π * r (full circle length)
                    strokeDashoffset={(1 - progress / 100) * 138} // Adjust offset to show progress
                    strokeLinecap="round"
                    className="transition-all duration-100 cursor-pointer"
                    transform="rotate(-90 25 25)" // Rotate the circle to start from the top
                  />

                  {/* Play/Pause Icon */}
                  <foreignObject x="8" y="8" width="34" height="34">
                    <button
                      className="w-full h-full flex items-center justify-center bg-none cursor-pointer"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.273438" y="0.458984" width="36" height="36" rx="18" fill="#E8E8ED" />
                          <path
                            d="M15.0234 11.459H13.5234C12.695 11.459 12.0234 12.1306 12.0234 12.959V23.959C12.0234 24.7874 12.695 25.459 13.5234 25.459H15.0234C15.8519 25.459 16.5234 24.7874 16.5234 23.959V12.959C16.5234 12.1306 15.8519 11.459 15.0234 11.459Z"
                            fill="black"
                            fillOpacity="0.56"
                          />
                          <path
                            d="M23.0234 11.459H21.5234C20.695 11.459 20.0234 12.1306 20.0234 12.959V23.959C20.0234 24.7874 20.695 25.459 21.5234 25.459H23.0234C23.8519 25.459 24.5234 24.7874 24.5234 23.959V12.959C24.5234 12.1306 23.8519 11.459 23.0234 11.459Z"
                            fill="black"
                            fillOpacity="0.56"
                          />
                        </svg>
                      ) : (
                        <CiPlay1 className="text-2xl text-[#dbc9bc] fill-gray-700" />
                      )}
                    </button>
                  </foreignObject>
                </svg>
              </div>

              <div className=" flex gap-2 z-10">
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
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && modalContent && (
          <motion.div className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
            <motion.div variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" onClick={closeModal} />
            <motion.div
              variants={cardVariants}
              className="max-w-6xl mx-auto bg-white h-fit z-[60] my-10 pb-10 rounded-3xl font-sans relative shadow-2xl"
            >
              <motion.button
                variants={contentVariants}
                className="absolute top-6 me-4 lg:me-8 h-8 w-8 right-0 cursor-pointer ml-auto bg-[#808080] rounded-full flex items-center justify-center"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconX className="h-6 w-6 text-white" />
              </motion.button>
              <motion.div variants={contentVariants}>
                <CardContent description={data[currentIndex]} />
              </motion.div>
              <motion.div variants={contentVariants} className="p-4 lg:px-20 mt-10">
                <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">NextUp</h1>
                <h1 onClick={goToNextCard} className="text-[#2997FF] inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]">
                  {data[(currentIndex + 1) % data.length]?.title || "First Card"}
                  <MdKeyboardArrowRight className="ml-1 mt-1 text-[20px] md:text-[25px]" />
                </h1>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

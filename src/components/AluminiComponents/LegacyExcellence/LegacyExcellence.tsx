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
    <section className="max-w-7xl xl:max-w-[75%]   mx-auto  py-8">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 lg2:gap-10 items-start">
        {/* Left Side - Swiper */}
       

              {data.map((item, index) => (
               
                  <div className="relative lg:h-[500px] rounded-3xl">
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
                
              ))}
          

            {/* Navigation Buttons */}

           
          
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
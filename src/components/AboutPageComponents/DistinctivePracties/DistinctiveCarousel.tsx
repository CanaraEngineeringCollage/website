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
import { Images } from "lucide-react";

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
<>

</>
  );
}

export default function DistinctiveCarousel() {
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
  


    const images = [
  "/DistinctivePractiesImages/CHC.jpg",
  "/DistinctivePractiesImages/plastic.png",
  "/DistinctivePractiesImages/solar.jpg",
];


  return (
    <section className="  mx-auto  py-12 overflow-hidden  flex justify-center items-center ">
      <div className="grid grid-cols-1 gap-8 lg2:gap-16 ">
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
  autoplay={{ delay: 3000 }}
   
  loop={true}
  centeredSlides={true}
  slidesPerView={1}
  spaceBetween={2}
  className="w-full"
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 24,
      centeredSlides: true,
    },
  }}
>
  {images.map((src, index) => (
    <SwiperSlide
      key={index}
      className=" lg:!w-auto"
    >
      <div className="relative h-[200px] lg:h-[500px] w-full rounded-3xl overflow-hidden">
        <img
          src={src}
          alt="carousel image"
          width={700}
          height={700}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

            {/* Navigation Buttons */}

            <div className="flex justify-end me-6 lg:justify-center items-center mt-12 ">
            

              <div className=" flex gap-2 z-10">
                <button
                  aria-label="Previous Slide"
                  className="swiper-button-prev-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                onClick={toggleCarousel}
                >
                  <MdKeyboardArrowLeft />
                </button>
                <button
                  aria-label="Next Slide"
                  className="swiper-button-next-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                onClick={toggleCarousel}
                >
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}

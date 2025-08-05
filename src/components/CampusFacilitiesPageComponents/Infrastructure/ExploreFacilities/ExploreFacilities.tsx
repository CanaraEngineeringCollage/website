"use client";
import React, { useEffect, useRef, useState, createContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight as MdKeyboardArrowRightIcon } from "react-icons/md";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click"; // Ensure this hook exists or implement it
import pressData from "../../../../utils/ExploreFacilitiesData/ExploreFacilitiesData.json";

// DescriptionProps from the first code
type DescriptionProps = {
  src: string;
  date: string;
  topTitle: string;
  topDescription: string;
  middleTitle: string;
  middleSubTitle: string;
  middleDescription: string;
  image1?: string;
  middleTitle2: string;
  middleDescription2: string;
  middleTitle3: string;
  middleDescription3: string;
  image2?: string;
  middleTitle4: string;
  middleDescription4: string;
  bottomTitile: string;
  subDescription3: string;
  image3?: string;
};

// Map pressData to DescriptionProps (adjust based on actual JSON structure)
interface DataItem {
  id: number;
  title: string;
  image: string;
  description?: DescriptionProps; // Extend JSON to include this
}

// Carousel Context for modal control
interface CarouselContextType {
  onCardClose: (index: number) => void;
  currentIndex: number;
  totalItems: number;
  goToNextCard: () => void;
  openCard: (index: number) => void;
  closeCard: () => void;
  isOpen: boolean;
}

export const CarouselContext = createContext<CarouselContextType>({
  onCardClose: () => {},
  currentIndex: 0,
  totalItems: 0,
  goToNextCard: () => {},
  openCard: () => {},
  closeCard: () => {},
  isOpen: false,
});

// CardContent component from the first code
function CardContent({ description }: { description: DescriptionProps }) {
  return (
    <div>
      <Image
        src={description.src}
        alt="Image"
        loading="lazy"
        width={1000}
        height={700}
        className="object-cover overflow-hidden rounded-t-2xl w-full lg:h-[700px] h-[400px] mb-10"
      />
      <div className="p-4 lg:px-20 space-y-10 text-left text-sm text-black bg-white">
        <div>
          <h3 className="text-[31px] lg:text-[46px] leading-[1.1] lg:max-w-[70%] mb-5 font-bold">{description.topTitle}</h3>
          <p className="text-xl text-textGray">{description.topDescription}</p>
        </div>
      </div>
    </div>
  );
}

// Animation variants from the first code
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

const ExploreFacilities = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const autoplayDelay = 3000;

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(false);
  };

  const openCard = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCard = () => {
    setIsOpen(false);
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pressData.length);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeCard();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useOutsideClick(containerRef, () => {
    if (isOpen) closeCard();
  });

  // Map DataItem to DescriptionProps (adjust based on actual JSON)
  const getDescription = (item: DataItem): DescriptionProps => ({
    src: item.image,
    date: "2025-04-25", // Placeholder; update JSON to include actual pressData
    topTitle: item.title,
    topDescription: "Explore the details of this facility.", // Placeholder
    middleTitle: "Facility Overview",
    middleSubTitle: "Key Features",
    middleDescription: "Description of key features.", // Placeholder
    middleTitle2: "Benefits",
    middleDescription2: "Benefits of using this facility.", // Placeholder
    middleTitle3: "Usage",
    middleDescription3: "How to use this facility.", // Placeholder
    middleTitle4: "Availability",
    middleDescription4: "Availability details.", // Placeholder
    bottomTitile: "Get Started",
    subDescription3: "Start exploring today.", // Placeholder
    image1: item.image, // Reuse image or add specific images in JSON
    image2: undefined,
    image3: undefined,
  });

  return (
    <CarouselContext.Provider
      value={{
        onCardClose: handleCardClose,
        currentIndex,
        totalItems: pressData.length,
        goToNextCard,
        openCard,
        closeCard,
        isOpen,
      }}
    >
      <section className="max-w-7xl mx-auto xl:max-w-[75%]  pb-16">
        <div className="lg:flex lg:justify-between md:pb-5 pb-10">
          <div className="flex">
            <h1 className="text-3xl md:text-left text-center md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-[#1D1D1F] md:pb-0">
              Our Initiatives
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {pressData?.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => openCard(index)}
              className="max-w-sm min-h-[55vh] md:min-h-[45vh] lg:min-h-[65vh] xl:min-h-auto rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-60 overflow-hidden cursor-pointer">
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover !rounded-t-2xl cursor-pointer"
                />
              </div>
              <div className="p-8 text-center bg-white rounded-b-2xl">
                <h2 className="text-[27px] font-bold text-black mb-2 line-clamp-2">{item.title}</h2>
                <span className="text-[#2997FF] inline-flex text-[17px] items-center hover:underline font-medium text-sm">
                  Read More <MdKeyboardArrowRight className="ml-1" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* <div className="flex gap-4 justify-end mt-10 me-5">
          <button 
          aria-label="Previous Slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            aria-label="Next Slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          >
            <MdKeyboardArrowRight />
          </button>
        </div> */}

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
              <motion.div variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" onClick={closeCard} />
              <motion.div
                variants={cardVariants}
                ref={containerRef}
                className="max-w-6xl mx-auto bg-white h-fit z-[60] my-10 pb-10 rounded-3xl font-sans relative shadow-2xl"
              >
                <motion.button
                  variants={contentVariants}
                  className="absolute top-6 me-4 lg:me-8 h-8 w-8 right-0 cursor-pointer ml-auto bg-[#808080] rounded-full flex items-center justify-center"
                  onClick={closeCard}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconX className="h-6 w-6 text-white" />
                </motion.button>
                <motion.div variants={contentVariants}>
                  <CardContent description={getDescription(pressData[currentIndex])} />
                </motion.div>
                <motion.div variants={contentVariants} className="p-4 lg:px-20 mt-10">
                  <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">NextUp</h1>
                  <h1 onClick={goToNextCard} className="text-[#2997FF] inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]">
                    {pressData[(currentIndex + 1) % pressData.length]?.title || "First Card"}
                    <MdKeyboardArrowRightIcon className="ml-1 mt-1 text-[20px] md:text-[25px]" />
                  </h1>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </CarouselContext.Provider>
  );
};

export default ExploreFacilities;

"use client"


import React, { useRef, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import data from "../../../utils/aluminiSectionData/aluminiSectionData.json";

// Types
interface Amenity {
  imageSrc: string;
  title: string;
  description: string;
  date?: string;
  alt?: string;
}

interface Data {
  title: string;
  amenities: Amenity[];
  mainImage: Amenity;
}

// Animation Variants
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


const EmpowerNextGeneration: React.FC = () => {
  const { title, amenities, mainImage } = data as Data;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const openCard = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCard = () => {
    setIsOpen(false);
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % amenities.length);
  };

  useOutsideClick(containerRef, () => {
    if (isOpen) closeCard();
  });

  return (
    <section className="max-w-5xl xl:max-w-[65%] mx-auto pt-10 pb-16 overflow-hidden text-black">
      <div>
        {title && <h1 className="text-3xl text-center mb-14 md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">{title}</h1>}

        {/* Main Image Section */}
        <div className="relative">
          <Image
            src={mainImage?.imageSrc}
            alt={mainImage?.alt || mainImage?.title}
            width={1000}
            height={1000}
            className="rounded-3xl lg:w-full h-[50vh] lg:h-[500px]  object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>
          <div className="absolute mx-6 lg:mx-12 top-[120px] lg:top-[120px] left-0 w-full h-full flex justify-center flex-col">
            <h1 className="text-white lg:text-[40px] text-[21px] text-start font-bold me-8 lg:me-28">{mainImage?.title}</h1>

            <div className="flex items-center justify-between me-8 lg:me-28 mt-2">
              <p className="text-white lg:text-[20px] text-[14px] max-w-2/3">{mainImage?.description}</p>
              <button aria-label="Read More" onClick={() => openCard(0)} className="text-sm lg:text-base bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">Read More</button>
            </div>
          </div>
        </div>

        {/* Grid of Amenities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mt-16">
          {amenities?.map((amenity: Amenity, index: number) => (
            <div key={index} className="col-span-4">
              <div className="relative">
                <Image
                  src={amenity?.imageSrc}
                  alt={amenity?.alt || amenity.title}
                  width={1000}
                  height={1000}
                  className="rounded-3xl w-full h-[45vh] lg:h-[60vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute  top-[120px] lg:top-[150px] xl:top-[220px]  w-full h-full flex justify-center flex-col">
                  <h1 className="text-white text-[21px] font-bold text-center">{amenity?.title}</h1>
                 <button aria-label="Read More" onClick={() => openCard(index)} className="text-white border rounded-full py-2 mx-12 mt-6 cursor-pointer">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
                <CardContent description={amenities[currentIndex]} />
              </motion.div>
              <motion.div variants={contentVariants} className="p-4 lg:px-20 mt-10">
                <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">NextUp</h1>
                <h1 onClick={goToNextCard} className="text-[#2997FF] inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]">
                  {amenities[(currentIndex + 1) % amenities.length]?.title || "First Card"}
                  <MdKeyboardArrowRight className="ml-1 mt-1 text-[20px] md:text-[25px]" />
                </h1>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EmpowerNextGeneration;

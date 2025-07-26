"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import type { Swiper as SwiperType } from "swiper";
// CarouselDots Component
interface CarouselDotsProps {
  total: number;
  active: number;
  onDotClick?: (index: number) => void;
  className?: string;
}

function CarouselDots({ total, active, onDotClick, className }: CarouselDotsProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 p-2 rounded-4xl",
        className
      )}
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick?.(index)}
          className={cn(
            "rounded-full transition-all duration-300",
            active === index
              ? "w-3 h-3 bg-[#6DC0EB]"
              : "w-2 h-2 bg-gray-300 hover:bg-gray-600"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

const HighlightsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const dummyData = [
    {
      id: 1,
      img: "/trainingPlacementPageImages/lpa.png",
      title: "Highest Package",
      company: "",
    },
    {
      id: 2,
      img: "/trainingPlacementPageImages/hp.svg",
      title: "Best Internships",
      company: "Hewlett-Packard",
    },
    {
      id: 3,
      img: "/trainingPlacementPageImages/verifone.png",
      title: "Dream Offers",
      company: "Verifone",
    },
  ];

  // Handle dot click to navigate to specific slide
  const handleDotClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto py-28 text-black">
       <h2 className="text-3xl md:text-[40px] lg2:text-5xl  font-bold text-black text-center mb-22 ">Key Highlights</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6 px-3">
          {[
            { title: "5.6 LPA", subtitle: "Median Salary", description: "Offered to Top 5% of Student Candidates" },
            { title: "42%", subtitle: "Pre-Placement Offers", description: "of placed students received PPOs" },
            {
              title: "30%",
              subtitle: "Higher Rate of placement",
              description: "as compared to neighbouring Engineering colleges",
              link: true,
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center rounded-4xl p-6 bg-white h-full">
              <h1 className=" text-[45px] lg:text-[60px] font-[900] text-black text-center">{item.title}</h1>
              <h2 className="font-bold text-center text-[20px] text-black">{item.subtitle}</h2>
              <p className="text-xl text-center">{item.description}</p>
              {/* {item.link && (
                <p className="text-[17px] mt-3 text-[#0066CC] flex items-center">
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-xl" />
                </p>
              )} */}
            </div>
          ))}
        </div>

        {/* Center Column */}
        <div className="px-3">
          <div className="relative">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[Autoplay]} // Register Autoplay module
              autoplay={{
                delay: 2000, // 3 seconds delay between slides
                disableOnInteraction: false, // Continue autoplay after user interaction
              }}
            >
              {dummyData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-col justify-between items-center rounded-4xl p-6 bg-white h-[60vh] xl:h-[50vh]">
                    <div className="flex flex-col items-center">
                      <Image
                        src={item.img}
                        alt="trainingPlacementPageImages"
                        width={100}
                        height={100}
                        className="w-[80%] h-[30vh] object-contain"
                      />
                      <h1 className="text-2xl font-bold text-center mt-4">{item.title}</h1>
                      {item.company&&<h2 className="text-[14px] text-center">{item.company}</h2>}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Fixed CarouselDots inside the card */}
              <div className="absolute bottom-6 left-0 right-0 z-10">
                <CarouselDots
                  total={dummyData.length}
                  active={activeIndex}
                  onDotClick={handleDotClick}
                  className="bg-white"
                />
              </div>
            </Swiper>
          </div>

          {/* Static second card */}
          <div className="flex flex-col justify-center items-center rounded-4xl p-6 bg-white mt-5 lg:mt-7">
            <h1 className=" text-[45px] lg:text-[60px] font-[900] text-black text-center">220+</h1>
            <h2 className="font-bold text-center text-[20px] text-black">Companies Visited on Campus</h2>
            <p className="text-xl text-center">Offered to Top 5% of Student Candidates</p>
            {/* <p className="text-[17px] mt-3 text-[#0066CC] flex items-center">
              View Profile
              <MdKeyboardArrowRight className="ml-1 text-xl" />
            </p> */}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 px-3">
          {[
            { title: "3.25 LPA", subtitle: "Average Salary", description: "Statistics based on 2023-24 Batch Data" },
            { title: "18%", subtitle: "Students Pursuing Higher Studies", description: "" },
            {
              title: "98%",
              subtitle: "Internship Completion Rate",
              description: "completed at least one internship before graduation",
              link: true,
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center rounded-4xl p-6 bg-white h-full">
              <h1 className=" text-[45px] lg:text-[60px] font-[900] text-black text-center">{item.title}</h1>
              <h2 className="font-bold text-center text-[20px] text-black">{item.subtitle}</h2>
              <p className="text-xl text-center">{item.description}</p>
              {/* {item.link && (
                <p className="text-[17px] mt-3 text-[#0066CC] flex items-center">
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-xl" />
                </p>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
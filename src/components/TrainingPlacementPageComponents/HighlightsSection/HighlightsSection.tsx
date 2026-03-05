"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Autoplay } from "swiper/modules";
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
    <div className={cn("flex items-center justify-center gap-2 p-2 rounded-4xl", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick?.(index)}
          className={cn(
            "rounded-full transition-all duration-300",
            active === index ? "w-3 h-3 bg-[#6DC0EB]" : "w-2 h-2 bg-gray-300 hover:bg-gray-600"
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
      img: "/trainingPlacementPageImages/verifone1.png",
      title: "Verifone",
      company: "",
    },
  ];

  const handleDotClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto py-16 lg:pb-16 lg:pt-20 text-[#1D1D1F]">
      <h2 className="text-3xl md:text-[40px] lg2:text-5xl font-bold text-[#1D1D1F] text-center mb-10 lg:mb-16">Key Highlights</h2>

      {/* GRID WITH FIXED ROW HEIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-6 lg:[grid-auto-rows:1fr]">
        {/* Left Column */}
        {[
          { title: "5.6 LPA", subtitle: "Median Salary", description: "Offered to Top 5% of Student Candidates" },
          { title: "100%", subtitle: "Internship Completion Rate", description: "completed at least one internship before graduation" },

          // {
          //   title: "30%",
          //   subtitle: "Higher Rate of placement",
          //   description: "Recognized for strong industry-academia connect leading to higher placements",
          //   link: true,
          // },
        ].map((item, index) => (
          <div
            key={`left-${index}`}
            className={cn(
              "flex flex-col justify-center items-center rounded-4xl p-6 bg-white h-full",
              "lg:col-start-1",
              index === 0 && "lg:row-start-1",
              index === 1 && "lg:row-start-2",
              index === 2 && "lg:row-start-3"
            )}
          >
            <h1 className="text-[45px] lg:text-[60px] font-[900] text-[#1D1D1F] text-center">{item.title}</h1>
            <h2 className="font-bold text-center text-[20px] text-[#1D1D1F]">{item.subtitle}</h2>
            <p className="text-xl text-center">{item.description}</p>
          </div>
        ))}

        {/* Center Column - Swiper (Row Span 2) */}
        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 h-full">
          <div className="relative h-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="h-full rounded-4xl"
            >
              {dummyData.map((item) => (
                <SwiperSlide key={item.id} className="h-full">
                  <div className="flex flex-col justify-between items-center rounded-4xl p-6 bg-white h-full">
                    <div className="flex flex-col items-center justify-center pb-10 h-full w-full">
                      <Image src={item.img} alt="trainingPlacementPageImages" width={100} height={100} className="w-[70%]  object-contain" />
                      <h1 className="text-2xl font-bold text-center mt-4">{item.title}</h1>
                      {item.company && <h2 className="text-[14px] text-center">{item.company}</h2>}
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="absolute bottom-6 left-0 right-0 z-10">
                <CarouselDots total={dummyData.length} active={activeIndex} onDotClick={handleDotClick} className="bg-white/80 backdrop-blur-sm" />
              </div>
            </Swiper>
          </div>
        </div>

        {/* Center Column - Third Row Card */}
        <div className="flex flex-col justify-center items-center rounded-4xl p-6 bg-white h-full lg:col-start-2 lg:row-start-3">
          {/* <h1 className="text-[45px] lg:text-[60px] font-[900] text-[#1D1D1F] text-center">100%</h1> */}
          <h2 className="font-bold text-center text-[20px] text-[#1D1D1F]">Premier Hiring Partners</h2>
          <p className="text-xl text-center"> (Recruiting Across Core and Emerging Domain)</p>
        </div>

        {/* Right Column */}
        {[
           { title: "220+", subtitle: "Companies Visited on Campus", description: "Consistently recruiting across all branches of engineering" },
          { title: "18%", subtitle: "Students Pursuing Higher Studies", description: "" },
          // {
          //   title: "100%",
          //   subtitle: "Internship Completion Rate",
          //   description: "completed at least one internship before graduation",
          // },
        ].map((item, index) => (
          <div
            key={`right-${index}`}
            className={cn(
              "flex flex-col justify-center items-center rounded-4xl p-6 bg-white h-full",
              "lg:col-start-3",
              index === 0 && "lg:row-start-1",
              index === 1 && "lg:row-start-2",
              index === 2 && "lg:row-start-3"
            )}
          >
            <h1 className="text-[45px] lg:text-[60px] font-[900] text-[#1D1D1F] text-center">{item.title}</h1>
            <h2 className="font-bold text-center text-[20px] text-[#1D1D1F]">{item.subtitle}</h2>
            <p className="text-xl text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;

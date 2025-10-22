"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Pause, Play } from "@/components/Icons/Icons";

interface DataItem {
  title: string;
  description: string;
  icon: string;
}

const FunctionDepartment = ({
  title,
  functionDeprtmentData,
}: {
  title: string;
  functionDeprtmentData: DataItem[];
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isPlay, setIsPlay] = useState(true);
  const [progress, setProgress] = useState(0);

  const autoplayDelay = 3000;
  const CIRCUMFERENCE = 138;
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  const startProgressAnimation = () => {
    cancelAnimationFrame(animationFrameRef.current || 0);
    startTimeRef.current = performance.now();
    isAnimatingRef.current = true;

    const animate = (now: number) => {
      if (!isAnimatingRef.current) return;
      const elapsed = now - (startTimeRef.current || 0);
      const percentage = Math.min((elapsed / autoplayDelay) * 100, 100);
      setProgress(percentage);
      if (percentage < 100) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const stopProgressAnimation = () => {
    isAnimatingRef.current = false;
    cancelAnimationFrame(animationFrameRef.current || 0);
  };

  const resetProgress = () => {
    stopProgressAnimation();
    setProgress(0);
  };

  const togglePlayPause = () => {
    if (swiperRef.current) {
      if (isPlay) {
        swiperRef.current.autoplay.stop();
        stopProgressAnimation();
      } else {
        swiperRef.current.autoplay.start();
        startProgressAnimation();
      }
      setIsPlay(!isPlay);
    }
  };

  const onSlideChange = () => {
    resetProgress();
    if (isPlay) startProgressAnimation();
  };

  useEffect(() => {
    if (isPlay) startProgressAnimation();
    return () => stopProgressAnimation();
  }, [isPlay]);

  return (
    <section className="lg:ml-16 py-24 xl:py-36 xl:ml-60">
      {title && (
        <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl leading-[1.2] font-bold text-center text-[#1D1D1F] pb-6 xl:pb-22">
          {title}
        </h1>
      )}

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
        }}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          try {
            if (swiper?.autoplay && !swiper.autoplay.running) {
              swiper.autoplay.start();
              setIsPlay(true);
              resetProgress();
              startProgressAnimation();
            }
          } catch {}
        }}
        onSlideChange={onSlideChange}
      >
        {functionDeprtmentData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-sm h-[25vh] lg:h-[30vh] p-6 bg-[#ffffff] rounded-2xl">
              <div className="mb-4">
                <Image src={item.icon} alt="Icon" width={30} height={30} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center mt-9 me-8 gap-4">
        {/* Play/Pause Button with Progress Circle */}
        <div
          className="relative lg:pe-5 md:pb-0 md:pe-3 lg:pb-0 cursor-pointer"
          onClick={togglePlayPause}
        >
          <svg width="50" height="50" viewBox="0 0 50 50">
            {/* Background Circle */}
            <circle
              cx="25"
              cy="25"
              r="22"
              stroke="#ffff"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            {/* Progress Circle */}
            <circle
              cx="25"
              cy="25"
              r="22"
              stroke="#E8E8ED"
              strokeWidth="2"
              fill="none"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={((100 - progress) / 100) * CIRCUMFERENCE}
              strokeLinecap="round"
              style={{
                transition: isPlay ? "stroke-dashoffset 0.05s linear" : "none",
              }}
              transform="rotate(-90 25 25)"
            />
            {/* Play/Pause Icon */}
            <foreignObject x="9" y="8" width="32" height="32">
              <button
                className="w-full h-full cursor-pointer flex items-center justify-center"
                aria-label={isPlay ? "Pause" : "Play"}
              >
                {isPlay ? <Pause /> : <Play />}
              </button>
            </foreignObject>
          </svg>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
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
        </div>
      </div>
    </section>
  );
};

export default FunctionDepartment;

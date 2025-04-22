"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { CiPlay1, CiPause1 } from "react-icons/ci";

interface DataItem {
  title: string;
  description: string;
  icon: string;
}

const data: DataItem[] = [
  {
    title: "Counselling & Mental Health Support",
    description: "Offers psychological counselling services for stress, anxiety, and personal issues.",
    icon: "/studentWelfarePage/self-love.svg",
  },
  {
    title: "Student Grievance Redressal",
    description: "Addresses students' complaints and concerns related to academics, facilities, or any institutional issues.",
    icon: "/studentWelfarePage/2.svg",
  },
  {
    title: "Accommodation & Hostel Facilities",
    description: "Ensures safe and comfortable housing for students, especially those from out of town.Manages hostel services and addresses related issues.",
    icon: "/studentWelfarePage/3.svg",
  },
  {
    title: "Career Guidance ",
    description: "Organizes career counselling and skill development programs.",
    icon: "/studentWelfarePage/4.svg",
  },
  {
    title: "Career Guidance & Placement Support",
    description: "Provides career counselling, resume building, and interview preparation.",
    icon: "/studentWelfarePage/self-love.svg",
  },
  {
    title: "Self-Care Workshops",
    description: "Organizes workshops focused on self-care practices and mental wellness.",
    icon: "/studentWelfarePage/2.svg",
  },
  {
    title: "Peer Support Programs",
    description: "Facilitates peer support groups for students to share experiences and coping strategies.",
    icon: "/studentWelfarePage/3.svg",
  },
];

const FunctionDepartment = () => {
  const swiperRef = useRef<any>(null);
  const [isPlay, setIsPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const autoplayDelay = 3000; // Swiper autoplay delay in ms

  // Handle play/pause toggle
  const togglePlayPause = () => {
    if (swiperRef.current) {
      if (isPlay) {
        swiperRef.current.autoplay.stop();
        setProgress(0); // Reset progress when pausing
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlay(!isPlay);
    }
  };

  // Handle Swiper's autoplay time left to sync progress
  const handleAutoplayTimeLeft = (_swiper: any, _time: number, progress: number) => {
    // Progress is a value from 0 to 1; convert to 0-100 for the circle
    setProgress((1 - progress) * 100);
  };

  return (
    <section className="lg:ml-20 ml-6 py-14">
      <h1 className="text-[45px] text-black font-bold pb-6">Functions of the Department</h1>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
        }}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onAutoplayTimeLeft={handleAutoplayTimeLeft} // Sync progress with autoplay
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-sm h-[25vh] lg:h-[30vh] p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="mb-4">
                <Image src={item.icon} alt="Mental Health Icon" width={30} height={30} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between items-center mt-9 me-8 gap-4">
        {/* Play/Pause Button with Progress Circle */}
        <div
          className="relative lg:pe-5  md:pb-0 md:pe-3 lg:pb-0 cursor-pointer"
          onClick={togglePlayPause}
        >
          <svg width="50" height="50" viewBox="0 0 50 50">
            {/* Background Circle */}
            <circle cx="25" cy="25" r="22" stroke="#e8e8ed" strokeWidth="2" fill="none" opacity="0.3" />
            {/* Progress Circle */}
            <circle
              cx="25"
              cy="25"
              r="22"
              stroke="#e8e8ed"
              strokeWidth="2"
              fill="none"
              strokeDasharray={138}
              strokeDashoffset={(1 - progress / 100) * 138}
              strokeLinecap="round"
              className="transition-all duration-100"
              transform="rotate(-90 25 25)"
            />
            {/* Play/Pause Icon */}
            <foreignObject x="14" y="14" width="22" height="22">
              <button
                className="w-full h-full flex items-center justify-center"
                aria-label={isPlay ? "Pause" : "Play"}
              >
                {isPlay ? (
                  <CiPause1 className="text-2xl text-[#666668]" />
                ) : (
                  <CiPlay1 className="text-2xl text-[#666668]" />
                )}
              </button>
            </foreignObject>
          </svg>
        </div>
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
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
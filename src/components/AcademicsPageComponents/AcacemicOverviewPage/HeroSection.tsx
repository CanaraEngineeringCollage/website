"use client";
import React, { useState, useRef } from "react";
import { CiPlay1 } from "react-icons/ci";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true); // Video starts playing (autoPlay)
  const [progress, setProgress] = useState<number>(0); // Progress for the circle animation

  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress based on video time
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progressPercent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progressPercent);
    }
  };

  return (
    <section className="overflow-hidden">
      <div className="relative ">
        <video ref={videoRef} autoPlay loop muted playsInline onTimeUpdate={handleTimeUpdate} width="100%">
          <source src="https://res.cloudinary.com/dvandhsai/video/upload/v1745837783/c5v1wbxhe0mmoulpco0w.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-[80] left-[150] lg:top-[370] lg:left-[600] w-full h-full flex items-center justify-center">
          <div className="relative lg:pe-5 md:pb-0 md:pe-3 lg:pb-0 cursor-pointer" onClick={togglePlayPause}>
            <svg width="50" height="50" viewBox="0 0 50 50">
              {/* Background Circle */}
              <circle cx="25" cy="25" r="22" stroke="#ffff" strokeWidth="2" fill="none" opacity="0.3" />
              {/* Progress Circle */}
              <circle
                cx="25"
                cy="25"
                r="22"
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
                strokeDasharray={138}
                strokeDashoffset={(1 - progress / 100) * 138}
                strokeLinecap="round"
                className="transition-all duration-100"
                transform="rotate(-90 25 25)"
              />
              {/* Play/Pause Icon */}
              <foreignObject x="9" y="9" width="32" height="32">
                <button className="w-full h-full  flex items-center justify-center" aria-label={isPlaying ? "Pause" : "Play"}>
                  {isPlaying ? (
                    <svg width="27" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.851562" width="36" height="36" rx="18" fill="#E8E8ED" />
                      <path
                        d="M15.25 11.8516H13.75C12.9216 11.8516 12.25 12.5231 12.25 13.3516V24.3516C12.25 25.18 12.9216 25.8516 13.75 25.8516H15.25C16.0784 25.8516 16.75 25.18 16.75 24.3516V13.3516C16.75 12.5231 16.0784 11.8516 15.25 11.8516Z"
                        fill="black"
                        fillOpacity="0.56"
                      />
                      <path
                        d="M23.25 11.8516H21.75C20.9216 11.8516 20.25 12.5231 20.25 13.3516V24.3516C20.25 25.18 20.9216 25.8516 21.75 25.8516H23.25C24.0784 25.8516 24.75 25.18 24.75 24.3516V13.3516C24.75 12.5231 24.0784 11.8516 23.25 11.8516Z"
                        fill="black"
                        fillOpacity="0.56"
                      />
                    </svg>
                  ) : (
                    <CiPlay1 className="text-2xl text-white" />
                  )}
                </button>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

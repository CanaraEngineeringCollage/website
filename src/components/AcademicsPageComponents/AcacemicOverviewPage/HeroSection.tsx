"use client";
import { Pause, Play } from "@/components/Icons/Icons";
import React, { useState, useRef } from "react";


const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Video starts playing (autoPlay)
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
        <video poster="https://res.cloudinary.com/dvandhsai/image/upload/v1745992886/yo2pznifvoxm6oyrstos.jpg" ref={videoRef}  loop  playsInline onTimeUpdate={handleTimeUpdate} width="100%">
          <source src="https://res.cloudinary.com/dvandhsai/video/upload/v1745992871/wegj2d2goq3ninxf6vea.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 w-full  p-4 z-10 flex flex-row justify-end ">
          
          <div className="flex gap-4">
            
            <div className="cursor-pointer" onClick={togglePlayPause}>
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
                <foreignObject x="9" y="8" width="32" height="32">
                  <button className="w-full cursor-pointer h-full flex items-center justify-center" aria-label={isPlaying ? "Pause" : "Play"}>
                    {isPlaying ? (
                     <Pause/>
                    ) : (
                      <Play/>
                    )}
                  </button>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client"
import React, { useState, useRef } from 'react';
import { CiPause1, CiPlay1 } from 'react-icons/ci';

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
      const progressPercent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progressPercent);
    }
  };

  return (
    <section className='overflow-hidden'>
      <div className="relative ">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-[80] left-[150] lg:top-[370] lg:left-[600] w-full h-full flex items-center justify-center">
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
                stroke="#ffff"
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
                  className="w-full h-full  flex items-center justify-center"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <CiPause1 className="text-2xl  text-white" />
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
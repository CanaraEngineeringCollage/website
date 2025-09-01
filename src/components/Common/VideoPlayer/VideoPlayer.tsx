"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  youtubeUrl: string; // can be full URL OR raw videoId
  videoUrl?: string;
  title?: string;
  subTitle?: string;
  thumbnail?: string;
  titleClassname?: string;
  startTime?: number; // in seconds
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  youtubeUrl,
  videoUrl,
  title,
  subTitle,
  thumbnail,
  titleClassname,
  startTime,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(youtubeUrl);

  // Universal extractor for videoId
  function extractVideoId(input: string): string | null {
    try {
      // Case 1: If input is a raw YouTube ID (11 chars, valid pattern)
      if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
        return input;
      }

      // Case 2: Otherwise, try parsing as a URL
      const parsed = new URL(input);

      // Handle normal watch links: ?v=xxxx
      if (parsed.searchParams.has("v")) {
        return parsed.searchParams.get("v");
      }

      // Handle short links: youtu.be/xxxx
      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.split("/")[1];
      }

      // Handle embed links: youtube.com/embed/xxxx
      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/embed/")[1];
      }

      return null;
    } catch {
      return null;
    }
  }

  const videoId = useMemo(() => extractVideoId(youtubeUrl), [youtubeUrl]);

  if (!videoId) {
    return <div className="text-red-500">Invalid YouTube URL or ID</div>;
  }

  const thumbnailUrl =
    thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  console.log(thumbnailUrl, "tt");



  return (
    <div className="overflow-hidden  max-w-5xl mx-auto xl:max-w-[65%] rounded-4xl px-6 md:px-0 py-">
      <div className="mx-auto text-center text-white mb-10">
        {title && (
          <h2
            className={cn(
              titleClassname,
              "text-3xl md:text-[40px] max-w-4xl mx-auto lg2:text-5xl xl:text-6xl font-bold mb-5"
            )}
          >
            {title}
          </h2>
        )}
        {subTitle && (
          <p className="font-medium md:text-2xl text-base text-white/60 max-w-4xl mx-auto">
            {subTitle}
          </p>
        )}
      </div>

      <div
        className={cn(
          "relative w-full lg:max-h-[600px] mx-auto aspect-video rounded-4xl overflow-hidden"
        )}
      >
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src={thumbnailUrl}
                alt="Video thumbnail"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
                priority
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[50px] h-[50px] lg:w-[90px] lg:h-[90px] bg-black/40 rounded-full flex items-center justify-center">
                  <svg
                    className="w-[15px] lg:w-full"
                    width="30"
                    height="30"
                    viewBox="0 0 48 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.799316 56.4523C0.799316 58.019 2.51897 58.9774 3.85138 58.1533L46.8836 31.537C48.1445 30.7571 48.1483 28.9244 46.8906 28.1394L3.8583 1.28007C2.52616 0.448593 0.799316 1.40637 0.799316 2.9767V56.4523Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isPlaying && (
          <motion.iframe
            key="video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1${startTime ? `&start=${startTime}` : ""
              }`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

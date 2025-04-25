"use client";
import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

interface YoutubeSectionProps {
  url: string;
}

// Helper function to extract video ID from a YouTube URL
const getYouTubeVideoId = (url: string): string | null => {
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const YoutubeSection: React.FC<YoutubeSectionProps> = ({ url }) => {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) return <p className="text-center text-red-500">Invalid YouTube URL</p>;

  return (
    <section className="px-6 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto xl:max-w-[75%]">
      <div className="flex justify-center">
        <div className="w-full mx-auto rounded-2xl aspect-video">
          <YouTubeEmbed
            videoid={videoId}
            playlabel="Explore campus"
            params="rel=0&autoplay=0"
            style="width: 100%; height: 100%;"
          />
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;

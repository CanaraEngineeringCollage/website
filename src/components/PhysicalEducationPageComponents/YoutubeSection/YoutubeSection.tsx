"use client";
import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

const YoutubeSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto xl:max-w-[75%]">
      <h1 className="text-black mb-10 text-center text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">
        Modern Amenities for Everyday Comfort
      </h1>

      <div className="flex justify-center">
        <div className="w-full  mx-auto rounded-2xl aspect-video">
          <YouTubeEmbed videoid="yFyIBKK361E" playlabel="Explore campus" params="rel=0&autoplay=0" style="width: 100%; height: 100%;" />
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;

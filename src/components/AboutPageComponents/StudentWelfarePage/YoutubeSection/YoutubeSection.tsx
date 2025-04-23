"use client";
import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

const CampusTour: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 xl:px-0">
      <div className="flex justify-center">
        <div className="w-full lg:max-w-7xl xl:max-w-[75%] mx-auto rounded-2xl aspect-video">
          <YouTubeEmbed
            videoid="yFyIBKK361E"
            playlabel="Explore campus"
            params="rel=0&autoplay=0"
            style="width: 100%; height: 100%;"
          />
        </div>
      </div>
    </section>
  );
};

export default CampusTour;
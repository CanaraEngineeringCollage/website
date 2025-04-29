"use client";
import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

const StudentTour: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-16 xl:px-0 md:py-40 py-20 ">
    

      <div className="lg:max-w-7xl xl:max-w-[75%]  mx-auto rounded-2xl overflow-hidden shadow-xl aspect-video">
        <YouTubeEmbed playlabel="Explore campus" videoid="yFyIBKK361E" params="rel=0&autoplay=0" />
      </div>
    </section>
  );
};

export default StudentTour;

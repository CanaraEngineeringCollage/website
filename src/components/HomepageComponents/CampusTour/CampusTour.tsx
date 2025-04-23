"use client";
import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

const CampusTour: React.FC = () => {
  return (
    <section className="w-full bg-[#144A72] px-6 md:px-12 lg:px-16 xl:px-0 md:py-40 py-20 ">
      <div className="max-w-4xl mx-auto text-center text-white mb-16">
        <h2 className="md:text-6xl text-3xl  font-extrabold   mb-5">Experience the Campus</h2>
        <p className=" font-medium md:text-2xl text-base text-white/60">
          Explore the campus with a virtual tour & discover one among the
          <br />
          best colleges in the region.
        </p>
      </div>

      <div className="lg:max-w-7xl xl:max-w-[75%]  mx-auto rounded-2xl overflow-hidden shadow-xl aspect-video">
        <YouTubeEmbed playlabel="Explore campus" videoid="yFyIBKK361E" params="rel=0&autoplay=0" />
      </div>
    </section>
  );
};

export default CampusTour;

import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Canara Engineering College",
  description: "This page is currently under construction. Stay tuned for updates!",
};

const ComingSoonPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
            <span className="text-9xl font-bold text-gray-300">CIF</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-textGray">
            Coming <span className=" text-textGray">Soon</span>
          </h1>
        </div>

        <p className="mt-4 text-xl text-secondary">We're working hard to bring you the CIF page. Stay tuned!</p>

       
      </div>
    </div>
  );
};

export default ComingSoonPage;

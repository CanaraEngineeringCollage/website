"use client";
import { Card, Carousel } from "@/components/ui/apple-style-card";
import Image from "next/image";
import React from "react";
import image1 from "../../../../public/homePageAppleCardImages/image1.png";

export function ExplorePrograms() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">Explore our programs</h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/homePageAppleCardImages/1.png",
    content:" Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya"
    
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/homePageAppleCardImages/2.png",
    content:" Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya"
    
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/homePageAppleCardImages/3.png",
    content:" Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya"
    
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/homePageAppleCardImages/4.png",
    content:" Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya"
    
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/homePageAppleCardImages/4.png",
    content:" Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya"
    
  },
  
];

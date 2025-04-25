"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CarouselDotsProps {
  total: number;
  active: number;
  onDotClick?: (index: number) => void;
  className?: string;
}

export function CarouselDots({
  total,
  active,
  onDotClick,
  className,
}: CarouselDotsProps) {
  return (
    <div
      className={cn(
        "flex items-center ml-10 gap-2  p-2 rounded-4xl",
        className
      )}
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick?.(index)}
          className={cn(
            "h-10 rounded-full transition-all duration-300",
            active === index
              ? "w-3 h-3 bg-[#6DC0EB]"
              : "w-2 h-2 bg-gray-300 hover:bg-gray-600"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
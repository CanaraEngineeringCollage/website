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
        "flex items-center justify-center gap-2 bg-black/50 p-2 rounded-4xl",
        className
      )}
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick?.(index)}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            active === index
              ? "w-8 bg-gray-300"
              : "w-2 bg-gray-300 hover:bg-gray-600"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
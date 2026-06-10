import React from "react";
import { Book } from "lucide-react";

export interface HighlightItem {
  icon?: React.ReactNode | string;
  title: string;
}

export interface ProgrammeHighlightsProps {
  title?: string;
  description?: string;
  highlights: HighlightItem[];
}

const ProgrammeHighlights = ({
  title = "Programme Highlights",
  description,
  highlights=[ ],
}: ProgrammeHighlightsProps) => {
  return (
    <div className="py-12 px-6 w-full">
      <div className="max-w-7xl xl:max-w-[75%] mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#1D1D1F] mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-textGray text-left text-[18px]  mb-12">
            {description}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="shrink-0 text-primary">
                {item.icon ? (
                  typeof item.icon === "string" ? (
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    item.icon
                  )
                ) : (
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2884CA]">
                    <Book size={36} />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium text-[#1D1D1F] leading-snug max-w-[160px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammeHighlights;

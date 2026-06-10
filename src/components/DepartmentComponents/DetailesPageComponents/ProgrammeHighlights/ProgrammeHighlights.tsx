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
    <div className="py-10 px-4 md:px-8 text-center ">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#1D1D1F] mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-textGray text-center text-[20px] max-w-3xl mx-auto mb-16 leading-relaxed">
          {description}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
        {highlights.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-start">
            <div className="mb-4 text-primary">
              {item.icon ? (
                typeof item.icon === "string" ? (
                  <img src={item.icon} alt={item.title} className="w-20 h-20 object-contain" />
                ) : (
                  item.icon
                )
              ) : (
                // Dummy Icon placeholder
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2884CA]">
                  <Book size={40} />
                </div>
              )}
            </div>
            <h3 className="text-lg font-medium text-[#1D1D1F] text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammeHighlights;

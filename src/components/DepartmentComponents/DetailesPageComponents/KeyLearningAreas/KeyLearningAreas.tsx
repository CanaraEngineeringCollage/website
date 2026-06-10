import React from "react";
import { Book } from "lucide-react";

export interface LearningAreaItem {
  icon?: React.ReactNode | string;
  title: React.ReactNode | string;
}

export interface KeyLearningAreasProps {
  title?: string;
  description?: string;
  areas: LearningAreaItem[];
}

const KeyLearningAreas = ({
  title = "Key Learning Areas",
  description,
  areas = [],
}: KeyLearningAreasProps) => {
  return (
    <div className="py-12 px-6 w-full">
      <div className="max-w-7xl xl:max-w-[75%] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1D1D1F] mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-textGray text-left text-[20px] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
          {areas.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="shrink-0 text-primary">
                {item.icon ? (
                  typeof item.icon === "string" ? (
                    <img src={item.icon} alt="icon" className="w-16 h-16 object-contain" />
                  ) : (
                    item.icon
                  )
                ) : (
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2884CA]">
                    <Book size={36} />
                  </div>
                )}
              </div>
              <h3 className="text-lg md:text-[20px] font-medium text-[#1D1D1F] leading-snug max-w-[200px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyLearningAreas;

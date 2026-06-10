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
    <div className="py-10 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#1D1D1F]  mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-textGray text-left text-[20px]  leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto_auto] justify-between gap-y-10">
        {areas.map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className="flex-shrink-0 text-primary">
              {item.icon ? (
                typeof item.icon === "string" ? (
                  <img src={item.icon} alt="icon" className="md:w-20 md:h-20 w-14 h-14 object-contain" />
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
            <h3 className="text-lg md:text-[20px] font-medium text-[#1D1D1F] leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyLearningAreas;

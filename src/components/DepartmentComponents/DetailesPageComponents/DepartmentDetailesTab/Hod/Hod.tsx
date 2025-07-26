import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface HodProps {
  data?: {
    messageFromtheDepartmentHead?: string;
    name?: string;
    position?: string;
    imageUrl?: string;
  };
}

const Hod: React.FC<HodProps> = ({ data }) => {
  // Detect screen size
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1600px)' });

  // Split the message into sentences
  const sentences = data?.messageFromtheDepartmentHead?.split(/(?<=\.)\s+/).filter(Boolean) || [];
  const sentenceCount = isLargeScreen ? 5 : 3;
  const firstPart = sentences.slice(0, sentenceCount).join(' ');
  const remainingPart = sentences.slice(sentenceCount).join(' ');

  return (
    <div className="lg:px-24 mx-5 text-[#86868B] text-[17px]">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={data?.imageUrl}
          alt={data?.name}
          className="w-48  object-cover rounded-lg shadow flex-shrink-0"
        />
        <div className="flex-1 flex flex-col justify-start ">
          <p className=" text-[14px] md:text-lg leading-7 text-justify text-textGray">
            {firstPart}
          </p>
        </div>
      </div>

      {remainingPart && (
        <p className="mb-4 text-[14px] md:text-lg leading-7 text-justify text-textGray">
          {remainingPart}
        </p>
      )}

      <div className="mt-2 font-semibold text-[#1D1D1F]">{data?.name}</div>
      <div className="text-sm text-gray-500">{data?.position}</div>
    </div>
  );
};

export default Hod;

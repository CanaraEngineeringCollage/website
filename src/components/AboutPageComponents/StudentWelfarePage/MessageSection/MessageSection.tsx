import Image, { StaticImageData } from "next/image";
import React from "react";

interface MessageSectionProps {
  officer: {
    name: string;
    position: string;
    imageUrl: StaticImageData | string;
    message: string;
  };
}

const MessageSection: React.FC<MessageSectionProps> = ({ officer }) => {
  return (
    <section className="w-full bg-[#051B2C]">
      <div className="py-16 md:py-20 lg:py-24">
        <h1 className="text-3xl lg:hidden text-center lg:text-start mb-10 md:text-[40px] leading-[1.2] lg2:text-5xl font-bold">
                    MESSAGE FROM THE DEAN - STUDENT WELFARE
        </h1>

        <div className="grid grid-cols-1 lg:w-[70%] overflow-hidden mx-auto lg:grid-cols-12 items-center">
          {/* Mobile Image Section */}
          <div className="lg:hidden block">
            <div className="flex flex-col items-center lg:ms-46 ms-1">
              <div className="w-72 md:w-80 h-96 relative overflow-hidden shadow-md rounded-xl">
                <Image
                  fill
                  src={officer.imageUrl}
                  alt={officer.name}
                  className="object-cover bg-[#6dc0eb]"
                />
              </div>
              <p className="mt-4 text-center text-[27px] font-bold text-white">
                {officer.name}
              </p>
              <p className="text-[17px] text-white">{officer.position}</p>
            </div>
          </div>

          {/* Message Section */}
          <div className="col-span-7 lg2:px-0 lg:px-0 md:px-6 px-0">
            <h1 className="text-3xl hidden lg:block text-center lg:text-start my-10 md:text-[40px] leading-[1.2] lg2:text-[40px] xl:text-5xl font-bold">
              MESSAGE FROM THE  <br className="hidden lg:block" /> DEAN - STUDENT WELFARE
            </h1>
            <p className="text-[17px] mt-6 lg:mt-0 text-white text-justify lg:leading-[1.7]">
              {officer.message}
            </p>
          </div>

          <div className="col-span-1"></div>

          {/* Desktop Image Section */}
          <div className="hidden col-span-4 lg:block ms-1">
            <div className="flex flex-col items-center w-full">
              <div className="w-72 md:w-80 h-96 relative overflow-hidden shadow-md rounded-xl">
                <Image
                  src={officer.imageUrl}
                  fill
                  alt={officer.name}
                  className="object-cover bg-[#6dc0eb]"
                />
              </div>
              <p className="mt-4 text-center text-[27px] font-bold text-white">
                {officer.name}
              </p>
              <p className="text-[17px] text-white text-justify">
                {officer.position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;

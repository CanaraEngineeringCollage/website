import Image, { StaticImageData } from "next/image";
import React from "react";

interface DepartmentHead {
    name: string;
    position: string;
    imageUrl: StaticImageData | string;
    messageFromtheDepartmentHead: string;
}
interface DepartmentHeadMessageProps {
    depatmentHead: DepartmentHead;
  }
  

  const DepartmentHeadMessage: React.FC<DepartmentHeadMessageProps> = ({ depatmentHead }) => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto py-24 my-24">
      <div className=" grid  lg:grid-cols-2 lg:gap-10 lg:px-10 xl:px-40">
        <div className="block lg:hidden">
          <div className="flex lg:hidden flex-col items-center flex-shrink-0 mx-auto lg:px-20">
            <div className="w-80  h-96 relative rounded-xl overflow-hidden shadow-md">
              <Image fill src={depatmentHead.imageUrl} alt="Sri Ammembal Subba Rao Pai"  className="object-cover bg-[#6dc0eb]" />
            </div>
            <p className="mt-4 text-center text-[27px] font-bold text-white">{depatmentHead.name}</p>
            <p className="text-[17px] text-[#76838b]">{depatmentHead.position}</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl text-start my-10 md:text-[40px] leading-[1.1] lg2:text-5xl  font-bold"> Message from the Department&rsquo;s Head</h1>
          <p className="text-[17px] text-[#76838b] text-start">
            {depatmentHead.messageFromtheDepartmentHead}
          </p>
        </div>
        <div>
          <div className="hidden lg:flex flex-col items-center flex-shrink-0 mx-auto lg:px-20">
            <div className="w-96  h-[450px] relative rounded-xl overflow-hidden shadow-md">
            <Image src={depatmentHead.imageUrl} fill alt="Sri Ammembal Subba Rao Pai"  className="object-cover bg-[#6dc0eb]" />
            </div>
            <p className="mt-4 text-center text-[27px] font-bold text-white">{depatmentHead.name}</p>
            <p className="text-[17px] text-[#76838b]">{depatmentHead.position}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentHeadMessage;

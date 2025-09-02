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
    <section className="w-full bg-[#051B2C]">
      <div className=" py-16  md:py-20 lg:py-24">
    <div className="grid grid-cols-1 lg:w-[70%] overflow-hidden mx-auto lg:grid-cols-12  items-center">

          <div className=" lg:hidden block">
           {/* Image Section */}
      <div className="flex flex-col items-center lg:ms-46 ms-1">
        <div className="w-72 md:w-80 h-96 relative overflow-hidden shadow-md rounded-xl">
              <Image fill src={depatmentHead.imageUrl} alt="Sri Ammembal Subba Rao Pai"  className="object-cover bg-[#6dc0eb]" />
            </div>
            <p className="mt-4 text-center text-[27px] font-bold text-white">{depatmentHead.name}</p>
            <p className="text-[17px] text-[#76838b]">{depatmentHead.position}</p>
          </div>
        </div>
         <div className="col-span-7">
          <h1 className="text-3xl text-center lg:text-start my-10 md:text-[40px] leading-[1.2] lg2:text-5xl  font-bold"> Message from the Department&rsquo;s Head</h1>
          <p className="text-[17px] text-[#76838b] text-start ">
            {depatmentHead.messageFromtheDepartmentHead}
          </p>
        </div>
        <div className=" col-span-1"></div>
        <div className=" hidden col-span-4   lg:block ms-1">
        <div className="flex flex-col items-center   w-full ">
        <div className="w-72 md:w-80 h-96 relative overflow-hidden shadow-md rounded-xl">
            <Image src={depatmentHead.imageUrl} fill alt="Sri Ammembal Subba Rao Pai"  className="object-cover bg-[#6dc0eb]" />
            </div>
            <p className="mt-4 text-center text-[27px] font-bold text-white">{depatmentHead.name}</p>
            <p className="text-[17px] text-[#76838b]">{depatmentHead.position}</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DepartmentHeadMessage;
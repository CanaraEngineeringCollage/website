import Image from "next/image";
import React from "react";
import img from "../../../../../public/aboutPageImages/SecretaryImage/image.png";

const SecretaryMessage = () => {
  return (
   <section className="w-full bg-[#051B2C]">
  {/* ✅ Container with equal padding left/right */}
  <div className=" py-16  md:py-20 lg:py-24">
    <div className="grid grid-cols-1 w-[70%] overflow-hidden mx-auto lg:grid-cols-12  items-center">


      <div className=" lg:hidden block">
           {/* Image Section */}
      <div className="flex flex-col items-center lg:ms-46 ms-1">
        <div className="w-72 md:w-80 h-96 relative overflow-hidden shadow-md rounded-xl">
          <Image
            src={img}
            alt="M. Ranganath Bhat"
            className="object-cover bg-[#6dc0eb]"
          />
        </div>
        <p className="mt-4 text-center text-2xl md:text-[27px] font-bold text-white">
          M. Ranganath Bhat
        </p>
        <p className="text-sm md:text-[17px] ms-2 text-center text-[#76838b]">
          Hon. Secretary-C.H.S.A & Correspondent CEC
        </p>
      </div>
      </div>
      
      {/* Text Section */}
      <div className="col-span-7">
        <h1 className="text-3xl text-center lg:text-start  md:text-[40px] lg:text-5xl xl:text-6xl font-bold leading-snug lg:leading-[1.1] text-white mb-6 ">
          Message from the Honorary Secretary
        </h1>
        <p className="text-base md:text-[17px] text-[#c5c6c7] leading-relaxed  lg:text-start text-center ">
          Canara&rsquo;s 126-year legacy is built on adaptability, innovation &amp; progress. 
          Embracing change has been our strength, preparing us to meet evolving challenges head-on. 
          The Valediction of the Post-Centennial Silver Jubilee on June 30, 2016, marked a milestone with the inauguration 
          of &lsquo;Shree Bhuvanendra Sabha Bhavan&rsquo; by alumnus Sri P. Dayananda Pai, who generously funded its refurbishment. 
          Initiatives like &lsquo;Play Schools @ Canara&rsquo; reflect our commitment to holistic education. At Canara Engineering College, 
          our pursuit of excellence extends beyond academics to research, innovation &amp; placements. With plans for an Incubation Centre, 
          we continue our journey toward becoming an Institute of Repute.
        </p>
      </div>
<div className=" col-span-1"></div>
      {/* Image Section */}
      <div className=" hidden col-span-4   lg:block ms-1">
        <div className="flex flex-col items-center   w-full ">
        <div className="w-72 md:w-80 h-96 relative overflow-hidden shadow-md rounded-xl">
          <Image
            src={img}
            alt="M. Ranganath Bhat"
            className="object-cover bg-[#6dc0eb]"
          />
        </div>
        <p className="mt-4 text-center text-2xl md:text-[27px] font-bold text-white">
          M. Ranganath Bhat
        </p>
        <p className="text-sm ms-2 md:text-[17px] text-center text-[#76838b]">
          Hon. Secretary-C.H.S.A & Correspondent CEC
        </p>
      </div>
      </div>
      
    </div>
  </div>
</section>

  );
};

export default SecretaryMessage;

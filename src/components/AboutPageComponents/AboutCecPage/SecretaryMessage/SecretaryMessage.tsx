import Image from "next/image";
import React from "react";
import img from "../../../../../public/aboutPageImages/SecretaryImage/image.png";

const SecretaryMessage = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto py-24 ">
      <div className=" grid  lg:grid-cols-2 lg:gap-10 lg:px-10 xl:px-0">
        <div className="block lg:hidden">
          <div className="flex lg:hidden flex-col items-center flex-shrink-0 mx-auto lg:px-20">
            <div className="w-80  h-96 relative overflow-hidden shadow-md rounded-xl">
              <Image src={img} alt="Sri Ammembal Subba Rao Pai"  className="object-cover bg-[#6dc0eb]" />
            </div>
            <p className="mt-4 text-center text-[27px] font-bold text-white">M. Ranganath Bhat</p>
            <p className="text-[17px] text-[#76838b]">Hon. Secretary-C.H.S.A & Correspondent CEC</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl text-start my-10 md:text-[40px] lg:leading-[1.1] lg2:text-5xl xl:text-6xl  font-bold">Message from the Honorary Secretary</h1>
          <p className="text-[17px] text-[#76838b] text-start">
          Canara&rsquo;s 126-year legacy is built on adaptability, innovation &amp; progress. Embracing change has been our strength, preparing us to meet
  evolving challenges head-on. The Valediction of the Post-Centennial Silver Jubilee on June 30, 2016, marked a milestone with the
  inauguration of &lsquo;Shree Bhuvanendra Sabha Bhavan&rsquo; by alumnus Sri P. Dayananda Pai, who generously funded its refurbishment. Initiatives
  like &lsquo;Play Schools @ Canara&rsquo; reflect our commitment to holistic education. At Canara Engineering College, our pursuit of excellence
  extends beyond academics to research, innovation &amp; placements. With plans for an Incubation Centre, we continue our journey toward
  becoming an Institute of Repute.
          </p>
        </div>
        <div>
          <div className="hidden lg:flex flex-col items-center flex-shrink-0 mx-auto lg:px-20">
            <div className="w-80  h-96 relative overflow-hidden shadow-md rounded-xl">
            <Image src={img} alt="Sri Ammembal Subba Rao Pai"  className="object-cover bg-[#6dc0eb]" />
            </div>
            <p className="mt-4 text-center text-[27px] font-bold text-white">M. Ranganath Bhat</p>
            <p className="text-[17px] text-[#76838b]">Hon. Secretary-C.H.S.A & Correspondent CEC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretaryMessage;

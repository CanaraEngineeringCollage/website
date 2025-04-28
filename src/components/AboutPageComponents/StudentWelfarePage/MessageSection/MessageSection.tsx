import Image from "next/image";
import React from "react";

const MessageSection = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto py-24 ">
      <div className=" grid  lg:grid-cols-2 lg:gap-10 lg:px-10 xl:px-0">
      <div className="block lg:hidden">
          <div className="flex lg:hidden flex-col items-center flex-shrink-0 mx-auto lg:px-20">
            <div className="w-80  h-96 relative rounded-xl overflow-hidden shadow-md">
              <Image src="/studentWelfarepage/message.png" alt="Sri Ammembal Subba Rao Pai" fill className="object-cover bg-[#6dc0eb]" />
            </div>
            <p className="mt-4 text-center text-[27px] font-bold text-white">Dr. Priya V. Frank</p>
            <p className="text-[17px] text-[#76838b]">Dean - Student Welfare</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl text-start my-10 md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold">Message from the Student Welfare Officer</h1>
          <p className="text-[17px] text-[#76838b] text-start">
            The Student Welfare Department (SWD) is dedicated to ensuring your well-being and fostering an environment that supports your academic and
            personal growth. We oversee various welfare activities on campus that play a significant role in shaping your future. More than just a
            support system, SWD serves as a platform for you to voice your opinions and contribute to the institution’s growth. As the Dean of Student
            Welfare, I consider it a privilege to support you during these crucial years of development. Our approach is entirely student-centric,
            focusing on your needs and providing opportunities for holistic growth. We aim to nurture leadership qualities, confidence, and a
            well-rounded personality through various initiatives.
          </p>
        </div>
        <div>
          <div className="hidden lg:flex flex-col items-center flex-shrink-0 mx-auto lg:px-20">
            <div className="w-80  h-96 relative rounded-xl overflow-hidden shadow-md">
              <Image src="/studentWelfarepage/message.png" alt="Sri Ammembal Subba Rao Pai" fill className="object-cover bg-[#6dc0eb]" />
            </div>
            <p className="mt-4 text-center text-[27px] font-bold text-white">Dr. Priya V. Frank</p>
            <p className="text-[17px] text-[#76838b]">Dean - Student Welfare</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;

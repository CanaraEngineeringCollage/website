import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/1.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 2,
    name: "Sri M. Ranganath Bhat",
    image: "/governingCounsilImages/2.png",
    postion: "Secretary",
    subPosition: "CEC GC",
    postion2: "Hon. Secretary",
    subPosition2: "CHSA",
  },
  {
    id: 3,
    name: "Sri Pradeep G Pai",
    image: "/governingCounsilImages/3.png",
    postion: "Convenor Governing Council",
    subPosition: "CEC",
  },
  {
    id: 4,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/4.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 5,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/5.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 6,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/6.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 7,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/7.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 8,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/8.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 9,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/9.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 10,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/10.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 11,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/11.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 12,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/12.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
  {
    id: 12,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/12.png",
    postion: "Chairman",
    subPosition: "CEC GC",
    postion2: "President",
    subPosition2: "CHSA",
  },
];

const ProfileCard = () => {
  return (
    <section className="pb-32  mx-64">
      <h1 className=" text-[#1D1D1F] text-[54px] font-bold text-center">Governing Council </h1>

      <div className="grid items-center grid-cols-3 gap-8">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-[309px]  h-[450px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center py-6 shadow-md"
            >
              <Image src={item.image} alt="Sri D Vasudeva Kamath" width={300} height={300} className="rounded-full w-full  object-contain" />
              <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
              <div className=" absolute z-50 top-[80%] left-6 bg-gradient-to-b ">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-sm">
                  {item.postion}, <span className="font-semibold">{item.subPosition}</span>
                  <br />{item.postion2 && `& ${item.postion2},`} <span className="font-semibold">{item.subPosition2}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfileCard;

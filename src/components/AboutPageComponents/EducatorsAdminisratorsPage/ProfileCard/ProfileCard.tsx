import Image from "next/image";
import React from "react";



interface CouncilMember {
    id: number;
    name: string;
    image: string;
    position: string;
    subPosition: string;
    position2?: string;
    subPosition2?: string;
  }
  
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
      name: "Sri CA. M.Vaman Kamath",
      image: "/governingCounsilImages/4.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 5,
      name: "Sri K Suresh Kamath",
      image: "/governingCounsilImages/5.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 6,
      name: "Sri T. Gopalkrishna Shenoy",
      image: "/governingCounsilImages/6.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 7,
      name: "Sri M. Naresh Shenoy",
      image: "/governingCounsilImages/7.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 8,
      name: "Sri Gopal Rao",
      image: "/governingCounsilImages/8.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 9,
      name: "Sri. Vinayak Kamath",
      image: "/governingCounsilImages/9.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 10,
      name: "Sri. Chakravarthy Sulibele",
      image: "/governingCounsilImages/10.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 11,
      name: "Sri. Siddartha Pai",
      image: "/governingCounsilImages/11.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 12,
      name: "Sri. Ullas Kamath",
      image: "/governingCounsilImages/12.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 13,
      name: "Dr. P. Dayananda Pai",
      image: "/governingCounsilImages/14.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 14,
      name: "Sri. Siddartha Pai",
      image: "/governingCounsilImages/15.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 15,
      name: "Sri. Ullas Kamath",
      image: "/governingCounsilImages/16.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
    {
      id: 16,
      name: "Dr. P. Dayananda Pai",
      image: "/governingCounsilImages/13.png",
      postion: "Chairman",
      subPosition: "CEC GC",
      postion2: "President",
      subPosition2: "CHSA",
    },
  ];
const ProfileCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
      {data.map((item, index) => {
        const isLastCard = index === data.length - 1;
        const remainder = data.length % 3;
        const shouldCenterLast = remainder === 1 && isLastCard;

        return (
          <div
            key={index}
            className={`relative w-full max-w-[309px] h-[450px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center py-6 shadow-md ${
              shouldCenterLast ? "md:col-start-2" : ""
            }`}
          >
            <Image src={item.image} alt={item.name} width={300} height={300} className="rounded-full w-full object-contain" />
            <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
            <div className="absolute z-50 top-[80%] left-6">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm">
                {item.postion}, <span className="font-semibold">{item.subPosition}</span>
                <br />
                {item.postion2 && `& ${item.postion2},`} <span className="font-semibold">{item.subPosition2}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileCard;

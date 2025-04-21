import React from "react";
import Image from "next/image";

interface CouncilMember {
  id: number;
  name: string;
  image: string;
  roles: { title: string; organization: string }[];
}

const data: CouncilMember[] = [
  {
    id: 1,
    name: "Sri D Vasudeva Kamath",
    image: "/governingCounsilImages/1.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 2,
    name: "Sri M. Ranganath Bhat",
    image: "/governingCounsilImages/2.png",
    roles: [
      { title: "Secretary", organization: "CEC GC" },
      { title: "Hon. Secretary", organization: "CHSA" },
    ],
  },
  {
    id: 3,
    name: "Sri Pradeep G Pai",
    image: "/governingCounsilImages/3.png",
    roles: [{ title: "Convenor Governing Council", organization: "CEC" }],
  },
  {
    id: 4,
    name: "Sri CA. M.Vaman Kamath",
    image: "/governingCounsilImages/4.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 5,
    name: "Sri K Suresh Kamath",
    image: "/governingCounsilImages/5.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 6,
    name: "Sri T. Gopalkrishna Shenoy",
    image: "/governingCounsilImages/6.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 7,
    name: "Sri M. Naresh Shenoy",
    image: "/governingCounsilImages/7.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 8,
    name: "Sri Gopal Rao",
    image: "/governingCounsilImages/8.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 9,
    name: "Sri. Vinayak Kamath",
    image: "/governingCounsilImages/9.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 10,
    name: "Sri. Chakravarthy Sulibele",
    image: "/governingCounsilImages/10.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 11,
    name: "Sri. Siddartha Pai",
    image: "/governingCounsilImages/11.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 12,
    name: "Sri. Ullas Kamath",
    image: "/governingCounsilImages/12.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 13,
    name: "Dr. P. Dayananda Pai",
    image: "/governingCounsilImages/14.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 14,
    name: "Sri. Siddartha Pai",
    image: "/governingCounsilImages/15.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 15,
    name: "Sri. Ullas Kamath",
    image: "/governingCounsilImages/16.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
  {
    id: 16,
    name: "Dr. P. Dayananda Pai",
    image: "/governingCounsilImages/13.png",
    roles: [
      { title: "Chairman", organization: "CEC GC" },
      { title: "President", organization: "CHSA" },
    ],
  },
];

const ProfileCard = () => {
  return (
    <section className="pb-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <h1 className="text-black text-3xl sm:text-4xl md:text-[54px] mb-10 md:mb-20 font-bold text-center">
        Governing Council
      </h1>

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
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="rounded-full w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
              <div className="absolute z-50 top-[80%] left-6">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-sm">
                  {item.roles.map((role, idx) => (
                    <span key={idx}>
                      {role.title}, <span className="font-semibold">{role.organization}</span>
                      {idx < item.roles.length - 1 && <br />}
                    </span>
                  ))}
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
import React from 'react'




interface HodProps {
  data?: {
    messageFromtheDepartmentHead?: string;
    name?: string;
    position?: string;
    imageUrl?: string;
  };
}

const Hod: React.FC<HodProps> = ({ data }) => {
  return (
    <div className="lg2:px-24 mx-5 text-[#86868B] text-[17px]">
      <div >
        <img
          src={data?.imageUrl}
          alt={data?.name}
          className="w-48 h-48 object-cover rounded-lg shadow"
        />
        <div>
          <p className="mb-4 mt-4 md:text-lg  text-[14px] leading-7 text-justify text-textGray">{data?.messageFromtheDepartmentHead}</p>
          <div className="mt-2 font-semibold text-[#1D1D1F]">{data?.name}</div>
          <div className="text-sm text-gray-500">{data?.position}</div>
        </div>
      </div>
    </div>
  );
};

export default Hod

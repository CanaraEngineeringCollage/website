import Image from 'next/image';
import React from 'react'
type Publication = {
  title: string;
  imageUrl: string[];
};
const Publications = ({data}:{data:Publication[]}) => {
  console.log(data);
  
  return (
  <div className="lg2:px-24 mx-5 text-[#86868B] text-[17px]">
    {data?.map((pub) => (
      <div key={pub.title} className="mb-8">
        <h2 className="font-bold text-xl mb-3 ">{pub.title}</h2>
        <div className="flex flex-col gap-4">
          {pub.imageUrl.map((url: string, idx: number) => (
            <Image
              key={idx}
              src={url}
              alt={`${pub.title} ${idx + 1}`}
              width={1000}
              height={1000}
              className=" rounded shadow"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
  )
}

export default Publications

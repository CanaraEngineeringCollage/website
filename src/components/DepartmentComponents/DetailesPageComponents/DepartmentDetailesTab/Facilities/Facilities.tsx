import Image from "next/image";
import React from "react";

interface FacilityCategory {
  title: string;
  items: string[];
}

interface Facility {
  title: string;
  points?: string[];
  categories?: FacilityCategory[];
  desc?: string;
  methodes?: string;

   imageUrl?: string;
   imageUrl2?: string;
   imageUrl3?: string;
}

interface FacilitiesProps {
  data: {
    description: string;
    allFacilities: Facility[];
    // Optional image URL for the facilities section
  };
}

const Facilities: React.FC<FacilitiesProps> = ({ data }) => {
  console.log(data);

  return (
    <div className=" text-[#86868B] text-[17px] space-y-8">
      <div>
        <h1 className="text-[20px] mb-2 font-bold">Facilities</h1>
        <p className="md:text-lg text-justify text-[14px] leading-7 text-textGray">
  {data.description.split(/(Laboratory)/g).map((part, index) => 
    part === "Laboratory" ? (
      <span key={index} className="font-bold">{part}</span>
    ) : (
      part
    )
  )}
</p>

      </div>
      <div className="space-y-6">
        
        {data.allFacilities.map((facility, idx) => (
            <div key={idx} className="pb-4">
            <h3 className="text-xl font-bold  text-textGray mb-2">{facility.title}</h3>
            {facility.desc &&<p className="mb-2 md:text-lg text-justify text-[14px] leading-7 text-textGray">
  {(() => {
    const splitIndex = facility.desc.indexOf(':'); // find the first colon
    if (splitIndex !== -1) {
      const title = facility.desc.slice(0, splitIndex + 1); // include colon
      const rest = facility.desc.slice(splitIndex + 1); // the rest of the text
      return (
        <>
          <span className="font-bold">{title}</span>{rest}
        </>
      );
    }
    // If no colon found, just render normally
    return facility.desc;
  })()}
</p>
}
            {facility.methodes && <p className="mb-2 md:text-lg  text-[14px] leading-7  text-textGray">{facility.methodes}</p>}
            {facility.points && (
              <ul className="list-disc ml-6 space-y-1 md:text-lg text-justify  text-[14px] leading-7  text-textGray">
              {facility.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
              </ul>
            )}
            {facility?.imageUrl && (
              <Image loading="lazy" src={facility.imageUrl} width={500} height={500} alt={facility.title} className="mt-10 rounded" />
            )}
             {facility?.imageUrl2 && (
              <Image loading="lazy"  src={facility.imageUrl2} width={500} height={500} alt={facility.title} className="mt-10 rounded" />
            )}
             {facility?.imageUrl3 && (
              <Image loading="lazy"  src={facility.imageUrl3} width={500} height={500} alt={facility.title} className="mt-10 rounded" />
            )}

            {facility.categories && (
              <div className="mt-2 space-y-2">
              {facility.categories.map((cat, j) => (
                <div key={j}>
                <div className=" text-lg font-[600] text-justify mb-1">{cat.title}</div>
                <ul className="list-disc font-medium ml-6 space-y-1 text-lg">
                  {cat.items.map((item, k) => (
                  <li key={k}>{item}</li>
                  ))}
                </ul>
                </div>
              ))}
              </div>
            )}

            {/* Render table if facility.tableHeading exists */}
            {Array.isArray((facility as any).tableHeading) && (
              <div className="overflow-x-auto mt-4">
                 <div className="rounded overflow-hidden border border-gray-200 w-full">
              <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
               <thead className="bg-[#F3F8FC] text-[#2884CA]">
                <tr >
                  <th className="py-3 md:px-4 px-1 border-b">Sl. No.</th>
                  {(facility as any).tableHeading.map((col: any, colIdx: number) => (
                  <th
                    key={colIdx}
                    className="py-3 md:px-4 px-1 border-b"
                  >
                    {col.title}
                  </th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {(facility as any).tableHeading[0]?.data.map((_: any, rowIdx: number) => (
                  <tr key={rowIdx}>
                  <td className="py-3 md:px-4 px-1 border-b">{rowIdx + 1}</td>
                  {(facility as any).tableHeading.map((col: any, colIdx: number) => (
                    <td
                    key={colIdx}
                    className="py-3 md:px-4 px-1 border-b"
                    >
                    {col.title?.toLowerCase().includes("link") ? (
                      <a
                      href={col.data[rowIdx]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline break-all"
                      >
                      {col.data[rowIdx]}
                      </a>
                    ) : (
                      col.data[rowIdx]
                    )}
                    </td>
                  ))}
                  </tr>
                ))}
                </tbody>
              </table>
              </div>
                 </div>
            )}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;

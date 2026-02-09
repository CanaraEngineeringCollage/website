import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";

interface FacilityCategory {
  title: string;
  items: string[];
}

interface Facility {
  title: string;
  points?: string[];
  majorPoint?: string[];
  categories?: FacilityCategory[];
  desc?: string;
  methodes?: string;

  imageUrl?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  swiper?: string[];
}

interface FacilitiesProps {
  data: {
    description: string;
    allFacilities: Facility[];
    // Optional image URL for the facilities section
  };
  deptName?: string;
}

const Facilities: React.FC<FacilitiesProps> = ({ data, deptName }) => {
  return (
    <div className=" text-textGray text-[17px]">
      <div>
        {deptName === "Artificial Intelligence & Machine Learning" && <h1 className="text-2xl font-semibold  mb-2 ">Laboratory Facilities</h1>}
        {deptName != "Artificial Intelligence & Machine Learning" && <h1 className="text-2xl font-semibold mb-2 ">Department Facilities</h1>}
        <p className="md:text-lg text-justify text-[14px] leading-7 text-textGray">
          {data.description.split(/(Data Structures and Algorithm Laboratory|Machine Learning Laboratory)/g).map((part, index) =>
            part === "Data Structures and Algorithm Laboratory" || part === "Machine Learning Laboratory" ? (
              <span key={index} className="font-bold">
                {part}
              </span>
            ) : (
              part
            ),
          )}
        </p>
      </div>
      <div className="space-y-2 mt-3">
        {data.allFacilities.map((facility, idx) => (
          <div key={idx} className="pb-4">
            {facility.title2 && <h3 className="text-[22px] font-bold   text-textGray mb-2"><FaAngleRight/>{facility.title2}</h3>}
          {facility.title&&  <h3 className={`text-xl font-bold flex items-center gap-1  text-textGray ${!facility.title2 && "mb-2"} `}><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1.5L7.84685 7.74717L1.5 13.9943" stroke="#2A2A2A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
{facility.title}</h3>}

            {facility.desc && (
              <p className="mb-2 md:text-lg text-justify text-[14px] leading-7 text-textGray">
                {(() => {
                  const splitIndex = facility.desc.indexOf(":"); // find the first colon
                  if (splitIndex !== -1) {
                    const title = facility.desc.slice(0, splitIndex + 1); // include colon
                    const rest = facility.desc.slice(splitIndex + 1); // the rest of the text
                    return (
                      <>
                        <span className="font-bold">{title}</span>
                        {rest}
                      </>
                    );
                  }
                  // If no colon found, just render normally
                  return facility.desc;
                })()}
              </p>
            )}

            {facility.majorPoint && (
              <>
                {facility.majorDesc && <p className="md:text-lg mb-1 text-justify text-[14px] leading-7 text-textGray">{facility.majorDesc}</p>}
                {facility.majorDesc2 && <p className="md:text-lg mb-1 text-justify text-[14px] leading-7 text-textGray">{facility.majorDesc2}</p>}
                <ul className="list-disc ml-6 space-y-1 md:text-lg text-justify  text-[14px] leading-7  text-textGray">
                  {facility.majorPoint.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </>
            )}
            {facility.methodes && <p className="mb-2 md:text-lg  text-[14px] leading-7  text-textGray">{facility.methodes}</p>}
            {facility.points && (
              <ul className="list-disc ml-6 space-y-1 md:text-lg text-justify  text-[14px] leading-7  text-textGray">
                {facility.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            {/* Legacy Image Rendering */}
            <div className={`${deptName === "Artificial Intelligence & Machine Learning" ? "flex flex-col lg2:flex-row flex-wrap  gap-2" : ""}`}>
              {facility?.imageUrl && (
                <Image loading="lazy" src={facility.imageUrl} width={500} height={500} alt={facility.title} className="mt-5 rounded" />
              )}
              {facility?.imageUrl2 && (
                <Image loading="lazy" src={facility.imageUrl2} width={500} height={500} alt={facility.title} className="mt-5 rounded" />
              )}
              {facility?.imageUrl3 && (
                <Image loading="lazy" src={facility.imageUrl3} width={500} height={500} alt={facility.title} className="mt-5 rounded" />
              )}
            </div>

            {/* Swiper Image Rendering */}
            {facility.swiper && facility.swiper.length > 0 && (
              <div className="mt-5">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={{
                    prevEl: `.swiper-button-prev-custom-${idx}`,
                    nextEl: `.swiper-button-next-custom-${idx}`,
                  }}
                 
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 2.2,
                    },
                  }}
                  className=" rounded-lg"
                >
                  {facility.swiper.map((imgUrl, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="relative w-full h-[300px] md:h-[400px]">
                        <Image src={imgUrl} alt={`${facility.title} swiper image ${imgIndex + 1}`} fill className="object-cover rounded-lg" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="flex justify-end me-6 lg:justify-end items-center mt-12">
                  <div className="flex gap-2 z-10">
                    <button
                      aria-label="Previous Slide"
                      className={`swiper-button-prev-custom-${idx} swiper-button-prev-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50`}
                    >
                      <MdKeyboardArrowLeft />
                    </button>
                    <button
                      aria-label="Next Slide"
                      className={`swiper-button-next-custom-${idx} swiper-button-next-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50`}
                    >
                      <MdKeyboardArrowRight />
                    </button>
                  </div>
                </div>
              </div>
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
                      <tr>
                        <th className="py-3 md:px-4 px-1 border-b">Sl. No.</th>
                        {(facility as any).tableHeading.map((col: any, colIdx: number) => (
                          <th key={colIdx} className="py-3 md:px-4 px-1 border-b">
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
                            <td key={colIdx} className="py-3 md:px-4 px-1 border-b">
                              {col.title?.toLowerCase().includes("link") ? (
                                <a href={col.data[rowIdx]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">
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

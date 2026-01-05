"use client";

import { Card, Carousel } from "@/components/ui/campus-facilities/apple-cards-carousel";
import Image from "next/image";
import programData from "../../../../utils/programData/programData.json";

// Type definitions matching your dynamic model
interface ContentItem {
  title?: string;
  description?: string;
  points?: string[];
  href?: string; // For Iframes
  type?: "table" | string;
  headers?: string[];
  rows?: string[][];
  bottomdescription?: string;
}

interface DescriptionProps {
  src: string;
  content: ContentItem[];
}

interface CardData {
  id: number;
  category?: string;
  title: string;
  src: string;
  description: DescriptionProps;
  mainTitle?: string;
  bottomdescription?: string;
}

export default function CardSection() {
  const cards = (programData as CardData[]).map((card, index) => (
    <Card
      key={card.id}
      card={{
        ...card,
        content: (
          <CardContent description={card.description} title={card.title} mainTitle={card.mainTitle} bottomdescription={card.bottomdescription} />
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full md:py-5 py-2 text-black">
      <Carousel items={cards} />
    </div>
  );
}

function CardContent({
  description,
  title,
  mainTitle,
  bottomdescription,
}: {
  description: DescriptionProps;
  title: string;
  mainTitle?: string;
  bottomdescription?: string;
}) {
  return (
    <div className="bg-white rounded-2xl ">
      {/* Top Image Section */}
      <Image
        src={description.src}
        alt={title}
        loading="lazy"
        width={1000}
        height={700}
        className={`object-cover overflow-hidden rounded-t-2xl w-full lg:h-[700px] h-[400px] mb-10 ${
          title !== "In-Campus Hostels" ? "object-left" : "object-center"
        }`}
      />

      {/* Dynamic Content Section (The Model) */}
      <div className="p-4 lg:p-0 lg:px-20 space-y-5  text-left text-sm text-[#1D1D1F]">
        <h2 className="text-[31px] lg:text-[46px] leading-[1.1] lg:max-w-[70%] mb-6 font-bold whitespace-pre-line">{mainTitle}</h2>
        {description.content.map((item, i) => (
          <div key={i} className="">
            {/* Title */}
            {/* Title */}
            {item.title && (
              <h2
                className="text-[20px] md:text-[32px] font-bold text-[#1D1D1F] mb-2 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            )}

            {/* Description */}
            {item.description && (
              <p
                className="md:text-xl text-[14px] leading-relaxed text-textGray lg:pe-16 mb-6 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
            {item.bottomdescription && (
              <p
                className="md:text-xl text-[14px] leading-relaxed text-textGray  lg:pe-16 mb-6 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: item.bottomdescription }}
              />
            )}

            {/* Bottom Description */}

            {/* Bullet Points */}
            {item.points && (
              <ul className="list-disc mt-4 pl-5 md:text-xl text-[14px] leading-relaxed text-textGray ">
                {item.points.map((point: string, j: number) => (
                  <li key={j} className="pb-1">
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Iframe (PDF/Doc) */}
            {item.href && (
              <iframe
                src={`${item.href}#toolbar=0&navpanes=0&view=FitH`}
                className="w-full md:h-[100vh] h-[50vh] mt-7 border rounded-lg"
                title={item.title || `Document-${i}`}
              ></iframe>
            )}

            {/* Table */}
            {item.type === "table" && (
              <div className="overflow-x-auto mt-7">
                <div className="rounded overflow-x-auto border border-gray-200 w-full">
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead className="bg-[#F3F8FC] text-[#2884CA]">
                      <tr>
                        {item.headers?.map((header: string, hIndex: number) => (
                          <th key={hIndex} className="py-3 md:px-4 px-1 border-b">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.rows?.map((row: string[], rIndex: number) => (
                        <tr key={rIndex} className="text-textGray">
                          {row.map((cell: string, cIndex: number) => (
                            <td key={cIndex} className="py-3 md:px-4 px-1 border-b">
                              {cell}
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
}

"use client";

import { Card, Carousel } from "@/components/ui/campus-facilities/apple-cards-carousel";
import Image from "next/image";
import programData from "../../../../utils/programData/programData.json";

type DescriptionProps = {
  src: string;
  date?: string;
  topTitle?: string;
  topDescription?: string;

  middleTitle?: string;
  middleSubTitle?: string;
  middleDescription?: string;

  image1?: string;

  middleTitle2?: string;
  middleDescription2?: string;

  middleTitle3?: string;
  middleDescription3?: string[]; // ✅ Change to array of string

  image2?: string;

  middleTitle4?: string;
  middleDescription4?: string[]; // ✅ Change to array of string

  bottomTitile?: string; // Typo matches JSON key
  subDescription3?: string;
  image3?: string;
};

interface CardContentProps {
  description: DescriptionProps;
}

interface CardData {
  id: number;
  category?: string;
  title: string;
  src: string;
  description: DescriptionProps;
  style?: string;
  desc?: string;
}

export default function CardSection() {
  const cards = (programData as CardData[]).map((card, index) => (
    <Card
      key={card.id}
      card={{
        ...card,
        content: <CardContent description={card.description} />,
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full md:py-10 py-20 text-black">
      <Carousel items={cards} />
    </div>
  );
}

function CardContent({ description }: CardContentProps) {
  return (
    <div>
      <Image
        src={description.src}
        alt="Image"
        loading="lazy"
        width={1000}
        height={700}
        className="object-cover overflow-hidden rounded-t-2xl w-full lg:h-[700px] h-[400px] mb-10"
      />

      <div className="p-4 lg:p-0 lg:px-20 space-y-5  md:space-y-10 text-left text-sm text-[#1D1D1F] bg-white">

        {/* TOP */}
        {(description.topTitle || description.topDescription) && (
          <div>
            {description.topTitle && (
              <h3 className="text-[31px] lg:text-[46px] leading-[1.1] lg:max-w-[70%] mb-5 font-bold">
                {description.topTitle}
              </h3>
            )}
            {description.topDescription && (
              <p className="text-xl text-textGray leading-relaxed">{description.topDescription}</p>
            )}
          </div>
        )}

        {/* MIDDLE 1 */}
        {description.middleTitle && (
          <div>
            <h3 className="text-[32px] mb-6 font-bold">{description.middleTitle}</h3>
            {description.middleSubTitle && (
              <h4 className="text-[22px] text-textGray mb-3 font-bold">{description.middleSubTitle}</h4>
            )}
            {description.middleDescription && (
              <p className="text-xl text-textGray leading-relaxed">{description.middleDescription}</p>
            )}
          </div>
        )}

        {/* MIDDLE 2 */}
        {description.middleTitle2 && (
          <div>
            <h3 className="text-[22px] text-textGray mb-3 font-bold">{description.middleTitle2}</h3>
            <p className="text-xl text-textGray leading-relaxed">{description.middleDescription2}</p>
          </div>
        )}

        {/* MIDDLE 3 */}
        {description.middleTitle3 && description.middleDescription3?.length > 0 && (
          <div>
            <h3 className="text-[22px] text-textGray mb-3 font-bold">{description.middleTitle3}</h3>
            <ul className="list-disc pl-6 space-y-1">
              {description.middleDescription3.map((item, index) => (
                <li key={index} className="text-xl text-textGray">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* MIDDLE 4 */}
        {description.middleTitle4 && description.middleDescription4?.length > 0 && (
          <div>
            <h3 className="text-[22px] text-textGray mb-2 font-bold">{description.middleTitle4}</h3>
            <ul className="list-disc pl-6 space-y-1">
              {description.middleDescription4.map((item, index) => (
                <li key={index} className="text-xl text-textGray leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* BOTTOM */}
        {(description.bottomTitile || description.subDescription3) && (
          <div>
            {description.bottomTitile && (
              <h3 className="text-[32px] mb-2 font-bold">{description.bottomTitile}</h3>
            )}
            {description.subDescription3 && (
              <p className="text-xl text-textGray leading-relaxed">{description.subDescription3}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

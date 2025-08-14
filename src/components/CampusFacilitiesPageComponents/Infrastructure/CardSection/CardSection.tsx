"use client";

import { Card, Carousel } from "@/components/ui/campus-facilities/apple-cards-carousel";
import Image from "next/image";
import programData from "../../../../utils/programData/programData.json";

// Updated DescriptionProps to match the JSON structure
type DescriptionProps = {
  src: string;
  date: string;
  topTitle: string;
  topDescription: string;
  middleTitle: string;
  middleSubTitle: string;
  middleDescription: string;
  image1?: string;
  middleTitle2: string;
  middleDescription2: string;
  middleTitle3: string;
  middleDescription3: string;
  image2?: string;
  middleTitle4: string;
  middleDescription4: string;
  bottomTitile: string; // Note: Typo in JSON ("bottomTitile" instead of "bottomTitle")
  subDescription3: string;
  image3?: string;
};

interface CardContentProps {
  description: DescriptionProps;
}

// Define the Card type for type safety
interface CardData {
  category?: string;
  title: string;
  src: string;
  description: DescriptionProps;
  style: string;
  desc?: string;
}

export default function CardSection() {
  // Type the programData as an array of CardData
  const cards = (programData as CardData[])?.map((card, index) => (
    <Card
      key={card.title}
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
      <div className="p-4 lg:px-20 space-y-10 text-left text-sm text-[#1D1D1F] bg-white">
        {/* Top Section */}
        <div >
          <p className="text-[16px] font-bold text-[#88888a] mb-5">{description.date}</p>
          <h3 className="text-[31px] lg:text-[46px]  leading-[1.1] lg:max-w-[70%] mb-5 font-bold">{description.topTitle}</h3>
          <p className="text-xl text-[#88888a]">{description.topDescription}</p>
        </div>

        {/* Middle Section 1 */}
        <div>
          <h3 className="text-[32px] mb-6 font-extrabold ">{description.middleTitle}</h3>
          <h4 className="text-[22px] text-[#88888a] mb-3 font-[900]">{description.middleSubTitle}</h4>
          <p className="text-xl text-[#88888a]">{description.middleDescription}</p>
        </div>
        {/* {description.image1 && (
          <Image
            src={description.image1}
            alt="Middle Image 1"
            width={1000}
            height={1000}
            className="w-full rounded-2xl my-16"
          />
        )} */}

        {/* Middle Section 2 */}
        <div>
          <h3 className="text-[22px] text-[#88888a] mb-3 font-[900]">{description.middleTitle2}</h3>
          <p className="text-xl text-textGray">{description.middleDescription2}</p>
        </div>

        {/* Middle Section 3 */}
        <div>
          <h3 className="text-[22px] text-[#88888a] mb-3 font-[900]">{description.middleTitle3}</h3>
          <p className="text-xl text-textGray">{description.middleDescription3}</p>
        </div>
        {/* {description.image2 && (
          <Image
            src={description.image2}
            alt="Middle Image 2"
            width={1000}
            height={1000}
            className="w-full rounded-2xl my-16"
          />
        )} */}

        {/* Middle Section 4 */}
        <div>
          <h3 className="text-[22px] text-[#88888a] mb-2 font-[900]">{description.middleTitle4}</h3>
          <p className="text-xl text-textGray">{description.middleDescription4}</p>
        </div>

        {/* Bottom Section */}
        <div>
          <h3 className="text-[32px] mb-2 font-extrabold">{description.bottomTitile}</h3>
          <p className="text-xl text-textGray">{description.subDescription3}</p>
        </div>
        {/* {description.image3 && (
          <Image
            src={description.image3}
            alt="Bottom Image"
            width={1000}
            height={1000}
            className="w-full rounded-2xl"
          />
        )} */}
      </div>
    </div>
  );
}
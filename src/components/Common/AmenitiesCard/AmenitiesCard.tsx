import Image from "next/image";
import React from "react";

// Define the shape of the props
interface Amenity {
  imageSrc: string;
  title: string;
  description: string;
  alt?: string; // Optional alt text for accessibility
}

interface AmenitiesCardProps {
  amenities: Amenity[];
  mainImage: Amenity;
  title?: string; // For the main larger image at the top
}

const AmenitiesCard: React.FC<AmenitiesCardProps> = ({ title, amenities, mainImage }) => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto py-20 overflow-hidden text-black">
      <div>
        {title && <h1 className="text-3xl text-center mb-14 md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold">{title}</h1>}
        {/* Main Image Section */}
        <div className="relative">
          <Image
            src={mainImage?.imageSrc}
            alt={mainImage?.alt || mainImage?.title}
            width={1000}
            height={1000}
            className="rounded-3xl w-full h-[50vh] lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>
          <div className="absolute mx-6 lg:mx-12 top-[120px] lg:top-[270px] left-0 w-full h-full flex justify-center flex-col">
            <h1 className="text-white lg:text-[40px] text-[21px] text-start font-bold me-8 lg:me-28">{mainImage?.title}</h1>
            <p className="text-white lg:text-[20px] text-[14px] me-8 lg:me-28">{mainImage?.description}</p>
          </div>
        </div>

        {/* Grid of Amenities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mt-16">
          {amenities?.map((amenity, index) => (
            <div key={index} className="col-span-4">
              <div className="relative">
                <Image
                  src={amenity?.imageSrc}
                  alt={amenity?.alt || amenity.title}
                  width={1000}
                  height={1000}
                  className="rounded-3xl w-full h-[45vh] lg:h-[60vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute mx-6 top-[120px] lg:top-[150px] left-0 w-full h-full flex justify-center flex-col">
                  <h1 className="text-white text-[21px] text-start font-bold">{amenity?.title}</h1>
                  <p className="text-white text-[14px] me-10">{amenity?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesCard;

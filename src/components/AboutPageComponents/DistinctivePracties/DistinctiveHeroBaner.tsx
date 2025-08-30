import Image from "next/image";
import React from "react";
import imageUrl from "../../../../public/herosectionImages/herosection1.webp"


const DistinctiveHeroBaner: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Background 1"
          className="object-cover w-full h-[80vh] md:h-full"
          priority
        fill
        />

        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-[#ffffff6c]/20 to-transparent z-10" />

        {/* Bottom Gradient - Mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />

        {/* Bottom Gradient - Desktop */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[90%] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />
             <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[90%] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />

      </div>

    
    </section>
  );
};

export default DistinctiveHeroBaner;

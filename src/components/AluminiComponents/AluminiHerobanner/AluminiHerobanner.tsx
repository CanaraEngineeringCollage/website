import Image from "next/image";
import React from "react";
import imageUrl from "../../../../public/aboutPageImages/campusLegacy/campus-colored.png"


const AluminiHeroBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[100vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Background 1"
          className="object-cover w-full h-[80vh] md:h-full"
          priority
        fill
        />

        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/40 to-transparent z-10" />

        {/* Bottom Gradient - Mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />

        {/* Bottom Gradient - Desktop */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[200px] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />
      </div>

      <div className="absolute top-28 md:top-28 max-w-5xl mx-auto text-white px-4 z-10">
        <h2 className="text-[40px] md:text-[77px] leading-[50px] md:leading-[1] font-extrabold">
        Stay Connected & Support Future Generations
        </h2>
      </div>
    </section>
  );
};

export default AluminiHeroBanner;

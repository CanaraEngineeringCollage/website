import React from "react";

const IdeasTakeFlight = () => {
  // Array to map over for 6 equal cards
  const cards = Array.from({ length: 6 });

  return (
    <section className="py-16 max-w-7xl mx-auto xl:max-w-[75%] text-center text-[#1D1D1F] bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 text-center">
        Where Ideas Take Flight
      </h2>
      <div className="max-w-[90%] mx-auto">
        <p className="text-textGray text-center mb-12 text-base md:text-lg leading-relaxed">
          The Canara Entrepreneurship Cell is dedicated to nurturing innovation, fostering leadership, & empowering students to transform ideas into
          successful ventures. Through mentorship, startup incubation, industry collaborations, & hands-on workshops, we provide the perfect launchpad
          for aspiring entrepreneurs to thrive in the ever-evolving business landscape.
        </p>
      </div>

      {/* Grid Container: Reduced gap from gap-6 to gap-4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 md:px-0">
        
        {cards.map((_, index) => (
          <div 
            key={index} 
            // Increased height from 250px to 350px
            className="bg-[#B91C1C] rounded-2xl h-[350px] w-full shadow-md"
          >
            {/* You can add your card content here */}
          </div>
        ))}

      </div>
    </section>
  );
};

export default IdeasTakeFlight;
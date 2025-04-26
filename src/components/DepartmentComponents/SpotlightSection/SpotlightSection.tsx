import Image from "next/image"; // If you're using Next.js, otherwise use normal <img>
import image from "../../../../public/departmentImages/SpotLightImage/image.png";
export default function SpotlightSection() {
  return (
    <div className=" mt-32 xl:mt-56  py-16 text-white bg-center" style={{
        backgroundImage:"url(/backgroundImages/department.png)"
    }}>
      {/* Top Section */}
      <div className="max-w-7xl xl:max-w-[75%] mx-auto px-4 text-center py-16 md:py-32">
        <h2 className="text-3xl md:text-4xl lg:text-[80px] font-bold mb-4 xl:mb-8 ">In the Spotlight</h2>
        <p className="text-lg mb-12 text-white/70">Honoring Our Toppers for Their Dedication & Excellence!</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-16 mb-20">
          {[1, 2, 3].map((item) => (
            <div key={item} className=" text-white rounded-lg p-6 flex flex-row items-center border-white border-[1px]">
              <div>
                <Image
                  src={image} // Replace with real image URL
                  alt="Topper"
                  className="w-24 h-24  mb-4 object-cover"
                />
              </div>
              <div className="text-left pl-6">
                <h3 className="text-xl  font-semibold mb-1">Aamoth Shammoon T S</h3>
                <p className="text-sm">HSC 2023 | CBSE Board</p>
                <p className="text-sm">97.4%</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center my-32">
          <h2 className="text-3xl md:text-4xl lg2:text-[76px] font-bold mb-4 max-w-2xl text-center mx-auto">Ready to take the next step?</h2>
          <p className="text-lg mb-6 max-w-2xl text-white/70  mx-auto">
            Book a one-on-one counseling session & get all your questions answered about admissions, programs & your future opportunities.
          </p>
          <button className="bg-white text-primary font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition">
            Book Your Counseling Session Today
          </button>
        </div>
      </div>
    </div>
  );
}

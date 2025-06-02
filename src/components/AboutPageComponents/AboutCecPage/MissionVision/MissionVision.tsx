import Image from "next/image";
import visionImage1 from "../../../../../public/aboutPageImages/MissionVision/visionImage1.webp";
import visionImage2 from "../../../../../public/aboutPageImages/MissionVision/visionImage2.webp";
import visionImage3 from "../../../../../public/aboutPageImages/MissionVision/visionImage3.webp";
import visionImage4 from "../../../../../public/aboutPageImages/MissionVision/visionImage4.webp";
export default function MissionVision() {
  return (
    <section className="py-16 px-6 md:px-12 ">
      <div className="max-w-7xl xl:max-w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-12 lg:gap-20">
        {/* Mission Card */}
        <div className="bg-white col-span-7 overflow-hidden rounded-2xl shadow p-10 lg:p-18 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-16">Our Mission</h2>

          <div className="grid grid-rows-3 gap-6 h-full pb-16">

            {/* Item 1 */}
            <div className="flex gap-10 flex-col lg:flex-row text-center lg:text-start items-center">
              <Image src={visionImage1} alt="bookImage" className="max-w-[50px] my-auto" />
              <div>
                <h3 className=" text-xl text-textGray font-extrabold">Ethical & Industry-Ready Learning</h3>
                <p className="text-textGray">
                  Provide the right environment to develop quality education for all, irrespective of caste, creed or religion to produce future
                  leaders.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-10 flex-col lg:flex-row text-center lg:text-start items-center">
              <Image src={visionImage2} alt="ideaIcon" className="max-w-[50px] my-auto" />
              <div>
                <h3 className="text-xl text-textGray font-extrabold">Innovation Excellence</h3>
                <p className="text-textGray">Create opportunities for pursuit of knowledge and all round development.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-10 flex-col lg:flex-row text-center lg:text-start items-center">
              <Image src={visionImage3} alt="valueIcon" className="max-w-[50px] my-auto" />
              <div>
                <h3 className="text-xl text-textGray font-extrabold">Instilling Core Values</h3>
                <p className="text-textGray">Impart value education to students to build sense of integrity, honesty and ethics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-white col-span-5 mt-10 lg:mt-0 rounded-2xl shadow p-8 flex flex-col items-center justify-center text-center space-y-6">
          <Image src={visionImage4} alt="visionIcon" />
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-10">Our Vision</h2>
          <p className="text-textGray text-xl max-w-sm">
            To be an Engineering Institute of highest repute and produce world-class engineers catering to the needs of mankind.
          </p>
        </div>
      </div>
    </section>
  );
}

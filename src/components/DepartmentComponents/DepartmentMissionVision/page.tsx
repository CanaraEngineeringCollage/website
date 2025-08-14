import Image from "next/image";
import visionImage1 from "../../../../public/aboutPageImages/MissionVision/visionImage1.webp";
import visionImage2 from "../../../../public/aboutPageImages/MissionVision/visionImage2.webp";
import visionImage3 from "../../../../public/aboutPageImages/MissionVision/visionImage3.webp";
import visionImage4 from "../../../../public/aboutPageImages/MissionVision/visionImage4.webp";

interface DepartmentMissionVisionProps {
  ethicalLearning: string;
  innovationExcellence: string;
  holisticGrowthResearch: string;
  ourVision: string;
}
const DepartmentMissionVision: React.FC<DepartmentMissionVisionProps> = ({
  ethicalLearning,
  innovationExcellence,
  holisticGrowthResearch,
  ourVision,
}) => {
  return (
    <section className="py-10 px-6 md:px-12 ">
      <div className="max-w-7xl xl:max-w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow p-10 lg:p-18 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-16">Our Mission</h2>

          <div className="grid grid-rows-3 gap-6 h-full pb-16">
            {/* Item 1 */}
            <div className="flex gap-10 flex-col lg:flex-row text-center lg:text-start items-center">
              <Image src={visionImage1} alt="bookImage" className="max-w-[50px] my-auto" />
              <div>
                <h3 className=" text-xl text-textGray font-bold">Ethical & Industry-Ready Learning</h3>
                <p className="text-textGray text-[17px]">{ethicalLearning}</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-10 flex-col lg:flex-row text-center lg:text-start items-center">
              <Image src={visionImage2} alt="ideaIcon" className="max-w-[50px] my-auto" />
              <div>
                <h3 className="text-xl text-textGray font-bold">Innovation Excellence</h3>
                <p className="text-textGray text-[17px]">{innovationExcellence}</p>
              </div>
            </div>

            {/* Item 3 */}
           { holisticGrowthResearch&&<div className="flex gap-10 flex-col lg:flex-row text-center lg:text-start items-center">
              <Image src={visionImage3} alt="valueIcon" className="max-w-[50px] my-auto" />
              <div>
                <h3 className="text-xl text-textGray font-bold">Holistic Growth & Research</h3>
                <p className="text-textGray text-[17px]">{holisticGrowthResearch}</p>
              </div>
            </div>}
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center text-center space-y-6">
          <Image src={visionImage4} alt="visionIcon" />
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-10">Our Vision</h2>
          <p className="text-textGray text-xl max-w-sm">{ourVision}</p>
        </div>
      </div>
    </section>
  );
};
export default DepartmentMissionVision;

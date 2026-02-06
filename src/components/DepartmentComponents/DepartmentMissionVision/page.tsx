import Image from "next/image";
import visionImage4 from "../../../../public/aboutPageImages/MissionVision/visionImage4.webp";

interface DepartmentMissionVisionProps {
  ethicalLearning: string[];
  ourVision: string;
}

const DepartmentMissionVision: React.FC<DepartmentMissionVisionProps> = ({
  ethicalLearning,
  ourVision,
}) => {
  return (
    <section className="py-10 px-6 md:px-12">
      <div className="max-w-7xl xl:max-w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Mission Card */}
           <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center text-center space-y-6">
          <Image src={visionImage4} alt="visionIcon" className="w-[250px]" />
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-10">Our Vision</h2>
          <p className="text-textGray text-xl max-w-lg mx-auto">{ourVision}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 text-center lg:text-left">
            Our Mission
          </h2>

          <ul className="list-disc text-textGray text-xl space-y-3 pl-5 text-left mx-auto lg:mx-0">
            {ethicalLearning.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Vision Card */}
          
      </div>
    </section>
  );
};

export default DepartmentMissionVision;

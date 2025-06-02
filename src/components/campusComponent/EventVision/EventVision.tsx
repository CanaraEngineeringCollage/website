import Image from "next/image";
import visionImage1 from "../../../../public/campusFacilitiesPageImages/objective1.png";
import visionImage2 from "../../../../public/campusFacilitiesPageImages/objective2.png";
import visionImage3 from "../../../../public/campusFacilitiesPageImages/objective3.png";
import visionImage4 from "../../../../public/aboutPageImages/MissionVision/visionImage4.webp";

const EventVision: React.FC = ({}) => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl xl:max-w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Mission Card */}
        <div className="flex flex-col justify-between gap-8">
          <div className="bg-white rounded-2xl shadow p-10 lg:p-18 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-16">Our Objectives</h2>

            <div className="grid grid-rows-3 h-full pb-16">
              {/* Item 1 */}
              <div className="flex gap-10 flex-col lg:flex-row text-center lg:text-start items-center">
                <Image src={visionImage1} alt="bookImage" className="max-w-[50px] my-auto" />
                <div>
                  <p className="text-textGray text-[17px]">
                    To play a proactive and supporting role for the college, its students and the institution at large.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-10 flex-col lg:flex-row text-center lg:text-start items-center">
                <Image src={visionImage2} alt="ideaIcon" className="max-w-[50px] my-auto" />
                <div>
                  <p className="text-textGray text-[17px]">
                    To serve as a link between the Institution&rsquo;s faculty, students, Management and the industries.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-10 flex-col lg:flex-row text-center lg:text-start items-center">
                <Image src={visionImage3} alt="valueIcon" className="max-w-[50px] my-auto" />
                <div>
                  <p className="text-textGray text-[17px]">To bring about an effective, cohesive and Z between the members of the alumni.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-10 lg:p-18 space-y-6">
            {" "}
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-">Our Objectives</h2>
            <p className="text-textGray text-[17px]">
              As a dynamic organization, keen and excellence of CEC and its alumni, the alumni association strives to nurture a lifelong intellectual
              and emotional relationship with a college and amongst alumni; and to provide sustainable platform for effective networking, goodwill and
              support.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center text-center space-y-6">
          <Image src={visionImage4} alt="visionIcon" />
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-10">Our Vision</h2>
          <p className="text-textGray text-xl max-w-sm">
            Alumni Association of Canara Engineer’s vision is to develop a dedicated and dynamic global alumni community whose members are committed
            to each other and to develop connections among alumni and students to strengthen their commitment to college.
          </p>
        </div>
      </div>
    </section>
  );
};
export default EventVision;

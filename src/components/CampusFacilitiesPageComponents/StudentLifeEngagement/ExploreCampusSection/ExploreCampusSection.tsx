import ExploreCampus from "@/components/Common/ExploreCampus/ExploreCampus";
import data from "../../../../utils/exploreCampusData/exploreCampusData.json"



const ExploreCampusSection = () => {
  return <ExploreCampus campusEvents={data} />;
};

export default ExploreCampusSection;
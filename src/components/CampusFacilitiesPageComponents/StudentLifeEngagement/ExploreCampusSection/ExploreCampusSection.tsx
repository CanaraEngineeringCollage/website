import ExploreCampus from "@/components/Common/ExploreCampus/ExploreCampus";
import data from "../../../../utils/exploreCampusData/exploreCampusData.json"

const campusEvents = [
  {
    
        id: 1,
        category: "Fest",
        date: "FESTS |  Feb 10, 2025",
        title: "Bringing Innovation & Excitement to Campus",
        description: "The annual TechFest showcased groundbreaking student projects, AI innovations & a thrilling hackathon.",
        image: "/campusFacilitiesPageImages/studentLifePageImages/1.png",
      },
      {
        id: 2,
        category: "Sports",
        date: "exam updates |  Mar 5, 2025",
        title: "Mid-Semester Exams Begin with Prep Sessions",
        description: "Students gear up for mid-semester exams with prep workshops & expert guidance from faculty.",
        image: "/campusFacilitiesPageImages/studentLifePageImages/2.png",
      },
      {
        id: 3,
        category: "Academics",
        date: "Kala 2025|  JUL 25, 2025",
        title: "Cultural Fest Showcases Music, Dance & Artistic Talent",
        description: "Music, dance & drama lit up the stage as students showcased their creativity & passion.",
        image: "/campusFacilitiesPageImages/studentLifePageImages/3.png",
      },
      {
        id: 4,
        category: "Academics",
        date: "STUDENT ACTIVITY |  JUN 10, 2025",
        title: "Initiative to Create Lasting Community Impact",
        description:
          "From environmental clean-ups to education drives, students step up to make a difference through meaningful social responsibility projects.",
        image: "/campusFacilitiesPageImages/studentLifePageImages/4.png",
      },
  // Add more events as needed
];

const ExploreCampusSection = () => {
  return <ExploreCampus campusEvents={data} />;
};

export default ExploreCampusSection;
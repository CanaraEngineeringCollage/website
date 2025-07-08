import React from "react";

const thrustAreas = [
  "Artificial intelligence",
  "Data science and analytics",
  "Data mining",
  "Distributed Computing",
  "VLSI",
  "IOT and Embedded systems",
  "Power systems",
  "Energy Engineering",
  "Additive Manufacturing",
  "Advanced Manufacturing Systems",
  "Advanced Materials Processing and Characterisation",
  "Blockchain technology",
  "Cyber security",
];

const objectives = [
  "To foster a research culture among faculty members, students, and research scholars to engage in research activities.",
  "To support funding and grant opportunities, both internal and external agencies for research and innovation projects.",
  "To facilitate collaborative project work among the faculty, students, and research scholars within the institution and external organization",
];

const Home = () => {
  return (
    <div className=" text-[#86868B] mx-5 text-[17px]">
      <h1 className="text-[#86868B] text-xl font-extrabold mb-2">RESEARCH AND DEVELOPMENT</h1>
      <div className="space-y-8">
        <p>
          The only teaching model doesn’t match the current rapid developments in technical education. Imparting quality education in technical
          colleges needs to be ensured with up-to-date knowledge of technology and science. This can be ensured with the active participation of
          faculty and students in research & development activities. Thus, the college's R&D, innovation cell has been established to inculcate
          research activities among faculty, scholars, and students.The research activity comprising fundamental research, interdisciplinary and
          multidisciplinary research, and product developments till TRL 6 to 7 are encouraged under the cell. Further, faculty and students were
          motivated to carry out projects with government and private funded projects. Also, the college is striving to impart a culture of
          collaboration projects with Tier-1 institutes.
        </p>
        <div>
          <h1 className="text-[#86868B] text-xl font-extrabold mb-2">Thrust Areas</h1>
          <ul className="list-decimal ml-5 text-lg">
            {thrustAreas.map((item, index) => (
              <li className="pb-1">{item}</li>
            ))}
          </ul>
        </div>
          <div>
          <h1 className="text-[#86868B] text-xl font-extrabold mb-2">Objectives</h1>
          <ul className="list-decimal ml-5 text-lg">
            {objectives.map((item, index) => (
              <li className="pb-1">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

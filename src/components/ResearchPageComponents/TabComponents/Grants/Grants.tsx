import React from "react";

const fundedProjectsData = [
  {
    department: "CSD",
    name: "Encephaloelectric Limb Prosthesis Control System",
    year: "2025-26",
    amount: "65,000",
    fundingAgency: "CSRG, CEC",
    mode: "Internal",
    status: "Ongoing",
  },
  {
    department: "IS&E, CS&E",
    name: "AI-Driven Multispectral Imaging for Early Stress Detection of Panama Wilt in Banana Plantations",
    year: "2025-26",
    amount: "20,000",
    fundingAgency: "CSRG, CEC",
    mode: "Internal",
    status: "Ongoing",
  },
  {
    department: "CS&E",
    name: "IoT and AI-Based Detection and Classification of Yellow Leaf Disease in Arecanut and Coconut Plantations",
    year: "2025-26",
    amount: "40,000",
    fundingAgency: "CSRG, CEC",
    mode: "Internal",
    status: "Ongoing",
  },
  {
    department: "CS&E, CSD",
    name: "A Deep Learning Based Automated Model for the Identification of Historical Event Elements and Narration of Historical Event Facts Based on Historical Event Elements Carved on an Ancient Temple in Dakshina Kannada District",
    year: "2025-26",
    amount: "40,000",
    fundingAgency: "CSRG, CEC",
    mode: "Internal",
    status: "Ongoing",
  },
  {
    department: "IS&E",
    name: "AI-Driven Assistive Smart Cane for Obstacle and Vehicle Detection",
    year: "2025-26",
    amount: "10,000",
    fundingAgency: "CSRG, CEC",
    mode: "Internal",
    status: "Ongoing",
  },
  {
    department: "CSE & ISE",
    name: "AI-Assisted Smart Helmet to Enhance Two-Wheeler Rider Safety",
    year: "2025-26",
    amount: "25,000",
    fundingAgency: "CSRG, CEC",
    mode: "Internal",
    status: "Ongoing",
  },
  {
    department: "ECE",
    name: "Electric Vehicle Retrofit",
    year: "2021-22",
    amount: "221,190",
    fundingAgency: "Kaup Shenoy Associates, Mangalore",
    mode: "External",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Development of 3D printing filaments from recycled PET",
    year: "2020-21",
    amount: "3,041,764",
    fundingAgency: "DST",
    mode: "External",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Semi-Automation of Gold Refinery System",
    year: "2017-18",
    amount: "177,000",
    fundingAgency: "Abharan Jewellers",
    mode: "External",
    status: "Completed",
  },
];

const studentGrantsData = [
  {
    department: "CSBS",
    name: "Detecting The Untruth: A Deep Learning Framework for Rumor Analysis in Social Media",
    year: "2024-25",
    amount: "3,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CSD",
    name: "ACCIALERT - Real Time IoT-Based Accident Detection and Smart Emergency Communication System",
    year: "2024-25",
    amount: "4,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "Helical Antenna for Satellite Reception and Aircraft Communication",
    year: "2024-25",
    amount: "5,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "Solar Panel Cleaning Bot",
    year: "2024-25",
    amount: "6,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "GPS Tracking System for Women Safety",
    year: "2024-25",
    amount: "4,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "IS&E",
    name: "Smartlung Diagnostics: Oncocaps Powered by Capsulecare for Lung Cancer Detection and Classification",
    year: "2024-25",
    amount: "5,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "Low Cost Myoelectric Prosthetic Arm",
    year: "2024-25",
    amount: "5,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "Non-Invasive Temperature & Glucose Monitoring",
    year: "2024-25",
    amount: "5,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design and Fabrication of Automated Guided Vehicle",
    year: "2024-25",
    amount: "6,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "IS&E",
    name: "Detection of Gastric Cancer Through Advanced Endoscopic Imaging Technology Using CNN",
    year: "2023-24",
    amount: "5,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "IS&E",
    name: "Intellitext: Digital Recognition of Handwritten Text",
    year: "2023-24",
    amount: "4,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "IS&E",
    name: "Rambutan Fruit Sweetness Profiling",
    year: "2023-24",
    amount: "4,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Solar Sea Water Desalination Machine with RO and UV Purifier",
    year: "2023-24",
    amount: "7,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CS&E",
    name: "Corncare: Plant Disease Defender",
    year: "2023-24",
    amount: "4,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CS&E",
    name: "Virtudine : Discover Nutrient Rich Flavors Through Pixels using Augmented Reality",
    year: "2023-24",
    amount: "4,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CS&E",
    name: "Smart Toll Collection System Using GPS and Geofencing",
    year: "2023-24",
    amount: "4,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CS&E",
    name: "A Blockchain-Based Counterfeit Product Identification System",
    year: "2023-24",
    amount: "4,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CS&E",
    name: "Location Based Mobile Configuring System",
    year: "2023-24",
    amount: "4,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CS&E",
    name: "Smartcrop- A Local Crop Recommendation System using Machine Learning for Dakshina Kannada Region",
    year: "2023-24",
    amount: "2,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CS&E",
    name: "A System for Agri-Food Supply Chain Traceability using Blockchain Technology",
    year: "2022-23",
    amount: "2,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "Smart Wireless Stethoscope",
    year: "2022-23",
    amount: "5,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "Multi-Controlled Electric Wheelchair",
    year: "2022-23",
    amount: "6,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "Automated Rehabilitation Gloves",
    year: "2022-23",
    amount: "6,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "IS&E",
    name: "Angayalli Aarogya – App for Medicinal Herbs",
    year: "2022-23",
    amount: "3,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design And Fabrication of Wheelchair Automator",
    year: "2020-21",
    amount: "8,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design And Development of Mobile Cremator",
    year: "2020-21",
    amount: "6,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Sorting Machine for Oranges Using Camera Sensors",
    year: "2020-21",
    amount: "6,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Fuel Extraction from Waste Plastic Using Pyrolysis",
    year: "2020-21",
    amount: "7,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "Covid Tracker – GPS And Image Capture",
    year: "2020-21",
    amount: "3,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CS&E",
    name: "Atlas – Multi-Functional Web Tool",
    year: "2020-21",
    amount: "6,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design and Fabrication of Agriculture and Domestic Purpose Cleaning Gadget",
    year: "2020-21",
    amount: "4,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ISE",
    name: "Aves Vocalization Detection System Using Machine Learning",
    year: "2019-20",
    amount: "4,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "CS&E",
    name: "Text Detection for Visually Impaired Using Raspberry Pi",
    year: "2019-20",
    amount: "4,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design And Development of Medhu Vada Making Machine",
    year: "2019-20",
    amount: "5,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Semi-Automated Plate Lifting and Floor Cleaning Machine",
    year: "2019-20",
    amount: "6,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Automation of Extrusion Machine for Producing 3D Printing Filament",
    year: "2019-20",
    amount: "5,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design and Development of Medicine Vending Machine",
    year: "2019-20",
    amount: "5,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design and Fabrication of Modified Water Heater for Areca Husk Briquettes",
    year: "2019-20",
    amount: "5,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design and Fabrication of Paper Cutting Machine for Bag Preparation",
    year: "2019-20",
    amount: "5,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design and Development of Oil Expeller",
    year: "2019-20",
    amount: "5,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design and Fabrication of Semiautomatic Plate Washing Machine",
    year: "2018-19",
    amount: "9,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Cotton Ginning Machine",
    year: "2018-19",
    amount: "7,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Kitchen Top Bio-Digester",
    year: "2017-18",
    amount: "9,500",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design and Development of Sorting Machine for Oranges on Conveyor Belt with Vision System",
    year: "2017-18",
    amount: "7,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Fabrication and Development of Automatic Gas Control and Safety Kit",
    year: "2017-18",
    amount: "6,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "Mechanical",
    name: "Design and Fabrication of Improved Biomass Cook Stove for Areca Nut Husk Pellets",
    year: "2017-18",
    amount: "5,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
  {
    department: "ECE",
    name: "Analysing the Brain MRI Image Using Serial and Parallel (Treading) Processing Techniques",
    year: "2017-18",
    amount: "4,000",
    fundingAgency: "KSCST, India",
    status: "Completed",
  },
];

const Grants = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Faculty Grants Table */}
      <div className="overflow-x-auto">
                 <h1 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Grants</h1>
        <h2 className="text-[20px] text-[#1d1d1f] font-bold mb-4">
          External/Internal Research Grants for Faculty
        </h2>
        <div className="rounded overflow-x-auto lg:overflow-hidden border border-gray-200 w-full">
          <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
            <thead>
              <tr className="bg-[#F3F8FC] text-[#2884CA]">
                <th className="py-3 md:px-4 px-2 border-b">Department</th>
                <th className="py-3 md:px-4 px-2 border-b">
                  Name of the research project / endowment
                </th>
                <th className="py-3 md:px-4 px-2 border-b">Year of Award</th>
                <th className="py-3 md:px-4 px-2 border-b">
                  Amount Sanctioned
                </th>
                <th className="py-3 md:px-4 px-2 border-b">
                  Name of the Funding Agency
                </th>
                <th className="py-3 md:px-4 px-2 border-b">Mode</th>
                <th className="py-3 md:px-4 px-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody className="text-textGray">
              {fundedProjectsData.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 ">
                  <td className="py-3 md:px-4 px-2">{item.department}</td>
                  <td className="py-3 md:px-4 px-2">{item.name}</td>
                  <td className="py-3 md:px-4 px-2 whitespace-nowrap">
                    {item.year}
                  </td>
                  <td className="py-3 md:px-4 px-2">{item.amount}</td>
                  <td className="py-3 md:px-4 px-2">{item.fundingAgency}</td>
                  <td className="py-3 md:px-4 px-2">{item.mode}</td>
                  <td className="py-3 md:px-4 px-2">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Grants Table */}
      <div className="overflow-x-auto">
        <h2 className="text-[20px] text-[#1d1d1f] font-bold mb-4">
          External Research Grants for Students
        </h2>
        <div className="rounded overflow-x-auto lg:overflow-hidden border border-gray-200 w-full">
          <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
            <thead>
              <tr className="bg-[#F3F8FC] text-[#2884CA]">
                <th className="py-3 md:px-4 px-2 border-b">Department</th>
                <th className="py-3 md:px-4 px-2 border-b">
                  Name of the research project / endowment
                </th>
                <th className="py-3 md:px-4 px-2 border-b">Year of Award</th>
                <th className="py-3 md:px-4 px-2 border-b">
                  Amount Sanctioned
                </th>
                <th className="py-3 md:px-4 px-2 border-b">
                  Name of the Funding Agency
                </th>
                <th className="py-3 md:px-4 px-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody className="text-textGray">
              {studentGrantsData.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 ">
                  <td className="py-3 md:px-4 px-2">{item.department}</td>
                  <td className="py-3 md:px-4 px-2">{item.name}</td>
                  <td className="py-3 md:px-4 px-2 whitespace-nowrap">
                    {item.year}
                  </td>
                  <td className="py-3 md:px-4 px-2">{item.amount}</td>
                  <td className="py-3 md:px-4 px-2">{item.fundingAgency}</td>
                  <td className="py-3 md:px-4 px-2">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Grants;
import React from "react"
 const fundedProjectsData =[
  {
    "name": "Detecting the Untruth: A Deep Learning Framework for Rumor Analysis in Social Media",
    "year": "2024-25",
    "amount": "3,500",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Aves Vocalization Detection System Using Machine Learning",
    "year": "2019-20",
    "amount": "4000",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Text Detection For Visually Impaired Using Raspberry Pi",
    "year": "2019-20",
    "amount": "4500",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Design And Development of Medhu Vada Making Machine",
    "year": "2019-20",
    "amount": "5500",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Semi-Automated Plate Lifting and Floor Cleaning Machine",
    "year": "2019-20",
    "amount": "6000",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Automation Of Extrusion Machine for Producing 3D Printing Filament",
    "year": "2019-20",
    "amount": "5000",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Design And Development of Medicine Vending Machine",
    "year": "2019-20",
    "amount": "5000",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Design And Fabrication of Modified Water Heater for Areca Husk Briquettes",
    "year": "2019-20",
    "amount": "5000",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Design And Fabrication of Paper Cutting Machine for Bag Preparation",
    "year": "2019-20",
    "amount": "5000",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Design and Development of Oil Expeller",
    "year": "2019-20",
    "amount": "5500",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Design And Fabrication Of Semiautomatic Plate Washing Machine",
    "year": "2018-19",
    "amount": "9000",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Cotton Ginning Machine",
    "year": "2018-19",
    "amount": "7000",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Kitchen Top Bio-Digester",
    "year": "2017-18",
    "amount": "9500",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Design And Development Of Sorting Machine For Oranges On Conveyor Belt With Vision System",
    "year": "2017-18",
    "amount": "7000",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Fabrication And Development Of Automatic Gas Control And Safety Kit",
    "year": "2017-18",
    "amount": "6000",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Design And Fabrication Of Improved Biomass Cook Stove For Areca Nut Husk Pellets",
    "year": "2017-18",
    "amount": "5000",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Analysing The Brain MRI Image Using Serial And Parallel (Treading) Processing Techniques",
    "year": "2017-18",
    "amount": "4000",
    "fundingAgency": "KSCST, India",
    "status": "completed"
  },
  {
    "name": "Semi-automation of gold refinery system",
    "year": "2017-18",
    "amount": "177000",
    "fundingAgency": "Abharan Jewellers",
    "status": "Completed"
  },
  {
    "name": "Detection Of Gastric Cancer Through Advanced Endoscopic Imaging Technology Using Cnn",
    "year": "2023-24",
    "amount": "5,000",
    "fundingAgency": "KSCST",
    "status": "Completed"
  },
  {
    "name": "Intellitext: Digital Recognition Of Handwritten Text",
    "year": "2023-24",
    "amount": "4,500",
    "fundingAgency": "KSCST",
    "status": "Completed"
  },
  {
    "name": "Rambutan Fruit Sweetness Profiling: Integrating Technology For Enhanced Classification",
    "year": "2023-24",
    "amount": "4,000",
    "fundingAgency": "KSCST",
    "status": "Completed"
  },
  {
    "name": "Solar Sea Water Desalination Machine With RO And UV Purifier",
    "year": "2023-24",
    "amount": "7,000",
    "fundingAgency": "KSCST",
    "status": "Completed"
  },
  {
    "name": "A System for agri-food supply chain traceability using blockchain technology",
    "year": "2022-23",
    "amount": "2000",
    "fundingAgency": "KSCST",
    "status": "Completed"
  },
  {
    "name": "Smart Wireless Stethoscope",
    "year": "2022-23",
    "amount": "5000",
    "fundingAgency": "KSCST",
    "status": "Completed"
  },
  {
    "name": "Multi-controlled electric wheelchair",
    "year": "2022-23",
    "amount": "6000",
    "fundingAgency": "KSCST",
    "status": "Completed"
  },
  {
    "name": "Automated Rehabilitation Gloves",
    "year": "2022-23",
    "amount": "6000",
    "fundingAgency": "KSCST",
    "status": "Completed"
  },
  {
    "name": "Angayalli Aarogya – An app to identify and recommend medicinal values in herbs",
    "year": "2022-23",
    "amount": "3000",
    "fundingAgency": "KSCST",
    "status": "Completed"
  },
  {
    "name": "Electric Vehicle Retrofit",
    "year": "2021-22",
    "amount": "221,190",
    "fundingAgency": "Kaun Shenoy Associates, Mangalore",
    "status": "Completed"
  },
  {
    "name": "Development of filaments for 3D printing and other applications from recycled PET bottles and other plastic waste",
    "year": "2020-21",
    "amount": "3,041,764",
    "fundingAgency": "Department of Science and Technology",
    "status": "Completed"
  },
  {
    "name": "Design And Fabrication Of Wheelchair Automator",
    "year": "2020-21",
    "amount": "8000",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Design And Development Of Mobile Cremator",
    "year": "2020-21",
    "amount": "6000",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Design And Development Of Sorting Machine For Oranges On A Conveyor Belt Using Camera Sensors",
    "year": "2020-21",
    "amount": "6000",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Design And Fabrication Of Extraction Of Fuel From Waste Plastic Using Pyrolysis",
    "year": "2020-21",
    "amount": "7000",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Covid Tracker – Using Gps And Image Capture",
    "year": "2020-21",
    "amount": "3500",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Atlas – A Multi-Functional Web Tool For Distant Learning And Collaboration",
    "year": "2020-21",
    "amount": "6000",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Design And Fabrication Of Agriculture And Domestic Purpose Cleaning Gadget",
    "year": "2020-21",
    "amount": "4500",
    "fundingAgency": "KSCST, India",
    "status": "Completed"
  },
  {
    "name": "Accalert: Real Time IoT-based Accident Detection Smart Emergency Communication System",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Helical Antenna Satellite Reception Aircraft Communication",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Solar Panel Cleaning Bot",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "GPS Tracking Women Safety",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Smartlung Diagnostics Oncocaps Capsulecare Lung Cancer Detection Classification",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Design Fabrication Automated Guided Vehicle Comcare Plant Disease Defendery",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Smart Toll Collection GPS Geofencing",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Virtudine Nutrient Rich Flavors Pixels Augmented Reality Location Based Mobile Configuring System",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Blockchain Counterfeit Product Identification",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Smartcrop Local Crop Recommendation Machine Learning Dakshina Kannada Region",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Low Cost Myoelectric Prosthetic Arm",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  },
  {
    "name": "Non-invasive Temperature Blood Glucose Level",
    "year": "2024-25",
    "amount": "Not specified",
    "fundingAgency": "KSCST",
    "status": "On-going"
  }
]

const Grants = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
        <thead>
          <tr className="bg-[#F3F8FC] text-[#2884CA]">
            <th className="py-3 md:px-4 px-1 border-b">Name of the research project / endowment</th>
            <th className="py-3 md:px-4 px-1 border-b">Year of Award</th>
            <th className="py-3 md:px-4 px-1 border-b">Amount Sanctioned</th>
            <th className="py-3 md:px-4 px-1 border-b">Name of the Funding Agency</th>
            <th className="py-3 md:px-4 px-1 border-b">Status</th>
          </tr>
        </thead>
        <tbody className="text-textGray">
          {fundedProjectsData.map((item, index) => (
            <tr key={index} className="h-24 max-h-24">
              <td className="py-3 md:px-4 px-1 border-b">{item.name}</td>
              <td className="py-3 md:px-4 px-1 border-b">{item.year}</td>
              <td className="py-3 md:px-4 px-1 border-b">{item.amount}</td>
              <td className="py-3 md:px-4 px-1 border-b">{item.fundingAgency}</td>
              <td className="py-3 md:px-4 px-1 border-b">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grants;

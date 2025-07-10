import React from 'react'
const data = [
  {
    patentNo: "202541014350",
    patentTitle: "Smart Traffic Signal System for Emergency Vehicle Priority",
    applicantName: "Canara Engineering College",
    inventorsName: ["Dhananjaya G M", "R. H. Goudar", "Vijayalaxmi Rathod", "Anjanabharagavi Kulkarni", "Minal Patil", "Dr. H. Manoj T", "Gadiyar Geetabai S", "Hukkeri Dr B E", "Rangaswamy", "Anita Veerappa Karkikatti", "Rohit B Kaliwal"],
    status: "Published",
    year: 2025
  },
  {
    slNo: 2,
    patentNo: "202541014349",
    patentTitle: "6G IoT-Enabled Smart System for Kidnapping Prevention and Child Safety Monitoring",
    applicantName: "Canara Engineering College",
    inventorsName: ["Anjanabharagavi Kulkarni", "R. H. Goudar", "Vijayalaxmi Rathod", "Dhananjaya G M", "Minal Patil", "Dr. H. Manoj T", "Gadiyar", "Dr. H Nagesh", "Shenoy", "Dr B E", "Rangaswamy", "Santosh Deshpande", "Rohit B Kaliwal"],
    status: "Published",
    year: 2025
  },
  {
    slNo: 3,
    patentNo: "202541014688",
    patentTitle: "Integrating Neuromorphic Computing and Reinforcement Learning in Hybrid AI for Autonomous Systems",
    applicantName: "Canara Engineering College",
    inventorsName: ["Prakul Hiremath", "R. H. Goudar", "Dhananjaya G M", "Dr. B E", "Rangaswamy", "Rohit B Kaliwal", "Dr. H. Manoj T.", "Gadiyar", "Dr. H Nagesh", "Shenoy", "Suchitra N Shenoy", "Dr. Rajgopal K T", "S L Deshpande"],
    status: "Published",
    year: 2025
  },
  {
    slNo: 4,
    patentNo: "202541014687",
    patentTitle: "Innovative CO2 Emission Filters for Vehicles: Pioneering Net-Zero Carbon Solutions with Advanced Adsorption and Smart Monitoring",
    applicantName: "Canara Engineering College",
    inventorsName: ["Prakul Hiremath", "R. H. Goudar", "Dhananjaya G M", "Dr. B E", "Rangaswamy", "Shivanagowda G M", "Dr. H. Manoj T.", "Gadiyar", "Dr. H Nagesh", "Shenoy", "Suchitra N Shenoy", "Dr. Rajgopal K T", "Abhishek S Rao"],
    status: "Published",
    year: 2025
  },
  {
    slNo: 5,
    patentNo: "202541014690",
    patentTitle: "Dynamic Adjustable Sleeve D&M for Enhanced Universal CO2 Emission Filters",
    applicantName: "Canara Engineering College",
    inventorsName: ["Prakul Hiremath", "R. H. Goudar", "Dhananjaya G M", "Dr. B E", "Rangaswamy", "Shivanagowda G M", "Dr. H. Manoj T.", "Gadiyar", "Dr. H Nagesh", "Shenoy", "Vijayalaxmi Rathod", "Ranjana", "Nadagouda", "Mahesh Neeleagar"],
    status: "Published",
    year: 2025
  },
  {
    slNo: 6,
    patentNo: "202541014689",
    patentTitle: "Hyper-Adaptive Manufacturing Using Multi-Agent AI for Autonomous Production Optimization",
    applicantName: "Canara Engineering College",
    inventorsName: ["Prakul Hiremath", "R. H. Goudar", "Dhananjaya G M", "Dr. B E", "Rangaswamy", "Shivanagowda G M", "Dr. H. Manoj T.", "Gadiyar", "Dr. H Nagesh", "Shenoy", "Vijayalaxmi Rathod", "Ranjana", "Mahesh Neeleagar"],
    status: "Published",
    year: 2025
  },
  {
    slNo: 7,
    patentNo: "202541015201",
    patentTitle: "Innovative Web-Based Platform for Sustainable and Efficient Canteen Operations",
    applicantName: "Canara Engineering College",
    inventorsName: ["Ms. Diya", "Ms. Prithvi S", "Nayak", "Ms. Samridhi S", "Ms. Shradha J", "Naik", "Prof. Ramesh", "Nayak", "Dr. H. Manoj T.", "Gadiyar", "Dr. Nagesh H R", "Dr. Udaya Kumar K", "Shenoy", "Dr. H Nagesh", "Shenoy"],
    status: "Published",
    year: 2025
  },
  {
    slNo: 8,
    patentNo: "202541015200",
    patentTitle: "InterCode - Seamless Real-Time Code Collaboration for Technical Interviews",
    applicantName: "Canara Engineering College",
    inventorsName: ["Ms. Amulya Jois", "Ms. Rakshitha Shetty A", "Mr. Tilak Shetty", "Mr. Venkatesh R.", "Kamath", "Dr. H. Manoj T.", "Gadiyar", "Prof. Sandeep Kini M", "Dr. Udaya Kumar K", "Shenoy", "Dr. H Nagesh", "Shenoy", "Dr. Demian Antony D'mello"],
    status: "Published",
    year: 2025
  },
  {
    slNo: 9,
    patentNo: "202541022321",
    patentTitle: "Smart AI Coconut Scraper",
    applicantName: "Geethalaxmi",
    inventorsName: ["Geethalaxmi", "Sushma M D A", "Vasanth Nayak", "Arjun K", "Dr. Sumathi Pawar", "Dr. Praahas Amin", "Suma K", "Dr. Thyagaraju G S", "Dr. H. Manoj T.", "Gadiyar", "Dr. Nagesh H. R."],
    status: "Published",
    year: 2025
  },
  {
    slNo: 10,
    patentNo: "202441003274",
    patentTitle: "Stock Price Movement Prediction Using Machine",
    applicantName: "KLS Gogte Institute of Technology, Belagavi",
    inventorsName: ["Dr. Jagadisha N", "Dr. Ranjana Battur"],
    status: "Application Published",
    year: 2024
  },
  {
    slNo: 11,
    patentNo: "202441003204",
    patentTitle: "Optiretina: An Efficient Approach For Diabeticretinopathy Classification Using Convolutional Neural Networks",
    applicantName: "Canara Engineering College",
    inventorsName: ["A Pradyumna", "Prabhu (4CB201S001)", "Abhay S K (4CB201S002)", "Chaithra Nayak (4CB201S019)", "Chirag S Honavar (4CB201S020)", "JAGADISHA N"],
    status: "Application Published",
    year: 2024
  },
  {
    slNo: 12,
    patentNo: "202341017831",
    patentTitle: "Serpentine Topology For Energy Storage In Electric Vehicles",
    applicantName: "Divyesh Divakar",
    inventorsName: ["Divyesh Divakar", "Anand Bhat B", "B Krishna Prabhu", "Ramesh E", "Naveen A Kalal"],
    status: "Application Published",
    year: 2023
  },
  {
    slNo: 13,
    patentNo: "360728-001",
    patentTitle: "Voice Recognition Control Device For Massage Chairs",
    applicantName: "Dr. Dankan Gowda V",
    inventorsName: ["Sandeep Prabhu M"],
    status: "Granted",
    year: 2023
  },
  {
    slNo: 14,
    patentNo: "627721",
    patentTitle: "IoT Based Smart Medical Refrigerator with Temperature Monitoring And Alerts For Pharmaceutical Storage",
    applicantName: "Dr. Nitin Jagannath Patil",
    inventorsName: ["Sandeep Prabhu M"],
    status: "Granted",
    year: 2023
  },
  {
    slNo: 15,
    patentNo: "202211065454",
    patentTitle: "Cloud Based IoT Smart And Accurate Traffic Monitoring System in Real Time Applications For Developed Countries To Reduce Traffic Related Issues",
    applicantName: "Rudresha S",
    inventorsName: ["Divyesh Divakar", "Anand Bhat B"],
    status: "Application Published",
    year: 2022
  },
  {
    slNo: 16,
    patentNo: "202241047519",
    patentTitle: "Smart Integrated IoT And MI Based Safety System For Monitoring Elderly Wandering People",
    applicantName: "Mr. Harisha K S",
    inventorsName: ["Sandeep Prabhu M"],
    status: "Published",
    year: 2022
  },
  {
    slNo: 17,
    patentNo: "202141002572",
    patentTitle: "Motorcycle Pitch With Non- Linear Control And Accident- Avoidance System Using IoT",
    applicantName: "Dr. Dankan Gowda V",
    inventorsName: ["Sandeep Prabhu M"],
    status: "Published",
    year: 2021
  },
  {
    slNo: 18,
    patentNo: "202141017421",
    patentTitle: "Women Safety Using Intelligence Of Things",
    applicantName: "Mr. Sandeep Prabhu M",
    inventorsName: ["Sandeep Prabhu M"],
    status: "Published",
    year: 2021
  },
  {
    slNo: 19,
    patentNo: "202141026215",
    patentTitle: "IoT And Cloud Based Agricultural Monitoring System",
    applicantName: "Dr. Vasanthkumar",
    inventorsName: ["Sandeep Prabhu M"],
    status: "Published",
    year: 2021
  },
  {
    slNo: 20,
    patentNo: "202241005537",
    patentTitle: "Framework For Diagnosing Covid-19",
    applicantName: "Mr. Sandeep Prabhu M",
    inventorsName: ["Sandeep Prabhu M"],
    status: "Published",
    year: 2021
  },
  {
    slNo: 21,
    patentNo: "20204105629",
    patentTitle: "Industrial Safety Monitoring And Accident Reporting System Using IoT",
    applicantName: "Mr. Naveen Pai G",
    inventorsName: ["Sandeep Prabhu M"],
    status: "Published",
    year: 2020
  }
];

const Patents = () => {
  return (
<div className="overflow-x-auto">
  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
    <thead>
      <tr className="bg-[#F3F8FC] text-[#2884CA]">
        <th className="py-3 md:px-4 px-1 border-b">Sl No</th>
        <th className="py-3 md:px-4 px-1 border-b">Patent No.</th>
        <th className="py-3 md:px-4 px-1 border-b">Patent Title</th>
        <th className="py-3 md:px-4 px-1 border-b">Applicant Name</th>
        <th className="py-3 md:px-4 px-1 border-b">Inventors Name</th>
        <th className="py-3 md:px-4 px-1 border-b">Status</th>
        <th className="py-3 md:px-4 px-1 border-b">Year</th>
      </tr>
    </thead>
    <tbody className="text-textGray">
      {data.map((item, index) => (
        <tr key={index} >
          <td className="py-3 md:px-4 align-top px-1 border-b">{index+1}</td>
          <td className="py-3 md:px-4 align-top px-1 border-b">{item.patentNo}</td>
          <td className="py-3 md:px-4 align-top px-1 border-b">{item.patentTitle}</td>
          <td className="py-3 md:px-4 align-top px-1 border-b">{item.applicantName}</td>
          <td className="py-3 md:px-4 align-top px-1 border-b">
            <ul className="list-disc pl-5">
              {item.inventorsName.map((inventor, i) => (
                <li key={i} className="py-1">{inventor}</li>
              ))}
            </ul>
          </td>
          <td className="py-3 md:px-4 px-1 align-top border-b">{item.status}</td>
          <td className="py-3 md:px-4 px-1 align-top border-b">{item.year}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  )
}

export default Patents

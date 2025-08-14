import React from "react";

const research = ["Organic Chemistry", "Inorganic Chemistry", "Corrosion Science"];
const detailes = [
  "Boiling Water Bath",
  "Digital melting point apparatus",
  "Electronic Balance",
  "Fume Exhaust Hood",
  "Hot air oven",
  "Heating mantle",
  "Hot Plate",
  "Ion exchange plant",
  "Ice Flaker",
  "Micro oven Grill",
  "Magnetic stirrer",
  "Oil Free Vacuum Pump",
  "Oil Bath",
  "Rotary Vacuum flash evaporator",
  "UV- Visible Spectrophotometer",
  "Water Bath thermostatic",
];

// data.ts
 const researchGuides = [
  {
    name: "Dr. Nagesh H R",
    scholars: [
      "Mr. Ramalingam H.M – Completed",
      "Mr. Ravinarayana B – Completed",
      "Mr. Bharath Kumar M – Completed",
      "Mr. Sathynedranath Malli – Completed",
      "Mr. Deepak Rao – Completed",
      "Mr. Guru Prasad M.S. – Completed",
      "Mr. Karthik Pai B.H – Completed",
      "Mr. Manjunath Kotari – Completed",
      "Mrs. Asmita Poojeri – Completed",
      "Mr. H Nagesh Shenoy – Completed",
      "Mr. Annappaswamy D.R – Ongoing",
      "Mr. Guruprasad – Ongoing",
      "Ms. Jyothi N – Ongoing",
      "Mrs. Harinakshi C – Ongoing",
      "Mrs. Megharani – Ongoing",
      "Mrs. Suketha – Ongoing",
    ],
  },
  {
    name: "Dr. Demian A. DMello",
    scholars: [
      "Mr. Santosh Kumar D.K. – Completed",
      "Mrs. Usha Kirana S P – Completed",
      "Miss. Annapoorna – Ongoing",
      "Mr. Deepak D. – Ongoing",
      "Miss. Saritha Suvarna – Ongoing",
    ],
  },
  {
    name: "Dr. Udaya Kumar K Shenoy",
    scholars: ["Mr. Ravi B. – Completed", "Ms. Spoorthi B. Shetty – Completed"],
  },
  {
    name: "Dr. Basappa B Kodada",
    scholars: ["Verdine Noronha – Ongoing", "Pooja N S – Ongoing"],
  },
  {
    name: "Dr. Manoj T Gadiyar",
    scholars: ["Mr. Rajagopal K. T – Completed", "Mr. Kishor Shivathaya – Ongoing"],
  },
];

const researchGuides2 = [
  {
    name: "Dr. Ganesh V. Bhat",
    scholars: [
      "Vishwanath Sherigar – Completed",
      "Mr. Padmahasa M – Ongoing",
      "Mr. Vayusutha M – Ongoing",
      "Mrs. Jayashree K – Ongoing",
      "Mrs. Suchitra N Shenoy – Ongoing"
    ],
  },
  {
    name: "Dr. Dayananda G K",
    scholars: [
      "Mr. Mohan A R – Ongoing",
      "Mrs. Tara B B – Ongoing",
    ],
  }]

const domainResearch = [
  "VLSI",
  "IOT and Embedded systems",
  "Power systems",
  "Energy Engineering",
  "Communication Network",
  "Signal Processing",
  "Biomedical Engineering",
  "Control System",
];
const detailes2 = [
  "Power Scopes",
  "Function Generators",
  "Dual Power Supplies",
  "Single Power Supplies",
  "Microstrip Communication Setup",
  "MT 9000 Series Microwave Trainer Setup",
  "Optic Fiber Trainer Kit",
  "IGBT Based Three Phase PWM Inverter",
  "FPGA Based Power Electronics and Motor Control Application Setup",
  "Single Phase MC-MURRAY Bed Ford Full Bridge Inverter Setup",
  "DSP Based DC Motor Speed Control Setup",
  "DGVACV AC Trainer Setup",
  "FPGA Based Power Electronics Trainer Kit",
  "PCB Designing & Fabrication",
  "3D Printing",
  "Electronic store",
];

const ResearchCenter = () => {
  return (
    <div className=" text-[#86868B] mx-5 text-[17px]">
      <h1 className="text-[#86868B] text-[20px] font-bold mb-5">Dept. of Chemistry</h1>
      <div className="space-y-8">
        <div>
          <h1 className="text-xl font-bold  text-textGray mb-2">Domain of Research</h1>
          <ul className="list-disc ml-5 text-lg">
            {research.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-bold  text-textGray mb-2">Research Facility</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
              <thead>
                <tr className="bg-[#F3F8FC] text-[#2884CA]">
                  <th className="py-3 md:px-4 px-1 border-b">Name</th>
                  <th className="py-3 md:px-4 px-1 border-b">Facility Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-textGray">
                  <td className="px-4 py-3 align-top font-medium">Chemistry Research Laboratory</td>
                  <td className="px-4 py-3">
                    <ul className="list-disc pl-5 space-y-1">
                      {detailes.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold  text-textGray mb-2">Research Guides & Research Scholars</h1>
          <ul className=" ml-5 md:text-lg  text-[14px] leading-7  text-textGray">
            <li className="font-bold mt-5">Dr. Priya V. Frank</li>
            <li className="list-disc ml-10">Lavanya D. Kateel - Completed</li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <h1 className="text-xl font-bold  text-textGray mb-2">Research Facility</h1>
          <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
            <thead>
              <tr className="bg-[#F3F8FC] text-[#2884CA]">
                <th className="py-3 md:px-4 px-1 border-b">Name</th>
                <th className="py-3 md:px-4 px-1 border-b">Facility Details</th>
              </tr>
            </thead>
            <tbody className="text-textGray">
              <tr >
                <td className="py-3 md:px-4 px-1 border-b">Research Center</td>
                <td className="py-3 md:px-4 px-1 border-b">
                  <p>
                    HP Workstation Z2 Tower G9 Workstation with Core I7 processor, 32 GB RAM with Windows11 Professional. Other Softwares: Netbeans,
                    Java, Eclipse, Visual Studio 2012, Python 3.7, Anaconda IDE, Jupyter, SPYDER, MySQL, MS OFFICE 2007, 2016.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="">
          <h2 className="text-xl font-semibold mb-4">Research Guides & Research Scholars</h2>
          <ol className=" pl-5 space-y-3 md:text-lg  text-[14px] leading-7  text-textGray">
            {researchGuides.map((guide, index) => (
              <li key={index}>
                <p className="font-bold">{guide.name}</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  {guide.scholars.map((scholar, idx) => (
                    <li key={idx} className="">
                      {scholar}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Dept. of Electronics & Communications</h2>
          <h2 className="text-lg font-bold mb-4">Domain of Research</h2>
          <ul className="list-disc ml-5 text-lg">
            {domainResearch.map((item, index) => (
              <li className="pb-1">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold  text-textGray mb-2">Research Facility</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
              <thead>
                <tr className="bg-[#F3F8FC] text-[#2884CA]">
                  <th className="py-3 md:px-4 px-1 border-b">Name</th>
                  <th className="py-3 md:px-4 px-1 border-b">Facility Details</th>
                </tr>
              </thead>
              <tbody className="text-textGray">
                <tr >
                  <td className="px-4 py-3 align-top font-medium">R&D Laboratory Analog Oscilloscopes</td>
                  <td className="px-4 py-3">
                    <ul className="list-disc pl-5 space-y-1">
                      {detailes2.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
         <div className="">
          <h2 className="text-xl font-semibold mb-4">Research Guides & Research Scholars</h2>
          <ol className=" pl-5 space-y-3  md:text-lg  text-[14px] leading-7  text-textGray">
            {researchGuides2.map((guide, index) => (
              <li key={index}>
                <p className="font-bold">{guide.name}</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  {guide.scholars.map((scholar, idx) => (
                    <li key={idx} className="">
                      {scholar}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ResearchCenter;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// interface CouncilMember {
//   id: number;
//   name: string;
//   image: string;
//   position: string;
//   subPosition: string;
//   category: string;
//   department?: string;
// }

// // Dummy data for Faculty Members by Department
// const departmentData: CouncilMember[] = [
//   {
//     id: 101,
//     name: "Dr. Anil Kumar",
//     image: "/governingCounsilImages/1.png",
//     position: "Professor",
//     subPosition: "Computer Science & Engineering",
//     category: "faculty",
//     department: "Computer Science & Engineering",
//   },
//   {
//     id: 102,
//     name: "Smt. Priya Desai",
//     image: "/governingCounsilImages/2.png",
//     position: "Associate Professor",
//     subPosition: "Computer Science & Engineering",
//     category: "faculty",
//     department: "Computer Science & Engineering",
//   },
//   {
//     id: 103,
//     name: "Sri. Rohan Sharma",
//     image: "/governingCounsilImages/3.png",
//     position: "Assistant Professor",
//     subPosition: "Computer Science & Engineering",
//     category: "faculty",
//     department: "Computer Science & Engineering",
//   },
//   {
//     id: 104,
//     name: "Dr. Rajesh Sharma",
//     image: "/governingCounsilImages/4.png",
//     position: "Professor",
//     subPosition: "Information Science & Engineering",
//     category: "faculty",
//     department: "Information Science & Engineering",
//   },
//   {
//     id: 105,
//     name: "Sri. Vinod Patel",
//     image: "/governingCounsilImages/5.png",
//     position: "Assistant Professor",
//     subPosition: "Information Science & Engineering",
//     category: "faculty",
//     department: "Information Science & Engineering",
//   },
//   {
//     id: 106,
//     name: "Dr. Lakshmi Nair",
//     image: "/governingCounsilImages/6.png",
//     position: "Professor",
//     subPosition: "Electronics & Communication Engineering",
//     category: "faculty",
//     department: "Electronics & Communication Engineering",
//   },
//   {
//     id: 107,
//     name: "Sri. Arjun Rao",
//     image: "/governingCounsilImages/7.png",
//     position: "Associate Professor",
//     subPosition: "Computer Science & Design",
//     category: "faculty",
//     department: "Computer Science & Design",
//   },
//   {
//     id: 108,
//     name: "Dr. Sunita Gupta",
//     image: "/governingCounsilImages/8.png",
//     position: "Professor",
//     subPosition: "Computer Science & Business System",
//     category: "faculty",
//     department: "Computer Science & Business System",
//   },
//   {
//     id: 109,
//     name: "Sri. Vikram Singh",
//     image: "/governingCounsilImages/9.png",
//     position: "Assistant Professor",
//     subPosition: "Artificial Intelligence & Machine Learning",
//     category: "faculty",
//     department: "Artificial Intelligence & Machine Learning",
//   },
//   {
//     id: 110,
//     name: "Dr. Meena Sharma",
//     image: "/governingCounsilImages/10.png",
//     position: "Professor",
//     subPosition: "Science & Humanities",
//     category: "faculty",
//     department: "Science & Humanities",
//   },
// ];

// const adminData: CouncilMember[] = [
//   {
//     id: 17,
//     name: "Sri Anil Kumar",
//     image: "/governingCounsilImages/1.png",
//     position: "Head of Administration",
//     subPosition: "CEC Admin",
//     category: "admin",
//   },
//   {
//     id: 18,
//     name: "Smt. Priya Sharma",
//     image: "/governingCounsilImages/1.png",
//     position: "Finance Manager",
//     subPosition: "CEC Admin",
//     category: "admin",
//   },
//   {
//     id: 19,
//     name: "Sri Rajesh Nair",
//     image: "/governingCounsilImages/1.png",
//     position: "HR Coordinator",
//     subPosition: "CEC Admin",
//     category: "admin",
//   },
//   {
//     id: 20,
//     name: "Smt. Lakshmi Rao",
//     image: "/governingCounsilImages/1.png",
//     position: "Operations Manager",
//     subPosition: "CEC Admin",
//     category: "admin",
//   },
// ];

// const generalData: CouncilMember[] = [
//   {
//     id: 21,
//     name: "Sri Manoj Gupta",
//     image: "/governingCounsilImages/1.png",
//     position: "Facility Supervisor",
//     subPosition: "CEC General",
//     category: "general",
//   },
//   {
//     id: 22,
//     name: "Smt. Sunita Patil",
//     image: "/governingCounsilImages/1.png",
//     position: "Maintenance Associate Professor",
//     subPosition: "CEC General",
//     category: "general",
//   },
//   {
//     id: 23,
//     name: "Sri Vikram Singh",
//     image: "/governingCounsilImages/1.png",
//     position: "Security Officer",
//     subPosition: "CEC General",
//     category: "general",
//   },
// ];

// const FacultyMembersSection = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("faculty");
//   const [selectedDepartment, setSelectedDepartment] = useState<string>("Computer Science & Engineering");

//   // Combine all data
//   const allData = [...departmentData, ...adminData, ...generalData];

//   // Filter data based on category and department
//   let filteredData: CouncilMember[] = [];
//   if (selectedCategory === "faculty") {
//     filteredData = allData.filter(
//       (item) => item.category === "faculty" && item.department === selectedDepartment
//     );
//   } else {
//     filteredData = allData.filter((item) => item.category === selectedCategory);
//   }

//   // List of departments
//   const departments = [
//     "Computer Science & Engineering",
//     "Information Science & Engineering",
//     "Electronics & Communication Engineering",
//     "Computer Science & Design",
//     "Computer Science & Business System",
//     "Artificial Intelligence & Machine Learning",
//     "Science & Humanities",
//   ];

//   return (
//     <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-16 lg:py-20">
//       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 sm:mb-12 md:mb-16 lg:mb-20">
//         Educators &<br />
//         Administrators
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
//         <div className="md:col-span-5">
//           <div className="w-full sm:w-[80%] mx-auto md:mx-0">
//             <div className="border-b pb-4 sm:pb-5">
//               <h1
//                 className={`text-lg sm:text-xl md:text-[20px] cursor-pointer ${
//                   selectedCategory === "faculty" ? "font-bold text-blue-600" : ""
//                 }`}
//                 onClick={() => {
//                   setSelectedCategory("faculty");
//                   setSelectedDepartment("Computer Science & Engineering"); // Default to CSE
//                 }}
//               >
//                 Faculty Members
//               </h1>
//               {selectedCategory === "faculty" && (
//                 <ul className="ml-4 sm:ml-6 md:ml-10 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
//                   {departments.map((dept) => (
//                     <li
//                       key={dept}
//                       className={`cursor-pointer py-1 ${
//                         selectedDepartment === dept ? "font-bold text-blue-600" : ""
//                       }`}
//                       onClick={() => setSelectedDepartment(dept)}
//                     >
//                       {dept}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             <div className="border-b py-4 sm:py-5">
//               <h1
//                 className={`text-lg sm:text-xl md:text-[20px] cursor-pointer ${
//                   selectedCategory === "admin" ? "font-bold text-blue-600" : ""
//                 }`}
//                 onClick={() => {
//                   setSelectedCategory("admin");
//                   setSelectedDepartment(""); // Reset department
//                 }}
//               >
//                 Administrative Associate Professor
//               </h1>
//             </div>
//             <div className="py-4 sm:py-5 border-b">
//               <h1
//                 className={`text-lg sm:text-xl md:text-[20px] cursor-pointer ${
//                   selectedCategory === "general" ? "font-bold text-blue-600" : ""
//                 }`}
//                 onClick={() => {
//                   setSelectedCategory("general");
//                   setSelectedDepartment(""); // Reset department
//                 }}
//               >
//                 General Associate Professor
//               </h1>
//             </div>
//           </div>
//         </div>
//         <div className="md:col-span-7 text-sm sm:text-base md:text-lg">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center">
//             {filteredData.map((item, index) => {
//               const isLastCard = index === filteredData.length - 1;
//               const remainder = filteredData.length % 2;
//               const shouldCenterLast = remainder === 1 && isLastCard;

//               return (
//                 <div
//                   key={item.id}
//                   className={`relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[309px] h-[400px] sm:h-[430px] md:h-[450px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center py-4 sm:py-6 shadow-md ${
//                     shouldCenterLast ? "sm:col-span-2 sm:justify-self-center" : ""
//                   }`}
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={260}
//                     height={260}
//                     className="rounded-full w-[80%] sm:w-[85%] md:w-full object-contain"
//                   />
//                   <div className="absolute bottom-0 left-0 w-full h-48 sm:h-52 md:h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
//                   <div className="absolute z-50 top-[75%] sm:top-[78%] md:top-[80%] left-4 sm:left-5 md:left-6">
//                     <h2 className="text-base sm:text-lg md:text-lg font-bold">{item.name}</h2>
//                     <p className="text-xs sm:text-sm md:text-sm">
//                       {item.position}, <span className="font-semibold">{item.subPosition}</span>
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FacultyMembersSection;

"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CouncilMember {
  id: number;
  name: string;
  image: string;
  title: string;
  category: string;
  department?: string;
}

// Dummy data for Faculty Members by Department
const departmentData: CouncilMember[] = [
  {
    id: 101,
    name: "Dr. Anil Kumar",
    image: "/governingCounsilImages/1.png",
    title: "Associate Professor",
    category: "faculty",
    department: "Computer Science & Engineering",
  },
  {
    id: 102,
    name: "Smt. Priya Desai",
    image: "/governingCounsilImages/2.png",
    title: "Professor",
    category: "faculty",
    department: "Computer Science & Engineering",
  },
  {
    id: 103,
    name: "Sri. Rohan Sharma",
    image: "/governingCounsilImages/3.png",
    title: "Professor",
    category: "faculty",
    department: "Computer Science & Engineering",
  },
  {
    id: 104,
    name: "Dr. Rajesh Sharma",
    image: "/governingCounsilImages/4.png",
    title: "Professor",
    category: "faculty",
    department: "Information Science & Engineering",
  },
  {
    id: 105,
    name: "Sri. Vinod Patel",
    image: "/governingCounsilImages/5.png",
    title: "Professor",
    category: "faculty",
    department: "Information Science & Engineering",
  },
  {
    id: 106,
    name: "Dr. Lakshmi Nair",
    image: "/governingCounsilImages/6.png",
    title: "Associate Professor",
    category: "faculty",
    department: "Electronics & Communication Engineering",
  },
  {
    id: 107,
    name: "Sri. Arjun Rao",
    image: "/governingCounsilImages/7.png",
    title: "Professor",
    category: "faculty",
    department: "Computer Science & Design",
  },
  {
    id: 108,
    name: "Dr. Sunita Gupta",
    image: "/governingCounsilImages/8.png",
    title: "Professor",
    category: "faculty",
    department: "Computer Science & Business System",
  },
  {
    id: 109,
    name: "Sri. Vikram Singh",
    image: "/governingCounsilImages/9.png",
    title: "Associate Professor",
    category: "faculty",
    department: "Artificial Intelligence & Machine Learning",
  },
  {
    id: 110,
    name: "Dr. Meena Sharma",
    image: "/governingCounsilImages/10.png",
    title: "Associate Professor",
    category: "faculty",
    department: "Science & Humanities",
  },
];

const adminData: CouncilMember[] = [
  {
    id: 17,
    name: "Sri Anil Kumar",
    image: "/governingCounsilImages/1.png",
    title: "HR Coordinator",
    category: "admin",
  },
  {
    id: 18,
    name: "Smt. Priya Sharma",
    image: "/governingCounsilImages/1.png",
    title: "Operations Manager",
    category: "admin",
  },
  {
    id: 19,
    name: "Sri Rajesh Nair",
    image: "/governingCounsilImages/1.png",
    title: "HR Coordinator",
    category: "admin",
  },
  {
    id: 20,
    name: "Smt. Lakshmi Rao",
    image: "/governingCounsilImages/1.png",
    title: "Operations Manager",
    category: "admin",
  },
];

const generalData: CouncilMember[] = [
  {
    id: 21,
    name: "Sri Manoj Gupta",
    image: "/governingCounsilImages/1.png",
    title: "Maintenance Associate Professor",
    category: "general",
  },
  {
    id: 22,
    name: "Smt. Sunita Patil",
    image: "/governingCounsilImages/1.png",
    title: "Security Officer",
    category: "general",
  },
  {
    id: 23,
    name: "Sri Vikram Singh",
    image: "/governingCounsilImages/1.png",
    title: "Security Officer",
    category: "general",
  },
];

const FacultyMembersSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("faculty");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("Computer Science & Engineering");

  // Combine all data
  const allData = [...departmentData, ...adminData, ...generalData];

  // Filter data based on category and department
  let filteredData: CouncilMember[] = [];
  if (selectedCategory === "faculty") {
    filteredData = allData.filter((item) => item.category === "faculty" && item.department === selectedDepartment);
  } else {
    filteredData = allData.filter((item) => item.category === selectedCategory);
  }

  // List of departments
  const departments = [
    "Computer Science & Engineering",
    "Information Science & Engineering",
    "Electronics & Communication Engineering",
    "Computer Science & Design",
    "Computer Science & Business System",
    "Artificial Intelligence & Machine Learning",
    "Science & Humanities",
  ];

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-16 lg:py-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 sm:mb-12 md:mb-16 lg:mb-20">
        Educators &<br />
        Administrators
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="md:col-span-5">
          <div className="w-full sm:w-[80%] mx-auto md:mx-0">
            <div className="border-b-2 border-border pb-4 sm:pb-5">
              <h1
                className={`text-lg sm:text-xl md:text-[20px] cursor-pointer ${selectedCategory === "faculty" ? "font-bold text-blue-600" : ""}`}
                onClick={() => {
                  setSelectedCategory("faculty");
                  setSelectedDepartment("Computer Science & Engineering"); // Default to CSE
                }}
              >
                Faculty Members
              </h1>
              {selectedCategory === "faculty" && (
                <ul className="ml-4 sm:ml-6 md:ml-10 text-sm sm:text-base leading-relaxed mt-2 sm:mt-3">
                  {departments.map((dept) => (
                    <li
                      key={dept}
                      className={`cursor-pointer py-1 ${selectedDepartment === dept ? "font-bold text-blue-600" : ""}`}
                      onClick={() => setSelectedDepartment(dept)}
                    >
                      {dept}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="border-b-2 border-border py-4 sm:py-5">
              <h1
                className={`text-lg sm:text-xl md:text-[20px] cursor-pointer ${selectedCategory === "admin" ? "font-bold text-blue-600" : ""}`}
                onClick={() => {
                  setSelectedCategory("admin");
                  setSelectedDepartment(""); // Reset department
                }}
              >
                Administrative Associate Professor
              </h1>
            </div>
            <div className="py-4 sm:py-5 border-border border-b-2  ">
              <h1
                className={`text-lg sm:text-xl md:text-[20px] cursor-pointer ${selectedCategory === "general" ? "font-bold text-blue-600" : ""}`}
                onClick={() => {
                  setSelectedCategory("general");
                  setSelectedDepartment(""); // Reset department
                }}
              >
                General Associate Professor
              </h1>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 text-sm sm:text-base md:text-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {filteredData.map((item, index) => {
              const isLastCard = index === filteredData.length - 1;
              const remainder = filteredData.length % 2;
              const shouldCenterLast = remainder === 1 && isLastCard;

              return (
                <div
                  key={item.id}
                  className={`relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[309px] h-[400px] sm:h-[430px] md:h-[450px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center py-4 sm:py-6 shadow-md ${
                    shouldCenterLast ? "sm:col-span-2 sm:justify-self-center" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={260}
                    height={260}
                    className="rounded-full w-[80%] sm:w-[85%] md:w-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-48 sm:h-52 md:h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
                  <div className="absolute z-50 top-[75%] sm:top-[78%] md:top-[80%] left-4 sm:left-5 md:left-6">
                    <h2 className="text-base sm:text-lg md:text-lg font-bold">{item.name}</h2>
                    <p className="text-xs font-bold sm:text-sm md:text-sm">{item.title && `${item.title}`}</p>
                    <p className="text-xs sm:text-sm md:text-sm">
                      {item.department && `${item.department},`} <span className="font-semibold">{item.category}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyMembersSection;

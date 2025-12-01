"use client";
import React from "react";

const Facilities = () => {
  const facilities = [
    "Anyone with a genuine grievance may approach the departmental coordinators of the Student Grievance Cell in person, or can contact the Student Welfare Office.",
    "In case the person is unwilling to appear in person, grievances may be conveyed over e-mail to cecwelfare@gmail.com or may be dropped in the Suggestion/Grievances Box kept outside the Student Welfare Department.",
    'Grievance may be conveyed online through the college website. Click on "ONLINE GRIEVANCE" under "QUICK LINKS" and submit the grievance.',
    "Every grievance and action taken on the complaint is documented.",
    "Arranging for emergency health service, as and when the need arises.",
    "Suggestions related to training, consultancy projects, contests, higher education, career and counseling are provided to students.",
    "Suggestions related to improvement of general facilities like canteen, bus, internet facilities, etc., are accepted and forwarded to the concerned department.",
    "For emergency healthcare of girl students, beds have been provided at ground floor rest rooms.",
    "A sanitary napkin vending machine and incinerator is installed in the girl's washroom on the ground floor.",
    "A visiting doctor is available in the campus dispensary between 4:30 pm to 5:30 pm.",
    "A full-time counsellor is appointed by the college to counsel students on academic and personal issues.",
    "A community health centre has been set up in the college campus in association with Fr. Muller’s Hospital, Thumbay. The health centre functions every Tuesday from 10:00 am to 1:00 pm. Faculty, staff, students and nearby residents can avail the services free of cost. All minor ailments are treated at the community health centre.",
  ];

  return (
    <section className="md:pt-0 pb-10 md:pb-12 xl:pt-5 xl:pb-14 max-w-7xl xl:max-w-[75%] mx-auto text-[#1D1D1F]">
      <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-[#1D1D1F] pb-6">
        Facilities
      </h1>

      <ul className="space-y-2 list-disc pl-6 text-textGray text-justify text-lg lg:text-[20px] leading-relaxed">
        {facilities.map((item, index) => (
          <li key={index} className="md:leading-8">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Facilities;

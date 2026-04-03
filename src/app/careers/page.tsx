import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const academicYear = `${currentYear}–${nextYear.toString().slice(-2)}`;

  return {
    title: `Faculty Recruitment ${academicYear} | Careers at Canara Engineering College`,
    description:
      "Apply for faculty positions in Computer Science, Artificial Intelligence, and Information Science at Canara Engineering College. Join our NBA & NAAC accredited engineering institute.",
    alternates: {
      canonical: "https://cec.edu.in/careers",
    },
    openGraph: {
      title: `Faculty Recruitment ${academicYear} | Careers at Canara Engineering College`,
      description:
        "Apply for faculty positions in Computer Science, Artificial Intelligence, and Information Science at Canara Engineering College. Join our NBA & NAAC accredited engineering institute.",
      url: "https://cec.edu.in/careers",
      siteName: "Canara Engineering College",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Faculty Recruitment ${academicYear} | Canara Engineering College`,
      description: "Apply for faculty positions in Computer Science, Artificial Intelligence, and Information Science at Canara Engineering College.",
    },
  };
}

const Page = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const academicYear = `${currentYear}–${nextYear.toString().slice(-2)}`;

  return (
    <section className="py-10 px-5 text-[#1D1D1F] xl:py-20 pb-10 max-w-7xl xl:max-w-[75%] mx-auto">
      <div className=" space-y-8">
        {/* Title */}
        <h1 className="text-3xl md:w-[90%] md:text-[40px] lg2:text-5xl xl:text-6xl font-bold leading-[1.2] text-[#1D1D1F]">
          Faculty Recruitment <br className="md:hidden"/>{academicYear}
        </h1>

        {/* Intro paragraph */}
        <p className="text-textGray text-[17px] leading-relaxed">
          Canara Engineering College, established as the millennium project of Canara High School Association in 2001, has most of its conventional
          courses accredited by NBA. NAAC accreditation with A grade – CGPA 3.24 has further accentuated the innovative applications aimed at
          enhancing student skills through Outcome Based Education system, training, and research innovation.
        </p>

        {/* Application Information */}
        <div className="space-y-4">
          <p className="text-textGray text-[17px]">
            Applications are invited from eligible candidates for the faculty positions in the following programs:
          </p>
          <ul className="list-square pl-6 text-textGray text-[17px] space-y-1">
            <li>Computer Science and Engineering</li>
            <li>Information Science and Engineering</li>
            <li>Computer Science and Design</li>
            <li>Computer Science and Business System</li>
            <li>Artificial Intelligence and Machine Learning.</li>
          </ul>
        </div>

        {/* Note Section */}
        <div className="space-y-2">
          <h3 className="font-semibold text-textGray">Please Note:</h3>
          <ul className="list-square pl-6 text-textGray text-[17px] space-y-1">
            <li>Preference will be given to candidates with Ph.D.</li>
            <li>Intimation for interview will be sent to eligible and shortlisted candidates.</li>
            <li>Qualification and salary as per AICTE norms.</li>
          </ul>
        </div>

        {/* Contact Info */}
        <p className="text-[17px] text-textGray">
          Candidates can apply to{" "}
          <Link href="mailto:canarait@gmail.com" className="text-[#2884CA] hover:underline">
            canarait@gmail.com
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Page;

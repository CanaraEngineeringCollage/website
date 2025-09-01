import Link from "next/link";
import React, { FC, Suspense, useState } from "react";
import Image from "next/image";
import footericon1 from "../../../../public/svgs/logos/FooterIcon1.svg"; // Adjust path as needed
import { FooterIcon, FooterIconMobile, Instagram, LinkedIn, Meta, Twitter, Yt } from "@/components/Icons/Icons"; // Adjust import path
import { motion } from "framer-motion";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

// Data arrays remain unchanged from your first snippet
const quickLinks = [
  { data: "NIRF Disclosure", links: "/about/mandatory-disclosure" },
  { data: "Committee Members", links: "https://www.canaraengineering.in/download/Institutional%20Committee.pdf" },
  { data: "AICTE Scholarships", links: "https://www.canaraengineering.in/download/scholarship_2020.pdf" },
  { data: "Press Releases", links: "https://canaraengineering.in/download/News Paper Clipping.pdf" },
  { data: "Grievance Redressal Committee", links: "/about/grievance-redressal-cell" },
  { data: "VTU Website", links: "https://vtu.ac.in/" },
  { data: "AICTE Website", links: "https://www.aicte.gov.in/" },
  // { data: "AICTE Feedback Portal", links: "#" },
  { data: "Vidya Lakshmi Portal", links: "https://www.vidyalakshmi.co.in/Students/login#studentlogin" },
];

const ourCollege = [
  { data: "About Us", links: "/about/about-cec" },
  { data: "Our Founder", links: "/about/our-founder" },
  { data: "Our Management", links: "/about/our-management" },
  { data: "Key Functionaries & HODs", links: "/about/key-functionaries-and-hods" },
  { data: "Educators & Administrators", links: "/about/educators-administrators" },
  // { data: "Departments", links: "#" },
  // { data: "NBA Accreditations", links: "#" },
  { data: "Mandatory Disclosures", links: "/about/mandatory-disclosure" },
];

const academics = [
  { data: "Admissions", links: "/admission" },
  // { data: "Courses & Programs", links: "#" },
  { data: "Syllabus", links: "#" },
  { data: "Academic Calendar", links: "https://www.canaraengineering.in/download/calender.pdf" },
  // { data: "Examinations & Timetables", links: "/academics/examination-records" },
  { data: "Circulars", links: "https://vtu.ac.in/en/#1554889506437-64c3b5d5-d21e" },
  { data: "Marks & Attendance", links: "/academics/examination-records" },
  { data: "Learning Resources", links: "/academics/learning-hub" },
  { data: "Scholarships", links: "https://www.canaraengineering.in/download/scholarship_2020.pdf" },
];

const facilities = [
  { data: "Training & Placements", links: "/training-placements" },
  { data: "Campus", links: "/about/about-cec" },
  { data: "Hostels", links: "/campus-facilities/hostel-life" },
  { data: "Sports & Cultures", links: "/physical-education" },
  { data: "Entrepreneurship Cell", links: "/entrepreneurship-cell" },
];

const stayConnected = [
  { data: "Alumni", links: "/alumni" },
  { data: "Media", links: "/media" },
  // { data: "Calendar of Events", links: "/events" },
  // { data: "Careers", links: "#" },
];

interface FooterListProps {
  data: { data: string; links: string }[];
}

const Footer: FC = () => {
  // State for collapsible sections on mobile
  const [quickIsOpen, setQuickIsOpen] = useState<boolean>(false);
  const [collegeIsOpen, setCollegeIsOpen] = useState<boolean>(false);
  const [academicsIsOpen, setAcademicsIsOpen] = useState<boolean>(false);
  const [facilitiesIsOpen, setFacilitiesIsOpen] = useState<boolean>(false);
  const [stayConnectedIsOpen, setStayConnectedIsOpen] = useState<boolean>(false);

  return (
    <footer className="bg-[#e5e5ea] text-gray-700 text-sm pt-10">
      {/* Desktop Version */}
      <div className="lg:max-w-7xl  xl:mx-auto xl:max-w-[75%]  mx-auto lg:block hidden">
          <Suspense fallback={null}> <Breadcrumbs
          items={[
            { label: "", href: "" },
            { label: "About CEC", href: "/about/about-cec" },
            { label: "History of CEC", href: "/about/history-of-cec" },
            { label: "Our Founder", href: "/about/our-founder" },
            { label: "Our Management", href: "/about/our-management" },
            { label: "Governing Council", href: "/about/governing-council" },
            { label: "Mandatory Disclosure", href: "/about/mandatory-disclosure" },
            { label: "Grievance Redressal Cell", href: "/about/grievance-redressal-cell" },
            { label: "SWO Department", href: "/about/student-welfare-department" },
            { label: "Academic Overview", href: "/academics/academic-overview" },
            { label: "Programs", href: "/academics/programs" },
            { label: "Computer Science & Engineering", href: "/department/computer-science-engineering" },
            { label: "Artificial Intelligence & Machine Learning", href: "/department/artificial-intelligence-machine-learning" },
            { label: "Information Science & Engineering", href: "/department/information-science-engineering" },
            { label: "Electronics & Communication Engineering", href: "/department/electronics-communication-engineering" },
            { label: "Computer Science & Business System", href: "/department/computer-science-business-system" },
            { label: "Computer Science & Design", href: "/department/computer-science-design" },
            { label: "Science & Humanities", href: "/department/science-humanities" },
            // { label: "Timetables", href: "/academics/examination-records" },
            // { label: "Circulars", href: "/about" },
            // { label: "Marks & Attendance", href: "/our-founder" },
            { label: "Resources", href: "/academics/learning-hub" },
            { label: "Infrastructure", href: "/campus-facilities/infrastructuret" },
            { label: "Hostel Life", href: "/campus-facilities/hostel-life" },
            { label: "Student Life & Engagement", href: "/campus-facilities/studentlife-engagement" },
            { label: "Entrepreneurship Cell", href: "/entrepreneurship-cell" },
            { label: "Physical Education", href: "/physical-education" },
            // { label: "Calendar of Events", href: "/events" },
            { label: "Alumni", href: "/alumni" },
            { label: "Admissions", href: "/admission" },
            { label: "Training & Placements", href: "/training-placements" },
            // { label: "Examination Timetables", href: "tt" },
            { label: "Marks & Attendance", href: "marks" },
            { label: "Circulars", href: "circulars" },
            { label: "Media", href: "/media" },

          ]}
        /></Suspense>

        <hr className="text-gray-300 pb-3.5" />
        <div className="grid grid-cols-2 md:grid-cols-5  border-b border-gray-300 pb-10">
          <div>
            <h3 className="font-semibold mt-5 mb-2">Quick Links</h3>
            <FooterList data={quickLinks} />
          </div>
          <div className="xl:ml-[40%] lg2:ml-[20%]">
            <h3 className="font-semibold mt-5 mb-2">Our College</h3>
            <FooterList data={ourCollege} />
          </div>
          <div className="xl:ml-[40%] lg2:ml-[20%]">
            <h3 className="font-semibold mt-5 mb-2">Academics</h3>
            <FooterList data={academics} />
          </div>
          <div className="xl:ml-[40%] lg2:ml-[20%]">
            <h3 className="font-semibold mt-5 mb-2">Facilities</h3>
            <FooterList data={facilities} />
          </div>
          <div className="xl:ml-auto lg2:ml-[20%]">
            <h3 className="font-semibold mt-5 mb-2">Stay Connected</h3>
            <FooterList data={stayConnected} />
          </div>
        </div>

        <div className="flex items-center justify-between space-x-10 my-8">
          <div className="flex gap-5">
            <Image src={footericon1} width={300} height={300} alt="logo" />
            <FooterIcon />
          </div>
          <div>
            <h1 className="flex justify-end font-bold pb-3 cursor-pointer">Follow Us</h1>
            <div className="flex gap-2 cursor-pointer">
              <Link target="_blank" href="https://www.linkedin.com/school/77697892/admin/dashboard/">
                <LinkedIn />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/cecmangalore/">
                <Instagram />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/profile.php?id=61575102539032">
                <Meta />
              </Link>
              <Link target="_blank" href="https://www.youtube.com/@canaraengineeringcollegema3340">
                <Yt />
              </Link>

              <Link target="_blank" href="https://x.com/cecmangalore">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4 pb-6 text-xs">
          <p className="text-center md:text-left mb-2 md:mb-0">Copyright © 2024 CEC & Canara High School Association. All rights reserved.</p>
          <div className="flex space-x-6 items-center">
            <div className="flex space-x-2">
              <Link href={'/privacy-policy'}><p>Privacy Policy | Terms of Use</p></Link>
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden px-6">
        <div className="space-y-4">
          {/* Quick Links */}
          <FooterSection title="Quick Links" data={quickLinks} isOpen={quickIsOpen} setIsOpen={setQuickIsOpen} />
          {/* Our College */}
          <FooterSection title="Our College" data={ourCollege} isOpen={collegeIsOpen} setIsOpen={setCollegeIsOpen} />
          {/* Academics */}
          <FooterSection title="Academics" data={academics} isOpen={academicsIsOpen} setIsOpen={setAcademicsIsOpen} />
          {/* Facilities */}
          <FooterSection title="Facilities" data={facilities} isOpen={facilitiesIsOpen} setIsOpen={setFacilitiesIsOpen} />
          {/* Stay Connected */}
          <FooterSection title="Stay Connected" data={stayConnected} isOpen={stayConnectedIsOpen} setIsOpen={setStayConnectedIsOpen} />
        </div>

        {/* Mobile Logo and Social Icons */}
        <div className="flex flex-col items-center my-8">
          <div className="flex gap-3">
            <Image src={footericon1} width={200} height={200} alt="logo" />
            <FooterIconMobile />
          </div>
          <div className="mt-4">
            <h1 className="text-center font-bold pb-3">Follow Us</h1>
            <div className="flex gap-2 justify-center">
              <Link target="_blank" href="https://www.linkedin.com/school/77697892/admin/dashboard/">
                <LinkedIn />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/cecmangalore/">
                <Instagram />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/profile.php?id=61575102539032">
                <Meta />
              </Link>
              <Link target="_blank" href="https://www.youtube.com/@canaraengineeringcollegema3340">
                <Yt />
              </Link>

              <Link target="_blank" href="https://x.com/cecmangalore">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Bar */}
        <div className="border-t border-gray-300 pt-4 pb-6 text-xs text-center">
          <p className="mb-2">Copyright © 2024 CEC & Canara High School Association. All rights reserved.</p>
          <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer List Component
const FooterList: FC<FooterListProps> = ({ data }) => {
  return (
    <ul className="space-y-1">
      {data.map((item, index) => {
        const isExternal = item.links.startsWith("http");
        return (
          <li className="leading-8" key={index}>
            <Link
              href={item.links}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.data}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    className="inline-block ml-2 w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    initial={false} // Prevents animation on mount
    animate={{ rotate: isOpen ? 180 : 0 }} // Rotates 180° when open
    transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7" // Base position (pointing down)
    />
  </motion.svg>
);

// Reusable Footer Section Component for Mobile
const FooterSection: FC<{
  title: string;
  data: { data: string; links: string }[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ title, data, isOpen, setIsOpen }) => (
  <div className="border-b border-gray-300 pb-2">
    <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between font-semibold cursor-pointer py-2">
      {title}
      <ArrowIcon isOpen={isOpen} />
    </div>
    {isOpen && <FooterList data={data} />}
  </div>
);

export default Footer;

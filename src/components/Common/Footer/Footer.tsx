import Link from "next/link";
import React, { FC, Suspense, useState } from "react";
import Image from "next/image";
import footericon1 from "../../../../public/svgs/logos/logo.svg"; // Adjust path as needed
import { FooterIcon, FooterIconMobile, Instagram, LinkedIn, Meta, Twitter, Yt } from "@/components/Icons/Icons"; // Adjust import path
import { motion } from "framer-motion";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

// Data arrays remain unchanged from your first snippet
const quickLinks = [
  { data: "NIRF Disclosure", links: "/about/mandatory-disclosure" },
  { data: "Institutional Committees", links: "/footer/Institutional Committees and Amendments - 2025-26 - Canara Engineering college CEC.pdf" },
  { data: "AICTE Scholarships", links: "https://apiserver.cec.edu.in/files/scolarship2020" },
  { data: "Press Releases", links: "/footer/News Paper Clipping.pdf" },
  { data: "Grievance Redressal Committee", links: "/about/grievance-redressal-cell" },
  { data: "VTU Website", links: "https://vtu.ac.in/" },
  { data: "AICTE Website", links: "https://www.aicte.gov.in/" },
  // { data: "AICTE Feedback Portal", links: "#" },
  // { data: "Vidya Lakshmi Portal", links: "https://www.vidyalakshmi.co.in/Students/login#studentlogin" },
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
  // { data: "Syllabus", links: "#" },
  { data: "Academic Calendar", links: `${process.env.NEXT_PUBLIC_API_URL}/academic-calendar` },
  // { data: "Examinations & Timetables", links: "/academics/examination-records" },
  { data: "Circulars", links: "/academics/examination-records?tab=circulars" },
  { data: "Marks & Attendance", links: "https://www.canaraengineering.in/s_attd" },
  { data: "Learning Resources", links: "https://digital.canaraengineering.in/" },
  // { data: "Scholarships", links: "https://www.canaraengineering.in/download/scholarship_2020.pdf" },
];

const facilities = [
  { data: "Training & Placements", links: "/training-placements" },
  { data: "Campus", links: "/about/about-cec" },
  { data: "Hostels", links: "/explore/hostel-life" },
  { data: "Central Library", links: "/explore/central-library" },
  { data: "Sports & Cultures", links: "/explore/physical-education" },
  { data: "Entrepreneurship Cell", links: "/entrepreneurship-cell" },
  { data: "Placement Portal", links: "https://www.canaraengineering.in/placement_portal/" },
];

const stayConnected = [
  { data: "Alumni", links: "/alumni" },
  { data: "Student Achievements", links: "/student-achievements" },
  { data: "Careers", links: "/careers" },
  // { data: "Calendar of Events", links: "/events" },
  // { data: "Careers", links: "#" },
];

interface FooterListProps {
  data: { data: string; links: string }[];
}

// Helper function to open PDF
const openPdf = (pdfData: any) => {
  if (!pdfData) return;

  try {
    if (pdfData.type === "Buffer" && Array.isArray(pdfData.data)) {
      const byteArray = new Uint8Array(pdfData.data);
      const blob = new Blob([byteArray], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } else if (typeof pdfData === "string") {
      window.open(pdfData, "_blank");
    }
  } catch (e) {
    console.error("Error opening PDF", e);
    alert("Could not open PDF");
  }
};

const Footer: FC = () => {
  // State for collapsible sections on mobile
  const [quickIsOpen, setQuickIsOpen] = useState<boolean>(false);
  const [collegeIsOpen, setCollegeIsOpen] = useState<boolean>(false);
  const [academicsIsOpen, setAcademicsIsOpen] = useState<boolean>(false);
  const [facilitiesIsOpen, setFacilitiesIsOpen] = useState<boolean>(false);
  const [stayConnectedIsOpen, setStayConnectedIsOpen] = useState<boolean>(false);

  const handleAcademicCalendarClick = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/academic-calendar`);
      if (response.ok) {
        const data = await response.json();
        
        // Extract the pdfUrl depending on how the backend sends it
        const pdfUrl = data.pdfUrl || (data.data && data.data.pdfUrl) || (Array.isArray(data.data) && data.data[0]?.pdfUrl);
        
        if (pdfUrl) {
          const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/academic-calendar/file/${pdfUrl}`;
          window.open(fullUrl, "_blank");
        } else {
          alert("No academic calendar found.");
        }
      } else {
        alert("Failed to fetch academic calendar.");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching academic calendar.");
    }
  };

  return (
    <footer id="main-footer" className="bg-[#e5e5ea] text-gray-700 lg:px-8  text-sm pt-10">
      {/* Desktop Version */}

      <div className="lg:max-w-7xl md:max-w-6xl   xl:mx-auto xl:max-w-[75%]  mx-auto lg:block hidden">
        <Suspense fallback={null}>
          {" "}
          <Breadcrumbs
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
              { label: "Computer Science and Engineering", href: "/department/computer-science-engineering/details" },
              { label: "Computer Science and Engineering", href: "/department/computer-science-engineering" },
              { label: "Artificial Intelligence and Machine Learning", href: "/department/artificial-intelligence-machine-learning/details" },
              { label: "Artificial Intelligence and Machine Learning", href: "/department/artificial-intelligence-machine-learning" },
              { label: "Information Science and Engineering", href: "/department/information-science-engineering/details" },
              { label: "Information Science and Engineering", href: "/department/information-science-engineering" },
              { label: "Electronics and Communication Engineering", href: "/department/electronics-communication-engineering/details" },
              { label: "Science and Humanities", href: "/department/science-humanities/details" },
              { label: "Science and Humanities", href: "/department/science-humanities" },
              { label: "Electronics and Communication Engineering", href: "/department/electronics-communication-engineering" },
              { label: "Computer Science and Business System", href: "/department/computer-science-business-system/details" },
              { label: "Computer Science and Business System", href: "/department/computer-science-business-system" },
              { label: "Computer Science and Design", href: "/department/computer-science-design" },
              { label: "Computer Science and Design", href: "/department/computer-science-design/details" },

              { label: "Mechanical Engineering", href: "/department/mechanical-engineering" },
              { label: "Mechanical Engineering", href: "/department/mechanical-engineering/details" },

              { label: "Distinctive Practices", href: "/about/distinctive-practices" },
              { label: "Key Functionaries & HODs", href: "/about/key-functionaries-and-hods" },
              { label: "Glimpses of CEC", href: "/about/glimpses-of-cec" },
              { label: "Educators & Administrators", href: "/about/educators-administrators" },
              { label: "Research at CEC", href: "/academics/research" },
              { label: "Research & Development and Consultancy Cell", href: "/research-development-consultancy" },

              { label: "About Alumni", href: "/alumni/about-alumni" },
              { label: "Infrastructure", href: "/explore/infrastructure" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "SCSTGrievance", href: "/about/mandatory-disclosure/sc-st-grievance" },
              { label: "Careers", href: "/careers" },

              // { label: "Timetables", href: "/academics/examination-records" },
              // { label: "Circulars", href: "/about" },
              // { label: "Marks & Attendance", href: "/our-founder" },
              { label: "Resources", href: "https://digital.canaraengineering.in/" },
              { label: "Infrastructure", href: "/explore/infrastructuret" },
              { label: "Hostel Life", href: "/explore/hostel-life" },
              { label: "Central Library", href: "/explore/central-library" },
              { label: "Student Life & Engagement", href: "/studentlife-engagement" },
              { label: "Entrepreneurship Cell", href: "/entrepreneurship-cell" },
              { label: "Physical Education", href: "/explore/physical-education" },
              // { label: "Calendar of Events", href: "/events" },
              { label: "Alumni", href: "/alumni" },
              { label: "Admissions", href: "/admission" },
              { label: "Training & Placements", href: "/training-placements" },
              // { label: "Examination Timetables", href: "tt" },
              // { label: "Marks & Attendance", href: "marks" },
              { label: "Circulars", href: "/academics/examination-records?tab=circulars", tab: "circulars" },
              { label: "Campus Buzz", href: "/campus-buzz" },
              { label: "About Library", href: "/explore/central-library/about-library" },
              { label: "Student Achievements", href: "/student-achievements" },
              { label: "Canara Innovation Foundation", href: "/cif" },
            ]}
          />
        </Suspense>

        <hr className="text-gray-300 pb-3.5" />
        <div className="mx-auto w-full">
          {/* Layout Fix: 
             1. Removed manual margins (xl:ml-[30%] etc).
             2. Used 'md:flex md:justify-between' for edge-to-edge alignment.
             3. Kept 'grid-cols-2' for smaller tablet views.
          */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:flex md:justify-between border-b border-gray-300 pb-10">
            <div>
              <h3 className="font-semibold mt-5 mb-2">Quick Links</h3>
              <FooterList data={quickLinks} />
            </div>
            <div>
              <h3 className="font-semibold mt-5 mb-2">Our College</h3>
              <FooterList data={ourCollege} />
            </div>
            <div>
              <h3 className="font-semibold mt-5 mb-2">Academics</h3>
              <FooterList data={academics} onCalendarClick={handleAcademicCalendarClick} />
            </div>
            <div>
              <h3 className="font-semibold mt-5 mb-2">Facilities</h3>
              <FooterList data={facilities} />
            </div>
            <div>
              <h3 className="font-semibold mt-5 mb-2">Stay Connected</h3>
              <FooterList data={stayConnected} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-10 my-8">
          <Link href="/">
            {" "}
            <div className="flex gap-5">
              <Image src={footericon1} width={300} height={300} alt="logo" />
            </div>
          </Link>
          <div>
            <h1 className="flex justify-end font-bold pb-3 cursor-pointer">Follow Us</h1>
            <div className="flex gap-2 cursor-pointer">
              <Link target="_blank" href="https://www.linkedin.com/school/77697892/admin/dashboard/">
                <LinkedIn />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/cecmangalore/">
                <Instagram />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/share/1AjszML4e3">
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
          <p className="text-center md:text-left mb-2 md:mb-0">
            Copyright © {new Date().getFullYear()} CEC & Canara High School Association. All rights reserved.
          </p>
          <div className="flex space-x-6 items-center">
            <div className="flex space-x-2">
              <Link href={"/privacy-policy"}>
                <p>Privacy Policy</p>
              </Link>
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
          <FooterSection
            title="Academics"
            data={academics}
            isOpen={academicsIsOpen}
            setIsOpen={setAcademicsIsOpen}
            onCalendarClick={handleAcademicCalendarClick}
          />
          {/* Facilities */}
          <FooterSection title="Facilities" data={facilities} isOpen={facilitiesIsOpen} setIsOpen={setFacilitiesIsOpen} />
          {/* Stay Connected */}
          <FooterSection title="Stay Connected" data={stayConnected} isOpen={stayConnectedIsOpen} setIsOpen={setStayConnectedIsOpen} />
        </div>

        {/* Mobile Logo and Social Icons */}
        <div className="flex flex-col items-center my-8">
          <Link href="/">
            <div className="flex gap-3">
              <Image src={footericon1} width={200} height={200} alt="logo" />
              {/* <FooterIconMobile /> */}
            </div>
          </Link>
          <div className="mt-4">
            <h1 className="text-center font-bold pb-3">Follow Us</h1>
            <div className="flex gap-2 justify-center">
              <Link target="_blank" href="https://www.linkedin.com/school/77697892/admin/dashboard/">
                <LinkedIn />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/cecmangalore/">
                <Instagram />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/share/1AjszML4e3">
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
          <p className="mb-2">Copyright © {new Date().getFullYear()} CEC & Canara High School Association. All rights reserved.</p>
          <Link href={"/privacy-policy"}>
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer List Component
const FooterList: FC<FooterListProps & { onCalendarClick?: () => void }> = ({ data, onCalendarClick }) => {
  return (
    <ul className="space-y-1">
      {data.map((item, index) => {
        const isExternal = item.links.startsWith("http") || item.links.endsWith(".pdf");
        if (item.data === "Academic Calendar" && onCalendarClick) {
          return (
            <li className="leading-8" key={index}>
              <button onClick={onCalendarClick} className="hover:text-primary transition-colors text-left">
                {item.data}
              </button>
            </li>
          );
        }
        return (
          <li className="leading-8" key={index}>
            <Link href={item.links} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
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
  onCalendarClick?: () => void;
}> = ({ title, data, isOpen, setIsOpen, onCalendarClick }) => (
  <div className="border-b border-gray-300 pb-2">
    <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between font-semibold cursor-pointer py-2">
      {title}
      <ArrowIcon isOpen={isOpen} />
    </div>
    {isOpen && <FooterList data={data} onCalendarClick={onCalendarClick} />}
  </div>
);

export default Footer;

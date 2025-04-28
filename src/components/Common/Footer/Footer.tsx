import Link from "next/link";
import React, { FC, useState } from "react";
import Image from "next/image";
import footericon1 from "../../../../public/svgs/logos/FooterIcon1.svg"; // Adjust path as needed
import { FooterIcon,FooterIconMobile, Instagram, LinkedIn, Meta, Twitter, Yt } from "@/components/Icons/Icons"; // Adjust import path
import { motion } from "framer-motion";

// Data arrays remain unchanged from your first snippet
const quickLinks = [
  { data: "NIRF Disclosure", links: "#" },
  { data: "Committee Members", links: "#" },
  { data: "AICTE Scholarships", links: "#" },
  { data: "Press Releases", links: "#" },
  { data: "Grievance Redressal Committee", links: "#" },
  { data: "VTU Website", links: "#" },
  { data: "AICTE Website", links: "#" },
  { data: "AICTE Feedback Portal", links: "#" },
  { data: "Vidya Lakshmi Portal", links: "#" },
];

const ourCollege = [
  { data: "About Us", links: "#" },
  { data: "Founder & Our Management", links: "#" },
  { data: "Key Functionaries & HODs", links: "#" },
  { data: "Teaching Faculty", links: "#" },
  { data: "Non Teaching Staff", links: "#" },
  { data: "Administration Staff", links: "#" },
  { data: "Departments", links: "#" },
  { data: "Accreditations", links: "#" },
  { data: "Mandatory Disclosures", links: "#" },
];

const academics = [
  { data: "Admissions", links: "/admission" },
  { data: "Courses & Programs", links: "#" },
  { data: "Syllabus", links: "#" },
  { data: "Academic Calendar", links: "#" },
  { data: "Examinations & Timetables", links: "#" },
  { data: "Circulars", links: "#" },
  { data: "Marks & Attendance", links: "#" },
  { data: "Learning Resources", links: "#" },
  { data: "Scholarships", links: "#" },
];

const facilities = [
  { data: "Training & Placements", links: "#" },
  { data: "Campus", links: "#" },
  { data: "Hostels", links: "#" },
  { data: "Sports & Cultures", links: "#" },
  { data: "Entrepreneurship Cell", links: "#" },
];

const stayConnected = [
  { data: "Alumni", links: "/alumini" },
  { data: "Media", links: "#" },
  { data: "Calendar of Events", links: "/events" },
  { data: "Careers", links: "#" },
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
      <div className="lg:max-w-7xl  xl:mx-auto xl:max-w-[75%] mx-auto lg:block hidden">
        <hr className="text-gray-300 pb-3.5" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-300 pb-10">
          <div>
            <h4 className="font-semibold mb-1">Quick Links</h4>
            <FooterList data={quickLinks} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Our College</h4>
            <FooterList data={ourCollege} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Academics</h4>
            <FooterList data={academics} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Facilities</h4>
            <FooterList data={facilities} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Stay Connected</h4>
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
              <LinkedIn />
              <Instagram />
              <Meta />
              <Yt />
              <Twitter />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4 pb-6 text-xs">
          <p className="text-center md:text-left mb-2 md:mb-0">Copyright © 2024 CEC & Canara High School Association. All rights reserved.</p>
          <div className="flex space-x-6 items-center">
            <div className="flex space-x-2">
              <p>Privacy Policy | Terms of Use</p>
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
              <LinkedIn />
              <Instagram />
              <Meta />
              <Yt />
              <Twitter />
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
    <>
      {data.map((item, index) => (
        <ul className="space-y-3" key={index}>
          <Link href={item.links}>
            <li className="leading-8">{item.data}</li>
          </Link>
        </ul>
      ))}
    </>
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

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ModalSection {
  subtitle?: string; // styled as a bold sub-heading
  description?: string; // styled as body paragraph
  points?: string[]; // styled as bullet list
}

interface PdfDownload {
  label: string;
  path: string;
}

interface MouTableRow {
  slNo: number;
  company: string;
  activityName: string;
  dateDuration: string;
  studentsCount: number | string;
}

interface MouEntry {
  title: string;
  description: string;
  table?: {
    heading: string;
    rows: MouTableRow[];
  };
  images?: string[];
}

interface MouTab {
  tabName: string;
  entries: MouEntry[];
}

interface IdeaCard {
  id: number;
  cardTitle: string;
  cardImage: string;
  modalTitle: string;
  modalImage?: string; // optional — MoU card has no hero image
  modalSections?: ModalSection[];
  galleryImages?: string[];
  pdfDownloads?: PdfDownload[];
  mouTabs?: MouTab[]; // for MoU tabbed modal
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ideasData: IdeaCard[] = [
  {
    id: 1,
    cardTitle: "Auditorium",
    cardImage: "https://apiserver.cec.edu.in/files/auditoriumOfCollege",
    modalTitle: "Dr. P. Dayananda Pai & P. Sathish Pai Auditorium",
    modalImage: "https://apiserver.cec.edu.in/files/auditoriumOfCollege",
    modalSections: [
      { subtitle: "Inaugurated and Blessed by Shrimad Samyamindra Thirtha Swamiji, Mathadipathi, Shree Kashi Math Samsthan, Varanasi" },
      { description: "A symbol of excellence and grandeur, the auditorium stands as a proud landmark on campus. Designed to host large-scale events, academic gatherings, and cultural programs, it reflects our commitment to providing world-class infrastructure." },
      {
        subtitle: "Key Highlights",
        points: [
          "Seating Capacity: 2,000",
          "Centrally Air-conditioned Environment",
          "Expansive 2,900 sq.m Carpet Area",
          "State-of-the-Art Acoustics",
          "Uninterrupted Generator Power Supply",
          "Ample Parking Facility",
        ],
      },
      {
        subtitle: "Additional Facilities",
        points: ["A/C Seminar Hall with 500-seat capacity, fully equipped with acoustics", "Dedicated space for Start-up & Incubation Centre"],
      },
      { description: "A space built to inspire, connect, and celebrate — all under one roof." },
    ],
  },
  {
    id: 2,
    cardTitle: "Center of Excellence",
    cardImage: "https://apiserver.cec.edu.in/files/centerOfExcellence1",
    modalTitle: "Center of Excellence",
    modalImage: "https://apiserver.cec.edu.in/files/centerOfExcellence2",
    modalSections: [
      {
        description:
          "The Memorandum of Understanding (MoU) between The Indus Entrepreneurs (TiE) – Mangaluru Chapter and Canara High School Association introduces the TiE ELITE Program, aimed at fostering entrepreneurship and industry exposure among students. The initiative will offer workshops, internships, industry interactions, industrial visits, and skill development programs. Faculty development and academic collaborations will further help align education with industry needs. Students and faculty will also gain access to TiE events, mentorship, and entrepreneurial networks.",
      },
    ],
  },
  {
    id: 3,
    cardTitle: "High Computing GPU Lab",
    cardImage: "https://apiserver.cec.edu.in/files/highComputingLabImage1",
    modalTitle: "High Computing GPU Lab",
    modalImage: "https://apiserver.cec.edu.in/files/highComputingLabImage2",
    modalSections: [
      {
        description:
          "The Intelligent Systems Laboratory is equipped with high-performance computing resources with advanced configurations to support students, faculty members, and research scholars in carrying out projects and research activities in Machine Learning, Deep Learning, and Artificial Intelligence. The laboratory infrastructure is designed to facilitate computationally intensive tasks and enable effective experimentation, model training, and data analysis required for advanced AI-based applications. The facility provides a dedicated environment for developing intelligent systems, conducting data-driven research, and implementing real-world AI solutions. It also supports interdisciplinary research, collaborative projects with industry, and the development of innovative prototypes and applications.",
      },
    ],
  },
  {
    id: 4,
    cardTitle: "Scholarships",
    cardImage: "https://apiserver.cec.edu.in/files/scholarshipImage1",
    modalTitle: "Scholarships Support",
    modalImage: "https://apiserver.cec.edu.in/files/scholarshimage2%20(4).jpeg",
    modalSections: [
      { description: "At Canara Engineering College, we are committed to ensuring that financial constraints never come in the way of quality education. Our students benefit from a wide range of scholarships, both internal and external, that directly support their academic journey." },
      { subtitle: "Scholarships Available to Our Students" },
      { subtitle: "Institutional Scholarships", description: "Canara Institution offers dedicated scholarships to deserving students, ensuring that meritorious and financially-need students receive the support they need to pursue their education without burden." },
      { subtitle: "Bank-Sponsored Scholarships", description: "Students at Canara Engineering College have access to scholarships provided by Syndicate Bank, helping them meet their tuition and academic fee obligations seamlessly." },
      { subtitle: "GSB Scholarships", description: "The GSB (Gowda Saraswat Brahmin) community extends both internal and external scholarships to eligible students, providing significant financial relief throughout their academic years." },
      { subtitle: "IEEE WIE Scholarship, Funded by Quest Global", description: "Canara Engineering College is proud to have students recognized as recipients of the IEEE WIE Scholarship 2025–26, funded by Quest Global. The scholarship amount is utilized exclusively towards college tuition fees, in full compliance with audit and institutional guidelines." },
    ],
    galleryImages: [
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(1).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(2).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(3).jpeg",
      // "https://apiserver.cec.edu.in/files/scholarshimage2%20(5).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(6).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(7).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(8).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(9).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(10).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(11).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(12).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(13).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(14).jpeg",
      "https://apiserver.cec.edu.in/files/scholarshimage2%20(15).jpeg",
    ],
    pdfDownloads: [
      { label: "Scholarship Utilization Letter", path: "/pdfs/Scholarship Utilization Letter.pdf" },
    ],
  },
  
  {
    id: 5,
    cardTitle: "UDAL DC Fellowship",
    cardImage: "https://apiserver.cec.edu.in/files/UDAL.jpeg",
    modalTitle: "UDAL DC Fellowship",
    modalImage: "https://apiserver.cec.edu.in/files/UDAL.jpeg",
    modalSections: [
      { description: "Canara Engineering College proudly congratulates four of its students for successfully completing the UDAL Dakshina Kannada Fellowship – 1st Edition (2025). The fellowship provided students with an opportunity to work on impactful district-level initiatives under the guidance of the Deputy Commissioner's Office, Dakshina Kannada." },
      {
        subtitle: "DC Fellows",
        points: [
          "Mr. Prateek P. Kini, 3rd Year, Artificial Intelligence & Machine Learning",
          "Mr. Anirudha Udupa, 4th Year, Computer Science & Business Systems",
          "Mr. Vivek D., 4th Year, Computer Science & Engineering",
          "Mr. Vivek S. A., 4th Year, Computer Science & Engineering",
        ],
      },
      { description: "Through this fellowship, the students actively contributed to initiatives aimed at supporting governance and development activities at the district level, gaining valuable exposure to public administration, problem-solving, and community engagement." },
      { description: "Canara Engineering College applauds their dedication and achievement and wishes them continued success in their future endeavors." },
    ],
  },
  {
    id: 6,
    cardTitle: "MoUs",
    cardImage: "https://apiserver.cec.edu.in/files/mouCommone",
    modalTitle: "MoUs",
    mouTabs: [
      {
        tabName: "AIML",
        entries: [
          {
            title: "MoU with AccoladeTechSolutions Pvt Ltd Mangalore",
            description:
              "The main objective of this MoU is to strengthen industry–institute collaboration by providing students with practical exposure through skill enhancement training programs, internships, and project-based learning with mentoring support. The collaboration will enhance students' industry-ready skills through internships and offer potential job opportunities that may be converted from internship performance. Overall, this MoU will help bridge the gap between academic learning and industry requirements while improving students' employability and problem-solving skills.",
            images: [
              "https://apiserver.cec.edu.in/files/aiMou1",
              "https://apiserver.cec.edu.in/files/aiMou2",
            ],
          },
        ],
      },
      { tabName: "CSD", entries: [
        {
          title: "MoU with Juego Studio Private Limited",
          description: "The Memorandum of Understanding (MoU) between Canara Engineering College – Department of Computer Science and Design (CSD) and Juego Studio Private Limited establishes a collaborative partnership aimed at strengthening skill-based education, research, and industry–academia interaction. The agreement focuses on activities such as mentoring academic projects, providing internships and industrial training, facilitating industry visits, supporting student placements, conducting skill development programs, collaborating on research in game design and development, assisting in curriculum planning, organizing faculty training workshops. The MoU also outlines provisions for collaboration in projects and joint innovation initiatives.",
          images: ["https://apiserver.cec.edu.in/files/csdMou1"],
        },
      ]},
      { tabName: "CSE", entries: [
        {
          title: "MoU with Industries",
          description:
            "The proposed MoU's with industries will establish a structured framework for academic projects, internships, industrial training, hackathons, and placements, effectively bridging the gap between academia and industry. Students will gain hands-on exposure through industrial visits, skill development programs, guest lectures, and competitive hackathons, fostering innovation and problem-solving skills. Faculty members will benefit from Faculty Development Programs (FDPs), collaborative research, and participation in national and international conferences, enhancing academic excellence and research output. Overall, the collaboration will strengthen employability, entrepreneurial mindset, innovation culture, and the institution's academic reputation through sustained industry–academia engagement.",
          table: {
            heading: "List of Activities under MoUs – Academic Year 2023-24",
            rows: [
              { slNo: 1, company: "UiPath", activityName: "An Introduction Automation using UiPath", dateDuration: "21-12-2023", studentsCount: 250 },
              { slNo: 2, company: "UiPath", activityName: "Exploring UiPath Studio: A Beginner's Guide to Automation", dateDuration: "18-01-2024", studentsCount: 100 },
            ],
          },
          images: [
            "https://apiserver.cec.edu.in/files/cseMou1",
            "https://apiserver.cec.edu.in/files/cseMou2",
          ],
        },
      ]},
      { tabName: "ECE", entries: [
        {
          title: "MoU with Government Tool and Training Center (GTTC)",
          description:
            "The MoU with the Government Tool and Training Center (GTTC) will enhance collaboration between the institute and industry-oriented training facilities. It will provide students with opportunities for internships, hands-on workshops, and practical skill development aligned with current industry standards. Faculty members will benefit through training programs, technical workshops, and exposure to advanced manufacturing and technology practices. This partnership will help bridge the gap between academic learning and industrial requirements, improving students' employability and innovation skills. Additionally, it may support joint projects, skill certification programs, and knowledge exchange, strengthening the institute's academic and research ecosystem.",
          images: [
            "https://apiserver.cec.edu.in/files/eceMou1",
            "https://apiserver.cec.edu.in/files/eceMou2",

          ],
        },
      ]},
      { tabName: "ISE", entries: [
        {
          title: "MoU with Karunadu Technologies Pvt. Ltd.",
          description:
            "Canara Engineering College signed a Memorandum of Understanding with Karunadu Technologies Pvt. Ltd., Bangalore, on January 11, 2025. This collaboration focuses on bridging academia and industry through faculty upskilling, student development, curriculum alignment, and fostering innovation. In line with the MOU, Faculty Development Program for Technical Staff by experts from Karunadu Technologies was organized on \"Future Tech Fundamentals: Exploring IoT, ML, Cyber Security and Blockchain\" in January 2025.",
          images: [
            "https://apiserver.cec.edu.in/files/iseMou1",
            "https://apiserver.cec.edu.in/files/iseMou2",
            "https://apiserver.cec.edu.in/files/iseMou3",
          ],
        },
      ]},
    ],
  },
];

// ─── Animation variants ────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.3, ease: "easeIn" } },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", type: "spring", damping: 20, stiffness: 100 } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25, ease: "easeIn" } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1, ease: "easeOut" } },
};

// ─── Gallery Swiper ────────────────────────────────────────────────────────────

function GallerySwiper({ images, swiperId }: { images: string[]; swiperId: string }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="mt-2">
      <Swiper
        onSwiper={(s) => (swiperRef.current = s)}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: `.swiper-prev-${swiperId}`,
          nextEl: `.swiper-next-${swiperId}`,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="rounded-lg"
      >
        {images.map((imgUrl, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[300px] md:h-[450px]">
              <Image src={imgUrl} alt={`Gallery image ${idx + 1}`} fill className="object-cover rounded-lg" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom nav buttons — same style as Facilities.tsx */}
      <div className="flex justify-end me-6 items-center mt-4">
        <div className="flex gap-2 z-10">
          <button
            aria-label="Previous Slide"
            className={`swiper-prev-${swiperId} relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center`}
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            aria-label="Next Slide"
            className={`swiper-next-${swiperId} relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center`}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MoU Tabbed Content ───────────────────────────────────────────────────────

function MouTabContent({ tabs }: { tabs: MouTab[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <div>
      {/* Tab Buttons */}
      <div className="mb-8 block">
        <div className="flex justify-between overflow-x-auto hide-scrollbar border-b border-gray-200 w-full">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`pb-4 text-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === index ? "border-b-2 border-primary text-primary" : "text-secondary hover:text-primary"
              }`}
            >
              {tab.tabName}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {active.entries.length === 0 ? (
        <p className="text-textGray text-base">No MoUs listed yet.</p>
      ) : (
        <div className="space-y-10">
          {active.entries.map((entry, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-lg font-semibold text-[#1D1D1F]">{entry.title}</h4>
              <p className="text-base md:text-lg text-textGray leading-7 text-justify">{entry.description}</p>

              {/* Table */}
              {entry.table && (
                <div>
                  <h5 className="font-semibold text-lg text-[#1D1D1F] mb-3">{entry.table.heading}</h5>
                  <div className="overflow-x-auto">
                    <div className="rounded overflow-hidden border border-gray-200 w-full">
                      <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                        <thead className="bg-[#F3F8FC] text-[#2884CA]">
                          <tr>
                            <th className="py-3 md:px-4 px-2 border-b whitespace-nowrap">Sl. No</th>
                            <th className="py-3 md:px-4 px-2 border-b whitespace-nowrap">Name of Company</th>
                            <th className="py-3 md:px-4 px-2 border-b min-w-[180px]">Activity Name</th>
                            <th className="py-3 md:px-4 px-2 border-b whitespace-nowrap">Date / Duration</th>
                            <th className="py-3 md:px-4 px-2 border-b whitespace-nowrap">Students Benefitted</th>
                          </tr>
                        </thead>
                        <tbody>
                          {entry.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="text-textGray">
                              <td className="py-3 md:px-4 px-2 border-b align-top font-medium">{row.slNo}</td>
                              <td className="py-3 md:px-4 px-2 border-b align-top">{row.company}</td>
                              <td className="py-3 md:px-4 px-2 border-b align-top">{row.activityName}</td>
                              <td className="py-3 md:px-4 px-2 border-b align-top">{row.dateDuration}</td>
                              <td className="py-3 md:px-4 px-2 border-b align-top">{row.studentsCount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {entry.images && entry.images.length === 1 && (
                <div className="relative w-full h-[300px] md:h-[500px] mt-2 rounded-xl overflow-hidden">
                  <Image src={entry.images[0]} alt={entry.title} fill className="object-cover rounded-xl" />
                </div>
              )}
              {entry.images && entry.images.length > 1 && (
                <GallerySwiper images={entry.images} swiperId={`mou-${activeTab}-${idx}`} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

const IdeasTakeFlight = () => {
  const [activeCard, setActiveCard] = useState<IdeaCard | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeCard ? "hidden" : "auto";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCard) setActiveCard(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCard]);

  const isMouCard = activeCard?.mouTabs && activeCard.mouTabs.length > 0;

  return (
    <section className="py-16 max-w-7xl mx-auto xl:max-w-[75%] text-center text-[#1D1D1F] bg-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Where Ideas Take Flight</h2>
      <div className="max-w-[90%] mx-auto">
        <p className="text-textGray text-center mb-12 text-base md:text-lg leading-relaxed">
          The Canara Entrepreneurship Cell is dedicated to nurturing innovation, fostering leadership, & empowering students to transform ideas into
          successful ventures. Through mentorship, startup incubation, industry collaborations, & hands-on workshops, we provide the perfect launchpad
          for aspiring entrepreneurs to thrive in the ever-evolving business landscape.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 md:px-0">
        {ideasData.map((card) => (
          <motion.div
            key={card.id}
            className="group relative rounded-2xl h-[350px] md:h-[400px] w-full shadow-md overflow-hidden cursor-pointer"
            onClick={() => setActiveCard(card)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image src={card.cardImage} alt={card.cardTitle} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <h3 className="text-white text-xl md:text-2xl font-bold line-clamp-2 drop-shadow-md">{card.cardTitle}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="fixed inset-0 h-screen z-[9999] overflow-auto flex py-10 items-start justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
              onClick={() => setActiveCard(null)}
            />

            {/* Modal Card */}
            <motion.div
              variants={cardVariants}
              className="max-w-5xl mx-auto w-[90%] md:w-full bg-white h-fit z-[60] pb-10 rounded-3xl font-sans relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                variants={contentVariants}
                className="absolute top-6 right-4 lg:right-8 h-8 w-8 cursor-pointer bg-[#808080]/80 hover:bg-[#808080] rounded-full flex items-center justify-center z-10 transition-colors"
                onClick={() => setActiveCard(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconX className="h-6 w-6 text-white" />
              </motion.button>

              <motion.div variants={contentVariants}>
                {/* Hero Image — only for non-MoU cards */}
                {!isMouCard && activeCard.modalImage && (
                  <div className="relative w-full lg:h-[700px] h-[400px] mb-10">
                    <Image src={activeCard.modalImage} alt={activeCard.modalTitle} fill className="object-cover rounded-t-3xl" />
                  </div>
                )}

                <div className={`p-6 lg:px-20 space-y-5 text-left text-[#1D1D1F] ${isMouCard ? "pt-14" : ""}`}>
                  {/* Modal Title — centered for MoU, left for others */}
                  <h3 className={`text-2xl lg:text-4xl leading-tight font-bold ${isMouCard ? "text-center" : ""}`}>
                    {activeCard.modalTitle}
                  </h3>

                  {/* MoU Tabbed Content */}
                  {isMouCard && activeCard.mouTabs && (
                    <MouTabContent tabs={activeCard.mouTabs} />
                  )}

                  {/* Dynamic Sections (non-MoU cards) */}
                  {!isMouCard && activeCard.modalSections?.map((section, idx) => (
                    <div key={idx} className="space-y-2">
                      {section.subtitle && <h4 className="text-lg font-semibold text-[#1D1D1F]">{section.subtitle}</h4>}
                      {section.description && <p className="text-base md:text-lg text-textGray leading-7 text-justify">{section.description}</p>}
                      {section.points && section.points.length > 0 && (
                        <ul className="list-disc ml-6 space-y-1 text-base md:text-lg text-textGray leading-7">
                          {section.points.map((point, pIdx) => (
                            <li key={pIdx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* Gallery Swiper */}
                  {!isMouCard && activeCard.galleryImages && activeCard.galleryImages.length > 0 && (
                    <div>
                      <GallerySwiper images={activeCard.galleryImages} swiperId={`card-${activeCard.id}`} />
                    </div>
                  )}

                  {/* PDF Downloads */}
                  {activeCard.pdfDownloads && activeCard.pdfDownloads.length > 0 && (
                    <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
                      {activeCard.pdfDownloads.map((pdf, idx) => (
                        <a
                          key={idx}
                          href={pdf.path}
                          download
                          className="inline-flex items-center gap-2 text-base text-[#1D1D1F] hover:underline underline-offset-2"
                        >
                          Download {pdf.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IdeasTakeFlight;

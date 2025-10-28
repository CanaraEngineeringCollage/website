"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect, createContext } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click"; 
import { parse } from "node-html-parser";

interface CampusEvent {
  id: number;
  category: string;
  eventDate: string;
  content: string;
}

interface ExploreCampusProps {
  campusEvents?: CampusEvent[];
  title?: string;
  description?: string;
}

type EventDescriptionProps = {
  src: string;
  date: string;
  topTitle: string;
  topDescription: string;
  remainingHTML: string;
};

interface CarouselContextType {
  onCardClose: (index: number) => void;
  currentIndex: number;
  totalItems: number;
  goToNextCard: () => void;
  openCard: (index: number) => void;
  closeCard: () => void;
  isOpen: boolean;
}

export const CarouselContext = createContext<CarouselContextType>({
  onCardClose: () => {},
  currentIndex: 0,
  totalItems: 0,
  goToNextCard: () => {},
  openCard: () => {},
  closeCard: () => {},
  isOpen: false,
});

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.3 } },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, type: "spring", damping: 20, stiffness: 100 } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25 } },
};

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 1, backdropFilter: "blur(8px)", transition: { duration: 0.3 } },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
};




const dummyStudentAchievements: CampusEvent[] = [
  {
    id: 1,
    category: "Student Achievement",
    eventDate: "", // can be empty or remove if not used
    content: `
      <p>Awarded the prestigious B.E. (Honours) degree by VTU, Belagavi for outstanding performance and commitment to advanced learning through the successful completion of six online courses in Java, Python, Al, ML, IoT, and Cloud Computing, they earned 18 additional credits.</p>
      <img src="/mediaPageImages/B.E. (Honours. Degree).jpeg" alt="John Doe Achievement" />
    `,
  },
  {
    id: 2,
    category: "Student Achievement",
    eventDate: "",
    content: `
      <p>Nikitha Ganapathi Bhat, VTU 2024-25 First Rank with Gold Medal, Dept.of CSBS.</p>
      <img src="/mediaPageImages/Nikitha Ganapathi Bhat.jpeg" alt="Jane Smith Achievement" />
    `,
  },
  {
    id: 3,
    category: "Student Achievement",
    eventDate: "",
    content: `
      <p>CEC celebrates 10 VTU Ranks! Congratulations to our proud achievers!</p>
      <img src="/mediaPageImages/VTU - Rank Holders.jpeg" />
    `,
  },
   {
    id: 4,
    category: "Student Achievement",
    eventDate: "",
    content: `
      <p>UiPath Student Developer Champion Vaidehi V Pai, IV Semester CSE.</p>
      <img src="/mediaPageImages/Ui path Student Developer.jpeg" alt="Team CEC Robotics" />
    `,
  },
   {
    id: 5,
    category: "Student Achievement",
    eventDate: "",
    content: `
      <p>Six students from our Institution have been awarded the prestigious IEEE Women in Engineering (WIE) scholarship 2024-25, funded by Quest Global and facilitated by IEEE India Philanthrophy (IIP)</p>
      <img src="/mediaPageImages/IEEE - WIE Scholarship 2024-25.jpeg" />
    `,
  },
  {
    id: 6,
    category: "Student Achievement",
    eventDate: "",
    content: `
      <p>Mr. Krishna Pallan (ISE 3rd Year), Mr. Mukesh, and Mr. Ashlesh (AIML 3rd Year) secured 3rd Prize in The Lazarus Missions, a 96-hour ML. Hackathon hosted by IEEE NITIK Surathkal (March 1-5, 2025).</p>
      <img src="/mediaPageImages/Hackathon.jpeg" />
    `,
  },
  {
    id: 7,
    category: "Student Achievement",
    eventDate: "",
    content: `
      <p>Ms. Pavitra Bhat K. II year ISE, secured 2nd place (silver medal) in high jump and Ms. Jayalakhmi, 1st year CSD secured Bronze Medal in High Jump in VTU State level Athletic meet held at JNNCE Shimoga on 15 March 2025.</p>
      <img src="/mediaPageImages/VTU state level.jpeg" />
    `,
  },
];

// Parse HTML
const parseEventContent = (html: string) => {
  const root = parse(html);
  const firstHeadingEl = root.querySelector("h1,h2,h3,h4,h5,h6");
  const topTitle = firstHeadingEl?.text?.trim() || "";
  if (firstHeadingEl) firstHeadingEl.remove();
  const firstParagraphEl = root.querySelector("p");
  const topDescription = firstParagraphEl?.text?.trim() || "";
  if (firstParagraphEl) firstParagraphEl.remove();
  const firstImageEl = root.querySelector("img");
  const src = firstImageEl?.getAttribute("src") || "";
  if (firstImageEl) firstImageEl.remove();

  let remainingHTML = root.toString()
    .replace(/\n|\r/g, "")
    .replace(/>\s+</g, "><")
    .replace(/<[^/>]+>\s*<\/[^>]+>/g, "")
    .trim();

  return { src, topTitle, topDescription, remainingHTML };
};

function EventContent({ description }: { description: EventDescriptionProps }) {
  return (
    <div>
      {description.src && (
        <Image
          src={description.src}
          alt={description.topTitle}
          loading="lazy"
          width={1000}
          height={700}
          className="object-cover overflow-hidden rounded-t-2xl w-full lg:h-[500px] h-[400px] mb-10"
        />
      )}
      <div className="p-4 lg:px-20 space-y-10 text-left text-sm text-black bg-white">
        <div>
         {description.date&& <p className="text-[17px] text-textGray uppercase font-bold mb-4">{new Date(description.date).toLocaleDateString("en-GB")}</p>}
          {description.topTitle&&<h3 className="text-[27px] font-semibold font-sans text-black mb-2 line-clamp-2">{description.topTitle}</h3>}
          {description.topDescription&&<p className="text-xl text-textGray">{description.topDescription}</p>}
        </div>
        <div className="bg-white -mt-20" dangerouslySetInnerHTML={{ __html: description.remainingHTML }} />
      </div>
    </div>
  );
}

const ExploreCampus: React.FC<ExploreCampusProps> = ({ campusEvents: initialEvents = [], title, description }) => {
  const [campusEvents, setCampusEvents] = useState<CampusEvent[]>(initialEvents);
const categories: string[] = Array.from(
  new Set(campusEvents.map(event => event.category))
);
  const [activeCategory, setActiveCategory] = useState<string>("Student Achievement");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchBuzz = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buzz`);
      if (!res.ok) throw new Error("Failed to fetch buzz");
      const data = await res.json();
     setCampusEvents(prev => [...dummyStudentAchievements, ...data]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBuzz();
  }, []);

  // Sort by date descending
  const sortedEvents = [...campusEvents].sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime());

  const filteredEvents = sortedEvents.filter(event => activeCategory === "All" ? true : event.category === activeCategory);
  const eventsToShow = showAll ? filteredEvents : filteredEvents.slice(0, 5);

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(false);
  };

  const openCard = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCard = () => setIsOpen(false);

  const goToNextCard = () => setCurrentIndex((prev) => (filteredEvents.length ? (prev + 1) % filteredEvents.length : 0));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && isOpen && closeCard();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useOutsideClick(containerRef, () => isOpen && closeCard());

  const getEventDescription = (event: CampusEvent): EventDescriptionProps => ({
    ...parseEventContent(event.content),
    date: event.eventDate,
  });

  return (
    <CarouselContext.Provider
      value={{
        onCardClose: handleCardClose,
        currentIndex,
        totalItems: filteredEvents.length,
        goToNextCard,
        openCard,
        closeCard,
        isOpen,
      }}
    >
      <section className="max-w-7xl xl:max-w-[75%] mx-auto text-[#1D1D1F] py-10">
        {(title || description) && (
          <div className="text-center mb-10 lg:px-32">
            <h1 className="text-center leading-[1.1] text-[46px] mb-5 font-bold">{title}</h1>
            <p className="text-center">{description}</p>
          </div>
        )}

        {/* Category Filters */}
     <div className="pb-5 lg:pb-10">
  {/* Mobile Dropdown */}
  <div className="flex lg:hidden justify-between items-center gap-2 md:hidden">


    <select
      value={activeCategory}
      onChange={(e) => { setActiveCategory(e.target.value); setShowAll(false); }}
      className="border rounded-xl px-3 py-2 text-base text-gray-700 focus:outline-none"
    >
   
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>

  {/* Desktop View */}
    <div className="hidden lg:flex justify-between items-center pb-5 lg:pb-10 flex-wrap gap-2">
         
          {categories.map((category, index) => (
            <h3
              onClick={() => { setActiveCategory(category); setShowAll(false); }}
              className={`cursor-pointer ${category === activeCategory ? "text-black font-bold" : "text-textGray"} text-[18px]`}
              key={index}
            >
              {category}
            </h3>
          ))}
        </div>
</div>


        {/* Event Cards */}
        <div className="flex flex-col gap-8">
          {eventsToShow.length > 0 ? (
            eventsToShow.map((event, index) => {
              const { src, topTitle, topDescription } = parseEventContent(event.content);
              return (
                <div key={event.id} onClick={() => openCard(index)} className="flex cursor-pointer flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-full md:w-[40%]">
                    <Image
                      src={src || event.content}
                      alt={topTitle || event.category}
                      width={1000}
                      height={1000}
                      className="rounded-l-2xl object-cover w-full h-[40vh] lg:h-[50vh]"
                    />
                  </div>
                  <div className="flex flex-col justify-center w-full md:w-1/2 p-6 lg:p-10">
                    {event.eventDate&&<p className="text-[17px] text-textGray uppercase font-bold mb-4">{new Date(event.eventDate).toLocaleDateString("en-GB")}</p>}
                    {event.eventName&&<p className="text-textGray text-[17px] mb-3">{event.eventName}</p>}
                    {topTitle&&<h2 className="text-[31px] leading-[1.1] font-bold text-[#1D1D1F] mb-2">{topTitle}</h2>}
                    {topDescription&&<p className="text-textGray leading-[1.3] line-clamp-3 text-[21px] mb-4">{topDescription}</p>}
                    <motion.button
                      onClick={() => openCard(index)}
                      className="text-[#2997FF] inline-flex text-[21px] items-center font-medium text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More <MdKeyboardArrowRight className="ml-1" />
                    </motion.button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-textGray text-[18px] py-10">There are no events in this category.</p>
          )}
        </div>

        {/* Show More Button */}
        {!showAll && filteredEvents.length > 5 && (
          <div className="flex justify-center mt-10">
            <button
              className="bg-[#eff1f6] text-black px-5 py-2 cursor-pointer rounded-3xl"
              onClick={() => setShowAll(true)}
            >
              Explore More Campus Stories
            </button>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {isOpen && filteredEvents.length > 0 && (
            <motion.div className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
              <motion.div variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" onClick={closeCard} />
              <motion.div
                variants={cardVariants}
                ref={containerRef}
                className="max-w-4xl mx-auto bg-white h-fit z-[60] my-10 pb-10 rounded-3xl font-sans relative shadow-2xl"
              >
                <motion.button
                  variants={contentVariants}
                  className="absolute top-6 me-4 lg:me-8 h-8 w-8 right-0 cursor-pointer ml-auto bg-[#808080] rounded-full flex items-center justify-center"
                  onClick={closeCard}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconX className="h-6 w-6 text-white" />
                </motion.button>
                <motion.div variants={contentVariants} className="!overflow-hidden">
                  <EventContent description={getEventDescription(filteredEvents[currentIndex])} />
                </motion.div>
                <motion.div variants={contentVariants} className="p-4 lg:px-20 mt-10">
                  <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">Next Event</h1>
                  <h1
                    onClick={goToNextCard}
                    className="text-[#2997FF] inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]"
                  >
                    {parseEventContent(filteredEvents[(currentIndex + 1) % filteredEvents.length].content).topTitle || "First Event"}
                    <MdKeyboardArrowRight className="ml-1 mt-1 text-[20px] md:text-[25px]" />
                  </h1>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </CarouselContext.Provider>
  );
};

export default ExploreCampus;

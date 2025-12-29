"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect, createContext } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import CustomSelect from "../CustomSelect/CustomSelect";
import { parse } from "node-html-parser";

// --- Interfaces ---

interface CampusEvent {
  id: number;
  category: string;
  eventDate: string;
  content: string;
  eventName?: string;
}

interface ExploreCampusProps {
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

// --- Animations ---

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.3 } },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, type: "spring", damping: 20, stiffness: 100 },
  },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25 } },
};

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
};

// --- Parsers & Sub-components ---

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

  let remainingHTML = root
    .toString()
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
          className="object-cover overflow-hidden rounded-t-2xl w-full h-full mb-10"
        />
      )}
      <div className="p-4 lg:px-20 space-y-10 text-left text-sm text-black bg-white">
        <div>
          {description.date && (
            <p className="text-[17px] text-textGray uppercase font-bold ">
              {new Date(description.date).toLocaleDateString("en-GB")}
            </p>
          )}
          {description.topTitle && (
            <h3 className="text-[27px] font-semibold font-sans text-black my-3 line-clamp-2">
              {description.topTitle}
            </h3>
          )}
          {description.topDescription && (
            <p className="text-xl text-textGray">{description.topDescription}</p>
          )}
        </div>
        {description.remainingHTML && (
          <div
            className={`bg-white ${
              description.topDescription &&
              description.topTitle &&
              description.src &&
              "-mt-20"
            } ${description.topDescription && "-mt-10"} ${
              description.topTitle && "-mt-10"
            }`}
            dangerouslySetInnerHTML={{ __html: description.remainingHTML }}
          />
        )}{" "}
      </div>
    </div>
  );
}

// --- Main Component ---

const ExploreCampus: React.FC<ExploreCampusProps> = ({
  title,
  description,
}) => {
  const [campusEvents, setCampusEvents] = useState<CampusEvent[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  
  // Pagination State
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const LIMIT = 5;

  // Modal State
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Helper to fetch events
  const fetchEvents = async (category: string, pageNum: number, shouldReset: boolean) => {
    // If no category is selected yet, don't fetch
    if (!category) return;

    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append("page", pageNum.toString());
      params.append("limit", LIMIT.toString());
      params.append("category", category);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buzz?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch buzz");
      
      const responseJson = await res.json();
      const newEvents = responseJson.data || [];

      if (shouldReset) {
        setCampusEvents(newEvents);
      } else {
        setCampusEvents((prev) => [...prev, ...newEvents]);
      }

      if (newEvents.length < LIMIT) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Initial Fetch (Categories + First Page of Events)
  useEffect(() => {
    const init = async () => {
      try {
        const catRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buzz/categories`);
        if (catRes.ok) {
          const categoriesResponse: string[] = await catRes.json();
          
          // Filter out "Student Achievements" and do NOT add "All"
          const filteredCategories = categoriesResponse.filter(
            (c) => c !== "Student Achievements"
          );

          setCategories(filteredCategories);

          // Automatically select the first category if available
          if (filteredCategories.length > 0) {
            const firstCategory = filteredCategories[0];
            setActiveCategory(firstCategory);
            // Fetch events for the first category immediately
            await fetchEvents(firstCategory, 1, true);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    init();
  }, []);

  // 3. Handlers
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setPage(1);
    setHasMore(true);
    setCampusEvents([]); 
    fetchEvents(category, 1, true);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchEvents(activeCategory, nextPage, false);
  };

  // Modal Handlers
  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(false);
  };

  const openCard = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCard = () => setIsOpen(false);

  const goToNextCard = () =>
    setCurrentIndex((prev) =>
      campusEvents.length ? (prev + 1) % campusEvents.length : 0
    );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    const handleKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && isOpen && closeCard();
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
        totalItems: campusEvents.length,
        goToNextCard,
        openCard,
        closeCard,
        isOpen,
      }}
    >
      <section className="max-w-7xl xl:max-w-[75%] mx-auto text-[#1D1D1F] py-16">
        {(title || description) && (
          <div className="text-center mb-10 lg:px-32">
            <h1 className="text-center md:leading-[1.1] text-3xl md:text-[46px] mb-5 font-bold">
              {title}
            </h1>
            <p className="text-center text-[21px]">{description}</p>
          </div>
        )}

        {/* Category Filters */}
        <div className="pb-5 lg:pb-10">
          {/* Mobile Dropdown */}
          <div className="flex lg:hidden justify-between items-center gap-2 ">
            <CustomSelect
              value={activeCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              options={categories}
            />
          </div>

          {/* Desktop View */}
          <div className="hidden lg:flex justify-between items-center pb-5 lg:pb-10 flex-wrap gap-2">
            {categories.map((category, index) => (
              <h3
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer ${
                  category === activeCategory
                    ? "text-black font-bold"
                    : "text-textGray"
                } text-lg`}
                key={index}
              >
                {category}
              </h3>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="flex flex-col gap-8 min-h-[300px]">
          {campusEvents.length > 0 ? (
            campusEvents.map((event, index) => {
              const { src, topTitle, topDescription } = parseEventContent(
                event.content
              );
              return (
                <div
                  key={event.id}
                  onClick={() => openCard(index)}
                  className="flex cursor-pointer flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-md"
                >
                  <div className="flex-shrink-0 w-full md:w-[40%]">
                    <Image
                      src={src || "/placeholder-image.jpg"} 
                      alt={topTitle || event.category}
                      width={1000}
                      height={1000}
                      className="rounded-l-2xl object-cover w-full h-[40vh] md:h-[30vh] lg2:h-[50vh]"
                    />
                  </div>
                  <div className="flex flex-col justify-center w-full md:w-1/2 p-6 lg:p-10">
                    {event.eventDate && (
                      <p className="text-[17px] text-textGray uppercase font-bold mb-4">
                        {new Date(event.eventDate).toLocaleDateString("en-GB")}
                      </p>
                    )}
                    {event.eventName && (
                      <p className="text-textGray text-[17px] mb-3 capitalize">{event.eventName?.toLowerCase()}</p>
                    )}
                    {topTitle && (
                      <h2 className="text-[31px] leading-[1.1] font-bold text-[#1D1D1F] mb-2">
                        {topTitle}
                      </h2>
                    )}
                    {topDescription && (
                      <p className="text-textGray leading-[1.3] line-clamp-3 text-[21px] mb-4">
                        {topDescription}
                      </p>
                    )}
                    <motion.button
                      onClick={() => openCard(index)}
                      className="text-primary inline-flex text-[21px] items-center font-medium text-sm"
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
            !loading && <div className="text-center py-10">No events found.</div>
          )}
          
          {loading && <div className="text-center py-5">Loading events...</div>}
        </div>

        {/* Show More Button */}
        {hasMore && !loading && campusEvents.length > 0 && (
          <div className="flex justify-center mt-10">
            <button
              className="bg-[#eff1f6] text-black px-5 py-2 cursor-pointer rounded-3xl hover:bg-gray-200 transition-colors"
              onClick={loadMore}
            >
              Explore More Campus Stories
            </button>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {isOpen && campusEvents.length > 0 && (
            <motion.div
              className="fixed inset-0 h-screen z-50 overflow-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={backdropVariants}
                className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
                onClick={closeCard}
              />
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
                  <EventContent
                    description={getEventDescription(
                      campusEvents[currentIndex]
                    )}
                  />
                </motion.div>
                <motion.div variants={contentVariants} className="p-4 lg:px-20 ">
                  <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">
                    {parseEventContent(
                      campusEvents[(currentIndex + 1) % campusEvents.length]
                        .content
                    ).topTitle && "Next Event"}
                  </h1>
                  <h1
                    onClick={goToNextCard}
                    className="text-primary inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]"
                  >
                    {parseEventContent(
                      campusEvents[(currentIndex + 1) % campusEvents.length]
                        .content
                    ).topTitle || "Next Event"}
                    <MdKeyboardArrowRight className="ml-1 mt-0.5  text-[20px] md:text-[25px]" />
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
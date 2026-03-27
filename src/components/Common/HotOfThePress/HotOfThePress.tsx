"use client";
import React, { useRef, useState, useEffect, createContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { parse } from "node-html-parser";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Link from "next/link";

interface CampusEvent {
  id: number;
  category: string;
  eventDate: string;
  content: string;
  eventName: string;
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
          alt={description.topTitle || "Event Image"}
          loading="lazy"
          width={1000}
          height={700}
          className="object-cover overflow-hidden rounded-t-2xl w-full  mb-10"
        />
      )}
      <div className="p-4 lg:px-20 space-y-10 text-left text-sm text-[#1D1D1F] bg-white">
        <div>
          {<p className="text-[17px] text-textGray uppercase font-bold mb-2">{description.date}</p>}
          <h2 className="text-[27px] font-semibold font-sans text-[#1D1D1F] mb-2 line-clamp-2">{description.topTitle}</h2>
          <p className="text-xl text-textGray">{description.topDescription}</p>
        </div>
        <div className="bg-white -mt-10" dangerouslySetInnerHTML={{ __html: description.remainingHTML }} />
      </div>
    </div>
  );
}

const HotOfThePressCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [events, setEvents] = useState<CampusEvent[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchEvents = async () => {
    try {
      const params = new URLSearchParams({
        page: "1",
        limit: "15",
        excludeCategory: "Student Achievements,Weekly Digest",
      });
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buzz?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch buzz");

      const response = await res.json();

      setEvents(response.data); // <-- CORRECT
      setIsLoaded(true);
    } catch (err) {
      console.error(err);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Sort by date descending
  const sortedEvents = events;

  const openCard = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const closeCard = () => setIsOpen(false);
  const goToNextCard = () => setCurrentIndex((prev) => (sortedEvents.length ? (prev + 1) % sortedEvents.length : 0));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && isOpen && closeCard();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useOutsideClick(containerRef, () => isOpen && closeCard());

  const getEventDescription = (event: CampusEvent): EventDescriptionProps => ({
    ...parseEventContent(event.content),
    date: event.eventDate ? new Date(event.eventDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : null,
  });

  if (events.length === 0) {
    return null;
  }

  return (
    <section className="lg:ml-20 xl:ml-60 md:py-0 md:pt-16 py-10">
      <div className="flex justify-between items-center w-full md:pb-16 pb-10">
        <h1 className="text-3xl text-[#1D1D1F] md:text-left text-center md:text-[40px] lg2:text-5xl xl:text-6xl font-semibold font-sans  tracking-[0.13px]">
          Campus Buzz
        </h1>

        <div className="hidden md:block">
          <Link href="/campus-buzz">
            <button
              aria-label="Explore More Campus Buzz"
              className="text-[#1D1D1F] cursor-pointer font-semibold font-sans bg-[#c3d5ed] hover:bg-blue-200 px-5 py-2 rounded-3xl lg:mr-12"
            >
              Explore More Campus Buzz
            </button>
          </Link>
        </div>
      </div>

      {isLoaded && events.length > 0 ? (
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1580: { slidesPerView: 3.8, spaceBetween: 1 },
          }}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {sortedEvents.map((event, index) => {
            const { src, topTitle, topDescription } = parseEventContent(event.content);
            return (
              <SwiperSlide key={event.id}>
                <div
                  className="max-w-sm  bg-white min-h-[450px] cursor-pointer rounded-xl lg:rounded-3xl overflow-hidden "
                  onClick={() => openCard(index)}
                >
                  <div className="h-60 overflow-hidden">
                    <Image 
                      src={src || "https://via.placeholder.com/600x400?text=Campus+Buzz"} 
                      alt={topTitle || event.category} 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-8 text-center">
                    <div className="flex justify-center items-center space-x-3">
                      <p className="text-textGray text-[17px] mb-1 line-clamp-1 capitalize">{event.eventName?.toLowerCase()}</p>

                      {/* Vertical divider */}
                      {event.eventDate && <div className="h-5 w-[1px] bg-textGray"></div>}

                      {event.eventDate && (
                        <p className="text-textGray text-[17px] mb-1">
                          {new Date(event.eventDate).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      )}
                    </div>

                    {/* <p className="text-textGray text-[17px] mb-1">{event.category}</p> */}
                    {topTitle ? (
                      <h2 className="text-[27px] font-semibold font-sans text-[#1D1D1F] mb-2 line-clamp-2">{topTitle}</h2>
                    ) : topDescription ? (
                      <h2 className="text-[27px] font-semibold font-sans text-[#1D1D1F] mb-2 line-clamp-2">{topDescription}</h2>
                    ) : (
                      <h2 className="text-[27px] font-semibold font-sans text-[#1D1D1F] mb-2 line-clamp-2">{event.category}</h2>
                    )}
                    <button className="text-primary inline-flex text-[17px] items-center hover:underline font-medium text-sm">
                      Read More <MdKeyboardArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="text-center py-10 text-textGray">No events to display.</div>
      )}

      {/* Swiper Navigation */}
      <div className="flex justify-center lg:justify-end md:pb-0 pb-10">
        <div className="flex lg:mr-22  gap-6 lg:mt-20 mt-10">
          <button
            aria-label="Previous Slide"
            className="swiper-button-prev-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            aria-label="Next Slide"
            className="swiper-button-next-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>

      <div className="md:hidden  lg:mt-5 flex justify-center ">
        <Link href="/campus-buzz">
          {" "}
          <button
            aria-label="Explore More Campus Buzz"
            className="text-[#1D1D1F] mx-auto cursor-pointer font-bold bg-[#c3d5ed] px-5 py-2 rounded-3xl"
          >
            Explore More Campus Buzz
          </button>
        </Link>
      </div>
      

      {/* Modal */}
      <AnimatePresence>
        {isOpen && sortedEvents.length > 0 && (
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
                <EventContent description={getEventDescription(sortedEvents[currentIndex])} />
              </motion.div>
              {/* <motion.div variants={contentVariants} className="p-4 lg:px-20 ">
                <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">Next Event</h1>
                <h1
                  onClick={goToNextCard}
                  className="text-primary inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]"
                >
                  {parseEventContent(sortedEvents[(currentIndex + 1) % sortedEvents.length].content).topTitle || "First Event"}
                  <MdKeyboardArrowRight className="ml-1 mt-1 text-[20px] md:text-[25px]" />
                </h1>
              </motion.div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HotOfThePressCarousel;
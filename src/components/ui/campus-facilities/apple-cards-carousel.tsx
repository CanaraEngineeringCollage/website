"use client";
import React, { useEffect, useRef, useState, createContext, useContext, HTMLAttributes, ButtonHTMLAttributes, RefAttributes } from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import programData from "../../../utils/programData/programData.json";
import { MdKeyboardArrowRight } from "react-icons/md";

interface CarouselProps {
  items: React.ReactNode[];
  layout?: "grid" | "list";
}

type Card = {
  src: string;
  title: string;
  category?: string;
  content: React.ReactNode;
  style: string;
  desc?: string;
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

type CustomMotionProps = Omit<MotionProps, "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"> & {
  onAnimationStart?: React.AnimationEventHandler<HTMLElement>;
  onAnimationEnd?: React.AnimationEventHandler<HTMLElement>;
  onAnimationIteration?: React.AnimationEventHandler<HTMLElement>;
};

interface MotionDivProps extends CustomMotionProps, HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {}
const MotionDiv = motion.div as React.ComponentType<MotionDivProps>;

interface MotionPProps extends CustomMotionProps, HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {}
const MotionP = motion.p as React.ComponentType<MotionPProps>;

interface MotionButtonProps extends CustomMotionProps, ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {}
const MotionButton = motion.button as React.ComponentType<MotionButtonProps>;

export const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(false);
  };

  const openCard = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCard = () => {
    setIsOpen(false);
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsOpen(true); // Keep the card open when navigating to the next card
  };

  const layoutClasses = "flex flex-col gap-20 max-w-7xl xl:max-w-[75%] mx-auto";

  return (
    <CarouselContext.Provider
      value={{
        onCardClose: handleCardClose,
        currentIndex,
        totalItems: items.length,
        goToNextCard,
        openCard,
        closeCard,
        isOpen,
      }}
    >
      <div className="relative w-full px-4 py-10 md:py-20">
        <div className={cn("w-full", layoutClasses)}>
          {items.map((item, index) => (
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="rounded-3xl w-full"
            >
              {item}
            </MotionDiv>
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }: { card: Card; index: number; layout?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex, totalItems, goToNextCard, openCard, closeCard, isOpen } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen && currentIndex === index) {
        closeCard();
      }
    }

    if (isOpen && currentIndex === index) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, currentIndex, index, closeCard]);

  useOutsideClick(containerRef, () => {
    if (isOpen && currentIndex === index) {
      closeCard();
    }
  });

  const handleOpen = () => {
    openCard(index);
  };

  const handleClose = () => {
    closeCard();
    onCardClose(index);
  };

  const handleNextCard = () => {
    goToNextCard(); // Move to the next card
  };



    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && isOpen) {
        closeCard();
    onCardClose(index);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen,closeCard]);

  // Calculate the next card's title
  const nextIndex = (index + 1) % totalItems;
  const nextCardTitle = programData[nextIndex]?.title || "First Card";

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: { duration: 0.3, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
      opacity: 1,
      backdropFilter: "blur(8px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2, ease: "easeIn" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  

  return (
    <>
      <AnimatePresence>
        {isOpen && currentIndex === index && (
          <MotionDiv className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
            <MotionDiv variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" onClick={handleClose} />
            <MotionDiv
              variants={cardVariants}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-6xl mx-auto bg-white h-fit z-[60] my-10 pb-10 rounded-3xl font-sans relative shadow-2xl"
            >
              <motion.button
                variants={contentVariants}
                className="absolute top-6 me-4 lg:me-8 h-8 w-8 right-0 cursor-pointer ml-auto bg-[#808080] rounded-full flex items-center justify-center"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconX className="h-6 w-6 text-white" />
              </motion.button>
              <motion.div variants={contentVariants} className="">
                {card.content}
              </motion.div>
                <motion.div variants={contentVariants} className="p-4 lg:px-20 mt-10">
                <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">NextUp</h1>
                <h1
                  onClick={handleNextCard}
                  className="text-[#2997FF] inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]"
                >
                  {nextCardTitle}
                  <MdKeyboardArrowRight className="ml-1 mt-1 text-[20px] md:text-[25px]" />
                </h1>
                </motion.div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
      <MotionButton
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-white h-[35rem] w-full md:h-[45rem] overflow-hidden flex flex-col items-start justify-start relative z-10"
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Top gradient overlay */}
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black/70 via-transparent to-transparent z-30 pointer-events-none" />
        <div className={`relative ${card.style} z-40 p-8`}>
          <MotionP
        layoutId={layout ? `category-${card.category}` : undefined}
        className="text-[#c3bfbf] text-[18px] md:text-[31px] font-bold md:font-medium font-sans text-left"
          >
        {card.category}
          </MotionP>
          <MotionP
        layoutId={layout ? `title-${card.title}` : undefined}
        className="text-white text-[31px]  md:text-[76px] font-semibold max-w-3xl leading-[1.1] text-left [text-wrap:balance] font-sans mt-2"
          >
        {card.title}
          </MotionP>
          <MotionP
        layoutId={layout ? `category-${card.category}` : undefined}
        className="text-[#c3bfbf] text-[18px] md:text-[31px] max-w-3xl font-bold md:font-medium font-sans text-left"
          >
        {card.desc}
          </MotionP>
        </div>
        <BlurImage src={card.src} alt={card.title} fill className="object-cover absolute z-10 inset-0" />
        <div className="absolute bottom-4 right-4 z-40">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.888672" y="0.464844" width="36" height="36" rx="18" fill="#FFFFFF" />
        <path
          d="M25.4137 17.1238H20.2387V11.9398C20.2387 11.5818 20.0964 11.2384 19.8433 10.9852C19.5901 10.7321 19.2467 10.5898 18.8887 10.5898C18.5306 10.5898 18.1873 10.7321 17.9341 10.9852C17.6809 11.2384 17.5387 11.5818 17.5387 11.9398V17.1148H12.3637C12.0056 17.1148 11.6623 17.2571 11.4091 17.5102C11.1559 17.7634 11.0137 18.1068 11.0137 18.4648C11.0137 18.8229 11.1559 19.1663 11.4091 19.4194C11.6623 19.6726 12.0056 19.8148 12.3637 19.8148H17.5387V24.9898C17.5387 25.3479 17.6809 25.6913 17.9341 25.9444C18.1873 26.1976 18.5306 26.3398 18.8887 26.3398C19.2467 26.3398 19.5901 26.1976 19.8433 25.9444C20.0964 25.6913 20.2387 25.3479 20.2387 24.9898V19.8148H25.4137C25.7717 19.8148 26.1151 19.6726 26.3683 19.4194C26.6214 19.1663 26.7637 18.8229 26.7637 18.4648C26.7637 18.1068 26.6214 17.7634 26.3683 17.5102C26.1151 17.2571 25.7717 17.1148 25.4137 17.1148V17.1238Z"
          fill="#000000"
        />
          </svg>
        </div>
      </MotionButton>
    </>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

"use client";
import React, { useEffect, useRef, useState, createContext, useContext, HTMLAttributes, ButtonHTMLAttributes, RefAttributes, useCallback } from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

// Modified MotionProps to resolve onAnimationStart conflict
type CustomMotionProps = Omit<MotionProps, "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"> & {
  onAnimationStart?: React.AnimationEventHandler<HTMLElement>;
  onAnimationEnd?: React.AnimationEventHandler<HTMLElement>;
  onAnimationIteration?: React.AnimationEventHandler<HTMLElement>;
};

// Type for motion.div (with RefAttributes)
interface MotionDivProps extends CustomMotionProps, HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {}
const MotionDiv = motion.div as React.ComponentType<MotionDivProps>;

// Type for motion.p
interface MotionPProps extends CustomMotionProps, HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {}
const MotionP = motion.p as React.ComponentType<MotionPProps>;

// Type for motion.button
interface MotionButtonProps extends CustomMotionProps, ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {}
const MotionButton = motion.button as React.ComponentType<MotionButtonProps>;

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("flex flex-row justify-start gap-4 pl-4", "lg:max-w-7xl xl:max-w-[75%] mx-auto")}>
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
                className="last:pr-[5%] md:last:pr-[9%] rounded-3xl"
              >
                {item}
              </MotionDiv>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.555 3.21044L3.614 9.13244L9.5181 15.0924C10.101 15.6814 10.0981 16.6304 9.5091 17.2134C9.2171 17.5034 8.8351 17.6484 8.4531 17.6484C8.0671 17.6484 7.6811 17.5004 7.3881 17.2044L0.431099 10.1824C-0.150901 9.59444 -0.148901 8.64844 0.437099 8.06444L7.4371 1.08644C8.0221 0.501439 8.9741 0.502439 9.5581 1.08944C10.1431 1.67644 10.141 2.62644 9.555 3.21044Z"
                fill="black"
                fillOpacity="0.56"
              />
            </svg>
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.55853 7.86717C10.1445 8.45117 10.1465 9.39717 9.56453 9.98517L2.60753 17.0072C2.31453 17.3032 1.92853 17.4512 1.54253 17.4512C1.16053 17.4512 0.778527 17.3062 0.486527 17.0162C-0.102473 16.4332 -0.105473 15.4842 0.477527 14.8952L6.38163 8.93517L0.440627 3.01317C-0.145373 2.42917 -0.147373 1.47907 0.437627 0.892173C1.02163 0.305173 1.97363 0.304173 2.55863 0.889173L9.55853 7.86717Z"
                fill="black"
                fillOpacity="0.56"
              />
            </svg>
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }: { card: Card; index: number; layout?: boolean }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  // Wrap handleClose in useCallback to memoize it
  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  // Move useOutsideClick to top level
  useOutsideClick(containerRef, handleClose);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]); // Add handleClose to dependency array

  const handleOpen = () => {
    setOpen(true);
  };

  // Animation variants for the card
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

  // Animation variants for the backdrop
  const backdropVariants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
      opacity: 1,
      backdropFilter: "blur(8px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2, ease: "easeIn" } },
  };

  // Animation variants for content (category, title, close button)
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
        {open && (
          <MotionDiv className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
            <MotionDiv variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
            <MotionDiv
              variants={cardVariants}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative shadow-2xl"
            >
              <MotionButton
                variants={contentVariants}
                className="sticky top-4 h-8 w-8 right-0 cursor-pointer ml-auto bg-black rounded-full flex items-center justify-center"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconX className="h-6 w-6 text-white" />
              </MotionButton>
              <MotionP variants={contentVariants} layoutId={layout ? `category-${card.title}` : undefined} className="text-lg font-medium text-black">
                {card.category}
              </MotionP>
              <MotionP
                variants={contentVariants}
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-black mt-4"
              >
                {card.title}
              </MotionP>
              <motion.div variants={contentVariants} className="py-10">
                {card.content}
              </motion.div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
      <MotionButton
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-white h-[35rem] w-80 md:h-[45rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <MotionP
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-2xl md:text-base font-bold md:font-medium font-sans text-left"
          >
            {card.category}
          </MotionP>
          <MotionP
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-[17px] md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </MotionP>
        </div>
        <BlurImage src={card.src} alt={card.title} fill className="object-cover absolute z-10 inset-0" />
        <div className="absolute bottom-4 right-4 z-40">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.888672" y="0.464844" width="36" height="36" rx="18" fill="#333336" />
            <path
              d="M25.4137 17.1238H20.2387V11.9398C20.2387 11.5818 20.0964 11.2384 19.8433 10.9852C19.5901 10.7321 19.2467 10.5898 18.8887 10.5898C18.5306 10.5898 18.1873 10.7321 17.9341 10.9852C17.6809 11.2384 17.5387 11.5818 17.5387 11.9398V17.1148H12.3637C12.0056 17.1148 11.6623 17.2571 11.4091 17.5102C11.1559 17.7634 11.0137 18.1068 11.0137 18.4648C11.0137 18.8229 11.1559 19.1663 11.4091 19.4194C11.6623 19.6726 12.0056 19.8148 12.3637 19.8148H17.5387V24.9898C17.5387 25.3479 17.6809 25.6913 17.9341 25.9444C18.1873 26.1976 18.5306 26.3398 18.8887 26.3398C19.2467 26.3398 19.5901 26.1976 19.8433 25.9444C20.0964 25.6913 20.2387 25.3479 20.2387 24.9898V19.8148H25.4137C25.7717 19.8148 26.1151 19.6726 26.3683 19.4194C26.6214 19.1663 26.7637 18.8229 26.7637 18.4648C26.7637 18.1068 26.6214 17.7634 26.3683 17.5102C26.1151 17.2571 25.7717 17.1148 25.4137 17.1148V17.1238Z"
              fill="#D6D6D7"
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

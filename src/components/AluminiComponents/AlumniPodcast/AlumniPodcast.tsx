"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { InstagramBlue } from "@/components/Icons/Icons";

// --- Interfaces ---
interface AlumniPodcast {
  id: number;
  url: string;
  createdAt: string;
  title: string;
  thumbnailUrl?: string; // Updated to match the string URL from the backend
}

interface CarouselProps {
  heading?: string;
  backgroundColor?: string;
}

// --- Helper: Extract YouTube ID ---
const getYoutubeId = (url?: string) => {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/);
  return match && match[1] ? match[1] : null;
};

// --- Helper: Get Best Possible Start Image (Fallback) ---
const getYoutubeThumbnail = (url?: string) => {
  const id = getYoutubeId(url);
  if (!id) return "/placeholder.jpg";
  return `https://img.youtube.com/vi/${id}/maxres1.jpg`;
};

export default function AlumniPodcastCarousel({ heading = "Alumni Podcast", backgroundColor = "" }: CarouselProps) {
  // --- State ---
  const [podcasts, setPodcasts] = useState<AlumniPodcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // GSAP Refs
  const directionRef = useRef(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // --- Fetch & Process Data ---
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) return;

        const res = await fetch(`${apiUrl}/alumni/podcast`, { cache: "no-store" });
        if (!res.ok) throw new Error("Network response was not ok");

        const data: AlumniPodcast[] = await res.json();

        const processedData = data.map((podcast) => {
          let thumbnailUrl = getYoutubeThumbnail(podcast.url);

          // --- UPDATED IMAGE LOGIC HERE ---
          // Use the uploaded image if it exists, otherwise fallback to YouTube thumbnail
          if (podcast.thumbnailUrl) {
            thumbnailUrl = `${apiUrl}/alumni/file/${podcast.thumbnailUrl}`;
          }

          return { ...podcast, thumbnailUrl };
        });

        setPodcasts(processedData);
      } catch (error) {
        console.error("Failed to fetch alumni podcasts", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPodcasts();
  }, []);

  // --- Carousel Logic ---
  const registerRef = (i: number, el: HTMLDivElement | null) => {
    cardRefs.current[i] = el;
  };

  const next = () => {
    if (podcasts.length === 0 || isAnimating) return;
    directionRef.current = 1;
    setIndex((i) => (i + 1) % podcasts.length);
  };

  const prev = () => {
    if (podcasts.length === 0 || isAnimating) return;
    directionRef.current = -1;
    setIndex((i) => (i - 1 + podcasts.length) % podcasts.length);
  };

  const getPodcast = (offset: number) => {
    if (podcasts.length === 0) return null;
    return podcasts[(index + offset + podcasts.length) % podcasts.length];
  };

  // --- Auto-Slide Timer ---
  useEffect(() => {
    if (podcasts.length === 0) return;

    // Automatically trigger 'next' every 4.5 seconds
    const timer = setInterval(() => {
      next();
    }, 4500);

    // Cleanup interval on unmount or when dependencies change
    return () => clearInterval(timer);
  }, [index, podcasts.length, isAnimating]);

  // --- Touch Handling ---
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

  // --- GSAP Animation Logic ---
  const animateCard = (card: HTMLDivElement, imgSrc: string) => {
    const dir = directionRef.current;

    const oldWrapper = card.querySelector(".active-wrapper") as HTMLDivElement;
    const newWrapper = card.querySelector(".incoming-wrapper") as HTMLDivElement;

    if (!oldWrapper || !newWrapper) return;

    const newImg = newWrapper.querySelector("img");
    if (newImg) {
      newImg.src = imgSrc;
    }

    setIsAnimating(true);

    const startX = dir > 0 ? "100%" : "-100%";

    gsap.set(newWrapper, { x: startX, zIndex: 2, display: "block" });
    gsap.set(oldWrapper, { zIndex: 1, x: "0%" });

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    tl.to(newWrapper, { x: "0%", duration: 0.8, ease: "power3.inOut" });
    tl.to(oldWrapper, { x: dir > 0 ? "-40%" : "40%", duration: 0.8, ease: "power3.inOut" }, "<");

    tl.add(() => {
      oldWrapper.classList.remove("active-wrapper");
      oldWrapper.classList.add("incoming-wrapper");
      newWrapper.classList.remove("incoming-wrapper");
      newWrapper.classList.add("active-wrapper");
      gsap.set(oldWrapper, { x: 0, zIndex: 1 });
      gsap.set(newWrapper, { x: 0, zIndex: 2 });
    });
  };

  // Initial Load
  useEffect(() => {
    if (podcasts.length === 0) return;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const activeWrapper = card.querySelector(".active-wrapper");
      if (activeWrapper) {
        const img = activeWrapper.querySelector("img");
        if (img) {
          const offset = [-2, -1, 0, 1, 2][i];
          const podcast = getPodcast(offset);
          if (podcast && podcast.thumbnailUrl) img.src = podcast.thumbnailUrl;
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcasts]);

  // Index Change Trigger
  useEffect(() => {
    if (podcasts.length === 0) return;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const offset = [-2, -1, 0, 1, 2][i];
      const podcast = getPodcast(offset);
      if (podcast && podcast.thumbnailUrl) animateCard(card, podcast.thumbnailUrl);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, podcasts]);

  const handleVideoClick = (url: string) => window.open(url, "_blank");

  // --- BEAUTIFUL LOADING STATE ---
  if (loading) {
    return null;
  }

  if (podcasts.length === 0) return null;

  const currentCenterPodcast = getPodcast(0);

  return (
    <section className={`w-full flex flex-col justify-center items-center pt-5 md:pt-0  ${backgroundColor} overflow-hidden`}>
      <div className="w-full max-w-7xl px-5 flex flex-col md:flex-row justify-center items-center pb-9 lg:pb-12">
        <h2 className="text-3xl md:text-[40px] lg:text-5xl font-bold text-[#1D1D1F] text-center md:text-left">{heading}</h2>
      </div>

      <div
        className="w-full md:w-[120%] flex justify-center items-end gap-3 md:gap-10 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Card refIndex={0} size="sm" registerRef={registerRef} />

        <Card refIndex={1} size="md" registerRef={registerRef}>
          <button
            onClick={prev}
            className="md:w-12 md:h-12 h-8 w-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </Card>

        {/* --- MAIN CARD --- */}
        <Card refIndex={2} size="lg" main registerRef={registerRef} title={currentCenterPodcast?.title}>
          {currentCenterPodcast?.url && (
            <div onClick={() => handleVideoClick(currentCenterPodcast.url)} className="absolute inset-0 z-30 cursor-pointer" />
          )}
        </Card>

        <Card refIndex={3} size="md" registerRef={registerRef}>
          <button
            onClick={next}
            className="md:w-12 md:h-12 h-8 w-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </Card>

        <Card refIndex={4} size="sm" registerRef={registerRef} />
      </div>

      <div className="relative mt-36 w-[80%] md:w-[31rem] h-2 rounded-full bg-[#EADFCF]/50 overflow-hidden">
        <div
          className="absolute top-0 bottom-0 bg-[#2884CA] transition-all duration-500 ease-out"
          style={{ left: `${(index / podcasts.length) * 100}%`, width: `${(1 / podcasts.length) * 100}%` }}
        />
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => window.open("https://www.instagram.com/cec.nexus/", "_blank")}
          className="text-[#2884CA] font-bold text-[17px] bg-[#d9ebff] px-6 py-2 rounded-3xl flex items-center gap-2 hover:bg-[#cce4ff] transition-colors"
        >
          {InstagramBlue && <InstagramBlue />} Follow us on Instagram
        </button>
      </div>
    </section>
  );
}

// --- Sub-Component: Card ---

interface CardProps {
  size: "sm" | "md" | "lg";
  children?: React.ReactNode;
  main?: boolean;
  refIndex: number;
  registerRef: (i: number, el: HTMLDivElement | null) => void;
  title?: string;
}

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = e.currentTarget;
  const currentSrc = img.src;

  if (currentSrc.includes("maxres1.jpg")) {
    img.src = currentSrc.replace("maxres1.jpg", "sd1.jpg");
  } else if (currentSrc.includes("sd1.jpg")) {
    img.src = currentSrc.replace("sd1.jpg", "hq1.jpg");
  }
};

function Card({ size, children, main = false, refIndex, registerRef, title }: CardProps) {
  const sizeMap = {
    sm: "hidden lg:block lg:w-[26vw] h-[55vh]  scale-90",
    md: "hidden md:block md:w-[30vw] lg:w-[25vw] h-[40vh] lg:h-[70vh] ",
    lg: "w-[85vw] md:w-[50vw] lg:w-[28vw] h-[35vh] md:h-[45vh] lg:h-[80vh] z-10",
  };

  return (
    <div ref={(el) => registerRef(refIndex, el)} className={`relative transition-all duration-500 ${sizeMap[size]}`}>
      {/* INNER MASK CONTAINER */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full active-wrapper">
          <img src={null} alt="" onError={handleImageError} className="w-full h-full object-fill transition-transform duration-300" />
        </div>

        <div className="absolute inset-0 w-full h-full incoming-wrapper hidden">
          <img src={null} alt="" onError={handleImageError} className="w-full h-full object-fill transition-transform duration-300" />
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">{children}</div>
      </div>

      {main && title && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[85vw] md:w-[35vw] lg:w-[24vw] text-center mt-6 z-50">
          <h3 className="text-xl font-bold text-[#1D1D1F] leading-tight">{title}</h3>
        </div>
      )}
    </div>
  );
}

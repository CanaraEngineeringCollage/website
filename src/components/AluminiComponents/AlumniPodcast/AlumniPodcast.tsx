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

// --- Helper: Extract YouTube Thumbnail ---
const getYoutubeThumbnail = (url?: string) => {
  const id = getYoutubeId(url);
  if (!id) return "/placeholder.jpg";
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
};

// --- Sub-Component: AutoPlay Video Player ---
// Plays muted video for 5 seconds, then triggers onComplete
interface AutoPlayVideoProps {
  url: string;
  onComplete: () => void;
  onClick: () => void;
}

const AutoPlayVideo = ({ url, onComplete, onClick }: AutoPlayVideoProps) => {
  const videoId = getYoutubeId(url);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set a timer to trigger the "next" action after 5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!videoId) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-20 bg-black overflow-hidden ">
      <iframe
        ref={iframeRef}
        // --- UPDATED CSS FIX ---
        // h-full: Ensures the iframe fills the card vertically.
        // w-[500%]: Makes the iframe very wide so YouTube renders the 16:9 video 
        // full height without black bars on top/bottom.
        // -translate-x-1/2: Centers the wide iframe so the video content is centered.
        className="absolute top-1/2 left-1/2 h-full w-[600%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&start=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&showinfo=0&loop=1&playlist=${videoId}`}
        allow="autoplay; encrypted-media"
        title="Video Preview"
      />
      
      {/* Click Overlay - Intercepts clicks to navigate */}
      <div 
        onClick={onClick}
        className="absolute inset-0 z-30 cursor-pointer bg-transparent"
      />
    </div>
  );
};

export default function AlumniPodcastCarousel({
  heading = "Alumni Podcast",
  backgroundColor = "",
}: CarouselProps) {
  
  // --- State ---
  const [podcasts, setPodcasts] = useState<AlumniPodcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // GSAP Refs
  const directionRef = useRef(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // --- Fetch Data ---
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          console.error("API URL not set");
          return;
        }
        const res = await fetch(`${apiUrl}/alumni/podcast`, { cache: "no-store" });
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setPodcasts(data);
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
  const animateCard = (card: HTMLDivElement, newUrl: string) => {
    const dir = directionRef.current;
    
    const oldImg = card.querySelector(".active-img") as HTMLImageElement;
    const newImg = card.querySelector(".incoming-img") as HTMLImageElement;

    if (!oldImg || !newImg) return;

    // Start Animation State
    setIsAnimating(true);

    // 1. Prepare New Image
    const thumb = getYoutubeThumbnail(newUrl);
    newImg.src = thumb;
    
    // 2. Set Initial Positions
    const startX = dir > 0 ? "100%" : "-100%";

    gsap.set(newImg, {
      x: startX,
      zIndex: 2,
      display: "block",
    });

    gsap.set(oldImg, {
      zIndex: 1,
      x: "0%",
    });

    const tl = gsap.timeline({
      onComplete: () => {
        // End Animation State
        setIsAnimating(false);
      }
    });

    // 3. Animate New Image IN
    tl.to(newImg, {
      x: "0%",
      duration: 0.8,
      ease: "power3.inOut",
    });

    // Parallax effect for old image
    tl.to(oldImg, {
      x: dir > 0 ? "-40%" : "40%",
      duration: 0.8,
      ease: "power3.inOut",
    }, "<");

    // 4. Cleanup classes
    tl.add(() => {
      oldImg.classList.remove("active-img");
      oldImg.classList.add("incoming-img");

      newImg.classList.remove("incoming-img");
      newImg.classList.add("active-img");

      gsap.set(oldImg, { x: 0, zIndex: 1 });
      gsap.set(newImg, { x: 0, zIndex: 2 });
    });
  };

  // Initial Load
  useEffect(() => {
    if (podcasts.length === 0) return;
    
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const activeImg = card.querySelector(".active-img") as HTMLImageElement;
      if (activeImg) {
        const offset = [-2, -1, 0, 1, 2][i];
        const podcast = getPodcast(offset);
        if (podcast) {
          activeImg.src = getYoutubeThumbnail(podcast.url);
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcasts]); 

  // Handle Index Change Animation
  useEffect(() => {
    if (podcasts.length === 0) return;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const offset = [-2, -1, 0, 1, 2][i];
      const podcast = getPodcast(offset);
      if (podcast) {
        animateCard(card, podcast.url);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, podcasts]);

  // --- Navigation Handler ---
  const handleVideoClick = (url: string) => {
    window.open(url, "_blank");
  };

  // --- Render ---

  if (loading) {
    return <div className="h-[600px] flex items-center justify-center">Loading Podcasts...</div>;
  }

  if (podcasts.length === 0) {
    return null;
  }

  const currentCenterPodcast = getPodcast(0);

  return (
    <section className={`w-full flex flex-col justify-center items-center py-10 md:pt-0 pb-10 ${backgroundColor} overflow-hidden`}>
      
      {/* --- Header Section --- */}
      <div className="w-full max-w-7xl px-5 flex flex-col md:flex-row justify-center items-center pb-12">
        <h2 className="text-3xl md:text-[40px] lg:text-5xl font-bold text-[#1D1D1F] text-center md:text-left">
          {heading}
        </h2>
      </div>

      {/* --- Carousel Section --- */}
      <div
        className="w-full md:w-[120%] flex justify-center items-end gap-3 md:gap-10 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Card refIndex={0} size="sm" registerRef={registerRef} />

        <Card refIndex={1} size="md" registerRef={registerRef}>
          <button onClick={prev} className="md:w-12 md:h-12 h-8 w-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        </Card>

        {/* --- Center (Main) Card --- */}
        <Card refIndex={2} size="lg" main registerRef={registerRef}>
            {/* CONDITIONAL RENDERING: Show video if NOT animating and URL exists */}
            {!isAnimating && currentCenterPodcast?.url && (
               <AutoPlayVideo 
                  url={currentCenterPodcast.url} 
                  onComplete={next}
                  onClick={() => handleVideoClick(currentCenterPodcast.url)}
               />
            ) }
        </Card>

        <Card refIndex={3} size="md" registerRef={registerRef}>
          <button onClick={next} className="md:w-12 md:h-12 h-8 w-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition-colors">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </Card>

        <Card refIndex={4} size="sm" registerRef={registerRef} />
      </div>

      {/* --- Progress Bar --- */}
      <div className="relative mt-12 w-[80%] md:w-[31rem] h-2 rounded-full bg-[#EADFCF]/50 overflow-hidden">
        <div
          className="absolute top-0 bottom-0 bg-[#2884CA] transition-all duration-500 ease-out"
          style={{
            left: `${(index / podcasts.length) * 100}%`,
            width: `${(1 / podcasts.length) * 100}%`,
          }}
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
}

function Card({ size, children, main = false, refIndex, registerRef }: CardProps) {
  const sizeMap = {
    sm: "hidden md:block md:w-[26vw] h-[60vh] opacity-60 scale-90",
    md: "hidden md:block md:w-[25vw] h-[70vh] opacity-80",
    lg: "w-[85vw] md:w-[28vw] h-[55vh] md:h-[80vh] shadow-2xl z-10",
  };

  return (
    <div
      ref={(el) => registerRef(refIndex, el)}
      className={`relative  overflow-hidden transition-all duration-500 bg-gray-200 ${sizeMap[size]}`}
    >
      {/* Background Images for GSAP Animation */}
      <img src="" alt="" className="absolute inset-0 w-full h-full object-fill active-img" />
      <img src="" alt="" className="absolute inset-0 w-full h-full object-fill incoming-img hidden" />

      {/* Overlays */}
      {!main && (
        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300" />
      )}

      {main && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none z-20" />
      )}

      {/* Interactive Children (Video / Buttons) */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
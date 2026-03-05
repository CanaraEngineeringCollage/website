"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// --- Interfaces ---
interface AlumniPodcast {
  id: number;
  url: string;
}

interface CarouselProps {
  backgroundColor?: string;
}

export default function VideoSwiper({ backgroundColor = "" }: CarouselProps) {
  // --- State ---
  const [podcasts, setPodcasts] = useState<AlumniPodcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // GSAP Refs
  const directionRef = useRef(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // --- Static Data ---
  useEffect(() => {
    // Generate the 13 .mp4 videos
    const staticVideos = Array.from({ length: 13 }, (_, i) => ({
      id: i + 1,
      url: `https://apiserver.cec.edu.in/files/studentLyfEngagementVideo%20(${i + 1}).mp4`,
    }));
    
    // Add the 2 .mov videos
    staticVideos.push({
      id: 14,
      url: `https://apiserver.cec.edu.in/files/studentLyfEngagementVideo%20(14).mov`,
    });
    staticVideos.push({
      id: 15,
      url: `https://apiserver.cec.edu.in/files/studentLyfEngagementVideo%20(15).mov`,
    });

    setPodcasts(staticVideos);
    setLoading(false);
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
  const animateCard = (card: HTMLDivElement, videoSrc: string, isMain: boolean) => {
    const dir = directionRef.current;

    const oldWrapper = card.querySelector(".active-wrapper") as HTMLDivElement;
    const newWrapper = card.querySelector(".incoming-wrapper") as HTMLDivElement;

    if (!oldWrapper || !newWrapper) return;

    const newVideo = newWrapper.querySelector("video");
    const oldVideo = oldWrapper.querySelector("video");

    if (newVideo) {
      newVideo.src = videoSrc;
      if (isMain) {
        newVideo.currentTime = 0;
        newVideo.play().catch((e) => console.log("Autoplay blocked:", e));
      } else {
        newVideo.pause();
      }
    }

    if (oldVideo) {
        oldVideo.pause();
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

  // Initial Load (Play center video automatically)
  useEffect(() => {
    if (podcasts.length === 0) return;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const activeWrapper = card.querySelector(".active-wrapper");
      if (activeWrapper) {
        const video = activeWrapper.querySelector("video");
        if (video) {
          const offset = [-2, -1, 0, 1, 2][i];
          const isMain = offset === 0;
          const podcast = getPodcast(offset);
          if (podcast && podcast.url) {
            video.src = podcast.url;
            if (isMain) {
              video.play().catch(() => {});
            }
          }
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
      const isMain = offset === 0;
      const podcast = getPodcast(offset);
      if (podcast && podcast.url) animateCard(card, podcast.url, isMain);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, podcasts]);

  // --- BEAUTIFUL LOADING STATE ---
  if (loading) return null;
  if (podcasts.length === 0) return null;

  return (
    <section className={`w-full flex flex-col justify-center items-center pt-5 md:pt-0 pb-16 ${backgroundColor} overflow-hidden`}>
      <div
        className="w-full md:w-[120%] flex justify-center items-end gap-3 md:gap-10 touch-pan-y mt-10"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Card refIndex={0} size="sm" registerRef={registerRef} />

        <Card refIndex={1} size="md" registerRef={registerRef}>
          <button
            onClick={prev}
            className="md:w-12 md:h-12 h-8 w-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition-colors absolute z-50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </Card>

        {/* --- MAIN CARD --- */}
        <Card refIndex={2} size="lg" main registerRef={registerRef} onVideoEnd={next} />

        <Card refIndex={3} size="md" registerRef={registerRef}>
          <button
            onClick={next}
            className="md:w-12 md:h-12 h-8 w-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition-colors absolute z-50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </Card>

        <Card refIndex={4} size="sm" registerRef={registerRef} />
      </div>

      <div className="relative mt-20 w-[80%] md:w-[31rem] h-2 rounded-full bg-[#EADFCF]/50 overflow-hidden">
        <div
          className="absolute top-0 bottom-0 bg-[#2884CA] transition-all duration-500 ease-out"
          style={{ left: `${(index / podcasts.length) * 100}%`, width: `${(1 / podcasts.length) * 100}%` }}
        />
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
  onVideoEnd?: () => void;
}

function Card({ size, children, main = false, refIndex, registerRef, onVideoEnd }: CardProps) {
  const sizeMap = {
    sm: "hidden lg:block lg:w-[26vw] h-[55vh]  scale-90",
    md: "hidden md:block md:w-[30vw] lg:w-[25vw] h-[40vh] lg:h-[70vh] ",
    lg: "w-[85vw] md:w-[50vw] lg:w-[28vw] h-[35vh] md:h-[45vh] lg:h-[80vh] z-10",
  };

  return (
    <div ref={(el) => registerRef(refIndex, el)} className={`relative transition-all duration-500 ${sizeMap[size]}`}>
      {/* INNER MASK CONTAINER */}
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 w-full h-full active-wrapper">
          <video
            muted
            playsInline
            onEnded={() => {
              if (main && onVideoEnd) onVideoEnd();
            }}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>

        <div className="absolute inset-0 w-full h-full incoming-wrapper hidden">
          <video
            muted
            playsInline
            onEnded={() => {
              if (main && onVideoEnd) onVideoEnd();
            }}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">{children}</div>
      </div>
    </div>
  );
}
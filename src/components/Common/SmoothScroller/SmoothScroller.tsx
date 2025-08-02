// src/context/LenisContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const [scroll, setScroll] = useState(0);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ({ scroll }) => {
      setScroll(scroll);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ scroll }}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenisScroll = () => useContext(LenisContext);

"use client";
import { motion } from "framer-motion";
import { HowToApply1, HowToApply2, HowToApply3, HowToApply4 } from "@/components/Icons/Icons";
import React from "react";
import { GoDash } from "react-icons/go";
import { RxDash } from "react-icons/rx";

const HowToApply = () => {
  // Animation variants for icons (position and opacity)
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for text and dashes (color)
  const colorVariants = {
    hidden: { color: "#747474" }, // Initial gray color
    visible: (i) => ({
      color: "#2563EB", // Blue color
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  // Animation variants for SVG fillColor
  const fillVariants = {
    hidden: { fillColor: "none" }, // Initial no fill
    visible: (i) => ({
      fillColor: "#2563EB", // Blue fill
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto py-20 md:pt-36 overflow-hidden">
      <div className="lg:max-w-[60%] mb-20">
        <motion.h1
          className="text-3xl mb-7 md:text-[40px] lg:text-5xl xl:text-6xl text-black font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How to Apply
        </motion.h1>
        <motion.p
          className="text-black text-lg md:text-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore Canara Engineering College’s thriving campus with top-tier placements, cutting-edge facilities & a vibrant student community.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 lg:gap-2 w-full">
        <motion.div
          className="flex items-center flex-col justify-between"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <div className="flex items-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fillVariants}
            >
              <HowToApply1 fillColor="none" />
            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={colorVariants}
          >
            Get in touch with college
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={colorVariants}
        >
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <GoDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
        </motion.div>

        <motion.div
          className="flex items-center flex-col justify-between"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <div className="flex items-center">
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fillVariants}
            >
              <HowToApply2 fillColor="none" />
            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={colorVariants}
          >
            Counselling by Admission team
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={colorVariants}
        >
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <GoDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
        </motion.div>

        <motion.div
          className="flex items-center flex-col justify-between"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <div className="flex items-center">
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fillVariants}
            >
              <HowToApply3 fillColor="none" />
            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={colorVariants}
          >
            Pay Admission fee
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={colorVariants}
        >
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <GoDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
        </motion.div>

        <motion.div
          className="flex items-center flex-col justify-between"
          custom={6}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <div className="flex items-center">
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fillVariants}
            >
              <HowToApply4 fillColor="none" />
            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={6}
            initial="hidden"
            animate="visible"
            variants={colorVariants}
          >
            Enroll for the course
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToApply;
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
          className="text-3xl text-[#1D1D1F] md:text-[40px] lg2:text-5xl xl:text-6xl font-bold leading-tight"
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
        {/* Step 1 SVG */}
        <motion.div
          className="flex items-center flex-col justify-between"
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <motion.div custom={0} initial="hidden" whileInView="visible" variants={fillVariants} viewport={{ once: true }}>
              <svg width="137" height="136" viewBox="0 0 137 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_606_8" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="136">
                  <path d="M0.496094 0.0195312H136.322V135.846H0.496094V0.0195312Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_606_8)">
                  {/* Animated paths */}
                  {[
                    "M41.4824 79.9082H95.3317",
                    "M41.4824 89.7422H95.3317",
                    "M41.4824 99.5762H95.3317",
                    "M95.3333 55.8242H81.4141",
                    "M95.3333 45.5801H81.4141",
                    "M31.1758 111.35V12.9165C31.1758 10.9717 32.7521 9.39509 34.6969 9.39509H102.118C104.063 9.39509 105.639 10.9717 105.639 12.9165V111.35",
                    "M46.2969 22.5449H105.641",
                    "M31.1758 22.5449H36.8829",
                    "M66.8722 68.0254H45.6448C43.3469 68.0254 41.4844 66.1626 41.4844 63.8647V37.5433C41.4844 35.2457 43.3469 33.3828 45.6448 33.3828H66.8722C69.1698 33.3828 71.0329 35.2457 71.0329 37.5433V63.8647C71.0329 66.1626 69.1698 68.0254 66.8722 68.0254Z",
                    "M62.8851 49.6678C62.8851 53.3277 59.9178 56.2949 56.258 56.2949C52.5978 56.2949 49.6309 53.3277 49.6309 49.6678C49.6309 46.0077 52.5978 43.0407 56.258 43.0407C59.9178 43.0407 62.8851 46.0077 62.8851 49.6678Z",
                    "M125.266 111.35V46.7783C125.266 43.7461 122.807 41.2882 119.775 41.2882H114.963",
                    "M21.8772 41.2882H17.0445C14.0126 41.2882 11.5547 43.7461 11.5547 46.7783V111.35",
                    "M114.653 111.35V55.5442C114.653 53.5314 113.022 51.8997 111.009 51.8997H105.641",
                    "M31.1769 51.8997H25.8086C23.7958 51.8997 22.1641 53.5312 22.1641 55.5439V111.35",
                    "M122.502 126.475H14.317C7.78302 126.475 2.48633 121.178 2.48633 114.644C2.48633 112.824 3.96079 111.35 5.78012 111.35H131.039C132.858 111.35 134.333 112.824 134.333 114.644C134.333 121.178 129.036 126.475 122.502 126.475Z",
                    "M48.3203 111.35C48.3203 115.526 51.7062 118.912 55.8828 118.912H80.9356C85.1122 118.912 88.4981 115.526 88.4981 111.35",
                    "M52.57 55.1752C47.4925 56.4123 43.393 60.1456 41.6445 65.002",
                    "M70.8708 65.002C69.1221 60.1459 65.0229 56.4125 59.9453 55.1755"
                  ].map((d, i) => (
                    <motion.path
                      key={d}
                      d={d}
                      stroke="#2563EB"
                      initial={{ pathLength: 0, stroke: "#747474" }}
                      whileInView={{ pathLength: 1, stroke: "#2563EB" }}
                      transition={{ duration: 1.2, delay: i * 0.1 }}
                      strokeWidth="4"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  ))}
                </g>
              </svg>
            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={colorVariants}
            viewport={{ once: true }}
          >
            Get in touch with college
          </motion.p>
        </motion.div>

        {/* Step 2 SVG */}
        <motion.div
          className="flex items-center flex-col justify-between"
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <motion.div custom={2} initial="hidden" whileInView="visible" variants={fillVariants} viewport={{ once: true }}>
              <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Animated paths for step 2 */}
                {[
                  "M122.201 54.4357C122.201 52.3214 123.915 50.6074 126.029 50.6074C128.144 50.6074 129.858 52.3214 129.858 54.4357V61.2871C129.858 63.4015 128.144 65.1154 126.029 65.1154C123.915 65.1154 122.201 63.4015 122.201 61.2871V54.4357Z",
                  "M129.861 54.4357C129.861 52.3214 131.575 50.6074 133.69 50.6074C135.804 50.6074 137.518 52.3214 137.518 54.4357V61.2871C137.518 63.4015 135.804 65.1154 133.69 65.1154C131.575 65.1154 129.861 63.4015 129.861 61.2871",
                  "M10.6719 54.4357C10.6719 52.3214 12.3858 50.6074 14.5002 50.6074C16.6145 50.6074 18.3285 52.3214 18.3285 54.4357V61.2871C18.3285 63.4015 16.6145 65.1154 14.5002 65.1154C12.3858 65.1154 10.6719 63.4015 10.6719 61.2871V54.4357Z",
                  "M18.3301 54.4359V45.6877C18.3301 43.5733 20.044 41.8594 22.1584 41.8594C24.2727 41.8594 25.9867 43.5733 25.9867 45.6877V62.5276",
                  "M114.543 62.3027V45.6877C114.543 43.5733 116.257 41.8594 118.371 41.8594C120.486 41.8594 122.2 43.5733 122.2 45.6877V54.4359",
                  "M10.6722 61.287C10.6722 63.4013 8.95828 65.1153 6.84393 65.1153C4.72957 65.1153 3.01562 63.4013 3.01562 61.287V54.4355",
                  "M3.01562 54.4357C3.01562 52.3214 4.72957 50.6074 6.84393 50.6074C8.95828 50.6074 10.6722 52.3214 10.6722 54.4357",
                  "M127.452 124.771L119.209 137.667",
                  "M135.346 89.7285V108.694C135.346 111.128 134.649 113.511 133.337 115.56L132.588 116.732",
                  "M5.16992 105.049V108.647C5.16992 111.114 5.88407 113.526 7.23058 115.595L21.587 137.67",
                  "M5.16992 95.5076V89.6582",
                  "M113.475 113.734V89.4141",
                  "M82.3477 110.346V120.332H99.1813C100.494 120.332 101.743 119.765 102.606 118.775L113.475 106.326",
                  "M27.0391 106.326L37.9071 118.775C38.7706 119.765 40.0193 120.332 41.3323 120.332H58.1864V110.435",
                  "M27.0391 89.6543V113.734",
                  "M134.996 78.0515C135.996 76.0593 137.474 72.1947 137.516 66.6904V61.2891",
                  "M115.716 78.0508C115.391 76.5282 114.595 75.131 113.42 74.0696L105.731 67.1219C103.937 65.4154 103.867 62.5773 105.573 60.7835C107.281 58.9897 110.118 58.9191 111.912 60.6262L115.88 63.9901C119.697 63.9901 122.945 66.7692 123.536 70.5397L123.628 71.1288",
                  "M5.53557 78.0515C4.53522 76.0593 3.05787 72.1947 3.01562 66.6904V61.2891",
                  "M24.8149 78.0508C25.1398 76.5282 25.936 75.131 27.1108 74.0696L34.8001 67.1219C36.5939 65.4154 36.6642 62.5773 34.9574 60.7835C33.2502 58.9897 30.4125 58.9191 28.6187 60.6262L24.6508 63.9901C20.8339 63.9901 17.5857 66.7692 16.9947 70.5397L16.9023 71.1288",
                  "M3.85923 78.9316H28.386C29.1195 78.9316 29.714 79.5261 29.714 80.2596V87.747C29.714 88.4805 29.1195 89.0749 28.386 89.0749H3.85923C3.12573 89.0749 2.53125 88.4805 2.53125 87.747V80.2596C2.53125 79.5261 3.12573 78.9316 3.85923 78.9316Z",
                  "M136.673 78.9316H112.146C111.413 78.9316 110.818 79.5261 110.818 80.2596V87.747C110.818 88.4805 111.413 89.0749 112.146 89.0749H136.673C137.407 89.0749 138.001 88.4805 138.001 87.747V80.2596C138.001 79.5261 137.407 78.9316 136.673 78.9316Z",
                  "M70.2686 125.557C66.7124 125.554 61.7943 123.734 58.1876 120.332L55.4965 121.912C52.7784 123.507 52.3559 127.267 54.6523 129.425L61.736 136.084L70.2686 126.387L78.8013 136.084L85.8849 129.425C88.1814 127.267 87.7591 123.507 85.0408 121.912L82.3496 120.332C78.7429 123.734 73.8249 125.554 70.2686 125.557Z",
                  "M70.2656 126.385V137.665",
                  "M52.207 55.5858C55.1023 53.0931 58.5973 51.1794 62.5986 50.0967C67.4725 48.7464 73.1148 48.7464 77.986 50.0967C92.7554 54.0902 100.649 69.4102 96.762 83.3875",
                  "M43.8205 83.3888C41.8471 76.2896 42.9118 68.8453 46.3729 62.7148",
                  "M82.7799 108.614L78.0072 112.332C73.4696 115.866 67.1113 115.866 62.5738 112.332L57.801 108.614C53.3161 105.121 50.6934 99.7538 50.6934 94.069V83.3893C50.6934 79.7654 53.7497 76.8922 57.3668 77.1163L63.9306 77.5227C68.0702 77.7789 72.1885 76.757 75.7279 74.5953L81.7229 70.9338C85.2991 68.7496 89.887 71.3233 89.887 75.5138V94.0696C89.8873 99.7538 87.2649 105.121 82.7799 108.614Z",
                  "M50.3206 97.5418H49.1682C44.877 97.5418 41.3984 94.0633 41.3984 89.7721V87.3353C41.3984 85.1566 43.1644 83.3906 45.3431 83.3906H50.4111",
                  "M90.3379 97.5418H91.4159C95.707 97.5418 99.1856 94.0633 99.1856 89.7721V87.3353C99.1856 85.1566 97.4196 83.3906 95.241 83.3906H90.5186",
                  "M65.6309 100.377C68.518 102.024 72.0601 102.024 74.9472 100.377",
                  "M38.579 21.9338V15.3307H35.6096C35.2724 13.946 34.7276 12.6426 34.0088 11.4558L36.1133 9.35097L31.4441 4.68178L29.3442 6.78168C28.1591 6.06045 26.8564 5.51313 25.4726 5.17295V2.19727H18.8698V5.16668C17.4851 5.50386 16.1816 6.04873 14.9948 6.76751L12.8903 4.66297L8.22111 9.33216L10.321 11.4321C9.59979 12.6172 9.05246 13.9169 8.71229 15.3007H5.73633V21.9068H8.70575C9.04292 23.2915 9.5878 24.5949 10.3066 25.7817L8.20203 27.8865L12.8712 32.5557L14.9711 30.4558C16.1563 31.177 17.4589 31.7244 18.8428 32.0645V35.0405H25.4459V32.0711C26.8305 31.7339 28.134 31.189 29.3208 30.4703L31.4253 32.5748L36.0945 27.9056L33.9946 25.8057C34.7158 24.6206 35.2632 23.3179 35.6031 21.9341L38.579 21.9338Z",
                  "M29.1666 18.6186C29.1666 22.4897 26.0285 25.6279 22.1574 25.6279C18.2863 25.6279 15.1484 22.4897 15.1484 18.6186C15.1484 14.7475 18.2866 11.6094 22.1577 11.6094C26.0288 11.6094 29.1666 14.7478 29.1666 18.6186Z",
                  "M132.209 27.0977C133.771 24.6009 134.67 21.6489 134.67 18.4871C134.67 9.48939 127.373 2.19531 118.376 2.19531C109.378 2.19531 102.084 9.48939 102.084 18.4871C102.084 27.4847 109.378 34.7788 118.376 34.7788C120.733 34.7788 122.974 34.2773 124.997 33.3778",
                  "M111.9 18.9046L117.461 24.5722L130.01 8.23438"
                ].map((d, i) => (
                  <motion.path
                    key={d}
                    d={d}
                    stroke="#2563EB"
                    initial={{ pathLength: 0, stroke: "#747474" }}
                    whileInView={{ pathLength: 1, stroke: "#2563EB" }}
                    transition={{ duration: 1.2, delay: 1.2 + i * 0.1 }}
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                ))}
              </svg>
            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={colorVariants}
            viewport={{ once: true }}
          >
            Counselling by Admission team
          </motion.p>
        </motion.div>

        {/* Step 3 SVG */}
        <motion.div
          className="flex items-center flex-col justify-between"
          custom={4}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <motion.div custom={4} initial="hidden" whileInView="visible" variants={fillVariants} viewport={{ once: true }}>
              <svg width="128" height="151" viewBox="0 0 128 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Animated paths for step 3 */}
                {[
                  "M67.6297 90.2169C65.8107 95.6522 67.0651 101.89 71.3935 106.219",
                  "M81.0225 56.7174C81.0225 65.8868 73.589 73.3203 64.4193 73.3203C55.2499 73.3203 47.8164 65.8868 47.8164 56.7174C47.8164 47.5477 55.2499 40.1142 64.4193 40.1142C73.589 40.1142 81.0225 47.5477 81.0225 56.7174Z",
                  "M32.234 60.9336H21.9124C20.8596 60.9336 20.0059 60.0799 20.0059 59.0267V54.4052C20.0059 53.3523 20.8596 52.4986 21.9124 52.4986H32.234C33.2871 52.4986 34.1408 53.3523 34.1408 54.4052V59.0267C34.1408 60.0799 33.2871 60.9336 32.234 60.9336Z",
                  "M39.3789 90.2148H67.6303",
                  "M106.553 90.2148H125.061C125.58 90.2148 126 89.7942 126 89.2751V24.1546C126 23.6355 125.58 23.2148 125.061 23.2148H3.78127C3.26247 23.2148 2.8418 23.6355 2.8418 24.1546V89.2751C2.8418 89.7942 3.26247 90.2148 3.78127 90.2148H29.0959",
                  "M117.552 48.0632V42.6458C117.552 42.374 117.34 42.1461 117.069 42.1337C111.664 41.8887 107.326 37.551 107.081 32.1465C107.069 31.8751 106.841 31.6635 106.569 31.6635H22.2696C21.9979 31.6635 21.7699 31.8751 21.7576 32.1465C21.5126 37.551 17.1745 41.8887 11.7701 42.1337C11.4986 42.1461 11.2871 42.374 11.2871 42.6458V70.7873C11.2871 71.0587 11.4986 71.287 11.7701 71.299C17.1745 71.544 21.5126 75.8821 21.7576 81.2866C21.7699 81.558 21.9979 81.7695 22.2696 81.7695H74.4408",
                  "M117.555 62.8984V58.3465",
                  "M94.8787 23.2168V23.0975C94.8787 18.0212 90.7636 13.9061 85.6873 13.9061C80.6113 13.9061 76.4961 18.0212 76.4961 23.0975V12.1226C76.4961 7.04633 72.3807 2.93122 67.3047 2.93122C62.2281 2.93122 58.1133 7.04633 58.1133 12.1226V23.0975C58.1133 18.0212 53.9982 13.9061 48.9219 13.9061C43.8456 13.9061 39.7305 18.0212 39.7305 23.0975V23.2168",
                  "M82.5498 132.596L82.551 130.016C82.551 128.819 83.0251 127.67 83.8779 126.831C86.5048 124.249 88.7454 121.276 90.5053 118.006L119.189 68.3242C120.262 66.4661 119.625 64.0901 117.767 63.0173C110.833 59.0138 101.966 61.3895 97.9626 68.3236L94.8757 73.6705V73.6596L90.2462 81.6695C84.2754 78.2086 76.5017 79.0338 71.3907 84.1448C69.624 85.9115 68.3696 87.9964 67.627 90.2146",
                  "M21.3477 90.2164V100.61C21.3477 109.105 24.2289 116.927 29.0673 123.152C32.1005 127.054 33.673 131.895 33.6736 136.837L33.6748 148.095C33.6751 148.558 34.0502 148.934 34.5132 148.934H81.7129C82.1759 148.934 82.5513 148.558 82.5516 148.095L82.5528 142.879",
                  "M106.528 61.639C106.968 61.3029 107.252 60.7733 107.252 60.1769V55.6482C107.252 54.6326 106.429 53.8095 105.414 53.8095H95.4598C94.4445 53.8095 93.6211 54.6326 93.6211 55.6482V60.1769C93.6211 61.1925 94.4445 62.0156 95.4598 62.0156H105.392"
                ].map((d, i) => (
                  <motion.path
                    key={d}
                    d={d}
                    stroke="#2563EB"
                    initial={{ pathLength: 0, stroke: "#747474" }}
                    whileInView={{ pathLength: 1, stroke: "#2563EB" }}
                    transition={{ duration: 1.2, delay: 2.4 + i * 0.1 }}
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                ))}
              </svg>
            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={4}
            initial="hidden"
            whileInView="visible"
            variants={colorVariants}
            viewport={{ once: true }}
          >
            Pay Admission fee
          </motion.p>
        </motion.div>

        {/* Step 4 SVG */}
        <motion.div
          className="flex items-center flex-col justify-between"
          custom={6}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <motion.div custom={6} initial="hidden" whileInView="visible" variants={fillVariants} viewport={{ once: true }}>
              <svg width="115" height="152" viewBox="0 0 115 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Animated paths for step 4 */}
                {[
                  "M102.613 28.3262V16.4245C102.613 15.11 101.548 14.0443 100.233 14.0443H69.2891",
                  "M5.01953 78.3134V137.821C5.01953 139.136 6.08525 140.201 7.3998 140.201H79.2175C80.4801 140.201 81.691 139.7 82.5836 138.807L101.217 120.174C102.11 119.281 102.612 118.07 102.612 116.807V37.8486",
                  "M81.1895 138.861V121.158C81.1895 119.843 82.2552 118.778 83.5697 118.778H101.348",
                  "M21.6835 30.7064V25.9459C21.6835 23.3168 23.8149 21.1853 26.444 21.1853C29.0731 21.1853 31.2045 23.3168 31.2045 25.9459V35.4669C31.2045 40.7254 26.9417 44.9883 21.6835 44.9883C16.425 44.9883 12.1621 40.7254 12.1621 35.4672V11.664C12.1621 6.40578 16.425 2.14292 21.6835 2.14292C26.9417 2.14292 31.2045 6.40578 31.2045 11.664",
                  "M21.6822 11.6639H66.909C68.2235 11.6639 69.2892 12.7296 69.2892 14.0442V75.9322C69.2892 77.2468 68.2235 78.3125 66.909 78.3125H5.02089C3.70634 78.3125 2.64062 77.2468 2.64062 75.9322V14.0442C2.64062 12.7296 3.70634 11.6639 5.02089 11.6639H12.1623",
                  "M14.541 140.202V147.342C14.541 148.657 15.6067 149.723 16.9213 149.723H109.753C111.068 149.723 112.134 148.657 112.134 147.342V25.9471C112.134 24.6323 111.068 23.5665 109.753 23.5665H102.613",
                  "M43.1055 33.0879H55.0071",
                  "M43.1055 44.9883H55.0071",
                  "M16.9238 56.8906H55.0087",
                  "M83.5723 56.8906H88.3328",
                  "M83.5723 33.0879H88.3328",
                  "M83.5723 44.9883H88.3328",
                  "M83.5723 68.793H88.3328",
                  "M19.3027 90.2168H24.0636",
                  "M19.3027 114.02H24.0636",
                  "M19.3027 102.115H24.0636",
                  "M35.9648 90.2168H88.3313",
                  "M35.9648 114.02H69.2891",
                  "M35.9648 102.115H88.3313"
                ].map((d, i) => (
                  <motion.path
                    key={d}
                    d={d}
                    stroke="#2563EB"
                    initial={{ pathLength: 0, stroke: "#747474" }}
                    whileInView={{ pathLength: 1, stroke: "#2563EB" }}
                    transition={{ duration: 1.2, delay: 3.6 + i * 0.1 }}
                    strokeWidth="4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                ))}
              </svg>
            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={6}
            initial="hidden"
            whileInView="visible"
            variants={colorVariants}
            viewport={{ once: true }}
          >
            Enroll for the course
          </motion.p>
        </motion.div>

            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={colorVariants}
            viewport={{ once: true }}
          >
            Get in touch with college
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center"
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={colorVariants}
          viewport={{ once: true }}
        >
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <GoDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
        </motion.div>

        <motion.div
          className="flex items-center flex-col justify-between"
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <motion.div custom={2} initial="hidden" whileInView="visible" variants={fillVariants} viewport={{ once: true }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M122.201 54.4357C122.201 52.3214 123.915 50.6074 126.029 50.6074C128.144 50.6074 129.858 52.3214 129.858 54.4357V61.2871C129.858 63.4015 128.144 65.1154 126.029 65.1154C123.915 65.1154 122.201 63.4015 122.201 61.2871V54.4357Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129.861 54.4357C129.861 52.3214 131.575 50.6074 133.69 50.6074C135.804 50.6074 137.518 52.3214 137.518 54.4357V61.2871C137.518 63.4015 135.804 65.1154 133.69 65.1154C131.575 65.1154 129.861 63.4015 129.861 61.2871" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6719 54.4357C10.6719 52.3214 12.3858 50.6074 14.5002 50.6074C16.6145 50.6074 18.3285 52.3214 18.3285 54.4357V61.2871C18.3285 63.4015 16.6145 65.1154 14.5002 65.1154C12.3858 65.1154 10.6719 63.4015 10.6719 61.2871V54.4357Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3301 54.4359V45.6877C18.3301 43.5733 20.044 41.8594 22.1584 41.8594C24.2727 41.8594 25.9867 43.5733 25.9867 45.6877V62.5276" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M114.543 62.3027V45.6877C114.543 43.5733 116.257 41.8594 118.371 41.8594C120.486 41.8594 122.2 43.5733 122.2 45.6877V54.4359" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6722 61.287C10.6722 63.4013 8.95828 65.1153 6.84393 65.1153C4.72957 65.1153 3.01562 63.4013 3.01562 61.287V54.4355" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.01562 54.4357C3.01562 52.3214 4.72957 50.6074 6.84393 50.6074C8.95828 50.6074 10.6722 52.3214 10.6722 54.4357" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M127.452 124.771L119.209 137.667" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M135.346 89.7285V108.694C135.346 111.128 134.649 113.511 133.337 115.56L132.588 116.732" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.16992 105.049V108.647C5.16992 111.114 5.88407 113.526 7.23058 115.595L21.587 137.67" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.16992 95.5076V89.6582" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M113.475 113.734V89.4141" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82.3477 110.346V120.332H99.1813C100.494 120.332 101.743 119.765 102.606 118.775L113.475 106.326" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.0391 106.326L37.9071 118.775C38.7706 119.765 40.0193 120.332 41.3323 120.332H58.1864V110.435" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.0391 89.6543V113.734" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M134.996 78.0515C135.996 76.0593 137.474 72.1947 137.516 66.6904V61.2891" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M115.716 78.0508C115.391 76.5282 114.595 75.131 113.42 74.0696L105.731 67.1219C103.937 65.4154 103.867 62.5773 105.573 60.7835C107.281 58.9897 110.118 58.9191 111.912 60.6262L115.88 63.9901C119.697 63.9901 122.945 66.7692 123.536 70.5397L123.628 71.1288" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.53557 78.0515C4.53522 76.0593 3.05787 72.1947 3.01562 66.6904V61.2891" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.8149 78.0508C25.1398 76.5282 25.936 75.131 27.1108 74.0696L34.8001 67.1219C36.5939 65.4154 36.6642 62.5773 34.9574 60.7835C33.2502 58.9897 30.4125 58.9191 28.6187 60.6262L24.6508 63.9901C20.8339 63.9901 17.5857 66.7692 16.9947 70.5397L16.9023 71.1288" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.85923 78.9316H28.386C29.1195 78.9316 29.714 79.5261 29.714 80.2596V87.747C29.714 88.4805 29.1195 89.0749 28.386 89.0749H3.85923C3.12573 89.0749 2.53125 88.4805 2.53125 87.747V80.2596C2.53125 79.5261 3.12573 78.9316 3.85923 78.9316Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M136.673 78.9316H112.146C111.413 78.9316 110.818 79.5261 110.818 80.2596V87.747C110.818 88.4805 111.413 89.0749 112.146 89.0749H136.673C137.407 89.0749 138.001 88.4805 138.001 87.747V80.2596C138.001 79.5261 137.407 78.9316 136.673 78.9316Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M70.2686 125.557C66.7124 125.554 61.7943 123.734 58.1876 120.332L55.4965 121.912C52.7784 123.507 52.3559 127.267 54.6523 129.425L61.736 136.084L70.2686 126.387L78.8013 136.084L85.8849 129.425C88.1814 127.267 87.7591 123.507 85.0408 121.912L82.3496 120.332C78.7429 123.734 73.8249 125.554 70.2686 125.557Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M70.2656 126.385V137.665" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52.207 55.5858C55.1023 53.0931 58.5973 51.1794 62.5986 50.0967C67.4725 48.7464 73.1148 48.7464 77.986 50.0967C92.7554 54.0902 100.649 69.4102 96.762 83.3875" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.8205 83.3888C41.8471 76.2896 42.9118 68.8453 46.3729 62.7148" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82.7799 108.614L78.0072 112.332C73.4696 115.866 67.1113 115.866 62.5738 112.332L57.801 108.614C53.3161 105.121 50.6934 99.7538 50.6934 94.069V83.3893C50.6934 79.7654 53.7497 76.8922 57.3668 77.1163L63.9306 77.5227C68.0702 77.7789 72.1885 76.757 75.7279 74.5953L81.7229 70.9338C85.2991 68.7496 89.887 71.3233 89.887 75.5138V94.0696C89.8873 99.7538 87.2649 105.121 82.7799 108.614Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M50.3206 97.5418H49.1682C44.877 97.5418 41.3984 94.0633 41.3984 89.7721V87.3353C41.3984 85.1566 43.1644 83.3906 45.3431 83.3906H50.4111" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M90.3379 97.5418H91.4159C95.707 97.5418 99.1856 94.0633 99.1856 89.7721V87.3353C99.1856 85.1566 97.4196 83.3906 95.241 83.3906H90.5186" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M65.6309 100.377C68.518 102.024 72.0601 102.024 74.9472 100.377" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.579 21.9338V15.3307H35.6096C35.2724 13.946 34.7276 12.6426 34.0088 11.4558L36.1133 9.35097L31.4441 4.68178L29.3442 6.78168C28.1591 6.06045 26.8564 5.51313 25.4726 5.17295V2.19727H18.8698V5.16668C17.4851 5.50386 16.1816 6.04873 14.9948 6.76751L12.8903 4.66297L8.22111 9.33216L10.321 11.4321C9.59979 12.6172 9.05246 13.9169 8.71229 15.3007H5.73633V21.9068H8.70575C9.04292 23.2915 9.5878 24.5949 10.3066 25.7817L8.20203 27.8865L12.8712 32.5557L14.9711 30.4558C16.1563 31.177 17.4589 31.7244 18.8428 32.0645V35.0405H25.4459V32.0711C26.8305 31.7339 28.134 31.189 29.3208 30.4703L31.4253 32.5748L36.0945 27.9056L33.9946 25.8057C34.7158 24.6206 35.2632 23.3179 35.6031 21.9341L38.579 21.9338Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.1666 18.6186C29.1666 22.4897 26.0285 25.6279 22.1574 25.6279C18.2863 25.6279 15.1484 22.4897 15.1484 18.6186C15.1484 14.7475 18.2866 11.6094 22.1577 11.6094C26.0288 11.6094 29.1666 14.7478 29.1666 18.6186Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.209 27.0977C133.771 24.6009 134.67 21.6489 134.67 18.4871C134.67 9.48939 127.373 2.19531 118.376 2.19531C109.378 2.19531 102.084 9.48939 102.084 18.4871C102.084 27.4847 109.378 34.7788 118.376 34.7788C120.733 34.7788 122.974 34.2773 124.997 33.3778" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M111.9 18.9046L117.461 24.5722L130.01 8.23438" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={colorVariants}
            viewport={{ once: true }}
          >
            Counselling by Admission team
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center"
          custom={3}
          initial="hidden"
          whileInView="visible"
          variants={colorVariants}
          viewport={{ once: true }}
        >
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <GoDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
        </motion.div>

        <motion.div
          className="flex items-center flex-col justify-between"
          custom={4}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <motion.div custom={4} initial="hidden" whileInView="visible" variants={fillVariants} viewport={{ once: true }}>
         <svg width="128" height="151" viewBox="0 0 128 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M67.6297 90.2169C65.8107 95.6522 67.0651 101.89 71.3935 106.219" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M81.0225 56.7174C81.0225 65.8868 73.589 73.3203 64.4193 73.3203C55.2499 73.3203 47.8164 65.8868 47.8164 56.7174C47.8164 47.5477 55.2499 40.1142 64.4193 40.1142C73.589 40.1142 81.0225 47.5477 81.0225 56.7174Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.234 60.9336H21.9124C20.8596 60.9336 20.0059 60.0799 20.0059 59.0267V54.4052C20.0059 53.3523 20.8596 52.4986 21.9124 52.4986H32.234C33.2871 52.4986 34.1408 53.3523 34.1408 54.4052V59.0267C34.1408 60.0799 33.2871 60.9336 32.234 60.9336Z" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.3789 90.2148H67.6303" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M106.553 90.2148H125.061C125.58 90.2148 126 89.7942 126 89.2751V24.1546C126 23.6355 125.58 23.2148 125.061 23.2148H3.78127C3.26247 23.2148 2.8418 23.6355 2.8418 24.1546V89.2751C2.8418 89.7942 3.26247 90.2148 3.78127 90.2148H29.0959" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117.552 48.0632V42.6458C117.552 42.374 117.34 42.1461 117.069 42.1337C111.664 41.8887 107.326 37.551 107.081 32.1465C107.069 31.8751 106.841 31.6635 106.569 31.6635H22.2696C21.9979 31.6635 21.7699 31.8751 21.7576 32.1465C21.5126 37.551 17.1745 41.8887 11.7701 42.1337C11.4986 42.1461 11.2871 42.374 11.2871 42.6458V70.7873C11.2871 71.0587 11.4986 71.287 11.7701 71.299C17.1745 71.544 21.5126 75.8821 21.7576 81.2866C21.7699 81.558 21.9979 81.7695 22.2696 81.7695H74.4408" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M117.555 62.8984V58.3465" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M94.8787 23.2168V23.0975C94.8787 18.0212 90.7636 13.9061 85.6873 13.9061C80.6113 13.9061 76.4961 18.0212 76.4961 23.0975V12.1226C76.4961 7.04633 72.3807 2.93122 67.3047 2.93122C62.2281 2.93122 58.1133 7.04633 58.1133 12.1226V23.0975C58.1133 18.0212 53.9982 13.9061 48.9219 13.9061C43.8456 13.9061 39.7305 18.0212 39.7305 23.0975V23.2168" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M82.5498 132.596L82.551 130.016C82.551 128.819 83.0251 127.67 83.8779 126.831C86.5048 124.249 88.7454 121.276 90.5053 118.006L119.189 68.3242C120.262 66.4661 119.625 64.0901 117.767 63.0173C110.833 59.0138 101.966 61.3895 97.9626 68.3236L94.8757 73.6705V73.6596L90.2462 81.6695C84.2754 78.2086 76.5017 79.0338 71.3907 84.1448C69.624 85.9115 68.3696 87.9964 67.627 90.2146" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3477 90.2164V100.61C21.3477 109.105 24.2289 116.927 29.0673 123.152C32.1005 127.054 33.673 131.895 33.6736 136.837L33.6748 148.095C33.6751 148.558 34.0502 148.934 34.5132 148.934H81.7129C82.1759 148.934 82.5513 148.558 82.5516 148.095L82.5528 142.879" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M106.528 61.639C106.968 61.3029 107.252 60.7733 107.252 60.1769V55.6482C107.252 54.6326 106.429 53.8095 105.414 53.8095H95.4598C94.4445 53.8095 93.6211 54.6326 93.6211 55.6482V60.1769C93.6211 61.1925 94.4445 62.0156 95.4598 62.0156H105.392" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={4}
            initial="hidden"
            whileInView="visible"
            variants={colorVariants}
            viewport={{ once: true }}
          >
            Pay Admission fee
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center"
          custom={5}
          initial="hidden"
          whileInView="visible"
          variants={colorVariants}
          viewport={{ once: true }}
        >
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <GoDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
          <RxDash className="text-3xl md:text-4xl lg:rotate-0 rotate-90" />
        </motion.div>

        <motion.div
          className="flex items-center flex-col justify-between"
          custom={6}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <motion.div custom={6} initial="hidden" whileInView="visible" variants={fillVariants} viewport={{ once: true }}>
            <svg width="115" height="152" viewBox="0 0 115 152" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M102.613 28.3262V16.4245C102.613 15.11 101.548 14.0443 100.233 14.0443H69.2891" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.01953 78.3134V137.821C5.01953 139.136 6.08525 140.201 7.3998 140.201H79.2175C80.4801 140.201 81.691 139.7 82.5836 138.807L101.217 120.174C102.11 119.281 102.612 118.07 102.612 116.807V37.8486" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M81.1895 138.861V121.158C81.1895 119.843 82.2552 118.778 83.5697 118.778H101.348" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.6835 30.7064V25.9459C21.6835 23.3168 23.8149 21.1853 26.444 21.1853C29.0731 21.1853 31.2045 23.3168 31.2045 25.9459V35.4669C31.2045 40.7254 26.9417 44.9883 21.6835 44.9883C16.425 44.9883 12.1621 40.7254 12.1621 35.4672V11.664C12.1621 6.40578 16.425 2.14292 21.6835 2.14292C26.9417 2.14292 31.2045 6.40578 31.2045 11.664" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.6822 11.6639H66.909C68.2235 11.6639 69.2892 12.7296 69.2892 14.0442V75.9322C69.2892 77.2468 68.2235 78.3125 66.909 78.3125H5.02089C3.70634 78.3125 2.64062 77.2468 2.64062 75.9322V14.0442C2.64062 12.7296 3.70634 11.6639 5.02089 11.6639H12.1623" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.541 140.202V147.342C14.541 148.657 15.6067 149.723 16.9213 149.723H109.753C111.068 149.723 112.134 148.657 112.134 147.342V25.9471C112.134 24.6323 111.068 23.5665 109.753 23.5665H102.613" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.1055 33.0879H55.0071" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.1055 44.9883H55.0071" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9238 56.8906H55.0087" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M83.5723 56.8906H88.3328" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M83.5723 33.0879H88.3328" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M83.5723 44.9883H88.3328" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M83.5723 68.793H88.3328" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3027 90.2168H24.0636" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3027 114.02H24.0636" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3027 102.115H24.0636" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.9648 90.2168H88.3313" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.9648 114.02H69.2891" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.9648 102.115H88.3313" stroke="#747474" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </motion.div>
          </div>
          <motion.p
            className="text-lg md:text-2xl pt-4 text-center"
            custom={6}
            initial="hidden"
            whileInView="visible"
            variants={colorVariants}
            viewport={{ once: true }}
          >
            Enroll for the course
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
};

export default HowToApply;

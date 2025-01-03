"use client";
import React from "react";
import { motion } from "framer-motion";
import { IntroDemo } from "./IntroDemo";
import { Demo } from "./Demo";

const AtomSVG = () => (
  <svg
    viewBox="0 0 240 240"
    className="w-full h-full absolute inset-0 text-white"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.g
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Electron Orbits */}
      <ellipse
        cx="120"
        cy="120"
        rx="100"
        ry="30"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-20"
      />
      <ellipse
        cx="120"
        cy="120"
        rx="100"
        ry="30"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-20"
        transform="rotate(60 120 120)"
      />
      <ellipse
        cx="120"
        cy="120"
        rx="100"
        ry="30"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-20"
        transform="rotate(-60 120 120)"
      />
    </motion.g>

    {/* Nucleus */}
  </svg>
);

export const Hero = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <section className="pt-[200px] pb-24 relative min-h-screen overflow-x-hidden">
        {/* Atom Animation */}
        <motion.div
          className="absolute top-[350px] -right-[400px] w-[800px] h-[800px] pointer-events-none -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.3,
          }}
          transition={{ duration: 0.3 }}
        >
          <AtomSVG />
        </motion.div>

        {/* Gradient Blob */}
        <motion.div
          className="absolute top-[350px] -right-[100px] w-[800px] h-[800px] pointer-events-none -translate-y-1/2"
          initial={{ opacity: 0.1 }}
          animate={{
            opacity: isHovered ? 0.2 : 0.1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-[#ffc55b] -full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative bottom-0">
          <div className="flex justify-between items-start">
            {/* Left Side: Main Text */}
            <div className="max-w-[60%]">
              <div className="space-y-0">
                {/* First Line */}
                <div className="overflow-hidden h-[3rem] md:h-[6rem]">
                  <motion.h1
                    className="text-[3rem] md:text-[6rem] font-satoshi font-medium leading-[0.7] tracking-[-0.01em] text-white"
                    initial={{ y: "150%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  >
                    Smart trades
                  </motion.h1>
                </div>

                {/* Second Line */}
                <div className="overflow-hidden h-[3rem] md:h-[6rem]">
                  <motion.span
                    className="text-[3rem] md:text-[6rem] font-satoshi font-medium leading-[0.7] tracking-[-0.01em] text-gray-400 block"
                    initial={{ y: "170%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    start with
                  </motion.span>
                </div>

                {/* Third Line */}
                <div className="overflow-hidden h-[3rem] md:h-[6rem]">
                  <motion.span
                    className="text-[3rem] md:text-[6rem] font-satoshi font-medium leading-[0.7] tracking-[-0.01em] text-white block"
                    initial={{ y: "180%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    smart <span className="underline decoration-[5px]">AI</span>
                  </motion.span>
                </div>
              </div>
            </div>

            {/* Right Side: Introduction with Demo */}
            <div
              className="flex flex-col gap-4 mt-[50px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <IntroDemo />
              <Demo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

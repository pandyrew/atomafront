"use client";
import React from "react";
import { motion } from "framer-motion";
import { IntroDemo } from "./IntroDemo";
import { Demo } from "./Demo";
import { AtomSVG } from "./AtomSVG";

export const Hero = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <section className="pt-[100px] md:pt-[200px] pb-24 relative min-h-screen overflow-x-hidden">
        {/* Atom Animation */}
        <motion.div
          className="absolute top-[350px] -right-[400px] w-[800px] h-[800px] pointer-events-none -translate-y-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.3,
          }}
          transition={{ duration: 0.3 }}
        >
          <AtomSVG isColored={true} />
        </motion.div>

        {/* Gradient Blob */}
        <motion.div
          className="absolute top-[350px] -right-[100px] w-[800px] h-[800px] pointer-events-none -translate-y-1/2 hidden md:block"
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: isHovered ? 0.3 : 0.2,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-[#ffc55b] -full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative bottom-0 px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center">
            {/* Left Side: Main Text */}
            <div className="w-full md:max-w-[60%]">
              <div className="space-y-0">
                {/* First Line */}
                <div className="overflow-hidden h-[3rem] md:h-[6rem]">
                  <motion.h1
                    className="text-[2.5rem] md:text-[6rem] font-satoshi font-medium leading-[0.7] tracking-[-0.01em] text-black"
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
                    className="text-[2.5rem] md:text-[6rem] font-satoshi font-medium leading-[0.7] tracking-[-0.01em] text-gray-400 block"
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
                    className="text-[2.5rem] md:text-[6rem] font-satoshi font-medium leading-[0.7] tracking-[-0.01em] text-black block"
                    initial={{ y: "180%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    smart{" "}
                    <span className="underline decoration-[3px] md:decoration-[5px]">
                      AI
                    </span>
                  </motion.span>
                </div>
              </div>
            </div>

            {/* Right Side: Introduction with Demo */}
            <div
              className="flex flex-col gap-4 mt-12 md:mt-[50px] w-full md:w-auto "
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

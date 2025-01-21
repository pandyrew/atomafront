"use client";

import { AtomSVG } from "../Landing/AtomSVG";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute z-0 -top-[500px] translate-x-1/2 right-[50%] w-[1000px] h-[800px] pointer-events-none rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 blur-3xl opacity-10 rounded-full" />
      </div>
      <div className="absolute -top-[520px] left-0 w-full h-full opacity-10 z-0">
        <AtomSVG isColored={false} />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6 max-w-2xl mt-10">
              <div className="space-y-2">
                {/* Animated Title First */}
                <div className="overflow-hidden h-[82px]">
                  <motion.h1
                    className="font-satoshi font-medium text-[80px] leading-tight tracking-tight text-white"
                    initial={{ y: "150%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    Atoma
                  </motion.h1>
                </div>

                <div className="overflow-hidden h-[82px]">
                  <motion.h1
                    className="font-satoshi font-medium text-[80px] leading-tight tracking-tight text-white"
                    initial={{ y: "150%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.33, 1, 0.68, 1],
                      delay: 0.1,
                    }}
                  >
                    Luna
                  </motion.h1>
                </div>

                {/* Other elements fade in after */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center space-x-2 pt-2"
                >
                  <div className="h-[1px] w-12 bg-blue-400" />
                  <span className="text-blue-400 text-sm">
                    Updated with new features
                  </span>
                </motion.div>
              </div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-satoshi text-2xl font-light text-white leading-tight tracking-tight max-w-md"
              >
                Atoma Luna decodes articles with AI-powered insights, offering
                tailored recommendations, market predictions, and in-depth
                analysis—your essential guide to smarter decisions
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                className="group rounded-xl flex items-center space-x-2 bg-white text-black px-8 h-[48px] font-outfit text-lg hover:bg-gray-100 transition-all"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <div className="h-[20px] overflow-hidden">
                  <div
                    className="flex flex-col transition-transform duration-500 ease-in-out"
                    style={{
                      transform: isButtonHovered
                        ? "translateY(-20px)"
                        : "translateY(0)",
                    }}
                  >
                    <span className="h-[20px] flex items-center">
                      Get Started
                    </span>
                    <span className="h-[20px] flex items-center">
                      Get Started
                    </span>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-blue-500/1 rounded-2xl backdrop-blur-sm border border-white/10" />
            <div className="relative bottom-6 right-6 border-2 border-white/10 rounded-xl">
              <Image
                src="/images/luna/lunaOutput.png"
                alt="Luna Output"
                className="w-full object-contain rounded-xl shadow-2xl"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

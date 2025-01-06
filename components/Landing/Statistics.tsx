"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain } from "lucide-react";

export const Statistics = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = {
    line1: ["Market", "Intelligence:"],
    line2: ["Our", "users", "see", "2.3x", "higher", "returns"],
    line3: ["with", "AI-powered", "market", "analysis"],
  };

  // Create individual transforms for each word with increasing offset
  const createWordTransforms = (index: number) => {
    const startOpacity = 0.1 + index * 0.02;
    const endOpacity = Math.min(startOpacity + 0.1, 0.7);

    return {
      opacity: useTransform(
        scrollYProgress,
        [startOpacity, endOpacity],
        [0, 1]
      ),
      y: useTransform(scrollYProgress, [startOpacity, endOpacity], [20, 0]),
    };
  };

  return (
    <section
      className="relative bg-[#0f0f0f] py-24 overflow-visible z-2 pb-48"
      ref={containerRef}
    >
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-5xl md:text-[72px]">
        <div className="flex flex-col items-start justify-start space-y-4">
          <h2 className="font-satoshi font-medium text-white flex items-center gap-4 tracking-tight">
            <Brain className="w-20 h-20" />
            <div className="flex gap-4 flex-wrap">
              {words.line1.map((word, i) => (
                <motion.span
                  key={i}
                  style={createWordTransforms(i)}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h2>

          <div className="flex flex-col space-y-4 font-satoshi font-medium text-white tracking-tight">
            <p className="flex gap-4 flex-wrap">
              {words.line2.map((word, i) => (
                <motion.span
                  key={i}
                  style={createWordTransforms(i + words.line1.length)}
                  className={`inline-block ${
                    word === "2.3x"
                      ? "bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <p className="flex gap-4 flex-wrap">
              {words.line3.map((word, i) => (
                <motion.span
                  key={i}
                  style={createWordTransforms(
                    i + words.line1.length + words.line2.length
                  )}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

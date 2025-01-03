"use client";
import React from "react";
import { motion } from "framer-motion";

interface IntroDemoProps {
  className?: string;
}

export const IntroDemo = ({ className }: IntroDemoProps) => {
  return (
    <motion.div
      className={`w-[450px] rounded-xl bg-black/50 backdrop-blur-sm p-8 border border-white/20 ${className}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="space-y-6">
        <div>
          <motion.p
            className="text-sm font-satoshi text-gray-400 uppercase tracking-wider mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Introducing
          </motion.p>
          <motion.h3
            className="text-2xl font-outfit font-medium text-white mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Atoma Luna
          </motion.h3>
          <motion.p
            className="text-gray-300 font-satoshi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            Your gateway to comprehensive market intelligence and real-time
            financial insights.
          </motion.p>
        </div>

        <motion.button
          className="mt-4 px-6 py-2 bg-white text-black rounded-xl font-satoshi hover:bg-gray-200 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          onClick={() => (window.location.href = "#learn-more")}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="text-center space-y-4 mb-24">
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="font-satoshi text-[120px] font-medium text-black leading-tight"
        >
          Meet the Team
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto text-lg font-outfit"
      >
        We&apos;re a passionate group of developers, designers, and AI
        enthusiasts working to revolutionize financial analysis through
        artificial intelligence.
      </motion.p>
    </div>
  );
} 
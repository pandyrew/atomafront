"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { AppleIcon } from "lucide-react";

export const Availability = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create different transform values for desktop and mobile
  const desktopY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [50, -300]);

  return (
    <section
      id="availability-section"
      className="pt-48 md:pb-24 pb-12 px-4 relative overflow-hidden bg-[#0f0f0f]"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-outfit text-white">
              Available on
              <br />
              web and iOS <span className="text-gray-500">(coming soon)</span>
            </h2>
            <p className="text-gray-500 text-md font-satoshi">
              Market intelligence at your fingertips, wherever you are.
            </p>

            <motion.button
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-satoshi hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AppleIcon className="w-5 h-5" />
              Download the App
            </motion.button>
          </motion.div>

          {/* Right side - Preview Images */}
          <div className="relative h-[600px] w-full">
            {/* Desktop Preview */}
            <motion.div
              style={{ y: desktopY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10 flex justify-end"
            >
              {/* Desktop Frame */}
              <div className="relative bg-[#1C1C1E] rounded-[10px] p-2 shadow-xl w-fit right-0">
                {/* Window Controls */}
                <div className="flex gap-1.5 mb-2 px-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
                </div>
                {/* Screen Content */}
                <Image
                  src="/images/landing/previewDashboard2.png"
                  alt="Dashboard Preview"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </motion.div>

            {/* Mobile Preview - Coming Soon Overlay */}
            <motion.div
              style={{ y: mobileY }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-4 md:-left-8 md:bottom-0 -bottom-[160px] transform md:translate-y-1/4 z-20"
            >
              <div className="relative">
                {/* iPhone Frame */}
                <div className="relative bg-[#1C1C1E] rounded-[40px] p-3  w-[200px]">
                  {/* Notch */}
                  {/* Screen Content with Overlay */}
                  <div className="relative aspect-[9/19.5] rounded-[28px] overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center border border-gray-200">
                      <p className="text-black font-satoshi text-lg">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                  {/* Home Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

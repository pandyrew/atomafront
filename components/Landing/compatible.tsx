"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function CompatibleCompanies() {
  return (
    <div className="bg-white w-full py-4 md:py-7">
      <div className="flex flex-col md:flex-row md:gap-[100px] items-center px-4">
        <motion.h2
          className="text-lg md:text-2xl font-light font-outfit text-black mb-4 md:mb-0 md:ml-[150px] whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Compatible with
        </motion.h2>
        <motion.div
          className="flex justify-end w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <InfiniteMovingCards
            items={companyLogos}
            direction="right"
            speed="normal"
          />
        </motion.div>
      </div>
    </div>
  );
}

const companyLogos = [
  {
    image: "/logos/external/yahoo.svg",
    alt: "yahoo",
  },
  {
    image: "/logos/external/bi.svg",
    alt: "business-insider",
  },
  {
    image: "/logos/external/bloomberg.svg",
    alt: "bloomberg",
  },
  {
    image: "/logos/external/cnet.svg",
    alt: "cnet",
  },
];

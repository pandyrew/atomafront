"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function CompatibleCompanies() {
  return (
    <div className="bg-[#111111] flex flex-row gap-4 justify-center items-center">
      <div className="flex flex-row gap-[200px] items-center p-7">
        <motion.h2
          className="text-2xl font-light font-outfit text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Compatible with
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <InfiniteMovingCards
            items={companyLogos}
            direction="right"
            speed="normal"
            className="max-w-3xl"
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

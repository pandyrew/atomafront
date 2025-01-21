"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Noise } from "@/components/Landing/noise";
import { Footer } from "@/components/Landing/footer";
import { motion } from "framer-motion";

export default function AllProducts() {
  const products = [
    {
      name: "AtomaLuna",
      description: "AI-Powered Financial Analysis and News Simplification",
      image: "/images/landing/previewLuna.png",
      link: "/atomaluna",
      isAvailable: true,
    },
    {
      name: "Coming Soon",
      description: "Our next exciting product is in development",
      image: "/images/landing/text_logo_white.svg",
      link: "/coming-soon",
      isAvailable: false,
    },
  ];

  return (
    <div className="relative w-full bg-black min-h-screen">
      <Footer />
      <Noise />
      <div className="fixed inset-0 bg-black -z-10" />

      <div className="relative z-10 translate-y-0 mb-[42vh] pointer-events-none">
        <div className="absolute z-0 -top-[500px] translate-x-1/2 right-[0%] w-[1000px] h-[800px] pointer-events-none rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 blur-3xl opacity-30 rounded-full" />
        </div>
        <div className="bg-black pointer-events-auto min-h-screen">
          <div className="container mx-auto px-6 pt-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Title Animation */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="font-satoshi text-6xl md:text-8xl font-medium text-white leading-tight"
                >
                  Our Products
                </motion.h1>
              </div>

              {/* Subtitle Animation */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-outfit"
              >
                Discover our suite of innovative solutions
              </motion.p>

              {/* Products Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24"
              >
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.link}
                    className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-left transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="aspect-[16/9] relative bg-black/50 rounded-xl overflow-hidden mb-6">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={`transition-transform duration-300 ${
                          product.name === "Coming Soon"
                            ? "object-contain p-8"
                            : "object-cover group-hover:scale-105"
                        }`}
                      />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-satoshi text-white">
                        {product.name}
                      </h2>
                      {product.isAvailable ? (
                        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-satoshi">
                          Available Now
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-satoshi">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 font-outfit mb-6">
                      {product.description}
                    </p>
                    <div className="flex items-center text-blue-400 font-satoshi">
                      Learn more
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

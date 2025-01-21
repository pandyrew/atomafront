"use client";
import React from "react";
import { motion } from "framer-motion";
import { LineChart, Newspaper, Zap } from "lucide-react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradientClass: string;
}

const StepCard = ({
  title,
  description,
  icon,
  color,
  gradientClass,
}: StepCardProps) => {
  return (
    <motion.div
      className={`backdrop-blur-xl border border-white/30 shadow-
      p-8 h-full rounded-xl relative overflow-hidden
      transition-all duration-300 group ${color}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 opacity-0 ${gradientClass} transition-opacity duration-300 group-hover:opacity-30`}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-start gap-3 mb-6 rounded">
          <div className="bg-white/95 backdrop-blur-xl p-2 rounded-xl">
            {icon}
          </div>
          <span className="text-2xl font-satoshi">{title}</span>
        </div>
        <p className="text-gray-800 font-satoshi mb-8">{description}</p>
      </div>
    </motion.div>
  );
};

export const Edge = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white pb-12">
      {/* Background gradients */}

      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          className="text-4xl md:text-5xl font-satoshi text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get an edge on the market
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          <StepCard
            number="01"
            title="Simplify long news articles"
            description="Our service breaks down long, complex, and time consuming news articles into simple, effective, and data driven insights."
            icon={<Newspaper className="w-6 h-6" />}
            color="hover:bg-blue-100/40"
            gradientClass="bg-gradient-to-br from-blue-300 via-blue-200 to-transparent"
          />
          <StepCard
            number="02"
            title="All investment info"
            description="Atoma provides a 360 degree view of stock news by breaking down price movements, technicals, SEC filings, and much more."
            icon={<LineChart className="w-6 h-6" />}
            color="hover:bg-purple-100/40"
            gradientClass="bg-gradient-to-br from-purple-300 via-purple-200 to-transparent"
          />
          <StepCard
            number="03"
            title="Instant stock news"
            description="Stay ahead of the market by making portfolio decisions the second news is released. Atoma's services are updated with 0 delay."
            icon={<Zap className="w-6 h-6" />}
            color="hover:bg-yellow-100/40"
            gradientClass="bg-gradient-to-br from-yellow-300 via-yellow-200 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

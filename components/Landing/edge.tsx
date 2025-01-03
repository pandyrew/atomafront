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
}

const StepCard = ({
  number,
  title,
  description,
  icon,
  color,
}: StepCardProps) => {
  return (
    <motion.div
      className={`-3xl p-8 h-full ${color}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-start gap-3 mb-6">
        <div className="bg-white/90 p-2 -xl">{icon}</div>
        <span className="text-2xl font-satoshi">{title}</span>
      </div>
      <p className="text-gray-800 font-satoshi mb-8">{description}</p>
    </motion.div>
  );
};

export const Edge = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
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
            color="bg-blue-100"
          />
          <StepCard
            number="02"
            title="All investment info"
            description="Atoma provides a 360 degree view of stock news by breaking down price movements, technicals, SEC filings, and much more."
            icon={<LineChart className="w-6 h-6" />}
            color="bg-purple-100"
          />
          <StepCard
            number="03"
            title="Instant stock news"
            description="Stay ahead of the market by making portfolio decisions the second news is released. Atoma's services are updated with 0 delay."
            icon={<Zap className="w-6 h-6" />}
            color="bg-yellow-100"
          />
        </div>
      </div>
    </section>
  );
};

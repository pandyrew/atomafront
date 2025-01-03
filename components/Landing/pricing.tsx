"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  delay?: number;
}

const PricingCard = ({ title, price, description, features, buttonText, isPopular, delay = 0 }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative bg-[#0F172A]/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-blue-500 text-white text-xs font-satoshi px-3 py-1 rounded-full">MOST POPULAR</div>
        </div>
      )}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-outfit text-black mb-2">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-outfit font-medium text-black">{price}</span>
            {price !== "Free" && <span className="text-gray-500 font-satoshi">/ month</span>}
          </div>
          <p className="mt-4 text-gray-500 font-satoshi">{description}</p>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-gray-600 font-satoshi">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          className={`w-full ${isPopular ? "bg-blue-500 hover:bg-blue-600" : "bg-[#0F172A] hover:bg-[#1E293B]"} text-white font-satoshi`}
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

export const Pricing = () => {
  const plans = [
    {
      title: "Free Plan",
      price: "Free",
      description: "Great way to familiarize yourself with AtomaLuna",
      features: ["Limited uses of AtomaLuna"],
      buttonText: "Free Plan",
    },
    {
      title: "Premium Plan",
      price: "$20",
      description: "Full access to all features and early updates",
      features: [
        "All features from Basic plan",
        "Sentiment Analysis of Social Media",
        "Early Access to Future Updates",
        "Stocks and news API Access",
        "Unlimited uses of AtomaLuna",
      ],
      buttonText: "Upgrade Now",
      isPopular: true,
    },
    {
      title: "Base Plan",
      price: "$10",
      description: "Essential features for staying informed",
      features: [
        "Unlimited uses of AtomaLuna",
        "News Simplification",
        "Stock Charts",
        "In-depth news analysis",
        "Highlights on competition, market impact, and financial performance",
      ],
      buttonText: "Upgrade Now",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-outfit text-black mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-500 font-satoshi">Choose the plan that best fits your needs</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.title} {...plan} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

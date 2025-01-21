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

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  isPopular,
  delay = 0,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative bg-white/50 backdrop-blur-sm p-6 md:p-8 border border-white/10"
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-blue-500 text-white text-xs font-satoshi px-3 py-1 rounded-full">
            MOST POPULAR
          </div>
        </div>
      )}
      <div className="space-y-4 md:space-y-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl md:text-2xl font-outfit text-black mb-2">
            {title}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl md:text-4xl font-outfit font-medium text-black">
              {price}
            </span>
            {price !== "Free" && (
              <span className="text-sm md:text-base text-gray-500 font-satoshi">
                / month
              </span>
            )}
          </div>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-500 font-satoshi">
            {description}
          </p>
        </div>

        <div className="space-y-3 md:space-y-4 h-full">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="text-sm md:text-base text-gray-600 font-satoshi">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button
          className={`w-full ${
            isPopular
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-[#0F172A] hover:bg-[#1E293B]"
          } text-white font-satoshi text-sm md:text-base`}
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
      ],
      buttonText: "Upgrade Now",
    },
  ];

  return (
    <section id="pricing" className="py-12 md:py-24 px-4 relative overflow-hidden">
      {/* Background Gradient Pattern */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-[800px] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[1400px] h-[800px] rotate-[-80deg]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-400/20 to-[#ffc55b]/20 rounded-[100px] blur-3xl transform scale-y-[5.5] scale-x-[0.8]" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-outfit text-black mb-2 md:mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-satoshi">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.title} {...plan} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

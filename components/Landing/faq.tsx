"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-800"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 w-full flex justify-between items-center text-left hover:text-gray-400 transition-colors duration-200"
      >
        <span className="text-xl font-outfit text-white">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-2xl font-light text-white"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 font-satoshi">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "What does Atoma Media do?",
      answer:
        "Atoma Media designs tools for people that are interested in business, finance, and investing to improve their understanding of the market.",
    },
    {
      question: "Are there more tools currently being developed?",
      answer:
        "Yes. The Atoma Suite of tools already has plans for multiple new entries including an interactive news agent. Premium users get early access to these tools.",
    },
    {
      question: "Will these tools be updated over time?",
      answer:
        "The Atoma Suite will constantly be updated and improved. Your feedback helps create a better user experience and design new features.",
    },
    {
      question: "What is the best way to contact our team?",
      answer:
        "Either leave a message on the contact form at the bottom of this page, or contact the founder directly at marc@atoma.media",
    },
    {
      question: "What kinds of tools are currently available?",
      answer:
        "Currently you can access Atoma Luna, a news simplifier that can cut down your time spent reading by 80%. More tools are in development.",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#171717]">
      <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-sm rounded-xl py-12 px-32 relative">
        <div className="flex justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-outfit mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 font-satoshi">
              Everything you need to know about our market intelligence platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block ml-auto"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 70 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform"
            >
              <motion.path
                d="M40 40 L90 40 L90 90 L95 85 L90 90 L85 85"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
          </motion.div>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

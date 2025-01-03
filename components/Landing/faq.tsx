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
      className="border-b border-gray-100"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 w-full flex justify-between items-center text-left hover:text-gray-600 transition-colors duration-200"
      >
        <span className="text-xl font-outfit text-black">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-2xl font-light text-black"
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
            <p className="pb-6 text-gray-500 font-satoshi">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "How do you ensure data accuracy?",
      answer:
        "Our financial data undergoes rigorous verification through multiple trusted sources and real-time cross-referencing systems, ensuring you receive the most accurate market insights.",
    },
    {
      question: "What type of market analysis do you provide?",
      answer:
        "We offer comprehensive market analysis including technical indicators, fundamental analysis, sentiment analysis, and AI-powered predictive insights to help inform your trading decisions.",
    },
    {
      question: "How frequently is the data updated?",
      answer:
        "Our platform provides real-time market data updates with millisecond accuracy, ensuring you never miss critical market movements or trading opportunities.",
    },
    {
      question: "Can I customize my news feed?",
      answer:
        "Yes, you can fully customize your news feed based on specific markets, companies, or trading strategies you're interested in, creating a personalized trading intelligence dashboard.",
    },
  ];

  return (
    <section className="py-24 px-4 ">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-outfit mb-4 text-black">Frequently Asked Questions</h2>
          <p className="text-gray-500 font-satoshi">Everything you need to know about our market intelligence platform</p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

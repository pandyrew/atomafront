"use client";
import { Noise } from "@/components/Landing/noise";
import { Footer } from "@/components/Landing/footer";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function ComingSoon() {
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
            <div className="max-w-4xl mx-auto text-center space-y-8 ">
              {/* Title Animation */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="font-satoshi text-6xl md:text-8xl font-medium text-white leading-tight h-[110px]"
                >
                  Coming Soon
                </motion.h1>
              </div>

              {/* Subtitle Animation */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-outfit"
              >
                We&apos;re working on something exciting. Sign up to be the
                first to know when we launch.
              </motion.p>

              {/* Email Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="max-w-md mx-auto mt-12"
              >
                <form className="flex gap-4 p-1.5 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                  <div className="flex-1 flex items-center gap-2 pl-4">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none font-outfit"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-satoshi hover:bg-gray-100 transition-colors"
                  >
                    Notify Me
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="grid md:grid-cols-3 gap-8 mt-24"
              >
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-left"
                  >
                    <feature.icon className="w-10 h-10 text-white/80 mb-4" />
                    <h3 className="text-xl font-satoshi text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 font-outfit">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Advanced Analytics",
    description:
      "Powerful tools for deep market analysis and trend prediction.",
    icon: function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    },
  },
  {
    title: "Real-time Updates",
    description: "Stay informed with instant market data and news alerts.",
    icon: function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    },
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage machine learning for smarter investment decisions.",
    icon: function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
      );
    },
  },
];

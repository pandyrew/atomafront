"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FileText,
  BarChart2,
  TrendingUp,
  Target,
  ClipboardList,
  Lightbulb,
} from "lucide-react";

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden pb-48">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          <div className="space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-center"
            >
              <h2 className="font-satoshi text-4xl font-medium text-white">
                Features that set us apart
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-outfit">
                Powerful AI-driven tools to help you make informed investment
                decisions
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              {/* Smart Synopsis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="min-h-[400px] group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative z-10 h-full max-w-[80%]">
                  <div className="flex items-center space-x-3 mb-3">
                    <FileText className="w-6 h-6 text-blue-500" />
                    <h3 className="font-satoshi text-2xl font-medium text-white">
                      Smart Synopsis
                    </h3>
                  </div>
                  <p className="text-slate-400 font-outfit text-base">
                    AI-powered article summaries that extract key insights and
                    market-moving information
                  </p>
                </div>
                <div className="absolute right-[50%] translate-x-[50%] bottom-0 w-full h-full">
                  <div className="relative w-[100%] h-full left-[5%] top-10">
                    <Image
                      src="/images/luna/synopsis.png"
                      alt="Smart Synopsis"
                      fill
                      className="object-contain object-bottom opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Market Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="min-h-[400px] group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative z-10 h-full max-w-[80%]">
                  <div className="flex items-center space-x-3 mb-3">
                    <BarChart2 className="w-6 h-6 text-blue-500" />
                    <h3 className="font-satoshi text-2xl font-medium text-white">
                      Market Analysis
                    </h3>
                  </div>
                  <p className="text-slate-400 font-outfit text-base">
                    Comprehensive stock analysis with support, resistance, and
                    technical indicators
                  </p>
                </div>
                <div className="absolute right-[50%] translate-x-[50%] bottom-0 w-full h-full">
                  <div className="relative w-[180%] h-[80%] left-[5%] top-[20%]">
                    <Image
                      src="/images/luna/stock.png"
                      alt="Market Analysis"
                      fill
                      className="object-contain object-bottom opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-50" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Technical Events */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2 min-h-[400px] group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative z-10 h-full max-w-[60%]">
                  <div className="flex items-center space-x-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                    <h3 className="font-satoshi text-2xl font-medium text-white">
                      Technical Events
                    </h3>
                  </div>
                  <p className="text-slate-400 font-outfit text-base max-w-sm">
                    Multi-horizon market outlook with bearish/bullish signals
                    and confidence scores
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 w-[70%] h-full">
                  <div className="relative w-full h-[80%] top-10 left-24">
                    <Image
                      src="/images/luna/outlook.png"
                      alt="Technical Events"
                      fill
                      className="object-contain object-bottom opacity-90 rounded-xl"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-l from-[#030014] via-[#030014]/50 to-transparent" /> */}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

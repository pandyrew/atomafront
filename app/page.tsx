"use client";
import React from "react";
import { Navbar } from "@/components/Landing/navbar";
import { Noise } from "@/components/Landing/noise";
import { Hero } from "@/components/Landing/hero";
import { ParallaxPreview } from "@/components/Landing/parallax-preview";
import { FAQ } from "@/components/Landing/faq";
import { Pricing } from "@/components/Landing/pricing";
import { Footer } from "@/components/Landing/footer";
import CompatibleCompanies from "@/components/Landing/compatible";
import { Edge } from "@/components/Landing/edge";

export default function Page() {
  return (
    <div className="relative w-full">
      <Footer />
      <Navbar />
      <div className="relative z-10 translate-y-0 pb-[42vh] pointer-events-none">
        <div className="bg-slate-100 pointer-events-auto">
          <Noise />
          <div className="h-screen relative">
            <Hero />
            <div className="absolute bottom-0 w-full">
              <CompatibleCompanies />
            </div>
          </div>
          <ParallaxPreview />
          <Edge />
          <FAQ />
          <Pricing />
        </div>
      </div>
    </div>
  );
}

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
import { Availability } from "@/components/Landing/Availability";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Statistics } from "@/components/Landing/Statistics";

export default function Page() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="relative w-full bg-white">
      <Footer />
      <Noise />
      <div className="relative z-10 translate-y-0 pb-[42vh] pointer-events-none">
        <div className="bg-slate-100 pointer-events-auto">
          <div className="h-screen relative">
            <Hero />
            <div className="absolute bottom-0 w-full">
              <CompatibleCompanies />
            </div>
          </div>
          {isDesktop && <ParallaxPreview />}
          <Edge />
          <FAQ />
          <Availability />
          <Statistics />
          <Pricing />
        </div>
      </div>
    </div>
  );
}

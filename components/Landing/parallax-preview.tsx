"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const ParallaxPreview = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const features = [
    {
      title: "Powerful Dashboard",
      description:
        "Get a bird's eye view of your entire operation with our comprehensive dashboard.",
      image: "/images/landing/previewDashboard.png",
    },
    {
      title: "Market Analysis",
      description:
        "Deep dive into market trends with advanced analytical tools.",
      image: "/images/landing/previewExpandedMarket.png",
    },
    {
      title: "Luna Integration",
      description: "Seamlessly integrate with Luna for enhanced capabilities.",
      image: "/images/landing/previewLuna.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      const section = document.getElementById("parallax-section");
      if (!section) return;

      const viewportHeight = window.innerHeight;
      const scrollOffset = Math.max(0, newScrollY - viewportHeight);

      // Don't start activating features until we've scrolled past ACTIVATION_SCROLL
      if (scrollOffset < 300) {
        setActiveIndex(0);
        return;
      }

      // Calculate index based on remaining scroll
      const rawIndex = Math.floor((scrollOffset - 300) / 700);
      const index = Math.min(rawIndex, features.length - 1);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // When activeIndex changes, trigger the fade out
    if (activeIndex !== displayedIndex) {
      setIsTextFading(true);
      // After fade out, update the text and fade in
      setTimeout(() => {
        setDisplayedIndex(activeIndex);
        setIsTextFading(false);
      }, 300); // This should match the fade duration
    }
  }, [activeIndex, displayedIndex]);

  const getFeatureStyles = (index: number) => {
    const ACTIVATION_SCROLL = 800; // pixels to scroll before first activation
    const isPast = index < activeIndex;
    const isWaiting = index > activeIndex;
    const isActive = index === activeIndex;

    // If we haven't scrolled enough, keep all items in waiting state
    if (scrollY < ACTIVATION_SCROLL) {
      return {
        transform: `
          translate(-50%, -50%)
          rotate3d(1, 1, 0, 60deg)
          translateY(${index * 50}px)
          translateZ(${-index * 50}px)
        `,
        zIndex: -index,
      };
    }

    if (isPast) {
      return {
        transform: `
          translate(-50%, -50%)
          translateY(-10vh)

          translateZ(${-index * 50}px)
        `,
        opacity: 0,
        pointerEvents: "none",
        visibility: "hidden" as const,
      };
    }

    if (isWaiting) {
      return {
        transform: `
          translate(-50%, -50%)
          rotate3d(1, 1, 0, 60deg)
          translateY(${(index - activeIndex) * 50}px)
          translateZ(${-index * 50}px)
        `,
        zIndex: -index,
      };
    }

    // Active feature
    return {
      transform: `
        translate(-50%, -50%)
        translateY(-30vh)
        translateZ(0)
        scale(1.2)
      `,
      opacity: 1,
    };
  };

  return (
    <section id="parallax-section" className="relative h-[350vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 animate-gradient-slow" />

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

        <div className="max-w-7xl mx-auto px-4 py-24 flex items-center justify-between">
          <div className="relative w-2/3 h-[600px] perspective-1000">
            <div className="absolute -left-20 top-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -right-10 bottom-20 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

            {features.map((feature, index) => (
              <div
                key={index}
                className={
                  "absolute left-1/2 top-3/4 w-[400px] transition-all duration-300 rounded-full"
                }
                style={getFeatureStyles(index)}
              >
                <div
                  className={`
                  relative rounded-[10px] 
                  ${index === activeIndex ? "glow-effect" : ""}
                `}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={300}
                    className="rounded-[10px] shadow-2xl border-2 border-gray-600/20 backdrop-blur-sm"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="w-1/3 relative">
            <div className="absolute -left-10 top-0 w-20 h-20 border border-gray-200 rounded-lg rotate-12 animate-float" />
            <div className="absolute right-0 bottom-20 w-16 h-16 border border-gray-200 rounded-full animate-float animation-delay-1000" />

            <div className="transition-all duration-500  relative z-10">
              <div
                className={`
                transition-opacity duration-300 
                backdrop-blur-sm bg-white/30 rounded-2xl p-8 border border-white/20
                ${isTextFading ? "opacity-0" : "opacity-100"}
              `}
              >
                <h2 className="text-4xl mb-6 font-outfit bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  {features[displayedIndex].title}
                </h2>
                <p className="text-lg text-gray-600 font-outfit">
                  {features[displayedIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

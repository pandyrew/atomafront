"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useSectionInView = (
  sectionId: string,
  threshold: number = 0.2
) => {
  const [isInView, setIsInView] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset state when pathname changes
    setIsInView(false);

    // Small delay to ensure DOM is ready after navigation
    const timer = setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold }
      );

      observer.observe(section);

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [sectionId, threshold, pathname]); // Add pathname as dependency

  return isInView;
};

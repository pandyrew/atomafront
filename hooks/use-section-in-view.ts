"use client";

import { useState, useEffect } from "react";

export const useSectionInView = (
  sectionId: string,
  threshold: number = 0.2
) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId, threshold]);

  return isInView;
};

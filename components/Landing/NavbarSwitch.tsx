"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { useEffect, useState } from "react";

export const NavbarSwitch = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isAtomLunaPage = pathname === "/atomaluna";
  const isComingSoonPage = pathname === "/coming-soon";
  const isAllProductsPage = pathname === "/all-products";
  const isAvailabilityVisible = useSectionInView("availability-section", 1);
  const isStatisticsVisible = useSectionInView("statistics-section", 0.1);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode =
    mounted &&
    (isAtomLunaPage ||
      isAvailabilityVisible ||
      isStatisticsVisible ||
      isComingSoonPage ||
      isAllProductsPage);

  return <Navbar isDarkMode={isDarkMode} />;
};

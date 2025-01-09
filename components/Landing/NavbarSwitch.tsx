"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { EvilNavbar } from "./evilnavbar";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { AnimatePresence } from "framer-motion";

export const NavbarSwitch = () => {
  const pathname = usePathname();
  const isAtomLunaPage = pathname === "/atomaluna";
  const isAvailabilityVisible = useSectionInView("availability-section", 1.0);
  const isStatisticsVisible = useSectionInView("statistics-section", 0.1);

  const showEvilNavbar =
    isAtomLunaPage || isAvailabilityVisible || isStatisticsVisible;

  return (
    <AnimatePresence mode="wait">
      {showEvilNavbar ? (
        <EvilNavbar key="evil-navbar" />
      ) : (
        <Navbar key="light-navbar" />
      )}
    </AnimatePresence>
  );
};

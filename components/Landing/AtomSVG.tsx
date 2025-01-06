"use client";
import { motion } from "framer-motion";

interface AtomSVGProps {
  isColored?: boolean;
}

export const AtomSVG = ({ isColored = true }: AtomSVGProps) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full h-full absolute inset-0 opacity-100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.g
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Electron Orbits */}
      <ellipse
        cx="120"
        cy="120"
        rx="100"
        ry="30"
        stroke={isColored ? "url(#orbit-gradient-1)" : "white"}
        strokeWidth="2"
        className="opacity-30"
      />
      <ellipse
        cx="120"
        cy="120"
        rx="100"
        ry="30"
        stroke={isColored ? "url(#orbit-gradient-2)" : "white"}
        strokeWidth="2"
        className="opacity-30"
        transform="rotate(60 120 120)"
      />
      <ellipse
        cx="120"
        cy="120"
        rx="100"
        ry="30"
        stroke={isColored ? "url(#orbit-gradient-3)" : "white"}
        strokeWidth="2"
        className="opacity-30"
        transform="rotate(-60 120 120)"
      />
    </motion.g>

    {/* Gradients */}
    <defs>
      <linearGradient id="orbit-gradient-1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
      <linearGradient id="orbit-gradient-2" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#FFC55B" />
      </linearGradient>
      <linearGradient id="orbit-gradient-3" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#FFC55B" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
    </defs>
  </svg>
);

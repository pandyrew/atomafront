"use client";

import { cn } from "@/lib/utils";

interface NoiseProps {
  className?: string;
  opacity?: number;
}

export function Noise({ className }: NoiseProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[999] pointer-events-none bg-noise-bg mix-blend-overlay",
        className
      )}
    />
  );
}

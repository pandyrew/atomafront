import { Hero } from "@/components/LunaLanding/hero";
import { Noise } from "@/components/Landing/noise";

export default function Atomaluna() {
  return (
    <main className="relative bg-[#0E1013] min-h-screen overflow-x-hidden">
      {/* Background wrapper that ensures dark bg extends fully */}
      <div className="fixed inset-0 bg-[#0E1013] -z-10" />
      <Hero />
      <Noise />
    </main>
  );
}

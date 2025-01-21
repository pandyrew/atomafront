import Hero from "@/components/LunaLanding/hero";
import Features from "@/components/LunaLanding/Features";
import { Noise } from "@/components/Landing/noise";
import { Footer } from "@/components/Landing/footer";

export default function AtomaLuna() {
  return (
    <div className="relative w-full bg-black min-h-screen">
      <Footer />
      <Noise />
      <div className="fixed inset-0 bg-black -z-10" />
      <div className="relative z-10 translate-y-0 mb-[42vh] pointer-events-none">
        <div className="bg-black pointer-events-auto">
          <Hero />
          <Features />
        </div>
      </div>
    </div>
  );
}

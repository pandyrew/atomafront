import { Noise } from "@/components/Landing/noise";
import { Hero } from "@/components/About/Hero";
import { TeamGrid } from "@/components/About/TeamGrid";
import { Footer } from "@/components/Landing/footer";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Footer />
      <Noise className="opacity-10" />

      <div className="fixed inset-0 bg-white -z-10" />

      <div className="relative z-10 translate-y-0 mb-[42vh] pointer-events-none">
        <div className="bg-white pointer-events-auto relative">
          {/* Main Grid */}
          <div
            className="absolute inset-0 opacity-[0]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgb(0 0 0) 1px, transparent 0),
                linear-gradient(rgb(0 0 0) 1px, transparent 0)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          {/* Subtle Sub Grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgb(0 0 0) 1px, transparent 0),
                linear-gradient(rgb(0 0 0) 1px, transparent 0)
              `,
              backgroundSize: "20px 20px",
            }}
          />
          {/* Top Fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 15%, rgba(255,255,255,0) 30%)",
            }}
          />
          
          <main className="pt-24 relative">
            <div className="container mx-auto px-6">
              <Hero />
              <TeamGrid />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

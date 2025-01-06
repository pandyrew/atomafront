import { AtomSVG } from "../Landing/AtomSVG";

export const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen ">
        {/* Gradient blob */}
        <div className="absolute -top-[400px] translate-x-1/2 w-[800px] h-[800px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-[#ffc55b] blur-3xl opacity-10" />
        </div>

        <div className="absolute -top-[500px] left-0 w-full h-full opacity-10">
          <AtomSVG isColored={false} />
        </div>
      </section>
    </>
  );
};

import { AtomSVG } from "../Landing/AtomSVG";

export const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center">
        {/* Gradient blob */}
        <div className="absolute -top-[500px] translate-x-1/2 right-[50%] w-[800px] h-[800px] pointer-events-none rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400 blur-3xl opacity-10 rounded-full" />
        </div>
        <div className="absolute -top-[520px] left-0 w-full h-full opacity-10">
          <AtomSVG isColored={false} />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 mt-[30vh]">
          <div className="space-y-6">
            <h1 className="font-outfit text-6xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Atoma Luna
            </h1>

            {/* Horizontal Decorative Line */}
            <div className="w-full h-px bg-gray-700" />
            <div className="flex flex-col space-y-2">
              <h2 className="font-outfit text-4xl font-light text-gray-200">
                Your AI-Powered
                <br />
                <span className="font-semibold">Financial Insights Engine</span>
              </h2>
              <p className="text-gray-400 font-outfit">
                SEC filings summarized. Market sentiment analyzed. Financial
                news decoded.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

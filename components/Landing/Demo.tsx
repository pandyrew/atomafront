"use client";
import React from "react";
import { motion } from "framer-motion";

const DEMO_PROMPTS = [
  "Paste the latest Tesla earnings report URL...",
  "Search for crypto market analysis...",
  "Find news about Federal Reserve interest rates...",
  "Look up recent merger and acquisition news...",
  "Check Bitcoin price predictions...",
];

const useTypewriter = (
  phrases: string[],
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000
) => {
  const [displayText, setDisplayText] = React.useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isTyping,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
};

export const Demo = () => {
  const [demoUrl, setDemoUrl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const placeholderText = useTypewriter(DEMO_PROMPTS);

  const handleDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setDemoUrl("");
  };

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.8 }}
    >
      <p className="text-sm font-satoshi text-black">Try the demo</p>
      <form onSubmit={handleDemo}>
        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={demoUrl}
              onChange={(e) => setDemoUrl(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={
                isFocused
                  ? "Paste a news article URL or enter a search term"
                  : placeholderText
              }
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 
                outline-none focus:border-gray-300 transition-all duration-200 font-satoshi placeholder:text-gray-400
                pr-[120px] text-black text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-xs text-gray-400">
              <span className="font-satoshi">or</span>
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded-md font-satoshi">
                ⌘K
              </kbd>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-10 inline-flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-900 
              rounded-xl disabled:opacity-50 disabled:pointer-events-none transition-colors text-sm font-satoshi"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              <>
                Analyze Article
                <span className="ml-1">→</span>
              </>
            )}
          </button>
        </div>
      </form>

      <div className="flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12L11 14L15 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="font-satoshi">Instant analysis</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12L11 14L15 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="font-satoshi">AI-powered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12L11 14L15 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="font-satoshi">Real-time</span>
        </div>
      </div>
    </motion.div>
  );
};

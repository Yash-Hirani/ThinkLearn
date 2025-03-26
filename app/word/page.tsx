"use client";
import { useState, useEffect } from "react";

type WordCard = {
  word: string;
  meaning: string;
};

export default function WordSlider() {
  const words: WordCard[] = [
    { word: "Ephemeral", meaning: "Lasting for a very short time" },
    { word: "Ubiquitous", meaning: "Present everywhere" },
    {
      word: "eon",
      meaning: "the longest unit of geological time",
    },
    { word: "Pernicious", meaning: "Having a harmful effect" },
    { word: "Eloquent", meaning: "Fluent or persuasive in language" },
    { word: "Resilient", meaning: "Able to withstand/recover quickly" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getPreviousWords = () => {
    const prevWords = [];
    for (let i = 1; i <= 3; i++) {
      const index = (currentIndex - i + words.length) % words.length;
      prevWords.push(words[index]);
    }
    return prevWords.reverse();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="max-w-md w-full p-8 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Vocabulary Slider
        </h1>

        {/* Current word card */}
        <div className="relative h-48 mb-10 overflow-hidden rounded-lg bg-white/5 border border-white/10">
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
              isTransitioning
                ? "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
            key={currentIndex}
          >
            <div className="text-5xl font-bold text-white mb-4 text-center">
              {words[currentIndex].word}
            </div>
            <div className="text-xl text-white/80 max-w-md text-center">
              {words[currentIndex].meaning}
            </div>
          </div>
        </div>

        {/* Previous words section */}
        <div className="border-t border-white/20 pt-6">
          <h2 className="font-semibold text-xl mb-4 text-white/90">
            Previous Words
          </h2>
          <div className="space-y-4">
            {getPreviousWords().map((item, index) => (
              <div
                key={index}
                className="flex justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="font-medium text-white">{item.word}</span>
                <span className="text-white/70">{item.meaning}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(
                  (prev) => (prev - 1 + words.length) % words.length
                );
                setIsTransitioning(false);
              }, 100);
            }}
            className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all border border-white/20 hover:border-white/30"
          >
            ← Previous
          </button>
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
                setIsTransitioning(false);
              }, 100);
            }}
            className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all border border-white/30 hover:border-white/40"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

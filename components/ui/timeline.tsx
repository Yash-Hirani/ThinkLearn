"use client";
import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeProgress, setActiveProgress] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 70%"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Update the active progress based on scroll
      setActiveProgress(progress);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Function to interpolate colors based on progress
  const interpolateColor = (
    startColor: string,
    endColor: string,
    progress: number
  ) => {
    const start = parseInt(startColor.slice(1), 16);
    const end = parseInt(endColor.slice(1), 16);
    const r = Math.round(
      ((start >> 16) & 0xff) +
        progress * (((end >> 16) & 0xff) - ((start >> 16) & 0xff))
    );
    const g = Math.round(
      ((start >> 8) & 0xff) +
        progress * (((end >> 8) & 0xff) - ((start >> 8) & 0xff))
    );
    const b = Math.round(
      (start & 0xff) + progress * ((end & 0xff) - (start & 0xff))
    );
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
  };

  return (
    <div
      className="w-full bg-black rounded-xl font-sans md:px-10 px-8"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-10xl mx-auto pb-20">
        {data.map((item, index) => {
          const entryStart = index / data.length;
          const entryEnd = (index + 1) / data.length;
          const entryProgress = Math.max(
            0,
            Math.min(1, (activeProgress - entryStart) / (entryEnd - entryStart))
          );

          const circleColor = interpolateColor(
            "#404040",
            "#9333ea",
            entryProgress
          );
          const titleColor = interpolateColor(
            "#737373",
            "#9333ea",
            entryProgress
          );

          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div
                  style={{ backgroundColor: circleColor }}
                  className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                </div>
                <h3
                  style={{ color: titleColor }}
                  className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold transition-colors duration-300"
                >
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3
                  style={{ color: titleColor }}
                  className="md:hidden block text-1xl mb-2 text-left font-bold transition-colors duration-300"
                >
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          );
        })}
        <div
          style={{
            height: height,
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: height * scrollYProgress.get(),
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

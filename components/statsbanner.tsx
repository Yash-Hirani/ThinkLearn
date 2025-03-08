"use client";
import React, { useEffect, useState } from "react";

// NumberCounter Component
type NumberCounterProps = {
  targetNumber: number; // The number to count up to
  duration?: number; // Duration of the animation in milliseconds
};

const NumberCounter = ({
  targetNumber,
  duration = 2000,
}: NumberCounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 16); // 16ms for 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetNumber, duration]);

  return <>{count}</>;
};

// StatItem Component
interface StatItemProps {
  count: number; // Changed to number for NumberCounter
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ count, label }) => {
  return (
    <div className="flex flex-col items-center px-4 py-6 text-center">
      <h2 className="text-4xl font-bold mb-1 md:text-5xl lg:text-6xl text-white">
        <NumberCounter targetNumber={count} duration={2000} />+
      </h2>
      <p className="text-sm md:text-base text-white">{label}</p>
    </div>
  );
};

// StatsBanner Component
const StatsBanner: React.FC = () => {
  const stats = [
    { count: 150000, label: "Students" },
    { count: 500, label: "Associate Companies" },
    { count: 100, label: "Industrial Expert Mentors" },
    { count: 15, label: "Courses" },
  ];

  return (
    <div
      className="w-full py-8 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/statsbg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          {stats.map((stat, index) => (
            <StatItem key={index} count={stat.count} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;

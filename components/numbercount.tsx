import { useEffect, useState } from "react";

type NumberCounterProps = {
  targetNumber: number;
  duration?: number;
};

const NumberCounter = ({
  targetNumber,
  duration = 2000,
}: NumberCounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <div className="text-4xl font-bold text-blue-600">{count}</div>;
};

export default NumberCounter;

import React, { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import { Options } from "@splidejs/splide";
import "@splidejs/splide/css";
import Image from "next/image";

function useSplide(options?: Options) {
  const splideRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [controller, setController] = useState<Splide | null>(null);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      perPage: 1,
      arrows: true,
      pagination: true,
      gap: "1rem",
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
      breakpoints: {
        700: { perPage: 2 },
        640: { perPage: 1 },
      },
      ...options,
    });

    // Update progress bar when the carousel moves
    splide.on("mounted move", () => {
      if (progressBarRef.current) {
        const end = splide.Components.Controller.getEnd() + 1;
        const rate = Math.min((splide.index + 1) / end, 1);
        progressBarRef.current.style.width = `${100 * rate}%`;
      }
    });

    splide.mount();
    setController(splide);

    return () => {
      splide.destroy();
      setController(null);
    };
  }, [options]);

  return { splideRef, progressBarRef, controller };
}

interface SlideItem {
  id: string | number;
  imageUrl: string;
}

interface SliderProps {
  slides: SlideItem[];
  options?: Options;
  className?: string;
  progressBarColor?: string;
}

const SplideSliderWithProgress: React.FC<SliderProps> = ({
  slides,
  options,
  className = "",
  progressBarColor = "bg-green-400",
}) => {
  const { splideRef, progressBarRef } = useSplide(options);

  return (
    <div className={`${className}`}>
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {slides.map((slide) => (
              <li
                key={slide.id}
                className="splide__slide p-2 flex justify-center items-center"
              >
                <div className="w-80 h-64 relative">
                  <Image
                    src={slide.imageUrl}
                    alt="slide"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-1 bg-gray-200 mt-4 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className={`h-full ${progressBarColor} transition-all duration-300 ease-in-out w-0`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const ImageSlider: React.FC = () => {
  const images = [
    { id: 1, imageUrl: "/student1.jpg" },
    { id: 2, imageUrl: "/student2.jpeg" },
    { id: 3, imageUrl: "/student3.jpeg" },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SplideSliderWithProgress
          slides={images}
          options={{
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            type: "loop",
          }}
          progressBarColor="bg-purple-500"
          className="max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
};

export default SplideSliderWithProgress;

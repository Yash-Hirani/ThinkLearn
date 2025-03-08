import React, { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import { Options } from "@splidejs/splide";
import "@splidejs/splide/css";

// Custom hook for Splide
function useSplide(options?: Options) {
  const splideRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [controller, setController] = useState<Splide | null>(null);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop", // Enable looping
      perPage: 1, // Show 3 images per slide
      arrows: true,
      pagination: true,
      gap: "1rem",
      autoplay: true, // Enable automatic sliding
      interval: 3000, // Slide every 3 seconds
      pauseOnHover: true, // Pause when hovered
      breakpoints: {
        1024: { perPage: 2 }, // Adjust for medium screens
        640: { perPage: 1 }, // Adjust for small screens
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
    <div className={`w-full ${className}`}>
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {slides.map((slide) => (
              <li key={slide.id} className="splide__slide p-2">
                <img
                  src={slide.imageUrl}
                  alt="slide"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Progress bar with customizable color */}
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

// Example component with images
export const ImageSlider: React.FC = () => {
  const images = [
    { id: 1, imageUrl: "student1.jpg" },
    { id: 2, imageUrl: "student2.jpeg" },
    { id: 3, imageUrl: "student3.jpeg" },
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
            type: "loop", // Enable looping
          }}
          progressBarColor="bg-purple-500"
          className="max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
};

export default SplideSliderWithProgress;

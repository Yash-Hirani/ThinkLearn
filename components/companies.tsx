"use client";
import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css"; // Import Splide CSS
import Image from "next/image";

const SplideCarousel: React.FC = () => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop", // Enable looping
        drag: "free", // Allow free dragging
        focus: "center", // Center the active slide
        perPage: 7, // Show 5 images per slide
        arrows: false, // Remove navigation arrows
        pagination: false, // Remove pagination (image count from the bottom)
        gap: "1rem", // Add space between slides
        autoScroll: {
          speed: 1, // Auto-scroll speed
        },
      });

      splide.mount({ AutoScroll });

      // Cleanup Splide instance on unmount
      return () => {
        splide.destroy();
      };
    }
  }, []);

  return (
    <div className="splide" ref={splideRef}>
      <div className="splide__track bg-slate-200">
        <h1 className="justify-center text-center text-5xl pt-10 pb-20 font-bold tracking-tighter">
          Our Alumni Work At
        </h1>
        <ul className="splide__list">
          <li className="splide__slide">
            <Image src="/amazon.png" alt="Slide 1" width="300" height="200" />
          </li>
          <li className="splide__slide">
            <Image src="/nvidia.png" alt="Slide 2" width="400" height="200" />
          </li>
          <li className="splide__slide">
            <Image src="/ibm.png" alt="Slide 3" width="200" height="200" />
          </li>
          <li className="splide__slide">
            <Image src="/mmt.png" alt="Slide 4" width="200" height="200" />
          </li>
          <li className="splide__slide">
            <Image src="/oracle.png" alt="Slide 5" width="200" height="200" />
          </li>
          <li className="splide__slide">
            <Image src="/samsung.png" alt="Slide 6" width="400" height="200" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SplideCarousel;

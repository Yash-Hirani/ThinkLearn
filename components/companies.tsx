"use client";
import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import Image from "next/image";

const SplideCarousel: React.FC = () => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 7,
        arrows: false,
        pagination: false,
        gap: "1rem",
        autoScroll: {
          speed: 1,
        },
      });

      splide.mount({ AutoScroll });

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
          <li className="splide__slide pl-7">
            <Image src="/amazon.png" alt="Slide 1" width="300" height="200" />
          </li>
          <li className="splide__slide pl-4">
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
          <li className="splide__slide pr-3">
            <Image src="/samsung.png" alt="Slide 6" width="400" height="200" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SplideCarousel;

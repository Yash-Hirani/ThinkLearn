"use client";

import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  const data = [
    {
      title: "Create An Account",
      content: (
        <div className="flex items-center">
          <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
            Create An Account Create a username and secured password
          </p>
        </div>
      ),
    },
    {
      title: "Pre-registration",
      content: (
        <div className="flex items-center">
          <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
            Select Your Favorite Domain
          </p>
        </div>
      ),
    },
    {
      title: "Select Your Favorite Domain",
      content: (
        <div className="flex items-center">
          <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
            Complete your onboarding process by filling all the details
            required. Choose your favorite domain/subject to learn and pursue
            your career for the same.
          </p>
        </div>
      ),
    },
    {
      title: "Get Started",
      content: (
        <div className="flex items-center">
          <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
            Join the the live and interactive classes from the best experts in
            the current industry.
          </p>
        </div>
      ),
    },
    {
      title: "Become A Certified Professional",
      content: (
        <div className="flex items-center">
          <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
            Has anyone ever questioned your ability? Not anymore!! Get Certified
            with the best co-branded companies in the industry.
          </p>
        </div>
      ),
    },
    {
      title: "Get Placed ",
      content: (
        <div className="flex items-center">
          <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
            Find the best suitable internship and placement opportunities from
            the companies listed with us.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-grid-white/30 rounded-3xl flex flex-col items-center justify-center border-2 border-white relative bg-cover bg-center font-sans tracking-wide">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black rounded-3xl [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <Timeline data={data} />
    </div>
  );
}

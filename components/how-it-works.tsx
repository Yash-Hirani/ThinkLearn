"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ImageSlider } from "./slidingimages";

export default function HowItWorks() {
  const steps = [
    {
      title: "Choose Your Course",
      description:
        "Browse through our extensive library of courses and select the ones that match your learning goals.",
      href: "/courses",
    },
    {
      title: "Learn at Your Pace",
      description:
        "Access course materials anytime, anywhere. Learn at your own pace with our flexible learning platform.",
      href: "/learning",
    },
    {
      title: "Join Community",
      description:
        "Connect with fellow learners and instructors to enhance your learning experience through discussions.",
      href: "/community",
    },
    {
      title: "Get Certified",
      description:
        "Complete your courses and earn industry-recognized certificates to showcase your skills.",
      href: "/certification",
    },
  ];

  return (
    <section className="w-full md:py-16 bg-background" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-4">
          <div className="flex flex-col space-y-4">
            <div className="prose max-w-none">
              <h3 className="text-4xl md:text-6xl font-bold">
                Start Your Learning{" "}
                <span className="text-purple-700">Journey</span> Today
              </h3>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <ImageSlider />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {steps.map((step, index) => (
              <Link key={index} href={step.href} className="block h-40">
                <Card className="flex flex-col h-full border-0 shadow-none bg-muted/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-300 hover:to-white hover:scale-105 overflow-hidden">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <CardTitle className="flex items-center text-base">
                      <span className="flex-1">{step.title}</span>
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

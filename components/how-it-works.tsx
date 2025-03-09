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
      title: "Computer Science",
      description:
        "Computer Science Engineering (CSE) is an engineering discipline that covers several topics related to computation, programming languages, program design, computer hardware and software and integrates several fields of computer science.",
      href: "/courses",
    },
    {
      title: "Mechanical",
      description:
        "Mechanical engineering is an engineering branch that combines engineering physics and mathematics principles with materials science, to design, analyze, manufacture, and maintain mechanical systems. ... It is the branch of engineering that involves the design, production, and operation of machinery.s",
      href: "/learning",
    },
    {
      title: "Civil Engineering",
      description:
        "Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways.",
      href: "/community",
    },
    {
      title: "Management",
      description:
        "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon. These are also a great way to jazz up a newsletter or a memo or even to simply print and attach",
      href: "/certification",
    },
  ];

  return (
    <section
      className="w-full md:py-16 bg-cover bg-center bg-no-repeat"
      id="how-it-works"
      style={{ backgroundImage: "url('/howitworksbg.jpeg')" }}
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4">
          <div className="flex flex-col space-y-10">
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

          <div className="p-8 ">
            <div
              className="
            rounded-sm
            outline outline-[8px] outline-purple-500 
            outline-offset-[14px]
          "
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {steps.map((step, index) => (
                  <Link key={index} href={step.href} className="block h-45">
                    <Card className="flex flex-col h-full border-0 shadow-none bg-muted/100 transition-all duration-300 hover:scale-105 overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  <style jsx global>{`
    .center-underline {
      position: relative;
      text-decoration: none;
    }

    .center-underline::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      left: 50%;
      background-color: currentColor;
      transition: all 0.3s ease-out;
      transform: translateX(-50%);
    }

    .center-underline:hover::after {
      width: 100%;
    }
  `}</style>;
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 ">
            <span className="text-3xl font-semibold text-black ">
              Think Lance
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center space-x-2 group no-underline hover:no-underline"
          >
            <span className="text-lg font-semibold text-black center-underline">
              Home
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center space-x-2 group no-underline hover:no-underline"
          >
            <span className="text-lg font-semibold text-black center-underline">
              Quiz
            </span>
          </Link>
          <Link
            href="/courses"
            className="flex items-center space-x-2 group no-underline hover:no-underline"
          >
            <span className="text-lg font-semibold text-black center-underline">
              All courses
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center space-x-2 group no-underline hover:no-underline"
          >
            <span className="text-lg font-semibold text-black center-underline">
              Career portal
            </span>
          </Link>
          <Link
            href="/courses"
            className="relative flex w-40 bg-purple-700 items-center justify-center h-12  overflow-hidden rounded-3xl shadow-md transition-all hover:scale-300 group"
          >
            <span className="absolute h-full w-full -translate-x-full  translate-y-full rotate-45 transition-all duration-700 bg-gradient-to-r from-[#DD88CF] to-[#F8E7F6] group-hover:translate-x-[25%] group-hover:translate-y-[-15%]"></span>
            <span className="relative z-19 text-lg font-semibold text-[#FFFAFA] transition-all group-hover:text-white">
              Register
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "slide-in-from-top-2" : "hidden"
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4">
          <Link
            href="/"
            className="flex items-center py-2 text-lg font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/quiz"
            className="flex items-center py-2 text-lg font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Quiz
          </Link>
          <Link
            href="/courses"
            className="flex items-center py-2 text-lg font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            All Courses
          </Link>
          <Link
            href="/career"
            className="flex items-center py-2 text-lg font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Career Portal
          </Link>
          <Button
            className="w-full"
            onClick={() => setIsMenuOpen(false)}
            asChild
          >
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

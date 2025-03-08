"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Thinklance</span>
            <span className="text-xl font-semibold">Edutech</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/quiz" className="text-sm font-medium transition-colors hover:text-primary">
            Quiz
          </Link>
          <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
            All Courses
          </Link>
          <Link href="/career" className="text-sm font-medium transition-colors hover:text-primary">
            Career Portal
          </Link>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "slide-in-from-top-2" : "hidden",
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4">
          <Link href="/" className="flex items-center py-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
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
          <Button className="w-full" onClick={() => setIsMenuOpen(false)} asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


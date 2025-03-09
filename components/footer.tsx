"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full border-t relative"
      style={{
        backgroundImage: "url('/footerbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Custom CSS for center underline animation */}
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
      `}</style>

      {/* Semi-transparent gradient overlay that fades out toward the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>

      <div className="container px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 group no-underline hover:no-underline"
            >
              <span className="text-xl font-semibold text-white center-underline">
                Thinklance Edutech
              </span>
            </Link>
            <p className="text-sm text-gray-200">
              Empowering students and professionals with quality education and
              skills for a better future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-200 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-200 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-200 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-200 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4"></div>
          <div className="space-y-4">
            <h3 className="text-base font-medium text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-primary center-underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-200 hover:text-primary center-underline"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-200 hover:text-primary center-underline"
                >
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-gray-200 hover:text-primary center-underline"
                >
                  Career Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-200 hover:text-primary center-underline"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-gray-200">
                  United States- 566 Seventh Ave, New York, NY 10018
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-200" />
                <span className="text-gray-200">
                  Contact No. (USA): +16468590359
                </span>
              </li>
              <br />

              <li className="flex items-center space-x-2">
                <span className="text-gray-200">
                  UK- 12 Steward Street, The Steward Building, London, E1 6FQ,
                  GB
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-200" />
                <span className="text-gray-200">
                  Contact No. (UK): +442030311260
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700/30 pt-6 text-center text-sm text-gray-200">
          <p>
            © {new Date().getFullYear()} Thinklance Edutech. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

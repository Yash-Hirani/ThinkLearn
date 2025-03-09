import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full md:py-10  bg-gradient-to-b from-background to-muted">
      <div className="container  md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Empower Your <span className="text-purple-700">future </span>
                with Expert Tech Courses at{" "}
                <span className="text-purple-700">ThinkLance</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Unlock the Secrets of Web Development, AI, Machine Learning, and
                Data Science with Our Top-Rated Programs!
              </p>
            </div>
            <div>
              <Link
                href="/courses"
                className="relative flex w-60 bg-purple-700 items-center justify-center h-12  overflow-hidden rounded-3xl shadow-md transition-all hover:scale-300 group"
              >
                <span className="absolute h-full w-full -translate-x-full  translate-y-full rotate-45 transition-all duration-700 bg-gradient-to-r from-[#DD88CF] to-[#F8E7F6] group-hover:translate-x-[25%] group-hover:translate-y-[-15%]"></span>
                <span className="relative z-19 text-lg font-semibold text-[#FFFAFA] transition-all group-hover:text-white">
                  Explore Courses
                </span>
              </Link>
            </div>
          </div>
          <div className="rounded-xl ml-20">
            <Image
              src="/homeImage.png"
              alt="Students learning online"
              className="max-w-full h-auto shadow-[4px_7px_8px_4px_#6b6b6b] rounded-lg"
              width="500"
              height="500"
            />
          </div>
        </div>
        <p className="mt-10 max-w-full text-muted-foreground md:text-xl text-center mx-auto">
          <span className="text-black font-bold"> Thinklance Edutech</span> is
          one of the finest
          <span className="text-black font-bold"> Elearning</span> platforms for
          all students and professionals that facilitates studying
          <span className="text-black font-bold">
            top-notch technical certification
          </span>
          courses from
          <span className="text-black font-bold">
            profound industry experts
          </span>
          with the best study resources.
        </p>
      </div>
    </section>
  );
}

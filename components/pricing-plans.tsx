"use client";

export default function PricingPlans() {
  return (
    <section
      className="w-full py-12 md:py-24 bg-cover bg-center bg-no-repeat relative"
      id="pricing"
      style={{ backgroundImage: "url('/pricebg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Our Pricing Plans
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {/* Left Plan (Smaller) */}
          <div className="transform scale-90 hover:scale-95 transition-transform">
            <div className="bg-[linear-gradient(142deg,rgba(153,78,204,1)_3%,rgba(62,24,122,1)_100%)] rounded-3xl p-6 text-white flex flex-col h-full">
              <div className="bg-white text-black w-fit px-6 py-2 rounded-full font-bold mb-6 mx-auto">
                Starter Program
              </div>
              <div className="text-center mb-6">
                <span className="text-2xl">$</span>
                <span className="text-8xl font-bold">299</span>
              </div>
              <div className="space-y-2 text-center flex-grow">
                <p>Live Sessions (2-months)</p>
                <p>Hands-on Projects</p>
                <p>Certifications</p>
                <p>Mentor Guidance</p>
                <p>Recorded Sessions</p>
                <p>1 Minor Project</p>
                <p>1 Major Project</p>
                <p>Course Completion Certificate</p>
              </div>
              <div className="border-t border-white/30 my-6"></div>
              <button className="bg-transparent border-2 border-white text-white rounded-full py-3 px-6 font-bold hover:bg-white/10 transition-all mx-auto block">
                CHOOSE PLAN
              </button>
            </div>
          </div>

          {/* Middle Plan (Larger) */}
          <div className="transform scale-105 hover:scale-110 transition-transform">
            <div className="bg-[linear-gradient(142deg,rgba(153,78,204,1)_3%,rgba(62,24,122,1)_100%)] rounded-3xl p-6 text-white flex flex-col h-full">
              <div className="bg-white text-black w-fit px-6 py-2 rounded-full font-bold mb-6 mx-auto">
                Advanced Program
              </div>
              <div className="text-center mb-6">
                <span className="text-2xl">$</span>
                <span className="text-8xl font-bold">699</span>
              </div>
              <div className="space-y-2 text-center flex-grow">
                <p>Live Sessions (2-months)</p>
                <p>Hands-on Projects</p>
                <p>Certifications</p>
                <p>Mentor Guidance</p>
                <p>Recorded Sessions</p>
                <p>1 Minor Project</p>
                <p>1 Major Project</p>
                <p>Course Completion Certificate</p>
                <p>Microsoft Certification</p>
                <p>Doubt Clearing Sessions</p>
                <p>Placement Assistance</p>
              </div>
              <div className="border-t border-white/30 my-6"></div>
              <button className="bg-transparent border-2 border-white text-white rounded-full py-3 px-6 font-bold hover:bg-white/10 transition-all mx-auto block">
                CHOOSE PLAN
              </button>
            </div>
          </div>

          {/* Right Plan (Smaller) */}
          <div className="transform scale-90 hover:scale-95 transition-transform">
            <div className="bg-[linear-gradient(142deg,rgba(153,78,204,1)_3%,rgba(62,24,122,1)_100%)] rounded-3xl p-6 text-white flex flex-col h-full">
              <div className="bg-white text-black w-fit px-6 py-2 rounded-full font-bold mb-6 mx-auto">
                Mastery Program
              </div>
              <div className="text-center mb-6">
                <span className="text-2xl">$</span>
                <span className="text-8xl font-bold">999</span>
              </div>
              <div className="space-y-2 text-center flex-grow">
                <p>Live Sessions (2-months)</p>
                <p>Hands-on Projects</p>
                <p>Certifications</p>
                <p>Mentor Guidance</p>
                <p>Recorded Sessions</p>
                <p>1 Minor Project</p>
                <p>1 Major Project</p>
                <p>Course Completion Certificate</p>
                <p>Microsoft Certification</p>
                <p>Doubt Clearing Sessions</p>
                <p>Placement Assistance</p>
                <p>Mock Interview</p>
              </div>
              <div className="border-t border-white/30 my-6"></div>
              <button className="bg-transparent border-2 border-white text-white rounded-full py-3 px-6 font-bold hover:bg-white/10 transition-all mx-auto block">
                CHOOSE PLAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

export default function CoreSection() {
  return (
    <section className="py-30 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1E3A8A]">
          Core Transformation Programs
        </h2>

        <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center mb-16">

          {[
            "Leadership Identity Shift Programs",
            "Behavioral Pattern Transformation Interventions",
            "CXO Coaching - Eagle Shift Framework",
            "Peak Performance Acceleration",
            "Emotional Pattern Rewiring for Employees",
          ].map((item, i) => (

            <div
              key={i}
              className="group w-[220px] p-6 rounded-2xl bg-white
              shadow-md transition-all duration-500
              hover:-translate-y-3 hover:shadow-xl
              border border-[#1E3A8A]/10"
            >

              <h3 className="text-sm font-semibold text-[#1E3A8A] mb-6">
                {item}
              </h3>

              <Link href="/core-details">
                <span className="text-xs font-semibold text-[#1E3A8A] underline hover:text-blue-600">
                  Learn More →
                </span>
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
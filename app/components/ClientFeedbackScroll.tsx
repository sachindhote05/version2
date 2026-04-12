"use client";

import { useEffect, useState } from "react";

const companies = [
  {
    name: "Boomi",
    logo: "/logos/logo1.png",
    feedback: "/feedback/feed1.jpg",
  },
  {
    name: "Xitadel",
    logo: "/logos/logo4.png",
    feedback: "/feedback/feed2.jpg",
  },
  {
    name: "TDPS",
    logo: "/logos/logo2.png",
    feedback: "/feedback/feed3.jpg",
  },
  {
    name: "Protectron",
    logo: "/logos/logo3.png",
    feedback: "/feedback/feed4.jpg",
  },
  {
    name: "Boomi",
    logo: "/logos/logo1.png",
    feedback: "/feedback/feed5.jpg",
  },
  {
    name: "Boomi",
    logo: "/logos/logo1.png",
    feedback: "/feedback/feed6.jpg",
  },
  {
    name: "Boomi",
    logo: "/logos/logo1.png",
    feedback: "/feedback/feed7.jpg",
  },
  {
    name: "Boomi",
    logo: "/logos/logo1.png",
    feedback: "/feedback/feed8.jpg",
  },
  {
    name: "Boomi",
    logo: "/logos/logo1.png",
    feedback: "/feedback/feed9.jpg",
  },
  {
    name: "Boomi",
    logo: "/logos/logo1.png",
    feedback: "/feedback/feed0.jpg",
  },
  
];

export default function ClientFeedbackScroll() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1E3A8A] mb-16">
          What Clients Say
        </h2>

        {/* Auto Scroll Row */}
        <div className="relative w-full overflow-hidden">

          <div
            className={`flex gap-8 w-max animate-marquee ${
              paused ? "paused" : ""
            }`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[...companies, ...companies].map((item, i) => (
             <div
  key={i}
  className="min-w-[240px] bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
>
  <img
    src={item.feedback}
    alt={item.name}
    className="w-full h-[220px] object-cover"
  />

  <div className="p-3 flex items-center gap-3">
    <img
      src={item.logo}
      alt={item.name}
      className="w-10 h-10 object-contain rounded-lg bg-gray-50 p-1"
    />

    <div>
      <h3 className="font-medium text-sm text-[#1E3A8A]">
        {item.name}
      </h3>
      <p className="text-xs text-gray-500">
        Verified Feedback
      </p>
    </div>
  </div>
</div>
            ))}
          </div>

        </div>

      </div>

      {/* CSS */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .paused {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
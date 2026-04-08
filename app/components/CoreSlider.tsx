"use client";

import { useEffect, useState } from "react";

const cards = [
  {
    img: "/images/core1.jpg",
    title: "Leadership Identity Shift Programs",
    link: "/leadership",
  },
  {
    img: "/images/core2.jpg",
    title: "Behavioral Pattern Transformation Interventions",
    link: "/behavior",
  },
  {
    img: "/images/core3.jpg",
    title: "CXO Coaching – Eagle Shift Framework",
    link: "/cxo",
  },
  {
    img: "/images/core4.jpg",
    title: "Peak Performance Acceleration",
    link: "/performance",
  },
  {
    img: "/images/core5.jpg",
    title: "Emotional Pattern Rewiring for Employees",
    link: "/emotional",
  },
];

export default function CoreSlider() {
  const [active, setActive] = useState(0);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // 🔥 ROTATE ARRAY
  const visibleCards = [
    ...cards.slice(active),
    ...cards.slice(0, active),
  ];

  return (
    <div className="relative flex justify-center items-center py-16">

      

      {/* SLIDER */}
      <div className="flex gap-6 items-center transition-all duration-700 ease-in-out">

        {visibleCards.map((item, i) => {
          const isCenter = i === 2;

          return (
            <div
              key={i}
              className={`transition-all duration-500 ease-in-out cursor-pointer
              ${
                isCenter
                  ? "scale-110 opacity-100 z-10"
                  : "scale-90 opacity-40"
              }`}
              onClick={() => setActive((active + i) % cards.length)} // 👈 click to focus
            >
              <div className="w-[260px] bg-white rounded-2xl shadow-xl overflow-hidden">

                <img
                  src={item.img}
                  className="h-40 w-full object-cover"
                />

                <div className="p-5 text-center">
                  <h3 className="text-[#1E3A8A] font-semibold">
                    {item.title}
                  </h3>

                  {/* ✅ WORKING BUTTON */}
                  <a href={item.link}>
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                      Learn More →
                    </button>
                  </a>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      
    </div>
  );
}
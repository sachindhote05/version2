"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "POSH E-learning Modules",
    shortDesc: "(Licensing & Custom Development)",
    outcomes: ["Better compliance", "Scalable learning", "Cost effective"],
    gradient: "from-blue-500 to-cyan-400",
    icon: <span>💻</span>,
    link: "/elearning",
  },
  {
    id: 2,
    title: "Mindset Reset Programs",
    shortDesc: "Build growth mindset & performance thinking",
    outcomes: ["Growth mindset", "Better thinking", "High performance"],
    gradient: "from-emerald-500 to-teal-400",
    icon: <span>🧠</span>,
    link: "/mindset",
  },
  {
    id: 3,
    title: "Emotional Regulation Modules",
    shortDesc: "Develop emotional control & resilience",
    outcomes: ["Less stress", "Better control", "Strong mindset"],
    gradient: "from-purple-500 to-pink-400",
    icon: <span>❤️</span>,
    link: "/emotional",
  },
  {
    id: 4,
    title: "Growth Skillset Mastery Framework",
    shortDesc: "Enhance skills for long-term success",
    outcomes: ["Skill growth", "Better execution", "Career boost"],
    gradient: "from-orange-500 to-amber-400",
    icon: <span>🚀</span>,
    link: "/skills",
  },
];

export default function CoreSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) nextSlide();
    else if (info.offset.x > 50) prevSlide();
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) { // ✅ ONLY CHANGE
      const index = (activeIndex + i + services.length) % services.length;
      cards.push({ service: services[index], position: i });
    }
    return cards;
  };

  return (
    <section className="relative py-16 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-hidden">

      <div className="text-center mb-20 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Digital <span className="text-cyan-400">Learning & Capability Systems</span>
        </h2>
      </div>

    <div className="relative min-h-[360px] md:min-h-[420px] mt-10 md:mt-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
       <motion.div className="flex justify-center pt-10 md:pt-14"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence>
            {getVisibleCards().map(({ service, position }) => {
              const isActive = position === 0;

              return (
                <motion.div
                  key={service.id}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    x: position * 260, // ✅ SAME AS OLD
                    opacity: isActive ? 1 : 0.5,
                  }}
                  className="absolute w-[285px]" // ✅ SAME
                >
                 <div className="min-h-[300px] flex flex-col justify-between p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/10 text-white">
                    {/* ICON */}
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl bg-gradient-to-r ${service.gradient}`}>
                      {service.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className="font-bold text-xl mb-2">
                      {service.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm text-slate-300">
                      {service.shortDesc}
                    </p>

                    {/* OUTCOMES */}
                    <ul className="mt-3 text-sm text-slate-300 space-y-1">
                      {service.outcomes.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>

                    {/* BUTTON */}
                    <div className="mt-auto pt-4">
                      <Link href={service.link}>
                        <button className="w-full bg-cyan-400 text-black px-3 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition">
                          Learn More →
                        </button>
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
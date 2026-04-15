"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  shortDesc: string;
    outcomes: string[];
  icon: React.ReactNode;
  gradient: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Leadership Identity Shift Programs",
    shortDesc: "Transform leadership identity and ownership mindset.",
   outcomes: [
      "Stronger leadership presence",
      "Better decision making",
      "Ownership mindset",
    ],
    icon: <span>🧠</span>,
    
    gradient: "from-blue-500 to-cyan-400",
    link: "/leadership",
  },
  {
    id: 2,
    title: "Behavioral Pattern Transformation",
    shortDesc: "Break limiting behaviors and build habits.",
    outcomes: [
      "Improved self-awareness",
      "Stronger discipline",
      "Sustainable behavior change",
    ],
    icon: <span>🔄</span>,
    gradient: "from-emerald-500 to-teal-400",
    link: "/behavior",
  },
  {
    id: 3,
    title: "CXO Coaching – Eagle Shift",
    shortDesc: "High-level transformation for leaders.",
    outcomes: [
      "Enhanced strategic thinking",
      "Improved executive presence",
      "Stronger decision-making capabilities",
    ],
    icon: <span>🦅</span>,
    gradient: "from-purple-500 to-pink-400",
    link: "/cxo",
  },
  {
    id: 4,
    title: "Peak Performance Acceleration",
    shortDesc: "Unlock team performance.",
    outcomes: [
      "Enhanced team collaboration",
      "Improved productivity",
      "Sustainable performance gains",
    ],
    icon: <span>🚀</span>,
    gradient: "from-orange-500 to-amber-400",
    link: "/performance",
  },
  {
    id: 5,
    title: "Emotional Pattern Rewiring",
    shortDesc: "Build emotional resilience.",
    outcomes: [
      "Enhanced emotional intelligence",
      "Improved stress management",
      "Stronger resilience",
    ],
    icon: <span>💡</span>,
    gradient: "from-rose-500 to-red-400",
    link: "/emotional",
  },
];

export default function CoreSlider() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  useEffect(() => {
    const handleResize = () => {
  if (typeof window !== "undefined") {
    setIsMobile(window.innerWidth < 768);
  }
};

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + services.length) % services.length;
      cards.push({ service: services[index], position: i });
    }
    return cards;
  };

  return (
    <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-hidden">

    <div className="text-center mb-20 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Core <span className="text-cyan-400">Transformation Programs</span>
        </h2>
      </div>

     <div className="relative min-h-[360px] md:min-h-[420px] mt-10 md:mt-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex justify-center pt-10 md:pt-14"
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
                   
x: position * 260,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  className="absolute w-[260px] md:w-[300px]"
                >
                <div className="h-[360px] flex flex-col justify-between rounded-2xl bg-white/10 backdrop-blur border border-white/10 text-white p-5">
                  <div className="flex-1 space-y-4">
                    {/* ICON */}
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl bg-gradient-to-r ${service.gradient}`}>
                      {service.icon}
                    </div>

                    {/* TITLE */}
                   <h3 className="font-bold text-xl mb-2 line-clamp-2">
                      {service.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm text-slate-300 line-clamp-2">
                      {service.shortDesc}
                    </p>

                    <ul className="mt-3 text-sm text-slate-300 space-y-1">
    {service.outcomes.map((item, i) => (
      <li key={i} className="line-clamp-1">• {item}</li>
    ))}
  </ul>
                  </div>

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
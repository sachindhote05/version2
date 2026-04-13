"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";


 const services = [
  {
    id: 1,
    title: "POSH E-learning Modules",
    desc: "(Licensing & Custom Development)",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Mindset Reset Programs",
    desc: "Build growth mindset & performance thinking",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: 3,
    title: "Emotional Regulation Modules",
    desc: "Develop emotional control & resilience",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    id: 4,
    title: "Growth Skillset Mastery Framework",
    desc: "Enhance skills for long-term success",
    gradient: "from-orange-500 to-amber-400",
  },
];

export default function DigitalSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 2500);
    return () => clearInterval(interval);
  }, [next]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  // ✅ ONLY 3 VISIBLE CARDS
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + services.length) % services.length;
      cards.push({ ...services[index], position: i });
    }
    return cards;
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-visible">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
        Digital <span className="text-cyan-400">Learning & Capability Systems</span>
      </h2>

      {/* Slider */}
      <div
        className="relative min-h-[320px] flex items-center justify-center"
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        <motion.div
          className="flex items-center justify-center h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence>
            {getVisibleCards().map((card) => {
              const isActive = card.position === 0;

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    scale: isActive ? 1.08 : 0.85,
                    x: card.position * 320,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 10 - Math.abs(card.position),
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[300px]"
                >
                  <div
                    className={`p-6 rounded-2xl border text-white transition-all
                    ${
                      isActive
                        ? "bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    {/* Number */}
                    <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400">
                      {String(card.id).padStart(2, "0")}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg mb-2">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300">
                      {card.desc}
                    </p>

                    <button className="mt-4 text-sm text-cyan-400">
                      Learn More →
                    </button>
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
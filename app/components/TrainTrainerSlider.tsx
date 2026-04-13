"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const services = [
  {
    id: 1,
    title: "POSH Train the Trainer",
    desc: "Master engaging training delivery",
    outcomes: ["Better sessions", "Audience engagement", "Confidence"],
    gradient: "from-blue-500 to-cyan-400",
    icon: "🎤",
  },
  {
    id: 2,
    title: " Psychological Safety Facilitator Training",
    desc: "Deliver impactful presentations",
    outcomes: ["Clear communication", "Strong presence", "Better impact"],
    gradient: "from-emerald-500 to-teal-400",
    icon: "📊",
  },
  {
    id: 3,
    title: " Emotional Intelligence Trainer Certification",
    desc: "Structure effective training content",
    outcomes: ["Better learning", "Structured delivery", "Clarity"],
    gradient: "from-purple-500 to-pink-400",
    icon: "📘",
  },
  {
    id: 4,
    title: " Mental Wellness Facilitator Training",
    desc: "Keep participants active & involved",
    outcomes: ["High interaction", "Better retention", "Energy"],
    gradient: "from-orange-500 to-amber-400",
    icon: "🔥",
  },
  {
    id: 5,
    title: "Workplace Ethics & Conduct TTT",
    desc: "Measure and improve learning outcomes",
    outcomes: ["Clear feedback", "Performance tracking", "Improvement"],
    gradient: "from-rose-500 to-red-400",
    icon: "✅",
  },
  {
    id: 6,
    title: " Leadership & Manager Capability TTT",
    desc: "Become a certified professional trainer",
    outcomes: ["Certification", "Credibility", "Career growth"],
    gradient: "from-indigo-500 to-blue-400",
    icon: "🏆",
  },
];

export default function TrainTrainerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(next, 2500);
    return () => clearInterval(interval);
  }, [next]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  // ✅ 5 CARDS VISIBLE (core jaisa)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + services.length) % services.length;
      cards.push({ ...services[index], position: i });
    }
    return cards;
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-hidden">

      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        Train The Trainer <span className="text-cyan-400">Programs</span>
      </h2>

      {/* SLIDER */}
      <div className="relative h-[360px] flex items-center justify-center">

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
                    scale: isActive ? 1.1 : 0.8,
                    x: card.position * 260,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 10 - Math.abs(card.position),
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[300px]"
                >
                  {/* CARD */}
                  <div
                    className={`p-6 rounded-2xl border text-white flex flex-col h-[300px]
                    ${
                      isActive
                        ? "bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20"
                        : "bg-white/5 border-white/10"
                    }`}
                  >

                    {/* ICON */}
                    <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r ${card.gradient}`}>
                      <span className="text-xl">{card.icon}</span>
                    </div>

                    {/* TITLE */}
                    <h3 className="font-bold text-lg mb-2">
                      {card.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm text-slate-300 mb-2">
                      {card.desc}
                    </p>

                    {/* OUTCOMES */}
                    <ul className="text-xs text-slate-300 mb-3 space-y-1">
                      {card.outcomes.map((o, i) => (
                        <li key={i}>• {o}</li>
                      ))}
                    </ul>

                    {/* BUTTON */}
                    <div className="mt-auto pt-4">
                      <button className="w-full bg-cyan-400 text-black px-3 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition">
                        Learn More →
                      </button>
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
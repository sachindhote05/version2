"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { FaShieldAlt, FaUsers, FaBalanceScale, FaHeartbeat, FaHardHat, FaBook } from "react-icons/fa";

interface Service {
  id: number;
  title: string;
  shortDesc: string;
  outcomes: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "POSH Implementation & Training",
    shortDesc: "Complete POSH compliance setup.",
    outcomes: ["Legal compliance", "Safe workplace", "Clear policies"],
    icon: <FaShieldAlt />,
  },
  {
    id: 2,
    title: "POSCO Awareness Programs",
    shortDesc: "Awareness of POSCO guidelines.",
    outcomes: ["Better awareness", "Safer culture", "Reduced violations"],
    icon: <FaBook />,
  },
  {
    id: 3,
    title: "Psychological Safety",
    shortDesc: "Build inclusive environment.",
    outcomes: ["Team trust", "Open communication", "Inclusion"],
    icon: <FaUsers />,
  },
  {
    id: 4,
    title: "Workplace Ethics",
    shortDesc: "Strengthen ethical behavior.",
    outcomes: ["Better ethics", "Less conflict", "Professional conduct"],
    icon: <FaBalanceScale />,
  },
  {
    id: 5,
    title: "Mental Wellness",
    shortDesc: "Support employee wellbeing.",
    outcomes: ["Less stress", "Better engagement", "Healthy teams"],
    icon: <FaHeartbeat />,
  },
  {
    id: 6,
    title: "Physical Safety",
    shortDesc: "Ensure workplace safety.",
    outcomes: ["Fewer accidents", "Safety awareness", "Compliance"],
    icon: <FaHardHat />,
  },
];

export default function ComplianceSlider() {
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
    const interval = setInterval(nextSlide, 3000);
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
    <section className="relative py-16 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Compliance <span className="text-cyan-400">& Workplace Safety</span>
        </h2>
      </div>

      <div
        className="relative h-[380px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex items-center justify-center h-full"
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
                    x: position * 300,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 10,
                  }}
                  className="absolute w-[320px]"
                >
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/10 text-white h-[320px] flex flex-col justify-between">

                    {/* ICON */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-xl mb-4">
                      {service.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className="font-bold text-xl mb-2">
                      {service.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-lg text-slate-300 mb-3">
                      {service.shortDesc}
                    </p>

                    {/* OUTCOMES */}
                    <ul className="text-sm text-slate-200 space-y-1 mb-4">
                      {service.outcomes.map((o, i) => (
                        <li key={i}>✔ {o}</li>
                      ))}
                    </ul>

                    {/* BUTTON */}
                    <button className="mt-auto bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition">
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
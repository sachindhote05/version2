"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface Service {
  id: number;
  title: string;
  shortDesc: string;
  outcomes: string[];
  icon: React.ReactNode;
  gradient: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "POSH: End-to-End Implementation & Training",
    shortDesc: "Complete POSH compliance setup and training programs.",
    outcomes: [
      "Legal compliance ensured",
      "Safe workplace environment",
      "Clear policies & procedures",
    ],
    icon: <div className="text-white text-xl">1</div>,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "POSCO Awareness Programs",
    shortDesc: "Awareness programs focused on POSCO guidelines.",
    outcomes: [
      "Improved awareness",
      "Safer workplace culture",
      "Reduced violations",
    ],
    icon: <div className="text-white text-xl">2</div>,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: 3,
    title: "Psychological Safety & Inclusive Culture Training",
    shortDesc: "Build a safe and inclusive work environment.",
    outcomes: [
      "Better team trust",
      "Inclusive culture",
      "Open communication",
    ],
    icon: <div className="text-white text-xl">3</div>,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    id: 4,
    title: "Workplace Ethics & Conduct Programs",
    shortDesc: "Strengthen ethical behavior across teams.",
    outcomes: [
      "Improved ethics",
      "Reduced conflicts",
      "Better conduct",
    ],
    icon: <div className="text-white text-xl">4</div>,
    gradient: "from-orange-500 to-amber-400",
  },
  {
    id: 5,
    title: "Mental Wellness Interventions",
    shortDesc: "Support employee mental well-being.",
    outcomes: [
      "Reduced stress",
      "Better engagement",
      "Healthier workforce",
    ],
    icon: <div className="text-white text-xl">5</div>,
    gradient: "from-rose-500 to-red-400",
  },
  {
    id: 6,
    title: "Physical Safety Trainings",
    shortDesc: "Ensure physical safety practices at workplace.",
    outcomes: [
      "Reduced accidents",
      "Safety awareness",
      "Compliance with standards",
    ],
    icon: <div className="text-white text-xl">6</div>,
    gradient: "from-indigo-500 to-blue-400",
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
    <section className="relative py-12 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-hidden">

        <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Compliance  <span className="text-cyan-400">& Workplace safety</span>
        </h2>
      </div>
      <div
        className="relative h-[260px]"
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
                    scale: isActive ? 1 : 0.8,
                    x: position * 240,
                    opacity: isActive ? 1 : 0.5,
                      zIndex: isActive ? 20 : 10 - Math.abs(position),

                  }}
                  className="absolute w-[260px]"
                >
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/10 text-white">
                    
                    <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r ${service.gradient}`}>
                      {service.icon}
                    </div>

                    <h3 className="font-bold text-lg mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300">
                      {service.shortDesc}
                    </p>
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
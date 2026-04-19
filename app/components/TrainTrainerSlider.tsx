"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "POSH Train the Trainer",
    shortDesc: "Master engaging training delivery",
    outcomes: ["Better sessions", "Audience engagement", "Confidence"],
    gradient: "from-blue-500 to-cyan-400",
    icon: <span>🎤</span>,
    link: "/posh-ttt",
  },
  {
    id: 2,
    title: "Psychological Safety Facilitator Training",
    shortDesc: "Deliver impactful presentations",
    outcomes: ["Clear communication", "Strong presence", "Better impact"],
    gradient: "from-emerald-500 to-teal-400",
    icon: <span>📊</span>,
    link: "/psychological-ttt",
  },
  {
    id: 3,
    title: "Emotional Intelligence Trainer Certification",
    shortDesc: "Structure effective training content",
    outcomes: ["Better learning", "Structured delivery", "Clarity"],
    gradient: "from-purple-500 to-pink-400",
    icon: <span>📘</span>,
    link: "/ei-ttt",
  },
  {
    id: 4,
    title: "Mental Wellness Facilitator Training",
    shortDesc: "Keep participants active & involved",
    outcomes: ["High interaction", "Better retention", "Energy"],
    gradient: "from-orange-500 to-amber-400",
    icon: <span>🔥</span>,
    link: "/wellness-ttt",
  },
  {
    id: 5,
    title: "Workplace Ethics & Conduct TTT",
    shortDesc: "Measure and improve learning outcomes",
    outcomes: ["Clear feedback", "Performance tracking", "Improvement"],
    gradient: "from-rose-500 to-red-400",
    icon: <span>✅</span>,
    link: "/ethics-ttt",
  },
  {
    id: 6,
    title: "Leadership & Manager Capability TTT",
    shortDesc: "Become a certified professional trainer",
    outcomes: ["Certification", "Credibility", "Career growth"],
    gradient: "from-indigo-500 to-blue-400",
    icon: <span>🏆</span>,
    link: "/leadership-ttt",
  },
];

export default function TrainTrainerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768);
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(nextSlide, 3200);
    return () => window.clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleDragStart = () => setIsPaused(true);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipePower = info.offset.x + info.velocity.x * 0.22;
    const threshold = 110;

    if (swipePower < -threshold) {
      nextSlide();
    } else if (swipePower > threshold) {
      prevSlide();
    }

    setIsPaused(false);
  };

  const visibleCards = () => {
  return [-2, -1, 0, 1, 2].map((position) => {
      const index = (activeIndex + position + services.length) % services.length;
      return { service: services[index], position };
    });
  };

  const cardOffset = isMobile ? 140 : 240;

  return (
    <section className="relative py-16 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-hidden">
      <div className="text-center mb-20 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Train The Trainer <span className="text-cyan-400">Programs</span>
        </h2>
      </div>

      <div
        className="relative min-h-[360px] md:min-h-[420px] mt-10 md:mt-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="relative mx-auto flex h-full w-full max-w-[1100px] items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.14}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
          initial={false}
        >
          {visibleCards().map(({ service, position }) => {
            const isActive = position === 0;

            return (
              <motion.div
                key={service.id}
               className="absolute top-0 left-1/2 h-full w-[260px] md:w-[280px] -translate-x-1/2"
               animate={{
 scale: isActive ? 1 : 0.85,
                   
x: position * 260,
opacity: isActive ? 1 : 0.4,
}}
                transition={{ duration: 0.45, ease: "easeInOut" }}
               
style={{ zIndex: 10 - Math.abs(position) }}
                whileTap={{ scale: 0.98 }}
              >
               <div className={`h-[360px] flex flex-col justify-between rounded-3xl p-6 text-white 
${isActive ? "bg-white/20 border border-white/20 shadow-2xl scale-105" : "bg-white/10 border border-white/10"}
backdrop-blur transition-all duration-500`}>
                  <div className="flex-1 space-y-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl bg-gradient-to-r ${service.gradient}`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 line-clamp-2">{service.title}</h3>
                      <p className="text-sm text-slate-300 line-clamp-2">{service.shortDesc}</p>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {service.outcomes.map((item, i) => (
                        <li key={i} className="line-clamp-1">• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4">
                    <Link href="trainer-details">
                      <button className={`w-full rounded-2xl px-4 py-3 text-sm font-semibold transition
${isActive 
  ? "bg-cyan-400 text-black hover:bg-cyan-300" 
  : "bg-white/20 text-white hover:bg-white/30"
}`}>
                        Learn More →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

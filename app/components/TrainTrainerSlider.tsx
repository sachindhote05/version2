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
    title:" Workplace Ethics & Conduct ",
    shortDesc: "Build certified trainers across key domains.",
    outcomes: [
      "Certified internal trainers",
      "Scalable learning model",
      "Consistent training delivery",
    ],
    icon: <span>🎓</span>,
    gradient: "from-blue-500 to-cyan-400",
    link: "/ttt",
  },
  {
    id: 2,
    title: "POSH Train the Trainer",
    shortDesc: "Enable POSH trainers within organization.",
    outcomes: [
      "Internal POSH experts",
      "Compliance training capability",
      "Sustainable awareness programs",
    ],
    icon: <span>⚖️</span>,
    gradient: "from-emerald-500 to-teal-400",
    link: "/posh-ttt",
  },
  {
    id: 3,
    title: "Psychological Safety Facilitator",
    shortDesc: "Train facilitators for safe workplace culture.",
    outcomes: [
      "Open communication culture",
      "Trust building",
      "Better team collaboration",
    ],
    icon: <span>🧩</span>,
    gradient: "from-purple-500 to-pink-400",
    link: "/psych-safety",
  },
  {
    id: 4,
    title: "Emotional Intelligence Trainer",
    shortDesc: "Develop EI trainers across teams.",
    outcomes: [
      "Improved empathy",
      "Better leadership skills",
      "Emotional awareness",
    ],
    icon: <span>💡</span>,
    gradient: "from-orange-500 to-amber-400",
    link: "/ei",
  },
  {
    id: 5,
    title: "Mental Wellness Facilitator",
    shortDesc: "Create mental wellness champions.",
    outcomes: [
      "Stress reduction",
      "Employee wellbeing",
      "Positive work environment",
    ],
    icon: <span>🧘</span>,
    gradient: "from-rose-500 to-red-400",
    link: "/wellness",
  },
  {
    id: 6,
    title: "Leadership & Manager Capability TTT",
    shortDesc: "Train leaders to train future leaders.",
    outcomes: [
      "Stronger leadership pipeline",
      "Better decision making",
      "High-performing managers",
    ],
    icon: <span>🚀</span>,
    gradient: "from-indigo-500 to-blue-400",
    link: "/leadership-ttt",
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
    <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-hidden">

    <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
         Train the <span className="text-cyan-400">Trainer</span>
        </h2>
      </div>

     <div className="relative min-h-[320px] md:min-h-[360px] mt-6 md:mt-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex justify-center pt-6 md:pt-8"
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
                <div className="h-[320px] flex flex-col justify-between rounded-2xl bg-white/10 backdrop-blur border border-white/10 text-white p-5">
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
  <Link
    href={{
      pathname: "/core-details",
      query: {
        title: service.title,
        desc: service.shortDesc,
        outcomes: JSON.stringify(service.outcomes),
      },
    }}
  >
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
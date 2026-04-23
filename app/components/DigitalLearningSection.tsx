"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
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
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(nextSlide, 2500);
    return () => window.clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -80) {
      nextSlide();
    } else if (info.offset.x > 80) {
      prevSlide();
    }
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
    <section className="relative py-12 md:py-16 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-hidden">

      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Digital <span className="text-cyan-400">Learning & Capability Systems</span>
        </h2>
      </div>

      <div
        className="relative min-h-[320px] md:min-h-[360px] mt-6 md:mt-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
  className="relative mx-auto flex h-full items-center justify-center"
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={handleDragEnd}
  dragElastic={0.2}      // 👈 ADD THIS
  dragMomentum={false}   // 👈 ADD THIS
>
          {getVisibleCards().map(({ service, position }) => {
            const isActive = position === 0;
            const offset = isMobile ? 170 : 260;

            return (
              <motion.div
                key={service.id}
                className="absolute top-0 left-1/2 h-full w-[260px] md:w-[285px] -translate-x-1/2"
                animate={{
                  x: position * offset,
                  scale: isActive ? 1 : 0.8,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                whileTap={{ scale: 0.98 }}
                style={{ zIndex: isActive ? 20 : 10 }}
              >
                <div className="h-[320px] flex flex-col justify-between rounded-2xl bg-white/10 backdrop-blur border border-white/10 text-white p-5">
                  <div className="flex-1 space-y-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl bg-gradient-to-r ${service.gradient}`}>
                      {service.icon}
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-2 line-clamp-2">{service.title}</h3>
                      <p className="text-sm text-slate-300 line-clamp-2">{service.shortDesc}</p>
                      <ul className="mt-3 text-sm text-slate-300 space-y-1">
                        {service.outcomes.map((item, i) => (
                          <li key={i} className="line-clamp-1">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <Link href={service.link}>
                      <button className="w-full bg-cyan-400 text-black px-3 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition duration-200">
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
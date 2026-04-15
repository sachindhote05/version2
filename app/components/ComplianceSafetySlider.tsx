"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";
import { FaShieldAlt, FaUsers, FaBalanceScale, FaHeartbeat, FaHardHat, FaBook } from "react-icons/fa";

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
    title: "POSH Implementation & Training",
    shortDesc: "Complete POSH compliance setup.",
    outcomes: ["Legal compliance", "Safe workplace", "Clear policies"],
    icon: <FaShieldAlt />,
    gradient: "from-blue-500 to-cyan-400",
    link: "/posh",
  },
  {
    id: 2,
    title: "POSCO Awareness Programs",
    shortDesc: "Awareness of POSCO guidelines.",
    outcomes: ["Better awareness", "Safer culture", "Reduced violations"],
    icon: <FaBook />,
    gradient: "from-emerald-500 to-teal-400",
    link: "/posco",
  },
  {
    id: 3,
    title: "Psychological Safety",
    shortDesc: "Build inclusive environment.",
    outcomes: ["Team trust", "Open communication", "Inclusion"],
    icon: <FaUsers />,
    gradient: "from-purple-500 to-pink-400",
    link: "/psychological",
  },
  {
    id: 4,
    title: "Workplace Ethics",
    shortDesc: "Strengthen ethical behavior.",
    outcomes: ["Better ethics", "Less conflict", "Professional conduct"],
    icon: <FaBalanceScale />,
    gradient: "from-orange-500 to-amber-400",
    link: "/ethics",
  },
  {
    id: 5,
    title: "Mental Wellness",
    shortDesc: "Support employee wellbeing.",
    outcomes: ["Less stress", "Better engagement", "Healthy teams"],
    icon: <FaHeartbeat />,
    gradient: "from-rose-500 to-red-400",
    link: "/wellness",
  },
  {
    id: 6,
    title: "Physical Safety",
    shortDesc: "Ensure workplace safety.",
    outcomes: ["Fewer accidents", "Safety awareness", "Compliance"],
    icon: <FaHardHat />,
    gradient: "from-indigo-500 to-blue-400",
    link: "/safety",
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


 


 // ✅ mobile detect
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


// ✅ auto slider

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
    <section className="relative py-16 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] overflow-hidden">

      <div className="text-center mb-20 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Compliance <span className="text-cyan-400">& Workplace Safety</span>
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
                 x: position * (isMobile ? 180 : 260),
                    opacity: isActive ? 1 : 0.5,
                  }}
                  className="absolute w-[280px] md:w-[300px]"
                >
                <div className="h-[360px] flex flex-col justify-between rounded-2xl bg-white/10 backdrop-blur border border-white/10 text-white p-5">
                  <div className="flex-1 space-y-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl bg-gradient-to-r ${service.gradient}`}>
                      {service.icon}
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-2 line-clamp-2">
                        {service.title}
                      </h3>

                      <p className="text-sm text-slate-300 line-clamp-2">
                        {service.shortDesc}
                      </p>
                    </div>

                    <ul className="mt-3 text-sm text-slate-300 space-y-1">
                      {service.outcomes.map((item, i) => (
                        <li key={i} className="line-clamp-1">• {item}</li>
                      ))}
                    </ul>
                  </div>

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
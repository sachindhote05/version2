"use client";

import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroContent() {
  const fullText = "Empowering Minds";
  const [displayText, setDisplayText] = useState("");
  const words = useMemo(() => [
    "Lives",
    "Skills",
    "Performance",
    "Business",
    "Growth",
  ], []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(typing);
      }
    }, 80);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative pt-24 pb-40 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-white">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-extrabold flex items-baseline gap-3">
            <span className="text-white">Elevating</span>

            <span className="relative h-[50px] overflow-hidden">
              <span
                key={index}
                className="block transition-all duration-700 ease-in-out translate-y-0"
              >
                <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                  {words[index]}
                </span>
              </span>
            </span>
          </h2>

          <p className="mt-6 text-indigo-100 max-w-xl">
            Transform your organization through strategic leadership development, innovative learning solutions, and sustainable organizational change. We empower teams to achieve excellence.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center">
            <svg className="w-48 h-48 text-white/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

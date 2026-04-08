"use client";

import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesSlider from "./components/ServicesSlider";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";
import CoreSection from "./components/CoreSection";




export default function Home() {

 const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  const fullText = "Empowering Minds";
  const [displayText, setDisplayText] = useState("");
  const words = useMemo(() => [
    "Lives",
    "Skills",
    "Performance",
    "Business",
    "Growth",
  ], []);
  const videos = useMemo<string[]>(() => [
  "/sample.mp4"
], []);

  const [index, setIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

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

  useEffect(() => {
    if (videos.length === 0) return;
    
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <main className="overflow-x-hidden">

      

      

      {/* 🔥 HERO SECTION */}
<div className="bg-[#1E3A8A] text-white pt-40 pb-20 px-6 relative overflow-hidden">

  <div className="max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Empowering Minds, Elevating Skills
    </h1>

    {/* SUBTEXT */}
    <p className="text-lg opacity-90 mb-6">
      Training and Coaching made Structured and sustainable for Businesses and Individuals
    </p>

    {/* TAGS */}
    <div className="flex flex-wrap justify-center gap-4 text-sm mb-8 opacity-90">
      <span>∞ Proven Tools</span>
      <span>⚡ Sustainable Results</span>
      <span>🌐 Simple Interventions</span>
      <span>🧠 Mind Body Neuroscience</span>
      <span>🏆 10+ Years</span>
      <span>👥 50+ clients</span>
    </div>

    {/* CTA BUTTON */}
    <button className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
      Download Brochure ☁️
    </button>

    {/* VIDEO */}
    <div className="mt-12 max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        className="w-full h-[200px] md:h-[350px]"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="Video"
        allowFullScreen
      ></iframe>
    </div>

  </div>
  
  </div>

 

  


  {/* CURVE */}
  <section className="relative py-20 bg-[#F0F5FF]">
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-[150px]"  // 👈 height badha di
      preserveAspectRatio="none"
    >
      <path
        fill="#F0F5FF"
        d="M0,200 C360,300 1080,100 1440,200 L1440,0 L0,0 Z"
      />
    </svg>
  </div>
  <div className="max-w-6xl mx-auto px-6 text-center mt-10">

    <h2 className="text-4xl font-bold mb-16 text-[#1E3A8A]">
      Why Most Training Programs Fail
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {[
        "Most training focuses on skills",
        "Real change happens at mindset level",
        "Identity drives long-term behavior",
        "That’s why results don’t sustain"
      ].map((text, i) => (

        <motion.div
  key={i}
  initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: i * 0.25 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05, y: -10 }}
  className="relative p-8 rounded-3xl
  bg-gradient-to-br from-[#EFF6FF] to-white
  border border-[#BFDBFE]
  shadow-md hover:shadow-2xl
  transition-all duration-500"
>

  {/* Glow effect */}
  <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-200/40 to-transparent blur-xl"></div>

  <div className="relative z-10">
    <p className="text-lg font-semibold text-[#1E3A8A]">
      {text}
    </p>
  </div>

</motion.div>

      ))}

    </div>

  </div>
</section>
    {/* 🔥 WHAT MAKES US DIFFERENT */}
{/* 🔥 WHAT MAKES US DIFFERENT */}
<section className="py-0 bg-transparent">
  <div className="w-full ">

   <div className="bg-gradient-to-b from-[#1E3A8A] via-[#162d6b] to-[#0f172a] shadow-md px-10 py-16 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        What Makes Us Different
      </h2>

      <p className="text-base md:text-lg leading-relaxed text-center whitespace-pre-line">
  {`We don’t just focus on skill development\n
   Our approach works at the level of mindset,
  identity, and behavioral patterns to create long-term transformation.\n
 Instead of short-term learning, we enable sustainable performance, stronger ownership, and real business impact through structured interventions.`}
</p>
    </div>

  </div>

</section>

      {/* ================= SERVICES SLIDER ================= */}
     
<div id="services" className="mt-">
  <ServicesSlider />
</div>

      {/* =================Core Transformation Programs================= */}


<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-extrabold mb-14 text-[#1E3A8A]">
      Core Transformation Programs
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

      {[
        {
          title: "Leadership Identity Shift Programs",
          img: "/images/core1.jpg"
        },
        {
          title: "Behavioral Pattern Transformation Interventions",
          img: "/images/core2.jpg"
        },
        {
          title: "CXO Coaching – Eagle Shift Framework",
          img: "/images/core3.jpg"
        },
        {
          title: "Peak Performance Acceleration",
          img: "/images/core4.jpg"
        },
        {
          title: "Emotional Pattern Rewiring for Employees",
          img: "/images/core5.jpg"
        }
      ].map((item, i) => (

        <div
          key={i}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >

          {/* IMAGE */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-40 object-cover"
          />

          {/* CONTENT */}
          <div className="p-4 flex flex-col justify-between h-[140px]">

            <h3 className="text-md font-semibold text-[#1E3A8A] leading-snug">
              {item.title}
            </h3>

            <Link href="/core-details">
              <button className="mt-3 text-sm font-semibold text-[#1E3A8A] hover:underline">
                Learn More →
              </button>
            </Link>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

      {/* ================= Compliance & Workplace Safety ================= */}
 <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-4xl font-bold text-center mb-16 text-[#1E3A8A]">
      Compliance & Workplace Safety
    </h2>

    {/* GRID (NO SCROLL) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/posh.jpg"
          alt="POSH"
          className="h-44 w-full object-cover rounded-t-2xl"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1E3A8A]">
            POSH: End-to-End Implementation & Training
          </h3>
          <button className="mt-4 text-blue-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/posco.jpg"
          alt="POSCO"
          className="h-44 w-full object-cover rounded-t-2xl"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1E3A8A]">
            POSCO Awareness Programs
          </h3>
          <button className="mt-4 text-blue-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/psychological.jpg"
          alt="Psychological Safety"
          className="h-44 w-full object-cover rounded-t-2xl"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1E3A8A]">
            Psychological Safety & Inclusive Culture Training
          </h3>
          <button className="mt-4 text-blue-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/ethics.jpg"
          alt="Ethics"
          className="h-44 w-full object-cover rounded-t-2xl"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1E3A8A]">
            Workplace Ethics & Conduct Programs
          </h3>
          <button className="mt-4 text-blue-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>
      </div>

      {/* CARD 5 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/mental.jpg"
          alt="Mental Wellness"
          className="h-44 w-full object-cover rounded-t-2xl"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1E3A8A]">
            Mental Wellness Interventions
          </h3>
          <button className="mt-4 text-blue-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>
      </div>

      {/* CARD 6 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src="/safety.jpg"
          alt="Physical Safety"
          className="h-44 w-full object-cover rounded-t-2xl"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-[#1E3A8A]">
            Physical Safety Trainings
          </h3>
          <button className="mt-4 text-blue-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* ================= E-LEARNING MODULES ================= */}
  <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-4xl font-bold text-center mb-16 text-[#1E3A8A]">
      E-learning Modules Licensing and Development
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-12 gap-8">

      {/* ===== ROW 1 (4 CARDS) ===== */}

      {[
        { img: "elearning/custom.jpg", title: "Custom Module Development" },
        { img: "elearning/licensing.jpg", title: "Content Licensing" },
        { img: "elearning/learning.jpg", title: "Interactive Learning Design" },
        { img: "elearning/lms.jpg", title: "LMS Integration" },
      ].map((item, i) => (
        <div key={i} className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <img src={item.img} className="h-40 w-full object-cover rounded-t-2xl" />
          <div className="p-5 text-center">
            <h3 className="font-semibold text-[#1E3A8A]">{item.title}</h3>
            <button className="mt-3 text-blue-600 hover:underline">Learn More →</button>
          </div>
        </div>
      ))}

      {/* ===== ROW 2 (3 CARDS CENTERED) ===== */}

      <div className="col-span-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:w-[75%] mx-auto">

          {[
            { img: "elearning/micro.jpg", title: "Microlearning Modules" },
            { img: "elearning/certification.jpg", title: "Certification Programs" },
            { img: "elearning/tracking.jpg", title: "Performance Tracking Systems" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <img src={item.img} className="h-40 w-full object-cover rounded-t-2xl" />
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#1E3A8A]">{item.title}</h3>
                <button className="mt-3 text-blue-600 hover:underline">Learn More →</button>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= TRAIN THE TRAINER ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            Train The Trainer
          </h2>

          <div className="grid md:grid-cols-5 gap-8">

            {[
              { img: "/trainer1.jpg", title: "Facilitation Skills" },
              { img: "/trainer2.jpg", title: "Presentation Mastery" },
              { img: "/trainer3.jpg", title: "Instructional Techniques" },
              { img: "/trainer4.jpg", title: "Audience Engagement" },
              { img: "/trainer5.jpg", title: "Assessment & Feedback" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold text-center px-4">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= OUR WORK ================= */}
     {/* ================= OUR WORK ================= */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
      Our Work
    </h2>

    <div className="grid md:grid-cols-5 gap-8">

      {[
        { id: "s6XEPyIUNhA", title: "Corporate Training Session" },
        { id: "KDV9nJHEt6c", title: "Leadership Workshop" },
        { id: "61d7ZAb90gY", title: "POSH Awareness Program" },
        { id: "8NDiwqv00uE", title: "Train The Trainer Event" },
        { id: "yJeMUB6BeK0", title: "E-Learning Module Demo" },
      ].map((video, i) => (
        <div
          key={i}
          className="relative group rounded-2xl overflow-hidden shadow-lg
                     transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
        >

          <div className="relative w-full h-60">

            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition flex items-center justify-center">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="red"
    className="w-8 h-8"
  >
    <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.8 4.8 12 4.8 12 4.8h0s-3.8 0-6.9.3c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.5c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.3 6.6.3s3.8 0 6.9-.3c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.5C22 9.6 21.8 8 21.8 8zM9.8 14.5V9.5l5 2.5-5 2.5z" />
  </svg>

</div>
            </div>

            {/* CLICK → YOUTUBE */}
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            ></a>

          </div>

          

        </div>
      ))}

    </div>

  </div>
</section>
      {/* ================= ABOUT FOUNDER ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/founder.jpg"
            alt="Founder"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Founder</h2>
            <h2 className="text-3xl font-bold mb-6">Dr. Shilpi Gupta</h2>
            <p className="text-gray-600 mb-4">
              Our founder brings years of expertise and a passion for empowering individuals and businesses.
            </p>
            <p className="text-gray-600">
              With strong leadership and strategic vision, we continue to drive innovation and sustainable growth.
            </p>
          </div>
        </div>
      </section>

    </main>
  

  );
}
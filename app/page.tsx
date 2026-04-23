"use client"

import { useEffect, useState, useMemo } from "react"
import AOS from "aos"
import ServicesSlider from "./components/ServicesSlider"
import { motion } from "framer-motion";
import Link from "next/link"
import TypewriterText from "./components/TypewriterText";
import CoreSlider from "./components/CoreSlider";
import { FaWhatsapp } from "react-icons/fa";
import ComplianceSafetySlider from "./components/ComplianceSafetySlider";
import DigitalLearningSection from "./components/DigitalLearningSection";
import CountUp from "react-countup";
import ClientFeedbackScroll from "./components/ClientFeedbackScroll";
import TrainTrainerSlider from "./components/TrainTrainerSlider";



export default function Home() 
{

const words = [
     "Lives",
    "Skills",
    "Performance",
    "Business",
    "Growth"
];

  const fullText = "Empowering Minds";
  const [displayText, setDisplayText] = useState("");
  

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
      <div className="relative bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] text-white pt-32 pb-48 px-6 overflow-visible">
        
        <div className="max-w-6xl mx-auto text-center">

          {/* HEADING */}
          <h1 className="text-5xl md:text-4xl font-bold leading-tight mb-4">
            Empowering Minds, Elevating{" "}
            <TypewriterText words={["Lives", "Skills", "Performance", "Leaders"]} />
          </h1>

          {/* SUBTEXT */}
        

          {/* TRUST STRIP - STATS */}
          <div className="mt-10 py-">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: 98, suffix: "%", label: "Client Satisfaction" },
                { number: 50, suffix: "K+", label: "Employees Trained" },
                { number: 18, suffix: "+", label: "Trained Industries" },
                { number: 16, suffix: "+", label: "Years Of Experience" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    <CountUp
                      end={item.number}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {item.suffix}
                  </h3>
                  <p className="text-xs md:text-sm text-white/80">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
       

          {/* VIDEO SECTION - OVERLAPS CURVE */}
          <div className="relative mt-14 z-30">
            <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-3xl">
              <iframe
                className="w-full h-[220px] md:h-[380px] bg-black"
                src="Sample.mp4"
                title="Company Overview Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
<a
  href="/brochure.pdf"
  target="_blank"
  className="inline-block px-6 py-3 rounded-full text-white font-semibold 
             bg-gradient-to-r from-purple-500 to-indigo-500 
             hover:scale-105 transition"
>
  Download Brochure ☁️
</a>        </div>

        {/* U-SHAPED CURVE - WHITE BOTTOM WAVE */}
        <div className="absolute bottom-0 left-0 w-full z-10 overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,40 Q360,100 720,100 Q1080,100 1440,40 L1440,120 L0,120 Z"
            />
          </svg>
        </div>

      </div>

  
 <section className="py-10 bg-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#1E3A8A]">
      Why Most Training Programs Fail
    </h2>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-6">

      {[
        "Most training focuses on skills",
        "That’s why results don’t sustain",
        "Real change happens at mindset level",
        "Identity drives long-term behavior"
      ].map((text, i) => (

        <motion.div
          key={i}
          initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04, y: -6 }}
          className="relative p-5 rounded-2xl
          bg-gradient-to-br from-[#EFF6FF] to-white
          border border-[#BFDBFE]
          shadow-sm hover:shadow-lg
          transition-all duration-300"
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-200/30 to-transparent blur-lg"></div>

          <div className="relative z-10">
            <p className="text-base md:text-lg font-medium text-[#1E3A8A]">
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
<section className="pt-20 pb-32 bg-gradient-to-r from-[#1E3A8A] to-[#0F172A] text-white text-center">
  <div className="max-w-4xl mx-auto px-6">

    <h2 
      data-aos="fade-up"
      className="text-4xl font-bold mb-6"
    >
      What Makes Us Different
    </h2>

    <p 
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-lg mb-6"
    >
      We don’t just focus on skill development
    </p>

    <p 
      data-aos="fade-up"
      data-aos-delay="400"
      className="text-lg mb-6"
    >
      Our approach works at the level of mindset, identity, and behavioral patterns to create long-term transformation.
    </p>

    <p 
      data-aos="fade-up"
      data-aos-delay="600"
      className="text-lg"
    >
      Instead of short-term learning, we enable sustainable performance, stronger ownership, and real business impact through structured interventions.
    </p>

  </div>
</section>
<div className="h-20 bg-white"></div>

      {/* ================= SERVICES SLIDER ================= */}
     
<div id="services" className="mt- mb-">
  <ServicesSlider />
</div>
<div className="h-20 bg-white"></div>
 
      {/* =================Core Transformation Programs================= */}


{/* ================= Core Transformation ================= */}

   

    <CoreSlider />
    



<div className="h-20 bg-white"></div>

      {/* ================= Compliance & Workplace Safety ================= */}

    
    <ComplianceSafetySlider />
  
<div className="h-20 bg-white"></div>
      {/* =================Digital Learning & Capability Systems================= */}

    <DigitalLearningSection />

 
      {/* ================= Train the Trainer (Certification Programs) ================= */}
     <div className="h-20 bg-white"></div>
<TrainTrainerSlider />
      {/* ================= OUR WORK ================= */}
     {/* ================= OUR WORK ================= */}
<section className="py-12 bg-white">
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


<ClientFeedbackScroll />

<section className="py-10 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <div className="border-4 border-[#1E3A8A]  rounded-3xl p-12 text-center bg-white shadow-sm">

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A8A]">
        Ready to move beyond surface-level training?
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-600 mb-8 text-lg">
        Let’s work together to build strong mindsets, improve performance,
        and create lasting impact in your organization.
      </p>

      {/* BUTTON */}
      <button className="bg-[#1E3A8A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
        Book a Consultation
      </button>

    </div>

  </div>
</section>
 <a
        href="https://wa.me/917022621235"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl z-50"
      >
        <FaWhatsapp />
      </a>
      {/* ================= ABOUT FOUNDER ================= */}
  <section className="py-12 bg-white">
  <div className="max-w-full mx-auto px-6">

    {/* BOX */}
    <div className="border-4 border-[#1E3A8A] rounded-3xl p-10 bg-white shadow-sm">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <img
          src="/founder.jpg"
          alt="Founder"
          className="rounded-2xl shadow-md w-full max-w-md mx-auto"
        />

        {/* CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-2 underline">
            About Our Founder
          </h2>

          <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">
            Dr. Shilpi Gupta
          </h3>

          <p className="text-gray-1000 mb-8">
           Version2 is inspired by the eagle’s extraordinary journey of self-renewal, the eagle, sheds its old feathers to fly higher, breaks its beak to have newer, changes itself to soar highest and achieve maximum potential. we embrace the belief that to soar, you must first rise above the storm.
          </p>

          <p className="text-gray-1000 mb-8">
           We empower individuals & organizations to undergo Transformational Change. We guide you through the process to unlock your Version2.
          </p>

          <p className="text-gray-1000 mb-8">
            We help our clients break free from limiting beliefs & reprogram their mindset for growth. At Version2, it’s change followed by transformation that takes you to greater heights.
          </p>

          <p className="text-gray-1000">
We are UNIQUE to use Coaching, Training, Counselling, Healing & Therapeutic interventions at various platforms to empower individuals and organizations discover their true purpose by shared accountability, time bound ROI Based coaching and training to transform every thing around them, Health, Relationship, Career and Money.          </p>
        </div>

      </div>

    </div>

  </div>
</section>


    </main>
  

  );
}
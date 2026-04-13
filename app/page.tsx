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
<div className="bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] text-white pt-40 pb-20 px-6 relative overflow-hidden">

  <div className="max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <h1 className="text-4xl font-bold">
      Empowering Minds, Elevating{" "}
      <TypewriterText words={["Lives", "Skills", "Performance", "Leaders"]} />
    </h1>

    <p className="mt-4 text-base md:text-lg text-blue-100 font-normal tracking-wide">
      Transforming mindset and identity to drive performance and workplace culture
    </p>

    {/* TRUST STRIP */}
   <section className="py-8">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

      {[
        { number: 98, suffix: "%", label: "Client Satisfaction" },
        { number: 50, suffix: "K+", label: "Employees Trained" },
        { number: 18, suffix: "+", label: "Trained Industries" },
        { number: 16, suffix: "+", label: "Years Of Experience" },
      ].map((item, i) => (
        <div key={i} className="py-2">

          {/* Number Smaller */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
            <CountUp
              end={item.number}
              duration={2}
              enableScrollSpy
              scrollSpyOnce
            />
            {item.suffix}
          </h3>

          {/* Label Smaller */}
          <p className="text-xs md:text-sm text-white/80 leading-relaxed">
            {item.label}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

    {/* CTA */}
    <button className="mt-10 bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
      Download Brochure ☁️
    </button>

 {/* VIDEO */}
    <div className="mt-12 max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative z-10">
      <iframe
        className="w-full h-[220px] md:h-[350px]"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="Video"
        allowFullScreen
      ></iframe>
    </div>

  </div>

 
{/* 🔥 PERFECT CLEAN U CURVE */}
<div className="absolute bottom-0 left-0 w-full z-0">
  <svg
    viewBox="0 0 1440 120"
    className="w-full h-[80px]"
    preserveAspectRatio="none"
  >
    <path
      fill="#F0F5FF"
      d="M0,0 
         C480,100 960,100 1440,0 
         L1440,120 
         L0,120 Z"
    />
  </svg>
</div>
</div>


  {/* CURVE */}
  <section className="relative pt-8 pb-6 bg-[#F0F5FF]">
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
  </section>
 <section className="py-10 bg-gray-100">

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
     
<div id="services" className="mt-">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            Train the Trainer (Certification Programs)
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

<ClientFeedbackScroll />

<section className="py-20 bg-white text-center">
  <div className="max-w-4xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A8A]">
    Ready to move beyond surface-level training?
    </h2>

    {/* TEXT */}
    <p className="text-gray-600 mb-10">
      Let’s work together to build strong mindsets, improve performance,
      and create lasting impact in your organization.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">

      {/* PRIMARY BUTTON */}
      <button className="bg-[#1E3A8A] text-white px-9 py-7 rounded-xl font-semibold hover:bg-blue-800 transition">
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
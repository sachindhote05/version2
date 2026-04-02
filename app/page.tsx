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

      

      

      {/* ================= HERO ================= */}
      <section id="home" className="bg-white pt-0 pb-40"></section>
  <section className="relative pt-0 pb-40 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mt-20">

          <div>
   
<h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-black whitespace-nowrap">
  {displayText}
  <span className="animate-pulse"></span>
</h1>

<h2 className="text-3xl md:text-4xl font-extrabold flex items-baseline gap-3">
<span className="text-black">Elevating

</span>

  <span className="relative h-[50px] overflow-hidden">

    <span
  key={index}
  className="block transition-all duration-700 ease-in-out translate-y-0 text-[#1E3A8A]"
>
  {words[index]}
</span>

  </span>


</h2>

 <p className="mt-6 text-black">
   Training and Coaching made Structured and sustainable for Businesses and Individuals
  </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-center text-black">
  
  <div>
    <h3 className="text-3xl font-bold">
      <CountUp end={98} duration={2} />%
    </h3>
    <p className="text-sm opacity-80">Client Satisfaction</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">
      <CountUp end={50} duration={2} />K+
    </h3>
    <p className="text-sm opacity-80">Employees Trained</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">
      <CountUp end={18} duration={2} />+
    </h3>
    <p className="text-sm opacity-80">Trained Industries</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">
      <CountUp end={16} duration={2} />+
    </h3>
    <p className="text-sm opacity-80">Years Of Experience</p>
  </div>

</div>
  
</div>





          {/* VIDEO */}
          
  <div className="relative w-full h-[300px] overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-black">

 <div className="relative w-full h-[380px] overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-black">
  <video
    src="/sample.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />
</div>

  {/* DOTS */}
  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
    {videos.map((_, i) => (
      <button
        key={i}
        onClick={() => setVideoIndex(i)}
        className={`h-3 w-3 rounded-full transition-all duration-300 ${
          videoIndex === i
            ? "bg-white scale-125"
            : "bg-white/50 hover:bg-white"
        }`}
      />
    ))}
  </div>

</div>

        </div>
        {/* Bottom Curve */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  
</div>
      </section>

      {/* Why Most Training Programs Fail*/}



<section className="relative py-20 overflow-hidden bg-white">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-16 text-gray-800">
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
          bg-white border border-gray-200 shadow-md"
        >

          {/* gradient glow */}

          <div className="relative z-10">
            <p className="text-lg font-semibold text-gray-700">
              {text}
            </p>
          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>

      {/*what make us different */}

<section className="relative py-10 flex justify-center">

  {/* 🔵 Compact Blue Gradient */}
<section className="relative py-20 flex justify-center bg-[#1E3A8A]">

  {/* BEIGE BACKGROUND BOX */}
<div className="absolute inset-0 bg-[#1E3A8A] rounded-[80px] shadow-2xl"></div>

  {/* LIGHT TEXTURE (optional subtle dots) */}
  <div className="absolute inset-0 opacity-10
    bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
    bg-[size:20px_20px]">
  </div>

  {/* CONTENT */}
<div className="relative w-[800px] px-10 py-16 text-center text-white overflow-hidden rounded-[60px]">

    <h2
      data-aos="fade-up"
      data-aos-delay="100"
      className="text-3xl md:text-4xl font-bold mb-6 text-white"
    >
      WHAT MAKES US DIFFERENT
    </h2>

    <p
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-base md:text-lg leading-relaxed opacity-80"
    >
      Research shows mindset drives performance more than skillset alone.
      If employees are your biggest asset, investing in their growth is not an expense — it’s strategy.
    </p>

    <p
      data-aos="fade-up"
      data-aos-delay="400"
      className="text-base md:text-lg leading-relaxed mt-4 opacity-80"
    >
      Version2 designs neuroscience‑informed, mind‑body integrated interventions
      that work at the behavioural root — not just the surface.
    </p>

    <p
      data-aos="fade-up"
      data-aos-delay="600"
      className="text-base md:text-lg leading-relaxed mt-4 opacity-80"
    >
      Through psychological safety frameworks, we create measurable and sustainable transformation —
      because real growth starts within.
    </p>

    <button
      data-aos="zoom-in"
      data-aos-delay="800"
      className="mt-6 bg-[#1E3A8A] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
    >
      Download E-Brochure
    </button>

  </div>
</section>
</section>

      {/* ================= SERVICES SLIDER ================= */}
     
<div id="services" className="mt-2">
  <ServicesSlider />
</div>

      {/* =================Core Transformation Programs================= */}


<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-[#1E3A8A]">
      Core Transformation Programs
    </h2>

    <div className="grid md:grid-cols-5 gap-8">

      {[
        "Leadership Identity Shift Programs",
        "Behavioral Pattern Transformation Interventions",
        "CXO Coaching – Eagle Shift Framework",
        "Peak Performance Acceleration",
        "Emotional Pattern Rewiring for Employees"
      ].map((title, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          whileHover={{
            scale: 1.08,
            rotateX: 6,
            rotateY: -6
          }}
          className="group relative rounded-3xl bg-white border border-gray-200 shadow-md"
        >

          {/* CARD */}
          <div className="relative h-full rounded-3xl bg-white p-6 flex flex-col justify-between shadow-xl">

            {/* GLOW */}
           

            {/* TITLE */}
            <h3 className="text-lg font-bold text-[#1E3A8A] leading-snug z-10">
              {title}
            </h3>

            {/* BUTTON */}
           <Link href="/core-details">
  <button className="mt-4 px-4 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-600 transition">
    Learn More →
  </button>
</Link>
          </div>

        </motion.div>

      ))}

    </div>
  </div>
</section>

      {/* ================= Compliance & Workplace Safety ================= */}
 <section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-4xl font-bold text-center mb-16 text-[#1E3A8A]">
      Compliance & Workplace Safety
    </h2>

    {/* 6 BOX GRID */}
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        "POSH: End-to-End Implementation & Training",
        "POSCO Awareness Programs",
        "Psychological Safety & Inclusive Culture Training",
        "Workplace Ethics & Conduct Programs",
        "Mental Wellness Interventions",
        "Physical Safety Trainings",
      ].map((title, i) => (

        <div
          key={i}
          className="group rounded-2xl 
          bg-white border border-gray-200 shadow-md
          overflow-hidden
          transition-all duration-500 hover:-translate-y-2"
        >

          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={`/posh${i + 1}.jpg`}
              className="w-full h-[140px] object-cover 
              group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* TEXT */}
          <div className="p-4">

            <h3 className="text-sm font-semibold text-[#1E3A8A] leading-snug">
              {title}
            </h3>

            {/* BUTTON */}
            <Link href="/compliance-details">
  <button className="mt-4 bg-[#1E3A8A] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
    Learn More →
  </button>
</Link>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
      {/* ================= E-LEARNING MODULES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            E-learning Modules Licensing and Development
          </h2>

          {/* TOP 4 */}
          <div className="grid md:grid-cols-4 gap-8 mb-10">

            {[
              { img: "/elearn1.jpg", title: "Custom Module Development" },
              { img: "/elearn2.jpg", title: "Content Licensing" },
              { img: "/elearn3.jpg", title: "Interactive Learning Design" },
              { img: "/elearn4.jpg", title: "LMS Integration" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group rounded-3xl overflow-hidden shadow-xl 
                           transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM 3 CENTERED */}
          <div className="grid md:grid-cols-3 gap-8 md:px-32">

            {[
              { img: "/elearn5.jpg", title: "Microlearning Modules" },
              { img: "/elearn6.jpg", title: "Certification Programs" },
              { img: "/elearn7.jpg", title: "Performance Tracking Systems" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group rounded-3xl overflow-hidden shadow-xl 
                           transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
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
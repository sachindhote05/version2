"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { FaTools, FaLeaf, FaBolt, FaBrain, FaClock, FaUsers } from "react-icons/fa"

export default function Home() {
const words = [
  "Lives",
  "Skills",
  "Performance",
  "Business",
  "Growth",
];
  const videos = [];

  const [index, setIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);
  useEffect(() => {
  const interval = setInterval(() => {
    setVideoIndex((prev) => (prev + 1) % videos.length);
  }, 4000); // 4 second me video change

  return () => clearInterval(interval);
}, []);

  return (
    <main className="overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      <div className="h-32"></div>

      {/* ================= HERO ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200">
       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
     <div className="mb-4 pl-4 border-l-4 border-blue-600">
  <span className="text-gray-600 font-medium">
    Welcome to Version2
  </span>
</div>
  <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
    Empowering Minds
  </h1>

<h2 className="text-3xl md:text-4xl font-extrabold flex items-baseline gap-3">

  <span>Elevating</span>

  <span className="relative h-[50px] overflow-hidden">

    <span
      key={index}
      className="block transition-all duration-700 ease-in-out translate-y-0"
    >
      <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {words[index]}
      </span>
    </span>

  </span>


</h2>

  <p className="mt-6 text-gray-600 max-w-xl">
    We empower individuals and organizations with innovative strategies,
    practical solutions, and measurable growth.
  </p>
  
  {/* SLIDING FEATURES */}

<div className="mt-10 overflow-hidden">

  <div className="flex gap-10 whitespace-nowrap animate-marquee text-lg font-semibold text-gray-700">

    <div className="flex items-center gap-2">
      <FaTools className="text-blue-600" />
      Proven Tools
    </div>

    <div className="flex items-center gap-2">
      <FaLeaf className="text-green-600" />
      Sustainable Results
    </div>

    <div className="flex items-center gap-2">
      <FaBolt className="text-yellow-500" />
      Simple Interventions
    </div>

    <div className="flex items-center gap-2">
      <FaBrain className="text-purple-600" />
      Mind Body Neuroscience
    </div>

    <div className="flex items-center gap-2">
      <FaClock className="text-indigo-600" />
      10+ Years
    </div>

    <div className="flex items-center gap-2">
      <FaUsers className="text-pink-600" />
      50+ Clients
    </div>

  </div>

</div>

</div>


          {/* VIDEO */}
          
  <div className="relative w-full h-[450px] overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-black">

  {/* SLIDER */}
  <div
    className="flex h-full transition-all duration-1000 ease-in-out"
    style={{
      transform: `translateX(-${videoIndex * 100}%)`
    }}
  >
    {videos.map((video, i) => (
      <div key={i} className="w-full h-full flex-shrink-0">
        <video
          src={video}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
    ))}
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
      </section>

      {/*what make us different */}

<section className="relative py-10 overflow-hidden">

  {/* 🔵 Compact Blue Gradient */}
  <div className="absolute inset-5 bg-gradient-to-r from-blue-700 to-indigo-700"></div>

  {/* 🔵 Light Texture */}
  <div className="absolute inset-9 opacity-10 
    bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] 
    bg-[size:25px_25px]">
  </div>

  {/* CONTENT */}
  <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      WHAT MAKES US DIFFERENT
    </h2>

    <p className="text-base md:text-lg leading-relaxed opacity-90">
      Research shows mindset drives performance more than skillset alone. 
      If employees are your biggest asset, investing in their growth is not an expense — it’s strategy.
    </p>

    <p className="text-base md:text-lg leading-relaxed mt-4 opacity-90">
      Version2 designs neuroscience‑informed, mind‑body integrated interventions 
      that work at the behavioural root — not just the surface.
    </p>

    <p className="text-base md:text-lg leading-relaxed mt-4 opacity-90">
      Through psychological safety frameworks, we create measurable and sustainable transformation — 
      because real growth starts within.
    </p>

  <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
  Download E‑Brochure
</button>

  </div>
</section>

      {/* ================= TRA-CO MODULES ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            Tra-Co Modules – Training & Coaching
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            {[
              {
                img: "/module1.jpg",
                title: "Behavioral Mastery",
                desc: "12-month mindset shift program for sustainable performance growth.",
              },
              {
                img: "/module2.jpg",
                title: "Momentum Mastery",
                desc: "Mental fitness & resilience framework for emerging leaders.",
              },
              {
                img: "/module3.jpg",
                title: "Eagle Shift Framework",
                desc: "CXO coaching model for clarity, regulation & strategic expansion.",
              },
              {
                img: "/module4.jpg",
                title: "Peak Performance Acceleration",
                desc: "Execution excellence through identity & performance alignment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-lg 
                           transition duration-500 hover:shadow-2xl hover:-translate-y-3"
              >
                
                {/* IMAGE TOP */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover transition duration-700 hover:scale-110"
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= POSH SECTION ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            POSH
          </h2>

          {/* TOP 4 */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">

            {[
              { img: "/posh1.jpg", title: "Awareness Program" },
              { img: "/posh2.jpg", title: "Policy Implementation" },
              { img: "/posh3.jpg", title: "Complaint Handling" },
              { img: "/posh4.jpg", title: "Investigation Process" },
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM 3 (CENTERED) */}
          <div className="grid md:grid-cols-3 gap-8 md:px-32">

            {[
              { img: "/posh5.jpg", title: "Employee Training" },
              { img: "/posh6.jpg", title: "Compliance Monitoring" },
              { img: "/posh7.jpg", title: "Annual Reporting" },
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

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

      {/* ================= E-LEARNING MODULES ================= */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
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
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            Our Work
          </h2>

          <div className="grid md:grid-cols-5 gap-8">

            {[
              { id: "VIDEO_ID1", title: "Corporate Training Session" },
              { id: "VIDEO_ID2", title: "Leadership Workshop" },
              { id: "VIDEO_ID3", title: "POSH Awareness Program" },
              { id: "VIDEO_ID4", title: "Train The Trainer Event" },
              { id: "VIDEO_ID5", title: "E-Learning Module Demo" },
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
                    <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                </div>

                {/* Title */}
                <div className="p-4 bg-white">
                  <h3 className="text-sm font-semibold text-center text-gray-700">
                    {video.title}
                  </h3>
                </div>

                {/* Click Link */}
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                ></a>

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
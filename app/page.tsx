"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const words = [
    "Elevating Lives",
    "Elevating Skills",
    "Elevating Performance",
    "Elevating Business",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
     {/* ================= NAVBAR ================= */}
<nav className="fixed top-0 left-0 w-full z-50">

  {/* 🔵 TOP BLUE BAR */}
  <div className="w-full bg-blue-600 py-2">
    <div className="max-w-7xl mx-auto px-6 flex justify-end space-x-6 text-white text-lg">
      <a href="#"><FaFacebookF /></a>
      <a href="#"><FaInstagram /></a>
      <a href="#"><FaLinkedinIn /></a>
      <a href="#"><FaWhatsapp /></a>
    </div>
  </div>

  {/* ⚪ MAIN NAVBAR */}
  <div className="w-full bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

      {/* LOGO */}
      <div className="relative w-32 h-12">
        <Image
          src="/logo.png"
          alt="Company Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* NAV LINKS DESKTOP */}
      <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Services</a>
        <a href="#" className="hover:text-blue-600">Resources</a>
        <a href="#" className="hover:text-blue-600">Clients</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </div>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden text-3xl cursor-pointer">
        ☰
      </div>

    </div>
  </div>
</nav>

<div className="h-32"></div>

      {/* ================= HERO ================= */}
      <section className="py-24 text-center bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Empowering Minds
          </h1>

          <h2
            className={`text-3xl md:text-5xl font-extrabold transition-all duration-500 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
              {words[index]}
            </span>
          </h2>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
            We empower individuals and organizations with innovative strategies,
            practical solutions, and measurable growth.
          </p>

          {/* VIDEO */}
          <div className="mt-10 flex justify-center">
            <div className="w-[600px] h-[300px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-black">
              <video
                src="/empowering-video.mp4"
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            </div>
          </div>

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
      ].map((item, index) => (
        <div
          key={index}
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
<section className="py-22 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
      POSH
    </h2>

    {/* TOP 4 */}
    <div className="grid md:grid-cols-4 gap-8 mb-8">

      {/* Card */}
      {[
        { img: "/posh1.jpg", title: "Awareness Program" },
        { img: "/posh2.jpg", title: "Policy Implementation" },
        { img: "/posh3.jpg", title: "Complaint Handling" },
        { img: "/posh4.jpg", title: "Investigation Process" },
      ].map((item, index) => (
        <div
          key={index}
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
      ].map((item, index) => (
        <div
          key={index}
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
      ].map((item, index) => (
        <div
          key={index}
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
      ].map((item, index) => (
        <div
          key={index}
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
<section className="py-22 bg-white">
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
      ].map((item, index) => (
        <div
          key={index}
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
      ].map((video, index) => (
        <div
          key={index}
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
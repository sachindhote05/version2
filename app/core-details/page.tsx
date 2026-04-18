"use client";
import { useState } from "react";
import BookingSection from "../components/BookingSection"
import { FaUserTie, FaBrain, FaCrown, FaRocket, FaHeart, FaSearch, FaPenFancy, FaChalkboardTeacher, FaSyncAlt } from "react-icons/fa";

export default function CoreDetailsPage() {
  const [showBooking, setShowBooking] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] pt-32 px-6 text-white">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core Transformation Programs
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto">
            Transform mindset, identity & performance with deep behavioral interventions
          </p>
        </div>

        {/* 🔥 HERO CARD */}
        <div className="bg-white/10 rounded-3xl shadow-xl shadow-slate-900/30 p-8 mb-12 border border-white/10 hover:shadow-2xl transition">
          <p className="text-center text-slate-200 text-lg">
            We go beyond skill building to shift mindset, identity, and emotional patterns
            that drive leadership, decision-making, and performance.
          </p>
        </div>
        

{/* 🔥 CALENDLY SECTION */}
{/* BUTTON */}
<div className="text-center mb-10">
  <button
    onClick={() => setShowBooking(!showBooking)}
    className="px-10 py-4 rounded-full 
    bg-gradient-to-r from-cyan-400 to-blue-500 
    text-black font-semibold
    hover:scale-110 transition-all duration-300"
  >
    Book Consultation
  </button>
</div>

{/* BOOKING SECTION */}
{showBooking && (
  <div className="mt-6 animate-fadeIn">
    <BookingSection />
  </div>
)}
 
 {/* 🔥 VIDEO SECTION */}
<div className="bg-white/10 rounded-3xl p-8 text-white shadow-xl shadow-slate-900/30 mb-16 border border-white/10 backdrop-blur">

  <h3 className="text-2xl font-bold text-center mb-6 text-white">
    See How Transformation Works
  </h3>

  <p className="text-center mb-8 text-slate-300">
    Watch how our programs create real impact
  </p>

  {/* VIDEO */}
  <div className="relative w-full max-w-xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10">

    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      title="YouTube video"
      allowFullScreen
    ></iframe>

  </div>

</div>

    {/* 🔥 FEATURE BOX SECTION */}
<div className="mt-16 mb-20">

  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

    {[
      {
        title: "Problem Statement",
        desc: "Leaders lack ownership\nEmployees struggle with confidence & decisions\nPerformance drops due to internal resistance",
      },
      {
        title: "Our Approach",
        desc: "Identity-level work\nMindset restructuring\nEmotional pattern transformation",
      },
      {
        title: "What We Offer",
        desc: "Leadership Identity Shift\nBehavioral Transformation\nCXO Coaching\nPeak Performance",
      },
      {
        title: "Outcomes",
        desc: "Ownership mindset\nFaster decisions\nConfidence\nConsistent performance",
      },
      {
        title: "Who It’s For",
        desc: "Leaders\nManagers\nHigh-potential employees\nCXOs",
      },
    ].map((item, i) => (

      <div
        key={i}
        className="group p-5 rounded-2xl bg-white/10 border border-white/10 shadow-md shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500"
      >

        <h3 className="text-sm font-bold text-white mb-3">
          {item.title}
        </h3>

        <p className="text-slate-300 text-xs whitespace-pre-line leading-relaxed">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</div>

{/* 🔥 CASE STUDY SECTION */}
<div className="mt-20 mb-20">

  {/* HEADING */}
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
    Case Studies
  </h2>

  {/* VIDEOS */}
  <div className="grid md:grid-cols-3 gap-8">

    {[1,2,3].map((item, i) => (
      <div
        key={i}
        className="rounded-2xl overflow-hidden bg-white/10 border border-white/10 backdrop-blur shadow-lg"
      >
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Case Study Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ))}

  </div>

  {/* 🔥 BUTTON */}
  <div className="text-center mt-12">
    <button
      onClick={() => setShowBooking(!showBooking)}
      className="px-10 py-4 rounded-full
      bg-gradient-to-r from-cyan-400 to-blue-500
      text-black font-semibold
      hover:scale-110 hover:shadow-lg
      transition-all duration-300"
    >
      {showBooking ? "Close Booking" : "Book Consultation"}
    </button>
  </div>

  {/* 🔥 BOOKING SECTION */}
  {showBooking && (
    <div className="mt-10 animate-fadeIn">
      <BookingSection />
    </div>
  )}

</div>




{/* 🔥 CORE OFFERINGS SECTION */}
<div className="bg-white/10 rounded-3xl shadow-xl shadow-slate-900/30 p-10 mb-16 border border-white/10 backdrop-blur">

  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
    Our Core Transformation Areas
  </h2>

  {/* TOP 3 */}
  <div className="grid md:grid-cols-3 gap-8 mb-8">

    {[
      {
        title: "Leadership Identity Shift",
        desc: "Enables leaders to move from execution mindset to ownership identity.",
        icon: <FaUserTie />
      },
      {
        title: "Mindset & Behavioral Transformation",
        desc: "Addresses internal patterns that impact decision-making and performance.",
        icon: <FaBrain />
      },
      {
        title: "CXO Coaching – Eagle Shift Framework",
        desc: "Supports senior leaders in navigating complexity with clarity and strategic thinking.",
        icon: <FaCrown />
      }
    ].map((item, i) => (

      <div
        key={i}
        className="group p-6 rounded-2xl bg-white/10 border border-white/10 shadow-md shadow-slate-900/20 hover:shadow-xl hover:-translate-y-2 transition duration-500"
      >

        <div className="text-cyan-400 text-2xl mb-4">
          {item.icon}
        </div>

        <h3 className="text-lg font-bold text-white mb-3">
          {item.title}
        </h3>

        <p className="text-slate-300 text-sm">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

  {/* BOTTOM 2 CENTER */}
  <div className="flex justify-center gap-8">

    {[
      {
        title: "Peak Performance Acceleration",
        desc: "Builds high-performance habits by aligning mindset, focus, and execution.",
        icon: <FaRocket />
      },
      {
        title: "Emotional Pattern Rewiring",
        desc: "Helps individuals recognize and shift emotional responses that impact workplace behavior and relationships.",
        icon: <FaHeart />
      }
    ].map((item, i) => (

      <div
        key={i}
        className="w-[320px] group p-6 rounded-2xl bg-white/10 border border-white/10 shadow-md shadow-slate-900/20 hover:shadow-xl hover:-translate-y-2 transition duration-500"
      >

        <div className="text-cyan-400 text-2xl mb-4">
          {item.icon}
        </div>

        <h3 className="text-lg font-bold text-white mb-3">
          {item.title}
        </h3>

        <p className="text-slate-300 text-sm">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</div>
     


{/* 🔥 HOW WE WORK - FLOWCHART */}
<div className="py-20">

  <h3 className="text-3xl font-bold text-center text-white mb-16">
    How We Work
  </h3>

  <div className="relative max-w-6xl mx-auto">

    {/* LINE */}
    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2"></div>

    <div className="grid md:grid-cols-4 gap-10 relative z-10">

      {[
        {
          title: "Diagnose",
          icon: <FaSearch />,
          desc: "Understand challenges, mindset gaps & business context"
        },
        {
          title: "Design",
          icon: <FaPenFancy />,
          desc: "Create tailored transformation strategy & roadmap"
        },
        {
          title: "Deliver",
          icon: <FaChalkboardTeacher />,
          desc: "Execute high-impact sessions & interventions"
        },
        {
          title: "Reinforce",
          icon: <FaSyncAlt />,
          desc: "Ensure long-term behavior change & results"
        }
      ].map((step, i) => (

        <div key={i} className="text-center group bg-white/5 p-6 rounded-3xl border border-white/10 shadow-lg shadow-slate-900/20">

          {/* ICON CIRCLE */}
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-cyan-400 text-xl shadow-md group-hover:scale-110 transition duration-300">

            {step.icon}

          </div>

          {/* TITLE */}
          <h4 className="text-lg font-bold text-white mb-2">
            {step.title}
          </h4>

          {/* DESC */}
          <p className="text-sm text-slate-300 max-w-[200px] mx-auto">
            {step.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>
 </div>
</div>

);
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const fullText = "Empowering Minds";
const [displayText, setDisplayText] = useState("");
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
  }, 80); // typing speed

  return () => clearInterval(typing);
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
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
   
<h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white whitespace-nowrap">
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
   Training and Coaching made Structured and sustainable for Businesses and Individuals
  </p>
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
        {/* Bottom Curve */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 150"
    className="w-full h-[120px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0 C480,150 960,150 1440,0 L1440,150 L0,150 Z"
      fill="#f3f4f6"
    />
  </svg>
</div>
      </section>

      {/*what make us different */}

<section className="relative py-5 flex justify-center">

  {/* 🔵 Compact Blue Gradient */}
<div className="absolute w-[900px] h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl"></div>
  <div className="absolute inset-9 opacity-10 
    bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] 
    bg-[size:25px_25px]">
  </div>

  {/* CONTENT */}
 <div className="relative w-[800px] px-10 py-14 text-center text-white">

   <h2 data-aos="fade-up" data-aos-delay="100"
className="text-3xl md:text-4xl font-bold mb-6">
WHAT MAKES US DIFFERENT
</h2>

   <p data-aos="fade-up" data-aos-delay="200"
className="text-base md:text-lg leading-relaxed opacity-90">
      Research shows mindset drives performance more than skillset alone. 
      If employees are your biggest asset, investing in their growth is not an expense — it’s strategy.
    </p>

   <p data-aos="fade-up" data-aos-delay="400"
className="text-base md:text-lg leading-relaxed mt-4 opacity-90">
      Version2 designs neuroscience‑informed, mind‑body integrated interventions 
      that work at the behavioural root — not just the surface.
    </p>

    <p data-aos="fade-up" data-aos-delay="600"
className="text-base md:text-lg leading-relaxed mt-4 opacity-90">
      Through psychological safety frameworks, we create measurable and sustainable transformation — 
      because real growth starts within.
    </p>

  <button
data-aos="zoom-in"
data-aos-delay="800"
className="mt-6 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
Download E-Brochure
</button>

  </div>
</section>

      {/* ================= TRA-CO MODULES ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            Tra-Co Modules – Training & Coaching
          </h2>

         <div className="grid md:grid-cols-4 gap-10 items-start">

            {[
             {
  img: "/module1.jpg",
  title: "Behavioral Mastery",
  desc: <b>12-month mindset shift program for sustainable performance growth.</b>,
  points: [
    "Productivity Recovery Framework",
    "Assertive Communication",
    "Change Management",
    "Conflict Resolution",
    "Time Management",
    "Problem Solving Skills",
    "Decision Making",
    "Overcoming Failure",
    "Interpersonal Skills",
    "Active Listening"
  ]
},
              {
  img: "/module2.jpg",
  title: "Momentum Mastery",
  desc: <b>Mental fitness & resilience framework for emerging leaders.</b>,
  points: [
    "Mindfulness",
    "Stress Management",
    "Work Life Balance",
    "Resilience and Focus",
    "Burnout Prevention"
  ]
},
             {
  img: "/module3.jpg",
  title: "Eagle Shift Framework",
  desc: <b>CXO coaching model for clarity, regulation & strategic expansion.</b>,
  points: [
    "1:1 Coaching",
    "Energy and Identity Alignment",
    "Nervous System Regulation for Larger Results",
    "3M Work",
    "Shame and Perfectionism Cost",
    "Navigate with Clarity, Confidence & Authority",
    "Vision & Strategy",
    "Decision-Making Under Pressure",
    "Change Leadership"
  ]
},
             {
  img: "/module4.jpg",
  title: "Peak Performance Acceleration",
  desc: <b>Execution excellence through identity & performance alignment.</b>,
  points: [
    "Types of Sellers",
    "The Price Drama",
    "Somatic Sales Code",
    "Tapping the Warrior in You",
    "Sales Patterns Recognition",
    "Identity Reset Work"
  ]
},
            ].map((item, i) => (
              <div
  key={i}
className="group bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-4"
>

<div className="overflow-hidden">
<img
src={item.img}
alt={item.title}
className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
/>
</div>

<div className="p-6 text-center">

  <h3 className="text-xl font-bold text-blue-700 mb-3">
    {item.title}
  </h3>

  <p className="text-gray-600 text-sm leading-relaxed">
    {item.desc}
  </p>

  {/* LIST */}
  <ul className="text-gray-500 text-sm mt-3 list-disc list-inside space-y-1 max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-500">

    {item.points.map((point, index) => (
      <li key={index}>{point}</li>
    ))}

  </ul>

</div>
</div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= POSH SECTION ================= */}
     <section className="py-24 bg-gradient-to-b from-white to-blue-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-blue-700">
POSH Services
</h2>


{[
{
title: "POSH FOR Employees",
img: "/posh1.jpg",
desc: "  Employee Awareness to create Zero tolerance. Informed voices. Safer workplaces",
more: "POSH for Employees focuses on building awareness, clarity, and confidence among employees to recognise inappropriate behaviour, understand their rights and responsibilities, and use internal grievance mechanisms without fear—contributing to a respectful and safe workplace culture. ",
modes: ["Offline", "Virtual", "Elearning Modules"]
},

{
title: "POSH For Managers ",
img: "/posh2.jpg",
desc: "Empowering managers to prevent, respond, and lead safe workplaces Accountability",
more: "Understanding red flags, immediate actions, and escalation protocols Handling complaints with sensitivity and neutrality – do’s, don’ts, and prevention of retaliation or victimisation Creating a respectful team culture – proactive leadership behaviours to prevent harassment and ensure workplace safety",
modes: ["Offline", "Virtual", "Elearning Modules"]
},

{
title: "POSH For IC ",
img: "/posh3.jpg",
desc: " Impartial inquiry and lawful redressal through empowered Internal Committees for Jurisdiction",
more: "Version2 enables Internal Committees to function with clarity, confidence, and legal integrity. We provide structured guidance, practical training, and continuous hand-holding to ensure fair inquiries, compliant processes, and sensitive handling of cases in line with the POSH Act.",
modes: ["Offline", "Virtual", "Elearning Modules"]
},

{
title: "External Member Services ",
img: "/posh4.jpg",
desc: " Independent oversight ensuring impartial inquiry and statutory integrity",
more: "External Member Services are delivered through experienced professionals affiliated with credible NGOs, bringing an independent, rights-based, and survivor-centric perspective to POSH inquiries. Version2 ensures ethical oversight, fairness, and statutory compliance while upholding dignity, sensitivity, and social accountability in the redressal process."
},

{
title: "Annual Record File",
img: "/posh5.jpg",
desc: "Ensuring statutory compliance through accurate documentation and audit-ready disclosures",
more: "Annual Record Filing ensures accurate, timely, and statutory submission of POSH compliance reports to the appropriate authorities. Version2 supports organizations with meticulous documentation, regulatory alignment, and socially responsible reporting practices that reflect commitment to safe, dignified, and compliant workplaces."
},

{
title: "SHE Box Registration",
img: "/posh6.jpg",
desc: "Government-mandated grievance readiness through secure, centralized registration.",
more: "SHe-BGovernment-mandated grievance readiness through secure, centralized registrationox Registration enables organizations to align with government-mandated grievance redressal mechanisms while strengthening access to safe reporting channels for women. Version2 provides guided support to ensure accurate registration, procedural clarity, and a rights-based, ethical approach that reinforces transparency, accountability, and workplace dignity."
},

{
title: "Download POSH Act",
img: "/posh7.jpg",
desc: " A legal framework ensuring dignity, safety, and equality for women at the workplace.",
more: "The POSH Act provides a statutory framework to prevent sexual harassment at the workplace by mandating employer responsibility, grievance redressal mechanisms, and awareness-driven compliance to ensure a safe and dignified work environment for women."
}

].map((item, i) => (

<div
key={i}
className="grid md:grid-cols-2 gap-16 items-center mb-24"
>

{/* TEXT */}
<div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>

<h3 className="text-3xl font-bold mb-6 text-gray-800">
{item.title}
</h3>

<p className="text-gray-600 leading-relaxed">
{item.desc}
</p>
{item.more && (
<p className="text-gray-500 mt-4 leading-relaxed">
{item.more}
</p>
)}
{item.modes && (
<ul className="mt-4 list-disc list-inside text-gray-500 space-y-1">
{item.modes.map((mode, index) => (
<li key={index}>{mode}</li>
))}
</ul>
)}

</div>


{/* IMAGE */}
<div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>

<img
src={item.img}
alt={item.title}
className="rounded-2xl shadow-xl w-full h-[350px] object-cover hover:scale-105 transition duration-500"
/>

</div>

</div>

))}

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
"use client";

import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesSlider from "./components/ServicesSlider";
import CountUp from "react-countup";
import { motion } from "framer-motion";


export default function Home() {
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
      <section id="home" className="bg-[#ECD9B9] pt-0 pb-40"></section>
  <section className="relative pt-0 pb-40 bg-[#ECD9B9] overflow-hidden">
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
  className="block transition-all duration-700 ease-in-out translate-y-0 text-blue-900"
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



<section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">

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
          bg-white/60 backdrop-blur-xl border border-white/40
          shadow-xl"
        >

          {/* gradient glow */}
          <div className={`absolute -inset-1 rounded-3xl blur opacity-30 
            ${i === 0 ? "bg-gradient-to-r from-cyan-300 to-blue-400" : ""}
            ${i === 1 ? "bg-gradient-to-r from-pink-300 to-purple-400" : ""}
            ${i === 2 ? "bg-gradient-to-r from-green-300 to-emerald-400" : ""}
            ${i === 3 ? "bg-gradient-to-r from-orange-300 to-amber-400" : ""}
          `}></div>

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
<section className="relative py-20 flex justify-center bg-[#ECD9B9]">

  {/* BEIGE BACKGROUND BOX */}
<div className="absolute inset-0 bg-[#ECD9B9] rounded-[80px] shadow-2xl"></div>

  {/* LIGHT TEXTURE (optional subtle dots) */}
  <div className="absolute inset-0 opacity-10
    bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
    bg-[size:20px_20px]">
  </div>

  {/* CONTENT */}
<div className="relative w-[800px] px-10 py-16 text-center text-black overflow-hidden rounded-[60px]">

    <h2
      data-aos="fade-up"
      data-aos-delay="100"
      className="text-3xl md:text-4xl font-bold mb-6 text-[#1E3A8A]"
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

<div className="p-6 text-left">

  <h3 className="text-xl font-bold text-blue-700 mb-3">
    {item.title}
  </h3>

  <p className="text-gray-600 text-sm leading-relaxed">
    {item.desc}
  </p>

  {/* LIST */}
  <ul className="text-gray-500 text-sm mt-3 list-disc list-outside pl-5 space-y-1 text-left">

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
     {/* ================= OUR WORK ================= */}
<section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
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
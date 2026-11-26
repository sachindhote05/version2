"use client"

import { useEffect, useState } from "react"
import AOS from "aos"
import ServicesSlider from "./components/ServicesSlider"
import { motion } from "framer-motion";
import TypewriterText from "./components/TypewriterText";
import CoreSlider from "./components/CoreSlider";
import { FaWhatsapp } from "react-icons/fa";
import ComplianceSafetySlider from "./components/ComplianceSafetySlider";
import DigitalLearningSection from "./components/DigitalLearningSection";
import CountUp from "react-countup";
import ClientFeedbackScroll from "./components/ClientFeedbackScroll";
import TrainTrainerSlider from "./components/TrainTrainerSlider";
import ExecutiveSlider from "./components/ExecutiveSlider";
import ConsultationModal from "./components/ConsultationModal";
import WorkGlimpses from "./components/WorkGlimpses";

export default function Home() 
{


  const [open, setOpen] = useState(false);
  const [selectedWorkVideo, setSelectedWorkVideo] = useState<{
    title: string;
    src: string;
  } | null>(null);

  const workVideos = [
    { title: "Corporate Training Session", src: "/videos/video1.mp4" },
    { title: "Leadership Workshop", src: "/videos/video2.mp4" },
    { title: "POSH Awareness Program", src: "/videos/video3.mp4" },
    { title: "Train The Trainer Event", src: "/videos/video4.mp4" },
    { title: "E-Learning Module Demo", src: "/videos/video5.mp4" },
  ];



  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Close the Our Work video popup with Escape and prevent background scrolling.
  useEffect(() => {
    if (!selectedWorkVideo) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedWorkVideo(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedWorkVideo]);

  return (
    <main className="overflow-x-hidden pt-6">
    

      

      {/* 🔥 HERO SECTION */}
      <div className="relative bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] text-white pt-32 pb-20 px-6 overflow-visible">
        
        <div className="max-w-5xl mx-auto text-center">

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Empowering Minds, Elevating{" "}
           <TypewriterText words={[" Lives", " Skills", " Performance", " Leaders"]} />
          </h1>

          {/* SUBTEXT */}
        

          {/* TRUST STRIP - STATS */}
          <div className="mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: 98, suffix: "%", label: "Client Satisfaction" },
                { number: 50, suffix: "K+", label: "Employees Trained" },
                { number: 18, suffix: "+", label: "Trained Industries" },
                { number: 16, suffix: "+", label: "Years Of Experience" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
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

          {/* TWO HERO SERVICE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 max-w-5xl mx-auto text-left">
            <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 3 8-8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 6h6v6" />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-semibold text-white md:text-2xl">Corporate Transformation</h2>
              <p className="mb-4 text-sm leading-relaxed text-white/80 md:text-base">
                Leadership development, behavioural training, performance coaching, communication and culture interventions.
              </p>
              <a href="#services" className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-cyan-200">
                Explore Services <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-2xl">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-semibold text-white md:text-2xl">Workplace Safety &amp; Compliance</h2>
              <p className="mb-4 text-sm leading-relaxed text-white/80 md:text-base">
                POSH, POCSO, IC training, external member services, workplace ethics and psychological safety.
              </p>
              <a href="#compliance-safety" className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-cyan-200">
                Explore POSH Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>

        {/* U-SHAPED CURVE - WHITE BOTTOM WAVE */}
       <div className="absolute bottom-0 left-0 w-full z-0 overflow-hidden pointer-events-none">
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

      {/* DOWNLOAD BROCHURE — placed below the blue hero section */}
      <div className="relative z-10 -mt-2 flex justify-center bg-white px-4 pb-8 pt-6">
        <a
          href="/Brochure.pdf"
          download
          className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-7 py-3 font-semibold text-white shadow-md transition hover:scale-105"
        >
          Download Brochure ☁️
        </a>
      </div>

      {/* ABOUT OUR FOUNDER — moved below the hero cards */}
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

          <p className="text-gray-700 mb-8">
           Version2 is inspired by the eagle’s extraordinary journey of self-renewal, the eagle, sheds its old feathers to fly higher, breaks its beak to have newer, changes itself to soar highest and achieve maximum potential. we embrace the belief that to soar, you must first rise above the storm.
          </p>

          <p className="text-gray-700 mb-8">
           We empower individuals & organizations to undergo Transformational Change. We guide you through the process to unlock your Version2.
          </p>

          <p className="text-gray-700 mb-8">
            We help our clients break free from limiting beliefs & reprogram their mindset for growth. At Version2, it’s change followed by transformation that takes you to greater heights.
          </p>

          <p className="text-gray-700">
We are UNIQUE to use Coaching, Training, Counselling, Healing & Therapeutic interventions at various platforms to empower individuals and organizations discover their true purpose by shared accountability, time bound ROI Based coaching and training to transform every thing around them, Health, Relationship, Career and Money.          </p>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* MEET OUR FOUNDER VIDEO */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-black shadow-xl">
            <video
              className="h-[280px] w-full bg-black object-contain md:h-[480px]"
              src="/sample1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          </div>
        </div>
      </section>

  
 <section className="pt-6 pb-20 bg-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="text-2xl md:text-2xl font-bold mb-10 text-[#1E3A8A]">
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
            <p className="text-sm md:text-base font-medium text-[#1E3A8A]">
              {text}
            </p>
          </div>

        </motion.div>

      ))}

    </div>

  </div>


</section>
   




{/* 🔥 WHAT MAKES US DIFFERENT */}
<section className="py-10 md:py-12 bg-gradient-to-r from-[#1E3A8A] to-[#0F172A] text-white text-center">
  <div className="max-w-3xl mx-auto px-6">

    <h2 
      data-aos="fade-up"
      className="text-4xl font-bold mb-6"
    >
      What Makes Us Different
    </h2>

    <p 
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-base mb-6"
    >
      We don’t just focus on skill development
    </p>

    <p 
      data-aos="fade-up"
      data-aos-delay="400"
      className="text-base mb-6"
    >
      Our approach works at the level of mindset, identity, and behavioral patterns to create long-term transformation.
    </p>

    <p 
      data-aos="fade-up"
      data-aos-delay="600"
      className="text-base"
    >
      Instead of short-term learning, we enable sustainable performance, stronger ownership, and real business impact through structured interventions.
    </p>

  </div>
</section>
<div className="h-10 bg-white"></div>

 {/* 🔥 cta */}
 <div className="flex justify-center mb-12">
  <button
  onClick={() => setOpen(true)}
  className="px-8 py-3 rounded-full text-white font-semibold 
             bg-gradient-to-r from-cyan-400 to-blue-500
             hover:from-cyan-300 hover:to-blue-400
             shadow-lg hover:shadow-cyan-500/40
             transition-all duration-300 
             hover:scale-105 active:scale-95"
>
  Book Consultation →
</button>

</div>



      {/* ================= SERVICES SLIDER ================= */}
     
<div id="services" className="mt- mb-">
  <ServicesSlider />
</div>
<div className="h-10 bg-white"></div>
 
      {/* =================Core Transformation Programs================= */}


{/* ================= Core Transformation ================= */}

   

   <div id="core-transformation">
  <CoreSlider />
</div>
    



<div className="h-10 bg-white"></div>

      {/* ================= Compliance & Workplace Safety ================= */}

    
   <div id="compliance-safety">
  <ComplianceSafetySlider />
</div>
  
<div className="h-10 bg-white"></div>
      {/* =================Digital Learning & Capability Systems================= */}

   <div id="digital-learning">
  <DigitalLearningSection />
</div>

 
      {/* ================= Train the Trainer (Certification Programs) ================= */}
     <div className="h-10 bg-white"></div>
<div id="train-trainer">
  <TrainTrainerSlider />
</div>


<div className="h-10 bg-white"></div>
 {/* ================= Executive Events & Strategic Offsites ================= */}

 <div id="executive-events">
  <ExecutiveSlider />
</div>

      {/* ================= OUR WORK ================= */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-700">
      Our Work
    </h2>

    <div className="grid md:grid-cols-5 gap-8">
      {workVideos.map((video, i) => (
        <button
          type="button"
          key={video.src}
          onClick={() => setSelectedWorkVideo(video)}
          aria-label={`Play ${video.title}`}
          className="relative group block w-full h-60 rounded-2xl overflow-hidden shadow-lg
                     transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl
                     focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
        >
          <video
            src={video.src}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-label={video.title}
            className="w-full h-full object-cover bg-black transition duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <span className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

          {/* Play Button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/90 rounded-full w-16 h-16 group-hover:scale-110 transition flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="blue"
                className="w-8 h-8"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      ))}
    </div>
  </div>
</section>

{/* ================= OUR WORK VIDEO MODAL ================= */}
{selectedWorkVideo && (
  <div
    role="dialog"
    aria-modal="true"
    aria-label={selectedWorkVideo.title}
    onClick={() => setSelectedWorkVideo(null)}
    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
  >
    <div
      className="relative w-full max-w-5xl"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setSelectedWorkVideo(null)}
        aria-label="Close video"
        className="absolute -top-12 right-0 text-white text-4xl leading-none hover:text-gray-300 transition"
      >
        &times;
      </button>

      <video
        key={selectedWorkVideo.src}
        src={selectedWorkVideo.src}
        controls
        autoPlay
        playsInline
        className="w-full max-h-[80vh] rounded-xl bg-black"
      />
      <h3 className="text-white text-center mt-4 text-xl font-semibold">
        {selectedWorkVideo.title}
      </h3>
    </div>
  </div>
)}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* TITLE */}
    <div className="border-4 border-[#1E3A8A] rounded-3xl p-10 bg-white shadow-sm">

    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-black">
      Our Clients
    </h2>

    {/* LOGO GRID */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

      {[
        "/1.png",
        "/2.png",
        "/3.png",
        "/4.png",
        "/5.png",
        "/6.png",
        "/7.png",
        "/8.png",
        "/9.png",
        "/0.png",
        "/a.png",
        "/b.png",
        "/c.png",
        "/d.png",
        "/e.png",
        "/f.png",
        "/g.png",
        "/h.png",
        "/i.png",
        "/j.png",
        "/l.png",
        "/m.png",
        "/n.png",
        "/o.png",
        "/p.png"
      ].map((logo, i) => (

        <div
          key={i}
          className="bg-gray-100 p-0 rounded-lg flex items-center justify-center
                     hover:shadow-md transition"
        >
          <img
            src={logo}
            alt="client"
            className="h-8 md:h-10 object-contain"
          />
        </div>

      ))}

    </div>
</div>
  </div>
</section>


<ClientFeedbackScroll />

<WorkGlimpses />

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
     <button
  onClick={() => setOpen(true)}
  className="px-8 py-3 rounded-full text-white font-semibold 
             bg-gradient-to-r from-cyan-400 to-blue-500
             hover:from-cyan-300 hover:to-blue-400
             shadow-lg hover:shadow-cyan-500/40
             transition-all duration-300 
             hover:scale-105 active:scale-95"
>
  Book Consultation →
</button>
<ConsultationModal 
  isOpen={open} 
  onClose={() => setOpen(false)} 
/>

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



    </main>
  

  );
}
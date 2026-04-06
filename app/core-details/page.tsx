import BookingSection from "../components/BookingSection"
import { FaUserTie, FaBrain, FaCrown, FaRocket, FaHeart, FaSearch, FaPenFancy, FaChalkboardTeacher, FaSyncAlt } from "react-icons/fa";



export default function CoreDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-white pt-32 px-6">

      <div className="max-w-6xl mx-auto">
      

        {/* 🔥 HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
            Core Transformation Programs
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform mindset, identity & performance with deep behavioral interventions
          </p>
        </div>

        {/* 🔥 HERO CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-[#1E3A8A]/20 hover:shadow-2xl transition">
          <p className="text-center text-gray-700 text-lg">
            We go beyond skill building to shift mindset, identity, and emotional patterns
            that drive leadership, decision-making, and performance.
          </p>
        </div>
        

{/* 🔥 CALENDLY SECTION */}
 <BookingSection />
 
 {/* 🔥 VIDEO SECTION */}
<div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-3xl p-8 text-white shadow-xl mb-16">

  <h3 className="text-2xl font-bold text-center mb-6">
    See How Transformation Works
  </h3>

  <p className="text-center mb-8 opacity-90">
    Watch how our programs create real impact
  </p>

  {/* VIDEO */}
  <div className="relative w-full max-w-xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">

    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // 👈 apna video link
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
        color: "border-red-400",
      },
      {
        title: "Our Approach",
        desc: "Identity-level work\nMindset restructuring\nEmotional pattern transformation",
        color: "border-blue-500",
      },
      {
        title: "What We Offer",
        desc: "Leadership Identity Shift\nBehavioral Transformation\nCXO Coaching\nPeak Performance",
        color: "border-indigo-500",
      },
      {
        title: "Outcomes",
        desc: "Ownership mindset\nFaster decisions\nConfidence\nConsistent performance",
        color: "border-green-500",
      },
      {
        title: "Who It’s For",
        desc: "Leaders\nManagers\nHigh-potential employees\nCXOs",
        color: "border-purple-500",
      },
    ].map((item, i) => (

      <div
        key={i}
        className={`group p-5 rounded-2xl 
        bg-white
        ${item.color} border-2
        shadow-md
        hover:shadow-2xl hover:-translate-y-2 hover:scale-105
        transition-all duration-500`}
      >

        <h3 className="text-sm font-bold text-[#1E3A8A] mb-3">
          {item.title}
        </h3>

        <p className="text-gray-600 text-xs whitespace-pre-line leading-relaxed">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</div>

{/* 🔥 CORE OFFERINGS SECTION */}
<div className="bg-white rounded-3xl shadow-xl p-10 mb-16 border border-[#1E3A8A]/10">

  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] mb-12">
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
        className="group p-6 rounded-2xl
        bg-gradient-to-br from-white to-[#F0F5FF]
        border border-[#1E3A8A]/10
        shadow-md hover:shadow-xl
        hover:-translate-y-2 transition duration-500"
      >

        <div className="text-[#1E3A8A] text-2xl mb-4">
          {item.icon}
        </div>

        <h3 className="text-lg font-bold text-[#1E3A8A] mb-3">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm">
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
        className="w-[320px] group p-6 rounded-2xl
        bg-gradient-to-br from-white to-[#F0F5FF]
        border border-[#1E3A8A]/10
        shadow-md hover:shadow-xl
        hover:-translate-y-2 transition duration-500"
      >

        <div className="text-[#1E3A8A] text-2xl mb-4">
          {item.icon}
        </div>

        <h3 className="text-lg font-bold text-[#1E3A8A] mb-3">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</div>
     

{/* 🔥 HOW WE WORK - FLOWCHART */}
<div className="py-20">

  <h3 className="text-3xl font-bold text-center text-[#1E3A8A] mb-16">
    How We Work
  </h3>

  <div className="relative max-w-6xl mx-auto">

    {/* LINE */}
    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#1E3A8A]/20 -translate-y-1/2"></div>

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

        <div key={i} className="text-center group">

          {/* ICON CIRCLE */}
          <div className="w-16 h-16 mx-auto mb-4 
          flex items-center justify-center 
          rounded-full bg-white border-4 border-[#1E3A8A] 
          text-[#1E3A8A] text-xl shadow-md
          group-hover:scale-110 transition duration-300">

            {step.icon}

          </div>

          {/* TITLE */}
          <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">
            {step.title}
          </h4>

          {/* DESC */}
          <p className="text-sm text-gray-600 max-w-[200px] mx-auto">
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
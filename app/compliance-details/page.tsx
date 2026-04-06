import BookingSection from "../components/BookingSection"
import { FaUserTie, FaBrain, FaCrown, FaRocket, FaHeart, FaSearch, FaPenFancy, FaChalkboardTeacher, FaSyncAlt } from "react-icons/fa";



export default function CoreDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-white pt-32 px-6">

      <div className="max-w-6xl mx-auto">
      

        {/* 🔥 HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
            COMPLIANCE & WORKPLACE SAFETY
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
           Build a Safe, Compliant, and Trust-Driven Workplace
          </p>
        </div>

        {/* 🔥 HERO CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-[#1E3A8A]/20 hover:shadow-2xl transition">
          <p className="text-center text-gray-700 text-lg">
            We go beyond compliance to create awareness, accountability, and a culture of safety that employees trust.
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
        desc: " • Compliance seen as checkbox\n • Lack of awareness\n • Unsafe culture",
        color: "border-red-400",
      },
      {
        title: "Our Approach",
        desc: "• We move from compliance → culture",
        color: "border-blue-500",
      },
      {
        title: "What We Offer",
        desc: " • POSH End-to-End\n• POCSO\n• Psychological Safety\n• Workplace Ethics\n• Mental Wellness\n• Physical Safety ",
        color: "border-indigo-500",
      },
      {
        title: "Outcomes",
        desc: "• Strong legal compliance\n• Increased employee awareness and confidence\n• Reduced workplace risks and conflicts\n• Improved trust and psychological safety\n• Culture aligned with organizational values",
        color: "border-green-500",
      },
      {
        title: "Who It’s For",
        desc: "• Organizations across industries\n• HR & Compliance Teams\n• Internal Committee (IC) Members\n• Leadership Teams",
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

{/* 🔥 Compliance & Workplace Safety Programs*/}
<div className="bg-white rounded-3xl shadow-xl p-10 mb-16 border border-[#1E3A8A]/10">

  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] mb-12">
   Compliance & Workplace Safety Programs
  </h2>

  {/* TOP 3 */}
 {/* TOP 3 */}
<div className="grid md:grid-cols-3 gap-8 mb-8">

  {[
    {
      title: "POSH (End-to-End Implementation & Training)",
      desc: "Ensures complete compliance through policy setup, IC formation, training, and ongoing support.",
      icon: <FaUserTie />
    },
    {
      title: "POSCO Awareness Programs",
      desc: "Builds awareness around child protection laws and responsible behavior in relevant environments.",
      icon: <FaBrain />
    },
    {
      title: "Psychological Safety & Culture Programs",
      desc: "Enables employees to speak up, collaborate, and contribute without fear.",
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


{/* BOTTOM 3 CENTER */}
<div className="flex justify-center gap-8 flex-wrap">

  {[
    {
      title: "Workplace Ethics & Conduct Training",
      desc: "Strengthens ethical decision-making and responsible workplace behavior.",
      icon: <FaRocket />
    },
    {
      title: "Mental Wellness Interventions",
      desc: "Supports emotional well-being to improve safety, focus, and productivity.",
      icon: <FaHeart />
    },
    {
      title: "Physical Safety Trainings",
      desc: "Promotes awareness and practices that ensure a physically safe work environment.",
      icon: <FaHeart />
    }
  ].map((item, i) => (

    <div
      key={i}
      className="w-full md:w-[30%] group p-6 rounded-2xl
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
          title: "Assess",
          icon: <FaSearch />,
          desc: "We evaluate current compliance status and gaps"
        },
        {
          title: "Structure",
          icon: <FaPenFancy />,
          desc: "We establish policies, systems, and frameworks"
        },
        {
          title: " Train",
          icon: <FaChalkboardTeacher />,
          desc: "We conduct awareness and capability-building sessions"
        },
        {
          title: "Sustain",
          icon: <FaSyncAlt />,
          desc: "We provide ongoing support, audits, and reinforcement"
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
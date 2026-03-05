import Image from "next/image"

export default function LeadershipPerformance() {
  return (
    <div className="pt-32">

      {/* 🔥 HERO SECTION */}
      <div className="relative w-full h-[400px]">

        <Image
          src="/services/leadership.jpg"   // apni image yaha daalna
          alt="Leadership"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Leadership & Performance Excellence
          </h1>
        </div>

      </div>

      {/* 🔥 DESCRIPTION SECTION */}
      <div className="px-6 py-16 max-w-5xl mx-auto">

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          "Leadership Development (6-Month Intervention)
 New Manager Identity Transition
 CXO Coaching – Eagle Shift Framework
 Peak Performance Acceleration (9-Month Intervention)
 Executive Coaching"
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
         
        </p>

      </div>

    </div>
  )
}
import Image from "next/image"

export default function ExecutiveEvents() {
  return (
    <div className="pt-32">

      <div className="relative w-full h-[420px]">
        <Image
          src="/services/event.jpg"
          alt="Executive Events"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Executive Events & Strategic Offsites
          </h1>
        </div>
      </div>

      <div className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We design and facilitate high-impact executive retreats
          and strategic offsite engagements.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our sessions drive strategic alignment, innovation,
          and leadership synergy for long-term growth.
        </p>
      </div>

    </div>
  )
}
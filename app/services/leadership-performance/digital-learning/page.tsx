import Image from "next/image"

export default function DigitalLearning() {
  return (
    <div className="pt-32">

      <div className="relative w-full h-[420px]">
        <Image
          src="/services/digital.jpg"
          alt="Digital Learning"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Digital Learning & Capability Systems
          </h1>
        </div>
      </div>

      <div className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We design scalable digital learning ecosystems that enable
          capability development at speed and scale.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our solutions integrate LMS platforms, e-learning modules,
          and measurable performance dashboards.
        </p>
      </div>

    </div>
  )
}
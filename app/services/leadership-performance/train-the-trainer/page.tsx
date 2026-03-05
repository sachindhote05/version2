import Image from "next/image"

export default function TrainTheTrainer() {
  return (
    <div className="pt-32">

      <div className="relative w-full h-[420px]">
        <Image
          src="/services/trainer.jpg"
          alt="Train The Trainer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Train the Trainer
          </h1>
        </div>
      </div>

      <div className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
         "Certified Internal Trainer Program
 SOP & Safety Training Systems
 Scalable Skill Transfer Architecture
 Audit-Ready Learning Ecosystem"
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          
        </p>
      </div>

    </div>
  )
}
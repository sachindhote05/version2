import Image from "next/image"

export default function CompliancePOSH() {
  return (
    <div className="pt-32">

      <div className="relative w-full h-[420px]">
        <Image
          src="/services/compliance.jpg"
          alt="Compliance"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Compliance & Workplace Safety POSH
          </h1>
        </div>
      </div>

      <div className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        "POSH Employee & Manager Training
 POSH for Internal Committees
 External Member Services
 Annual Compliance Documentation & Audit Readiness
 SHE Box Registration Support
 Quarterly IC Advisory"
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
        
        </p>
      </div>

    </div>
  )
}
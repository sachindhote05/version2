"use client";

export default function ModulesPage() {
  return (
   <div className="pt-32 px-10 pb-10 space-y-32 bg-gray-50">

      {/* ================= BEHAVIORAL ================= */}
      <section
  id="behavioral"
  className="grid md:grid-cols-2 gap-10 items-center scroll-mt-40 pt-10"
>
  <img
    src="/module1.jpg"
    alt="Behavioral Mastery"
    className="rounded-2xl shadow-lg w-full max-h-[400px] object-contain"
  />

  <div>
    <h2 className="text-3xl font-bold text-blue-700 mb-4">
      Behavioral Mastery
    </h2>
    <p className="text-gray-600">
      Yaha tum apni full description likh sakti ho.
    </p>
  </div>
</section>

      {/* ================= MOMENTUM ================= */}
      <section
        id="momentum"
        className="grid md:grid-cols-2 gap-10 items-center scroll-mt-32"
      >
        <div className="md:order-2">
          <img
            src="/module2.jpg"
            alt="Momentum Mastery"
            className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
          />
        </div>

        <div className="md:order-1">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Momentum Mastery
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Yaha tum Momentum Mastery ka detailed explanation likh sakti ho —
            jaise mental fitness, resilience, etc.
          </p>
        </div>
      </section>

      {/* ================= EAGLE ================= */}
      <section
        id="eagle"
        className="grid md:grid-cols-2 gap-10 items-center scroll-mt-32"
      >
        <img
          src="/module3.jpg"
          alt="Eagle Shift Framework"
          className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Eagle Shift Framework
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Yaha tum CXO coaching model, clarity, strategy etc explain kar sakti ho.
          </p>
        </div>
      </section>

      {/* ================= PEAK ================= */}
      <section
        id="peak"
        className="grid md:grid-cols-2 gap-10 items-center scroll-mt-32"
      >
        <div className="md:order-2">
          <img
            src="/module4.jpg"
            alt="Peak Performance Acceleration"
            className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
          />
        </div>

        <div className="md:order-1">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Peak Performance Acceleration
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Yaha tum performance, execution excellence, identity alignment ka detail likh sakti ho.
          </p>
        </div>
      </section>

    </div>
  );
}
import HeroContent from "./components/HeroContent";
import ServicesSlider from "./components/ServicesSlider";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="h-32"></div>

      {/* ================= HERO ================= */}
      <HeroContent />

      {/* ================= SERVICES SLIDER ================= */}
      <ServicesSlider />

      {/* ================= TRA-CO MODULES ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            Tra-Co Modules – Training & Coaching
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {[
              {
                img: "/module1.jpg",
                title: "Behavioral Mastery",
                desc: "12-month mindset shift program for sustainable performance growth.",
                points: [
                  "Productivity Recovery Framework",
                  "Assertive Communication",
                  "Change Management",
                  "Conflict Resolution",
                  "Time Management",
                ],
              },
              {
                img: "/module2.jpg",
                title: "Momentum Mastery",
                desc: "Mental fitness & resilience framework for emerging leaders.",
                points: [
                  "Mindfulness",
                  "Stress Management",
                  "Work Life Balance",
                  "Resilience and Focus",
                  "Burnout Prevention",
                ],
              },
              {
                img: "/module3.jpg",
                title: "Eagle Shift Framework",
                desc: "CXO coaching model for clarity, regulation & strategic expansion.",
                points: [
                  "1:1 Coaching",
                  "Energy and Identity Alignment",
                  "Nervous System Regulation",
                  "Vision & Strategy",
                  "Decision-Making Under Pressure",
                ],
              },
              {
                img: "/module4.jpg",
                title: "Peak Performance Acceleration",
                desc: "Execution excellence through identity & performance alignment.",
                points: [
                  "Types of Sellers",
                  "The Price Drama",
                  "Somatic Sales Code",
                  "Tapping the Warrior in You",
                  "Sales Patterns Recognition",
                ],
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

                  <ul className="text-gray-500 text-sm mt-3 list-disc list-outside pl-5 space-y-1 text-left 
                    opacity-0 max-h-0 overflow-hidden transition-all duration-500 
                    group-hover:opacity-100 group-hover:max-h-96">
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

          <div className="space-y-16">
            {[
              {
                title: "POSH FOR Employees",
                img: "/posh1.jpg",
                desc: "Employee Awareness to create Zero tolerance. Informed voices. Safer workplaces",
                more: "POSH for Employees focuses on building awareness, clarity, and confidence among employees.",
                modes: ["Offline", "Virtual", "Elearning Modules"],
              },
              {
                title: "POSH For Managers",
                img: "/posh2.jpg",
                desc: "Empowering managers to prevent, respond, and lead safe workplaces",
                more: "Understanding red flags, immediate actions, and escalation protocols.",
                modes: ["Offline", "Virtual", "Elearning Modules"],
              },
              {
                title: "POSH For IC",
                img: "/posh3.jpg",
                desc: "Impartial inquiry and lawful redressal through empowered Internal Committees",
                more: "Version2 enables Internal Committees to function with clarity and confidence.",
                modes: ["Offline", "Virtual", "Elearning Modules"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
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
        </div>
      </section>

      {/* ================= E-LEARNING MODULES ================= */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700">
            E-learning Modules Licensing and Development
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
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

      {/* ================= ABOUT FOUNDER ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="/founder.jpg"
            alt="Founder"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Founder</h2>
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

export default function ModulesPage() {

  const modules = [
    {
      id: "behavioral",
      title: "Behavioral Mastery",
      desc: "12-month mindset shift program for sustainable performance growth.",
      img: "/module1.jpg",
    },
    {
      id: "momentum",
      title: "Momentum Mastery",
      desc: "Mental fitness & resilience framework for emerging leaders.",
      img: "/module2.jpg",
    },
    {
      id: "eagle",
      title: "Eagle Shift Framework",
      desc: "CXO coaching model for clarity & strategic expansion.",
      img: "/module3.jpg",
    },
    {
      id: "peak",
      title: "Peak Performance Acceleration",
      desc: "Execution excellence through identity & performance alignment.",
      img: "/module4.jpg",
    },
  ];

  return (
   <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-24">

      {modules.map((item, i) => (
        <div
          key={item.id}
          id={item.id}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          {/* IMAGE */}
          <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
            <img
              src={item.img}
              alt={item.title}
              className="rounded-2xl shadow-xl w-full h-[350px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* TEXT */}
          <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              {item.title}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
}
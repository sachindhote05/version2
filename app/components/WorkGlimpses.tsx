"use client";

const photos = [
  "/work/photo1.jpg",
  "/work/photo2.jpg",
  "/work/photo3.jpg",
  "/work/photo4.jpg",
  "/work/photo5.jpg",
  "/work/photo6.jpg",
  "/work/photo7.jpg",
  "/work/photo8.jpg",
  "/work/photo9.jpg",
  "/work/photo10.jpg",
  "/work/photo11.jpg",
];

export default function WorkGlimpses() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1E3A8A] mb-16 underline">
          Work Glimpses
        </h2>

        <div className="relative w-full overflow-hidden">

          <div className="flex gap-8 w-max animate-work-marquee hover:[animation-play-state:paused]">

            {[...photos, ...photos].map((photo, i) => (
              <div
                key={i}
                className="min-w-[240px] h-[220px] rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                <img
                  src={photo}
                  alt={`Work Glimpse ${(i % photos.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          </div>

        </div>
      </div>

      <style jsx>{`
        .animate-work-marquee {
          animation: workMarquee 28s linear infinite;
        }

        @keyframes workMarquee {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
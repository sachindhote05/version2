"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const words = [
    "Elevating Lives",
    "Elevating Skills",
    "Elevating Performance",
    "Elevating Business",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-x-hidden">

      {/* 🔵 TOP BLUE STRIP */}
      <div className="w-full h-2 bg-blue-600 fixed top-0 z-50"></div>

      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-white shadow-md fixed top-2 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">LOGO</div>
          <div className="space-x-6 font-medium">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#" className="hover:text-blue-600 transition">Services</a>
            <a href="#" className="hover:text-blue-600 transition">About</a>
            <a href="#" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <div className="h-24"></div>

      {/* ================= HERO ================= */}
      <section className="py-24 text-center bg-gradient-to-br from-white via-blue-50 to-white">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Empowering Minds
          </h1>

          <h2
            className={`text-3xl md:text-5xl font-extrabold transition-all duration-500 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
              {words[index]}
            </span>
          </h2>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
            We empower individuals and organizations with innovative strategies,
            practical solutions, and measurable growth.
          </p>

          {/* 🔥 RECTANGLE VIDEO (COMPACT) */}
          <div className="mt-10 flex justify-center">
            <div className="w-[350px] h-[200px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-black">

              <video
                src="/empowering-video.mp4"
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />

            </div>
          </div>

        </div>
      </section>

      {/* ================= WE ENSURE ================= */}
      <section className="py-15">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">We Ensure</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Quality", "Growth", "Success"].map((item, i) => (
              <div key={i} className="p-8 shadow-lg rounded-xl text-center hover:scale-105 transition bg-white">
                <h3 className="font-bold text-xl mb-4">{item}</h3>
                <p className="text-gray-600">
                  We are committed to delivering excellence and measurable impact.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WE OFFER ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">We Offer</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
                <img
                  src={`/offer${item}.jpg`}
                  alt="offer"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-center font-semibold">
                  Premium Service {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Expertise In Detail
          </h2>

          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="mb-14 flex flex-col md:flex-row items-center gap-10">
              <img
                src={`/expert${item}.jpg`}
                alt="expert"
                className="w-full md:w-1/2 rounded-xl shadow-lg"
              />
              <p className="md:w-1/2 text-gray-600">
                Detailed explanation about service {item}. Explain your offering clearly and professionally here.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR METHODOLOGIES ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Our Methodologies
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="p-6 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
                Method {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT FOUNDER ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
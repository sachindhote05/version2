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
     {/* ================= WE ENSURE ================= */}
<section className="py-16 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
      We Ensure
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Box 1 */}
      <div
        className="bg-white border border-blue-100 rounded-2xl p-8 text-center
                   shadow-md transform transition-all duration-500
                   hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500"
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-3">
          Holistic Health,Physical, Mental & Emotiona
        </h3>
        <p className="text-gray-600">
          
        </p>
      </div>

      {/* Box 2 */}
      <div
        className="bg-white border border-blue-100 rounded-2xl p-8 text-center
                   shadow-md transform transition-all duration-500
                   hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500"
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-3">
          "Safe Inclusive & Harmonious Workplace
        </h3>
        <p className="text-gray-600">
         
        </p>
      </div>

      {/* Box 3 */}
      <div
        className="bg-white border border-blue-100 rounded-2xl p-8 text-center
                   shadow-md transform transition-all duration-500
                   hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500"
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-3">
          ROI Based Program Yeilding Performance
        </h3>
       
    
      </div>

    </div>
  </div>
</section>
    
     {/* ================= WE OFFER ================= */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-10">We Offer</h2>

    <div className="grid md:grid-cols-4 gap-8">

      {/* Offer 1 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/offer1.jpg"
          alt="HR Compliance Solutions"
          className="w-full h-48 object-cover"
        />
        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold">HR Compliance Solutions</h3>
        </div>
      </div>

      {/* Offer 2 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/offer2.jpg"
          alt="Employee Wellness Programs"
          className="w-full h-48 object-cover"
        />
        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold">Employee Wellness Programs</h3>
        </div>
      </div>

      {/* Offer 3 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/offer3.jpg"
          alt="Customized Coaching Solitions"
          className="w-full h-48 object-cover"
        />
        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold">Customized Coaching Solitions</h3>
        </div>
      </div>

      {/* Offer 4 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img
          src="/offer4.jpg"
          alt="Success Enabler Series"
          className="w-full h-48 object-cover"
        />
        <div className="p-5 text-center">
          <h3 className="text-lg font-semibold">Business Consulting</h3>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= OUR EXPERTISE ================= */}
      {/* ================= OUR EXPERTISE ================= */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-14">
      Our Expertise In Detail
    </h2>

    {/* Block 1 */}
    <div className="mb-16 flex flex-col md:flex-row items-center gap-10">
      <img
        src="/offer1.jpg"
        alt="Leadership Training"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">HR Compliance Solutions</h3>
        <p className="text-gray-600">
         Version2 stands out by offering customized HR and compliance solutions that not only ensure legal adherence but also foster a proactive, ethical workplace culture. Our unique approach integrates strategic guidance with hands-on training, addressing both compliance needs and organizational growth, empowering teams to thrive sustainably.
          client ko kya benefit hoga — sab explain kar sakte ho.
        </p>
      </div>
    </div>

    {/* Block 2 */}
    <div className="mb-16 flex flex-col md:flex-row-reverse items-center gap-10">
      <img
        src="/offer2.jpg"
        alt="Skill Development"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Employee Wellness Programs</h3>
        <p className="text-gray-600">
         Version2’s Employee Assistance Programs (EAP) are uniquely designed to support both personal and professional well-being. We offer confidential counseling, mental health support, and practical resources to help employees navigate life’s challenges. Our holistic approach focuses on creating a healthier, more resilient workforce, enhancing employee engagement, and driving organizational success by addressing the mental and emotional needs of employees.
        </p>
      </div>
    </div>

    {/* Block 3 */}
    <div className="mb-16 flex flex-col md:flex-row items-center gap-10">
      <img
        src="/offer3.jpg"
        alt="Corporate Training"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Customized Coaching Solitions</h3>
        <p className="text-gray-600">
         Designed to address the unique challenges and goals of individuals and teams. We offer personalized coaching that focuses on leadership development, performance enhancement, and emotional well-being, aligning with both personal aspirations and organizational objectives ensuring impactful, long-lasting transformation to unlock their full potential and contribute meaningfully to the organization’s success.


        </p>
      </div>
    </div>

    {/* Block 4 */}
    <div className="mb-16 flex flex-col md:flex-row-reverse items-center gap-10">
      <img
        src="/offer4.jpg"
        alt="Business Consulting"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Success Enabler Series</h3>
        <p className="text-gray-600">
        Success Enabler Series is a dynamic collection of training programs designed to equip employees with essential skills for personal and professional growth, empowering individuals to develop the mindset and capabilities needed to thrive in today’s fast-paced business environment, ensuring a more engaged, productive, and high-performing workforce.

Read More
        </p>
      </div>
    </div>

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
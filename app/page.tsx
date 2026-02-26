"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 98;
    let duration = 1500;
    let stepTime = 30;
    let step = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="pt-[104px]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Empowering Minds,<br /> Elevating Lives
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            We empower individuals and organizations to unlock their
            true potential and achieve sustainable growth.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-700 text-white px-8 py-3 rounded-md"
          >
            Contact Us →
          </motion.button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
            <div>
              <h3 className="text-3xl font-bold text-blue-700">
                {count}%
              </h3>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-700">50K+</h3>
              <p className="text-gray-500 text-sm">Employees Trained</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-700">18+</h3>
              <p className="text-gray-500 text-sm">Industries Served</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-700">16+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[420px] w-full rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/hero.jpg"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* ================= WE ENSURE ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-14"
          >
            We Ensure
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Quality Service",
              "Trusted Support",
              "Measurable Results",
            ].map((title, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl shadow hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {title}
                </h3>
                <p className="text-gray-600">
                  We provide professional solutions focused on long‑term growth and excellence.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WE OFFER ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-14">
            We Offer
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              { title: "HR & Compliance Solutions", img: "/offer1.jpg" },
              { title: "Employee Assistance Program", img: "/offer2.jpg" },
              { title: "Customised Coaching Solutions", img: "/offer3.jpg" },
              { title: "Success Enabler Series", img: "/offer4.jpg" },
            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-lg group"
              >

                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="bg-white p-6 -mt-10 relative mx-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                   
                  </p>
                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>
      {/* ================= OFFER DETAILS SECTION ================= */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-20">
      Our Expertise In Detail
    </h2>

    {[
      {
        title: "Business Consulting",
        desc: "Version2 stands out by offering customized HR and compliance solutions that not only ensure legal adherence but also foster a proactive, ethical workplace culture. Our unique approach integrates strategic guidance with hands-on training, addressing both compliance needs and organizational growth, empowering teams to thrive sustainably."
      },
      {
        title: "Employee Assistance Program",
        desc: "Version2’s Employee Assistance Programs (EAP) are uniquely designed to support both personal and professional well-being. We offer confidential counseling, mental health support, and practical resources to help employees navigate life’s challenges. Our holistic approach focuses on creating a healthier, more resilient workforce, enhancing employee engagement, and driving organizational success by addressing the mental and emotional needs of employees."
      },
      {
        title: "Customised Coaching Solutions",
        desc: "Designed to address the unique challenges and goals of individuals and teams. We offer personalized coaching that focuses on leadership development, performance enhancement, and emotional well-being, aligning with both personal aspirations and organizational objectives ensuring impactful, long-lasting transformation to unlock their full potential and contribute meaningfully to the organization’s success."
      },
      {
        title: "Success Enabler Series",
        desc: "Success Enabler Series is a dynamic collection of training programs designed to equip employees with essential skills for personal and professional growth, empowering individuals to develop the mindset and capabilities needed to thrive in today’s fast-paced business environment, ensuring a more engaged, productive, and high-performing workforce."
      }
    ].map((item, i) => (
      
      <div 
        key={i} 
        className="mb-16 p-10 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
      >
        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          {item.title}
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed">
          {item.desc}
        </p>
      </div>

    ))}

  </div>
</section>
{/* ================= OUR METHODOLOGIES ================= */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-16">
      Our Methodologies
    </h2>

    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">

      {[
        {
          title: "Research & Analysis",
          desc: "Deep market research and data-driven analysis to understand business challenges."
        },
        {
          title: "Strategic Planning",
          desc: "Structured planning framework to design clear and measurable roadmaps."
        },
        {
          title: "Execution Excellence",
          desc: "Strong implementation approach ensuring high performance delivery."
        },
        {
          title: "Continuous Monitoring",
          desc: "Regular evaluation and performance tracking for better outcomes."
        },
        {
          title: "Optimization & Growth",
          desc: "Continuous improvement strategies focused on scaling success."
        }
      ].map((item, i) => (

        <div
          key={i}
          className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-600"
        >
          <h3 className="text-xl font-bold mb-4 text-blue-700">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>

      ))}

    </div>

  </div>
</section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-900 text-white py-16 text-center">
        © 2026 Version2. All rights reserved.
      </footer>

    </main>
  );
}
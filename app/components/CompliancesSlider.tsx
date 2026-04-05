"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

export default function ComplianceSlider() {
  const router = useRouter();

  const services = [
    {
      title: "Workplace Harassment Prevention",
      img: "/posh1.jpg",
      link: "/services#harassment"
    },
    {
      title: "Manager Safety Leadership",
      img: "/posh2.jpg",
      link: "/services#manager"
    },
    {
      title: "Internal Committee Training",
      img: "/posh3.jpg",
      link: "/services#committee"
    },
    {
      title: "External Member Services",
      img: "/posh4.jpg",
      link: "/services#external"
    },
    {
      title: "Compliance Documentation",
      img: "/posh5.jpg",
      link: "/services#compliance"
    },
    {
      title: "SHE Box Enablement",
      img: "/posh6.jpg",
      link: "/services#shebox"
    }
  ];

  return (
    <section className="py-24 bg-[#0f172a] text-white">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-400">
          Compliance & Workplace Safety
        </h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full"
        >

          {services.map((item, i) => (
            <SwiperSlide key={i} className="!w-[300px]">

              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>

                  <button
                    onClick={() => router.push(item.link)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Learn More
                  </button>
                </div>ijj

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}
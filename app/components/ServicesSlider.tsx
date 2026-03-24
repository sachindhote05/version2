"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"

interface Service {
  id: number
  title: string
  shortDesc: string
  fullDesc: string
  icon: React.ReactNode
  gradient: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Core Transformation Programs",
    shortDesc: "Transform leaders into visionaries",
    fullDesc: "Our Leadership Development programs are designed to cultivate visionary leaders who inspire teams, drive innovation, and navigate complex business landscapes. Through executive coaching, 360-degree assessments, and immersive workshops, we help leaders unlock their full potential and create lasting organizational impact.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Compliance & Workplace Safety",
    shortDesc: "Create safe workplaces",
    fullDesc: "Comprehensive Prevention of Sexual Harassment training and compliance services ensure your organization meets all statutory requirements while fostering a culture of respect and dignity. We provide IC training, employee awareness sessions, policy development, and ongoing compliance support.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: 3,
    title: "Digital Learning & Capability Systems",
    shortDesc: "Personalized growth journeys",
    fullDesc: "One-on-one executive coaching that combines neuroscience-informed techniques with proven leadership frameworks. Our certified coaches work with C-suite executives and senior leaders to enhance decision-making, emotional intelligence, and strategic thinking capabilities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-400",
  },
  {
    id: 4,
    title: "Train the Trainer (Certification Programs)",
    shortDesc: "Learn anytime, anywhere",
    fullDesc: "Custom e-learning solutions including interactive modules, microlearning content, and gamified training experiences. Our digital learning platform integrates seamlessly with your LMS, providing scalable training solutions with detailed analytics and progress tracking.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-orange-500 to-amber-400",
  },
  {
    id: 5,
    title: "Executive Events & Strategic Offsites",
    shortDesc: "Sustainable mindset shifts",
    fullDesc: "Our 12-month Behavioral Mastery program creates lasting performance improvements through structured interventions. Covering productivity, communication, conflict resolution, and interpersonal skills, we help teams develop the mindset foundation for sustainable success.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-rose-500 to-red-400",
  },
  
]

export default function ServicesSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % services.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
  }, [])

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 2320)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  // Swipe gesture handling
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold) {
      nextSlide()
    } else if (info.offset.x > threshold) {
      prevSlide()
    }
  }

  // Get visible cards for carousel display
  const getVisibleCards = () => {
    const cards = []
    for (let i = -2; i <= 2 i++) {
      const index = (activeIndex + i + services.length) % services.length
      cards.push({ service: services[index], position: i })
    }
    return cards
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to transform minds, elevate performance, and drive sustainable growth.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative h-[320px] sm:h-[280px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards */}
          <motion.div
            className="flex items-center justify-center h-full cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence mode="popLayout">
              {getVisibleCards().map(({ service, position }) => {
                const isActive = position === 0
                const scale = isActive ? 1 : 0.85 - Math.abs(position) * 0.05
                const opacity = isActive ? 1 : 0.6 - Math.abs(position) * 0.15
                const zIndex = 10 - Math.abs(position)
                const xOffset = position * 220

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity,
                      scale,
                      x: xOffset,
                      zIndex,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    onClick={() => !isActive && goToSlide(services.findIndex(s => s.id === service.id))}
                    className={`absolute w-[280px] sm:w-[320px] ${!isActive ? "cursor-pointer" : ""}`}
                  >
                    <div
                      className={`
                        relative p-6 rounded-3xl backdrop-blur-xl
                        bg-white/5 border border-white/10
                        transition-all duration-500
                        ${isActive 
                          ? "bg-white/10 border-white/20 shadow-2xl shadow-blue-500/20" 
                          : "hover:bg-white/8"
                        }
                      `}
                    >
                      {/* Glow effect for active card */}
                      {isActive && (
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-30`} />
                      )}

                      <div className="relative">
                        {/* Icon */}
                        <div className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                          bg-gradient-to-br ${service.gradient}
                          shadow-lg ${isActive ? "shadow-lg" : ""}
                        `}>
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {service.shortDesc}
                        </p>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className={`h-1 w-12 mt-4 rounded-full bg-gradient-to-r ${service.gradient}`}
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Arrows */}
         
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${activeIndex === index 
                  ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500" 
                  : "w-2 bg-white/30 hover:bg-white/50"
                }
              `}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* Detailed Description Panel */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            {/* Gradient accent */}
            <div className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${services[activeIndex].gradient}`} />
            
            <div className="flex items-start gap-4">
              <div className={`
                hidden sm:flex w-14 h-14 rounded-xl items-center justify-center shrink-0
                bg-gradient-to-br ${services[activeIndex].gradient}
              `}>
                <div className="text-white">
                  {services[activeIndex].icon}
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">
                  {services[activeIndex].title}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {services[activeIndex].fullDesc}
                </p>
                
                <button className={`
                  mt-6 px-6 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r ${services[activeIndex].gradient}
                  hover:opacity-90 transition-opacity duration-300
                  shadow-lg hover:shadow-xl
                `}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
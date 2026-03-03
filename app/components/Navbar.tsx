"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesPanelOpen, setServicesPanelOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Desktop outside click close
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDesktopServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed w-full bg-white shadow z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Version2
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 font-medium">

          <Link href="/" className="nav-glow">Home</Link>

          {/* SERVICES (2nd Position) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
              className="nav-glow"
            >
              Services
            </button>

            {desktopServicesOpen && (
              <div className="absolute top-12 left-0 w-[380px] bg-white rounded-xl shadow-xl border p-4 z-50">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/resources" className="nav-glow">Resources</Link>
          <Link href="/clients" className="nav-glow">Clients</Link>
          <Link href="/contact" className="nav-glow">Contact</Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => {
            setMenuOpen(true)
            setServicesPanelOpen(false)
          }}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">

          {/* MAIN MENU (Right Slide) */}
          <div className="absolute right-0 top-0 h-full w-[85%] bg-white p-6 animate-slide-right">

            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>✕</button>
            </div>

            <div className="flex flex-col gap-6 text-lg">

              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <button
                onClick={() => setServicesPanelOpen(true)}
                className="text-left font-semibold"
              >
                Services →
              </button>

              <Link href="/resources">Resources</Link>
              <Link href="/clients">Clients</Link>
              <Link href="/contact">Contact</Link>

            </div>
          </div>

          {/* SERVICES PANEL (Left Slide) */}
          {servicesPanelOpen && (
            <div className="absolute left-0 top-0 h-full w-[85%] bg-white p-6 animate-slide-left">

              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-bold">Services</h2>
                <button onClick={() => setServicesPanelOpen(false)}>←</button>
              </div>

              <div className="flex flex-col gap-4">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    onClick={() => {
                      setMenuOpen(false)
                      setServicesPanelOpen(false)
                    }}
                    className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>

            </div>
          )}

        </div>
      )}
    </nav>
  )
}

const services = [
  {
    title: "Leadership & Performance Excellence",
    slug: "leadership-performance",
    href: "/services/leadership-performance",
  },
  {
    title: "Compliance & Workplace Safety POSH",
    slug: "compliance-posh",
    href: "/services/leadership-performance/compliance-posh",
  },
  {
    title: "Digital Learning & Capability Systems",
    slug: "digital-learning",
    href: "/services/leadership-performance/digital-learning",
  },
  {
    title: "Organizational Behavioural Interventions",
    slug: "organizational-interventions",
    href: "/services/leadership-performance/organizational-interventions",
  },
  {
    title: "Train the Trainer",
    slug: "train-the-trainer",
    href: "/services/leadership-performance/train-the-trainer",
  },
  {
    title: "Executive Events & Strategic Offsites",
    slug: "executive-events",
    href: "/services/leadership-performance/executive-events",
  },
]
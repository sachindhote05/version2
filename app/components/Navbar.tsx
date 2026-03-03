"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Click outside close
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServicesOpen(false)
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

          <Link href="/" className="nav-glow">
            Home
          </Link>

          {/* SERVICES 2nd Position */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="nav-glow"
            >
              Services
            </button>

            {servicesOpen && (
              <div className="absolute top-12 left-0 w-[380px] bg-white rounded-xl shadow-xl border p-4 animate-fade">
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

          <Link href="/resources" className="nav-glow">
            Resources
          </Link>

          <Link href="/clients" className="nav-glow">
            Clients
          </Link>

          <Link href="/contact" className="nav-glow">
            Contact
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-6 space-y-6">

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full text-left font-semibold"
          >
            Services
          </button>

          {servicesOpen && (
            <div className="pl-4 space-y-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  onClick={() => {
                    setMenuOpen(false)
                    setServicesOpen(false)
                  }}
                  className="block text-gray-600"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          )}

          <Link href="/resources">Resources</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/contact">Contact</Link>
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
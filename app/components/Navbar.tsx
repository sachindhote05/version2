"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const services = [
    { label: "Leadership & Performance Excellence", href: "/services/leadership-performance" },
    { label: "Compliance & Workplace Safety POSH", href: "/services/leadership-performance/compliance-posh" },
    { label: "Digital Learning & Capability Systems", href: "/services/leadership-performance/digital-learning" },
    { label: "Organizational Behavioural Interventions", href: "/services/leadership-performance/organizational-interventions" },
    { label: "Train the Trainer", href: "/services/leadership-performance/train-the-trainer" },
    { label: "Executive Events & Strategic Offsites", href: "/services/leadership-performance/executive-events" },
  ]

  const closeAll = () => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
    setDesktopServicesOpen(false)
  }

  // Click outside close (desktop)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* TOP BAR */}
      <div className="bg-blue-600 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-5 text-white text-sm">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="relative w-36 h-12">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-10 font-medium items-center">

            <Link href="/" className="nav-link">Home</Link>

            {/* SERVICES */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                className="nav-link"
              >
                Services
              </button>

              {desktopServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-2xl rounded-xl p-4 animate-fadeIn z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setDesktopServicesOpen(false)}
                      className="block px-4 py-3 hover:bg-blue-50 rounded-lg transition"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/resources" className="nav-link">Resources</Link>
            <Link href="/clients" className="nav-link">Clients</Link>
            <Link href="/contact" className="nav-link">Contact</Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 animate-slideIn">

          <div className="flex justify-between mb-8">
            <span className="text-xl font-semibold">Menu</span>
            <button onClick={closeAll} className="text-3xl">×</button>
          </div>

          {!mobileServicesOpen && (
            <div className="space-y-6 text-lg">
              <Link href="/" onClick={closeAll}>Home</Link>

              <button
                onClick={() => setMobileServicesOpen(true)}
                className="block w-full text-left font-semibold"
              >
                Services →
              </button>

              <Link href="/resources" onClick={closeAll}>Resources</Link>
              <Link href="/clients" onClick={closeAll}>Clients</Link>
              <Link href="/contact" onClick={closeAll}>Contact</Link>
            </div>
          )}

          {mobileServicesOpen && (
            <div className="absolute inset-0 bg-white p-6 animate-slideLeft">
              <button
                onClick={() => setMobileServicesOpen(false)}
                className="mb-6 text-blue-600 font-medium"
              >
                ← Back
              </button>

              <div className="space-y-5">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeAll}
                    className="block text-gray-800 text-base border-b pb-3"
                  >
                    {s.label}
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
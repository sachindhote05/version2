"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeAll = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* 🔵 TOP BAR */}
      <div className="bg-blue-600 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-6 text-white text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
      </div>

      {/* ⚪ MAIN NAV */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={closeAll} className="relative w-36 h-12">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-10 font-medium text-gray-800">

            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition">
                Services
              </button>

              <div className="absolute left-0 top-10 w-96 bg-white shadow-xl rounded-lg
                              opacity-0 invisible translate-y-2
                              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                              transition-all duration-200 z-50">

                <div className="flex flex-col py-3 text-sm">

                  <Link href="/services/leadership-performance" className="px-5 py-3 hover:bg-blue-50">
                    Leadership & Performance Excellence
                  </Link>

                  <Link href="/services/leadership-performance/compliance-posh" className="px-5 py-3 hover:bg-blue-50">
                    Compliance & Workplace Safety POSH
                  </Link>

                  <Link href="/services/leadership-performance/digital-learning" className="px-5 py-3 hover:bg-blue-50">
                    Digital Learning & Capability Systems
                  </Link>

                  <Link href="/services/leadership-performance/organizational-interventions" className="px-5 py-3 hover:bg-blue-50">
                    Organizational Behavioural Interventions
                  </Link>

                  <Link href="/services/leadership-performance/train-the-trainer" className="px-5 py-3 hover:bg-blue-50">
                    Train the Trainer
                  </Link>

                  <Link href="/services/leadership-performance/executive-events" className="px-5 py-3 hover:bg-blue-50">
                    Executive Events & Strategic Offsites
                  </Link>

                </div>
              </div>
            </div>

            <Link href="/resources" className="hover:text-blue-600 transition">
              Resources
            </Link>

            <Link href="/clients" className="hover:text-blue-600 transition">
              Clients
            </Link>

            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>

          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => {
              setMenuOpen(!menuOpen)
              setServicesOpen(false)
            }}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="md:hidden bg-white px-6 py-6 space-y-5 font-medium shadow-lg">

            <Link onClick={closeAll} href="/" className="block">
              Home
            </Link>

            {/* MOBILE SERVICES */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left"
            >
              Services
            </button>

            {servicesOpen && (
              <div className="pl-4 space-y-3 text-sm text-gray-600">

                <Link onClick={closeAll} href="/services/leadership-performance">
                  Leadership & Performance Excellence
                </Link>

                <Link onClick={closeAll} href="/services/leadership-performance/compliance-posh">
                  Compliance & Workplace Safety POSH
                </Link>

                <Link onClick={closeAll} href="/services/leadership-performance/digital-learning">
                  Digital Learning & Capability Systems
                </Link>

                <Link onClick={closeAll} href="/services/leadership-performance/organizational-interventions">
                  Organizational Behavioural Interventions
                </Link>

                <Link onClick={closeAll} href="/services/leadership-performance/train-the-trainer">
                  Train the Trainer
                </Link>

                <Link onClick={closeAll} href="/services/leadership-performance/executive-events">
                  Executive Events & Strategic Offsites
                </Link>

              </div>
            )}

            <Link onClick={closeAll} href="/resources" className="block">
              Resources
            </Link>

            <Link onClick={closeAll} href="/clients" className="block">
              Clients
            </Link>

            <Link onClick={closeAll} href="/contact" className="block">
              Contact
            </Link>

          </div>
        )}

      </div>
    </nav>
  )
}
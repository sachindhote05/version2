"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* 🔵 TOP BAR */}
      <div className="w-full bg-blue-600 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-6 text-white text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
      </div>

      {/* ⚪ MAIN NAVBAR */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="relative w-36 h-12">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-10 font-medium text-gray-800">

            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            {/* 🔥 SERVICES DROPDOWN */}
            <div className="relative group">

              <button className="hover:text-blue-600 transition">
                Services
              </button>

              <div className="absolute left-0 top-10 w-80 bg-white shadow-xl rounded-lg
                              opacity-0 invisible translate-y-3
                              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                              transition-all duration-300">

                <div className="flex flex-col py-4 text-sm">

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

          {/* MOBILE BUTTON */}
          <button
            onClick={() => {
              setMenuOpen(true)
              setServicesOpen(false)
            }}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6">

          <div className="flex justify-between items-center mb-10">
            <p className="text-xl font-semibold">Menu</p>
            <button onClick={() => setMenuOpen(false)} className="text-2xl">✕</button>
          </div>

          {!servicesOpen && (
            <div className="flex flex-col gap-6 text-lg font-medium">

              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

              <button
                onClick={() => setServicesOpen(true)}
                className="text-left"
              >
                Services
              </button>

              <Link href="/resources">Resources</Link>
              <Link href="/clients">Clients</Link>
              <Link href="/contact">Contact</Link>

            </div>
          )}

          {servicesOpen && (
            <div className="absolute top-0 left-0 w-full h-full bg-white p-6">

              <button
                onClick={() => setServicesOpen(false)}
                className="mb-8 text-sm text-gray-500"
              >
                ← Back
              </button>

              <div className="flex flex-col gap-5 text-base font-medium">

                <Link href="/services/leadership-performance">Leadership & Performance Excellence</Link>
                <Link href="/services/leadership-performance/compliance-posh">Compliance & Workplace Safety POSH</Link>
                <Link href="/services/leadership-performance/digital-learning">Digital Learning & Capability Systems</Link>
                <Link href="/services/leadership-performance/organizational-interventions">Organizational Behavioural Interventions</Link>
                <Link href="/services/leadership-performance/train-the-trainer">Train the Trainer</Link>
                <Link href="/services/leadership-performance/executive-events">Executive Events & Strategic Offsites</Link>

              </div>
            </div>
          )}

        </div>
      )}

    </nav>
  )
}
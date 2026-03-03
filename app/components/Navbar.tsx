"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { IoArrowBack } from "react-icons/io5"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

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
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

          <Link href="/" className="relative w-36 h-12">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex gap-10 font-medium">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Mobile button */}
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

      {/* 📱 MOBILE MAIN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-6 text-center font-medium text-lg">

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl"
          >
            ✕
          </button>

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <button
            onClick={() => setServicesOpen(true)}
            className="w-full py-3 bg-blue-50 rounded-xl font-semibold"
          >
            Services
          </button>

          <Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link href="/clients" onClick={() => setMenuOpen(false)}>Clients</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* 📱 SERVICES SIDE PANEL */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white transition-transform duration-300 z-50
        ${servicesOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 space-y-5 text-left">

          <button
            onClick={() => setServicesOpen(false)}
            className="flex items-center gap-2 text-blue-600 font-medium mb-6"
          >
            <IoArrowBack size={20} /> Back
          </button>

          <Link href="/services/leadership-performance" className="block py-3 border-b">
            Leadership & Performance Excellence
          </Link>

          <Link href="/services/compliance-posh" className="block py-3 border-b">
            Compliance & Workplace Safety POSH
          </Link>

          <Link href="/services/digital-learning" className="block py-3 border-b">
            Digital Learning & Capability Systems
          </Link>

          <Link href="/services/organizational-interventions" className="block py-3 border-b">
            Organizational Behavioural Interventions
          </Link>

          <Link href="/services/train-the-trainer" className="block py-3 border-b">
            Train the Trainer
          </Link>

          <Link href="/services/executive-events" className="block py-3">
            Executive Events & Strategic Offsites
          </Link>
        </div>
      </div>
    </nav>
  )
}
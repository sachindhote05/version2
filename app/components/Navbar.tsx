"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* 🔵 TOP BLUE BAR */}
      <div className="w-full bg-blue-600 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-end space-x-6 text-white text-lg">
          <FaFacebookF className="cursor-pointer hover:scale-110 transition duration-300" />
          <FaInstagram className="cursor-pointer hover:scale-110 transition duration-300" />
          <FaLinkedinIn className="cursor-pointer hover:scale-110 transition duration-300" />
          <FaWhatsapp className="cursor-pointer hover:scale-110 transition duration-300" />
        </div>
      </div>

      {/* ⚪ MAIN NAVBAR */}
      <div className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="relative w-36 h-12">
            <Image
              src="/logo.png"
              alt="Company Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10 text-gray-800 font-medium">

            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            {/* 🔥 SERVICES (HOVER OPEN) */}
            <div className="relative group">

              <button className="hover:text-blue-600 transition">
                Services
              </button>

              {/* DROPDOWN */}
              <div className="absolute left-0 top-14 w-96 bg-white rounded-xl shadow-xl border border-gray-100 
                              opacity-0 invisible translate-y-3 
                              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                              transition-all duration-300">

                <div className="flex flex-col py-4">

                  <Link href="/services/leadership-performance" className="px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
                    Leadership & Performance Excellence
                  </Link>

                  <Link href="/services/leadership-performance/compliance-posh" className="px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
                    Compliance & Workplace Safety POSH
                  </Link>

                  <Link href="/services/leadership-performance/digital-learning" className="px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
                    Digital Learning & Capability Systems
                  </Link>

                  <Link href="/services/leadership-performance/organizational-interventions" className="px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
                    Organizational Behavioural Interventions
                  </Link>

                  <Link href="/services/leadership-performance/train-the-trainer" className="px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
                    Train the Trainer
                  </Link>

                  <Link href="/services/leadership-performance/executive-events" className="px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition">
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

          {/* 📱 MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

        {/* 📱 MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white px-6 pb-6 space-y-4 font-medium shadow-lg">

            <Link href="/" className="block text-center">
              Home
            </Link>

            <div className="text-center space-y-2">

              <p className="font-semibold">Services</p>

              <Link href="/services/leadership-performance" className="block text-sm text-gray-600">
                Leadership & Performance Excellence
              </Link>

              <Link href="/services/compliance-posh" className="block text-sm text-gray-600">
                Compliance & Workplace Safety POSH
              </Link>

              <Link href="/services/digital-learning" className="block text-sm text-gray-600">
                Digital Learning & Capability Systems
              </Link>

              <Link href="/services/organizational-interventions" className="block text-sm text-gray-600">
                Organizational Behavioural Interventions
              </Link>

              <Link href="/services/train-the-trainer" className="block text-sm text-gray-600">
                Train the Trainer
              </Link>

              <Link href="/services/executive-events" className="block text-sm text-gray-600">
                Executive Events & Strategic Offsites
              </Link>

            </div>

            <Link href="/resources" className="block text-center">
              Resources
            </Link>

            <Link href="/clients" className="block text-center">
              Clients
            </Link>

            <Link href="/contact" className="block text-center">
              Contact
            </Link>

          </div>
        )}

      </div>

    </nav>
  )
}
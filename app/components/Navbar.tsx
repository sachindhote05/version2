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

            {/* SERVICES */}
            <div className="relative group">

              <button className="hover:text-blue-600 transition">
                Services
              </button>

              {/* DROPDOWN */}
              <div className="absolute left-0 top-14 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100
                              opacity-0 invisible translate-y-4
                              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                              transition-all duration-300">

                <div className="flex flex-col py-4">

                  {[
                    { title: "Leadership & Performance Excellence", link: "/services/leadership-performance" },
                    { title: "Compliance & Workplace Safety (POSH)", link: "/services/compliance-posh" },
                    { title: "Digital Learning & Capability Systems", link: "/services/digital-learning" },
                    { title: "Organizational Behavioural Interventions", link: "/services/organizational-behaviour" },
                    { title: "Train the Trainer", link: "/services/train-the-trainer" },
                    { title: "Executive Events & Strategic Offsites", link: "/services/executive-events" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.link}
                      className="px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition rounded-lg"
                    >
                      {item.title}
                    </Link>
                  ))}

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
          <div className="md:hidden bg-white px-6 py-6 space-y-6 font-medium shadow-xl">

            <Link href="/" className="block text-center text-lg">
              Home
            </Link>

            {/* SERVICES SECTION */}
            <div>
              <h3 className="text-xs tracking-widest text-gray-400 text-center mb-4">
                SERVICES
              </h3>

              <div className="space-y-4">

                {[
                  { title: "Leadership & Performance Excellence", link: "/services/leadership-performance" },
                  { title: "Compliance & Workplace Safety (POSH)", link: "/services/compliance-posh" },
                  { title: "Digital Learning & Capability Systems", link: "/services/digital-learning" },
                  { title: "Organizational Behavioural Interventions", link: "/services/organizational-behaviour" },
                  { title: "Train the Trainer", link: "/services/train-the-trainer" },
                  { title: "Executive Events & Strategic Offsites", link: "/services/executive-events" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block rounded-2xl bg-gradient-to-r from-blue-50 to-white
                               border border-blue-100 px-5 py-4
                               text-gray-800 text-center
                               shadow-sm
                               transition-all duration-300
                               active:scale-95 hover:shadow-md hover:border-blue-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}

              </div>
            </div>

            <div className="pt-6 border-t space-y-4 text-center text-lg">
              <Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
              <Link href="/clients" onClick={() => setMenuOpen(false)}>Clients</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>

          </div>
        )}

      </div>

    </nav>
  )
}
"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

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

    <nav className="w-full bg-white shadow-md fixed top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Version2 Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 font-medium">

          <Link href="/">Home</Link>

          {/* SERVICES DROPDOWN */}
          <div className="relative" ref={dropdownRef}>

            <button
              onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
            >
              Services
            </button>

            {desktopServicesOpen && (

              <div className="absolute top-12 left-0 w-[350px] bg-white shadow-xl rounded-xl border p-4">

                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="block px-4 py-3 rounded-lg hover:bg-blue-50"
                  >
                    {s.title}
                  </Link>
                ))}

              </div>

            )}

          </div>

          <Link href="/resources">Resources</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/contact">Contact</Link>

        </div>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-4 text-lg">

          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaWhatsapp /></a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-6 gap-4">

            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/contact">Contact</Link>

          </div>

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
    href: "/services/compliance-posh",
  },
  {
    title: "Digital Learning & Capability Systems",
    slug: "digital-learning",
    href: "/services/digital-learning",
  },
  {
    title: "Organizational Behavioural Interventions",
    slug: "organizational-interventions",
    href: "/services/organizational-interventions",
  },
  {
    title: "Train the Trainer",
    slug: "train-the-trainer",
    href: "/services/train-the-trainer",
  },
  {
    title: "Executive Events & Strategic Offsites",
    slug: "executive-events",
    href: "/services/executive-events",
  },
]
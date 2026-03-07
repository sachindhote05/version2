"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { searchData } from "@/data/searchData"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
const [desktopResourcesOpen, setDesktopResourcesOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])

  const router = useRouter()

  const dropdownRef = useRef<HTMLDivElement>(null)

  // LIVE SEARCH
  const handleChange = (e:any) => {
    const value = e.target.value
    setQuery(value)

    const filtered = searchData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )

    setResults(filtered)
  }

  // ENTER PRESS SEARCH
  const handleSearch = (e:any) => {
    e.preventDefault()

    if(results.length > 0){
      router.push(results[0].link)
    }
  }

  useEffect(() => {
    function handleClickOutside(event:any) {
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

        {/* SEARCH BAR */}
        <div className="relative hidden md:flex mx-6">

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleChange}
              className="w-[260px] border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>

          {/* DROPDOWN RESULTS */}
          {query && results.length > 0 && (

            <div className="absolute top-12 w-full bg-white border rounded-lg shadow-lg z-50">

              {results.map((item, index) => (
                <div
                  key={index}
                  onClick={() => router.push(item.link)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item.title}
                </div>
              ))}

            </div>

          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6">

          <div className="flex items-center gap-4 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>

          <Link
            href="/login"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </Link>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* SECOND NAVBAR */}
      <div className="border-t bg-gray-50 hidden md:block">

        <div className="max-w-7xl mx-auto px-6 flex gap-10 py-3 font-medium">

          <Link href="/">Home</Link>

         <div
  className="relative"
  onMouseEnter={() => setDesktopServicesOpen(true)}
  onMouseLeave={() => setDesktopServicesOpen(false)}
>

  <button>
    Services
  </button>

            {desktopServicesOpen && (

              <div className="absolute top-10 left-0 w-[350px] bg-white shadow-xl rounded-xl border p-4">

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
<div className="relative">

  <button
    onClick={() => setDesktopResourcesOpen(!desktopResourcesOpen)}
  >
    Resources
  </button>

  {desktopResourcesOpen && (

    <div className="absolute top-10 left-0 w-[300px] bg-white shadow-xl rounded-xl border p-4">

      {resources.map((r) => (
        <Link
          key={r.title}
          href={r.href}
          className="block px-4 py-3 rounded-lg hover:bg-blue-50"
        >
          {r.title}
        </Link>
      ))}

    </div>

  )}

</div>
          <Link href="/clients">Clients</Link>
          <Link href="/contact">Contact</Link>

        </div>

      </div>

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
const resources = [
  {
    title: "Downloads",
    href: "/resources/downloads",
  },
  {
    title: "Newsletters",
    href: "/resources/newsletters",
  },
  {
    title: "Blogs",
    href: "/resources/blogs",
  },
  {
    title: "Media",
    href: "/resources/media",
  },
  {
    title: "Free Videos",
    href: "/resources/videos",
  },
]
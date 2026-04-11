"use client"

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation"
import { searchData, type SearchItem } from "@/data/searchData"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

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
  { title: "Downloads", href: "/resources/downloads" },
  { title: "Newsletters", href: "/resources/newsletters" },
  { title: "Blogs", href: "/resources/blogs" },
  { title: "Media", href: "/resources/media" },
  { title: "Free Videos", href: "/resources/videos" },
]



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])

  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    const filtered = searchData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )

    setResults(filtered)
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (results.length > 0) {
      router.push(results[0].link)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const timeout = setTimeout(() => {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false); // Hide when scrolling down past 100px
        } else {
          setShowNavbar(true); // Show when scrolling up
        }
        setLastScrollY(currentScrollY);
      }, 100); // Debounce for 100ms to prevent flicker

      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <nav
      className={`w-full bg-white/80 backdrop-blur-md shadow-md fixed top-0 z-50 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* TOP NAVBAR */}
     <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Version2 Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* SEARCH */}
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
        <div className="flex items-center gap-3">
         <Link
  href="/login"
  className="bg-black text-white px-4 py-1.5 rounded-lg text-sm"
>
  Login
</Link>
        </div>
      </div>

      {/* SECOND NAVBAR */}
      <div className="border-t bg-white/80 backdrop-blur-md block">
        <div className="max-w-7xl mx-auto px-6 flex gap-10 py-3 font-medium">
          <Link href="/#home" className="text-gray-800 hover:text-blue-600 transition">
            Home
          </Link>

          {/* SERVICES */}
          <Link href="/#services" className="text-gray-800 hover:text-blue-600 transition">
            Services
          </Link>

          {/* RESOURCES */}
          <div className="relative group">
            <button className="text-gray-800 hover:text-blue-600 transition">
              Resources
            </button>

            {/* DROPDOWN */}
            <div
              className="absolute top-10 left-0 w-[350px] bg-white shadow-xl rounded-xl border p-4 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300"
            >
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
          </div>

          <Link href="/clients" className="text-gray-800 hover:text-blue-600 transition">
            Book Consultation
          </Link>

          <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

"use client"

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation"
import { searchData, type SearchItem } from "@/data/searchData"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

const resources = [
  {
    title: "Downloads",
    items: ["POSH Act", "POSH Posters", "POSH Score Card", "Company E-Brochure"]
  },
  {
    title: "Blogs",
    items: ["PoSH", "Inclusive Diversity", "Employee Assistance Program"]
  },
  {
    title: "Newsletters",
    items: ["Monthly Update", "HR Insights"]
  }
];




export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
 const [activeResource, setActiveResource] = useState<number | null>(null);
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
<div
  className="relative inline-block"
  onMouseEnter={() => setShowDropdown(true)}
  onMouseLeave={() => {
    setShowDropdown(false);
    setActiveResource(null);
  }}
>
  <button className="text-gray-800 hover:text-blue-600 transition">
    Resources
  </button>

  {showDropdown && (
    <div className="absolute top-full left-0 mt-1 flex bg-black text-white rounded-xl shadow-xl">

      {/* LEFT SIDE */}
      <div className="w-56 border-r border-gray-700">
        {resources.map((r, index) => (
          <div
            key={r.title}
            onMouseEnter={() => setActiveResource(index)}
            className="px-4 py-3 cursor-pointer hover:bg-gray-700"
          >
            {r.title}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      {activeResource !== null && (
        <div className="w-64 p-4">
          {resources[activeResource].items?.map((item, i) => (
            <div
              key={i}
              className="py-2 hover:text-yellow-400 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}

    </div>
  )}
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

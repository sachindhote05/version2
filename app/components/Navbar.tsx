"use client"

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation"
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

const mobileMenuItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Resources", href: "/#resources" },
  { label: "Contact", href: "/contact" },
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

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const router = useRouter()
  const pathname = usePathname()

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

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const closeMobileMenu = () => {
    setMenuOpen(false);
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

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
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
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
          {/* MOBILE SEARCH */}
          <div className="relative md:hidden">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                className="w-[150px] border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>

            {query && results.length > 0 && (
              <div className="absolute top-10 w-full bg-white border rounded-lg shadow-lg z-50">
                {results.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(item.link)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* LOGIN BUTTON */}
         <Link
  href="/login"
  className="bg-black text-white px-4 py-1.5 rounded-lg text-sm hidden sm:block"
  onClick={closeMobileMenu}
>
  Login
</Link>

          {/* HAMBURGER MENU */}
          <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-800 hover:text-blue-600 transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* SECOND NAVBAR - DESKTOP ONLY */}
      <div className="border-t bg-white/80 backdrop-blur-md hidden md:block">
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

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t transform transition-all duration-300 ease-in-out"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {/* MOBILE LOGIN BUTTON */}
            <Link
              href="/login"
              className="block sm:hidden bg-black text-white px-4 py-2 rounded-lg text-sm text-center w-full"
              onClick={closeMobileMenu}
            >
              Login
            </Link>

            {/* NAVIGATION LINKS */}
            <Link
              href="/#home"
              className="block text-gray-800 hover:text-blue-600 transition py-3 border-b border-gray-100"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              href="/#services"
              className="block text-gray-800 hover:text-blue-600 transition py-3 border-b border-gray-100"
              onClick={closeMobileMenu}
            >
              Services
            </Link>

            {/* MOBILE RESOURCES DROPDOWN */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full text-left text-gray-800 hover:text-blue-600 transition py-3 flex justify-between items-center"
              >
                Resources
                <span className={`transform transition-transform ${showDropdown ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {showDropdown && (
                <div className="pl-4 space-y-2 pb-3">
                  {resources.map((resource, index) => (
                    <div key={resource.title}>
                      <div className="font-medium text-gray-700 py-2">{resource.title}</div>
                      <div className="pl-4 space-y-1">
                        {resource.items.map((item, i) => (
                          <div
                            key={i}
                            className="text-gray-600 hover:text-blue-600 cursor-pointer py-1"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/clients"
              className="block text-gray-800 hover:text-blue-600 transition py-3 border-b border-gray-100"
              onClick={closeMobileMenu}
            >
              Book Consultation
            </Link>

            <Link
              href="/contact"
              className="block text-gray-800 hover:text-blue-600 transition py-3"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

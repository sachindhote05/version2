"use client"

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { onAuthStateChanged, signOut, type User as FirebaseUser } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation"
import { searchData, type SearchItem } from "@/data/searchData"
import Link from "next/link"
import { FaBell, FaUser } from "react-icons/fa";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import ContactModal from "./ContactModal";
import { auth } from "@/lib/firebase";




const resources = [
  {
    name: "POSH Act Download",
    file: "/resources/posh-act.pdf",
  },
  {
    name: "POSH FAQ's",
    file: "/resources/posh-faq.docx",
  },
  {
    name: "Mindset vs Skillset",
    file: "/resources/mindset-vs-skillset.docx",
  },
  {
    name: "POSH Poster 1",
    file: "/resources/posh-poster1.jpg",
  },
  {
    name: "POSH Poster 2",
    file: "/resources/posh-poster2.jpg",
  },
  {
    name: "Psychological Safety Assessment",
    file: "/resources/psychological-safety.docx",
  },
];

const mobileMenuItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Resources", href: "/#resources" },
  { label: "Contact", href: "/contact" },
];




export default function Navbar() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeResource, setActiveResource] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  
  // Refs to track scroll state without causing re-renders
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isScrollingDown = useRef(false);
  const minScrollDistance = useRef(10); // Minimum pixels to scroll before triggering logic

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
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuOpen]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserMenuOpen(false);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Optimized scroll handler with proper debouncing and state management
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

      // Ignore small scroll movements to prevent flickering
      if (scrollDifference < minScrollDistance.current) {
        return;
      }

      const nowScrollingDown = currentScrollY > lastScrollY.current;

      // Clear existing timeout to prevent multiple state updates
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Debounce the state update
      scrollTimeout.current = setTimeout(() => {
        // Only update state if scroll direction actually changed
        if (nowScrollingDown !== isScrollingDown.current) {
          isScrollingDown.current = nowScrollingDown;
          
          // Hide navbar when scrolling down past 100px, show when scrolling up or at top
          if (nowScrollingDown && currentScrollY > 100) {
            setShowNavbar(false);
          } else {
            setShowNavbar(true);
          }
        }
        lastScrollY.current = currentScrollY;
      }, 50); // Reduced debounce time for snappier response
    };

    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []); // Empty dependency array - no re-runs needed

  return (
    <>
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

          

{/* LOGIN */}
         <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                type="button"
                onClick={() => setUserMenuOpen((prev) => !prev)}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold transition-shadow shadow-sm hover:shadow-lg"
              >
                {((user.displayName || user.email || "")
                  .trim()
                  .charAt(0)
                  .toUpperCase()) || "U"}
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-white shadow-xl border border-slate-200 text-slate-900 overflow-hidden z-50">
                  <div className="px-4 py-4 border-b border-slate-200">
                    <p className="text-sm text-slate-500">Signed in as</p>
                    <p className="font-semibold text-slate-900 truncate">
                      {user.displayName || user.email}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition-all duration-300 ease-in-out hover:from-cyan-400 hover:to-blue-400 hover:scale-105 hover:shadow-lg"
            >
              Log In
            </button>
          )}
        </div>

  {/* MOBILE LOGIN ICONS */}
<div className="flex md:hidden items-center gap-3">

  {/* BELL ICON */}
  <FaBell className="text-gray-700 text-lg cursor-pointer hover:text-blue-500 transition" />

  {/* USER ICON */}
  <button 
    onClick={() => setShowLoginModal(true)}
    className="text-gray-700 text-lg cursor-pointer hover:text-blue-500 transition"
  >
    <FaUser />
  </button>

</div>

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
  <div className="absolute top-full left-0 mt-1 bg-black text-white rounded-xl shadow-xl w-72 p-4">

    {resources.map((item, index) => (
      <a
        key={index}
        href={item.file}
        target="_blank"
        download
        className="block py-3 px-2 hover:bg-gray-800 rounded-lg transition"
      >
        {item.name}
      </a>
    ))}

  </div>
)}
</div>


         <button
  onClick={() => setShowContactModal(true)}
  className="text-gray-800 hover:text-blue-600 transition"
>
  Contact
</button>
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

      {/* Login Modal - Rendered Outside Nav */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

      {/* Signup Modal - Rendered Outside Nav */}
      <ContactModal
  isOpen={showContactModal}
  onClose={() => setShowContactModal(false)}
/>
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
    
    </>

    
  )
}

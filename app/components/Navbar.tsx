"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { searchData, type SearchItem } from "@/data/searchData"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

export default function Navbar() {

  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [desktopResourcesOpen, setDesktopResourcesOpen] = useState(false)

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

    if(results.length > 0){
      router.push(results[0].link)
    }
  }

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">

      {/* TOP NAVBAR */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

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
        <div className="hidden md:flex items-center gap-6">

          

          <Link
            href="/login"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </Link>

        </div>

      </div>

      {/* SECOND NAVBAR */}
      <div className="border-t bg-gray-50 hidden md:block">

        <div className="max-w-7xl mx-auto px-6 flex gap-10 py-3 font-medium">

       <Link href="/#home" className="hover:text-blue-500 transition">
  Home
</Link>

          {/* SERVICES */}
         <a href="#services">
  <button className="hover:text-blue-500 transition">
    Services
  </button>
</a>

          {/* RESOURCES */}
         <div
  className="relative group"
>
  <button className="hover:text-blue-500 transition">
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
  { title: "Downloads", href: "/resources/downloads" },
  { title: "Newsletters", href: "/resources/newsletters" },
  { title: "Blogs", href: "/resources/blogs" },
  { title: "Media", href: "/resources/media" },
  { title: "Free Videos", href: "/resources/videos" },
]

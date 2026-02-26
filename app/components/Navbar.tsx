"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* 🔵 Top Blue Bar */}
      <div className="bg-blue-700 text-white h-10 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-end gap-5 text-lg">

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>

          <a href="https://wa.me/917022621235" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>

        </div>
      </div>

      {/* ⚪ White Navbar */}
      <div className="bg-white shadow-md h-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">

          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-28 h-auto"
          />

          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </nav>

          <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
            Get Started
          </button>

        </div>
      </div>
    </header>
  );
}
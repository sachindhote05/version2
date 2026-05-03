"use client";

import { useState } from "react";
import { FaGoogle, FaTimes, FaLinkedinIn, FaApple, FaEnvelope } from "react-icons/fa";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [userType, setUserType] = useState<"corporate" | "individual" | null>(null);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleLogin = (provider: string) => {
    if (!userType) {
      setError("Please select Corporate or Individual");
      return;
    }
    // Proceed with login logic
    console.log(`Logging in with ${provider} as ${userType}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      {/* Dark blurred overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
        aria-hidden="true"
      />

      {/* Modal container */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-12 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100"
          aria-label="Close login modal"
        >
          <FaTimes size={24} />
        </button>

        {/* Background logo grid effect (subtle) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl overflow-hidden">
          <div className="grid grid-cols-4 gap-4 p-8">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Title section */}
          <div className="mb-6 text-center">
            <h1 id="login-title" className="text-3xl font-bold text-gray-900 mb-2">
              Login to get full access &
            </h1>
            <p className="text-2xl font-bold">
              <span className="text-gray-900">be a part of the </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                conversation
              </span>
              <span className="text-gray-900"> ✍️</span>
            </p>
          </div>

          {/* User Type Selection */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {/* Corporate Button */}
            <button
              onClick={() => {
                setUserType("corporate");
                setError("");
              }}
              className={`p-4 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                userType === "corporate"
                  ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md"
                  : "border-gray-200 text-gray-700 hover:border-blue-300"
              }`}
            >
              <div className="text-lg mb-1">🏢</div>
              <span>Corporate</span>
            </button>

            {/* Individual Button */}
            <button
              onClick={() => {
                setUserType("individual");
                setError("");
              }}
              className={`p-4 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                userType === "individual"
                  ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md"
                  : "border-gray-200 text-gray-700 hover:border-blue-300"
              }`}
            >
              <div className="text-lg mb-1">👤</div>
              <span>Individual</span>
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Login buttons */}
          <div className="space-y-3 mb-8">
            {/* Google */}
            <button
              onClick={() => handleLogin("Google")}
              onMouseEnter={() => setHoveredButton("google")}
              onMouseLeave={() => setHoveredButton(null)}
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-200 rounded-full font-semibold text-gray-800 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50"
            >
              <FaGoogle className="text-xl text-red-500" />
              <span>Continue with Google</span>
            </button>

            {/* LinkedIn */}
            <button
              onClick={() => handleLogin("LinkedIn")}
              onMouseEnter={() => setHoveredButton("linkedin")}
              onMouseLeave={() => setHoveredButton(null)}
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-200 rounded-full font-semibold text-gray-800 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50"
            >
              <FaLinkedinIn className="text-xl text-blue-700" />
              <span>Continue with LinkedIn</span>
            </button>

            {/* Apple */}
            <button
              onClick={() => handleLogin("Apple")}
              onMouseEnter={() => setHoveredButton("apple")}
              onMouseLeave={() => setHoveredButton(null)}
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-200 rounded-full font-semibold text-gray-800 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50"
            >
              <FaApple className="text-xl text-gray-900" />
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Footer text */}
          <div className="text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              By continuing I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                terms of use
              </a>
              {" "}and{" "}
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

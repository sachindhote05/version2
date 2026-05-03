"use client";

import { useState } from "react";
import { FaGoogle, FaTimes } from "react-icons/fa";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [type, setType] = useState<"corporate" | "individual" | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    // ❌ if type not selected
    if (!type) {
      setError("Please select Corporate or Individual");
      return;
    }

    // ✅ clear error if selected
    setError("");
    setIsLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      console.log(result.user);
      alert("Login successful 🚀");
      
      // Reset and close modal
      setType(null);
      setError("");
      onClose();
    } catch (error) {
      console.log(error);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Close modal when pressing Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
    >
      {/* Dark overlay with fade animation */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal container with scale animation */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 animate-slideIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (X) on top right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
          Create your account
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Choose your account type to get started
        </p>

        {/* Type selection buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => {
              setType("corporate");
              setError("");
            }}
            className={`p-4 rounded-xl border-2 text-center transition-all duration-200 font-semibold
              ${
                type === "corporate"
                  ? "border-[#1e3a8f] bg-blue-50 text-[#1e3a8f] shadow-md scale-105"
                  : "border-gray-200 hover:border-[#1e3a8f] text-gray-700 hover:text-[#1e3a8f]"
              }
            `}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl mb-1">🏢</span>
              <span>Corporate</span>
            </div>
          </button>

          <button
            onClick={() => {
              setType("individual");
              setError("");
            }}
            className={`p-4 rounded-xl border-2 text-center transition-all duration-200 font-semibold
              ${
                type === "individual"
                  ? "border-[#1e3a8f] bg-blue-50 text-[#1e3a8f] shadow-md scale-105"
                  : "border-gray-200 hover:border-[#1e3a8f] text-gray-700 hover:text-[#1e3a8f]"
              }
            `}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl mb-1">👤</span>
              <span>Individual</span>
            </div>
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeIn">
            <p className="text-red-700 text-sm font-medium">⚠️ {error}</p>
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-xs text-gray-400 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Google login button */}
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-3 border-2 border-gray-200 py-3 rounded-xl font-semibold transition-all duration-200
            ${
              isLoading
                ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-50 hover:border-[#1e3a8f] text-gray-700 hover:text-[#1e3a8f]"
            }
          `}
        >
          <FaGoogle className={isLoading ? "text-gray-300" : "text-red-500"} size={20} />
          <span>{isLoading ? "Signing in..." : "Continue with Google"}</span>
        </button>

        {/* Helper text */}
        <p className="text-center text-gray-500 text-xs mt-6">
          Secure login powered by Google. We'll never post without your permission.
        </p>
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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

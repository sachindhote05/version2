"use client";

import { FaGoogle, FaApple } from "react-icons/fa";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      {/* BOX */}
      <div className="bg-white w-[360px] rounded-xl p-6 relative shadow-xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-xl font-semibold text-center mb-5">
          Create an account
        </h2>

        {/* CORPORATE / INDIVIDUAL */}
        <div className="flex gap-3 mb-5">
          <button className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition">
            Corporate Login
          </button>
          <button className="flex-1 border py-2 rounded-lg hover:bg-gray-100 transition">
            Individual Login
          </button>
        </div>

        {/* GOOGLE */}
        <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 mb-3 hover:bg-gray-100 transition">
          <FaGoogle /> Continue with Google
        </button>

        {/* APPLE */}
        <button className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 mb-3 hover:bg-gray-100 transition">
          <FaApple /> Continue with Apple
        </button>

        {/* EMAIL */}
        <button className="w-full border py-2 rounded-lg hover:bg-gray-100 transition">
          Continue with Email
        </button>

        {/* FOOTER */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing, you agree to Terms & Privacy Policy
        </p>

      </div>
    </div>
  );
}
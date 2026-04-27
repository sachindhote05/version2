"use client";

import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function SignupPage() {
  const [type, setType] = useState<"corporate" | "individual" | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Create your account
        </h2>

        {/* TYPE SELECT */}
        <div className="grid grid-cols-2 gap-4 mb-6">

          <button
            onClick={() => setType("corporate")}
            className={`p-4 rounded-xl border text-center transition
              ${type === "corporate"
                ? "border-[#1e3a8f] bg-blue-50"
                : "border-gray-300 hover:border-[#1e3a8f]"}
            `}
          >
            Corporate
          </button>

          <button
            onClick={() => setType("individual")}
            className={`p-4 rounded-xl border text-center transition
              ${type === "individual"
                ? "border-[#1e3a8f] bg-blue-50"
                : "border-gray-300 hover:border-[#1e3a8f]"}
            `}
          >
            Individual
          </button>

        </div>


        {/* DIVIDER */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* SOCIAL */}
        <div className="space-y-3">

          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-50">
            <FaApple />
            Continue with Apple
          </button>

        </div>

        {/* LOGIN */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#1e3a8f] font-medium hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}
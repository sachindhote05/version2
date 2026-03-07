"use client"

import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-[420px] text-center">

        <h1 className="text-3xl font-bold mb-6">
          Login Portal
        </h1>

        <p className="text-gray-600 mb-8">
          Select your login type
        </p>

        <div className="flex flex-col gap-5">

          {/* Corporate Login */}
          <Link
            href="/login/corporate"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Corporate Login
          </Link>

          {/* Individual Login */}
          <Link
            href="/login/individual"
            className="border border-gray-400 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Individual Login
          </Link>

        </div>

      </div>

    </div>
  )
}
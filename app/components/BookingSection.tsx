"use client"

import { useState } from "react"

export default function BookingSection() {

  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border mb-16">

      <h2 className="text-2xl font-bold text-center text-[#1E3A8A] mb-6">
        Book Consultation
      </h2>

      {/* DATE */}
      <div className="flex justify-center mb-8">
        <input
  type="date"
  className="custom-date bg-[#F5E6D3] border border-[#1E3A8A]/20
  rounded-xl px-5 py-3 text-[#1E3A8A]
  focus:ring-2 focus:ring-[#1E3A8A] outline-none"
/>
      </div>

      {/* TIME */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["10:00 AM","11:00 AM","12:00 PM","02:00 PM","03:00 PM"].map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`px-6 py-3 rounded-xl border ${
              selectedTime === time
                ? "bg-[#1E3A8A] text-white"
                : "bg-[#F5E6D3] text-[#1E3A8A]"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      <div className="text-center">
       <button
  onClick={() => alert("Booking Confirmed ✅")}
  className="bg-[#1E3A8A] text-white
  px-10 py-3 rounded-xl shadow-md
  hover:bg-[#162d63] hover:scale-105
  transition-all duration-300 font-semibold"
>
  Confirm Booking
</button>
      </div>

    </div>
  )
}
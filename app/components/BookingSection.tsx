"use client"

import { useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingSection() {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border mb-16">

      <h2 className="text-2xl font-bold text-center text-[#1E3A8A] mb-6">
        Book Consultation
      </h2>
      

      {/* DATE */}
     
        <input type="date" />
 <div className="flex justify-center mb-6">
  <DatePicker
    selected={selectedDate}
    onChange={(date: Date | null) => setSelectedDate(date)}
    dateFormat="dd-MM-yyyy"
    placeholderText="dd-mm-yyyy"
    className="px-6 py-3 rounded-xl
               border-2 border-[#1E3A8A]
               bg-[#F5EEDD]
               text-gray-700
               focus:outline-none
               focus:border-[#1E3A8A]
               w-full text-center cursor-pointer"
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
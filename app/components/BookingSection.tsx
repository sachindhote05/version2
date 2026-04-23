"use client"

import { useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingSection() {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto bg-white/10 rounded-3xl shadow-xl shadow-slate-900/30 p-10 border border-white/10 backdrop-blur mb-16">

      <h2 className="text-2xl font-bold text-center text-white mb-6">
        Book Consultation
      </h2>
      

      {/* DATE */}
     
 <div className="flex justify-center mb-6">
  <DatePicker
    selected={selectedDate}
    onChange={(date: Date | null) => setSelectedDate(date)}
    dateFormat="dd-MM-yyyy"
    placeholderText="dd-mm-yyyy"
    className="px-6 py-3 rounded-xl
               border border-white/20
               bg-white/10
               text-slate-300
               placeholder-slate-400
               focus:outline-none
               focus:border-cyan-400
               w-full text-center cursor-pointer
               backdrop-blur"
  />
</div>
      {/* TIME */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["10:00 AM","11:00 AM","12:00 PM","02:00 PM","03:00 PM"].map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`px-6 py-3 rounded-xl border transition-all duration-300 ${
              selectedTime === time
                ? "bg-cyan-400 text-black border-cyan-400"
                : "bg-white/10 text-slate-300 border-white/10 hover:border-white/20"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      <div className="text-center">
       <button
  onClick={() => alert("Booking Confirmed ✅")}
  className="bg-cyan-400 text-black
  px-10 py-3 rounded-xl shadow-lg shadow-cyan-500/30
  hover:bg-cyan-300 hover:scale-105
  transition-all duration-300 font-semibold"
>
  Confirm Booking
</button>
      </div>

    </div>
  )
}
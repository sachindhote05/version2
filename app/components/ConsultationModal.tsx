"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: Props) {

  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  date: "",
  time: "",   // 👈 ADD THIS
});

 
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      {/* MODAL */}
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#24345f] p-8 shadow-2xl relative animate-fadeIn">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-white text-3xl"
        >
          ×
        </button>

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Book Consultation
        </h2>

        {/* FORM */}
        <div className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-white mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white placeholder:text-slate-400 outline-none"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-white mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white placeholder:text-slate-400 outline-none"
            />

            {/* EMAIL ERROR */}
            {formData.email &&
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                <p className="text-red-400 text-sm mt-2">
                  Invalid email format
                </p>
              )}
          </div>

          {/* DATE */}
          <div>
            <label className="block text-white mb-2">
              Date
            </label>

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={formData.date}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  date: e.target.value,
                })
              }
              className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white outline-none"
            />
          </div>
          {/* TIME SLOT */}
<div>
  <label className="block text-white mb-2">
    Time Slot
  </label>

  <select
    value={formData.time}
    onChange={(e) =>
      setFormData({
        ...formData,
        time: e.target.value,
      })
    }
   className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white outline-none appearance-none"
   >
  <option value="" className="text-black">Select a time</option>
<option value="10:00 AM" className="text-black">10:00 AM</option>
<option value="11:00 AM" className="text-black">11:00 AM</option>
<option value="12:00 PM" className="text-black">12:00 PM</option>
<option value="2:00 PM" className="text-black">2:00 PM</option>
<option value="3:00 PM" className="text-black">3:00 PM</option>
<option value="4:00 PM" className="text-black">4:00 PM</option>
  </select>
</div>

          {/* BUTTONS */}
         <div className="flex gap-4 pt-4">

  {/* CANCEL */}
  <button
    onClick={onClose}
    className="flex-1 rounded-xl bg-white/10 py-4 text-white font-semibold"
  >
    Cancel
  </button>

  {/* SUBMIT */}
  <button
    type="button"
    disabled={
      !formData.name ||
      !formData.email ||
      !formData.date ||
      !formData.time ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    }
    onClick={() => {

      emailjs.send(
        "service_qbd7hus",
        "template_al1trd6",
        {
          name: formData.name,
          email: formData.email,
          date: formData.date,
          time: formData.time,
        },
        "iDReyH37HkUCcGnDE"
      )

      .then(() => {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          date: "",
          time: "",
        });
      })

      .catch((error) => {
        console.log(error);
        alert("Failed to send email");
      });

    }}
    className={`flex-1 rounded-xl py-4 font-semibold transition-all duration-300
      ${
        !formData.name ||
        !formData.email ||
        !formData.date ||
        !formData.time ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? "bg-gray-500 cursor-not-allowed text-white"
          : "bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:scale-105"
      }
    `}
  >
    Submit
  </button>

</div>

        </div>

      </div>
{/* SUCCESS POPUP */}
{success && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">

    <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">

      <div className="text-5xl mb-4">✅</div>

      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        Consultation Booked
      </h2>

      <p className="text-gray-600 mb-6">
        Your consultation has been booked successfully.
        Our team will contact you shortly.
      </p>

      <button
        onClick={() => {
          setSuccess(false);
          onClose();
        }}
        className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Done
      </button>

    </div>

  </div>
)}
    </div>
  );
}
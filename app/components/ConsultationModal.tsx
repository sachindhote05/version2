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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

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
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
              }
              onClick={() => {

                emailjs.send(
                  "YOUR_SERVICE_ID",
                  "YOUR_TEMPLATE_ID",
                  {
                    name: formData.name,
                    email: formData.email,
                    date: formData.date,
                  },
                  "YOUR_PUBLIC_KEY"
                )

                .then(() => {

                  alert("Consultation Booked Successfully!");

                  onClose();

                  setFormData({
                    name: "",
                    email: "",
                    date: "",
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

    </div>
  );
}
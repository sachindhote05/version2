"use client";

import { useState } from "react";

export default function ConsultationModal({ isOpen, onClose }: any) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/send-mail", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Request Sent ✅");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
        
        <h2 className="text-xl font-bold mb-4">Book Consultation</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Your Name" onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full border p-2 rounded" />
          <input type="date" name="date" onChange={handleChange} className="w-full border p-2 rounded" />

          <button className="w-full bg-cyan-500 text-white py-2 rounded">
            Submit
          </button>
        </form>

        <button onClick={onClose} className="mt-3 text-sm">
          Close
        </button>

      </div>
    </div>
  );
}
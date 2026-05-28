"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: Props) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {

    setLoading(true);

    try {

      await emailjs.send(
        "service_qbd7hus",
        "template_6y3j8bk",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        "vRKrJxnrHRZCndZDK"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      alert("Message Sent Successfully ✅");

      onClose();

    } catch (error) {

      console.log(error);
      alert("Failed to send message");

    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      <div className="bg-white w-full max-w-xl rounded-3xl p-8 relative shadow-2xl">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-gray-500"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="tel"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Company Name"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />

          <textarea
            placeholder="Write your issue or message..."
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3 outline-none resize-none"
          />

          
           <button
  onClick={handleSubmit}
  disabled={
    loading ||
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.company ||
    !formData.message
  }
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

        </div>

      </div>

    </div>
  );
}
"use client";

import { useState } from "react";
import SignupModal from "@/app/components/SignupModal";

export default function SignupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {/* Demo Content */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Get started by creating your account. Choose between Corporate and Individual options.
        </p>

        {/* Open Signup Modal Button */}
        <button
          onClick={openModal}
          className="px-8 py-4 bg-[#1e3a8f] hover:bg-[#1e3a8f]/90 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
        >
          Open Signup Modal
        </button>
      </div>

      {/* Signup Modal */}
      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
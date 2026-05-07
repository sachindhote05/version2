"use client";

import { useState } from "react";
import { FaGoogle, FaTimes } from "react-icons/fa";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [type, setType] = useState<"corporate" | "individual" | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  const handleGoogleLogin = async () => {
    if (!type) {
      setError("Please select Corporate or Individual");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem(
  "user",
  JSON.stringify({
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
  })
);

      // ✅ Firestore save
      await setDoc(
        doc(db, "users", user.uid),
        {
          name: user.displayName,
          email: user.email,
          type: type,
          createdAt: new Date(),
        },
        { merge: true }
      );

      // ✅ Close modal
      onClose();

      // ✅ Success message
     setTimeout(() => {
  alert("You have logged in successfully ✅");
  window.location.reload();
}, 200);

      // reset
      setType(null);

    } catch (err) {
      console.error(err);
      setError("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FaTimes />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold">
            Login to get full access &
          </h2>
          <p className="text-blue-600 text-sm">
            be a part of the conversation ✍️
          </p>
        </div>

        {/* Type Selection */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => setType("corporate")}
            className={`p-3 border-2 rounded-lg ${
              type === "corporate"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            Corporate
          </button>

          <button
            onClick={() => setType("individual")}
            className={`p-3 border-2 rounded-lg ${
              type === "individual"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            Individual
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-xs text-center mb-3">{error}</p>
        )}

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 border rounded-full py-2 hover:bg-gray-50"
        >
          <FaGoogle className="text-red-500" />
          <span>
            {isLoading ? "Logging in..." : "Continue with Google"}
          </span>
        </button>
      </div>
    </div>
  );
}
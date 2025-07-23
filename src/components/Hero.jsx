
// src/components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-green-600 text-white py-16 text-center rounded-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Your Shortcut to Trusted Local Professionals Near You
      </h1>
      <p className="text-lg mb-6">
        Skip the Guesswork – Connect and Book Vetted Electricians, Plumbers,
        Cleaners, Mechanics and other Tradespeople.
      </p>
      <button
        onClick={() => navigate("/auth")}
        className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Get Started Today
      </button>
    </div>
  );
}

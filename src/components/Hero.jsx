import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-green-600 text-white py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Your Short Cut to Trusted Local Professionals near you.
      </h1>
      <p className="text-lg mb-6">
        Skip the Guesswork - Connect and Book Vetted Electricians, Plumbers, Cleaners, Mechanics and other Trades Personnels.
      </p>
      <button
        onClick={() => navigate("/auth")}
        className="bg-white text-green-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
      >
        Get Started Today 
        
      </button>
    </div>
  );
}
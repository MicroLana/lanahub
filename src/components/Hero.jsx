import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-600 text-white py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Find Trusted Professionals in Zimbabwe
      </h1>
      <p className="text-lg mb-6">
        Skip the guesswork and instantly connect to Verified Local Electricians,
        Plumbers, HouseKeepers, Motor Mechanics.... near you.
      </p>
      <button
        onClick={() => navigate("/auth")}
        className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
      >
        Get Started Here
      </button>
    </div>
  );
}

// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onRegister, user }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-green-600">Lanahub</Link>
      <div className="flex gap-6 items-center">
        <Link to="/services" className="text-gray-700 hover:text-green-600 font-medium">Services</Link>
        <a href="#" className="text-gray-700 hover:text-green-600 font-medium">About</a>
        <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Support</a>
        <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Partners</a>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white">Login</button>
        <button onClick={onRegister} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Register</button>
      </div>
    </nav>
  );
}

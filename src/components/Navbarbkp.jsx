// src/components/Navbar.jsx
// src/components/Navbar.jsx
// src/components/Navbar.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onRegister, user }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const serviceTimer = useRef(null);
  const partnerTimer = useRef(null);
  const supportTimer = useRef(null);

  const openMenu = (setter, timerRef) => {
    clearTimeout(timerRef.current);
    setter(true);
  };

  const closeMenuWithDelay = (setter, timerRef) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setter(false), 300);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-green-600">Lanahub</Link>
      <div className="flex gap-8 items-center">
        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => openMenu(setServicesOpen, serviceTimer)}
          onMouseLeave={() => closeMenuWithDelay(setServicesOpen, serviceTimer)}
        >
          <button className="text-gray-700 hover:text-green-600 font-medium px-2">
            Services
          </button>
          {servicesOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded space-y-2">
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                Electrical Repairs
              </Link>
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                Home Renovations
              </Link>
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                Vehicle Repairs
              </Link>
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                Solar Installations
              </Link>
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                Animal Care
              </Link>
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                House Keeping
              </Link>
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                Paint and Decorations
              </Link>
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                Plumbing
              </Link>
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                Children Parties
              </Link>
              <Link to="/services" className="block px-4 py-2 text-black hover:text-green-600">
                View More
              </Link>
            </div>
          )}
        </div>

        {/* Partners Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => openMenu(setPartnersOpen, partnerTimer)}
          onMouseLeave={() => closeMenuWithDelay(setPartnersOpen, partnerTimer)}
        >
          <button className="text-gray-700 hover:text-green-600 font-medium px-2">
            Partners
          </button>
          {partnersOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded space-y-2">
              <Link to="/partners" className="block px-4 py-2 text-black hover:text-green-600">
                Partner
              </Link>
            </div>
          )}
        </div>

        {/* Support Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => openMenu(setSupportOpen, supportTimer)}
          onMouseLeave={() => closeMenuWithDelay(setSupportOpen, supportTimer)}
        >
          <button className="text-gray-700 hover:text-green-600 font-medium px-2">
            Support
          </button>
          {supportOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded space-y-2">
              <Link to="/aboutpage" className="block px-4 py-2 text-black hover:text-green-600">
                About
              </Link>
              <Link to="/blogpage" className="block px-4 py-2 text-black hover:text-green-600">
                Blog
              </Link>
              <Link to="/aboutpage" className="block px-4 py-2 text-black hover:text-green-600">
                Contact
              </Link>
              <Link to="/blogpage" className="block px-4 py-2 text-black hover:text-green-600">
                FAQ
              </Link>
              <Link to="/verificationpage" className="block px-4 py-2 text-black hover:text-green-600">
                Verification Process
              </Link>
              <Link to="/legalpage" className="block px-4 py-2 text-black hover:text-green-600">
                Privacy Statement
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Authentication Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white">
          Login
        </button>
        <button onClick={onRegister} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Register
        </button>
      </div>
    </nav>
  );
}

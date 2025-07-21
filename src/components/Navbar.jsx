import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onRegister, user }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const serviceTimer = useRef(null);
  const partnerTimer = useRef(null);
  const supportTimer = useRef(null);

  const servicesRef = useRef(null);
  const partnersRef = useRef(null);
  const supportRef = useRef(null);

  const openMenu = (setter, timerRef) => {
    clearTimeout(timerRef.current);
    setter(true);
  };

  const closeMenuWithDelay = (setter, timerRef) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setter(false), 300);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (partnersRef.current && !partnersRef.current.contains(e.target)) {
        setPartnersOpen(false);
      }
      if (supportRef.current && !supportRef.current.contains(e.target)) {
        setSupportOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md relative">
      <Link to="/" className="text-3xl font-bold text-green-600">
        Lanahub
      </Link>

      <div className="flex gap-12 items-center">
        {/* Services Dropdown */}
        <div
          className="relative"
          ref={servicesRef}
          onMouseEnter={() => openMenu(setServicesOpen, serviceTimer)}
          onMouseLeave={() => closeMenuWithDelay(setServicesOpen, serviceTimer)}
        >
          <button className="text-gray-700 hover:text-green-600 font-bold text-lg px-2">
            Services
          </button>
          {servicesOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2 z-50">
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Electrical Repairs
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Home Renovations
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Vehicle Repairs
              </Link>
              <div className="border-t border-gray-200 my-2" />
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Solar Installations
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Animal Care
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                House Keeping
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Paint and Decorations
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Plumbing
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Children Parties
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                View More
              </Link>
            </div>
          )}
        </div>

        {/* Partners Dropdown */}
        <div
          className="relative"
          ref={partnersRef}
          onMouseEnter={() => openMenu(setPartnersOpen, partnerTimer)}
          onMouseLeave={() => closeMenuWithDelay(setPartnersOpen, partnerTimer)}
        >
          <button className="text-gray-700 hover:text-green-600 font-bold text-lg px-2">
            Partners
          </button>
          {partnersOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-50">
              <Link
                to="/partners"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Partner
              </Link>
            </div>
          )}
        </div>

        {/* Support Dropdown */}
        <div
          className="relative"
          ref={supportRef}
          onMouseEnter={() => openMenu(setSupportOpen, supportTimer)}
          onMouseLeave={() => closeMenuWithDelay(setSupportOpen, supportTimer)}
        >
          <button className="text-gray-700 hover:text-green-600 font-bold text-lg px-2">
            Support
          </button>
          {supportOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2 z-50">
              <Link
                to="/aboutpage"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                About
              </Link>
              <Link
                to="/blogpage"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Blog
              </Link>
              <Link
                to="/aboutpage"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Contact
              </Link>
              <Link
                to="/blogpage"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                FAQ
              </Link>
              <div className="border-t border-gray-200 my-2" />
              <Link
                to="/verificationpage"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
                Verification Process
              </Link>
              <Link
                to="/legalpage"
                className="block px-4 py-2 text-sm text-black hover:bg-green-50 rounded transition"
              >
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

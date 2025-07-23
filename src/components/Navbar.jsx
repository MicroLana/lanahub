// src/components/Navbar.jsx
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

  const shouldShowRegister =
    !window.location.pathname.endsWith("user-registration") &&
    !window.location.pathname.endsWith("service-provider-registration");

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md relative z-50">
      <Link to="/" className="text-5xl font-bold text-green-600">
        Lanahub
      </Link>

      <div className="flex gap-16 items-center">
        {/* Services Dropdown */}
        <div
          className="relative"
          ref={servicesRef}
          onMouseEnter={() => openMenu(setServicesOpen, serviceTimer)}
          onMouseLeave={() => closeMenuWithDelay(setServicesOpen, serviceTimer)}
        >
          <button className="text-lg font-bold text-gray-700 hover:text-green-600 px-4 py-2">
            Services
          </button>
          {servicesOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg p-2 z-50 border border-gray-200">
              {[
                "Electrical Repairs",
                "Home Renovations",
                "Vehicle Repairs",
                "Solar Installations",
                "Animal Care",
                "House Keeping",
                "Paint and Decorations",
                "Plumbing",
                "Children Parties",
                "View More",
              ].map((label, idx) => (
                <Link
                  key={label}
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className={`block px-4 py-2 text-sm text-black hover:bg-green-100 rounded ${
                    idx === 3 || idx === 6
                      ? "border-t border-gray-200 mt-2 pt-2"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
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
          <button className="text-lg font-bold text-gray-700 hover:text-green-600 px-4 py-2">
            Partners
          </button>
          {partnersOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg p-2 z-50 border border-gray-200">
              <Link
                to="/partners"
                onClick={() => setPartnersOpen(false)}
                className="block px-4 py-2 text-sm text-black hover:bg-green-100 rounded"
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
          <button className="text-lg font-bold text-gray-700 hover:text-green-600 px-4 py-2">
            Support
          </button>
          {supportOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg p-2 z-50 border border-gray-200">
              {[
                { label: "About Us", to: "/about-lanahub" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
                { label: "FAQ", to: "/faq" },
                { divider: true },
                { label: "Verification Process", to: "/verification-process" },
                { label: "Privacy Statement", to: "/policies" },
              ].map((item, i) =>
                item.divider ? (
                  <div key={i} className="border-t border-gray-200 my-2" />
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setSupportOpen(false)}
                    className="block px-4 py-2 text-sm text-black hover:bg-green-100 rounded"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Authentication Buttons */}
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Login
        </Link>
        {shouldShowRegister && (
          <button
            onClick={onRegister}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Register
          </button>
        )}
      </div>
    </nav>
  );
}
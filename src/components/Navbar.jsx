import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Reusable dropdown for nav items with hover, click, and keyboard support
 */
function NavDropdown({ label, items, align = "left" }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef();
  const containerRef = useRef();

  const openMenu = useCallback(() => {
    clearTimeout(timerRef.current);
    setOpen(true);
  }, []);

  const closeMenuWithDelay = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(false), 300);
  }, []);

  const toggleMenu = useCallback(() => {
    clearTimeout(timerRef.current);
    setOpen(prev => !prev);
  }, []);

  const closeImmediately = useCallback(() => {
    clearTimeout(timerRef.current);
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      ref={containerRef}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenuWithDelay}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={toggleMenu}
        onKeyDown={e => {
          if (e.key === "Escape") closeImmediately();
          if (e.key === "ArrowDown") openMenu();
        }}
        className="text-lg font-bold text-gray-700 hover:text-green-600 px-4 py-2 focus:outline-none"
      >
        {label}
      </button>
      {open && (
        <div
          className={`absolute ${
            align === "center"
              ? "left-1/2 transform -translate-x-1/2"
              : "left-0"
          } mt-2 bg-white shadow-xl rounded-lg p-2 z-50 border border-gray-200`}
          role="menu"
          aria-label={label}
        >
          {items.map((item, idx) =>
            item.divider ? (
              <div key={`divider-${idx}`} className="border-t border-gray-200 my-2" />
            ) : (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeImmediately}
                className="block px-4 py-2 text-sm text-black hover:bg-green-100 rounded focus:outline-none"
                role="menuitem"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar({ onRegister }) {
  const { pathname } = useLocation();
  const hiddenPaths = [
    "/user-registration",
    "/service-provider-registration"
  ];
  const shouldShowRegister = !hiddenPaths.includes(pathname);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Find Professional updated to lowercase and dash
  const servicesItems = [
    { label: "Find Professional", to: "/find-professional" },
    { divider: true },
    //{ label: "Electrical Repairs", to: "/services" },
    //{ label: "Home Renovations", to: "/services" },
    //{ label: "Vehicle Repairs", to: "/services" },
   // { label: "Solar Installations", to: "/services" },
    //{ divider: true },
    //{ label: "Animal Care", to: "/services" },
    //{ label: "House Keeping", to: "/services" },
    //{ divider: true },
    //{ label: "Paint and Decorations", to: "/services" },
    //{ label: "Plumbing", to: "/services" },
    //{ label: "Children Parties", to: "/services" },
    //{ divider: true },
    { label: "View Services", to: "/services" }
  ];

  const partnersItems = [
    { label: "Partner", to: "/partners" }
  ];

  const supportItems = [
    { label: "About Us", to: "/about-lanahub" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
    { label: "FAQ", to: "/faq" },
    { divider: true },
    { label: "Verification Process", to: "/verification-process" },
    { label: "Privacy Statement", to: "/policies" }
  ];

  return (
    <nav className="relative bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-5xl font-bold text-green-600">
          Lanahub
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-16 items-center">
          <NavDropdown label="Services" items={servicesItems} />
          <NavDropdown label="Partners" items={partnersItems} />
          <NavDropdown label="Support" items={supportItems} />
        </div>

        {/* Desktop auth */}
        <div className="hidden md:flex gap-4">
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col p-4 gap-4">
            <NavDropdown label="Services" items={servicesItems} align="center" />
            <NavDropdown label="Partners" items={partnersItems} align="center" />
            <NavDropdown label="Support" items={supportItems} align="center" />
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-black hover:bg-green-100 rounded"
            >
              Login
            </Link>
            {shouldShowRegister && (
              <button
                onClick={() => {
                  onRegister();
                  setMobileMenuOpen(false);
                }}
                className="text-left block px-4 py-2 text-black hover:bg-green-100 rounded"
              >
                Register
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

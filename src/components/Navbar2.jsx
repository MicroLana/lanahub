//Developed by Mr N~G~K
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
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
    setOpen((prev) => !prev);
  }, []);

  const closeImmediately = useCallback(() => {
    clearTimeout(timerRef.current);
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
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
        onKeyDown={(e) => {
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
              <div
                key={`divider-${idx}`}
                className="border-t border-gray-200 my-2"
              />
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

export default function Navbar2() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loggedInUser, logout } = useAuth();
  const navigate = useNavigate();
  console.log("Logged in user:", loggedInUser);
  const servicesItems = [
    { label: "View Services", to: "/services" },
    { divider: true },
    { label: "Find Professional", to: "/find-professional" },
  ];

  const partnersItems = [{ label: "Partner", to: "/partners" }];

  const supportItems = [
    { label: "About Us", to: "/about-lanahub" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
    { label: "FAQ", to: "/faq" },
    { divider: true },
    { label: "Verification Process", to: "/verification-process" },
    { label: "Privacy Statement", to: "/policies" },
  ];
  const handleLogout = async () => {
    try {
      await logout();
      console.log("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
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

        {/* No Login/Register Buttons Here */}
        {loggedInUser && (
          <button
            onClick={handleLogout}
            className="text-left block px-4 py-2 text-black hover:bg-green-100 rounded flex items-center space-x-2"
          >
            <LogOut className="w-5 h-5" />
            {/* Optional: add "Logout" text beside icon */}
            {/* <span>Logout</span> */}
          </button>
        )}
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen((v) => !v)}
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
            <NavDropdown
              label="Services"
              items={servicesItems}
              align="center"
            />
            <NavDropdown
              label="Partners"
              items={partnersItems}
              align="center"
            />
            <NavDropdown label="Support" items={supportItems} align="center" />
            {/* No login/register in mobile menu either */}
          </div>
        </div>
      )}
    </nav>
  );
}

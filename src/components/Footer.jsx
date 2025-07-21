// src/components/Footer.jsx
import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const HEADER_OFFSET = 80; // height of your fixed header

  // Scroll the page so the target is visible beneath the fixed header
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate - HEADER_OFFSET, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-green-600 text-white rounded-3xl py-6 mt-8">
      {/* Intro Statement */}
      <div className="w-full text-center mb-2">
        <p className="text-base opacity-90">
          Connecting you with trusted local professionals—electricians, plumbers, cleaners, mechanics, and more.
        </p>
      </div>

      {/* Separator */}
      <div className="w-full border-t border-green-500 mb-4" />

      {/* Links Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        {/* About LanaHub */}
        <div>
          <h4 className="text-lg font-bold mb-2">About LanaHub</h4>
          <ul className="space-y-1 text-base">
            <li>
              <HashLink
                to="/about#vision"
                scroll={scrollWithOffset}
                smooth
                className="hover:underline"
              >
                Vision
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/about#mission"
                scroll={scrollWithOffset}
                smooth
                className="hover:underline"
              >
                Mission
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/about#values"
                scroll={scrollWithOffset}
                smooth
                className="hover:underline"
              >
                Values
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/about#disclaimer"
                scroll={scrollWithOffset}
                smooth
                className="hover:underline"
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/about#contact"
                scroll={scrollWithOffset}
                smooth
                className="hover:underline"
              >
                Disclaimer
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-base">
            <li>
              <HashLink to="/services" className="hover:underline">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink to="/about" className="hover:underline">
                About
              </HashLink>
            </li>
            <li>
              <HashLink to="/blog" className="hover:underline">
                Blog
              </HashLink>
            </li>
            <li>
              <HashLink to="/contact" className="hover:underline">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <img
                src="/images/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="/images/icons/twitter.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="/images/icons/instagram.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="max-w-screen-xl mx-auto w-full border-t border-green-500 mt-6 mb-2 px-4 md:px-8" />

      {/* Copyright */}
      <div className="max-w-screen-xl mx-auto text-center text-sm opacity-80 px-4 md:px-8">
        © {new Date().getFullYear()} LanaHub. All rights reserved.
      </div>
    </footer>
  );
}

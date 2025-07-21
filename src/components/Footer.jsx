// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-light py-section-lg">
      <div className="container mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* About */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About Lanahub</h4>
          <p className="text-base opacity-90">
            Connecting You with Trusted Professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-base">
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/aboutpage" className="hover:underline">About</a></li>
            <li><a href="/blogpage" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#"><img src="/images/icons/facebook.svg" alt="Facebook" className="w-6 h-6"/></a>
            <a href="#"><img src="/images/icons/twitter.svg" alt="Twitter" className="w-6 h-6"/></a>
            <a href="#"><img src="/images/icons/instagram.svg" alt="Instagram" className="w-6 h-6"/></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm opacity-80">
        ©️ {new Date().getFullYear()} Lanahub. All rights reserved.
      </div>
    </footer>
  );
}
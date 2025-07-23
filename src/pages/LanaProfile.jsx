// src/components/LanaProfile.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function LanaProfile() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner */}
      <div className="bg-green-600 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">About Lanahub</h1>
      </div>

      {/* Content */}
      <div className="flex-grow max-w-4xl mx-auto p-6 space-y-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p>
          Lanahub connects you with vetted local professionals across 24 home‑
          and lifestyle services—quickly, reliably, and securely.
        </p>

        <h2 className="text-2xl font-semibold">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Search for the service you need</li>
          <li>Choose from top‑rated local experts</li>
          <li>Book and pay securely online</li>
          <li>Get the job done—hassle‑free</li>
        </ol>

        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          Questions? Email us at{" "}
          <a
            href="mailto:support@lanahub.com"
            className="text-green-600 underline"
          >
            support@lanahub.com
          </a>
        </p>

        <Link
          to="/"
          className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-green-600 py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/lanahubdatabase" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/lanahubdatabase" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/lanahubdatabase" className="hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/lanahubdatabase" className="hover:underline">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/lanahubdatabase" className="hover:underline">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/lanahubdatabase" className="hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <img
              src="/images/bottomlogo.jpeg"
              alt="Social and app links"
              className="w-40"
            />
          </div>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Lanahub 2025 ©️ All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
 ⁠
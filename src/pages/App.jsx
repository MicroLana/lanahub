// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetailsPage from "./pages/ServiceDetailsPage.jsx";
import AboutLanaHub from "./pages/AboutLanaHub.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Partners from "./pages/Partners.jsx";
import FAQ from "./pages/FAQ.jsx";
import Verification from "./pages/Verification.jsx";
import Privacy from "./pages/Privacy.jsx";
import AuthPage from "./pages/AuthPage.jsx";

function AppContent({ onRegister }) {
  const [user, setUser] = useState(null);

  // Placeholder for auth state listener
  useEffect(() => {
    // TODO: implement onAuthStateChanged listener here
    // Example:
    // const unsubscribe = onAuthStateChanged(auth, currentUser => setUser(currentUser));
    // return unsubscribe;
  }, []);

  return (
    <>
      <Navbar onRegister={onRegister} user={user} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetailsPage />} />
          <Route path="/about" element={<AboutLanaHub />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/auth" element={<AuthPage />} />
          {/* Protected route example:
          {user ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/dashboard" element={<Navigate to="/auth" />} />
          )}
          */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App({ onRegister }) {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AppContent onRegister={onRegister} />
      </div>
    </Router>
  );
}

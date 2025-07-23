// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import {
  onAuthStateChanged,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { auth } from "./firebase";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetailsPage from "./pages/ServiceDetailsPage.jsx";
import ProfileModal from "./components/ProfileModal.jsx";
import AboutLanaHub from "./pages/AboutLanaHub.jsx";
import LanahubPolicies from "./pages/LanahubPolicies.jsx";
import VerificationProcess from "./pages/VerificationProcess.jsx";

function AppContent() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  // Handle magic‑link sign‑in & 30‑minute expiry
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please confirm your email for sign‑in:");
      }

      const ts = window.localStorage.getItem("emailLinkTimestamp");
      if (ts && Date.now() - parseInt(ts, 10) > 30 * 60 * 1000) {
        alert("That sign‑in link has expired. Please request a new one.");
        window.localStorage.removeItem("emailForSignIn");
        window.localStorage.removeItem("emailLinkTimestamp");
        navigate("/auth");
        return;
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          window.localStorage.removeItem("emailLinkTimestamp");
          navigate("/");
        })
        .catch((err) => {
          console.error("Error signing in with email link:", err);
          navigate("/auth");
        });
    }
  }, [navigate]);

  return (
    <>
      {showModal && user?.emailVerified && (
        <ProfileModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}

      <Routes>
        <Route
          path="/"
          element={<Layout onRegister={() => setShowModal(true)} user={user} />}
        >
          <Route
            index
            element={<Home user={user} onRegister={() => setShowModal(true)} />}
          />
          <Route path="auth" element={<AuthPage />} />
          <Route path="services" element={<Services />} />
          <Route
            path="service/:id"
            element={
              user?.emailVerified ? (
                <ServiceDetailsPage />
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />
          <Route path="about-lanahub" element={<AboutLanaHub />} />
          <Route path="policies" element={<LanahubPolicies />} />
          <Route
            path="verification-process"
            element={<VerificationProcess />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/user-registration" element={<UserRegistrationPage />} />
        <Route
          path="/service-provider-registration"
          element={<ServiceProviderPage />}
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

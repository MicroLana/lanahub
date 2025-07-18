import { useState, useEffect } from "react";
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

import Home from "./pages/Home.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ServiceDetailsPage from "./pages/ServiceDetailsPage.jsx";
import Services from "./pages/Services.jsx"; // ✅ Import Services Page
import ProfileModal from "./components/ProfileModal.jsx";

function AppContent() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // ✅ 1. Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  // ✅ 2. Handle magic link sign-in & 30-minute expiry
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
          element={<Home user={user} onRegister={() => setShowModal(true)} />}
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/services" element={<Services />} /> {/* ✅ Register Services Page */}
        <Route
          path="/service/:id"
          element={
            user?.emailVerified ? (
              <ServiceDetailsPage />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
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

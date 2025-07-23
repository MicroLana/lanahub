// src/pages/AuthPage.jsx
import React, { useState } from "react";
import {
  sendSignInLinkToEmail,
  signInWithPopup,
  fetchSignInMethodsForEmail
} from "firebase/auth";
import { auth, actionCodeSettings, googleProvider } from "../firebase";

export default function AuthPage() {
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);

  const sendMagicLink = async () => {
    setLoading(true);
    setError("");

    try {
      // 1) See if this email already has any sign‑in methods
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        console.log("Existing account detected with methods:", methods);
      } else {
        console.log("No existing account—first‑time signup.");
      }

      // 2) Send the magic link
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // 3) Persist email & timestamp (for 30‑minute expiry)
      window.localStorage.setItem("emailForSignIn", email);
      window.localStorage.setItem(
        "emailLinkTimestamp",
        Date.now().toString()
      );

      setMessage(
        `✅ Verification Code Send to ${email}. It expires in 30 minutes—check your inbox.`
      );
    } catch (e) {
      console.error(e);
      setError(e.message);
    }

    setLoading(false);
  };

  const handleGoogle = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/accountcreate.jpeg')" }}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Lanahub</h1>

        {message ? (
          <p className="mb-4 text-green-700">{message}</p>
        ) : (
          <>
            {error && <p className="mb-4 text-red-600">{error}</p>}

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <button
              onClick={sendMagicLink}
              disabled={loading || !email}
              className="w-full bg-green-600 text-white p-2 rounded-full mb-4 hover:bg-green-700 transition"
            >
              {loading ? "Sending..." : "Send Verification Email"}
            </button>

            <button
              onClick={handleGoogle}
              disabled={loading}
              className="w-full border-2 border-green-600 text-green-600 p-2 rounded-full hover:bg-green-50 transition"
            >
              {loading ? "Please wait..." : "Continue with Google"}
            </button>
          </>
        )}

        <p className="text-xs text-gray-500 mt-6">
          By using Lanahub you agree to our{" "}
          <a href="/terms" className="underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}


import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

import EmailRegistration from "./EmailRegistration";
import PinVerification from "./PinVerification";
import PasswordSetup from "./PasswordSetup";

export default function AuthModal({ onClose, initialMode = "login" }) {
  const [mode, setMode]       = useState(initialMode);
  const [step, setStep]       = useState("start");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    setStep(initialMode === "login" ? "start" : "email");
    setError("");
    setEmail("");
    setPassword("");
  }, [initialMode]);

  const handleGoogle = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch {
      setError("Google sign-in failed.");
    }
    setLoading(false);
  };

  const handleEmailLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  if (mode === "login") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          {error && <p className="text-red-600 mb-2">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-2 p-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
          />

          <button
            onClick={handleEmailLogin}
            disabled={loading || !email || !password}
            className="w-full bg-blue-600 text-white p-2 rounded mb-2"
          >
            {loading ? "Logging in…" : "Log In"}
          </button>

          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full bg-red-500 text-white p-2 rounded mb-4"
          >
            {loading ? "Please wait…" : "Continue with Google"}
          </button>

          <p
            className="text-center text-blue-600 cursor-pointer"
            onClick={() => {
              setMode("register");
              setStep("email");
              setError("");
            }}
          >
            Don’t have an account? Sign Up
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        {step === "email" && (
          <EmailRegistration
            onSuccess={em => {
              setEmail(em);
              setStep("pin");
            }}
          />
        )}

        {step === "pin" && (
          <PinVerification
            email={email}
            onVerified={() => setStep("password")}
          />
        )}

        {step === "password" && (
          <PasswordSetup
            email={email}
            onSuccess={() => onClose()}
          />
        )}

        <div className="mt-4 text-center">
          <button
            onClick={handleGoogle}
            disabled={loading}
            className="text-blue-600 text-sm"
          >
            Or continue with Google
          </button>
        </div>

        <p
          className="mt-4 text-center text-gray-600 text-sm cursor-pointer"
          onClick={() => {
            setMode("login");
            setStep("start");
            setError("");
          }}
        >
          Back to Log In
        </p>
      </div>
    </div>
  );
}

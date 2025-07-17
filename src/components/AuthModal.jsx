//import React from "react";
import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function AuthModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In Successful!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailAuth = async () => {
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created!");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        {mode === "login" ? "Login" : "Register"}
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-2 p-2 border"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-2 p-2 border"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleEmailAuth}
        className="w-full bg-blue-600 text-white p-2 mb-2"
      >
        {mode === "login" ? "Login" : "Register"}
      </button>

      <button
        onClick={handleGoogleSignIn}
        className="w-full bg-red-500 text-white p-2"
      >
        Sign in with Google
      </button>

      <p
        onClick={() => setMode(mode === "login" ? "register" : "login")}
        className="mt-4 text-blue-600 cursor-pointer text-sm text-center"
      >
        {mode === "login"
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>
    </div>
  );
}

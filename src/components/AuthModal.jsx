import React from "react";

export default function AuthModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 text-xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Login or Register</h2>

        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-3 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <button className="text-blue-600 underline" type="button">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}


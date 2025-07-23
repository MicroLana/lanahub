// src/pages/LanahubLogin.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ResetPassword from './resetpassword.jsx'

export default function LanahubLogin() {
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [resetModalOpen, setResetModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // ← TODO: your auth logic here
    navigate('/')
  }

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/login.jpeg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm border-2 border-green-600 mx-auto"
      >
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Lanahub
        </h1>

        {/* Email / Phone */}
        <div className="mb-5">
          <label className="block text-green-600 font-medium mb-1">
            Email Address / Phone Number
          </label>
          <input
            type="text"
            value={emailOrPhone}
            onChange={e => setEmailOrPhone(e.target.value)}
            placeholder="Email Address / Phone Number"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Password / PIN */}
        <div className="mb-4">
          <label className="block text-green-600 font-medium mb-1">
            Password / PinCode
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password / PinCode"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <button
            type="button"
            onClick={() => setResetModalOpen(true)}
            className="text-sm text-green-600 hover:underline"
          >
            Forgot Password
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-4">
          <button
            type="submit"
            className="flex-1 py-3 bg-green-600 text-white rounded-full font-semibold"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex-1 py-3 border border-green-600 text-green-600 rounded-full font-semibold"
          >
            Cancel
          </button>
        </div>

        <p className="text-center text-sm text-green-600">
          Lanahub Copyright 2025
        </p>

        {/* Reset Password Modal */}
        {resetModalOpen && (
          <ResetPassword onClose={() => setResetModalOpen(false)} />
        )}
      </form>
    </div>
  )
}
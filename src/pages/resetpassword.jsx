// src/pages/resetpassword.jsx
import React, { useState, useEffect, useRef } from 'react'

export default function ResetPassword({ onClose }) {
  const [email, setEmail] = useState('')
  const modalRef = useRef()

  // close when clicking outside modal
  useEffect(() => {
    const handleClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  const handleSend = e => {
    e.preventDefault()
    // ← TODO: your password‑reset logic here
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        ref={modalRef}
        onSubmit={handleSend}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-md font-semibold"
        >
          Send Password Reset Link
        </button>
      </form>
    </div>
  )
}
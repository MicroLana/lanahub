// src/pages/NewUserRegistration.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewUserRegistration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
    suburb: ''
  });

  const countries = ['Zimbabwe', 'South Africa', 'Zambia', 'UK'];
  const suburbs = ['Suburb A', 'Suburb B', 'Suburb C']; // replace with actual suburbs

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const isEmailValid = /^\S+@\S+\.\S+$/.test(form.email);
  const isPhoneValid = /^\+?\d{7,15}$/.test(form.phone);
  const passwordsMatch = form.password && form.password === form.confirmPassword;

  const isFormValid =
    form.fullName &&
    form.surname &&
    isEmailValid &&
    form.password &&
    passwordsMatch &&
    isPhoneValid &&
    form.country &&
    form.suburb;

  const handleSubmit = e => {
    e.preventDefault();
    if (!isFormValid) return;
    // TODO: call API or Firebase to create user
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/images/users.jpeg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white bg-opacity-90 p-6 rounded-md border border-green-600 shadow-md"
      >
        <h1 className="text-2xl font-bold text-green-600 text-left mb-6">
          User Registration
        </h1>

        {/* Name and Surname */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-green-600 rounded-md p-2 text-black focus:ring-green-500 focus:border-green-500"
            required
          />
          <input
            name="surname"
            value={form.surname}
            onChange={handleChange}
            placeholder="Surname"
            className="w-full border border-green-600 rounded-md p-2 text-black focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Email and Suburb in same row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-green-600 rounded-md p-2 text-black focus:ring-green-500 focus:border-green-500"
            required
          />
          <select
            name="suburb"
            value={form.suburb}
            onChange={handleChange}
            className="w-full border border-green-600 rounded-md p-2 text-black focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="" disabled>Select Suburb</option>
            {suburbs.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        {!isEmailValid && form.email && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
        )}

        {/* Password & Confirm in same row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-green-600 rounded-md p-2 text-black focus:ring-green-500 focus:border-green-500"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full border border-green-600 rounded-md p-2 text-black focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        {!passwordsMatch && form.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">Passwords must match</p>
        )}

        {/* Phone and Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number (e.g. +263771234567)"
            className="w-full border border-green-600 rounded-md p-2 text-black focus:ring-green-500 focus:border-green-500"
            required
          />
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full border border-green-600 rounded-md p-2 text-black focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="" disabled>Select Country</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {!isPhoneValid && form.phone && (
          <p className="text-red-500 text-sm mt-1">Enter a valid phone number</p>
        )}

        {/* Actions */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            type="submit"
            disabled={!isFormValid}
            className="px-6 py-2 bg-green-600 text-white rounded-md disabled:opacity-50"
          >
            Create User
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-100"
          >
            Cancel
          </button>
        </div>

        <p className="text-center text-gray-500 mt-6">Lanahub Copyright 2025</p>
      </form>
    </div>
  );
}
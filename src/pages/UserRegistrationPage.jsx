// src/pages/UserRegistrationPage.jsx
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import UserRegister from "../components/UserRegister";
import { useState } from "react";

export default function UserRegistrationPage({ user }) {
  const [openRegisterOptions, setOpenRegisterOptions] = useState(false);
  return (
    <>
      <Navbar onRegister={openRegisterOptions} user={user} />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl">
          <h1 className="text-2xl font-bold text-center mb-6">
            User Registration
          </h1>
          <UserRegister />
        </div>
      </div>
      <Footer />
    </>
  );
}

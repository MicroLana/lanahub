// src/pages/UserRegistrationPage.jsx
import { useState } from "react";
import ServiceProviderRegister from "../components/ServiceProviderRegister";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServiceProviderPage({ user }) {
  const [openRegisterOptions, setOpenRegisterOptions] = useState(false);
  return (
    <>
      <Navbar onRegister={openRegisterOptions} user={user} />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl">
          <h1 className="text-2xl font-bold text-center mb-6">
            Service Provider
          </h1>
          <ServiceProviderRegister />
        </div>
      </div>
      <Footer />
    </>
  );
}

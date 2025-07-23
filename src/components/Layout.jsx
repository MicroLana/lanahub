import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ user }) {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const navigate = useNavigate();

  const openRegisterOptions = () => {
    setRegisterModalOpen(true);
  };

  const handleClose = () => {
    setRegisterModalOpen(false);
  };

  const handleUserRegister = () => {
    handleClose();
    navigate("/user-registration");
  };

  const handleServiceProviderRegister = () => {
    handleClose();
    navigate("/service-provider-registration");
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar onRegister={openRegisterOptions} user={user} />

      {registerModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-2xl"
              onClick={handleClose}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-6 text-center">
              Choose Registration Type
            </h2>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleUserRegister}
                className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                User Registration
              </button>
              <button
                onClick={handleServiceProviderRegister}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Service Provider Registration
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="pt-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

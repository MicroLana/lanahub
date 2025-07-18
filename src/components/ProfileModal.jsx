import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import UserProfileForm from "./UserProfileForm";
import ProviderProfileForm from "./ProviderProfileForm";

export default function ProfileModal({ onClose }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      // only pop up once they've signed in via magic link (emailVerified = true)
      if (currentUser && currentUser.emailVerified) {
        setUser(currentUser);
        setShowModal(true);
      }
    });
    return () => unsub();
  }, []);

  if (!showModal || !user) return null;

  const handleClose = () => {
    setShowModal(false);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &#x2715;
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Complete Your Profile</h2>

        {selectedType === null && (
          <div className="flex justify-around">
            <button
              onClick={() => setSelectedType("user")}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Individual
            </button>
            <button
              onClick={() => setSelectedType("provider")}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Service Provider
            </button>
          </div>
        )}

        {selectedType === "user" && (
          <UserProfileForm user={user} onComplete={handleClose} />
        )}

        {selectedType === "provider" && (
          <ProviderProfileForm user={user} onComplete={handleClose} />
        )}
      </div>
    </div>
  );
}

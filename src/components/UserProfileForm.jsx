import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

// Sorted list of major cities in Zimbabwe
const cities = [
  "Beitbridge", "Bindura", "Bulawayo", "Chegutu", "Chinhoyi", "Chipinge",
  "Chiredzi", "Chitungwiza", "Epworth", "Gokwe", "Gweru", "Harare", "Hwange",
  "Kadoma", "Kariba", "Karoi", "Kwekwe", "Marondera", "Masvingo", "Mutare",
  "Norton", "Redcliff", "Ruwa", "Rusape", "Shurugwi", "Victoria Falls", "Zvishavane"
].sort();

export default function UserProfileForm({ user, onComplete }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: uuidv4(),
    phone: "",
    altPhone: "",
    userType: "user",
    firstName: "",
    surname: "",
    city: "",
    status: "Active",
    profilePicture: "",
    username: user.email,
    email: user.email
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Name allows letters and spaces, phone allows digits including 0
  const validate = () => {
    const namePattern = /^[A-Za-z ]+$/;
    const phonePattern = /^[0-9]+$/;

    if (!form.firstName.match(namePattern)) {
      return "First name must contain only letters and spaces.";
    }
    if (!form.surname.match(namePattern)) {
      return "Surname must contain only letters and spaces.";
    }
    if (!form.phone.match(phonePattern)) {
      return "Phone number must contain digits only.";
    }
    if (form.altPhone && !form.altPhone.match(phonePattern)) {
      return "Alternative phone must contain digits only.";
    }
    if (!form.city) {
      return "Please select a city.";
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      await setDoc(doc(db, "users", user.uid), {
        ...form,
        createdAt: serverTimestamp()
      });
      onComplete();
    } catch (err) {
      console.error(err);
      setError("Failed to save profile.");
    }

    setLoading(false);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white border rounded shadow max-w-xl mx-auto space-y-4">
      <h3 className="text-lg font-semibold mb-2 text-center">Complete Your Profile</h3>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="w-full p-2 border rounded"
        value={form.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="surname"
        placeholder="Surname"
        className="w-full p-2 border rounded"
        value={form.surname}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        className="w-full p-2 border rounded"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="altPhone"
        placeholder="Alternative Phone (optional)"
        className="w-full p-2 border rounded"
        value={form.altPhone}
        onChange={handleChange}
      />

      <select
        name="city"
        className="w-full p-2 border rounded"
        value={form.city}
        onChange={handleChange}
      >
        <option value="">Select City</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <input
        type="text"
        disabled
        value={form.email}
        className="w-full p-2 bg-gray-100 text-gray-700 rounded"
      />

      <input
        type="text"
        name="profilePicture"
        placeholder="Profile Picture URL (manual upload coming)"
        className="w-full p-2 border rounded"
        value={form.profilePicture}
        onChange={handleChange}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 border rounded hover:bg-gray-100"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Profile'}
        </button>
      </div>
    </form>
  );
}

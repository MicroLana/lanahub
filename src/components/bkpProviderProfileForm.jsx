import React, { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const qualificationsList = [
  "Electrician",
  "Plumber",
  "Mechanic",
  "Painter",
  "Welder",
  "Carpenter",
  "Maid",
  "Gardener",
  "IT Technician",
  "Aircon Installer",
  "Other"
];

export default function ProviderProfileForm({ user, onComplete }) {
  const [form, setForm] = useState({
    id: uuidv4(),
    firstName: "",
    surname: "",
    shortBio: "",
    fullBio: "",
    qualification: "",
    city: "",
    officeAddress: "",
    nationalId: "",
    profilePicture: "",
    available: "Yes",
    email: user.email,
    companyName: "",
    companyWebsite: "",
    username: user.email,
    password: "", // optional placeholder for now
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (
      !form.firstName ||
      !form.surname ||
      !form.qualification ||
      !form.nationalId ||
      !form.city ||
      !form.officeAddress ||
      !form.profilePicture
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      await setDoc(doc(db, "serviceProviders", user.uid), {
        ...form,
        createdAt: serverTimestamp(),
      });
      onComplete();
    } catch (err) {
      console.error(err);
      setError("Failed to save provider profile.");
    }
    setLoading(false);
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Service Provider Profile</h3>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="w-full mb-2 p-2 border"
        value={form.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="surname"
        placeholder="Surname"
        className="w-full mb-2 p-2 border"
        value={form.surname}
        onChange={handleChange}
      />

      <input
        type="text"
        name="shortBio"
        placeholder="Short Bio"
        className="w-full mb-2 p-2 border"
        value={form.shortBio}
        onChange={handleChange}
      />

      <textarea
        name="fullBio"
        placeholder="Full Biography"
        className="w-full mb-2 p-2 border"
        rows={4}
        value={form.fullBio}
        onChange={handleChange}
      />

      <select
        name="qualification"
        className="w-full mb-2 p-2 border"
        value={form.qualification}
        onChange={handleChange}
      >
        <option value="">Select Qualification</option>
        {qualificationsList.map((q) => (
          <option key={q} value={q}>
            {q}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="city"
        placeholder="City"
        className="w-full mb-2 p-2 border"
        value={form.city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="officeAddress"
        placeholder="Office Address"
        className="w-full mb-2 p-2 border"
        value={form.officeAddress}
        onChange={handleChange}
      />

      <input
        type="text"
        name="nationalId"
        placeholder="National ID"
        className="w-full mb-2 p-2 border"
        value={form.nationalId}
        onChange={handleChange}
      />

      <input
        type="text"
        name="profilePicture"
        placeholder="Profile Picture URL (upload coming soon)"
        className="w-full mb-2 p-2 border"
        value={form.profilePicture}
        onChange={handleChange}
      />

      <input
        type="text"
        name="companyName"
        placeholder="Company Name (optional)"
        className="w-full mb-2 p-2 border"
        value={form.companyName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="companyWebsite"
        placeholder="Company Website (optional)"
        className="w-full mb-2 p-2 border"
        value={form.companyWebsite}
        onChange={handleChange}
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-green-600 text-white p-2 mt-2"
      >
        {loading ? "Saving..." : "Save Profile"}
      </button>
    </div>
  );
}

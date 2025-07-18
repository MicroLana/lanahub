import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

// Alphabetically sorted qualifications
const qualificationsList = [
  "Aircon Installer",
  "Auto Mechanic",
  "Carpenter",
  "Electrician",
  "Gardener",
  "House Keeper",
  "IT Technician",
  "Maid",
  "Mechanic",
  "Motor Mechanic",
  "Other",
  "Painter",
  "Phone Technician",
  "Plumber",
  "Welder",
].sort();

// Alphabetically sorted cities
const citiesList = [
  "Beitbridge",
  "Bindura",
  "Bulawayo",
  "Chegutu",
  "Chiredzi",
  "Chinhoyi",
  "Chitungwiza",
  "Epworth",
  "Gokwe",
  "Gweru",
  "Harare",
  "Hwange",
  "Kadoma",
  "Kariba",
  "Karoi",
  "Kwekwe",
  "Masvingo",
  "Marondera",
  "Mutare",
  "Norton",
  "Redcliff",
  "Rusape",
  "Ruwa",
  "Shurugwi",
  "Victoria Falls",
  "Zvishavane",
].sort();

export default function ProviderProfileForm({ user, onComplete }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: uuidv4(),
    phone: "",
    altPhone: "",
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
    sex: "Male",
    email: user.email,
    companyName: "",
    companyWebsite: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Validate fields
  const validate = () => {
    const nameRegex = /^[A-Za-z ]+$/;
    const phoneRegex = /^[0-9]+$/;
    const bioRegex = /^[A-Za-z0-9 ]+$/;

    if (!form.firstName.match(nameRegex)) {
      return "First Name must contain only letters and spaces.";
    }
    if (!form.surname.match(nameRegex)) {
      return "Surname must contain only letters and spaces.";
    }
    if (!form.phone.match(phoneRegex)) {
      return "Phone Number must contain digits only.";
    }
    if (form.altPhone && !form.altPhone.match(phoneRegex)) {
      return "Alternative Phone must contain digits only.";
    }
    if (!form.qualification) {
      return "Please select a qualification.";
    }
    if (!form.city) {
      return "Please select a city.";
    }
    if (!form.officeAddress.trim()) {
      return "Office Address is required.";
    }
    if (!form.shortBio.match(bioRegex)) {
      return "Short Bio must be alphanumeric and spaces only.";
    }
    if (!form.fullBio.match(bioRegex)) {
      return "Full Bio must be alphanumeric and spaces only.";
    }
    if (!/^\d{8}[A-Za-z]\d{2}$/.test(form.nationalId)) {
      return "National ID must be 8 digits, a letter, and 2 digits (e.g., 12345678A12).";
    }
    try {
      new URL(form.profilePicture);
    } catch {
      return "Profile Picture must be a valid URL.";
    }
    if (form.companyWebsite) {
      try {
        new URL(form.companyWebsite);
      } catch {
        return "Company Website must be a valid URL.";
      }
    }
    if (!["Male","Female"].includes(form.sex)) {
      return "Please select a valid sex.";
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
      await setDoc(doc(db, "serviceProviders", user.uid), {
        ...form,
        createdAt: serverTimestamp()
      });
      onComplete();
    } catch (err) {
      console.error(err);
      setError("Failed to save provider profile.");
    }
    setLoading(false);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="relative p-4 bg-white border rounded shadow max-w-xl mx-auto space-y-4">
      {/* Close button */}
      <button type="button" onClick={handleCancel} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        &times;
      </button>

      <h3 className="text-lg font-semibold mb-2 text-center">Service Provider Profile</h3>

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

      <input
        type="text"
        name="shortBio"
        placeholder="Short Bio"
        className="w-full p-2 border rounded"
        value={form.shortBio}
        onChange={handleChange}
      />

      <textarea
        name="fullBio"
        placeholder="Full Biography"
        className="w-full p-2 border rounded"
        rows={4}
        value={form.fullBio}
        onChange={handleChange}
      />

      <select
        name="qualification"
        className="w-full p-2 border rounded"
        value={form.qualification}
        onChange={handleChange}
      >
        <option value="">Select Qualification</option>
        {qualificationsList.map(q => (
          <option key={q} value={q}>{q}</option>
        ))}
      </select>

      <select
        name="city"
        className="w-full p-2 border rounded"
        value={form.city}
        onChange={handleChange}
      >
        <option value="">Select City</option>
        {citiesList.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <input
        type="text"
        name="officeAddress"
        placeholder="Office Address"
        className="w-full p-2 border rounded"
        value={form.officeAddress}
        onChange={handleChange}
      />

      <input
        type="text"
        name="nationalId"
        placeholder="National ID (8 digits, a letter, 2 digits)"
        className="w-full p-2 border rounded"
        value={form.nationalId}
        onChange={handleChange}
      />

      <input
        type="text"
        name="profilePicture"
        placeholder="Profile Picture URL"
        className="w-full p-2 border rounded"
        value={form.profilePicture}
        onChange={handleChange}
      />

      <input
        type="text"
        name="companyName"
        placeholder="Company Name (optional)"
        className="w-full p-2 border rounded"
        value={form.companyName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="companyWebsite"
        placeholder="Company Website (optional)"
        className="w-full p-2 border rounded"
        value={form.companyWebsite}
        onChange={handleChange}
      />

      <select
        name="sex"
        className="w-full p-2 border rounded"
        value={form.sex}
        onChange={handleChange}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select
        name="available"
        className="w-full p-2 border rounded"
        value={form.available}
        onChange={handleChange}
      >
        <option value="Yes">Available</option>
        <option value="No">Not Available</option>
      </select>

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
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Service Provider Profile"}
        </button>
      </div>
    </form>
  );
}

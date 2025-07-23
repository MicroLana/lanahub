// src/pages/NewSPRegistration.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewSPRegistration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    surname: '',
    email: '',
    phone: '',
    sex: '',
    profession: '',
    password: '',
    confirmPassword: '',
    nationality: 'Zimbabwe',     // default country
    city: '',
    suburb: '',
    address: '',
    longBio: '',
    websiteLink: '',
    experience: '',
    available: false
  });

  const [profilePic, setProfilePic] = useState(null);
  const [qualificationDoc, setQualificationDoc] = useState(null);
  const [policeClearance, setPoliceClearance] = useState(null);
  const [otherDocs, setOtherDocs] = useState([]);

  const professions = [
    'Plumber', 'Electrician', 'Motor Mechanic', 'Cleaner', 'Gardener',
    'Painter', 'Personal Trainer', 'Fitness Coach', 'Cell Phone Technician',
    'House Manager', 'Pet Groomer', 'Solar Installer', 'Mover'
  ];

  const cities = [
    'Harare', 'Gweru', 'Bulawayo', 'Chinhoyi', 'Kadoma', 'Marondera',
    'Banket', 'Bindura'
  ];

  const nationalities = ['Zimbabwe', 'South Africa', 'Zambia'];
  const experiences = ['>2 yrs', '5 yrs', '6-8 yrs', '10+ yrs'];

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e, setter) => setter(e.target.files[0]);
  const handleMultiFileChange = e => {
    const files = Array.from(e.target.files).slice(0, 3);
    setOtherDocs(files);
  };

  const isEmailValid = /^\S+@\S+\.\S+$/.test(form.email);
  const isWebsiteValid = /^(https?:\/\/)?[\w.-]+\.[A-Za-z]{2,}(\/.*)?$/.test(form.websiteLink);
  const isFormValid =
    form.fullName && form.surname && isEmailValid && form.phone &&
    form.sex && form.profession && form.password &&
    form.password === form.confirmPassword && form.nationality &&
    form.city && form.address && form.longBio && isWebsiteValid &&
    form.experience && profilePic && qualificationDoc;

  const handleSubmit = e => {
    e.preventDefault();
    if (!isFormValid) return;
    // TODO: upload files, create account, save profile, then navigate
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/images/provider.jpeg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-lg"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4 sm:mb-0">
            Service Provider Registration
          </h2>
          <label className="flex items-center text-green-600">
            <input
              type="checkbox"
              name="available"
              checked={form.available}
              onChange={handleChange}
              className="mr-2 h-4 w-4 border-green-600 text-green-600 focus:ring-green-500"
            />
            Available
          </label>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          />
          <input
            name="surname"
            value={form.surname}
            onChange={handleChange}
            placeholder="Surname"
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          />
          <select
            name="sex"
            value={form.sex}
            onChange={handleChange}
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            name="profession"
            value={form.profession}
            onChange={handleChange}
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          >
            <option value="" disabled>Select Profession</option>
            {professions.map(job => (
              <option key={job} value={job}>{job}</option>
            ))}
          </select>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          />
          {form.confirmPassword && form.password !== form.confirmPassword && (
            <p className="text-red-500 text-sm col-span-full">Passwords must match</p>
          )}
          <select
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          >
            <option value="" disabled>Select Nationality</option>
            {nationalities.map(nat => (
              <option key={nat} value={nat}>{nat}</option>
            ))}
          </select>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          >
            <option value="" disabled>Select City</option>
            {cities.map(ct => (
              <option key={ct} value={ct}>{ct}</option>
            ))}
          </select>
          <input
            name="suburb"
            value={form.suburb}
            onChange={handleChange}
            placeholder="Suburb"
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
          />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Home Address"
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
          />
          <textarea
            name="longBio"
            value={form.longBio}
            onChange={handleChange}
            placeholder="Long Bio"
            rows={4}
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black col-span-full"
            required
          />
          <input
            name="websiteLink"
            value={form.websiteLink}
            onChange={handleChange}
            placeholder="Website Link (https://...)"
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          />
          {form.websiteLink && !isWebsiteValid && (
            <p className="text-red-500 text-sm col-span-full">Please enter a valid URL</p>
          )}
          <select
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="w-full border border-green-600 rounded-md p-2 focus:ring-green-500 focus:border-green-500 text-black"
            required
          >
            <option value="" disabled>Select Experience</option>
            {experiences.map(exp => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </select>
        </div>

        {/* Attachments */}
        <div className="border-2 border-green-600 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-green-600 mb-2">Attachments (required)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => handleFileChange(e, setProfilePic)}
                className="w-full text-black"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Qualification Document</label>
              <input
                type="file"
                onChange={e => handleFileChange(e, setQualificationDoc)}
                className="w-full text-black"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Police Clearance</label>
              <input
                type="file"
                onChange={e => handleFileChange(e, setPoliceClearance)}
                className="w-full text-black"
              />
            </div>
            <div>
              <label className="block mb-1">Other Documents (up to 3)</label>
              <input
                type="file"
                multiple
                onChange={handleMultiFileChange}
                className="w-full text-black"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="submit"
            disabled={!isFormValid}
            className="px-6 py-2 bg-green-600 text-white rounded-full disabled:opacity-50"
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-100"
          >
            Cancel
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-green-600 mt-4">Lanahub ©️ 2025</p>
      </form>
    </div>
  );
}
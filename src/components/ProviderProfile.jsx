//Developed by Mr N~G~K
import React from "react";

export default function ProviderProfile({ profile, editProfile, handleProfileChange, handleSaveProfile }) {
  return (
    <form className="w-full space-y-4 max-w-xl mx-auto">
      <div className="text-xl font-bold mb-4">Profile Information</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Example fields, add or remove as you need */}
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            className="w-full border px-3 py-2 rounded"
            name="name"
            value={profile.name.split(" ")[0]}
            onChange={handleProfileChange}
            disabled={!editProfile}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Surname</label>
          <input
            className="w-full border px-3 py-2 rounded"
            name="surname"
            value={profile.name.split(" ")[1]}
            onChange={handleProfileChange}
            disabled={!editProfile}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={profile.email}
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={profile.phone}
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Profession</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={profile.profession}
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            className="w-full border px-3 py-2 rounded"
            name="city"
            value={profile.city}
            onChange={handleProfileChange}
            disabled={!editProfile}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Experience</label>
          <input
            className="w-full border px-3 py-2 rounded"
            name="experience"
            value={profile.experience}
            onChange={handleProfileChange}
            disabled={!editProfile}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Suburb</label>
          <input
            className="w-full border px-3 py-2 rounded"
            name="suburb"
            value={profile.suburb}
            onChange={handleProfileChange}
            disabled={!editProfile}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Full Address</label>
          <input
            className="w-full border px-3 py-2 rounded"
            name="address"
            value={profile.address}
            onChange={handleProfileChange}
            disabled={!editProfile}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Professional Bio</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            name="bio"
            value={profile.bio}
            onChange={handleProfileChange}
            disabled={!editProfile}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Website/Portfolio</label>
          <input
            className="w-full border px-3 py-2 rounded"
            name="website"
            value={profile.website}
            onChange={handleProfileChange}
            disabled={!editProfile}
          />
        </div>
      </div>
      {editProfile && (
        <button
          type="button"
          className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center"
          onClick={handleSaveProfile}
        >
          💾 Save
        </button>
      )}
    </form>
  );
}

import React from "react";

function JobCard({ name, description, onRequest }) {
  return (
    <div className="max-w-md p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-900">🛠️ {name}</h2>
      <p className="text-gray-600">{description}</p>
      <button
        onClick={onRequest}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Request Service
      </button>
    </div>
  );
}

export default JobCard;
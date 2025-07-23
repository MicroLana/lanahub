import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { serviceCategories } from "../data/services.js";

export default function ServiceDetailsPage({ onRequireAuth }) {
  const { categoryKey } = useParams();
  const navigate = useNavigate();
  const category = serviceCategories[categoryKey];

  if (!category) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          Service Category Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{category.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {category.tasks.map((task, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{task}</h3>
            <button
              onClick={onRequireAuth}
              className="mt-3 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

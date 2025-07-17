import React from "react";
import { useNavigate } from "react-router-dom";
import { serviceCategories } from "../data/services.js";

export default function ServicesGrid() {
  const navigate = useNavigate();

  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Object.entries(serviceCategories).map(([key, category]) => (
        <div
          key={key}
          className="bg-white shadow rounded overflow-hidden hover:shadow-lg cursor-pointer"
          onClick={() => navigate(`/services/${key}`)}
        >
          <img
            src={category.img}
            alt={category.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Services
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

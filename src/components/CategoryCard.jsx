// src/components/CategoryCard.jsx
import React from "react";

export default function CategoryCard({ title, image }) {
  return (
    <div className="bg-light rounded-lg shadow-card hover:shadow-card-hover overflow-hidden transition">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-card">
        <h3 className="text-lg font-semibold text-dark">{title}</h3>
      </div>
    </div>
  );
}
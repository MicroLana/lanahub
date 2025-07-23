// src/components/ServicesSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Appliance Repairs",
    image: "/images/homepage/appliance.jpg",
    hoverText: "Repair of All Home Appliances",
  },
  {
    title: "Plumbing",
    image: "/images/homepage/plumbing.jpg",
    hoverText: "Expert Plumbing solutions for leaky taps and pipes",
  },
  {
    title: "Home Maintenance",
    image: "/images/homepage/homemaintanance.jpg",
    hoverText: "Comprehensive home Rennovations and Repairs",
  },
  {
    title: "Housekeeping",
    image: "/images/homepage/housekeeping.jpg",
    hoverText: "Professional Cleaning for a Spotless home",
  },
  {
    title: "Motor Vehicle Services",
    image: "/images/homepage/vehicles.jpg",
    hoverText: "Reliable Vehicle Servicing and Repairs",
  },
  {
    title: "Smart Home Installations",
    image: "/images/homepage/smarthome.jpg",
    hoverText: "Modern Smart home Setups and Automation",
  },
  {
    title: "Electrical Repairs",
    image: "/images/homepage/electrical.jpg",
    hoverText: "Smart Electrical Fixes Making you home Safe",
  },
  {
    title: "Pest Control",
    image: "/images/homepage/pestcontrol.jpg",
    hoverText: "Eco Friendly and Effective Pest Control & Animal Relocationn",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-section bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-dark font-bold text-center mb-8">
          Popular Services
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-48 object-contain"
              />
              <h3 className="mt-4 text-center text-lg font-medium text-dark transition-colors group-hover:text-green-600">
                <Link to="/services" className="block">
                  {cat.title}
                </Link>
              </h3>
              <p className="mt-2 text-center text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                {cat.hoverText}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-block px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import {
  FaPlug,
  FaTools,
  FaBroom,
  FaSatelliteDish,
  FaTv,
  FaLeaf,
  FaTrash,
  FaCar,
  FaSun
} from "react-icons/fa";

const servicesData = [
  {
    category: "Electrical Work",
    icon: <FaPlug className="text-green-600 text-3xl mb-2" />,
    services: [
      "Installation of Lights",
      "Wiring of Cables",
      "Fixing Plug Sockets",
      "Power Backup Installation",
      "Ceiling Fan Setup",
      "Generator Connection"
    ]
  },
  {
    category: "Plumbing",
    icon: <FaTools className="text-green-600 text-3xl mb-2" />,
    services: [
      "Installation of Booster Pump",
      "Fixing Broken Pipes",
      "Toilet Repairs",
      "Tap Replacements",
      "Drain Unblocking",
      "Shower Installation"
    ]
  },
  {
    category: "Housekeeping",
    icon: <FaBroom className="text-green-600 text-3xl mb-2" />,
    services: [
      "Full-Time Maid Services",
      "Part-Time Housekeeping",
      "Spring Cleaning",
      "Temporary Domestic Help",
      "Laundry Services",
      "Ironing Services"
    ]
  },
  {
    category: "Internet & Satellite",
    icon: <FaSatelliteDish className="text-green-600 text-3xl mb-2" />,
    services: [
      "Installation of Starlink",
      "DSTV Setup",
      "WiFi Router Configuration",
      "Network Troubleshooting",
      "Smart TV Internet Connection",
      "Fibre Internet Setup"
    ]
  },
  {
    category: "Appliance Installation",
    icon: <FaTv className="text-green-600 text-3xl mb-2" />,
    services: [
      "TV Mounting",
      "Air Conditioner Installation",
      "Gas Stove Installation",
      "Fridge Setup",
      "Washing Machine Connection",
      "Microwave Fitting"
    ]
  },
  {
    category: "Gardening",
    icon: <FaLeaf className="text-green-600 text-3xl mb-2" />,
    services: [
      "Lawn Cutting",
      "Tree Removal",
      "Hedge Trimming",
      "Garden Cleanup",
      "Planting Flowers",
      "Irrigation System Setup"
    ]
  },
  {
    category: "Refuse Collection",
    icon: <FaTrash className="text-green-600 text-3xl mb-2" />,
    services: [
      "Weekly Bin Pickup",
      "Bulk Waste Disposal",
      "Garden Waste Removal",
      "Recycling Collection",
      "Scheduled Municipal Collection"
    ]
  },
  {
    category: "Mechanic Services",
    icon: <FaCar className="text-green-600 text-3xl mb-2" />,
    services: [
      "Vehicle Servicing",
      "Mechanical Repairs",
      "Tyre Replacement",
      "Fuel Delivery",
      "Home-Based Car Diagnostics"
    ]
  },
  {
    category: "Solar Installations",
    icon: <FaSun className="text-green-600 text-3xl mb-2" />,
    services: [
      "Inverter Installation",
      "Battery Setup",
      "Solar Panel Mounting",
      "Solar Geyser Installation",
      "System Maintenance"
    ]
  }
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="bg-green-600 text-white py-10 text-center w-full relative">
        <h1 className="text-5xl font-bold">We Have Got Your Tasks Covered</h1>
        <Link
          to="/"
          className="absolute top-4 left-4 bg-white text-green-700 px-4 py-2 rounded hover:bg-green-100 shadow"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Services Grid */}
      <div className="flex justify-center px-4 py-10">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((section, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow flex flex-col items-center text-center"
              >
                {section.icon}
                <h2 className="text-xl font-bold mb-3 text-green-700">
                  {section.category}
                </h2>
                <ul className="list-disc list-inside text-black text-left">
                  {section.services.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

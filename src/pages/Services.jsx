<<<<<<< HEAD
=======

>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
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
  FaSun,
  FaBaby,
  FaHammer,
  FaMobileAlt,
  FaBirthdayCake,
  FaBug,
  FaBolt,
  FaFirstAid,
  FaTint,
  FaHome,
  FaShieldAlt,
  FaTruck,
  FaCarSide,
  FaPaintRoller,
  FaPaw,
  FaWrench,
  FaSwimmer,
  FaRunning,
  FaBook,
} from "react-icons/fa";

<<<<<<< HEAD
export const servicesData = [
=======
export const servicesData = 




[
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
  {
    category: "Appliance Repairs",
    icon: <FaTv className="text-green-600 text-4xl mb-2" />,
    services: [
      "Fridge & Freezer Repair",
      "Washing Machine Servicing",
      "Microwave & Oven Repair",
      "Dishwasher Maintenance",
      "Dryer & Geyser Servicing",
    ],
  },
  {
    category: "Baby Essentials",
    icon: <FaBaby className="text-green-600 text-4xl mb-2" />,
    services: [
      "Babyproofing Home",
      "Nursery Setup & Assembly",
      "Stroller & Car-Seat Installation",
      "Toy Cleaning & Sanitizing",
      "Baby Gear Delivery",
    ],
  },
  {
    category: "Carpentry Work",
    icon: <FaHammer className="text-green-600 text-4xl mb-2" />,
    services: [
      "Custom Cabinet Making",
      "Door & Window Framing",
      "Deck & Patio Construction",
      "Furniture Repair & Refinishing",
      "Shelving & Storage Solutions",
    ],
  },
  {
    category: "Cell Phone Repairs",
    icon: <FaMobileAlt className="text-green-600 text-4xl mb-2" />,
    services: [
      "Screen & Battery Replacement",
      "Water-Damage Assessment",
      "Camera & Speaker Fixes",
      "Charging-Port Repair",
      "Software Troubleshooting",
    ],
  },
  {
    category: "Children Parties",
    icon: <FaBirthdayCake className="text-green-600 text-4xl mb-2" />,
    services: [
      "Tepee Hiring Services",
      "Theme Planning & Setup",
      "Games & Entertainment",
      "Cake & Refreshments Coordination",
      "Clown Services",
    ],
  },
  {
    category: "Eco-Pest Control Solutions",
    icon: <FaBug className="text-green-600 text-4xl mb-2" />,
    services: [
      "Pre-Building Inspection & Treatment",
      "Bee Trapping & Removal",
      "Insect Extermination (Ants, Cockroaches)",
      "Preventative Home Treatments",
      "Animal Relocation (Snakes, Spiders)",
    ],
  },
  {
    category: "Electrical Repairs",
    icon: <FaBolt className="text-green-600 text-4xl mb-2" />,
    services: [
      "Outlet & Switch Replacement",
      "Lighting Fixture Installation",
      "Circuit-Breaker Troubleshooting",
      "Ceiling-Fan & Exhaust-Fan Fitting",
      "Other Wiring-Fault Diagnosis",
    ],
  },
  {
    category: "Emergency Centres",
    icon: <FaFirstAid className="text-green-600 text-4xl mb-2" />,
    services: [
      "Police Contacts",
      "Ambulance Dispatch & Coordination",
      "Fire Brigade & Fire Containment",
      "Rapid Response",
      "On-site Diagnostics & Lab Testing",
    ],
  },
  {
    category: "Gardening Services",
    icon: <FaLeaf className="text-green-600 text-4xl mb-2" />,
    services: [
      "Lawn Mowing and Weed Control",
      "Hedge-Trimming & Tree Pruning",
      "Planting & Transplanting",
      "Automated Watering Systems",
      "Manure Delivery",
    ],
  },
  {
    category: "Geysers & Water Heating",
    icon: <FaTint className="text-green-600 text-4xl mb-2" />,
    services: [
      "Geyser Installation",
      "Water-Heater Servicing",
      "Pressure-Valve Replacement",
      "Leak Detection & Repair",
      "Energy-Efficiency Upgrades",
    ],
  },
  {
    category: "Health and Fitness",
    icon: <FaRunning className="text-green-600 text-4xl mb-2" />,
    services: [
      "Personal Home Trainers",
      "Yoga Instructors & Classes",
      "Mental Wellness Coaching",
      "Rehabilitation Centres",
      "Training Instructors",
    ],
  },
  {
    category: "Home Renovations",
    icon: <FaHome className="text-green-600 text-4xl mb-2" />,
    services: [
      "Kitchen Remodelling",
      "Flooring Replacement",
      "Tiling Installations",
      "Bathroom Remodelling",
      "Roof Leak Repairs",
    ],
  },
  {
    category: "Home Security Services",
    icon: <FaShieldAlt className="text-green-600 text-4xl mb-2" />,
    services: [
      "Alarm System Installation",
      "CCTV Camera Setup",
      "Smart-Lock Installation",
      "Intercom & Electric Gates Setup",
      "Temporary Security Services",
    ],
  },
  {
    category: "House Keeping Management",
    icon: <FaBroom className="text-green-600 text-4xl mb-2" />,
    services: [
      "Full-Time House Keeper",
      "Deep House Cleaning Services",
      "Ironing & Laundry Services",
      "Pet Care Management",
      "Child Minding Services",
    ],
  },
  {
    category: "Internet & Satellite",
    icon: <FaSatelliteDish className="text-green-600 text-4xl mb-2" />,
    services: [
      "Home Wi-Fi Setup",
      "Starlink Installation",
      "DSTV Installation",
      "Smart-TV Connectivity",
      "Smart Home Connections",
    ],
  },
  {
    category: "Moving & Heavy Equipment",
    icon: <FaTruck className="text-green-600 text-4xl mb-2" />,
    services: [
      "Residential Moving Services",
      "Removal of Rubble & Heavy Rocks",
      "Loading & Unloading",
      "Short/Long-Term Storage",
      "Water Transportation",
    ],
  },
  {
    category: "Motor Vehicle Services",
    icon: <FaCarSide className="text-green-600 text-4xl mb-2" />,
    services: [
      "Vehicle Servicing",
      "Engine Diagnostics",
      "Motor Mechanic Repairs",
      "Vehicle Panel Beating",
      "Emergency Roadside Assistance",
    ],
  },
  {
    category: "Painting & Photography",
    icon: <FaPaintRoller className="text-green-600 text-4xl mb-2" />,
    services: [
      "Home Decoration Consultation",
      "Interior Wall Painting",
      "Exterior Facade Painting",
      "Wallpaper & Stencilling Installation",
      "Photography Services",
    ],
  },
  {
    category: "Pet Grooming & Training",
    icon: <FaPaw className="text-green-600 text-4xl mb-2" />,
    services: [
      "Dog & Cat Grooming",
      "Pet Training Services",
      "Flea & Tick Treatment",
      "Pet Sitting & Walking",
      "Pet Emergencies",
    ],
  },
  {
    category: "Plumbing Services",
    icon: <FaWrench className="text-green-600 text-4xl mb-2" />,
    services: [
      "Leak Detection & Repair",
      "Sewer Blockage Repairs & Drain Unclogging",
      "Tap & Fixture Installation",
      "Pipe Replacement",
      "Booster Pump Installation",
    ],
  },
  {
    category: "Refuse Collection",
    icon: <FaTrash className="text-green-600 text-4xl mb-2" />,
    services: [
      "Weekly Bin Pickup",
      "Bulk Waste Pickup",
      "Garden Waste Removal",
      "Hazardous Waste Disposal",
      "Scheduled Municipal Collection",
    ],
  },
  {
    category: "Solar & Borehole Installations",
    icon: <FaSun className="text-green-600 text-4xl mb-2" />,
    services: [
      "New Solar Panel & Inverter Installations",
      "Battery Storage Integration",
      "System Monitoring Setup",
      "Solar System Repairs",
      "Borehole Drilling Services",
    ],
  },
  {
    category: "Swimming Pool Services",
    icon: <FaSwimmer className="text-green-600 text-4xl mb-2" />,
    services: [
      "Pool Cleaning & Vacuuming",
      "Chemical Balancing",
      "Pump & Filter Maintenance",
      "Leak Detection & Repair",
      "Pool Maintenance",
    ],
  },
  {
    category: "Wall Mounting Services",
    icon: <FaTv className="text-green-600 text-4xl mb-2" />,
    services: [
      "TV Mounting",
      "Wire Hiding",
      "Cabinet Mounting",
      "AC Installations (Indoor & Outdoor)",
      "AC Repairs",
    ],
  },
<<<<<<< HEAD
];
=======
]
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setSuggestions([]);
      return;
    }
    const matches = servicesData
      .filter(
        (sec) =>
          sec.category.toLowerCase().includes(term) ||
          sec.services.some((svc) =>
            svc.toLowerCase().includes(term)
          )
      )
      .slice(0, 3);
    setSuggestions(matches);
  }, [searchTerm]);

  const handleSelectSuggestion = (category) => {
    const id = slugify(category);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setSearchTerm("");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-green-600 text-white py-8 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Find your Local Expert</h1>
          <div className="mt-6 relative">
            <input
              type="text"
              className="w-full md:w-3/4 lg:w-1/2 px-4 py-3 rounded-lg border border-gray-300 shadow-sm placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 mx-auto md:w-3/4 lg:w-1/2 bg-white shadow mt-1 rounded text-black z-10">
                {suggestions.map((sec) => (
                  <li
                    key={sec.category}
                    onClick={() => handleSelectSuggestion(sec.category)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left text-black"
                  >
                    {sec.category}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Global Book Now Button */}
          <div className="flex justify-center mt-6">
            <Link
<<<<<<< HEAD
              to="/FindProfessional"
              className="flex items-center bg-white text-green-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
            >
              <FaBook className="mr-2" />
              Find Professional Now.
=======
              to="/JobCard"
              className="flex items-center bg-white text-green-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
            >
              <FaBook className="mr-2" />
              Book Now
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
            </Link>
          </div>
        </div>
      </div>

      {/* Central Quadrant */}
      <main className="flex-grow py-10 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((sec) => (
            <div
              key={sec.category}
              id={slugify(sec.category)}
              className="group relative border border-gray-200 hover:border-green-600 rounded-lg p-6 flex flex-col h-full items-center text-center shadow transition-colors duration-200"
            >
              {sec.icon}
<<<<<<< HEAD
              {/* Category Name Clickable and navigates to /FindProfessional */}
              <Link to="/FindProfessional">
=======
              <Link to="/JobCard">
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
                <h2 className="text-xl font-bold mb-3 text-green-700 group-hover:text-green-900 cursor-pointer transition-colors duration-200">
                  {sec.category}
                </h2>
              </Link>
              <ul className="list-disc list-inside text-black text-left mb-12 w-full">
                {sec.services.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
<<<<<<< HEAD
              {/* Hover Button - renamed and clickable */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link to="/FindProfessional" className="text-green-600 font-semibold">
                  Find an Expert Now
=======
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link to="/JobCard" className="text-green-600 font-semibold">
                  Book Service Now
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quadrant Bottom Book Now */}
        <div className="flex justify-center mt-8">
          <Link
<<<<<<< HEAD
            to="/FindProfessional"
            className="flex items-center bg-green-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-green-700 transition-colors duration-200"
          >
            <FaBook className="mr-2" />
            Search for Professional
=======
            to="/JobCard"
            className="flex items-center bg-green-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-green-700 transition-colors duration-200"
          >
            <FaBook className="mr-2" />
            Book Now
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
          </Link>
        </div>
      </main>

      {/* Bottom Text */}
      <div className="text-center text-gray-700 px-4 py-6">
<<<<<<< HEAD
        Access vetted, background checked professionals from Electricians and Plumbers to Housekeepers, Motor Mechanics, and more—for reliable, hassle‑free home services at your fingertips.
=======
        Access professional, background‑checked electricians, plumbers,
        housekeepers, mechanics and more—hassle‑free home services at your
        fingertips.
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be

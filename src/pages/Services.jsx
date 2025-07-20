import React, { useState, useEffect } from "react";
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
  FaSearch,
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
  FaRunning
} from "react-icons/fa";

export const servicesData = [

{
    category: "Appliance Repairs",
    icon: <FaTv className="text-green-600 text-3xl mb-2" />,
    services: [
      "Fridge & Freezer Repair",
      "Washing Machine Servicing",
      "Microwave & Oven Repair",
      "Dishwasher Maintenance",
      "Dryer & Geyser Servicing",
      "Others Appliance"
    ]
  },
  {
    category: "Baby Essentials",
    icon: <FaBaby className="text-green-600 text-3xl mb-2" />,
    services: [
      "Babyproofing Home",
      "Nursery Setup & Assembly",
      "Stroller & Car-Seat Installation",
      "Breast-Pump Rental & Assembly",
      "Toy Cleaning & Sanitizing",
      "Baby Gear Delivery"
    ]
  },
  {
    category: "Carpentry Work",
    icon: <FaHammer className="text-green-600 text-3xl mb-2" />,
    services: [
      "Custom Cabinet Making",
      "Door & Window Framing",
      "Deck & Patio Construction",
      "Furniture Repair & Refinishing",
      "Shelving & Storage Solutions",
      "Wooden Flooring Installation"
    ]
  },
  {
    category: "Cell Phone Repairs",
    icon: <FaMobileAlt className="text-green-600 text-3xl mb-2" />,
    services: [
      "Screen Replacement",
      "Battery Replacement",
      "Water-Damage Assessment",
      "Camera & Speaker Fixes",
      "Charging-Port Repair",
      "Software Troubleshooting"
    ]
  },
  {
    category: "Children Parties",
    icon: <FaBirthdayCake className="text-green-600 text-3xl mb-2" />,
    services: [
      "Theme Planning & Setup",
      "Decoration & Balloon Arches",
      "Games & Entertainment",
      "Cake & Refreshments Coordination",
      "Tepee Hiring Services",
      "Clown Services"
    ]
  },
  {
    category: "Eco-Friendly Pest Control Solutions",
    icon: <FaBug className="text-green-600 text-3xl mb-2" />,
    services: [
      "Emergency Termite Treatment",
      "Pre-Building Inspection & Treatment",
      "Bee Trapping & Removal",
      "Insect Extermination (Ants, Cockroaches)",
      "Preventative Home Treatments",
      "Bird & Wildlife Exclusion",
      "Animal Relocation (Snakes, Spiders)"
    ]
  },
  {
    category: "Electrical Repairs",
    icon: <FaBolt className="text-green-600 text-3xl mb-2" />,
    services: [
      "Outlet & Switch Replacement",
      "Lighting Fixture Installation",
      "Circuit-Breaker Troubleshooting",
      "Ceiling-Fan & Exhaust-Fan Fitting",
      "Home Electrical Inspections",
      "Other Wiring-Fault Diagnosis"
    ]
  },
  {
    category: "Emergency Centres",
    icon: <FaFirstAid className="text-green-600 text-3xl mb-2" />,
    services: [
      "Police",
      "Ambulance Dispatch & Coordination",
      "Fire Brigade and Fire Containment",
      "Rapid Response",
      "On-site Diagnostics & Lab Testing"
    ]
  },
  {
    category: "Gardening Services",
    icon: <FaLeaf className="text-green-600 text-3xl mb-2" />,
    services: [
      "Lawn Mowing",
      "Hedge-Trimming & Tree Pruning",
      "Planting & Transplanting",
      "Weed Control & Pest Treatment",
      "Tree Felling Services",
      "Manure Delivery"
    ]
  },
  {
    category: "Geysers & Water Heating",
    icon: <FaTint className="text-green-600 text-3xl mb-2" />,
    services: [
      "Geyser Installation",
      "Water-Heater Servicing",
      "Pressure-Valve Replacement",
      "Thermostat Adjustment",
      "Leak Detection & Repair",
      "Energy-Efficiency Upgrades"
    ]
  },
  {
    category: "Health and Fitness",
    icon: <FaRunning className="text-green-600 text-3xl mb-2" />,
    services: [
      "Personal Home Trainers",
      "Running Clubs",
      "Yoga Instructors and Classes",
      "Mental Wellness",
      "Rehabilitation Centres",
      "Golf Training Instructors"
    ]
  },
  {
    category: "Home Renovations",
    icon: <FaHome className="text-green-600 text-3xl mb-2" />,
    services: [
      "Kitchen Remodelling",
      "Flooring Replacement",
      "Tilling Installations",
      "Bathroom Remodelling",
      "Patio & Deck Renovations",
      "Roof Leak Repairs"
    ]
  },
  {
    category: "Home Security Services",
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-2" />,
    services: [
      "Alarm System Installation",
      "CCTV Camera Setup",
      "Smart-Lock Installation",
      "Intercom & Electric Gates Set Up",
      "Safe Box Installations",
      "Temporary Security Services"
    ]
  },
  {
    category: "House Keeping Management",
    icon: <FaBroom className="text-green-600 text-3xl mb-2" />,
    services: [
      "Full Time House Keeper",
      "Deep House Cleaning Services",
      "Ironing & Laundry Services",
      "Move-In/Move-Out Cleaning",
      "Child Minding Services"
    ]
  },
  {
    category: "Internet & Satellite",
    icon: <FaSatelliteDish className="text-green-600 text-3xl mb-2" />,
    services: [
      "Home Wi-Fi Setup",
      "Starlink Installation",
      "DSTV Installations",
      "Smart-TV Connectivity"
    ]
  },
  {
    category: "Moving & Heavy Equipment",
    icon: <FaTruck className="text-green-600 text-3xl mb-2" />,
    services: [
      "Residential Moving Services",
      "Removal of Rubbles and Heavy Rocks",
      "Loading & Unloading",
      "Short/Long Term Storage"
    ]
  },
  {
    category: "Motor Vehicle Services",
    icon: <FaCarSide className="text-green-600 text-3xl mb-2" />,
    services: [
      "Vehicle Servicing",
      "Engine Diagnostics",
      "Motor Mechanic Repairs",
      "Auto Mechanic Services",
      "Vehicle Panel Beating",
      "Emergency Roadside Assistance"
    ]
  },
  {
    category: "Painting & Decoration",
    icon: <FaPaintRoller className="text-green-600 text-3xl mb-2" />,
    services: [
      "Home Decoration Consultation",
      "Interior Wall Painting",
      "Exterior Facade Painting",
      "Wallpaper & Stencilling Installation"
    ]
  },
  {
    category: "Pet Grooming & Training",
    icon: <FaPaw className="text-green-600 text-3xl mb-2" />,
    services: [
      "Dog & Cat Grooming",
      "Pet Training Services",
      "Flea & Tick Treatment",
      "Pet Sitting & Walking",
      "Pet Vacation Minding Services",
      "Pet Emergencies"
    ]
  },
  {
    category: "Plumbing Services",
    icon: <FaWrench className="text-green-600 text-3xl mb-2" />,
    services: [
      "Leak Detection & Repair",
      "Sewer Blockage Repairs and Drain Unclogging",
      "Tap & Fixture Installation",
      "Pipe Replacement",
      "Booster Pump Installation",
      "Automated Gardening watering Systems"
    ]
  },
  {
    category: "Refuse Collection",
    icon: <FaTrash className="text-green-600 text-3xl mb-2" />,
    services: [
      "Weekly Bin Pickup",
      "Bulk Waste Pickup",
      "Garden Waste Removal",
      "Hazardous Waste Disposal",
      "Scheduled Municipal Collection"
    ]
  },
  {
    category: "Solar Installations",
    icon: <FaSun className="text-green-600 text-3xl mb-2" />,
    services: [
      "New Solar-Panel & Inverter Installations",
      "Battery-Storage Integration",
      "System Monitoring Installation",
      "Solar Systems Repairs"
    ]
  },
  {
    category: "Swimming Pool Services",
    icon: <FaSwimmer className="text-green-600 text-3xl mb-2" />,
    services: [
      "Pool Cleaning & Vacuuming",
      "Chemical Balancing",
      "Pump & Filter Maintenance",
      "Leak Detection & Repair",
      "Tile & Grout Cleaning",
      "Pool Maintenance"
    ]
  },
  {
    category: "Wall Mounting Services",
    icon: <FaTv className="text-green-600 text-3xl mb-2" />,
    services: [
      "TV Mounting",
      "Hiding Wires",
      "Cabinet Mounting",
      "AC Installations Indoors and Outdoors",
      "AC Repairs"
    ]
  }

];

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  //  NGK Shall later onrecompute suggestions on each searchTerm change
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
          sec.services.some((svc) => svc.toLowerCase().includes(term))
      )
      .slice(0, 3);

    setSuggestions(matches);
  }, [searchTerm]);

  const handleSelect = (category) => {
    const id = slugify(category);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSearchTerm("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <div className="bg-green-600 w-full text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Find your Local Expert</h1>

          <div className="mt-6 relative">
            <input
              type="text"
              className="w-full md:w-3/4 lg:w-1/2 px-4 py-2 rounded-l-full text-black focus:outline-none"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute top-0 right-0 h-full bg-green-700 hover:bg-green-800 px-4 rounded-r-full">
              <FaSearch className="text-white" />
            </button>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (





             <ul className="absolute left-0 right-0 md:left-auto md:right-auto mx-auto md:w-3/4 lg:w-1/2 bg-white shadow mt-1 rounded text-black">
    {suggestions.map((sec) => (
      <li
        key={sec.category}
        onClick={() => handleSelect(sec.category)}
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left text-black"
      >


                
                    {sec.category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Central Quadrant */}
      <main className="flex-grow py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((sec) => (
            <div
              key={sec.category}
              id={slugify(sec.category)}
              className="border border-gray-200 rounded-lg p-6 shadow flex flex-col items-center text-center"
            >
              {sec.icon}
              <h2 className="text-xl font-bold mb-3 text-green-700">
                {sec.category}
              </h2>
              <ul className="list-disc list-inside text-black text-left">
                {sec.services.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>



{/* Bottom Centered Image */}
<div className="w-full flex justify-center my-10">
  <img
    src="/images/bottomlogo.jpeg"
    alt="Lanahub Logo"
    className="h-20 object-contain"
  />
</div>









{/* Footer */}
<footer className="bg-white border-t border-green-600 py-8">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <h3 className="font-semibold mb-2">About Us</h3>
      <ul className="space-y-1">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/lanahubdatabase" className="hover:underline">Contact</Link></li>
        <li><Link to="/lanahubdatabase" className="hover:underline">Privacy</Link></li>
        <li><Link to="/lanahubdatabase" className="hover:underline">Terms</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Help</h3>
      <ul className="space-y-1">
        <li><Link to="/lanahubdatabase" className="hover:underline">Cookies</Link></li>
        <li><Link to="/lanahubdatabase" className="hover:underline">Cancellation Policy</Link></li>
        <li><Link to="/lanahubdatabase" className="hover:underline">Support</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Customer Tops Picks This Month</h3>
      <ul className="space-y-1">
        <li><Link to="/lanahubdatabase" className="hover:underline">HouseKeeping 750</Link></li>
        <li><Link to="/lanahubdatabase" className="hover:underline">Vehicle Services 680</Link></li>
        <li><Link to="/lanahubdatabase" className="hover:underline">Gardening 526</Link></li>
      </ul>
    </div>
  </div>

  <p className="text-center text-gray-600 mt-6">
    Lanahub 2025 ©️ All Rights Reserved
  </p>
</footer>
    </div>
  );
}
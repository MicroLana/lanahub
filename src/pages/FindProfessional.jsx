//Developed by Mr N~G~K
import React from "react"
import { FiSearch, FiPhone, FiGlobe } from "react-icons/fi"
import { FaStar } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const providers = [
  {
    name: "Sarah Chikwanha",
    rating: 4.9,
    reviews: 89,
    location: "Hillside, Bulawayo",
    available: true,
    experience: 12,
    rate: "$30-50/hour",
    profession: "plumber",
    bio: "Professional plumber with over 12 years of experience. Expert in pipe installation, water heater repairs, and drain cleaning services.",
    tags: ["Pipe Installation", "Water Heaters", "Drain Cleaning"],
  },
  {
    name: "John Mukamuri",
    rating: 4.8,
    reviews: 127,
    location: "Avondale, Harare",
    available: true,
    experience: 8,
    rate: "$25-40/hour",
    profession: "plumber",
    bio: "Experienced plumber with over 8 years in residential and commercial plumbing. Specializing in emergency repairs, pipe installation, and maintenance services.",
    tags: ["Emergency Repairs", "Installation", "Maintenance"],
  },
  {
    name: "Sarah Chikwanha",
    rating: 4.9,
    reviews: 89,
    location: "Hillside, Bulawayo",
    available: true,
    experience: 12,
    rate: "$30-50/hour",
    profession: "Plumber",
    bio: "Professional plumber with over 12 years of experience. Expert in pipe installation, water heater repairs, and drain cleaning services.",
    tags: ["Pipe Installation", "Water Heaters", "Drain Cleaning"],
  },
  {
    name: "John Mukamuri",
    rating: 4.8,
    reviews: 127,
    location: "Avondale, Harare",
    available: true,
    experience: 8,
    rate: "$25-40/hour",
    profession: "Plumber",
    bio: "Experienced plumber with over 8 years in residential and commercial plumbing. Specializing in emergency repairs, pipe installation, and maintenance services.",
    tags: ["Emergency Repairs", "Installation", "Maintenance"],
  },
  {
    name: "Simba Mwabvu",
    rating: 4.7,
    reviews: 102,
    location: "Greendale, Harare",
    available: true,
    experience: 7,
    rate: "$28-45/hour",
    profession: "Plumber",
    bio: "Reliable plumber focused on water systems, pipe fittings, and quick response emergency services across Harare suburbs.",
    tags: ["Leak Detection", "Fittings", "Emergency Services"],
  },
  {
    name: "Nyasha Mafoto",
    rating: 4.6,
    reviews: 76,
    location: "Westgate, Harare",
    available: true,
    experience: 9,
    rate: "$30-50/hour",
    profession: "Plumber",
    bio: "Versatile plumbing technician with strong skills in bathroom renovations, geyser installations, and smart plumbing solutions.",
    tags: ["Renovations", "Geyser Installations", "Smart Plumbing"],
  },
  {
    name: "Gandwana Kapfupi",
    rating: 4.7,
    reviews: 93,
    location: "Borrowdale, Harare",
    available: true,
    experience: 10,
    rate: "$35-55/hour",
    profession: "Carpenter",
    bio: "Professional carpenter with over a decade of experience in cabinetry, roofing, framing, and home renovations.",
    tags: ["Cabinet Making", "Framing", "Home Renovations"],
  }
]

const cities = [
  "All Locations",
  "Beitbridge",
  "Bindura",
  "Bulawayo",
  "Chegutu",
  "Chinhoyi",
  "Chipinge",
  "Chiredzi",
  "Chitungwiza",
  "Epworth",
  "Gokwe",
  "Gwanda",
  "Gweru",
  "Harare",
  "Hwange",
  "Kadoma",
  "Kariba",
  "Karoi",
  "Kwekwe",
  "Marondera",
  "Masvingo",
  "Mashava",
  "Mutare",
  "Norton",
  "Redcliff",
  "Ruwa",
  "Rusape",
  "Shamva",
  "Shurugwi",
  "Victoria Falls",
  "Zvishavane"
].sort()

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
        <div className="w-full max-w-screen-xl px-2 sm:px-4">
          {/* Search bar */}
          

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters */}
            <div className="w-full md:w-1/4 space-y-4 md:sticky md:top-24">
              <div>
                <h2 className="font-semibold mb-2">Filters</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Sort by</label>
                    <select className="w-full mt-1 border rounded px-2 py-1">
                      <option>Highest Rated</option>
                      <option>Most Reviewed</option>
                      <option>Lowest Price</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Profession</label>
                    <select className="w-full mt-1 border rounded px-2 py-1">
                      <option>All Professions</option>
                      <option>Appliance Repairs</option>
                      <option>Baby Essentials</option>
                      <option>BoreHole Drilling</option>
                      <option>Carpentry Work</option>
                      <option>Cell Phone Repairs</option>
                      <option>Children Parties</option>
                      <option>Electrical Repairs</option>
                      <option>Emergency Centres</option>
                      <option>Gardening</option>
                      <option>Gate Motor Repairs</option>
                      <option>Geysers and Water Heating</option>
                      <option>Health & Fitness</option>
                      <option>Home Renovations</option>
                      <option>House Keeping</option>
                      <option>Internet and StarLink</option>
                      <option>Movers and Moving</option>
                      <option>Motor Vehicle Repairs</option>
                      <option>Motor Vehicle Servicing</option>
                      <option>Painting</option>
                      <option>Pest Control</option>
                      <option>Pet Grooming</option>
                      <option>Plumbing</option>
                      <option>Refuse Collection</option>
                      <option>Security Systems</option>
                      <option>Solar Installations</option>
                      <option>Swimming Pools</option>
                      <option>Wall Mountings</option>
                      <option>Tilling</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Location</label>
                    <select className="w-full mt-1 border rounded px-2 py-1">
                      {cities.map((city, index) => (
                        <option key={index}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Minimum Rating</label>
                    <select className="w-full mt-1 border rounded px-2 py-1">
                      <option>Any Rating</option>
                      <option>4.5+</option>
                      <option>4.0+</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    <label className="text-sm">Available Now</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="w-full md:w-3/4 overflow-x-auto">
              <h3 className="text-lg font-semibold mb-4">
                {providers.length} providers found
              </h3>

              <div className="space-y-6">
                {providers.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-1">{p.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <FaStar className="text-yellow-500" />
                        <span>
                          {p.rating} ({p.reviews} reviews)
                        </span>
                        <span>• {p.location}</span>
                        {p.available && (
                          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Available
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{p.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {p.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Experience:</span> {p.experience} years
                        &nbsp; | &nbsp;
                        <span className="font-semibold">Rate:</span> {p.rate}
                        &nbsp; | &nbsp;
                        <span className="font-semibold">Profession:</span> {p.profession}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-md w-full">
                        Book Now
                      </button>
                      <button className="border text-green-700 px-4 py-2 rounded-md w-full">
                        View Profile
                      </button>
                      <div className="flex gap-2 mt-2">
                        <button className="border rounded p-2">
                          <FiPhone />
                        </button>
                        <button className="border rounded p-2">
                          <FiGlobe />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

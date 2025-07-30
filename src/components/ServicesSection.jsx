// src/components/ServicesSection.jsx
//Developed by Mr N~G~K

import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search as SearchIcon } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Appliance Repairs",
    description: "On the Spot Appliance Repair and Maintenance",
    rating: 4.8,
    providers: 24,
    image: "/images/appliance-repairs.png",
  },
  {
    id: 2,
    title: "Electrician Services",
    description: "Safe and reliable Electrical Repair Services",
    rating: 5.0,
    providers: 30,
    image: "/images/electrical-repairs.png",
  },
  {
    id: 3,
    title: "Plumbing Services",
    description: "Expert plumbers in your neighborhood, for leaks, clogs & installs",
    rating: 4.2,
    providers: 10,
    image: "/images/plumbing.png",
  },
  {
    id: 4,
    title: "Carpentry Services",
    description: "Expert Carpenters crafting custom cabinets, repairs & installations",
    rating: 4.7,
    providers: 20,
    image: "/images/carpentry.png",
  },
  {
    id: 5,
    title: "Gardening and LandScapping Services",
    description: "Professional Gardening and landscaping design, install and maintain.",
    rating: 4.5,
    providers: 10,
    image: "/images/gardening.png",
  },
  {
    id: 6,
    title: "Housekeeping Services",
    description: "Trained Professional housekeepers you can rely on, every time",
    rating: 5.0,
    providers: 8,
    image: "/images/housekeeping.png",
  },
  {
    id: 7,
    title: "Refuse Collection Services",
    description: "On‑Time Service: “Never miss a pickup—weekly or on‑demand schedules",
    rating: 4.7,
    providers: 20,
    image: "/images/refuse.png",
  },
  {
    id: 8,
    title: "Pest Control and Animal Removal",
    description: "Licensed technicians eliminating pests and Moving Dangerous Animals with Ecofriendly methods",
    rating: 4.7,
    providers: 20,
    image: "/images/pests.png",
  },
  {
    id: 9,
    title: "Swimming Pools",
    description: "From Custom builds to routine maintenance—swim with confidence.",
    rating: 5.0,
    providers: 10,
    image: "/images/pools.png",
  },
  {
    id: 10,
    title: "Boreholes",
    description: "Professional borehole drilling & pump services",
    rating: 4.8,
    providers: 18,
    image: "/images/boreholes.png",
  },
  {
    id: 11,
    title: "Solar Systems",
    description: "Custom solar installations and monitoring for maximum ROI",
    rating: 4.7,
    providers: 30,
    image: "/images/solar.png",
  },
  {
    id: 12,
    title: "Painting and Tiling",
    description: "Professional painting and tiling—precision, durability, and style.",
    rating: 4.7,
    providers: 12,
    image: "/images/painting.png",
  },
]

export default function ServicesSection() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])

  // Prepare refs for each card
  const cardRefs = useRef({})
  useEffect(() => {
    services.forEach((svc) => {
      if (!cardRefs.current[svc.id]) {
        cardRefs.current[svc.id] = React.createRef()
      }
    })
  }, [])

  // live suggestions
  useEffect(() => {
    const q = query.trim().toLowerCase()
    if (!q) return setSuggestions([])
    const matches = services.filter((s) =>
      s.title.toLowerCase().includes(q)
    )
    setSuggestions(matches.map((s) => s.title).slice(0, 5))
  }, [query])

  // scroll to a card
  const scrollToService = (id) => {
    const node = cardRefs.current[id]?.current
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // handle search click or Enter
  const handleSearch = () => {
    const q = query.trim().toLowerCase()
    const match = services.find((s) =>
      s.title.toLowerCase().includes(q)
    )
    if (match) scrollToService(match.id)
    setQuery("")
    setSuggestions([])
  }

  // clicking on a suggestion
  const pickSuggestion = (title) => {
    setQuery("")
    setSuggestions([])
    const svc = services.find((s) => s.title === title)
    if (svc) scrollToService(svc.id)
  }

  return (
    <section className="pt-0 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner */}
        <div className="border-2 border-green-600 bg-green-600 rounded-lg px-6 py-4 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Find Trusted Local Professionals
            </h2>
            <p className="mt-1 text-white">
              Connect with vetted professionals for all your home service needs
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-4 max-w-md mx-auto relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search for services…"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 bg-white text-black placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Search for services"
            />
            <button
              onClick={handleSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100 transition font-semibold"
              aria-label="Search"
            >
              Search
            </button>

            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {suggestions.map((s, i) => (
                  <li
                    key={i}
                    onClick={() => pickSuggestion(s)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Popular Services Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Popular Services
        </h3>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              ref={cardRefs.current[svc.id]}
              className="bg-white rounded-lg shadow flex flex-col overflow-hidden group transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-48 object-cover bg-gray-200"
                />
              </div>
              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {svc.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 flex-grow">
                  {svc.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
                  <span className="flex items-center">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    {svc.rating}
                  </span>
                  <span>{svc.providers} Providers</span>
                </div>
                <Link
                  to="/services"
                  className="mt-4 inline-block w-full text-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  View Providers
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
//Developed by Mr N~G~K

// src/pages/FindProfessional.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Service types, sorted alphabetically
const serviceTypes = [
  "Appliance Repairs", "Baby Essentials", "BoreHole Drilling", "Carpentry Work",
  "Cell Phone Repairs", "Children Parties", "Electrical Repairs", "Emergency Centres",
  "Gardening", "Gate Motor Repairs", "Geysers and Water Heating", "Health & Fitness",
  "Home Renovations", "House Keeping", "Internet and StarLink", "Movers and Moving",
  "Motor Vehicle Repairs", "Motor Vehicle Servicing", "Painting", "Pest Control",
  "Pet Grooming", "Plumbing", "Refuse Collection", "Security Systems",
  "Solar Installations", "Swimming Pools", "Wall Mountings","Tilling"
].sort();

const cities = [
  "Beitbridge", "Bindura", "Bulawayo", "Chegutu", "Chinhoyi", "Chipinge",
  "Chiredzi", "Chitungwiza", "Epworth", "Gokwe", "Gwanda", "Gweru", "Hwange",
  "Kadoma", "Kariba", "Karoi", "Kwekwe", "Marondera", "Masvingo", "Mashava",
  "Mutare", "Norton", "Redcliff", "Ruwa", "Rusape", "Shamva", "Shurugwi",
  "Victoria Falls", "Zvishavane","Harare"
].sort();

function getToday() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export default function FindProfessional() {
  const navigate = useNavigate();

  const referenceRef = useRef(`REF${Date.now().toString().slice(-7)}`);
  const [form, setForm] = useState({
    serviceType: '',
    details: '',
    date: '',
    city: '',
    address: '',
  });
  const [attachments, setAttachments] = useState([]);
  const [selected, setSelected] = useState(null);

  // Dropdown search states
  const [serviceTypeQuery, setServiceTypeQuery] = useState('');
  const [showServiceTypeDropdown, setShowServiceTypeDropdown] = useState(false);

  const [cityQuery, setCityQuery] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  // For demo, always show the below results on Search
  const [results, setResults] = useState([]);

  const creationDate = getToday();

  // Service type filter for search
  const filteredServiceTypes = serviceTypeQuery
    ? serviceTypes.filter(type => type.toLowerCase().includes(serviceTypeQuery.toLowerCase()))
    : serviceTypes;

  // City filter for search
  const filteredCities = cityQuery
    ? cities.filter(c => c.toLowerCase().includes(cityQuery.toLowerCase()))
    : cities;

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleFiles = e => {
    const files = Array.from(e.target.files).slice(0, 3);
    setAttachments(files);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // For now, always display the hardcoded search results from your sample
    setResults([
      {
        name: "Tatenda Ndldohlo",
        profession: "Plumber",
        contacts: "0772 125333",
        experience: "Am a seasoned Plumber",
        social: "facebook : tatshdohlo"
      },
      {
        name: "Fine Chipufe",
        profession: "Electrician",
        contacts: "773 125333",
        experience: "High Voltage Certification",
        social: "magetsi"
      },
      {
        name: "Obvios Matete",
        profession: "Gardener",
        contacts: "774 125333",
        experience: "Good at Growing Covo",
        social: "None"
      }
    ]);
  };

  const closeModal = () => setSelected(null);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center p-2 sm:p-4"
      style={{ backgroundImage: "url('/images/findworker.jpeg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white bg-opacity-95 rounded-xl border border-green-600 shadow-lg px-3 py-6 sm:p-8 flex flex-col gap-5"
        style={{ minWidth: 0 }}
        autoComplete="off"
      >
        <h2 className="text-xl font-semibold text-green-600 mb-2 text-center">
          Find a Service Provider Near You (Still Moms)
        </h2>
        {/* Creation & Reference Number */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <div className="flex-1">
            <label className="font-semibold text-gray-600">Creation Date</label>
            <input
              type="text"
              value={creationDate}
              readOnly
              className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-700 font-semibold focus:outline-none cursor-not-allowed"
            />
          </div>
          <div className="flex-1">
            <label className="font-semibold text-gray-600">Reference Number</label>
            <input
              type="text"
              value={referenceRef.current}
              readOnly
              className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-700 font-semibold focus:outline-none cursor-not-allowed"
            />
          </div>
        </div>

        {/* Service Type - searchable dropdown */}
        <div className="relative" style={{ width: "270px" }}>
          <label className="font-semibold text-green-700">What Do you Need Done?</label>
          <input
            type="text"
            name="serviceType"
            value={serviceTypeQuery !== '' ? serviceTypeQuery : form.serviceType}
            onChange={e => {
              setServiceTypeQuery(e.target.value);
              setForm(f => ({ ...f, serviceType: '' }));
              setShowServiceTypeDropdown(true);
            }}
            onFocus={() => setShowServiceTypeDropdown(true)}
            onBlur={() => setTimeout(() => setShowServiceTypeDropdown(false), 120)}
            placeholder="Type or select..."
            className="border border-green-600 rounded px-2 py-1 focus:outline-none w-full"
            autoComplete="off"
            required
          />
          {showServiceTypeDropdown && (
            <div className="absolute z-20 bg-white border border-green-300 w-full mt-1 rounded shadow max-h-60 overflow-auto">
              {filteredServiceTypes.length === 0 && (
                <div className="p-2 text-gray-400">No matches</div>
              )}
              {filteredServiceTypes.slice(0, 10).map((type) => (
                <div
                  key={type}
                  className="p-2 hover:bg-green-100 cursor-pointer text-gray-700"
                  onClick={() => {
                    setForm(f => ({ ...f, serviceType: type }));
                    setServiceTypeQuery(type);
                    setShowServiceTypeDropdown(false);
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Description */}
        <div>
          <label className="font-semibold text-green-700">
            Description of What needs to be done
          </label>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            placeholder="Describe the work that needs to be done (up to 5 sentences)"
            rows={5}
            className="w-full border border-green-600 rounded px-2 py-1 focus:outline-none"
            required
          />
        </div>

        {/* When (Date), City, Area */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <div className="flex-1">
            <label className="font-semibold text-green-700">When (Date)</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-green-600 rounded px-2 py-1 focus:outline-none"
              min={creationDate}
              required
            />
          </div>
          <div className="flex-1 relative">
            <label className="font-semibold text-green-700">City</label>
            <input
              type="text"
              name="city"
              value={cityQuery !== '' ? cityQuery : form.city}
              onChange={e => {
                setCityQuery(e.target.value);
                setForm(f => ({ ...f, city: '' }));
                setShowCityDropdown(true);
              }}
              onFocus={() => setShowCityDropdown(true)}
              onBlur={() => setTimeout(() => setShowCityDropdown(false), 120)}
              placeholder="Type to search..."
              className="border border-green-600 rounded px-2 py-1 focus:outline-none w-44 sm:w-full"
              autoComplete="off"
              required
            />
            {showCityDropdown && cityQuery && (
              <div className="absolute z-20 bg-white border border-green-300 w-44 sm:w-full mt-1 rounded shadow max-h-52 overflow-auto">
                {filteredCities.length === 0 && (
                  <div className="p-2 text-gray-400">No cities found</div>
                )}
                {filteredCities.slice(0, 10).map((city) => (
                  <div
                    key={city}
                    className="p-2 hover:bg-green-100 cursor-pointer text-gray-700"
                    onClick={() => {
                      setForm(f => ({ ...f, city }));
                      setCityQuery(city);
                      setShowCityDropdown(false);
                    }}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex-1">
            <label className="font-semibold text-green-700">Residential Area</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Area of Residence"
              className="w-full border border-green-600 rounded px-2 py-1 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Attachments */}
        <div className="border border-green-600 rounded p-3 bg-gray-50">
          <label className="font-bold text-green-700">Attach Pictures/Document</label>
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.jpg,.png"
            onChange={handleFiles}
            className="block mt-2"
          />
          <div className="text-xs text-gray-600">
            Maximum of 3
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-1">
          <button
            type="submit"
            className="flex-1 px-4 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-100 font-semibold"
          >
            Search
          </button>
          <button
            type="button"
            className="flex-1 px-4 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-100 font-semibold"
            onClick={() => navigate('/services')}
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Search Results Section */}
      <div className="w-full max-w-2xl mt-6">
        <div className="border-2 border-gray-400 rounded-lg bg-gray-50 shadow-lg p-3 sm:p-6">
          <div className="text-lg font-bold text-green-700 mb-2">Search Results</div>
          {results.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-green-700 font-bold">
                    <th className="border-b border-green-600 p-2">Name</th>
                    <th className="border-b border-green-600 p-2">Profession</th>
                    <th className="border-b border-green-600 p-2">Contacts</th>
                    <th className="border-b border-green-600 p-2">Experience</th>
                    <th className="border-b border-green-600 p-2">Social Media Presence</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, idx) => (
                    <tr key={idx} className="hover:bg-green-100">
                      <td className="p-2 border-b border-green-600">{row.name}</td>
                      <td className="p-2 border-b border-green-600">{row.profession}</td>
                      <td className="p-2 border-b border-green-600">{row.contacts}</td>
                      <td className="p-2 border-b border-green-600">{row.experience}</td>
                      <td className="p-2 border-b border-green-600">{row.social}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-gray-500">No results yet. Submit above to search professionals.</div>
          )}
        </div>
      </div>
    </div>
  );
}

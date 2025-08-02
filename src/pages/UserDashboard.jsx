//Developed by Mr N~G~K
import React, { useState, useRef } from "react";
import Navbar2 from "../components/Navbar2.jsx";
import Footer from "../components/Footer.jsx";
import TokenExpiryTimer from "../login/TokenExpiryTimer";
// Dummy user, booking, and favorite data for demo purposes
const USER = {
  name: "Jane Doe",
  memberSince: "January 2023",
  city: "Harare",
  suburb: "Avondale",
  profilePic: "",
  stats: {
    total: 4,
    completed: 2,
    favorites: 2,
  },
  email: "jane.doe@email.com",
  phone: "+263 77 123 4567",
  address: "123 Main Street, Avondale",
};

const BOOKINGS = [
  {
    id: 1,
    title: "Plumbing Repair",
    provider: "John Mukamuri",
    desc: "Fixed kitchen sink leak and replaced faucet",
    date: "2024-01-15 at 10:00 AM",
    location: "123 Main St, Harare",
    status: "Completed",
    price: "$45",
    rating: 5,
  },
  {
    id: 2,
    title: "Electrical Installation",
    provider: "Sarah Chikwanha",
    desc: "Installed new ceiling fan and light fixtures",
    date: "2024-01-10 at 2:00 PM",
    location: "456 Oak Ave, Harare",
    status: "Completed",
    price: "$120",
    rating: 3,
  },
  {
    id: 3,
    title: "Carpentry Work",
    provider: "Michael Ndoro",
    desc: "Custom bookshelf installation",
    date: "2024-02-20 at 9:00 AM",
    location: "789 Pine St, Harare",
    status: "Upcoming",
    price: "$80",
    rating: null,
  },
  {
    id: 4,
    title: "Garden Maintenance",
    provider: "Grace Moyo",
    desc: "Lawn mowing and hedge trimming",
    date: "2024-01-05 at 11:00 AM",
    location: "321 Cedar Rd, Harare",
    status: "Cancelled",
    price: "$60",
    rating: null,
  },
];

const FAVOURITES = [
  {
    id: 1,
    name: "John Mukamuri",
    profession: "Plumber",
    rating: 4.8,
    reviews: 127,
    suburb: "Avondale",
    city: "Harare",
    image: "",
  },
  {
    id: 2,
    name: "Sarah Chikwanha",
    profession: "Electrician",
    rating: 4.9,
    reviews: 89,
    suburb: "Hillside",
    city: "Bulawayo",
    image: "",
  },
];

export default function UserDashboard() {
  const [tab, setTab] = useState(0);
  const inputFileRef = useRef(null);
  const [profilePic, setProfilePic] = useState(USER.profilePic);

  const handlePicUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const TABS = [
    { name: "Profile", icon: <span className="mr-2">👤</span> },
    { name: "Bookings", icon: <span className="mr-2">📑</span> },
    { name: "Favorites", icon: <span className="mr-2">❤️</span> },
    { name: "Settings", icon: <span className="mr-2">⚙️</span> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar2 /> {/* ✅ Top navbar */}
      <div className="flex flex-1 flex-col md:flex-row md:items-start max-w-7xl mx-auto w-full p-2 md:p-6">
        {/* SIDEBAR */}
        <aside className="w-full md:w-72 flex-shrink-0 md:mr-6 mb-4 md:mb-0">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            {/* Profile Picture */}
            <div className="mb-2">
              <div className="w-[63px] h-[64px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center relative">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="profile"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-4xl text-gray-400">👤</span>
                )}
                <button
                  onClick={() => inputFileRef.current.click()}
                  className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow hover:bg-gray-100 text-xs"
                  title="Change picture"
                >
                  <span role="img" aria-label="upload">
                    📸
                  </span>
                </button>
                <input
                  ref={inputFileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePicUpload}
                />
              </div>
            </div>
            <div className="font-semibold text-lg">{USER.name}</div>
            <div className="text-gray-500 text-sm mt-1">
              Member since {USER.memberSince}
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <span role="img" aria-label="location" className="mr-1">
                📍
              </span>
              {USER.suburb}, {USER.city}
            </div>
            <button className="mt-4 border rounded px-4 py-2 text-sm hover:bg-gray-100 w-full">
              <span role="img" aria-label="edit" className="mr-1">
                ✏️
              </span>
              Edit Profile
            </button>
          </div>
          <div className="bg-white rounded-xl shadow mt-4 p-4">
            <div className="font-semibold mb-2 text-md">Quick Stats</div>
            <div className="flex justify-between text-sm py-1">
              <span>Total Bookings:</span>
              <span>{USER.stats.total}</span>
            </div>
            <div className="flex justify-between text-sm py-1">
              <span>Completed:</span>
              <span className="text-green-600">{USER.stats.completed}</span>
            </div>
            <div className="flex justify-between text-sm py-1">
              <span>Favorites:</span>
              <span>{USER.stats.favorites}</span>
            </div>
          </div>
        </aside>

        {/* MAIN DASHBOARD AREA */}
        <main className="flex-1 w-full">
          <nav className="w-full mb-4 flex bg-white rounded-xl shadow overflow-x-auto">
            {TABS.map((t, i) => (
              <button
                key={i}
                className={`flex items-center px-4 py-3 whitespace-nowrap text-base font-medium border-b-2 transition-colors duration-200 ${
                  tab === i
                    ? "border-black text-black bg-gray-100"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
                onClick={() => setTab(i)}
                aria-selected={tab === i}
              >
                {t.icon} {t.name}
              </button>
            ))}
          </nav>

          <div className="bg-white rounded-xl shadow p-6">
            {/* TAB 1: PERSONAL INFO */}
            {tab === 0 && (
              <div className="flex justify-center items-center min-h-[60vh]">
                <div className="w-full max-w-2xl">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Personal Information
                  </h2>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full border rounded px-3 py-2 bg-gray-50"
                        value={USER.name}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full border rounded px-3 py-2 bg-gray-50"
                        value={USER.email}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Phone</label>
                      <input
                        type="text"
                        className="w-full border rounded px-3 py-2 bg-gray-50"
                        value={USER.phone}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">City</label>
                      <input
                        type="text"
                        className="w-full border rounded px-3 py-2 bg-gray-50"
                        value={USER.city}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Suburb</label>
                      <input
                        type="text"
                        className="w-full border rounded px-3 py-2 bg-gray-50"
                        value={USER.suburb}
                        readOnly
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-semibold mb-1">
                        Full Address
                      </label>
                      <textarea
                        className="w-full border rounded px-3 py-2 bg-gray-50 min-h-[48px]"
                        value={USER.address}
                        readOnly
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* TAB 2: BOOKINGS */}
            {tab === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Booking History</h2>
                <div className="flex flex-col gap-4">
                  {BOOKINGS.map((b) => (
                    <div
                      key={b.id}
                      className="border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-lg">{b.title}</div>
                        <div className="text-gray-600 text-sm mb-1">
                          with{" "}
                          <span className="font-semibold">{b.provider}</span>
                        </div>
                        <div className="text-gray-500 text-sm">{b.desc}</div>
                        <div className="flex flex-wrap items-center text-gray-400 text-xs gap-3 mt-2">
                          <span>{b.date}</span>
                          <span className="flex items-center gap-1">
                            <span role="img" aria-label="map">
                              📍
                            </span>
                            {b.location}
                          </span>
                        </div>
                        {b.rating && (
                          <div className="flex items-center text-yellow-500 mt-1 text-sm">
                            Your rating:{" "}
                            <span className="ml-1">
                              {Array(b.rating)
                                .fill(0)
                                .map((_, i) => (
                                  <span key={i}>★</span>
                                ))}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col md:items-end md:w-40 mt-2 md:mt-0">
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-semibold mb-2 text-center ${
                            b.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : b.status === "Upcoming"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {b.status}
                        </div>
                        <div className="font-semibold text-green-700 text-lg mb-2">
                          {b.price}
                        </div>
                        <div className="flex gap-2">
                          {b.status === "Upcoming" && (
                            <>
                              <button className="border px-2 py-1 rounded text-xs hover:bg-gray-200">
                                Reschedule
                              </button>
                              <button className="border px-2 py-1 rounded text-xs hover:bg-red-100 text-red-600">
                                Cancel
                              </button>
                            </>
                          )}
                          <button className="border px-2 py-1 rounded text-xs hover:bg-gray-100">
                            Contact Provider
                          </button>
                          <button className="border px-2 py-1 rounded text-xs hover:bg-gray-100">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: FAVOURITES */}
            {tab === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Favorite Service Providers
                </h2>
                <div className="flex flex-wrap gap-4">
                  {FAVOURITES.map((f) => (
                    <div
                      key={f.id}
                      className="border rounded-lg p-4 bg-gray-50 flex flex-col items-center w-full md:w-80"
                    >
                      <div className="w-16 h-16 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
                        {f.image ? (
                          <img
                            src={f.image}
                            alt={f.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <span className="text-3xl text-gray-400">👤</span>
                        )}
                      </div>
                      <div className="font-bold">{f.name}</div>
                      <div className="text-gray-500">{f.profession}</div>
                      <div className="text-yellow-600 flex items-center">
                        <span className="mr-1">★</span>
                        {f.rating} ({f.reviews} reviews)
                      </div>
                      <div className="text-gray-400 text-sm mb-2">
                        {f.suburb}, {f.city}
                      </div>
                      <button className="bg-green-500 text-white px-4 py-2 rounded mb-2 w-full hover:bg-green-600">
                        Book Now
                      </button>
                      <button className="border px-2 py-1 rounded text-xl text-red-400 w-full">
                        ♥
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: SETTINGS */}
            {tab === 3 && (
              <div className="flex flex-col gap-8">
                {/* Notification Preferences */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span role="img" aria-label="bell">
                      🔔
                    </span>
                    Notification Preferences
                  </h2>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-semibold">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="accent-blue-600"
                      />
                      Email Notifications
                      <span className="text-gray-500 font-normal">
                        Receive booking confirmations and updates
                      </span>
                    </label>
                    <label className="flex items-center gap-2 font-semibold">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="accent-blue-600"
                      />
                      SMS Notifications
                      <span className="text-gray-500 font-normal">
                        Get text messages for urgent updates
                      </span>
                    </label>
                    <label className="flex items-center gap-2 font-semibold">
                      <input type="checkbox" className="accent-blue-600" />
                      Marketing Communications
                      <span className="text-gray-500 font-normal">
                        Receive promotional offers and news
                      </span>
                    </label>
                  </div>
                </div>
                {/* Account Security */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span role="img" aria-label="lock">
                      🔒
                    </span>
                    Account Security
                  </h2>
                  <div className="flex flex-col gap-3">
                    <button className="border px-4 py-2 rounded text-left">
                      Change Password
                    </button>
                    <button className="border px-4 py-2 rounded text-left">
                      Two-Factor Authentication
                    </button>
                    <button className="border px-4 py-2 rounded text-left">
                      Download My Data
                    </button>
                    <button className="border px-4 py-2 rounded text-left text-red-600 border-red-200 bg-red-50 hover:bg-red-100">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      <TokenExpiryTimer /> {/* ✅ Token expiry timer component */}
      <Footer /> {/* ✅ Bottom footer */}
    </div>
  );
}
//Developed by Mr N~G~K

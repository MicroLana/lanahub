//Developed by Mr N~G~K
import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import ProviderHome from "../components/ProviderHome";
import ProviderProfile from "../components/ProviderProfile";
import ProviderBookings from "../components/ProviderBookings";
import ProviderAnalytics from "../components/ProviderAnalytics";
import TokenExpiryTimer from "../login/TokenExpiryTimer";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";

const profileData = {
  name: "John Mukamuri",
  profession: "Plumber",
  verified: true,
  rating: 4.8,
  reviews: 127,
  jobsCompleted: 89,
  responseTime: "< 2 hours",
  profileViews: 1250,
  available: true,
  email: "john.mukamuri@email.com",
  phone: "+263 77 123 4567",
  gender: "Male",
  nationality: "Zimbabwe",
  city: "Harare",
  suburb: "Avondale",
  address: "123 Main Street, Avondale, Harare",
  experience: "6-10 years",
  bio: "Experienced plumber with over 8 years in residential and commercial plumbing. Specializing in emergency repairs, pipe installation, and maintenance services. I pride myself on quality work and customer satisfaction.",
  website: "https://johnplumbing.co.zw",
  joined: "Jan 2023",
};

const bookings = [
  {
    title: "Kitchen Sink Repair",
    client: "Sarah Johnson",
    date: "2024-01-22 at 10:00 AM",
    location: "Borrowdale, Harare",
    amount: 45,
    status: "Pending",
  },
  {
    title: "Bathroom Installation",
    client: "Michael Chen",
    date: "2024-01-20 at 2:00 PM",
    location: "Mount Pleasant, Harare",
    amount: 120,
    status: "Completed",
  },
  {
    title: "Pipe Replacement",
    client: "Grace Moyo",
    date: "2024-01-18 at 9:00 AM",
    location: "Highlands, Harare",
    amount: 80,
    status: "Completed",
  },
  {
    title: "Emergency Leak Fix",
    client: "David Wilson",
    date: "2024-01-25 at 3:00 PM",
    location: "Newlands, Harare",
    amount: 65,
    status: "Confirmed",
  },
];

const analytics = {
  profileViews: 1250,
  favorites: 45,
  responseRate: 95,
  jobCompletionRate: 57,
  customerSatisfaction: 4.8,
  profileCompleteness: 95,
};

const stats = [
  {
    title: "Total Bookings",
    value: 156,
    icon: <span className="text-blue-600">📅</span>,
  },
  {
    title: "Completed Jobs",
    value: 89,
    icon: <span className="text-green-600">✅</span>,
  },
  {
    title: "Monthly Earnings",
    value: "$2340",
    icon: <span className="text-yellow-500">$</span>,
  },
  {
    title: "Average Rating",
    value: 4.8,
    icon: <span className="text-purple-600">⭐</span>,
  },
];

export default function ProviderDashboard() {
  const [editProfile, setEditProfile] = useState(false);
  const [profile, setProfile] = useState(profileData);
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();
  const { user } = location.state || {};
  const [userData, setUserData] = useState(null); // To store API response
  const [loading, setLoading] = useState(true); // To show loading state
  const [error, setError] = useState(null); // To store error
  const { login, logout, register, loggedInUser, getUserDetails, getUserDocs } =
    useAuth();
  console.log("User from state:", user);
  profileData.email = user.email;
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveProfile = () => {
    setEditProfile(false);
    setActiveTab("home"); // error if setActiveTab is undefined
  };
  useEffect(() => {
    async function fetchUserData() {
      const userDetails = await getUserDetails("users", user.uid);
      if (!userDetails) {
        setError("Failed to fetch user details");
      } else {
        setUserData(userDetails);
        profileData.name = userDetails.fullName;
        profileData.suburb = userDetails.suburb;
        profileData.city = userDetails.city;
        profileData.phone = userDetails.mobile;
        profileData.address = userDetails.address;
      }
      setLoading(false);
    }
    fetchUserData().catch((err) => {
      console.error("Error fetching user data:", err);
      setError("Failed to fetch user data");
      setLoading(false);
    });
  }, []); // [] means run only once when component loads

  // Show loading state
  if (loading) return <p>Loading...</p>;

  // Show error state
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar2 />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
          {/* Sidebar */}
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-4">
            <div className="flex flex-col items-center">
              <div className="relative inline-block rounded-full overflow-hidden bg-gray-200 w-16 h-16 mb-3 flex items-center justify-center">
                <span className="text-2xl font-semibold">
                  {profile.name.charAt(0)}
                </span>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">{profile.name}</div>
                <div className="text-sm text-gray-600">
                  {profile.profession}
                </div>
                {profile.verified && (
                  <div className="flex items-center justify-center text-green-600 text-xs mt-1">
                    ✔️ Verified
                  </div>
                )}
                <div className="flex items-center justify-center mt-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="ml-1 font-semibold">{profile.rating}</span>
                  <span className="ml-1 text-gray-500 text-xs">
                    ({profile.reviews})
                  </span>
                </div>
                <div className="text-xs text-gray-600 mt-2 space-y-1">
                  <div>
                    Jobs Completed:{" "}
                    <span className="font-bold text-black">
                      {profile.jobsCompleted}
                    </span>
                  </div>
                  <div>
                    Response Time:{" "}
                    <span className="font-bold text-black">
                      {profile.responseTime}
                    </span>
                  </div>
                  <div>
                    Profile Views:{" "}
                    <span className="font-bold text-black">
                      {profile.profileViews}
                    </span>
                  </div>
                </div>
                <button
                  className="w-full mt-3 border rounded py-2 text-sm font-medium hover:bg-gray-100"
                  onClick={() => setEditProfile(true)}
                >
                  ✏️ Edit Profile
                </button>
              </div>
              <div className="w-full mt-4 space-y-2">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
                  💬 View Messages
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                  📅 Manage Schedule
                </button>
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-black py-2 rounded">
                  ⚙️ Account Settings
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full max-w-4xl bg-white rounded-2xl shadow-md p-4">
            <Tabs defaultValue="dashboard">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard">
                <ProviderHome stats={stats} bookings={bookings} />
              </TabsContent>
              <TabsContent value="profile">
                <ProviderProfile
                  profile={profile}
                  editProfile={editProfile}
                  handleProfileChange={handleProfileChange}
                  handleSaveProfile={handleSaveProfile}
                />
              </TabsContent>
              <TabsContent value="bookings">
                <ProviderBookings bookings={bookings} />
              </TabsContent>
              <TabsContent value="analytics">
                <ProviderAnalytics analytics={analytics} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <TokenExpiryTimer />
      <Footer />
    </div>
  );
}

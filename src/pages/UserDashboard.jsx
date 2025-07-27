//Developed by Mr N~G~K
import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  FiHome,
  FiUser,
  FiCalendar,
  FiCreditCard,
  FiGift,
  FiShare2,
  FiLogOut,
  FiTool,
  FiTruck,
  FiSmartphone,
  FiZap,
  FiSliders,
  FiKey,
  FiUpload,
  FiX
} from 'react-icons/fi'

const tabs = [
  { key: 'home', label: 'Home', icon: <FiHome size={20}/> },
  { key: 'profile', label: 'Profile', icon: <FiUser size={20}/> },
  { key: 'bookings', label: 'Bookings', icon: <FiCalendar size={20}/> },
  { key: 'payments', label: 'Payments', icon: <FiCreditCard size={20}/> },
  { key: 'vouchers', label: 'Vouchers', icon: <FiGift size={20}/> },
  { key: 'refer', label: 'Refer & Earn', icon: <FiShare2 size={20}/> }
]

const services = [
  { key: 'repairs', label: 'Vehicle Repairs', icon: <FiTool size={32}/> },
  { key: 'gardening', label: 'Gardening', icon: <FiSliders size={32}/> },
  { key: 'maintenance', label: 'Home Maintenance', icon: <FiSmartphone size={32}/> },
  { key: 'pest', label: 'Pest Control', icon: <FiTruck size={32}/> },
  { key: 'electrical', label: 'Electrical Work', icon: <FiZap size={32}/> }
]

export default function UserDashboard() {
  const [active, setActive] = useState('home')
  const [showModal, setShowModal] = useState(false)
  const [pic, setPic] = useState(null)
  const fileInput = useRef()

  useEffect(() => {
    const handleOutside = e => {
      if (showModal && !document.getElementById('pwd-modal')?.contains(e.target)) {
        setShowModal(false)
      }
    }
    window.addEventListener('mousedown', handleOutside)
    return () => window.removeEventListener('mousedown', handleOutside)
  }, [showModal])

  const handlePicUpload = e => {
    const file = e.target.files[0]
    if (!file) return
    setPic(URL.createObjectURL(file))
  }

  // Render functions for each tab
  const renderHome = () => (
    <div className="w-full bg-white p-6 rounded border-2 border-green-500 flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">Find a Service</h2>
      <div className="grid grid-cols-5 gap-4 mb-4">
        {services.map(s => (
          <div key={s.key} className="flex flex-col items-center p-4 border rounded-lg">
            {s.icon}
            <span className="mt-2 text-center text-gray-700">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="text-center mb-8">
        <button className="text-green-600 font-medium hover:underline">Book Professional</button>
      </div>
      <div className="flex-1 mb-6">
        <h3 className="text-xl font-semibold mb-2">Upcoming Appointments</h3>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Past Bookings</h3>
        <p className="text-gray-500">No past bookings</p>
      </div>
      <button className="w-1/2 mx-auto py-3 bg-green-700 text-white rounded-full">Book Now</button>
    </div>
  )

  const renderProfile = () => (
    <div className="w-full bg-white p-6 rounded border-2 border-green-500 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Profile</h2>
        <div className="w-20 h-20 relative border border-transparent overflow-hidden">
          {pic
            ? <img src={pic} alt="Profile" className="w-full h-full object-cover" />
            : <FiUser size={56} className="text-green-600" />
          }
          <input
            type="file"
            accept="image/*"
            ref={fileInput}
            onChange={handlePicUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>
      <div className="border-2 border-green-500 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">My Details</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">First Name</label>
            <input className="w-full p-2 border rounded-full bg-gray-100" placeholder="John" />
          </div>
          <div>
            <label className="block text-sm mb-1">Last Name</label>
            <input className="w-full p-2 border rounded-full bg-gray-100" placeholder="Doe" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input type="email" className="w-full p-2 border rounded-full bg-gray-100" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Mobile Number</label>
            <input className="w-full p-2 border rounded-full bg-gray-100" placeholder="(123) 456-7890" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={() => setShowModal(true)} className="flex items-center space-x-2 px-4 py-2 bg-green-700 text-white rounded-full">
          <FiKey /><span>Update Password</span>
        </button>
      </div>
      <div className="border-2 border-green-500 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Company Address</h3>
        <input className="w-full p-2 border rounded bg-gray-100" placeholder="Enter your address" />
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="newsletter" className="mr-2" />
        <label htmlFor="newsletter" className="text-sm">I want to receive newsletters</label>
      </div>
      <button className="mt-4 w-full py-3 bg-green-700 text-white rounded-full">Save changes</button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div id="pwd-modal" className="bg-white p-6 rounded-lg w-80 relative">
            <button className="absolute top-2 right-2 text-gray-600" onClick={() => setShowModal(false)}><FiX/></button>
            <h3 className="text-xl font-bold mb-4">Update Password</h3>
            <div className="space-y-4">
              {['Old Password','New Password','Confirm Password'].map((label, i) => (
                <div key={i}>
                  <label className="block text-sm mb-1">{label}</label>
                  <input type="password" className="w-full p-2 border rounded" />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="px-4 py-2 bg-green-700 text-white rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderBookings = () => (
    <div className="w-full bg-white p-6 rounded border-2 border-green-500 flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <nav className="flex space-x-8 text-gray-700">
        <button className="pb-2 border-b-2 border-green-500 text-green-600">Upcoming</button>
        <button className="pb-2">Completed</button>
        <button className="pb-2">Cancelled</button>
      </nav>
      <div className="border-b-2 border-green-500 my-4 w-full" />
      <div className="flex-1 text-center text-gray-500">No bookings to show</div>
    </div>
  )

  const renderPayments = () => (
    <div className="w-full bg-white p-6 rounded border-2 border-green-500 flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
      <div className="w-40 h-48 border-2 border-green-500 rounded flex items-center justify-center">
        <span className="text-green-600">Add new card</span>
      </div>
    </div>
  )

  const renderVouchers = () => (
    <div className="w-full bg-white p-6 rounded border-2 border-green-500 flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">Vouchers</h2>
      <nav className="flex space-x-8 text-gray-700">
        <button className="pb-2">Redeem</button>
        <button className="pb-2 border-b-2 border-green-500 text-green-600">History</button>
      </nav>
      <div className="border-b-2 border-green-500 my-4 w-full" />
      <div className="flex-1">
        <div className="border-2 border-green-500 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Buy a Gift Voucher</h3>
          <p className="text-gray-600 mb-4">
            Looking to buy a gift voucher? You buy a gift voucher and send it to someone special who’s in need of a good clean.
          </p>
          <button className="px-6 py-2 bg-green-700 text-white rounded-full">Buy Vouchers</button>
        </div>
      </div>
    </div>
  )

  const renderRefer = () => (
    <div className="w-full bg-white p-6 rounded border-2 border-green-500 flex flex-col space-y-6">
      <h2 className="text-2xl font-bold mb-4">Refer & Earn</h2>
      <div className="border-2 border-green-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Share your Unique Code</h3>
        <div className="flex space-x-4 mb-4">
          <input className="flex-1 p-2 border rounded-full bg-gray-100" value="FR2SHY" readOnly />
          <button className="px-4 py-2 bg-green-700 text-white rounded-full">Copy Link</button>
        </div>
        <div className="flex space-x-2">
          {['Facebook','Messenger','X','WhatsApp'].map((ch, i)=>(
            <button key={i} className="px-3 py-2 bg-gray-200 rounded">{ch}</button>
          ))}
        </div>
      </div>
      <div className="border-2 border-green-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Invite your friends</h3>
        <div className="flex space-x-4">
          <input className="flex-1 p-2 border rounded-full bg-gray-100" placeholder="Add email addresses" />
          <button className="px-4 py-2 bg-green-700 text-white rounded-full">Send Invites</button>
        </div>
      </div>
      <div className="border-2 border-green-500 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">How it works</h3>
        <div className="grid grid-cols-2 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FiShare2 size={32} className="mb-2 text-green-600" />
            <p>Spread the word with your unique code:</p>
            <p className="text-green-600 font-medium">LANSHY</p>
          </div>
          <div className="flex flex-col items-center">
            <FiGift size={32} className="mb-2 text-green-600" />
            <p>Each friend that books their first clean gets ZIG100 off</p>
          </div>
        </div>
        <p className="mt-4 text-center text-green-600">T&C's apply.</p>
      </div>
    </div>
  )

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-gray-50 min-h-screen p-8">
        <div className="flex w-full max-w-5xl bg-white shadow-lg rounded">
          <aside className="w-64 flex flex-col justify-between border-r-2 border-green-500">
            <nav className="mt-6 space-y-2">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`w-full flex items-center space-x-2 py-2 px-4 rounded-r-full ${active===tab.key ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
            <div>
              <div className="my-6 border-t border-green-500"></div>
              <div className="px-4">
                <div className="uppercase font-bold flex items-center space-x-2 mb-2">
                  <FiLogOut />
                  <span>SIGN OUT</span>
                </div>
                {['Help','Contact Us','Terms & Conditions'].map(link => (
                  <button key={link} className="block text-left text-gray-700 py-1 hover:text-green-600">{link}</button>
                ))}
              </div>
            </div>
          </aside>
          <main className="flex-1 p-8 overflow-auto">
            {active==='home' && renderHome()}
            {active==='profile' && renderProfile()}
            {active==='bookings' && renderBookings()}
            {active==='payments' && renderPayments()}
            {active==='vouchers' && renderVouchers()}
            {active==='refer' && renderRefer()}
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}
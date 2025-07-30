//Developed by Mr N~G~K
import React from "react";

export default function ProviderBookings({ bookings }) {
  return (
    <div>
      <div className="text-xl font-semibold mb-4">All Bookings</div>
      <div className="flex flex-col gap-3">
        {bookings.map((b, i) => (
          <div key={i} className="flex justify-between items-center p-4 rounded-lg border bg-white shadow-sm">
            <div>
              <div className="font-semibold">{b.title}</div>
              <div className="text-xs text-gray-500">Client: {b.client}</div>
              <div className="text-xs text-gray-500">{b.date} · {b.location}</div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-bold text-green-600">${b.amount}</span>
              <span className={`text-xs mt-1 px-2 py-1 rounded-full ${
                b.status === "Completed" ? "bg-green-100 text-green-700"
                : b.status === "Pending" ? "bg-yellow-100 text-yellow-800"
                : "bg-blue-100 text-blue-800"
              }`}>
                {b.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//Developed by Mr N~G~K
import React from "react";

export default function ProviderHome({ stats, bookings }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl shadow-sm border">
            <div className="mr-3 text-2xl">{stat.icon}</div>
            <div>
              <div className="text-lg font-bold">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-xl font-semibold mb-4">Recent Bookings</div>
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
    </div>
  );
}

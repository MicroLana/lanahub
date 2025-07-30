//Developed by Mr N~G~K
import React from "react";

export default function ProviderAnalytics({ analytics }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border shadow-sm">
          <span className="text-blue-600 text-2xl mb-2">👁️</span>
          <div className="text-lg font-bold">{analytics.profileViews}</div>
          <div className="text-xs text-gray-500">Profile Views</div>
          <div className="text-xs text-green-700">+12% from last month</div>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border shadow-sm">
          <span className="text-red-500 text-2xl mb-2">❤️</span>
          <div className="text-lg font-bold">{analytics.favorites}</div>
          <div className="text-xs text-gray-500">Favorites</div>
          <div className="text-xs text-green-700">+8% from last month</div>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border shadow-sm">
          <span className="text-green-500 text-2xl mb-2">💬</span>
          <div className="text-lg font-bold">{analytics.responseRate}%</div>
          <div className="text-xs text-gray-500">Response Rate</div>
          <div className="text-xs text-black">Excellent response rate</div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="text-lg font-semibold mb-4">Performance Overview</div>
        <div className="mb-4">
          <div className="text-xs font-semibold mb-1">Job Completion Rate</div>
          <div className="w-full bg-gray-200 h-3 rounded">
            <div className="bg-blue-500 h-3 rounded" style={{ width: `57%` }} />
          </div>
          <div className="text-xs text-right">57%</div>
        </div>
        <div className="mb-4">
          <div className="text-xs font-semibold mb-1">Customer Satisfaction</div>
          <div className="w-full bg-gray-200 h-3 rounded">
            <div className="bg-green-500 h-3 rounded" style={{ width: `${(4.8 / 5) * 100}%` }} />
          </div>
          <div className="text-xs text-right">4.8/5.0</div>
        </div>
        <div>
          <div className="text-xs font-semibold mb-1">Profile Completeness</div>
          <div className="w-full bg-gray-200 h-3 rounded">
            <div className="bg-purple-500 h-3 rounded" style={{ width: `95%` }} />
          </div>
          <div className="text-xs text-right">95%</div>
        </div>
      </div>
    </div>
  );
}

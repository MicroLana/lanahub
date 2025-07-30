//Developed by Mr N~G~K
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  User,
  CheckCircle,
  Star,
  Pencil,
  MessageSquare,
  Calendar,
  Settings
} from "lucide-react";

export default function ProviderSidebar({ profile, onEditProfile }) {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-md p-4 mb-6 flex flex-col items-center mx-auto lg:mx-0 lg:mr-8">
      <Avatar className="w-16 h-16 mb-3">
        <img src="/images/avatar-placeholder.png" alt={profile.name} />
        <span className="absolute bottom-0 right-0 bg-green-400 rounded-full border-2 border-white w-6 h-6 flex items-center justify-center">
          <User size={16} className="text-white" />
        </span>
      </Avatar>
      <div className="text-center w-full">
        <div className="text-lg font-semibold">{profile.name}</div>
        <div className="text-sm text-gray-600">{profile.profession}</div>
        {profile.verified && (
          <div className="flex items-center justify-center gap-1 text-green-600 text-xs font-medium my-1">
            <CheckCircle size={16} /> Verified
          </div>
        )}
        <div className="flex justify-center items-center mt-2">
          <span className="text-yellow-500 mr-1">
            <Star size={16} />
          </span>
          <span className="font-semibold">{profile.rating}</span>
          <span className="text-gray-500 text-xs ml-1">({profile.reviews})</span>
        </div>
        <div className="flex flex-col gap-1 mt-3 mb-2 text-xs text-gray-600">
          <div>Jobs Completed: <span className="font-bold text-black">{profile.jobsCompleted}</span></div>
          <div>Response Time: <span className="font-bold text-black">{profile.responseTime}</span></div>
          <div>Profile Views: <span className="font-bold text-black">{profile.profileViews}</span></div>
        </div>
        <Button
          variant="outline"
          className="w-full my-2"
          onClick={onEditProfile}
        >
          <Pencil size={16} className="mr-1" /> Edit Profile
        </Button>
      </div>
      {/* Quick Actions */}
      <div className="w-full flex flex-col gap-2 mt-4">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
          <MessageSquare size={16} className="mr-2" /> View Messages
        </Button>
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          <Calendar size={16} className="mr-2" /> Manage Schedule
        </Button>
        <Button className="w-full bg-gray-200 hover:bg-gray-300 text-black">
          <Settings size={16} className="mr-2" /> Account Settings
        </Button>
      </div>
    </div>
  );
}

//Developed by Mr N~G~K

import React from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Join Our Network",
    desc: "Create your professional profile",
    icon: <span className="text-green-600 text-7xl font-bold">1</span>,
  },
  {
    title: "Receive Jobs",
    desc: "Get requests from local customers",
    icon: <span className="text-green-600 text-7xl font-bold">2</span>,
  },
  {
    title: "Grow Your Business",
    desc: "Get paid and build your reputation",
    icon: <span className="text-green-600 text-7xl font-bold">3</span>,
  },
];

export default function HowItWorksPro() {
  const navigate = useNavigate();

  return (
    <section className="py-section bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-dark font-bold text-center mb-8">
          How It Works for Skilled Professionals
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center px-4">
              <div className="mx-auto mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-base text-dark">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/service-provider-registration")}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200"
          >
            Register Your Services
          </button>
        </div>
      </div>
    </section>
  );
}

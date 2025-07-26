<<<<<<< HEAD
//Developed by Mr N~G~K

import React from "react";
import { useNavigate } from "react-router-dom";
=======
import React from "react";
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be

const steps = [
  {
    title: "Join Our Network",
    desc: "Create your professional profile",
<<<<<<< HEAD
    icon: <span className="text-green-600 text-7xl font-bold">1</span>,
=======
    icon: (<span className="text-green-600 text-5xl font-bold">1</span>),
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
  },
  {
    title: "Receive Jobs",
    desc: "Get requests from local customers",
<<<<<<< HEAD
    icon: <span className="text-green-600 text-7xl font-bold">2</span>,
=======
    icon: (<span className="text-green-600 text-5xl font-bold">2</span>),
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
  },
  {
    title: "Grow Your Business",
    desc: "Get paid and build your reputation",
<<<<<<< HEAD
    icon: <span className="text-green-600 text-7xl font-bold">3</span>,
=======
    icon: (<span className="text-green-600 text-5xl font-bold">3</span>),
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
  },
];

export default function HowItWorksPro() {
<<<<<<< HEAD
  const navigate = useNavigate();

=======
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
  return (
    <section className="py-section bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-dark font-bold text-center mb-8">
<<<<<<< HEAD
          How It Works for Skilled Professionals
=======
          How It Works for Pros
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center px-4">
<<<<<<< HEAD
              <div className="mx-auto mb-4">{step.icon}</div>
=======
              <div className="mx-auto mb-4">
                {step.icon}
              </div>
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
              <h3 className="text-lg font-semibold text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-base text-dark">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
<<<<<<< HEAD
          <button
            onClick={() => navigate("/service-provider-registration")}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200"
          >
            Register Your Services
=======
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
            Register Your Profile
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
          </button>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be

<<<<<<< HEAD
//Developed by Mr N~G~K

import React from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Find the Service",
    desc: "Browse and pick exactly what you need.",
  },
  {
    title: "Search for a Professional",
    desc: "Choose a qualified local expert to help you.",
  },
  {
    title: "Get Work Done",
    desc: "Sit back while the job gets handled properly.",
=======
import React from "react";

const steps = [
  {
    title: "Search Services",
    //desc: "Find what you need in seconds",
  },
  {
    title: "Book a Pro",
   // desc: "Select a time that works for you",
  },
  {
    title: "Get It Done",
   // desc: "Relax while experts handle it",
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
  },
];

export default function HowItWorksUser() {
<<<<<<< HEAD
  const navigate = useNavigate();

  return (
    <section className="py-section bg-white">
=======
  return (
    //<section className="py-section">
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-dark font-bold text-center mb-8">
          How It Works for You
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step.title} className="text-center px-4">
              <div className="mx-auto mb-4 text-7xl font-bold text-primary">
                {idx + 1}
              </div>
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
            onClick={() => navigate("/user-registration")}
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
=======
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
            Get Started Today
          </button>
        </div>

      </div>
   // </section>
  );
}
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be

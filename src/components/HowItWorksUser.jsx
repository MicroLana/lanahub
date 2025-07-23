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
  },
];

export default function HowItWorksUser() {
  return (
    //<section className="py-section">
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
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
            Get Started Today
          </button>
        </div>

      </div>
   // </section>
  );
}
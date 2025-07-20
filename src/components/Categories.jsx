import React from "react";

const services = [
  { title: "Electrical Work", image: "/images/electrical.jpg" },
  { title: "Plumbing", image: "/images/plumbing.jpg" },
  { title: "Housekeeping", image: "/images/housekeeping.jpg" },
  { title: "Internet & Satellite", image: "/images/internet.jpg" },
  { title: "Appliance Installation", image: "/images/appliances.jpg" },
  { title: "Gardening", image: "/images/gardening.jpg" },
  { title: "Refuse Collection", image: "/images/refuse.jpg" },
  { title: "Mechanic Services", image: "/images/mechanic.jpg" },
  { title: "Solar Installations", image: "/images/solar.jpg" }
];

export default function Categories() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Available Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:shadow-md transition text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
            />
            <h3 className="text-green-600 font-bold text-md">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
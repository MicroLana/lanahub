import React from "react";
export default function ServicesGrid() {
  return (
    <div className="p-8">
      {/* Home Improvements */}
      <h2 className="text-2xl font-semibold mb-4">Home Improvements</h2>
      <p className="mb-4 text-gray-600">Transform Your Space — Connect with Trusted Pros & Get Free Quotes for Your Next Home Project Today!".</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <ServiceCard title="Bathroom Remodeling" image="/images/bathroom.jpg" />
        <ServiceCard title="Kitchen Remodeling" image="/images/kitchen.jpg" />
        <ServiceCard title="Major Renovations" image="/images/renovation.jpg" />
        <ServiceCard title="Pet Grooming" image="/images/petgrooming.jpg" />
      </div>

      {/* Motor Vehicle Services */}
      <h2 className="text-2xl font-semibold mb-4">Motor Vehicles Services</h2>
      <p className="mb-4 text-gray-600">"Car Trouble? Get Fast, Reliable Help from Trusted Mobile Mechanics Near You.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ServiceCard title="Engine Diagnostics" image="/images/engine.jpg" />
        <ServiceCard title="Vehicle Service" image="/images/oil.jpg" />
        <ServiceCard title="Car Towing" image="/images/cartowing.jpg" />
        <ServiceCard title="Home Car Wash" image="/images/carwash.jpg" />
      </div>
    </div>
  );
}

function ServiceCard({ title, image }) {
  return (
    <div className="shadow hover:shadow-lg transition rounded overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-2 text-center font-medium">{title}</div>
    </div>
  );
}
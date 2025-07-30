// src/components/PartnersSection.jsx
// src/components/PartnersSection.jsx
import React from "react";

const partners = [
  "/images/partners/biriyard.png",
  "/images/partners/chrisandgeo.png",
  "/images/partners/tcz.png",
    "/images/partners/ecoguru.png",
  "/images/partners/mytepee.png",
  "/images/partners/futuretech.png",
  "/images/partners/buildient.png",
  "/images/partners/electrosales.png",
  "/images/partners/halstards.png",
  "/images/partners/union.png",
  "/images/partners/miketechmotors.png",
  "/images/partners/solacity.png",
   "/images/partners/ngk.png",
    

];

export default function PartnersSection() {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-dark font-bold text-center mb-8">
          Our Trusted Partners
        </h2>
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center">
          {partners.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={"Partner " + (i + 1)}
              className="mx-auto max-h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
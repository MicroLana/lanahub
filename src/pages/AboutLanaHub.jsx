import React from 'react';
import Footer from '../components/Footer.jsx';

export default function AboutLanaHub() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 pt-0 pb-12 lg:pt-2 lg:pb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          About LanaHub
        </h1>

        {/* Vision, Mission, Values & Disclaimer Grid */}
        <section id="vision" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h2 id="vision" className="text-2xl font-semibold text-gray-900 mb-2">
              Vision
            </h2>
            <p className="text-gray-700">
              To be the leading on‑demand home services platform in Africa.
            </p>
          </div>

          <div>
            <h2 id="mission" className="text-2xl font-semibold text-gray-900 mb-2">
              Mission
            </h2>
            <p className="text-gray-700">
              Empower homeowners and professionals through seamless, transparent connections.
            </p>
          </div>

          <div>
            <h2 id="values" className="text-2xl font-semibold text-gray-900 mb-2">
              Values
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Integrity</li>
              <li>Quality</li>
              <li>Reliability</li>
              <li>Innovation</li>
            </ul>
          </div>

          <div>
            <h2 id="disclaimer" className="text-2xl font-semibold text-gray-900 mb-2">
              Disclaimer
            </h2>
            <p className="text-gray-700">
              All service providers are independent professionals vetted by LanaHub.
            </p>
          </div>
        </section>

        {/* Core Messaging */}
        <section>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            LanaHub isn’t just another service‑booking app—it’s a catalyst for your home’s digital transformation. We’ve built a pioneering, end‑to‑end marketplace that seamlessly connects you with a curated network of local professionals—electricians, plumbers, mechanics, cleaners, gardeners, painters, personal trainers, solar installers, pet groomers and more—so you can stop chasing quotes and start enjoying results.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Experience the power of AI‑driven discovery and robust, multi‑layered credential verification. Our proprietary smart‑matching engine analyzes your custom job request, factors in your budget, and suggests the three best pre‑screened experts—each bearing a Verified, Gold, Silver or Registered badge based on rigorous background checks, performance history and real‑time sentiment data. Instant, location‑based search meets enterprise‑grade security: sign up with one‑click Google or biometric authentication, then post your job and watch the bids roll in.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Behind the scenes, our advanced AI continuously ingests customer feedback, generates dynamic performance insights and triggers personalized post‑service surveys that drive measurable, sentiment‑based improvements. Every review a professional receives refines their scorecard, ensuring the LanaHub ecosystem delivers ever‑higher quality as we scale.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            For our pros, we’ve reimagined the business model. An affordable subscription unlocks exclusive partner perks—discounted tools, materials and co‑marketing opportunities—that empower service providers to grow their client base and delight customers with consistent, top‑tier performance. Through real‑time analytics dashboards, they can benchmark against peers, optimize pricing strategies and transform feedback into actionable skills development.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            LanaHub is more than convenience—it’s a transformational digital experience that elevates home maintenance to an art form. Whether you’re a homeowner, renter or busy professional, our platform gives you the confidence to delegate with ease, improve your living space and embrace a future where trusted local expertise is only a tap away. Join the digital revolution—post your next job on LanaHub and watch your world transform.
          </p>

          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 mb-8">
            “Connecting you with vetted electricians, motor mechanics, plumbers, cleaners, gardeners, painters, personal trainers, fitness coaches, cell phone technicians, house managers, pet groomers, solar installers, movers and many more.”
          </blockquote>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-12">
          <h2 id="contact" className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-center">
            Have questions or need further assistance? Reach out to our support team at{' '}
            <a href="mailto:support@lanahub.com" className="text-green-600 hover:underline">
              support@lanahub.com
            </a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

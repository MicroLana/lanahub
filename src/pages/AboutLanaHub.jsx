import React from 'react';
import Footer from '../components/Footer.jsx';

export default function AboutLanaHub() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gray-50">
      {/* Top Banner */}
      <div className="bg-green-600 text-white py-8 rounded-3xl mx-4 md:mx-8 lg:mx-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">About Lanahub</h1>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 pt-8 pb-12">
        {/* Vision, Mission, Values Stack */}
        <section id="vision-mission-values" className="grid gap-6 grid-cols-1 mb-12 justify-items-center text-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2 hover:text-green-500 transition-colors">
              Vision
            </h2>
            <p className="text-gray-700">
              To be Africa’s premier on‑demand services platform—empowering every community with trusted local expertise, beyond just home services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2 hover:text-green-500 transition-colors">
              Mission
            </h2>
            <p className="text-gray-700">
              To empower homeowners and professionals with seamless, transparent connections that spark confidence and drive excellence.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2 hover:text-green-500 transition-colors">
              Values
            </h2>
            <p className="text-gray-700">
              Integrity, Quality, Reliability, Innovation.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 hover:text-green-500 transition-colors">
            Our Story
          </h1>
          <div className="prose prose-lg mx-auto text-gray-700 text-justify">
            <p>
              It all began with a simple but persistent challenge: keeping track of a sprawling contact list of tradespeople who often found themselves overlooked, and struggling to source reliable help from afar. Frustrated by endless calls, missed connections and unfulfilled promises, we envisioned a solution that would redefine the way homeowners and professionals connect with local experts. That vision grew into LanaHub.
            </p>
            <p>
              From day one, we set out to build more than just another service‑booking app. We dreamed of a truly end‑to‑end marketplace that brings the entire process online—from discovery and vetting through to payment and feedback. By harnessing the power of artificial intelligence and thoughtful design, LanaHub now seamlessly links you to a handpicked network of electricians, plumbers, mechanics, cleaners, gardeners, painters, trainers, solar installers, pet groomers and so many more—without the usual hassle of chasing quotes or wondering if you can trust the person showing up at your door.
            </p>
            <p>
              Our proprietary smart‑matching engine lies at the heart of LanaHub. When you post a job, our system reads your requirements, considers your budget and instantly delivers three top‑ranked experts. Each comes with a badge—Verified, Gold, Silver or Registered—earned through rigorous background checks, performance histories and real‑time sentiment analysis. One‑click Google sign‑in or biometric authentication means you’re secure from the start, so you can post your job with confidence and watch the bids roll in.
            </p>
            <p>
              But our story doesn’t end there. Behind the scenes, our AI continuously ingests customer feedback and performance data to generate dynamic insights. Every post‑service survey and review refines each professional’s scorecard, propelling a cycle of improvement that keeps quality rising as we grow. This feedback loop ensures that every future job benefits from the lessons learned in the last one.
            </p>
            <p>
              We didn’t forget the tradespeople themselves. LanaHub reimagines their business model with an affordable subscription that unlocks partner perks—discounted tools, materials and shared marketing opportunities. Real‑time analytics dashboards let pros benchmark against peers, fine‑tune their pricing and convert feedback into personalized skills development. It’s a win‑win, empowering service providers to deliver consistent, top‑tier performance while expanding their client base.
            </p>
            <p>
              Today, LanaHub stands for more than just convenience. It’s a transformational digital experience that elevates home maintenance and professional services to an art form. Whether you’re a homeowner, renter or busy professional, our platform gives you the freedom to delegate with ease, enhance your living space and embrace a future where trusted local expertise is only a tap away. Welcome to the LanaHub revolution—post your next job and watch your world transform.
            </p>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section id="disclaimer" className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2 hover:text-green-500 transition-colors">
            Disclaimer
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 text-justify">
            <p>
              All service providers featured on LanaHub operate as independent professionals. While we perform thorough vetting—including identity verification, background checks, and performance reviews—to help ensure quality and reliability, LanaHub acts solely as a facilitator. We do not employ, recommend, supervise, or control the work of any tradesperson, nor guarantee the outcome of any service. Any agreements, contracts, payments and disputes are strictly between you and the chosen professional.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 hover:text-green-500 transition-colors">
            Get in Touch
          </h2>
          <p className="text-gray-700">
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

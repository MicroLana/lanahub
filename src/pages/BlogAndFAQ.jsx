//Developed by Mr N~G~K
import React from "react"

export default function BlogAndFAQ() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-10 md:px-10">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Blog Section */}
        <section id="blog" className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-green-700 mb-4">
            🛠️ Transforming Home Services with Lanahub Platform
          </h1>

          <p className="text-sm text-gray-500 mb-4">
            📅 Published: July 2025 &nbsp; • &nbsp; <strong>Author:</strong> Next-Gen Knowledge with NGK
          </p>

          <h2 className="text-xl font-semibold mb-2">💡 Introduction</h2>
          <p className="text-gray-700 mb-4">
            In a fast-moving world where time is money and convenience is king, finding trusted service providers for everyday needs like plumbing, electrical work, housekeeping, and repairs shouldn't feel like a struggle.
          </p>
          <p className="text-gray-700 mb-4">
            Yet for many Zimbabweans, it still is.
          </p>
          <p className="text-gray-700 mb-4">
            That’s why we created <strong>Lanahub</strong> — a smart, secure, and simple platform that connects everyday people with verified service providers, all from the comfort of your phone or computer.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">🛠️ Why Was Lanahub Created?</h2>
          <p className="text-gray-700 mb-4">We noticed a common frustration:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>You need a plumber urgently, but you don’t know who to trust.</li>
            <li>You find a number online, but they don’t answer.</li>
            <li>You ask friends, but get different opinions.</li>
            <li>Worse still, someone comes and does a poor job — and disappears with your money.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Lanahub was built to fix this.
          </p>
          <p className="text-gray-700 mb-4">
            We’ve digitized the informal service economy to make it <strong>accessible, transparent, and fair</strong> — for both customers and service providers.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">🔍 What Makes Lanahub Different?</h2>
          <ul className="list-decimal pl-6 text-gray-700 mb-4 space-y-1">
            <li><strong>Verified Professionals</strong><br/>Every service provider is vetted before they appear on the platform. This includes ID verification and proof of trade experience.</li>
            <li><strong>Real Reviews</strong><br/>No more guessing. Read real reviews from other customers to help you make informed decisions.</li>
            <li><strong>Secure Bookings</strong><br/>View profiles, chat with professionals, book securely — and track your bookings from your dashboard.</li>
            <li><strong>Simple Search</strong><br/>Need a plumber in Greendale? A gardener in Bulawayo? Just type, filter, and find.</li>
            <li><strong>Fair Pricing</strong><br/>See provider rates upfront — no surprises.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">🧑‍🔧 Who Can Use Lanahub?</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Homeowners and tenants looking for trusted, on-demand services</li>
            <li>Small businesses that need recurring support (cleaning, maintenance, etc.)</li>
            <li>Service providers who want more visibility, income, and professionalism</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">🌍 Where Is Lanahub Available?</h2>
          <p className="text-gray-700 mb-2">Lanahub currently serves customers in:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Harare</li>
            <li>Bulawayo</li>
            <li>Mutare</li>
            <li>Gweru</li>
            <li>And other cities across Zimbabwe</li>
          </ul>
          <p className="text-gray-700 mb-4">We’re expanding every month — so keep checking for updates!</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">📈 How Lanahub is Empowering Professionals</h2>
          <p className="text-gray-700 mb-4">We don’t just bring service providers customers — we empower them with tools:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Digital profiles and portfolios</li>
            <li>Job history and client ratings</li>
            <li>Support with customer communication</li>
            <li>Potential to grow their own business</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">📲 What’s Next?</h2>
          <p className="text-gray-700 mb-2">In the coming months, we’re:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Launching a mobile app</li>
            <li>Adding mobile payment integrations</li>
            <li>Introducing loyalty rewards</li>
            <li>Expanding to more service categories and cities</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">💬 Final Thoughts</h2>
          <p className="text-gray-700 mb-4">
            At Lanahub, we believe <strong>trust, convenience, and empowerment</strong> are the foundation of a better local economy. Whether you’re a customer or a service provider, Lanahub is your digital partner for getting the job done right.
          </p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-green-700 mb-6">Frequently Asked Questions</h1>

          <div className="space-y-5">
            {[
              ["What is Lanahub?", "Lanahub is an online marketplace connecting Zimbabweans with trusted service providers like plumbers, electricians, and more."],
              ["How do I book a service?", "Browse or search for a service, view provider details, and click 'Book Now'. You’ll receive a confirmation instantly."],
              ["Is it free to use Lanahub?", "Yes, using the platform is free. You only pay the provider for the service they deliver."],
              ["Are the service providers verified?", "Yes, each provider is manually verified before being listed. We check ID, experience, and customer feedback."],
              ["Can I leave reviews?", "Yes! After a service is complete, you’ll get a prompt to leave a review and rating."],
              ["How do I become a provider?", "Go to 'Register', select 'Service Provider', and fill out your details. Once verified, your services will be listed."],
              ["What services are available?", "Plumbing, electrical work, painting, appliance repair, borehole drilling, internet setup (including Starlink), and more."],
              ["Do I need an account?", "Yes, to make bookings, track history, or contact providers, you must register first."],
              ["How do I reset my password?", "Click 'Forgot Password' on the login page and follow the instructions sent to your email."],
              ["How do I delete my account?", "Go to your Dashboard → Settings → Account Security → Delete Account."],
              ["Is my data secure?", "Yes. Lanahub uses modern encryption and doesn’t share your data without permission."],
              ["How do I contact support?", "Use the Contact page or email us at support@lanahub.co.zw."]
            ].map(([question, answer], index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg">{index + 1}. {question}</h3>
                <p className="text-gray-700">{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

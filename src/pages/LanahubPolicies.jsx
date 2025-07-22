// src/pages/LanahubPolicies.jsx
import React from "react";
import Footer from "../components/Footer";

export default function LanahubPolicies() {
  const sections = [
    {
      id: "cancellation",
      title: "1. Cancellation Policy",
      content: [
        "User Cancellations: You may cancel any booked service up to 24 hours before the scheduled start time without charge. Cancellations made less than 24 hours in advance will incur a fee equal to 50 % of the service cost.",
        "Provider Cancellations: If a service provider cancels within 12 hours of your appointment, you will be offered an immediate rebooking with a comparable provider at no extra cost or a full refund.",
        "Refunds: Refunds are processed within 7 business days back to your original payment method.",
      ],
    },
    {
      id: "guarantee",
      title: "2. Guarantee",
      content: [
        "All services booked through LanaHub come with our Satisfaction Guarantee. If you’re not satisfied, contact us within 48 hours and we will either rectify the issue at no extra charge or issue a full refund.",
        "This guarantee covers workmanship and materials supplied by the provider; it does not apply to damage caused by misuse or to third‑party equipment.",
      ],
    },
    {
      id: "disclaimer",
      title: "3. Disclaimer",
      content: [
        "While we strive to ensure all provider profiles and service descriptions are accurate, LanaHub does not warrant the completeness or reliability of any content.",
        "To the maximum extent permitted by Zimbabwean law, LanaHub and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from use of our platform, including loss of profits, data, or goodwill.",
      ],
    },
    {
      id: "privacy",
      title: "4. Privacy Statement (Privacy Policy)",
      content: [
        "We collect, store, and process personal information only for specified, lawful purposes in accordance with the Zimbabwe Data Protection Act (Chapter 10:31) and the Electronic Communications and Transactions Act (Chapter 11:28).",
        "Categories of Personal Data: name, contact details, location, identity documents, payment information, and feedback.",
        "You may withdraw consent at any time via your account settings or by contacting privacy@lanahub.co.zw. Personal data is retained only as long as necessary. If data is transferred outside Zimbabwe, we ensure comparable protections.",
      ],
    },
    {
      id: "terms",
      title: "5. Terms & Conditions (Terms of Service)",
      content: [
        "You must register with accurate information and keep your credentials secure. You are responsible for all activity under your account.",
        "Service providers warrant they hold required licenses, insurance, and comply with all local laws and regulations.",
        "All fees are displayed before booking. LanaHub charges a service fee; providers set their own rates. Payment is due upon completion and processed by our payment partner.",
        "All content on LanaHub is our property or used under license. You may not reproduce or distribute without permission.",
        "We reserve the right to suspend or terminate accounts for breach of these Terms or for fraudulent, abusive, or illegal activity.",
      ],
    },
    {
      id: "nosell",
      title: "6. Do Not Sell or Share My Personal Information",
      content: [
        "LanaHub does not sell or rent your personal information to third parties.",
        "We share only the minimum data needed to facilitate service delivery: contact details and service requirements with the professionals you engage.",
        "If you wish to further restrict sharing, please contact privacy@lanahub.co.zw and we will accommodate your request.",
      ],
    },
    {
      id: "contact",
      title: "7. Contact Us",
      content: [
        "Email: admin@lanahub.co.zw",
        "Phone: +263 784 088 088",
        "Website: www.lanahub.co.zw",
      ],
    },
  ];

  return (
    <>
      {/* Top Banner full width */}
      <div className="w-full bg-green-600 text-white py-8 rounded-3xl">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-justify">
          <h1 className="text-4xl font-bold text-center mb-4">
            Lanahub Terms, Privacy & Guarantees
          </h1>
          <p>
            Book vetted local professionals in seconds with Lanahub where ease meets security. We protect your data with end-to-end encryption and comply fully with Zimbabwe’s Data Protection Act. Your information is never shared without your explicit consent: you choose which details to reveal when connecting with electricians, plumbers, housekeepers, or mechanics. Our rigorous internal protocols keep your data private and safe. Enjoy seamless service booking and peace of mind with data control.
          </p>
        </div>
      </div>

      <main className="max-w-screen-lg mx-auto px-4 py-8 space-y-12">
        {sections.map(({ id, title, content }) => (
          <section key={id} id={id} className="space-y-4">
            <h2 className="text-2xl font-semibold hover:text-green-500 transition-colors cursor-pointer">
              {title}
            </h2>
            <div className="text-justify space-y-2">
              {content.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}

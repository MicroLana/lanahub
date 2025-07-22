// src/pages/VerificationProcess.jsx
import React from "react";
import Footer from "../components/Footer";

export default function VerificationProcess() {
  const sections = [
    {
      id: "reach",
      title: "Our Reach & Ratings",
      content: [
        "Across Zimbabwe, from urban centers to rural communities, our network of local professionals has completed thousands of jobs, earning an average rating of 4.5 out of 5 stars.",
        "As our community grows, we remain committed to maintaining the highest safety and security standards for every client and homeowner.",
      ],
    },
    {
      id: "pipeline",
      title: "Multi-layered Vetting Pipeline",
      content: [
        "KYC & Trade Qualification: Providers submit their national ID or passport plus proof of trade certifications. We verify their professional credentials and local service experience before approval.",
        "Verified Status & Tier Levels: Pros who complete a 100% profile—including ID, police clearance, reference letters, photo, and qualifications—earn our Verified badge and advance through tiered status levels.",
        "Identity Authentication: Partnered digital ID services use advanced computer-vision checks to confirm each provider’s identity documents, ensuring they are exactly who they claim to be.",
        "Comprehensive Background Checks: Accredited agencies scour national and regional records for any disqualifying offenses over the past seven years, safeguarding your home’s security.",
        "Corporate Entity Validation: Registered businesses submit their Zimbabwean company registration documents. We verify corporate status and conduct background checks on owners for an extra layer of protection.",
        "Ongoing Quality Assurance: After onboarding, we continuously monitor performance and customer feedback. Providers who fall short of our standards receive retraining or are removed from the platform—keeping your experience consistently safe and reliable.",
      ],
    },
    {
      id: "accountability",
      title: "Accountability & Quality Assurance",
      content: [
        "With this rigorous, multi-layered vetting process in place, every Lanahub provider is credentialed and background-checked, and held accountable to deliver exactly what they promise—ensuring your home projects are handled safely, professionally, and with your best interests at heart.",
      ],
    },
    {
      id: "support",
      title: "Your 24/7 Service Partner",
      content: [
        "Your satisfaction is our top priority. Even with rigorous vetting and continuous performance checks, we know unexpected issues can happen.",
        "Our dedicated support team is on call 24/7, ready to answer questions, help reschedule bookings, or resolve any concerns you may have. Reach us by phone, email, or live chat at any time, and we’ll work swiftly to make things right so you can trust Lanahub for all your home service needs.",
      ],
    },
    {
      id: "confidence",
      title: "Book with Total Confidence",
      content: [
        "Every provider on Lanahub is background-checked and rated. Choose your slot, and let us take care of the rest.",
      ],
    },
  ];

  return (
    <>
      {/* Full-width green banner */}
      <div className="w-full bg-green-600 text-white py-8 rounded-3xl">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-justify">
          <h1 className="text-4xl font-bold text-center mb-4">
            Verification Process
          </h1>
          <p>
            At Lanahub, we safeguard every booking with a robust verification process that starts before a provider ever accepts a job. Our multi-layered checks ensure you receive trusted, qualified expertise for your home service needs.
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

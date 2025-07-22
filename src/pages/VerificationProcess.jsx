// src/pages/Test.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Test() {
  const sections = [
    {
      id: "purpose",
      title: "1 Purpose & Scope",
      content: [
        "Lanahub is a digital marketplace that connects customers with vetted tradespersons — electricians, plumbers, mechanics, cleaners and more — and showcases select retail and SME partners. Lanahub does not process payments; billing occurs directly between clients and providers. We present credentials, enable booking confirmations via unique inspection codes, and moderate postservice reviews to block profanity, violence or vulgarity."
      ],
    },
    {
      id: "reach",
      title: "2 Our Reach & Ratings",
      content: [
        "Across Zimbabwe, from urban centres to rural communities, our network of local professionals has completed thousands of jobs, earning an average rating of 4.5 out of 5 stars. As our community grows, we remain committed to maintaining the highest safety and security standards for every client and homeowner."
      ],
    },
    {
      id: "pipeline",
      title: "3 Multilayered Vetting Pipeline",
      content: [
        "Before any provider goes live, they progress through:"
      ],
      list: [
        "KYC & Trade Qualification: Providers submit National ID or passport plus proof of trade certifications; we verify credentials and local service experience before approval.",
        "Verified Status & Tier Levels: 100% complete profiles — including ID, police clearance, reference letters, photo and qualifications — earn our Verified badge and advance through tiered status levels.",
        "Identity Authentication: Partnered digital ID services use advanced computer-vision checks to confirm identity documents.",
        "Comprehensive Background Checks: Accredited agencies scour national and regional records for any disqualifying offences over the past seven years, safeguarding your home’s security.",
        "Corporate Entity Validation: Registered businesses submit Zimbabwean company registration documents; we verify corporate status and conduct background checks on owners for extra protection.",
        "Ongoing Quality Assurance: After onboarding, we continuously monitor performance and customer feedback. Providers who fall short receive retraining or are removed, keeping your experience safe and reliable."
      ],
    },
    {
      id: "individual-screening",
      title: "4 Individual Professional Screening",
      content: [
        "At onboarding, Lanahub requires every tradesperson to submit the following:"
      ],
      subsections: [
        {
          subtitle: "Application Requirements",
          list: [
            "Full legal name, contact number, city and address",
            "Government-issued ID (national ID or passport)",
            "Proof of relevant trade certifications or licenses",
            "At least two professional references or work samples",
            "Police clearance certificate valid within the last six months"
          ],
        },
        {
          subtitle: "Identity Verification",
          list: [
            "Live selfie with AI-driven liveness check",
            "Accredited document-authenticity scan"
          ],
        },
        {
          subtitle: "Background Checks",
          list: [
            "Police clearance valid within six months",
            "Reference letters from company heads or equivalent"
          ],
        },
        {
          subtitle: "On-Site Verification",
          list: [
            "All professionals must carry their original national ID when attending jobs"
          ],
        }
      ]
    },
    {
      id: "company-screening",
      title: "5 Company Provider Screening",
      content: [
        "Some providers on Lanahub are SMEs, franchisees, dealers or independent contractors affiliated with larger firms. These business-scale providers typically handle handyman tasks and often maintain their own in-house screening. Lanahub requires the following:"
      ],
      subsections: [
        {
          subtitle: "Corporate Documentation",
          list: [
            "Company registration and incorporation certificates",
            "Proof of business address and tax registration (e.g. tax clearance certificate)",
            "Articles of association or equivalent governing documents",
            "Company website and physical address"
          ]
        },
        {
          subtitle: "Transitional Access",
          list: [
            "Up to one booking allowed within 24 hours of application",
            "Full screening must conclude within 48 hours to retain active status"
          ]
        }
      ]
    },
    {
      id: "monitoring",
      title: "6 Ongoing Monitoring & Reviews",
      subsections: [
        {
          subtitle: "Periodic Reverification",
          list: [
            "Annual rescreening to maintain compliance",
            "Providers must report changes (address, license, ownership) within seven days"
          ]
        },
        {
          subtitle: "Incident-Driven Checks",
          list: [
            "Immediate review triggered by any customer safety complaint",
            "Temporary suspension for serious allegations (fraud, violence, etc.)"
          ]
        },
        {
          subtitle: "Accountability & Quality Assurance",
          content: "With this rigorous, multilayered pipeline, every Lanahub provider is credentialed, background-checked and held accountable. Providers who fail to deliver on their promises face retraining or removal, ensuring home projects are handled safely and professionally."
        }
      ]
    },
    {
      id: "compliance",
      title: "7 Compliance & Activation",
      subsections: [
        {
          subtitle: "Review Process",
          list: [
            "Compliance team reviews all screening documentation",
            "Clear results → full activation",
            "Adverse or incomplete findings → manual follow-up or disqualification"
          ]
        },
        {
          subtitle: "Notifications",
          list: [
            "Providers receive requests for missing documents or clarifications",
            "Final activation or rejection communicated within 72 hours"
          ]
        }
      ]
    },
    {
      id: "moderation",
      title: "8 Reviews Moderation",
      list: [
        "Customers submit feedback using unique booking codes",
        "Automated filters and human moderators block profanity, violence or vulgarity",
        "Validated reviews feed our AI analytics for ongoing performance insights"
      ]
    },
    {
      id: "support",
      title: "9 Your 24/7 Service Partner",
      content: [
        "Your satisfaction is our top priority. Even with thorough vetting and continuous performance checks, unexpected issues can arise. Our dedicated support team is on call 24/7—by phone, email or live chat—to answer questions, help reschedule bookings or resolve concerns swiftly so you can trust Lanahub for all your home service needs."
      ]
    },
    {
      id: "confidence",
      title: "10 Book with Total Confidence",
      content: [
        "Every provider on Lanahub is background-checked and rated. Choose your slot, and let us handle the rest."
      ]
    },
    {
      id: "appeals",
      title: "11 Limitations & Appeals",
      subsections: [
        {
          subtitle: "Limitations",
          list: [
            "Public records may be incomplete or delayed",
            "Lanahub relies on third-party data for accuracy"
          ]
        },
        {
          subtitle: "Appeals",
          list: [
            "Rejected applicants may appeal with supporting evidence at compliance@lanahub.co.zw",
            "Appeals resolved within 21 days"
          ]
        }
      ]
    },
    {
      id: "updates",
      title: "12 Policy Updates",
      content: [
        "This policy is reviewed at least annually or as required by legal or operational changes. Revisions will be published with an updated \"Last updated\" date."
      ]
    }
  ];

  return (
    <>
      {/* Full-width green banner */}
      <div className="w-full bg-green-600 text-white py-8 rounded-3xl">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Safety & Screening Policy</h1>
          <p className="text-center max-w-2xl mx-auto">
            At Lanahub, we safeguard every booking with a robust verification process that starts before a provider ever accepts a job. Our multi-layered checks ensure you receive trusted, qualified expertise for your home service needs.
          </p>
        </div>
      </div>

      <main className="max-w-screen-lg mx-auto px-4 py-8 space-y-12">
        {sections.map(section => (
          <section key={section.id} id={section.id} className="space-y-4">
            <h2 className="text-2xl font-semibold text-left hover:text-green-500 transition-colors">
              {section.title}
            </h2>
            {section.content && section.content.map((line, idx) => (
              <p key={idx} className="text-justify">{line}</p>
            ))}
            {section.list && (
              <ul className="list-none space-y-2">
                {section.list.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                    <p className="text-justify">{item}</p>
                  </li>
                ))}
              </ul>
            )}
            {section.subsections && section.subsections.map((sub, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xl font-medium text-left">{sub.subtitle}</h3>
                {sub.content && <p className="text-justify">{sub.content}</p>}
                {sub.list && (
                  <ul className="list-none space-y-2">
                    {sub.list.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                        <p className="text-justify">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

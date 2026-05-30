import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Clock, Shield, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Schedule your free legal consultation with Sterling Law Group. No obligation, no charge. Book online or call " +
    SITE_CONFIG.phone,
};

const whatToExpect = [
  {
    step: "01",
    title: "30–60 Minute Session",
    description:
      "A focused conversation with an experienced attorney — not a paralegal or intake coordinator.",
  },
  {
    step: "02",
    title: "Honest Assessment",
    description:
      "We'll give you a straightforward evaluation of your situation, your options, and likely outcomes.",
  },
  {
    step: "03",
    title: "Clear Next Steps",
    description:
      "You'll leave with a clear picture of what to do next, whether that's hiring us or handling it yourself.",
  },
  {
    step: "04",
    title: "Zero Obligation",
    description:
      "No pressure, no commitment required. The consultation is genuinely free — no credit card, no invoice.",
  },
];

const checklist = [
  "Any relevant documents (contracts, police reports, medical records, correspondence)",
  "A timeline of key events",
  "Names and contact info for any parties involved",
  "Your insurance policy details (for injury cases)",
  "Any prior legal correspondence",
  "Questions you want answered",
];

export default function FreeConsultationPage() {
  const calendlyUrl = SITE_CONFIG.calendlyUrl;

  return (
    <div className="pt-[112px]">
      {/* Header */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Get Started
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Book Your Free Consultation
            </h1>
            <p className="text-navy-100/75 text-lg">
              Select a time that works for you. Consultations are available by
              phone, video, or in-person at our office.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Calendly embed */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">
                Select a Date &amp; Time
              </h2>

              {/* Calendly inline widget */}
              {calendlyUrl &&
              calendlyUrl !== "https://calendly.com/your-link/free-consultation" ? (
                <div
                  className="calendly-inline-widget border border-navy-100 rounded-lg overflow-hidden"
                  data-url={calendlyUrl}
                  style={{ minWidth: "320px", height: "700px" }}
                />
              ) : (
                /* Placeholder when Calendly URL not configured */
                <div className="border-2 border-dashed border-navy-200 rounded-lg p-12 text-center bg-navy-50">
                  <Calendar className="w-12 h-12 text-navy-800/30 mx-auto mb-4" />
                  <h3 className="text-navy-900 font-display font-bold text-xl mb-2">
                    Calendly Booking Widget
                  </h3>
                  <p className="text-navy-800/60 text-sm mb-5 max-w-sm mx-auto">
                    Set your{" "}
                    <code className="bg-navy-200 px-1 rounded text-navy-800 text-xs">
                      NEXT_PUBLIC_CALENDLY_URL
                    </code>{" "}
                    environment variable to your Calendly scheduling link and
                    your booking calendar will appear here.
                  </p>
                  <p className="text-navy-800/50 text-xs mb-5">
                    Example:{" "}
                    <code className="bg-navy-200 px-1 rounded">
                      https://calendly.com/your-name/free-consultation
                    </code>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Schedule
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 border border-navy-200 text-navy-800 hover:border-navy-400 font-semibold px-6 py-3 rounded transition-colors text-sm"
                    >
                      Send a Message
                    </Link>
                  </div>
                </div>
              )}

              {/* Load Calendly widget script */}
              {calendlyUrl &&
                calendlyUrl !== "https://calendly.com/your-link/free-consultation" && (
                  // eslint-disable-next-line @next/next/no-sync-scripts
                  <script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async
                  />
                )}
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 space-y-8">
              {/* What to expect */}
              <div>
                <h2 className="text-xl font-display font-bold text-navy-900 mb-5">
                  What to Expect
                </h2>
                <div className="space-y-5">
                  {whatToExpect.map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 text-navy-900 font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900 text-sm mb-1">
                          {item.title}
                        </div>
                        <div className="text-navy-800/60 text-sm leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checklist */}
              <div className="bg-navy-50 border border-navy-100 rounded-lg p-6">
                <h3 className="font-display font-bold text-navy-900 text-base mb-4">
                  Helpful to Bring (But Not Required)
                </h3>
                <ul className="space-y-2.5">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span className="text-navy-800/75 text-xs leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call option */}
              <div className="bg-navy-900 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span className="text-gold-400 font-semibold text-sm">
                    Prefer to call?
                  </span>
                </div>
                <p className="text-navy-100/70 text-sm mb-4">
                  Call us directly during office hours and we&rsquo;ll schedule
                  you immediately.
                </p>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="block text-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3 rounded transition-colors text-sm"
                >
                  {SITE_CONFIG.phone}
                </a>
                <div className="flex items-center gap-1.5 mt-3 justify-center">
                  <Clock className="w-3.5 h-3.5 text-navy-100/40" />
                  <span className="text-navy-100/50 text-xs">
                    {SITE_CONFIG.hours}
                  </span>
                </div>
              </div>

              {/* Confidentiality note */}
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <p className="text-navy-800/55 text-xs leading-relaxed">
                  All consultations are strictly confidential. Information you
                  share is protected by attorney-client privilege.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

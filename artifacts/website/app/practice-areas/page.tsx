import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Calendar,
  Car,
  Briefcase,
  Home,
  Heart,
  Gavel,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Sterling Law Group handles personal injury, business law, real estate, family law, employment law, and estate planning. Free consultations available.",
};

const areas = [
  {
    id: "personal-injury",
    icon: Car,
    title: "Personal Injury",
    subtitle: "Fighting for Maximum Compensation",
    description:
      "When you're injured due to someone else's negligence, you deserve full and fair compensation. Our personal injury attorneys have recovered hundreds of millions of dollars for injured clients across New York. We handle every aspect of your claim while you focus on healing.",
    points: [
      "Auto, truck, and motorcycle accidents",
      "Slip and fall / premises liability",
      "Medical malpractice",
      "Wrongful death",
      "Product liability",
      "Workplace injuries",
    ],
    note: "Personal injury cases are handled on a contingency fee basis — you pay nothing unless we win.",
  },
  {
    id: "business-law",
    icon: Briefcase,
    title: "Business & Corporate Law",
    subtitle: "Strategic Legal Counsel for Your Business",
    description:
      "From startups to established enterprises, we provide the legal foundation your business needs to thrive. Our business attorneys understand the commercial landscape and provide practical, results-driven counsel at every stage of your company's growth.",
    points: [
      "Business formation and structuring",
      "Contract drafting and negotiation",
      "Mergers and acquisitions",
      "Commercial litigation",
      "Partnership and shareholder disputes",
      "Regulatory compliance",
    ],
    note: "We serve as outside general counsel for businesses of all sizes.",
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate Law",
    subtitle: "Protecting Your Property Interests",
    description:
      "Real estate transactions are among the most significant financial decisions you'll make. Our real estate attorneys ensure every transaction is handled with precision, protecting your investment and resolving any issues that arise along the way.",
    points: [
      "Residential and commercial transactions",
      "Title review and insurance",
      "Landlord-tenant disputes",
      "Zoning and land use",
      "Construction contracts",
      "Foreclosure defense",
    ],
    note: "We've closed thousands of residential and commercial real estate transactions.",
  },
  {
    id: "family-law",
    icon: Heart,
    title: "Family Law",
    subtitle: "Compassionate Guidance Through Difficult Times",
    description:
      "Family legal matters are among the most emotionally charged situations a person can face. Our family law attorneys combine legal expertise with genuine empathy, guiding you through difficult transitions while protecting your rights and your family's best interests.",
    points: [
      "Divorce and legal separation",
      "Child custody and visitation",
      "Child and spousal support",
      "Adoption",
      "Prenuptial and postnuptial agreements",
      "Domestic violence protection orders",
    ],
    note: "We prioritize resolution and your family's long-term wellbeing.",
  },
  {
    id: "employment",
    icon: Gavel,
    title: "Employment Law",
    subtitle: "Standing Up for Workers' Rights",
    description:
      "Every worker deserves to be treated fairly. Our employment law team aggressively represents employees who have been wronged by their employers, from discrimination and harassment to wage theft and wrongful termination.",
    points: [
      "Wrongful termination",
      "Workplace discrimination (race, gender, age, disability)",
      "Sexual harassment",
      "Wage and hour violations",
      "Retaliation claims",
      "Non-compete and severance negotiations",
    ],
    note: "Most employment cases are handled on contingency. No recovery, no fee.",
  },
  {
    id: "estate",
    icon: FileText,
    title: "Estate Planning",
    subtitle: "Protecting Your Legacy",
    description:
      "Planning for the future is one of the most important gifts you can give your family. Our estate planning attorneys work closely with you to create a comprehensive plan that protects your assets, minimizes taxes, and ensures your wishes are carried out exactly as intended.",
    points: [
      "Wills and living wills",
      "Revocable and irrevocable trusts",
      "Powers of attorney",
      "Healthcare proxies",
      "Probate and estate administration",
      "Business succession planning",
    ],
    note: "Protecting your legacy for generations to come.",
  },
];

export default function PracticeAreasPage() {
  return (
    <div className="pt-[112px]">
      {/* Header */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Expertise
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Practice Areas
            </h1>
            <p className="text-navy-100/75 text-lg">
              Comprehensive legal services across the areas that matter most —
              handled by attorneys with the experience and dedication to deliver
              real results.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {areas.map((area, i) => (
              <div
                key={area.id}
                id={area.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-gold-600 font-medium text-xs uppercase tracking-wider">
                        {area.subtitle}
                      </div>
                      <h2 className="text-2xl font-display font-bold text-navy-900">
                        {area.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-navy-800/70 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div className="bg-gold-50 border border-gold-200 rounded-lg px-5 py-3 mb-6 text-sm text-gold-700 font-medium">
                    {area.note}
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/free-consultation"
                      className="flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      Free Consultation
                    </Link>
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="flex items-center gap-2 text-navy-800 hover:text-gold-600 text-sm font-semibold px-5 py-2.5 rounded border border-navy-200 hover:border-gold-400 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
                <div
                  className={`bg-navy-50 border border-navy-100 rounded-lg p-7 ${
                    i % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <h3 className="text-navy-900 font-semibold text-sm uppercase tracking-wider mb-5">
                    We Handle
                  </h3>
                  <ul className="space-y-3">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-navy-800/80 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-navy-200">
                    <Link
                      href={`/contact?area=${area.id}`}
                      className="flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold text-sm"
                    >
                      Get Help Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Not Sure Which Area Applies to You?
          </h2>
          <p className="text-navy-100/70 mb-8">
            Call or book a free consultation and we&rsquo;ll point you in the
            right direction — no obligation, no charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-consultation"
              className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Free Consultation
            </Link>
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded transition-colors"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

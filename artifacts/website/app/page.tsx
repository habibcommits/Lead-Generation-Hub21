import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Calendar,
  Shield,
  Award,
  Users,
  ChevronRight,
  CheckCircle,
  Star,
  ArrowRight,
  Briefcase,
  Car,
  Home,
  Heart,
  Gavel,
  FileText,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Top-Rated Law Firm | Free Consultation",
  description:
    "Sterling Law Group offers experienced legal representation in personal injury, business law, and more. Get a free consultation today. Call " +
    SITE_CONFIG.phone,
};

const practiceAreas = [
  {
    icon: Car,
    title: "Personal Injury",
    description:
      "Injured in an accident? We fight for maximum compensation for auto accidents, slip and fall, medical malpractice, and wrongful death cases.",
    href: "/practice-areas#personal-injury",
  },
  {
    icon: Briefcase,
    title: "Business & Corporate Law",
    description:
      "From formation and contracts to mergers and disputes, we protect your business at every stage of growth.",
    href: "/practice-areas#business-law",
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description:
      "Residential and commercial transactions, landlord-tenant disputes, title issues, and zoning matters handled with precision.",
    href: "/practice-areas#real-estate",
  },
  {
    icon: Heart,
    title: "Family Law",
    description:
      "Compassionate guidance through divorce, child custody, adoption, and other family matters that affect what you love most.",
    href: "/practice-areas#family-law",
  },
  {
    icon: Gavel,
    title: "Employment Law",
    description:
      "We stand up for workers facing wrongful termination, discrimination, harassment, and wage theft.",
    href: "/practice-areas#employment",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Protect your legacy with expertly drafted wills, trusts, powers of attorney, and probate administration.",
    href: "/practice-areas#estate",
  },
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "$500M+", label: "Recovered for Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5,000+", label: "Cases Won" },
];

const whyUs = [
  {
    icon: Shield,
    title: "No Win, No Fee",
    description:
      "Personal injury clients pay nothing unless we win your case. Zero financial risk to you.",
  },
  {
    icon: Phone,
    title: "24/7 Availability",
    description:
      "Legal emergencies don't follow business hours. We're reachable around the clock.",
  },
  {
    icon: Award,
    title: "Award-Winning Team",
    description:
      "Recognized by Super Lawyers, Best Lawyers in America, and Martindale-Hubbell AV Rated.",
  },
  {
    icon: Users,
    title: "Personalized Attention",
    description:
      "You work directly with a partner attorney, not passed off to junior associates.",
  },
];

const testimonials = [
  {
    name: "Michael R.",
    matter: "Personal Injury",
    rating: 5,
    text: "After my car accident, Sterling Law Group handled everything so I could focus on recovering. They secured a settlement I never thought possible. Truly exceptional team.",
  },
  {
    name: "Sarah T.",
    matter: "Business Law",
    rating: 5,
    text: "I've used Sterling for my company's legal needs for 8 years. They're not just lawyers — they're strategic partners who understand business. Highly recommend.",
  },
  {
    name: "David & Lisa M.",
    matter: "Real Estate",
    rating: 5,
    text: "Our commercial property deal hit a major snag and Sterling resolved it in days. Professional, responsive, and genuinely invested in our outcome.",
  },
];

const faqs = [
  {
    q: "How much does a consultation cost?",
    a: "Initial consultations are completely free. We'll review your situation, explain your options, and give you an honest assessment — all with no obligation and no charge.",
  },
  {
    q: "How long will my case take?",
    a: "Every case is different. Simple matters may resolve in weeks, while complex litigation can take longer. We'll give you a realistic timeline during your consultation and keep you updated throughout.",
  },
  {
    q: "What does 'no win, no fee' mean for personal injury?",
    a: "For personal injury cases, we work on contingency — meaning you pay no legal fees unless we win compensation for you. Our fee comes as a percentage of the recovery, so our interests are aligned with yours.",
  },
  {
    q: "What should I bring to my first meeting?",
    a: "Any relevant documents you have — contracts, insurance policies, police reports, medical records, correspondence, or photos. Don't worry if you don't have everything; we can gather what's needed.",
  },
  {
    q: "Do you handle cases outside New York?",
    a: "Our primary practice is in New York, but we have relationships with top attorneys across the country and can refer or co-counsel on out-of-state matters.",
  },
];

export default function HomePage() {
  return (
    <div className="pt-[112px]">
      {/* Hero */}
      <section className="relative bg-navy-900 min-h-[600px] flex items-center overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-gold-300 text-xs font-medium tracking-wide">
                Award-Winning Legal Representation Since 2004
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Protecting What
              <span className="text-gold-400"> Matters Most</span>
            </h1>
            <p className="text-navy-100/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              When you face a legal challenge, you need attorneys who will fight
              for your rights, protect your interests, and deliver real results.
              Our team has recovered over $500 million for clients just like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-consultation"
                className="flex items-center justify-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-base px-8 py-4 rounded transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </Link>
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {SITE_CONFIG.phone}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-5 mt-8">
              {[
                "No Win, No Fee",
                "Free Consultation",
                "24/7 Availability",
                "20+ Years Experience",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-navy-100/70 text-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-navy-900/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-display font-bold text-navy-900">
                  {stat.value}
                </div>
                <div className="text-navy-800/70 text-sm font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
              Practice Areas
            </h2>
            <p className="text-navy-800/60 text-lg max-w-2xl mx-auto">
              From personal injury to complex business litigation, our experienced
              attorneys provide comprehensive legal services across every major
              practice area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group p-7 border border-navy-100 rounded-lg hover:border-gold-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-50 group-hover:bg-gold-50 flex items-center justify-center mb-4 transition-colors">
                  <area.icon className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
                </div>
                <h3 className="text-navy-900 font-display font-bold text-xl mb-2">
                  {area.title}
                </h3>
                <p className="text-navy-800/60 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center gap-1.5 text-gold-600 font-medium text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 border border-navy-800 text-navy-800 hover:bg-navy-900 hover:text-white font-semibold px-8 py-3.5 rounded transition-colors text-sm"
            >
              View All Practice Areas <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <div className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Why Sterling
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-5">
                Experience You Can Trust.
                <br />Results You Can Count On.
              </h2>
              <p className="text-navy-800/65 text-lg leading-relaxed mb-8">
                For over two decades, Sterling Law Group has been the firm New
                Yorkers turn to when the stakes are highest. We combine deep
                legal expertise with a relentless commitment to our clients.
              </p>
              <div className="space-y-4">
                {[
                  "Direct partner-level attention on every case",
                  "Clear communication — you always know where things stand",
                  "Aggressive representation backed by thorough preparation",
                  "A track record of landmark verdicts and settlements",
                  "Transparent fees with no hidden costs",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-800/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-10">
                <Link
                  href="/free-consultation"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3.5 rounded transition-colors text-sm"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/about"
                  className="text-navy-800 hover:text-gold-600 font-semibold px-7 py-3.5 rounded border border-navy-800/30 hover:border-gold-500 transition-colors text-sm"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-lg border border-navy-100 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-lg bg-navy-900 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="text-navy-900 font-display font-bold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-800/60 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Client Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-navy-800/60 text-lg max-w-xl mx-auto">
              Real stories from real clients who trusted us with what mattered
              most to them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-navy-50 border border-navy-100 rounded-lg p-8"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>
                <p className="text-navy-800/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-gold-600 text-xs font-medium">
                    {t.matter}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-navy-100 rounded-lg"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-navy-900 text-sm">
                    {faq.q}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gold-500 flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-navy-800/70 text-sm leading-relaxed border-t border-navy-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-5">
            Ready to Protect Your Rights?
          </h2>
          <p className="text-navy-100/70 text-lg mb-10 max-w-2xl mx-auto">
            Don&rsquo;t face legal challenges alone. Schedule your free
            consultation today and let our experienced team fight for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-consultation"
              className="flex items-center justify-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-9 py-4 rounded transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Schedule Free Consultation
            </Link>
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-9 py-4 rounded transition-colors"
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

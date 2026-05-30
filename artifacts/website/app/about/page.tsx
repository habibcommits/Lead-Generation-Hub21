import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Calendar,
  Award,
  Users,
  Scale,
  Target,
  CheckCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sterling Law Group — our history, our attorneys, and our commitment to delivering exceptional legal results for our clients.",
};

const attorneys = [
  {
    name: "James Sterling",
    title: "Founding Partner",
    specialty: "Business & Corporate Law",
    years: "28 years",
    bio: "James founded Sterling Law Group in 2004 after over a decade at one of New York's leading commercial litigation firms. He has represented Fortune 500 companies and individual clients with equal dedication.",
  },
  {
    name: "Margaret Chen",
    title: "Senior Partner",
    specialty: "Personal Injury",
    years: "22 years",
    bio: "Margaret is one of New York's most respected personal injury attorneys, having secured landmark verdicts in cases other firms turned away. Her client-first philosophy drives every case she takes.",
  },
  {
    name: "Robert Alvarez",
    title: "Partner",
    specialty: "Real Estate & Family Law",
    years: "18 years",
    bio: "Robert brings deep expertise in real estate transactions and family law. Known for his calm judgment under pressure and his ability to find creative solutions in complex negotiations.",
  },
  {
    name: "Priya Nair",
    title: "Partner",
    specialty: "Employment & Estate Planning",
    years: "14 years",
    bio: "Priya is passionate about protecting workers' rights and helping families plan for the future. She has successfully resolved hundreds of employment disputes and crafted estate plans for clients of all backgrounds.",
  },
];

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description:
      "We give honest assessments — even when that means telling a client their case isn't worth pursuing. Trust is our most valuable asset.",
  },
  {
    icon: Target,
    title: "Results",
    description:
      "We measure success by outcomes, not activity. Every strategy we employ is aimed at delivering the best possible result for our client.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "You'll always be able to reach your attorney. We return calls the same day and provide direct cell phone access for urgent matters.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We invest heavily in professional development, research, and trial preparation because preparation is what wins cases.",
  },
];

const accolades = [
  "Super Lawyers — New York, 2019–2024",
  "Best Lawyers in America, 2018–2024",
  "Martindale-Hubbell AV Preeminent Rated",
  "New York State Bar Association",
  "American Association for Justice",
  "Top 100 Trial Lawyers — National Trial Lawyers",
];

export default function AboutPage() {
  return (
    <div className="pt-[112px]">
      {/* Header */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Firm
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              About Sterling Law Group
            </h1>
            <p className="text-navy-100/75 text-lg">
              Two decades of delivering exceptional legal results. Get to know
              the attorneys and values behind our firm.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-6">
                Founded on the Belief That Everyone Deserves Great Legal Representation
              </h2>
              <div className="space-y-4 text-navy-800/70 leading-relaxed">
                <p>
                  Sterling Law Group was founded in 2004 by James Sterling with
                  a simple but powerful conviction: that access to skilled,
                  honest legal counsel shouldn&rsquo;t be reserved for large
                  corporations or the wealthy.
                </p>
                <p>
                  From a single office in Midtown Manhattan, we&rsquo;ve grown
                  into one of New York&rsquo;s most respected law firms, with a
                  team of partners and associates handling hundreds of matters
                  each year across six core practice areas.
                </p>
                <p>
                  What hasn&rsquo;t changed is our approach: direct partner
                  involvement in every case, transparent communication, and an
                  unwavering commitment to fighting for the best possible
                  outcome. Every client — whether an injured individual or a
                  growing enterprise — receives the same caliber of legal
                  representation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Founded", value: "2004" },
                { label: "Cases Won", value: "5,000+" },
                { label: "Recovered for Clients", value: "$500M+" },
                { label: "Client Satisfaction", value: "98%" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-navy-900 rounded-lg p-7 text-center"
                >
                  <div className="text-3xl font-display font-bold text-gold-400 mb-1">
                    {s.value}
                  </div>
                  <div className="text-navy-100/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
              What We Stand For
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-navy-100 rounded-lg p-7"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-navy-900 font-display font-bold text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-navy-800/60 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
              Meet the Attorneys
            </h2>
            <p className="text-navy-800/60 text-lg max-w-xl mx-auto">
              Experienced, accessible, and relentlessly committed to your
              outcome.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attorneys.map((a) => (
              <div
                key={a.name}
                className="border border-navy-100 rounded-lg overflow-hidden"
              >
                {/* Avatar placeholder */}
                <div className="bg-navy-900 h-52 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center">
                    <span className="text-gold-400 text-3xl font-display font-bold">
                      {a.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-display font-bold text-navy-900 text-lg">
                    {a.name}
                  </div>
                  <div className="text-gold-600 text-xs font-semibold uppercase tracking-wider mt-0.5 mb-1">
                    {a.title}
                  </div>
                  <div className="text-navy-800/50 text-xs mb-3">
                    {a.specialty} · {a.years}
                  </div>
                  <p className="text-navy-800/65 text-xs leading-relaxed">
                    {a.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accolades */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Recognized Excellence
            </div>
            <h2 className="text-2xl font-display font-bold text-navy-900">
              Awards &amp; Recognition
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {accolades.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 bg-white border border-navy-100 rounded-lg px-5 py-4"
              >
                <Award className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span className="text-navy-800/80 text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Let&rsquo;s Talk About Your Case
          </h2>
          <p className="text-navy-100/70 mb-8">
            Free consultations, honest advice, real results.
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

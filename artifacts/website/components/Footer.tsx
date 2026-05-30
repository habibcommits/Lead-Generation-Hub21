import Link from "next/link";
import { Scale, Phone, Mail, MapPin, Clock, Linkedin, Facebook, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

const practiceAreas = [
  { href: "/practice-areas#personal-injury", label: "Personal Injury" },
  { href: "/practice-areas#business-law", label: "Business & Corporate Law" },
  { href: "/practice-areas#real-estate", label: "Real Estate Law" },
  { href: "/practice-areas#family-law", label: "Family Law" },
  { href: "/practice-areas#employment", label: "Employment Law" },
  { href: "/practice-areas#estate", label: "Estate Planning" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/free-consultation", label: "Free Consultation" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded bg-gold-500 flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-navy-900" />
              </div>
              <div>
                <div className="text-white font-display font-bold text-base leading-tight">
                  Sterling Law Group
                </div>
                <div className="text-gold-400 text-xs tracking-wider uppercase">
                  Attorneys at Law
                </div>
              </div>
            </Link>
            <p className="text-navy-100/70 text-sm leading-relaxed mb-5">
              Experienced legal counsel committed to protecting your rights and
              delivering results. Over 20 years serving clients across New York.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                aria-label="LinkedIn"
                className="w-9 h-9 rounded bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                aria-label="Facebook"
                className="w-9 h-9 rounded bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.twitter}
                aria-label="Twitter"
                className="w-9 h-9 rounded bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2.5">
              {practiceAreas.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-100/70 hover:text-gold-400 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-100/70 hover:text-gold-400 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-start gap-3 text-sm text-navy-100/70 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-sm text-navy-100/70 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-100/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                <span>
                  {SITE_CONFIG.address}
                  <br />
                  {SITE_CONFIG.city}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy-100/70">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                <span className="whitespace-pre-line">{SITE_CONFIG.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-navy-100/50 text-xs">
            &copy; {new Date().getFullYear()} Sterling Law Group. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="text-navy-100/50 hover:text-gold-400 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-navy-100/50 hover:text-gold-400 text-xs transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="text-navy-100/50 hover:text-gold-400 text-xs transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

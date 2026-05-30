"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Scale } from "lucide-react";
import { cn, SITE_CONFIG } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-900 shadow-lg py-2"
          : "bg-navy-900/95 backdrop-blur-sm py-3"
      )}
    >
      {/* Top bar */}
      <div className="bg-gold-500 text-navy-900 text-sm py-1.5 px-4 text-center font-medium">
        Free Consultations Available —{" "}
        <a href={SITE_CONFIG.phoneHref} className="font-bold hover:underline">
          Call {SITE_CONFIG.phone}
        </a>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded bg-gold-500 flex items-center justify-center flex-shrink-0">
              <Scale className="w-5 h-5 text-navy-900" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-lg leading-tight">
                Sterling Law Group
              </div>
              <div className="text-gold-400 text-xs tracking-wider uppercase">
                Attorneys at Law
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-gold-400"
                    : "text-navy-100 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/free-consultation"
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 pt-4 pb-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-gold-400 bg-white/5"
                    : "text-navy-100 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2 px-4 py-3 text-white text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                {SITE_CONFIG.phone}
              </a>
              <Link
                href="/free-consultation"
                className="block mx-4 text-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm px-5 py-3 rounded transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

"use client";

import type { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Send,
  CheckCircle,
} from "lucide-react";
import { cn, SITE_CONFIG } from "@/lib/utils";

const practiceAreaOptions = [
  "Personal Injury",
  "Business & Corporate Law",
  "Real Estate Law",
  "Family Law",
  "Employment Law",
  "Estate Planning",
  "Other",
];

const ContactPage: FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

    if (portalId && formId) {
      try {
        await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fields: [
                { name: "firstname", value: formData.firstName },
                { name: "lastname", value: formData.lastName },
                { name: "email", value: formData.email },
                { name: "phone", value: formData.phone },
                { name: "practice_area", value: formData.practiceArea },
                { name: "message", value: formData.message },
              ],
            }),
          }
        );
      } catch {
        // Fall through to success state
      }
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-[112px]">
      {/* Header */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-navy-100/75 text-lg">
              We&rsquo;re here to help. Reach out by phone, email, or the form
              below — we respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-display font-bold text-navy-900 mb-5">
                  Contact Information
                </h2>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <div className="text-xs text-navy-800/50 font-medium uppercase tracking-wide mb-0.5">
                          Phone
                        </div>
                        <div className="text-navy-900 font-semibold group-hover:text-gold-600 transition-colors">
                          {SITE_CONFIG.phone}
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-gold-400" />
                      </div>
                      <div>
                        <div className="text-xs text-navy-800/50 font-medium uppercase tracking-wide mb-0.5">
                          Email
                        </div>
                        <div className="text-navy-900 font-semibold group-hover:text-gold-600 transition-colors">
                          {SITE_CONFIG.email}
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-navy-800/50 font-medium uppercase tracking-wide mb-0.5">
                        Address
                      </div>
                      <div className="text-navy-900 font-semibold">
                        {SITE_CONFIG.address}
                        <br />
                        {SITE_CONFIG.city}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-navy-800/50 font-medium uppercase tracking-wide mb-0.5">
                        Office Hours
                      </div>
                      <div className="text-navy-900 font-semibold text-sm leading-relaxed whitespace-pre-line">
                        {SITE_CONFIG.hours}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gold-50 border border-gold-200 rounded-lg p-6">
                <h3 className="font-display font-bold text-navy-900 text-base mb-2">
                  Prefer to Schedule Online?
                </h3>
                <p className="text-navy-800/65 text-sm mb-4">
                  Book your free consultation at a time that works for you using
                  our online calendar.
                </p>
                <Link
                  href="/free-consultation"
                  className="flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-3 rounded transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book Online
                </Link>
              </div>

              {/* Map placeholder */}
              <div className="bg-navy-100 rounded-lg h-52 flex items-center justify-center border border-navy-200">
                <div className="text-center text-navy-800/50 text-sm">
                  <MapPin className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  {SITE_CONFIG.address}
                  <br />
                  {SITE_CONFIG.city}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-navy-900 font-display font-bold text-2xl mb-3">
                    Message Received
                  </h3>
                  <p className="text-navy-800/70 mb-6">
                    Thank you for reaching out. A member of our team will be in
                    touch within one business day. For urgent matters, please
                    call us directly at{" "}
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="text-gold-600 font-semibold"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    .
                  </p>
                  <Link
                    href="/"
                    className="inline-block bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3 rounded transition-colors text-sm"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-display font-bold text-navy-900">
                    Send Us a Message
                  </h2>
                  <p className="text-navy-800/60 text-sm">
                    Fill in your details and we&rsquo;ll be in touch within one
                    business day.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                        First Name <span className="text-gold-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/40 focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                        Last Name <span className="text-gold-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/40 focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                        Email Address <span className="text-gold-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/40 focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/40 focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                      Practice Area
                    </label>
                    <select
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleChange}
                      className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600 bg-white"
                    >
                      <option value="">Select a practice area</option>
                      {practiceAreaOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                      How Can We Help? <span className="text-gold-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/40 focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600 resize-none"
                      placeholder="Briefly describe your situation and what you need help with..."
                    />
                  </div>

                  <p className="text-navy-800/50 text-xs leading-relaxed">
                    By submitting this form you agree to be contacted by our
                    firm. Attorney-client privilege does not apply until a formal
                    engagement is established.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      "flex items-center gap-2.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded transition-colors text-sm",
                      submitting && "opacity-60 cursor-not-allowed"
                    )}
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

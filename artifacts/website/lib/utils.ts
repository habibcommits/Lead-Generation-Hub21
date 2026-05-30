import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_CONFIG = {
  name: "Sterling Law Group",
  tagline: "Protecting What Matters Most",
  phone: "(555) 555-0100",
  phoneHref: "tel:+15555550100",
  email: "info@sterlinglaw.com",
  address: "123 Main Street, Suite 400",
  city: "New York, NY 10001",
  hours: "Mon–Fri: 8am–7pm  |  Sat: 9am–2pm",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/your-link/free-consultation",
  socialLinks: {
    linkedin: "#",
    facebook: "#",
    twitter: "#",
  },
};

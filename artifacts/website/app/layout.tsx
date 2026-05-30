import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { SITE_CONFIG } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://sterlinglaw.com"),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Sterling Law Group provides experienced legal representation in personal injury, business law, real estate, and family law. Free consultations available. Call now.",
  keywords: [
    "law firm",
    "personal injury lawyer",
    "business attorney",
    "free consultation",
    "legal help",
    SITE_CONFIG.city,
  ],
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description:
      "Experienced legal counsel for personal injury, business law, and more. Free consultations. Call " +
      SITE_CONFIG.phone,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: "Experienced legal counsel. Free consultations available.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Smith.ai live chat — set NEXT_PUBLIC_SMITH_AI_ID in env */}
        {process.env.NEXT_PUBLIC_SMITH_AI_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src="https://smith.ai/chat/widget.js";
                g.setAttribute("data-id","${process.env.NEXT_PUBLIC_SMITH_AI_ID}");
                g.async=true;s.parentNode.insertBefore(g,s);}(document,"script"));
              `,
            }}
          />
        )}
      </head>
      <body className="antialiased">
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

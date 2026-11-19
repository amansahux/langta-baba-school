import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

// ─── Fonts (zero layout shift via next/font) ───────────────────────────────
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

// ─── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Langta Baba Gyandeep Public School — Kharagdiha (Est. 2013)",
    template: "%s | Langta Baba Gyandeep Public School",
  },
  description:
    "Langta Baba Gyandeep Public School in Kharagdiha — nurturing young minds from Class 1 to 10 with dedicated teachers, strong values, and affordable quality education since 2013.",
  keywords: [
    "Langta Baba Gyandeep Public School",
    "Kharagdiha school",
    "school Jharkhand",
    "primary school",
    "secondary school",
    "affordable education",
    "Classes 1 to 10",
  ],
  authors: [{ name: "Langta Baba Gyandeep Public School" }],
  creator: "Langta Baba Gyandeep Public School",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://langtababaschool.in",
    siteName: "Langta Baba Gyandeep Public School",
    title: "Langta Baba Gyandeep Public School — Kharagdiha (Est. 2013)",
    description:
      "Building Knowledge, Character & A Brighter Future. Serving Kharagdiha families with value-driven education since 2013.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Langta Baba Gyandeep Public School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Langta Baba Gyandeep Public School",
    description: "Building Knowledge, Character & A Brighter Future.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://langtababaschool.in"),
};

export const viewport: Viewport = {
  themeColor: "#17265B",
  width: "device-width",
  initialScale: 1,
};

// ─── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        {/* Material Symbols Outlined — preconnect to avoid render blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F6EF] text-[#252A35] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

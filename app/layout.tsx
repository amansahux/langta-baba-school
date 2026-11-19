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
    default: "Langta Baba Gyandeep Public School — Kharagdih (Est. 2013)",
    template: "%s | Langta Baba Gyandeep Public School",
  },
  description:
    "Langta Baba Gyandeep Public School in Kharagdih — nurturing young minds from Class 1 to 10 with dedicated teachers, strong values, and affordable quality education since 2013.",
  keywords: [
    "Langta Baba Gyandeep Public School",
    "Kharagdih school",
    "Giridih Jharkhand school",
    "primary school Kharagdih",
    "secondary school Kharagdih",
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
    title: "Langta Baba Gyandeep Public School — Kharagdih (Est. 2013)",
    description:
      "Building Knowledge, Character & A Brighter Future. Serving Kharagdih families with value-driven education since 2013.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/ALJJyrCGNAZWbSI-KGGbhIkW1zTbGdqKZ8PqnsUJXWri4PEXbqasB1IOgGGSAoBmJya9XPUE2nZpEhjZ436znuhZ48OK7FbPAt11SKwmjtnb_v5AOoDbCHe_4GYHD6oYjeyq9ahjj_myYjzop_Y6Jw2cpqrM_zsgd3oAM_MuJrhQWrFga0TTEVTj0t0ZIH2Dq5IkSOnoljHoOpdScyselmZwHH_gG9MeDQ8hsR1Fx7Y0HjBoW0SYjJvqfa43HOGrzriXEJgRQPGT33Jfhg",
        width: 1200,
        height: 630,
        alt: "Langta Baba Gyandeep Public School Campus Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Langta Baba Gyandeep Public School",
    description: "Building Knowledge, Character & A Brighter Future. Kharagdih (Est. 2013).",
    images: [
      "https://lh3.googleusercontent.com/aida/ALJJyrCGNAZWbSI-KGGbhIkW1zTbGdqKZ8PqnsUJXWri4PEXbqasB1IOgGGSAoBmJya9XPUE2nZpEhjZ436znuhZ48OK7FbPAt11SKwmjtnb_v5AOoDbCHe_4GYHD6oYjeyq9ahjj_myYjzop_Y6Jw2cpqrM_zsgd3oAM_MuJrhQWrFga0TTEVTj0t0ZIH2Dq5IkSOnoljHoOpdScyselmZwHH_gG9MeDQ8hsR1Fx7Y0HjBoW0SYjJvqfa43HOGrzriXEJgRQPGT33Jfhg",
    ],
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
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F6EF] text-[#252A35] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

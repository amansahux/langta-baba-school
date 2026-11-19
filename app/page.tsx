import { Suspense } from "react";
import dynamic from "next/dynamic";

// Server Components — imported directly (SSG)
import Navbar from "./_components/layout/Navbar";
import HeroSection from "./_components/sections/HeroSection";
import AboutSection from "./_components/sections/AboutSection";
import WhyChooseUsSection from "./_components/sections/WhyChooseUsSection";
import StatsMarquee from "./_components/sections/StatsMarquee";
import AcademicsSection from "./_components/sections/AcademicsSection";
import TeachersSection from "./_components/sections/TeachersSection";
import FacilitiesSection from "./_components/sections/FacilitiesSection";
import GallerySection from "./_components/sections/GallerySection";
import TestimonialsSection from "./_components/sections/TestimonialsSection";
import ContactSection from "./_components/sections/ContactSection";
import Footer from "./_components/layout/Footer";

// "use client" — dynamically loaded (reduces initial JS bundle)
const ScrollToTop = dynamic(() => import("./_components/ui/ScrollToTop"), {
  ssr: false,
});

// ─── Page (Server Component — SSG) ─────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero — highest priority, LCP element */}
        <HeroSection />

        {/* About */}
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>

        {/* Why Choose Us */}
        <Suspense fallback={<SectionSkeleton />}>
          <WhyChooseUsSection />
        </Suspense>

        {/* Stats Ticker */}
        <StatsMarquee />

        {/* Academics */}
        <Suspense fallback={<SectionSkeleton />}>
          <AcademicsSection />
        </Suspense>

        {/* Teachers */}
        <Suspense fallback={<SectionSkeleton />}>
          <TeachersSection />
        </Suspense>

        {/* Facilities */}
        <Suspense fallback={<SectionSkeleton />}>
          <FacilitiesSection />
        </Suspense>

        {/* Gallery */}
        <Suspense fallback={<SectionSkeleton />}>
          <GallerySection />
        </Suspense>

        {/* Testimonials */}
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>

        {/* Contact */}
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

// ─── Fallback skeleton for Suspense boundaries ─────────────────────────────
function SectionSkeleton() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="skeleton h-6 w-32 mb-4 rounded-full" />
        <div className="skeleton h-10 w-2/3 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton h-48 rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
}
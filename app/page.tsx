import { Suspense } from "react";
import Navbar from "./_components/layout/Navbar";
import HeroSection from "./_components/sections/HeroSection";
import AboutSection from "./_components/sections/AboutSection";
import WhyChooseUs from "./_components/sections/WhyChooseUs";
import StatsMarquee from "./_components/sections/StatsMarquee";
import AcademicsSection from "./_components/sections/AcademicsSection";
import TeachersSection from "./_components/sections/TeachersSection";
import FacilitiesSection from "./_components/sections/FacilitiesSection";
import GallerySection from "./_components/sections/GallerySection";
import ContactSection from "./_components/sections/ContactSection";
import Footer from "./_components/layout/Footer";
import ScrollToTop from "./_components/ui/ScrollToTop";
import SkeletonCard from "./_components/ui/SkeletonCard";

// ─── Home Page (Server Component — SSG) ────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* Sticky Navigation Header */}
      <Navbar />

      <main id="main-content">
        {/* 1. Hero — LCP image priority */}
        <HeroSection />

        {/* 2. About Our School */}
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>

        {/* 3. Why Choose Us (12-column Bento Grid) */}
        <Suspense fallback={<SectionSkeleton />}>
          <WhyChooseUs />
        </Suspense>

        {/* 4. Stats Marquee Ticker ("use client") */}
        <StatsMarquee />

        {/* 5. Academic Programs */}
        <Suspense fallback={<SectionSkeleton />}>
          <AcademicsSection />
        </Suspense>

        {/* 6. Our Teachers */}
        <Suspense fallback={<SectionSkeleton />}>
          <TeachersSection />
        </Suspense>

        {/* 7. School Facilities */}
        <Suspense fallback={<SectionSkeleton />}>
          <FacilitiesSection />
        </Suspense>

        {/* 8. School Gallery */}
        <Suspense fallback={<SectionSkeleton />}>
          <GallerySection />
        </Suspense>

        {/* 9. Contact Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button ("use client") */}
      <ScrollToTop />
    </>
  );
}

// ─── Fallback Skeleton for Suspense Boundaries ─────────────────────────────
function SectionSkeleton() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="skeleton h-6 w-32 mb-4 rounded-full" />
        <div className="skeleton h-10 w-2/3 max-w-md mb-8 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </section>
  );
}

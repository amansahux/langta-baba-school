import SectionLabel from "../ui/SectionLabel";
import GalleryClient from "./GalleryClient";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-[#F8F6EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mb-12">
          <SectionLabel color="yellow" className="mb-3">
            OUR SCHOOL LIFE
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-balance">
            Memories, Moments &amp; Milestones.
          </h2>
        </div>

        {/* ── Client Gallery with Filter Tabs & Lightbox ── */}
        <GalleryClient />
      </div>
    </section>
  );
}

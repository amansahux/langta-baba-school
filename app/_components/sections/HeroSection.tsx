import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[92vh] flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida/ALJJyrCGNAZWbSI-KGGbhIkW1zTbGdqKZ8PqnsUJXWri4PEXbqasB1IOgGGSAoBmJya9XPUE2nZpEhjZ436znuhZ48OK7FbPAt11SKwmjtnb_v5AOoDbCHe_4GYHD6oYjeyq9ahjj_myYjzop_Y6Jw2cpqrM_zsgd3oAM_MuJrhQWrFga0TTEVTj0t0ZIH2Dq5IkSOnoljHoOpdScyselmZwHH_gG9MeDQ8hsR1Fx7Y0HjBoW0SYjJvqfa43HOGrzriXEJgRQPGT33Jfhg"
          alt="Langta Baba Gyandeep Public School building"
          fill
          priority={true}
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Left-to-right cream fade (main readability layer) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6EF] via-[#F8F6EF]/95 to-[#F8F6EF]/70" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6EF] via-transparent to-transparent" />
      </div>

      {/* ── Decorative Blobs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#F6CF45]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[320px] rounded-full bg-[#862D48]/15 blur-3xl"
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-[#E2DFC8] rounded-full px-4 py-2 mb-7 shadow-sm">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6CF45] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F6CF45]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#17265B]">
              Learning Today, Leading Tomorrow
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-[32px] leading-[1.15] sm:text-[42px] lg:text-[56px] lg:leading-[1.1] mb-6">
            Building Knowledge,{" "}
            <span className="highlight-yellow">Character</span>
            {" "}& A Brighter Future.
          </h1>

          {/* Description */}
          <p className="font-[family-name:var(--font-body)] text-[#4D515C] text-base sm:text-lg leading-relaxed mb-9 max-w-2xl">
            Nurturing young minds from Class&nbsp;1 to Class&nbsp;10 in the
            heart of Kharagdih — with dedicated teachers, strong values, and
            affordable quality education that every family deserves.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href="#about"
              className="inline-flex items-center gap-2 bg-[#17265B] text-white font-[family-name:var(--font-display)] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:bg-[#1e3278] hover:shadow-xl active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17265B] focus-visible:ring-offset-2"
            >
              <span>Explore Our School</span>
              <span className="material-symbols-outlined text-[20px]">
                arrow_downward
              </span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F6CF45] text-[#17265B] font-[family-name:var(--font-display)] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md hover:bg-[#f0c932] hover:shadow-lg active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6CF45] focus-visible:ring-offset-2"
            >
              <span>Contact the School</span>
              <span className="material-symbols-outlined text-[20px]">
                call
              </span>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="border-t border-[#E2DFC8] pt-7 flex flex-wrap gap-5 sm:gap-8">
            {/* Educational Span */}
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F6CF45]/25 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px] text-[#17265B]">
                  school
                </span>
              </span>
              <div>
                <p className="font-[family-name:var(--font-display)] font-bold text-sm text-[#17265B] leading-tight">
                  Classes 1–10
                </p>
                <p className="font-[family-name:var(--font-body)] text-xs text-[#4D515C] leading-tight mt-0.5">
                  Educational Span
                </p>
              </div>
            </div>

            {/* Foundation */}
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#17265B]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px] text-[#17265B]">
                  history_edu
                </span>
              </span>
              <div>
                <p className="font-[family-name:var(--font-display)] font-bold text-sm text-[#17265B] leading-tight">
                  Established 2013
                </p>
                <p className="font-[family-name:var(--font-body)] text-xs text-[#4D515C] leading-tight mt-0.5">
                  Foundation
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#862D48]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px] text-[#862D48]">
                  location_on
                </span>
              </span>
              <div>
                <p className="font-[family-name:var(--font-display)] font-bold text-sm text-[#17265B] leading-tight">
                  Kharagdih
                </p>
                <p className="font-[family-name:var(--font-body)] text-xs text-[#4D515C] leading-tight mt-0.5">
                  Location
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Academics", href: "#academics" },
  { label: "Teachers", href: "#teachers" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  // ── Scroll shadow effect ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active link tracking via IntersectionObserver ─────────────────────
  useEffect(() => {
    const sectionIds = [
      ...NAV_LINKS.map((l) => l.href.replace("#", "")),
      "contact",
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHash(`#${id}`);
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // ── Prevent body scroll when drawer open ──────────────────────────────
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setDrawerOpen((p) => !p), []);

  return (
    <>
      {/* ── Navbar shell ──────────────────────────────────────────────── */}
      <header
        id="site-header"
        className={`
          fixed top-0 left-0 right-0 z-50 h-20
          transition-all duration-300 border-b border-[#E2DFC8]
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-sm"
              : "bg-[#F8F6EF]/95 backdrop-blur-md shadow-none"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          {/* ── Left — Logo + School name ────────────────────────────── */}
          <a
            href="#hero"
            onClick={closeDrawer}
            className="flex items-center gap-3.5 flex-shrink-0 group"
            aria-label="Langta Baba Gyandeep Public School — Home"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida/ALJJyrAbcAUAOUALevncLwfAkVYx0P90Ns19_1y8whRgZpdqqRZ3FRRrT015YK8U6an0OMcQSDw-vaFwMVv04H5W1SrBjg-fpphs3C3568i1SYWjM3Ii6Tyl1_EwyBo2qyabcFCRqDbwavokkxTVG9GX8L_QIno7GQLTHuUBmfctZGZrMaA1hUakQiEovsPQbe9ZomHkrRChh2KLFSMJUddZNDvsEVh1x2ntU-CcSHtE748d6VXekJFVZs-PGHq5mgtjka1KRrq5"
              alt="Langta Baba Gyandeep Public School Crest"
              width={48}
              height={48}
              className="w-12 h-12 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform duration-150"
              priority
            />
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-base sm:text-lg tracking-tight leading-tight group-hover:text-[#862D48] transition-colors">
                Langta Baba Gyandeep Public School
              </span>
              <span className="font-[family-name:var(--font-body)] text-[#4D515C] text-xs font-medium tracking-wide">
                Kharagdiha | Est. 2013 • Classes 1–10
              </span>
            </div>
          </a>

          {/* ── Center — Desktop nav links ───────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeHash === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`
                    px-3 py-1.5 rounded-full text-xs xl:text-sm font-[family-name:var(--font-display)] font-semibold
                    transition-all duration-150
                    ${
                      isActive
                        ? "text-[#17265B] bg-[#17265B]/10 font-bold"
                        : "text-[#4D515C] hover:text-[#17265B] hover:bg-black/5"
                    }
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* ── Right — CTA + hamburger ──────────────────────────────── */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="
                hidden sm:inline-flex items-center justify-center gap-1.5
                px-5 py-2.5 bg-[#F6CF45] hover:bg-amber-400
                text-[#17265B] font-[family-name:var(--font-display)] text-xs sm:text-sm font-bold
                rounded-full shadow-sm hover:shadow-md transition-all duration-150 hover:-translate-y-0.5
              "
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined !text-[16px]">
                arrow_forward
              </span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={toggleDrawer}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              className="
                lg:hidden inline-flex items-center justify-center p-2 rounded-xl
                text-[#17265B] hover:bg-[#F6CF45]/20 focus:outline-none focus:ring-2 focus:ring-[#17265B]
              "
            >
              <span className="material-symbols-outlined !text-[26px]">
                {drawerOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer overlay ────────────────────────────────────── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
          onClick={closeDrawer}
        />
      )}

      {/* ── Mobile drawer panel ──────────────────────────────────────── */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`
          fixed top-20 left-0 right-0 z-40 lg:hidden
          bg-[#F8F6EF]/95 backdrop-blur-md border-b border-[#E2DFC8]
          shadow-xl transition-all duration-300 ease-in-out
          overflow-hidden
          ${
            drawerOpen
              ? "max-h-[640px] opacity-100 py-4 px-4 space-y-1.5"
              : "max-h-0 opacity-0 pointer-events-none py-0 px-4"
          }
        `}
      >
        <nav aria-label="Mobile links" className="space-y-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeHash === href;
            return (
              <a
                key={href}
                href={href}
                onClick={closeDrawer}
                className={`
                  block px-4 py-2.5 rounded-xl text-sm font-semibold
                  font-[family-name:var(--font-display)] transition-colors
                  ${
                    isActive
                      ? "bg-[#17265B] text-white"
                      : "text-[#17265B] hover:bg-[#F6CF45]/30"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </a>
            );
          })}

          <div className="pt-3">
            <a
              href="#contact"
              onClick={closeDrawer}
              className="
                flex items-center justify-center gap-2 w-full py-3
                bg-[#F6CF45] text-[#17265B] font-[family-name:var(--font-display)]
                text-sm font-bold rounded-xl shadow-sm hover:bg-amber-400 transition-colors
              "
            >
              <span>Contact Us Today</span>
              <span className="material-symbols-outlined !text-[18px]">
                arrow_forward
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

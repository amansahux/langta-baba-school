"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Academics", href: "#academics" },
  { label: "Teachers", href: "#teachers" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  // ── Scroll shadow effect ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active link tracking via IntersectionObserver ─────────────────────
  useEffect(() => {
    const sectionIds = [...NAV_LINKS.map((l) => l.href.replace("#", "")), "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHash(`#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // ── Prevent body scroll when drawer open ──────────────────────────────
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setDrawerOpen((p) => !p), []);

  return (
    <>
      {/* ── Navbar shell ──────────────────────────────────────────────── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 h-20
          bg-[#F8F6EF]/95 backdrop-blur-md
          border-b border-[#E2DFC8]
          transition-shadow duration-300
          ${scrolled ? "shadow-[0_4px_24px_-4px_rgba(23,38,91,0.12)]" : "shadow-none"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">

          {/* ── Left — Logo + School name ────────────────────────────── */}
          <a
            href="#home"
            onClick={closeDrawer}
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="Langta Baba Gyandeep Public School — Home"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida/ALJJyrAbcAUAOUALevncLwfAkVYx0P90Ns19_1y8whRgZpdqqRZ3FRRrT015YK8U6an0OMcQSDw-vaFwMVv04H5W1SrBjg-fpphs3C3568i1SYWjM3Ii6Tyl1_EwyBo2qyabcFCRqDbwavokkxTVG9GX8L_QIno7GQLTHuUBmfctZGZrMaA1hUakQiEovsPQbe9ZomHkrRChh2KLFSMJUddZNDvsEVh1x2ntU-CcSHtE748d6VXekJFVZs-PGHq5mgtjka1KRrq5"
              alt="Langta Baba Gyandeep Public School Logo"
              width={48}
              height={48}
              className="rounded-full ring-2 ring-[#17265B]/20 group-hover:ring-[#17265B]/50 transition-all duration-200"
              priority
            />
            <div className="hidden sm:block leading-tight">
              <p className="font-[family-name:var(--font-display)] font-extrabold text-sm text-[#17265B] leading-none">
                Langta Baba Gyandeep
              </p>
              <p className="font-[family-name:var(--font-display)] font-semibold text-[11px] text-[#862D48] mt-0.5">
                Public School
              </p>
              <p className="font-[family-name:var(--font-body)] text-[10px] text-[#17265B]/50 mt-0.5 tracking-wide">
                Kharagdih&nbsp;&nbsp;|&nbsp;&nbsp;Est. 2013
              </p>
            </div>
          </a>

          {/* ── Center — Desktop nav links ───────────────────────────── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeHash === href;
              return (
                <a
                  key={href}
                  href={href}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium
                    font-[family-name:var(--font-body)]
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#17265B] text-white shadow-sm"
                        : "text-[#17265B]/80 hover:text-[#17265B] hover:bg-[#17265B]/8"
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
            {/* Contact CTA — always visible */}
            <a
              href="#contact"
              className="
                hidden sm:inline-flex items-center gap-2
                px-5 py-2.5 rounded-full
                bg-[#F6CF45] text-[#17265B]
                font-[family-name:var(--font-display)] font-bold text-sm
                shadow-sm shadow-[#F6CF45]/40
                hover:bg-[#f4c820] hover:shadow-md hover:shadow-[#F6CF45]/50
                hover:-translate-y-0.5
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17265B] focus-visible:ring-offset-2
              "
            >
              <span className="material-symbols-outlined !text-[16px]">mail</span>
              Contact Us
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={toggleDrawer}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              className="
                md:hidden flex items-center justify-center
                w-10 h-10 rounded-full
                text-[#17265B] hover:bg-[#17265B]/10
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17265B]
              "
            >
              <span className="material-symbols-outlined !text-[24px]">
                {drawerOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer overlay ────────────────────────────────────── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
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
          fixed top-20 left-0 right-0 z-40 md:hidden
          bg-[#F8F6EF] border-b border-[#E2DFC8]
          shadow-xl shadow-[#17265B]/10
          transition-all duration-300 ease-in-out
          overflow-hidden
          ${drawerOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <nav
          className="px-4 py-6 space-y-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeHash === href;
            return (
              <a
                key={href}
                href={href}
                onClick={closeDrawer}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium
                  font-[family-name:var(--font-body)]
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#17265B] text-white"
                      : "text-[#17265B] hover:bg-[#17265B]/8"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6CF45] flex-shrink-0" />
                )}
                {label}
              </a>
            );
          })}

          {/* Mobile Contact CTA */}
          <div className="pt-4 pb-2">
            <a
              href="#contact"
              onClick={closeDrawer}
              className="
                flex items-center justify-center gap-2
                w-full px-5 py-3.5 rounded-full
                bg-[#F6CF45] text-[#17265B]
                font-[family-name:var(--font-display)] font-bold text-sm
                shadow-sm shadow-[#F6CF45]/40
                hover:bg-[#f4c820]
                transition-colors duration-200
              "
            >
              <span className="material-symbols-outlined !text-[18px]">mail</span>
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

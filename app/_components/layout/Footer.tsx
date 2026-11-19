import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Academics", href: "#academics" },
  { label: "Teachers", href: "#teachers" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#17265B] text-white">
      {/* ── Main Grid ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* ── Column 1 — Brand ──────────────────────────────────────── */}
          <div className="space-y-5">
            <Link href="#home" className="inline-flex items-center gap-3 group">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrAbcAUAOUALevncLwfAkVYx0P90Ns19_1y8whRgZpdqqRZ3FRRrT015YK8U6an0OMcQSDw-vaFwMVv04H5W1SrBjg-fpphs3C3568i1SYWjM3Ii6Tyl1_EwyBo2qyabcFCRqDbwavokkxTVG9GX8L_QIno7GQLTHuUBmfctZGZrMaA1hUakQiEovsPQbe9ZomHkrRChh2KLFSMJUddZNDvsEVh1x2ntU-CcSHtE748d6VXekJFVZs-PGHq5mgtjka1KRrq5"
                alt="Langta Baba Gyandeep Public School Logo"
                width={52}
                height={52}
                className="rounded-full ring-2 ring-[#F6CF45]/50 group-hover:ring-[#F6CF45] transition-all duration-200 flex-shrink-0"
              />
              <div>
                <p className="font-[family-name:var(--font-display)] font-800 text-base leading-tight text-white">
                  Langta Baba
                </p>
                <p className="font-[family-name:var(--font-display)] font-800 text-base leading-tight text-[#F6CF45]">
                  Gyandeep Public School
                </p>
              </div>
            </Link>

            <p className="font-[family-name:var(--font-body)] text-sm text-white/70 leading-relaxed max-w-xs">
              Building Knowledge, Character &amp; A Brighter Future. Nurturing
              young minds from Class 1 to 10 with dedicated teachers, strong
              values, and affordable quality education since 2013.
            </p>

            {/* Social / Accent chips */}
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs font-[family-name:var(--font-body)] text-white/80">
                <span className="material-symbols-outlined !text-[14px] text-[#F6CF45]">school</span>
                Est. 2013
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs font-[family-name:var(--font-body)] text-white/80">
                <span className="material-symbols-outlined !text-[14px] text-[#F6CF45]">grade</span>
                Class 1–10
              </span>
            </div>
          </div>

          {/* ── Column 2 — Quick Links ───────────────────────────────── */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-sm tracking-widest uppercase text-[#F6CF45] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="
                      group inline-flex items-center gap-2
                      font-[family-name:var(--font-body)] text-sm text-white/70
                      hover:text-white transition-colors duration-200
                    "
                  >
                    <span
                      className="
                        w-1.5 h-1.5 rounded-full bg-[#F6CF45]/40
                        group-hover:bg-[#F6CF45] transition-colors duration-200
                        flex-shrink-0
                      "
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 — Contact Info ──────────────────────────────── */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-sm tracking-widest uppercase text-[#F6CF45] mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="material-symbols-outlined !text-[20px] text-[#F6CF45] mt-0.5 flex-shrink-0">
                  location_on
                </span>
                <span className="font-[family-name:var(--font-body)] text-sm text-white/70 leading-relaxed">
                  Langta Baba Gyandeep Public School,
                  <br />
                  Kharagdih, Jharkhand, India
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <span className="material-symbols-outlined !text-[20px] text-[#F6CF45] flex-shrink-0">
                  call
                </span>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="font-[family-name:var(--font-body)] text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <span className="material-symbols-outlined !text-[20px] text-[#F6CF45] flex-shrink-0">
                  mail
                </span>
                <a
                  href="mailto:info@langtababaschool.in"
                  className="font-[family-name:var(--font-body)] text-sm text-white/70 hover:text-white transition-colors duration-200 break-all"
                >
                  info@langtababaschool.in
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <span className="material-symbols-outlined !text-[20px] text-[#F6CF45] flex-shrink-0">
                  schedule
                </span>
                <span className="font-[family-name:var(--font-body)] text-sm text-white/70">
                  Mon – Sat: 8:00 AM – 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────── */}
      <div className="border-t border-white/10" />

      {/* ── Bottom Bar ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-body)] text-xs text-white/50 text-center sm:text-left">
            © 2025 Langta Baba Gyandeep Public School. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-body)] text-xs text-white/40">
            Kharagdih, Jharkhand &nbsp;|&nbsp; Est. 2013
          </p>
        </div>
      </div>
    </footer>
  );
}

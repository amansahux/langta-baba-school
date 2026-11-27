import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Our School", href: "#about" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Academic Programs", href: "#academics" },
  { label: "Our Teachers", href: "#teachers" },
  { label: "School Facilities", href: "#facilities" },
  { label: "School Gallery", href: "#gallery" },
  { label: "Parent Testimonials", href: "#testimonials" },
  { label: "Contact the Principal", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#17265B] text-white pt-20 pb-12 border-t border-[#17265B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Left: Logo & Identity (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrAbcAUAOUALevncLwfAkVYx0P90Ns19_1y8whRgZpdqqRZ3FRRrT015YK8U6an0OMcQSDw-vaFwMVv04H5W1SrBjg-fpphs3C3568i1SYWjM3Ii6Tyl1_EwyBo2qyabcFCRqDbwavokkxTVG9GX8L_QIno7GQLTHuUBmfctZGZrMaA1hUakQiEovsPQbe9ZomHkrRChh2KLFSMJUddZNDvsEVh1x2ntU-CcSHtE748d6VXekJFVZs-PGHq5mgtjka1KRrq5"
                alt="Langta Baba Gyandeep Public School Emblem"
                width={64}
                height={64}
                className="w-16 h-16 object-contain rounded-full bg-white p-1"
              />
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-lg sm:text-xl text-white leading-tight">
                  Langta Baba Gyandeep Public School
                </h3>
                <p className="text-[#F6CF45] text-xs font-semibold tracking-wide">
                  Kharagdiha • Established 2013
                </p>
              </div>
            </div>
            <p className="font-[family-name:var(--font-body)] text-sm text-white/80 leading-relaxed max-w-sm">
              Nurturing knowledge, integrity, and lifelong learning for students
              from Classes 1 to 10 in Kharagdiha. Dedicated to wholesome
              character and community development.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-[#F6CF45]" />
              <span>Recognized Community Educational Institution</span>
            </div>
          </div>

          {/* Center: Quick Navigation (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-[family-name:var(--font-display)] font-bold text-white text-base tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80 font-[family-name:var(--font-body)]">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-[#F6CF45] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#F6CF45]" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Details (Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-[family-name:var(--font-display)] font-bold text-white text-base tracking-wider uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/80 font-[family-name:var(--font-body)]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F6CF45] shrink-0 mt-0.5" />
                <span>Kharagdiha, Giridih District, Jharkhand, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F6CF45] shrink-0" />
                <span>+91 [School Contact Number Placeholder]</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F6CF45] shrink-0" />
                <a
                  href="mailto:contact@langtababa-gyandeep.org"
                  className="hover:text-[#F6CF45] transition-colors break-all"
                >
                  contact@langtababa-gyandeep.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F6CF45] shrink-0" />
                <span>Mon – Sat: 08:00 AM – 02:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar with Back to Top ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 font-[family-name:var(--font-body)]">
          <div>
            © 2013–2026{" "}
            <span className="text-white font-medium">
              Langta Baba Gyandeep Public School
            </span>
            . All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Kharagdiha • Classes 1–10</span>
            <Link
              href="#hero"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#F6CF45] hover:text-[#17265B] text-white text-xs font-bold transition-all"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { type LucideIcon, ArrowRight } from "lucide-react";

export interface BentoCardData {
  id: string;
  colSpan: string;
  variant: "white" | "yellow" | "image" | "navy";
  title: string;
  description: string;
  badge?: string;
  icon?: LucideIcon;
  number?: string;
  footerText?: string;
  footerIcon?: LucideIcon;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function WhyChooseUsCard({ card }: { card: BentoCardData }) {
  const Icon = card.icon;
  const FooterIcon = card.footerIcon;

  // ── 1. Variant: Image Card (e.g. Card 3) ──
  if (card.variant === "image" && card.image) {
    return (
      <div
        className={`${card.colSpan} relative rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card custom-shadow-hover min-h-[280px] flex flex-col justify-end p-6 group`}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17265B] via-[#17265B]/70 to-transparent" />
        <div className="relative z-10 text-white">
          {card.badge && (
            <span className="inline-block px-2.5 py-1 rounded bg-[#F6CF45] text-[#17265B] font-[family-name:var(--font-display)] text-xs font-bold mb-2">
              {card.badge}
            </span>
          )}
          <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-white mb-2">
            {card.title}
          </h3>
          <p className="font-[family-name:var(--font-body)] text-sm text-white/90">
            {card.description}
          </p>
        </div>
      </div>
    );
  }

  // ── 2. Variant: Yellow Card (e.g. Card 2) ──
  if (card.variant === "yellow") {
    return (
      <div
        className={`${card.colSpan} bg-[#F6CF45] text-[#17265B] rounded-3xl p-8 border border-[#F6CF45] custom-shadow-card custom-shadow-hover flex flex-col justify-between`}
      >
        <div>
          {Icon && (
            <div className="w-12 h-12 rounded-2xl bg-white/80 text-[#17265B] flex items-center justify-center mb-6 shadow-sm">
              <Icon className="w-6 h-6" />
            </div>
          )}
          {card.badge && (
            <span className="text-xs font-[family-name:var(--font-display)] font-extrabold tracking-widest uppercase text-[#17265B]/80 block mb-2">
              {card.badge}
            </span>
          )}
          <h3 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-2xl mb-3 text-balance">
            {card.title}
          </h3>
          <p className="font-[family-name:var(--font-body)] text-[#17265B]/90 leading-relaxed text-pretty">
            {card.description}
          </p>
        </div>
        {card.footerText && (
          <div className="mt-8 pt-4 border-t border-[#17265B]/20 flex items-center justify-between text-[#17265B] font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wider">
            <span>{card.footerText}</span>
            {FooterIcon && <FooterIcon className="w-4 h-4" />}
          </div>
        )}
      </div>
    );
  }

  // ── 3. Variant: Navy Horizontal Banner (e.g. Card 6) ──
  if (card.variant === "navy") {
    return (
      <div
        className={`${card.colSpan} bg-[#17265B] text-white rounded-3xl p-8 border border-[#17265B] custom-shadow-card flex flex-col md:flex-row items-center justify-between gap-6`}
      >
        <div className="flex items-center gap-5">
          {Icon && (
            <div className="w-14 h-14 rounded-2xl bg-[#F6CF45] text-[#17265B] flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7" />
            </div>
          )}
          <div>
            {card.badge && (
              <span className="text-xs text-[#F6CF45] font-[family-name:var(--font-display)] font-bold tracking-wider uppercase block mb-1">
                {card.badge}
              </span>
            )}
            <h3 className="font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl text-white text-balance">
              {card.title}
            </h3>
            <p className="font-[family-name:var(--font-body)] text-sm text-white/80 max-w-2xl mt-1 text-pretty">
              {card.description}
            </p>
          </div>
        </div>
        {card.ctaLink && card.ctaText && (
          <Link
            href={card.ctaLink}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#17265B] font-[family-name:var(--font-display)] text-sm font-bold hover:bg-[#F6CF45] transition-colors shadow-sm"
          >
            <span>{card.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    );
  }

  // ── 4. Variant: Default White Card (e.g. Cards 1, 4, 5) ──
  return (
    <div
      className={`${card.colSpan} bg-white rounded-3xl p-7 sm:p-8 border border-[#E2DFC8] custom-shadow-card custom-shadow-hover flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          {card.badge ? (
            <span className="px-3.5 py-1.5 rounded-full bg-[#F8F6EF] text-[#17265B] font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wider">
              {card.badge}
            </span>
          ) : (
            Icon && (
              <div className="w-10 h-10 rounded-xl bg-[#862D48]/10 text-[#862D48] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
            )
          )}
          {card.badge && Icon && (
            <Icon className="w-7 h-7 text-[#F6CF45]" />
          )}
        </div>
        <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-xl sm:text-2xl mb-3 text-balance">
          {card.title}
        </h3>
        <p className="font-[family-name:var(--font-body)] text-sm sm:text-base text-[#4D515C] leading-relaxed text-pretty">
          {card.description}
        </p>
      </div>

      {/* Footer / Number indicator */}
      {(card.footerText || card.number) && (
        <div className="mt-6 pt-5 border-t border-[#E2DFC8] flex items-center justify-between">
          {card.footerText && (
            <div className="flex items-center gap-2 text-xs font-semibold text-[#17265B]">
              {FooterIcon && <FooterIcon className="w-4 h-4 text-[#862D48]" />}
              <span>{card.footerText}</span>
            </div>
          )}
          {card.number && (
            <span className="w-8 h-8 rounded-full bg-[#F8F6EF] text-[#17265B] flex items-center justify-center font-bold text-xs">
              {card.number}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

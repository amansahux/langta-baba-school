import Image from "next/image";
import { type LucideIcon } from "lucide-react";

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  colSpan: string;
  type: "image" | "info";
  badge?: string;
  image?: string;
  icon?: LucideIcon;
  iconBg?: string;
  iconColor?: string;
}

export default function FacilityCard({ facility }: { facility: FacilityItem }) {
  const Icon = facility.icon;

  // ── Info Facility Card (e.g. Clean Drinking Water, Transportation) ──
  if (facility.type === "info") {
    return (
      <div
        className={`${facility.colSpan} bg-white rounded-3xl p-6 border border-[#E2DFC8] custom-shadow-card custom-shadow-hover flex items-start gap-4 group transition-all duration-300`}
      >
        {Icon && (
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${facility.iconBg || "bg-sky-100"} ${facility.iconColor || "text-sky-800"}`}
          >
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-lg mb-1 group-hover:text-[#862D48] transition-colors">
            {facility.title}
          </h3>
          {/* Shows on hover or smoothly expands */}
          <div className="transition-all duration-300">
            <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] leading-relaxed">
              {facility.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Image Facility Card (Classrooms, Computer Lab, Library, Science Lab, Playground) ──
  return (
    <div
      className={`${facility.colSpan} bg-[#F8F6EF] rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card custom-shadow-hover flex flex-col justify-between group transition-all duration-300 hover:border-[#F6CF45] hover:-translate-y-1`}
    >
      <div className="h-60 sm:h-64 overflow-hidden relative w-full">
        {facility.image && (
          <Image
            src={facility.image}
            alt={facility.title}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/90 via-[#17265B]/30 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6 text-white">
          {facility.badge && (
            <span className="inline-block px-3 py-1 bg-[#F6CF45] text-[#17265B] font-[family-name:var(--font-display)] text-xs font-bold rounded-full mb-1">
              {facility.badge}
            </span>
          )}
          <h3 className="font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl text-white">
            {facility.title}
          </h3>
        </div>
      </div>

      {/* Description text visible without hover */}
      <div className="p-5 sm:p-6 bg-white border-t border-[#E2DFC8]/50">
        <p className="font-[family-name:var(--font-body)] text-sm sm:text-base text-[#4D515C] leading-relaxed">
          {facility.description}
        </p>
      </div>
    </div>
  );
}

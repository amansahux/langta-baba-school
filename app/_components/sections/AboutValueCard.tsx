import { type LucideIcon } from "lucide-react";

export interface AboutValueItem {
  title: string;
  badge?: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

export default function AboutValueCard({
  title,
  badge,
  description,
  icon: Icon,
  iconBg,
  iconColor,
}: AboutValueItem) {
  return (
    <div className="bg-[#F8F6EF] border border-[#E2DFC8] rounded-2xl p-5 card-hover group cursor-default transition-all duration-200 hover:border-[#17265B]/40">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-colors duration-200 ${iconBg} ${iconColor}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <p className="font-[family-name:var(--font-display)] font-bold text-[11px] tracking-widest uppercase text-[#862D48] mb-1.5">
        {badge || title}
      </p>
      <p className="font-[family-name:var(--font-body)] text-[#4D515C] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

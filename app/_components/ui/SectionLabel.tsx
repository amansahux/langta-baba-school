import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  color?: "navy" | "maroon" | "yellow";
}

export default function SectionLabel({
  children,
  className = "",
  color = "navy",
}: SectionLabelProps) {
  const dotColor = {
    navy: "bg-[#17265B]",
    maroon: "bg-[#862D48]",
    yellow: "bg-[#F6CF45]",
  }[color];

  const textColor = {
    navy: "text-[#17265B]",
    maroon: "text-[#862D48]",
    yellow: "text-[#F6CF45]",
  }[color];

  return (
    <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor}`} />
      <span
        className={`font-[family-name:var(--font-display)] text-xs font-bold tracking-widest uppercase ${textColor}`}
      >
        {children}
      </span>
    </div>
  );
}

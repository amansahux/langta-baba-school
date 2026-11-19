"use client";

const STATS_ITEMS = [
  { icon: "verified", text: "Established 2013", subtext: "10+ Years of Trust" },
  { icon: "school", text: "Classes 1 to 10", subtext: "Complete Education" },
  { icon: "supervisor_account", text: "Dedicated Faculty", subtext: "Mentorship & Care" },
  { icon: "laptop_chromebook", text: "Computer Lab", subtext: "Digital Learning" },
  { icon: "biotech", text: "Science Lab", subtext: "Practical Science" },
  { icon: "menu_book", text: "Rich Library", subtext: "Story & Reference Books" },
  { icon: "sports_soccer", text: "Playground & Sports", subtext: "Physical Growth" },
  { icon: "water_drop", text: "Clean Drinking Water", subtext: "Hygienic Campus" },
  { icon: "handshake", text: "Affordable Fees", subtext: "Accessible to All" },
];

export default function StatsMarquee() {
  return (
    <section aria-label="Key highlights ticker" className="bg-[#17265B] py-5 overflow-hidden border-y border-[#17265B] relative select-none">
      {/* Edge gradient dissolves */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#17265B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#17265B] to-transparent z-10 pointer-events-none" />

      <div className="marquee-container flex items-center overflow-hidden">
        {/* Track duplicated for seamless 50% translation infinite loop */}
        <div className="marquee-track flex items-center gap-8 pr-8">
          {STATS_ITEMS.map((item, idx) => (
            <div
              key={`item-1-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 transition-colors border border-white/10 shrink-0 text-white"
            >
              <span className="material-symbols-outlined text-[#F6CF45] !text-[20px]" aria-hidden="true">
                {item.icon}
              </span>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-display)] font-bold text-sm text-white whitespace-nowrap leading-tight">
                  {item.text}
                </span>
                <span className="font-[family-name:var(--font-body)] text-[11px] text-[#F6CF45] whitespace-nowrap leading-tight">
                  {item.subtext}
                </span>
              </div>
            </div>
          ))}

          {/* Duplicate set */}
          {STATS_ITEMS.map((item, idx) => (
            <div
              key={`item-2-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 transition-colors border border-white/10 shrink-0 text-white"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined text-[#F6CF45] !text-[20px]" aria-hidden="true">
                {item.icon}
              </span>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-display)] font-bold text-sm text-white whitespace-nowrap leading-tight">
                  {item.text}
                </span>
                <span className="font-[family-name:var(--font-body)] text-[11px] text-[#F6CF45] whitespace-nowrap leading-tight">
                  {item.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

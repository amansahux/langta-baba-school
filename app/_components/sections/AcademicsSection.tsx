import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";

const PROGRAMS = [
  {
    step: "01",
    tag: "FOUNDATIONAL",
    tagBg: "bg-[#F6CF45] text-[#17265B]",
    classes: "Classes 1–5",
    title: "Primary Education",
    quote: '"Building strong foundations through essential concepts, curiosity, and interactive learning."',
    points: [
      "Language literacy & arithmetic fundamentals",
      "Joyful habit formation & discipline",
      "Creative arts and environmental awareness",
    ],
    cardBg: "bg-[#F8F6EF] border-[#E2DFC8]",
    titleColor: "text-[#17265B]",
    textColor: "text-[#4D515C]",
    numberColor: "text-[#17265B]/60",
    inquireText: "Inquire for Classes 1–5",
    linkColor: "text-[#17265B] hover:text-[#862D48]",
  },
  {
    step: "02",
    tag: "DEVELOPMENTAL",
    tagBg: "bg-[#17265B] text-white",
    classes: "Classes 6–8",
    title: "Middle School",
    quote: '"Developing deeper understanding, independent thinking, and subject knowledge."',
    points: [
      "Structured science, mathematics & social sciences",
      "Practical computer lab exposure",
      "Analytical thinking and self-expression",
    ],
    cardBg: "bg-white border-2 border-[#F6CF45]",
    titleColor: "text-[#17265B]",
    textColor: "text-[#4D515C]",
    numberColor: "text-[#17265B]/60",
    inquireText: "Inquire for Classes 6–8",
    linkColor: "text-[#17265B] hover:text-[#862D48]",
  },
  {
    step: "03",
    tag: "ACHIEVEMENT",
    tagBg: "bg-[#F6CF45] text-[#17265B]",
    classes: "Classes 9–10",
    title: "Secondary Education",
    quote: '"Strengthening academic knowledge, problem-solving, and preparation for important academic milestones."',
    points: [
      "Rigorous conceptual exam preparation",
      "Regular assessment & personalized mentoring",
      "Career guidance & secondary graduation confidence",
    ],
    cardBg: "bg-[#17265B] border-[#17265B] text-white",
    titleColor: "text-white",
    textColor: "text-white/80",
    numberColor: "text-white/70",
    inquireText: "Inquire for Classes 9–10",
    linkColor: "text-[#F6CF45] hover:text-white",
  },
];

export default function AcademicsSection() {
  return (
    <section id="academics" className="py-24 bg-white border-y border-[#E2DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel color="maroon" className="mb-3">
            OUR ACADEMIC PROGRAMS
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-3xl sm:text-4xl lg:text-[44px] tracking-tight mb-4 text-balance">
            Every Stage of Learning Matters.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#4D515C] text-base leading-relaxed text-pretty">
            A continuous, thoughtful educational journey designed to build strong cognitive fundamentals, creative inquiry, and secondary examination preparedness.
          </p>
        </div>

        {/* ── 3-Part Progressive Visual Composition ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.step}
              className={`${prog.cardBg} rounded-3xl p-8 border custom-shadow-card flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:shadow-xl`}
            >
              <div>
                <div className="flex items-baseline justify-between mb-6">
                  <span className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-extrabold ${prog.numberColor}`}>
                    {prog.step}
                  </span>
                  <span className={`px-3.5 py-1 ${prog.tagBg} font-[family-name:var(--font-display)] text-xs font-bold rounded-full`}>
                    {prog.tag}
                  </span>
                </div>

                <div className={`font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl tracking-tight mb-1 ${prog.step === "03" ? "text-[#F6CF45]" : "text-[#17265B]"}`}>
                  {prog.classes}
                </div>
                <h3 className={`font-[family-name:var(--font-display)] font-bold text-lg mb-4 ${prog.titleColor}`}>
                  {prog.title}
                </h3>

                <p className={`font-[family-name:var(--font-body)] text-sm leading-relaxed mb-6 italic ${prog.textColor}`}>
                  {prog.quote}
                </p>

                <ul className={`space-y-3 text-sm ${prog.textColor}`}>
                  {prog.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#F6CF45] !text-[20px] shrink-0 mt-0.5" aria-hidden="true">
                        check_circle
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mt-8 pt-6 border-t ${prog.step === "03" ? "border-white/20" : "border-[#E2DFC8]"}`}>
                <Link
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] font-bold text-sm transition-colors ${prog.linkColor}`}
                >
                  <span>{prog.inquireText}</span>
                  <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

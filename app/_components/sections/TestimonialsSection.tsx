import SectionLabel from "../ui/SectionLabel";

const TESTIMONIALS = [
  {
    quote:
      "Langta Baba Gyandeep Public School provides such a disciplined and encouraging atmosphere. My son has gained immense confidence in mathematics and science under the guidance of the dedicated teachers.",
    author: "Ramesh Chandra Verma",
    relation: "Parent of Class 8 Student",
    rating: 5,
  },
  {
    quote:
      "The teachers here genuinely care about every child's progress. The foundational learning in English, Hindi, and arithmetic has been outstanding. We could not have asked for a better school in Kharagdih.",
    author: "Sunita Devi",
    relation: "Parent of Class 4 Student",
    rating: 5,
  },
  {
    quote:
      "Studying here shaped not only my academic basics but also my character and values. The teachers are always approachable, patient, and focused on helping every student understand concepts thoroughly.",
    author: "Aman Kumar",
    relation: "Class 10 Student (Batch 2024)",
    rating: 5,
  },
  {
    quote:
      "A true blessing for families in Kharagdih and neighboring villages. High quality, value-driven schooling with dedicated laboratory sessions, sports, and affordable fees for all parents.",
    author: "Manoj Kumar Sahu",
    relation: "Community Member & Guardian",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white border-y border-[#E2DFC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel color="maroon" className="mb-3">
            VOICES OF OUR COMMUNITY
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-3xl sm:text-4xl lg:text-[44px] tracking-tight mb-4 text-balance">
            Trusted by Parents, Loved by Students.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#4D515C] leading-relaxed text-pretty">
            Hear from the families and students whose educational journeys have been shaped by Langta Baba Gyandeep Public School.
          </p>
        </div>

        {/* ── Testimonials Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={idx}
              className="bg-[#F8F6EF] rounded-3xl p-8 border border-[#E2DFC8] custom-shadow-card flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#F6CF45]"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#F6CF45]" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined !text-[20px] text-[#F6CF45]">
                      star
                    </span>
                  ))}
                </div>

                {/* Quote text */}
                <p className="font-[family-name:var(--font-body)] text-base text-[#252A35] leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author attribution */}
              <div className="pt-5 border-t border-[#E2DFC8] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#17265B] text-[#F6CF45] flex items-center justify-center font-[family-name:var(--font-display)] font-extrabold text-sm shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-sm text-[#17265B] leading-tight">
                    {t.author}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[#862D48] font-medium leading-tight mt-0.5">
                    {t.relation}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

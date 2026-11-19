import Image from "next/image";
import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#F8F6EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="max-w-2xl mb-14">
          <SectionLabel color="yellow" className="mb-3">
            WHY FAMILIES CHOOSE US
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-3xl sm:text-4xl lg:text-[44px] leading-tight text-balance">
            An Environment Where Young Minds Grow.
          </h2>
        </div>

        {/* ── Asymmetric Bento Grid (12 Columns) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Large 2-column feature (Span 7) - Supportive Learning Environment */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#E2DFC8] custom-shadow-card custom-shadow-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F8F6EF] text-[#17265B] font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wider">
                  CORE COMMITMENT
                </span>
                <span
                  className="material-symbols-outlined text-[#F6CF45]"
                  style={{ fontSize: 36 }}
                  aria-hidden="true"
                >
                  volunteer_activism
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-2xl mb-3 text-balance">
                Supportive Learning Environment
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#4D515C] leading-relaxed max-w-xl text-pretty">
                A welcoming atmosphere that encourages students to participate, explore, and learn. Teachers foster open inquiry where questions are celebrated and each child receives patient, individualized encouragement.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E2DFC8] flex items-center justify-between">
              <span className="font-[family-name:var(--font-body)] text-sm font-medium text-[#4D515C]">
                Cultivating confidence in every classroom
              </span>
              <span className="w-8 h-8 rounded-full bg-[#F8F6EF] text-[#17265B] flex items-center justify-center font-bold text-xs">
                01
              </span>
            </div>
          </div>

          {/* Card 2: Vertically Oriented Yellow Accent Feature (Span 5) - Dedicated Teachers */}
          <div className="lg:col-span-5 bg-[#F6CF45] text-[#17265B] rounded-3xl p-8 border border-[#F6CF45] custom-shadow-card custom-shadow-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/80 text-[#17265B] flex items-center justify-center mb-6 shadow-sm">
                <span
                  className="material-symbols-outlined text-[#17265B]"
                  style={{ fontSize: 28 }}
                  aria-hidden="true"
                >
                  supervisor_account
                </span>
              </div>
              <span className="text-xs font-[family-name:var(--font-display)] font-extrabold tracking-widest uppercase text-[#17265B]/80 block mb-2">
                Faculty Mentorship
              </span>
              <h3 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-2xl mb-3 text-balance">
                Dedicated Teachers
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#17265B]/90 leading-relaxed text-pretty">
                Teachers who guide students throughout their educational journey with subject mastery, warmth, and enduring ethical grounding.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#17265B]/20 flex items-center justify-between text-[#17265B] font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wider">
              <span>Passionate Educators</span>
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                stars
              </span>
            </div>
          </div>

          {/* Card 3: Image-Backed Feature Panel (Span 4) - Student Development */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card custom-shadow-hover min-h-[280px] flex flex-col justify-end p-6 group">
            <Image
              src="https://lh3.googleusercontent.com/aida/ALJJyrAB2FJgrH794PizLNbdiZGulgcORsJu2R56WE1M8_N7tqOvB09c38cxz7jIaFyijmLhpbpH62YbYi3LD2MabVT-eWxUQeIAv3YNU_KOdVGPgzm1pmBsDjGvQxAk2E7jySXjCa8tYszQCp5OeR9VyiV8POWt9mWTm8TISIl9OHyFpj2wWhWQmWBHtmb_foc6wZO59ivVD25s5tUL1cmwNGIsdokJh4BfTVAXqWw9WPA9XrztLN9nzM9hWK5HrhHGY2eOI1HTWJlhjMH4fsA"
              alt="Student development activities"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17265B] via-[#17265B]/70 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="inline-block px-2.5 py-1 rounded bg-[#F6CF45] text-[#17265B] font-[family-name:var(--font-display)] text-xs font-bold mb-2">
                HOLISTIC FOCUS
              </span>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-white mb-2">
                Student Development
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-white/90">
                Encouraging academic learning alongside personal growth and self-assurance.
              </p>
            </div>
          </div>

          {/* Card 4: Horizontal Clean Feature Panel (Span 4) - Discipline & Values */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-[#E2DFC8] custom-shadow-card custom-shadow-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#862D48]/10 text-[#862D48] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  balance
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-xl mb-2">
                Discipline &amp; Values
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] leading-relaxed">
                Promoting responsibility, mutual respect, humility, and positive daily habits that prepare children for life beyond textbooks.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#862D48]">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                verified_user
              </span>
              <span>Character-First Curriculum</span>
            </div>
          </div>

          {/* Card 5: Horizontal Clean Feature Panel (Span 4) - Affordable Education */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-[#E2DFC8] custom-shadow-card custom-shadow-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6CF45]/30 text-[#17265B] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  handshake
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-xl mb-2">
                Affordable Education
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] leading-relaxed">
                Making high-quality schooling accessible and realistic for families in Kharagdih and the surrounding rural community.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#17265B]">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                public
              </span>
              <span>Community-Centric Access</span>
            </div>
          </div>

          {/* Card 6: Full Width Compact Feature Panel (Span 12) - Learning Through Activities */}
          <div className="lg:col-span-12 bg-[#17265B] text-white rounded-3xl p-8 border border-[#17265B] custom-shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#F6CF45] text-[#17265B] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                  psychology
                </span>
              </div>
              <div>
                <span className="text-xs text-[#F6CF45] font-[family-name:var(--font-display)] font-bold tracking-wider uppercase block mb-1">
                  Experiential Pedagogy
                </span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl text-white text-balance">
                  Learning Through Activities
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-white/80 max-w-2xl mt-1 text-pretty">
                  Encouraging regular participation, creative expression, sportsmanship, and practical learning experiences that make study enjoyable.
                </p>
              </div>
            </div>
            <Link
              href="#facilities"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#17265B] font-[family-name:var(--font-display)] text-sm font-bold hover:bg-[#F6CF45] transition-colors shadow-sm"
            >
              <span>See Campus Spaces</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

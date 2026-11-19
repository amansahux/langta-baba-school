import Image from 'next/image';
import SectionLabel from '../ui/SectionLabel';

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="py-24 bg-[#F8F6EF] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="max-w-2xl mb-14">
          <SectionLabel color="navy" className="mb-4">
            Why Families Choose Us
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-[#17265B] leading-tight">
            An Environment Where{' '}
            <span className="relative">
              Young Minds
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 w-full h-[6px] rounded-full bg-[#F6CF45]/70"
              />
            </span>{' '}
            Grow.
          </h2>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* Card 1 — Supportive Learning Environment (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white card-shadow card-hover rounded-3xl p-8 flex flex-col">
            {/* Top */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17265B]/8 border border-[#17265B]/12 text-[10px] font-bold tracking-widest uppercase text-[#17265B] font-[family-name:var(--font-body)]">
                Core Commitment
              </span>
              <span
                className="material-symbols-outlined text-[#F6CF45] flex-shrink-0"
                style={{ fontSize: 40 }}
                aria-hidden="true"
              >
                volunteer_activism
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#17265B] mb-3">
              Supportive Learning Environment
            </h3>
            <p className="font-[family-name:var(--font-body)] text-[#4D515C] leading-relaxed flex-1">
              We foster a warm, inclusive classroom culture where every student feels seen, valued, and encouraged. Our teachers take the time to understand each child's unique learning pace, ensuring no one is left behind and every milestone is celebrated.
            </p>

            {/* Bottom divider row */}
            <div className="mt-6 pt-5 border-t border-[#E2DFC8] flex items-center justify-between">
              <span className="font-[family-name:var(--font-body)] text-[#4D515C] text-sm">
                Cultivating confidence in every classroom
              </span>
              <span className="w-9 h-9 rounded-full bg-[#17265B] flex items-center justify-center text-white text-xs font-bold font-[family-name:var(--font-display)] flex-shrink-0">
                01
              </span>
            </div>
          </div>

          {/* Card 2 — Dedicated Teachers (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-[#F6CF45] rounded-3xl p-8 flex flex-col">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center mb-5 flex-shrink-0">
              <span
                className="material-symbols-outlined text-[#17265B]"
                style={{ fontSize: 28 }}
                aria-hidden="true"
              >
                supervisor_account
              </span>
            </div>

            <span className="text-[10px] tracking-widest uppercase font-bold font-[family-name:var(--font-body)] text-[#17265B]/70 mb-3">
              Faculty Mentorship
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#17265B] mb-3">
              Dedicated Teachers
            </h3>
            <p className="font-[family-name:var(--font-body)] text-[#17265B]/80 leading-relaxed flex-1">
              Our faculty brings genuine passion for teaching. Beyond delivering curricula, they serve as mentors who inspire curiosity, model integrity, and build meaningful relationships with every student in their care.
            </p>

            {/* Bottom */}
            <div className="mt-6 pt-5 border-t border-[#17265B]/15 flex items-center gap-2">
              <span className="font-[family-name:var(--font-body)] text-[#17265B] text-sm font-semibold flex-1">
                Passionate Educators
              </span>
              <span
                className="material-symbols-outlined text-[#17265B]"
                style={{ fontSize: 20 }}
                aria-hidden="true"
              >
                stars
              </span>
            </div>
          </div>

          {/* Card 3 — Student Development (image-backed, lg:col-span-4) */}
          <div className="lg:col-span-4 group relative rounded-3xl overflow-hidden min-h-[280px] flex flex-col justify-end">
            {/* Background image */}
            <Image
              src="https://lh3.googleusercontent.com/aida/ALJJyrAB2FJgrH794PizLNbdiZGulgcORsJu2R56WE1M8_N7tqOvB09c38cxz7jIaFyijmLhpbpH62YbYi3LD2MabVT-eWxUQeIAv3YNU_KOdVGPgzm1pmBsDjGvQxAk2E7jySXjCa8tYszQCp5OeR9VyiV8POWt9mWTm8TISIl9OHyFpj2wWhWQmWBHtmb_foc6wZO59ivVD25s5tUL1cmwNGIsdokJh4BfTVAXqWw9WPA9XrztLN9nzM9hWK5HrhHGY2eOI1HTWJlhjMH4fsA"
              alt="Students engaged in holistic development activities"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(10,15,35,0.88) 0%, rgba(10,15,35,0.4) 50%, transparent 100%)',
              }}
              aria-hidden="true"
            />
            {/* Content */}
            <div className="relative z-10 p-6">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F6CF45] text-[#17265B] text-[10px] font-bold tracking-widest uppercase font-[family-name:var(--font-body)] mb-3">
                Holistic Focus
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-2">
                Student Development
              </h3>
              <p className="font-[family-name:var(--font-body)] text-white/80 text-sm leading-relaxed">
                Beyond academics, we nurture creativity, teamwork, and character through co-curricular activities that shape well-rounded individuals.
              </p>
            </div>
          </div>

          {/* Card 4 — Discipline & Values (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 flex flex-col card-shadow card-hover">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#862D48]/10 flex items-center justify-center mb-5 flex-shrink-0">
              <span
                className="material-symbols-outlined text-[#862D48]"
                style={{ fontSize: 24 }}
                aria-hidden="true"
              >
                balance
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#17265B] mb-3">
              Discipline &amp; Values
            </h3>
            <p className="font-[family-name:var(--font-body)] text-[#4D515C] leading-relaxed text-sm flex-1">
              Respect, responsibility, and honesty are woven into daily school life. Our structured yet caring environment helps students internalise values that guide them far beyond the classroom.
            </p>

            {/* Bottom */}
            <div className="mt-5 pt-4 border-t border-[#E2DFC8] flex items-center gap-2">
              <span
                className="material-symbols-outlined text-[#862D48]"
                style={{ fontSize: 18 }}
                aria-hidden="true"
              >
                verified_user
              </span>
              <span className="font-[family-name:var(--font-body)] text-[#862D48] text-sm font-semibold">
                Character-First Curriculum
              </span>
            </div>
          </div>

          {/* Card 5 — Affordable Education (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 flex flex-col card-shadow card-hover">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#F6CF45]/30 flex items-center justify-center mb-5 flex-shrink-0">
              <span
                className="material-symbols-outlined text-[#17265B]"
                style={{ fontSize: 24 }}
                aria-hidden="true"
              >
                handshake
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#17265B] mb-3">
              Affordable Education
            </h3>
            <p className="font-[family-name:var(--font-body)] text-[#4D515C] leading-relaxed text-sm flex-1">
              We believe quality education should be within reach of every family in Kharagdih. Our fee structure is designed to be accessible, so financial barriers never stand between a child and their future.
            </p>

            {/* Bottom */}
            <div className="mt-5 pt-4 border-t border-[#E2DFC8] flex items-center gap-2">
              <span
                className="material-symbols-outlined text-[#17265B]"
                style={{ fontSize: 18 }}
                aria-hidden="true"
              >
                public
              </span>
              <span className="font-[family-name:var(--font-body)] text-[#17265B] text-sm font-semibold">
                Community-Centric Access
              </span>
            </div>
          </div>

          {/* Card 6 — Rooted in Kharagdih (lg:col-span-12, navy, horizontal) */}
          <div className="lg:col-span-12 bg-[#17265B] rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-8">

              {/* Left text block */}
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] tracking-widest uppercase font-bold font-[family-name:var(--font-body)] text-[#F6CF45] mb-3">
                  Community Pride
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white mb-3">
                  Rooted in Kharagdih
                </h3>
                <p className="font-[family-name:var(--font-body)] text-white/80 leading-relaxed max-w-lg">
                  Founded in 2013 to serve the families of Kharagdih, we remain deeply connected to our community. Every decision we make is guided by the trust our families place in us and the shared vision of a brighter local future.
                </p>
              </div>

              {/* Right stats row */}
              <div className="flex flex-col sm:flex-row md:flex-row items-stretch sm:items-center gap-0 md:flex-shrink-0 divide-y sm:divide-y-0 sm:divide-x divide-white/15 rounded-2xl overflow-hidden border border-white/10">

                {/* Stat 1 — Est. 2013 */}
                <div className="flex items-center gap-3 px-6 py-4 sm:py-5">
                  <span
                    className="material-symbols-outlined text-[#F6CF45] flex-shrink-0"
                    style={{ fontSize: 28 }}
                    aria-hidden="true"
                  >
                    calendar_today
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-white font-bold text-lg leading-tight">
                      Est. 2013
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-white/60 text-xs">
                      Year Founded
                    </p>
                  </div>
                </div>

                {/* Stat 2 — Classes 1–10 */}
                <div className="flex items-center gap-3 px-6 py-4 sm:py-5">
                  <span
                    className="material-symbols-outlined text-[#F6CF45] flex-shrink-0"
                    style={{ fontSize: 28 }}
                    aria-hidden="true"
                  >
                    school
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-white font-bold text-lg leading-tight">
                      Classes 1–10
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-white/60 text-xs">
                      Academic Range
                    </p>
                  </div>
                </div>

                {/* Stat 3 — Kharagdih */}
                <div className="flex items-center gap-3 px-6 py-4 sm:py-5">
                  <span
                    className="material-symbols-outlined text-[#F6CF45] flex-shrink-0"
                    style={{ fontSize: 28 }}
                    aria-hidden="true"
                  >
                    location_on
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-white font-bold text-lg leading-tight">
                      Kharagdih
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-white/60 text-xs">
                      Our Home
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

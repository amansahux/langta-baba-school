import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-white relative border-y border-[#E2DFC8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Photo Composition ── */}
          <div className="lg:col-span-6 relative">
            {/* EST. 2013 Badge */}
            <div className="absolute -top-4 -left-4 z-20 flex items-center gap-2 bg-[#F6CF45] text-[#17265B] px-3.5 py-2 rounded-xl shadow-lg">
              <span className="material-symbols-outlined text-[18px]">
                verified
              </span>
              <span className="font-[family-name:var(--font-display)] font-extrabold text-sm tracking-wider uppercase leading-none">
                Est. 2013
              </span>
            </div>

            {/* Main Large Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[430px]">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrCAPnDE4wUCg5ctEr1aD3M-0575wLbrYvx_wwshnPZfVSZHmGAoP1o24Um5gj-O61MCy74FlF8yFJnu7TNH2bpnphEK6aC8qAgXFYem2qX9Ysydeds-loRzotRGrlZHj8o681hrPrjksmqdnmrgsi7NIUj3LjEvjS3IN_tngrrbs9rps2yhEWnUZFAuNH6fLVYSS2nh4lMG3HWY5QPdLuqgzU4ra716b9rlMQLpJbEKxUJCbRxErAGdH6m5WRzMvAvoKpNL_YRBBnDu6HjGQA"
                alt="Langta Baba Gyandeep Public School students in classroom"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Overlapping Small Photo */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-10 w-56 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrAB2FJgrH794PizLNbdiZGulgcORsJu2R56WE1M8_N7tqOvB09c38cxz7jIaFyijmLhpbpH62YbYi3LD2MabVT-eWxUQeIAv3YNU_KOdVGPgzm1pmBsDjGvQxAk2E7jySXjCa8tYszQCp5OeR9VyiV8POWt9mWTm8TISIl9OHyFpj2wWhWQmWBHtmb_foc6wZO59ivVD25s5tUL1cmwNGIsdokJh4BfTVAXqWw9WPA9XrztLN9nzM9hWK5HrhHGY2eOI1HTWJlhjMH4fsA"
                alt="School children learning together"
                fill
                className="object-cover object-center"
                sizes="224px"
              />
            </div>
          </div>

          {/* ── Right Column: Content ── */}
          <div className="lg:col-span-6 pb-8 sm:pb-0">
            <SectionLabel color="maroon">Get to Know Us</SectionLabel>

            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-[28px] sm:text-[36px] lg:text-[38px] leading-[1.2] mb-5">
              Growing Together, Learning for a Brighter Tomorrow.
            </h2>

            <p className="font-[family-name:var(--font-body)] text-[#4D515C] text-base leading-relaxed mb-8">
              Langta Baba Gyandeep Public School has been a cornerstone of
              education in Kharagdiha since 2013. We believe every child
              deserves access to quality learning — a space where curiosity is
              celebrated, character is built, and potential is fully realised.
              Our teachers are more than educators; they are mentors who guide
              students from Class&nbsp;1 through Class&nbsp;10 with patience,
              dedication, and care.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Vision Card */}
              <div className="bg-[#F8F6EF] border border-[#E2DFC8] rounded-2xl p-5 card-hover group cursor-default">
                <div className="w-11 h-11 rounded-xl bg-[#F6CF45]/30 flex items-center justify-center mb-3 group-hover:bg-[#F6CF45]/50 transition-colors duration-200">
                  <span className="material-symbols-outlined text-[22px] text-[#17265B]">
                    visibility
                  </span>
                </div>
                <p className="font-[family-name:var(--font-display)] font-bold text-[11px] tracking-widest uppercase text-[#862D48] mb-1.5">
                  Our Vision
                </p>
                <p className="font-[family-name:var(--font-body)] text-[#4D515C] text-sm leading-relaxed">
                  To be a beacon of holistic education — developing confident,
                  compassionate leaders who uplift their communities and nation.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-[#F8F6EF] border border-[#E2DFC8] rounded-2xl p-5 card-hover group cursor-default">
                <div className="w-11 h-11 rounded-xl bg-[#17265B]/10 flex items-center justify-center mb-3 group-hover:bg-[#17265B]/20 transition-colors duration-200">
                  <span className="material-symbols-outlined text-[22px] text-[#17265B]">
                    flag
                  </span>
                </div>
                <p className="font-[family-name:var(--font-display)] font-bold text-[11px] tracking-widest uppercase text-[#862D48] mb-1.5">
                  Our Mission
                </p>
                <p className="font-[family-name:var(--font-body)] text-[#4D515C] text-sm leading-relaxed">
                  To provide affordable, value-driven education through skilled
                  teaching, strong ethics, and a nurturing environment for every
                  student.
                </p>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="flex items-start gap-3 pt-4 border-t border-[#E2DFC8]">
              <span className="material-symbols-outlined text-[26px] text-[#F6CF45] mt-0.5 flex-shrink-0">
                workspace_premium
              </span>
              <p className="font-[family-name:var(--font-body)] text-[#4D515C] text-sm leading-relaxed">
                Proudly serving the Kharagdiha community with quality,
                affordable education since{" "}
                <span className="font-semibold text-[#17265B]">2013</span> —
                building brighter futures, one student at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

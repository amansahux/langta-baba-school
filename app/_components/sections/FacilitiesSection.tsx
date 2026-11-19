import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

export default function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="py-24 bg-white border-y border-[#E2DFC8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="max-w-2xl mb-14">
          <SectionLabel color="maroon" className="mb-3">
            LEARNING BEYOND THE CLASSROOM
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-3xl sm:text-4xl lg:text-[44px] tracking-tight mb-4 text-balance">
            Spaces That Support Better Learning.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[#4D515C] text-pretty">
            Essential campus facilities providing students with clean,
            supportive, and stimulating spaces to study, explore, and stay
            healthy.
          </p>
        </div>

        {/* ── Asymmetric Bento Grid of Facilities ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* 1. Large Feature Panel: Modern Classrooms (Span 7) */}
          <div className="lg:col-span-7 bg-[#F8F6EF] rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card flex flex-col justify-between group">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrDAQYbwMMvdlNMN04FsUVN4A0iuBIKKCYteS1uHeIQ-tYEO_0IO2tQXBbwXA40IyHfiSKdwipSAJYBFcpOVQAGYoudEv3bCh0Esloq8XUIe6oS1RypjjXsPt1yVQ0PRk0I-_yflqOs1LKIvgswgzXbzNFNC7TCDeXR2fyZ_8TSnaj9RvI_4ryj1z5mVxJD0pkTIt28SY4ilaQnKC8PcN-lQOy4YtMjjK-JyE311GcLSmebW_E4mxAawokXZQ-NqCb30kg4YeQ"
                alt="Well-lit spacious classroom desks at Langta Baba Gyandeep Public School"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-white">
                <span className="px-3 py-1 bg-[#F6CF45] text-[#17265B] font-[family-name:var(--font-display)] text-xs font-bold rounded-full">
                  CAMPUS CORE
                </span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl text-white mt-1">
                  Classrooms
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="font-[family-name:var(--font-body)] text-sm sm:text-base text-[#252A35] leading-relaxed">
                Bright, well-ventilated, and organized classrooms equipped with
                student desks and supportive instructional boards to ensure
                focused learning every school day.
              </p>
            </div>
          </div>

          {/* 2. Medium Panel: Computer Laboratory (Span 5) */}
          <div className="lg:col-span-5 bg-[#F8F6EF] rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card flex flex-col justify-between group">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrDQgs1HK62ByTC1-sdTX8JwAenbCh4uaevkz6FK_lR7FHDhkKTuuWCQfbMaymjtpR9Jp724qfnw6SSs9HeankmnV4Iyr0iuTnZmdG0BpB7RHG7lP9ckNy3WfjJCmCNBtjuCJxtV36jC1F_Vy-Vcohp0E15hpOcVaEdMa4zJtHbL9hZVwkKp9nHMh7cHnep841izf8RRguMQIDfgEXCXNPl6s-4EwSuEVu5dVu8RrCwFdlHci_eyRlxpzJ7RX1wMWnTq7r-J_VZVGfY"
                alt="Computer laboratory workstations"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-white">
                <span className="px-3 py-1 bg-white text-[#17265B] font-[family-name:var(--font-display)] text-xs font-bold rounded-full">
                  DIGITAL LITERACY
                </span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-white mt-1">
                  Computer Laboratory
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] leading-relaxed">
                Equipped computer terminals providing essential digital
                awareness, keyboard skills, and computer application training.
              </p>
            </div>
          </div>

          {/* 3. Panel: Library (Span 4) */}
          <div className="lg:col-span-4 bg-[#F8F6EF] rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card flex flex-col justify-between group">
            <div className="h-52 overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrC8_mcGqTT63bLwQtQLWq7lhAq02i9LhmHZrINrtLY2rlHthDq4HkwWIbzbPPdD-kZ6gWey2PkQUoc1WabpNjREcx2uWVHk64CHYxVHhmYL56Qykd5Rs9moOlZsM02zr274JXb7_AH_iXEJAqEf0lLYXnJpKvl5s45cVb6LPZ5S9ZpmNXxv6TpGlIsN55ZgGsXbupKrYil6c3rUzLZqKGB8HtA04n7taJjceIji0UYilffMPyhiNPKFG_n9YleIVKKOECk"
                alt="School library study space"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-white">
                  School Library
                </h3>
              </div>
            </div>
            <div className="p-5">
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] leading-relaxed">
                Curated collection of academic textbooks, reference materials,
                children&apos;s storybooks, and quiet reading tables.
              </p>
            </div>
          </div>

          {/* 4. Panel: Science Laboratory (Span 4) */}
          <div className="lg:col-span-4 bg-[#F8F6EF] rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card flex flex-col justify-between group">
            <div className="h-52 overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrB583ncE4fhoEaCflm3NlVUD0loS030rUAoP6iK_ZpBb9SF23r9J7FjBREXeHsi2elYXfden58As7Xowfn38LYhkgpNR81NBNRoSoLEsoih5A3sdZRf3WPAPfg4Nl21lCFdv8xExLnzpyEHHsxz5-rKzqVYbmBVzpvwnTbESBHq9npZ0_-MpEhoKuYUALefFHRoqy-QB1HdqxdX1_HHqlNqp246Ux_NpuLRGeEYbpwykpBomz0FoPQcepCas1Cz58ARESvmCIDsSw"
                alt="Science practical lab equipment"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-white">
                  Science Laboratory
                </h3>
              </div>
            </div>
            <div className="p-5">
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] leading-relaxed">
                Practical apparatus, charts, and demonstration kits for science
                experiments aligned with curriculum requirements.
              </p>
            </div>
          </div>

          {/* 5. Panel: Playground (Span 4) */}
          <div className="lg:col-span-4 bg-[#F8F6EF] rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card flex flex-col justify-between group">
            <div className="h-52 overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrAFyoC0_lUuMKk7rPv3HIigdwG9wDpBzLZaaseulwX4mZQhk8Fb4zuwGcJSwpt8JJy-5qOWQ3A5-zqGZFdA4_wPeQFcYxjAT0VhqJxJsqQZwNaTlllLM5gBswr7joXjGAitz5Qf4OTHUXtOResPyJ2thlE5-ZHXuDRYKP2-laUtMCCVHV44yZbC1q1L2z9mBJ1LSIkWnSGSw0jst92rt0jGwlarxzYppeKrBPEqupWO4DUw6MzS54_0mzGoa-36F646EAmp_aYS"
                alt="School outdoor playground"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-white">
                  Playground
                </h3>
              </div>
            </div>
            <div className="p-5">
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] leading-relaxed">
                Open outdoor ground for physical education, morning assembly,
                sports drills, and joyful lunchtime recreation.
              </p>
            </div>
          </div>

          {/* 6 & 7. Information Panels: Clean Drinking Water & Transportation (Span 6 each) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-[#E2DFC8] custom-shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
              <span
                className="material-symbols-outlined text-2xl"
                aria-hidden="true"
              >
                water_drop
              </span>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-lg mb-1">
                Clean Drinking Water
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] leading-relaxed">
                Filtered and hygienic potable drinking water stations situated
                across campus for students and staff safety.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-[#E2DFC8] custom-shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <span
                className="material-symbols-outlined text-2xl"
                aria-hidden="true"
              >
                directions_bus
              </span>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-lg mb-1">
                Transportation Assistance
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] leading-relaxed">
                Coordinated local transportation assistance ensuring safe
                commute for students from nearby Kharagdiha settlements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

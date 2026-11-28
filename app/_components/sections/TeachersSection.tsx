import Image from "next/image";
import { Pointer } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

export interface Teacher {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  tagBg: string;
}

const TEACHERS: Teacher[] = [
  {
    id: "principal",
    name: "Principal",
    role: "Head of Institution",
    department: "School Administration & Vision",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrAZ53hyD98OzKjd0yk-tj7G_tc_W-n9vH2O-1Gj0GpvbFJmOAHj7kfo5sbeTSzIK3eRjK9e0Okaw1_IJkHXjvqNZE_78rdvwv610sNyPstrGU2LnyGEWXg08yuxHFPj1kJMrIvKIxP5mFEd4-eodOCiQhC8LPE3u0ZE8Jpua5T0TUDXL_OGxWF_H55KQU0tFzg3vaLtu7LuSCn9a8e68LHKXBJ9LwL5AApKKs3JQsRVtbxKCGYjYaEXUIG7nlKlkzlogvBa",
    tagBg: "bg-[#F6CF45] text-[#17265B]",
  },
  {
    id: "math",
    name: "Senior Teacher",
    role: "Senior Faculty",
    department: "Mathematics & Logic",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrCOAHx0i5NvbPfV3hR24EvTC3x43KHfSYR8axIe1ValfKIHW7UIJ8pw96o08yLuX0QPbSlielOSB-Zi1Vw5BoIW8-mSwCahvd4B4GFyoFUcUDGuBrfMxu101cWVroOxsj9Iqn6Jmuu4C-f4vkphq1ZFe0VvKOMcpBaQ8uMJX0v6gKXYbD8TwJtHKHrIZfBfKcz5Gnss8BlgJHhQhr9L8nNdaIbIZ7ZO0TTTWL4axyUCCxIiF1AW7FSDFAj9SaDjAVhtzhpZNqmG",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
  {
    id: "science",
    name: "Senior Teacher",
    role: "Senior Faculty",
    department: "General Science & Biology",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrCHch9Y9DjKFkGE7ffowUcubcp4Mx-Ay2epG6ta7ogRCmjlYVnoT_45mN4eHqrX6zzMiM2t7hu7k_ix0hdpIW6E2x5DC1WJiqCuZuL1k12DReesSj0VRHKLdgEyP-KW5yM7lGWFk6XHBf3u6aaVYDoruIjHqB0mUQChghC1SkjJTJU1WoKakGW2cZGQn5TIrdiip6JaCsAKik7Fcvd1uI5kZw90ZRhkp-wfovixXGlt5MF2FlMgl_Hm-0ZkLOBHvT2XRBI",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
  {
    id: "primary",
    name: "Primary Educator",
    role: "Primary Section",
    department: "Foundational Learning & Arts",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrCG3LT5Bqy8NzwTbNc1-XdectPnZZ8YUmd8hsYKW6mz1HvKa6oiOHqJnYaxk_wbKoh3TDM9O7ynvjCx7g8WJlmgj06Q82fBt1SXHH8PmoP4nqbhB11nLMbMccg4cztgZb-Q8rF3WGaRCByWWtoozP8k26S5chRUJbIvAA1sUFBzEKpEEP2WJ54c8Xp89xCdCBMqxruSENJ1OXdtYU_f9DJoBotKDCdnc8p7--3EqC7JiHGHiKFU7aKMiUC0pPi8JSrbxQM",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
  {
    id: "english",
    name: "Senior Teacher",
    role: "Senior Faculty",
    department: "English & Communication",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrCOAHx0i5NvbPfV3hR24EvTC3x43KHfSYR8axIe1ValfKIHW7UIJ8pw96o08yLuX0QPbSlielOSB-Zi1Vw5BoIW8-mSwCahvd4B4GFyoFUcUDGuBrfMxu101cWVroOxsj9Iqn6Jmuu4C-f4vkphq1ZFe0VvKOMcpBaQ8uMJX0v6gKXYbD8TwJtHKHrIZfBfKcz5Gnss8BlgJHhQhr9L8nNdaIbIZ7ZO0TTTWL4axyUCCxIiF1AW7FSDFAj9SaDjAVhtzhpZNqmG",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
  {
    id: "social-studies",
    name: "Senior Teacher",
    role: "Senior Faculty",
    department: "Social Sciences & History",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrAZ53hyD98OzKjd0yk-tj7G_tc_W-n9vH2O-1Gj0GpvbFJmOAHj7kfo5sbeTSzIK3eRjK9e0Okaw1_IJkHXjvqNZE_78rdvwv610sNyPstrGU2LnyGEWXg08yuxHFPj1kJMrIvKIxP5mFEd4-eodOCiQhC8LPE3u0ZE8Jpua5T0TUDXL_OGxWF_H55KQU0tFzg3vaLtu7LuSCn9a8e68LHKXBJ9LwL5AApKKs3JQsRVtbxKCGYjYaEXUIG7nlKlkzlogvBa",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
  {
    id: "computer",
    name: "Faculty Educator",
    role: "Computer Department",
    department: "Computer Studies & IT",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrCHch9Y9DjKFkGE7ffowUcubcp4Mx-Ay2epG6ta7ogRCmjlYVnoT_45mN4eHqrX6zzMiM2t7hu7k_ix0hdpIW6E2x5DC1WJiqCuZuL1k12DReesSj0VRHKLdgEyP-KW5yM7lGWFk6XHBf3u6aaVYDoruIjHqB0mUQChghC1SkjJTJU1WoKakGW2cZGQn5TIrdiip6JaCsAKik7Fcvd1uI5kZw90ZRhkp-wfovixXGlt5MF2FlMgl_Hm-0ZkLOBHvT2XRBI",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
  {
    id: "hindi",
    name: "Faculty Educator",
    role: "Language Department",
    department: "Hindi & Sanskrit",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrCG3LT5Bqy8NzwTbNc1-XdectPnZZ8YUmd8hsYKW6mz1HvKa6oiOHqJnYaxk_wbKoh3TDM9O7ynvjCx7g8WJlmgj06Q82fBt1SXHH8PmoP4nqbhB11nLMbMccg4cztgZb-Q8rF3WGaRCByWWtoozP8k26S5chRUJbIvAA1sUFBzEKpEEP2WJ54c8Xp89xCdCBMqxruSENJ1OXdtYU_f9DJoBotKDCdnc8p7--3EqC7JiHGHiKFU7aKMiUC0pPi8JSrbxQM",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
];

export default function TeachersSection() {
  return (
    <section id="teachers" className="py-24 bg-[#F8F6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-14">
          <SectionLabel color="yellow" className="mb-3">
            THE PEOPLE BEHIND OUR STUDENTS&apos; SUCCESS
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-3xl sm:text-4xl lg:text-[44px] tracking-tight mb-4 text-balance">
            Meet Our Dedicated Teachers.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-[#4D515C] leading-relaxed text-pretty">
            Meet the educators who guide, encourage, and support our students throughout their learning journey with care and academic dedication.
          </p>
        </div>
      </div>

      {/* ── 8 Teachers Infinite Marquee (Continuously Running, Pauses on Hover) ── */}
      <div className="relative w-full overflow-hidden marquee-container py-4">
        {/* Edge Gradient Dissolves */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8F6EF] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8F6EF] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track: duplicated set for seamless 50% infinite loop */}
        <div className="marquee-track flex items-center gap-6 sm:gap-8">
          {/* SET 1: 8 Teachers */}
          {TEACHERS.map((teacher) => (
            <div
              key={`set1-${teacher.id}`}
              className="group relative w-64 sm:w-72 h-88 sm:h-96 rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card shrink-0 cursor-pointer bg-white transition-all duration-300 hover:shadow-2xl hover:border-[#F6CF45]"
            >
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlay & Details Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/95 via-[#17265B]/60 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <span
                    className={`inline-block px-3 py-1 font-[family-name:var(--font-display)] text-xs font-bold rounded-full mb-2 shadow-sm ${teacher.tagBg}`}
                  >
                    {teacher.role}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg tracking-tight mb-1">
                    {teacher.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[#F6CF45] font-medium">
                    {teacher.department}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* SET 2: 8 Teachers (Duplicate for continuous loop) */}
          {TEACHERS.map((teacher) => (
            <div
              key={`set2-${teacher.id}`}
              aria-hidden="true"
              className="group relative w-64 sm:w-72 h-88 sm:h-96 rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card shrink-0 cursor-pointer bg-white transition-all duration-300 hover:shadow-2xl hover:border-[#F6CF45]"
            >
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlay & Details Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/95 via-[#17265B]/60 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <span
                    className={`inline-block px-3 py-1 font-[family-name:var(--font-display)] text-xs font-bold rounded-full mb-2 shadow-sm ${teacher.tagBg}`}
                  >
                    {teacher.role}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg tracking-tight mb-1">
                    {teacher.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[#F6CF45] font-medium">
                    {teacher.department}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] max-w-xl mx-auto flex items-center justify-center gap-2">
          <Pointer className="w-4 h-4 text-[#F6CF45]" />
          <span>Hover over any card to pause the marquee and view faculty credentials.</span>
        </p>
      </div>
    </section>
  );
}

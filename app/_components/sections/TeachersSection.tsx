import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

const TEACHERS = [
  {
    name: "Principal",
    role: "Head of Institution",
    department: "School Administration & Vision",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrAZ53hyD98OzKjd0yk-tj7G_tc_W-n9vH2O-1Gj0GpvbFJmOAHj7kfo5sbeTSzIK3eRjK9e0Okaw1_IJkHXjvqNZE_78rdvwv610sNyPstrGU2LnyGEWXg08yuxHFPj1kJMrIvKIxP5mFEd4-eodOCiQhC8LPE3u0ZE8Jpua5T0TUDXL_OGxWF_H55KQU0tFzg3vaLtu7LuSCn9a8e68LHKXBJ9LwL5AApKKs3JQsRVtbxKCGYjYaEXUIG7nlKlkzlogvBa",
    tagBg: "bg-[#F6CF45] text-[#17265B]",
  },
  {
    name: "Senior Teacher",
    role: "Senior Faculty",
    department: "Mathematics & Logic",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrCOAHx0i5NvbPfV3hR24EvTC3x43KHfSYR8axIe1ValfKIHW7UIJ8pw96o08yLuX0QPbSlielOSB-Zi1Vw5BoIW8-mSwCahvd4B4GFyoFUcUDGuBrfMxu101cWVroOxsj9Iqn6Jmuu4C-f4vkphq1ZFe0VvKOMcpBaQ8uMJX0v6gKXYbD8TwJtHKHrIZfBfKcz5Gnss8BlgJHhQhr9L8nNdaIbIZ7ZO0TTTWL4axyUCCxIiF1AW7FSDFAj9SaDjAVhtzhpZNqmG",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
  {
    name: "Senior Teacher",
    role: "Senior Faculty",
    department: "General Science & Biology",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrCHch9Y9DjKFkGE7ffowUcubcp4Mx-Ay2epG6ta7ogRCmjlYVnoT_45mN4eHqrX6zzMiM2t7hu7k_ix0hdpIW6E2x5DC1WJiqCuZuL1k12DReesSj0VRHKLdgEyP-KW5yM7lGWFk6XHBf3u6aaVYDoruIjHqB0mUQChghC1SkjJTJU1WoKakGW2cZGQn5TIrdiip6JaCsAKik7Fcvd1uI5kZw90ZRhkp-wfovixXGlt5MF2FlMgl_Hm-0ZkLOBHvT2XRBI",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
  {
    name: "Primary Educator",
    role: "Primary Section",
    department: "Foundational Learning & Arts",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrCG3LT5Bqy8NzwTbNc1-XdectPnZZ8YUmd8hsYKW6mz1HvKa6oiOHqJnYaxk_wbKoh3TDM9O7ynvjCx7g8WJlmgj06Q82fBt1SXHH8PmoP4nqbhB11nLMbMccg4cztgZb-Q8rF3WGaRCByWWtoozP8k26S5chRUJbIvAA1sUFBzEKpEEP2WJ54c8Xp89xCdCBMqxruSENJ1OXdtYU_f9DJoBotKDCdnc8p7--3EqC7JiHGHiKFU7aKMiUC0pPi8JSrbxQM",
    tagBg: "bg-white/20 text-white backdrop-blur-sm",
  },
];

export default function TeachersSection() {
  return (
    <section id="teachers" className="py-24 bg-[#F8F6EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-16">
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

        {/* ── Teacher Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEACHERS.map((teacher, idx) => (
            <div
              key={idx}
              className="group relative h-96 rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card bg-white transition-all duration-300 hover:shadow-xl hover:border-[#F6CF45] hover:-translate-y-1"
            >
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay & Details Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/95 via-[#17265B]/60 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <span className={`inline-block px-3 py-1 font-[family-name:var(--font-display)] text-xs font-bold rounded-full mb-2 shadow-sm ${teacher.tagBg}`}>
                    {teacher.role}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-xl tracking-tight mb-1">
                    {teacher.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#F6CF45] font-medium">
                    {teacher.department}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] max-w-xl mx-auto flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[#F6CF45] text-xl" aria-hidden="true">
              touch_app
            </span>
            <span>Hover or tap any educator card to explore faculty credentials and departments.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

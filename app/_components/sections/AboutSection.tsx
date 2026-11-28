import Image from "next/image";
import { CheckCircle2, Award, Eye, Flag } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import AboutValueCard, { type AboutValueItem } from "./AboutValueCard";

const ABOUT_VALUES: AboutValueItem[] = [
  {
    title: "Our Vision",
    badge: "OUR VISION",
    description:
      "To encourage every student to discover their potential and become a responsible, confident individual.",
    icon: Eye,
    iconBg: "bg-[#F6CF45]/30 group-hover:bg-[#F6CF45]/50",
    iconColor: "text-[#17265B]",
  },
  {
    title: "Our Mission",
    badge: "OUR MISSION",
    description:
      "To create a positive learning environment that supports academic growth, curiosity, and character development.",
    icon: Flag,
    iconBg: "bg-[#17265B]/10 group-hover:bg-[#17265B]/20",
    iconColor: "text-[#17265B]",
  },
];

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
            <div className="absolute -top-4 -left-4 z-20 flex items-center gap-2 bg-[#F6CF45] text-[#17265B] px-3.5 py-2 rounded-xl shadow-lg border-2 border-white">
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-[family-name:var(--font-display)] font-extrabold text-xs tracking-wider uppercase leading-none">
                Est. 2013
              </span>
            </div>

            {/* Main Large Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[430px] bg-[#F8F6EF]">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrCAPnDE4wUCg5ctEr1aD3M-0575wLbrYvx_wwshnPZfVSZHmGAoP1o24Um5gj-O61MCy74FlF8yFJnu7TNH2bpnphEK6aC8qAgXFYem2qX9Ysydeds-loRzotRGrlZHj8o681hrPrjksmqdnmrgsi7NIUj3LjEvjS3IN_tngrrbs9rps2yhEWnUZFAuNH6fLVYSS2nh4lMG3HWY5QPdLuqgzU4ra716b9rlMQLpJbEKxUJCbRxErAGdH6m5WRzMvAvoKpNL_YRBBnDu6HjGQA"
                alt="Langta Baba Gyandeep Public School students in classroom"
                fill
                loading="lazy"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Overlapping Small Photo */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-10 w-56 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida/ALJJyrAB2FJgrH794PizLNbdiZGulgcORsJu2R56WE1M8_N7tqOvB09c38cxz7jIaFyijmLhpbpH62YbYi3LD2MabVT-eWxUQeIAv3YNU_KOdVGPgzm1pmBsDjGvQxAk2E7jySXjCa8tYszQCp5OeR9VyiV8POWt9mWTm8TISIl9OHyFpj2wWhWQmWBHtmb_foc6wZO59ivVD25s5tUL1cmwNGIsdokJh4BfTVAXqWw9WPA9XrztLN9nzM9hWK5HrhHGY2eOI1HTWJlhjMH4fsA"
                alt="School children learning together"
                fill
                loading="lazy"
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
              Langta Baba Gyandeep Public School is dedicated to providing a
              supportive environment where students can develop their knowledge,
              confidence, values, and abilities. Located in Kharagdiha, we
              nurture every child&apos;s innate curiosity through committed
              teaching, moral discipline, and active community values.
            </p>

            {/* Reusable Vision & Mission Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ABOUT_VALUES.map((item) => (
                <AboutValueCard key={item.title} {...item} />
              ))}
            </div>

            {/* Bottom Highlight */}
            <div className="flex items-start gap-3 pt-4 border-t border-[#E2DFC8]">
              <Award className="w-6 h-6 text-[#F6CF45] shrink-0 mt-0.5" />
              <p className="font-[family-name:var(--font-body)] text-[#4D515C] text-sm leading-relaxed">
                Serving Kharagdiha families with value-driven education across
                Classes 1–10 since{" "}
                <span className="font-semibold text-[#17265B]">2013</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

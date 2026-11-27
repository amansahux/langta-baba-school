import {
  HeartHandshake,
  Users,
  Scale,
  Handshake,
  Brain,
  Sparkles,
  ShieldCheck,
  Globe,
} from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import WhyChooseUsCard, { type BentoCardData } from "./WhyChooseUsCard";

const BENTO_CARDS: BentoCardData[] = [
  {
    id: "supportive-learning",
    colSpan: "lg:col-span-7",
    variant: "white",
    badge: "CORE COMMITMENT",
    title: "Supportive Learning Environment",
    description:
      "A welcoming atmosphere that encourages students to participate, explore, and learn. Teachers foster open inquiry where questions are celebrated and each child receives patient, individualized encouragement.",
    icon: HeartHandshake,
    number: "01",
    footerText: "Cultivating confidence in every classroom",
  },
  {
    id: "dedicated-teachers",
    colSpan: "lg:col-span-5",
    variant: "yellow",
    badge: "FACULTY MENTORSHIP",
    title: "Dedicated Teachers",
    description:
      "Teachers who guide students throughout their educational journey with subject mastery, warmth, and enduring ethical grounding.",
    icon: Users,
    footerText: "Passionate Educators",
    footerIcon: Sparkles,
  },
  {
    id: "student-development",
    colSpan: "lg:col-span-4",
    variant: "image",
    badge: "HOLISTIC FOCUS",
    title: "Student Development",
    description:
      "Encouraging academic learning alongside personal growth and self-assurance.",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrAB2FJgrH794PizLNbdiZGulgcORsJu2R56WE1M8_N7tqOvB09c38cxz7jIaFyijmLhpbpH62YbYi3LD2MabVT-eWxUQeIAv3YNU_KOdVGPgzm1pmBsDjGvQxAk2E7jySXjCa8tYszQCp5OeR9VyiV8POWt9mWTm8TISIl9OHyFpj2wWhWQmWBHtmb_foc6wZO59ivVD25s5tUL1cmwNGIsdokJh4BfTVAXqWw9WPA9XrztLN9nzM9hWK5HrhHGY2eOI1HTWJlhjMH4fsA",
  },
  {
    id: "discipline-values",
    colSpan: "lg:col-span-4",
    variant: "white",
    title: "Discipline & Values",
    description:
      "Promoting responsibility, mutual respect, humility, and positive daily habits that prepare children for life beyond textbooks.",
    icon: Scale,
    footerText: "Character-First Curriculum",
    footerIcon: ShieldCheck,
  },
  {
    id: "affordable-education",
    colSpan: "lg:col-span-4",
    variant: "white",
    title: "Affordable Education",
    description:
      "Making high-quality schooling accessible and realistic for families in Kharagdiha and the surrounding rural community.",
    icon: Handshake,
    footerText: "Community-Centric Access",
    footerIcon: Globe,
  },
  {
    id: "learning-activities",
    colSpan: "lg:col-span-12",
    variant: "navy",
    badge: "EXPERIENTIAL PEDAGOGY",
    title: "Learning Through Activities",
    description:
      "Encouraging regular participation, creative expression, sportsmanship, and practical learning experiences that make study enjoyable.",
    icon: Brain,
    ctaText: "See Campus Spaces",
    ctaLink: "#facilities",
  },
];

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
          {BENTO_CARDS.map((card) => (
            <WhyChooseUsCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

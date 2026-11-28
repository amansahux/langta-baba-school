import { Droplets, Bus } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import FacilityCard, { type FacilityItem } from "./FacilityCard";

const FACILITIES: FacilityItem[] = [
  {
    id: "classrooms",
    title: "Classrooms",
    badge: "CAMPUS CORE",
    colSpan: "lg:col-span-7",
    type: "image",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrDAQYbwMMvdlNMN04FsUVN4A0iuBIKKCYteS1uHeIQ-tYEO_0IO2tQXBbwXA40IyHfiSKdwipSAJYBFcpOVQAGYoudEv3bCh0Esloq8XUIe6oS1RypjjXsPt1yVQ0PRk0I-_yflqOs1LKIvgswgzXbzNFNC7TCDeXR2fyZ_8TSnaj9RvI_4ryj1z5mVxJD0pkTIt28SY4ilaQnKC8PcN-lQOy4YtMjjK-JyE311GcLSmebW_E4mxAawokXZQ-NqCb30kg4YeQ",
    description:
      "Bright, well-ventilated, and organized classrooms equipped with student desks and supportive instructional boards to ensure focused learning every school day.",
  },
  {
    id: "computer-lab",
    title: "Computer Laboratory",
    badge: "DIGITAL LITERACY",
    colSpan: "lg:col-span-5",
    type: "image",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrDQgs1HK62ByTC1-sdTX8JwAenbCh4uaevkz6FK_lR7FHDhkKTuuWCQfbMaymjtpR9Jp724qfnw6SSs9HeankmnV4Iyr0iuTnZmdG0BpB7RHG7lP9ckNy3WfjJCmCNBtjuCJxtV36jC1F_Vy-Vcohp0E15hpOcVaEdMa4zJtHbL9hZVwkKp9nHMh7cHnep841izf8RRguMQIDfgEXCXNPl6s-4EwSuEVu5dVu8RrCwFdlHci_eyRlxpzJ7RX1wMWnTq7r-J_VZVGfY",
    description:
      "Equipped computer terminals providing essential digital awareness, keyboard skills, and computer application training.",
  },
  {
    id: "library",
    title: "School Library",
    colSpan: "lg:col-span-4",
    type: "image",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrC8_mcGqTT63bLwQtQLWq7lhAq02i9LhmHZrINrtLY2rlHthDq4HkwWIbzbPPdD-kZ6gWey2PkQUoc1WabpNjREcx2uWVHk64CHYxVHhmYL56Qykd5Rs9moOlZsM02zr274JXb7_AH_iXEJAqEf0lLYXnJpKvl5s45cVb6LPZ5S9ZpmNXxv6TpGlIsN55ZgGsXbupKrYil6c3rUzLZqKGB8HtA04n7taJjceIji0UYilffMPyhiNPKFG_n9YleIVKKOECk",
    description:
      "Curated collection of academic textbooks, reference materials, children's storybooks, and quiet reading tables.",
  },
  {
    id: "science-lab",
    title: "Science Laboratory",
    colSpan: "lg:col-span-4",
    type: "image",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrB583ncE4fhoEaCflm3NlVUD0loS030rUAoP6iK_ZpBb9SF23r9J7FjBREXeHsi2elYXfden58As7Xowfn38LYhkgpNR81NBNRoSoLEsoih5A3sdZRf3WPAPfg4Nl21lCFdv8xExLnzpyEHHsxz5-rKzqVYbmBVzpvwnTbESBHq9npZ0_-MpEhoKuYUALefFHRoqy-QB1HdqxdX1_HHqlNqp246Ux_NpuLRGeEYbpwykpBomz0FoPQcepCas1Cz58ARESvmCIDsSw",
    description:
      "Practical apparatus, charts, and demonstration kits for science experiments aligned with curriculum requirements.",
  },
  {
    id: "playground",
    title: "Playground & Sports Ground",
    colSpan: "lg:col-span-4",
    type: "image",
    image:
      "https://lh3.googleusercontent.com/aida/ALJJyrAFyoC0_lUuMKk7rPv3HIigdwG9wDpBzLZaaseulwX4mZQhk8Fb4zuwGcJSwpt8JJy-5qOWQ3A5-zqGZFdA4_wPeQFcYxjAT0VhqJxJsqQZwNaTlllLM5gBswr7joXjGAitz5Qf4OTHUXtOResPyJ2thlE5-ZHXuDRYKP2-laUtMCCVHV44yZbC1q1L2z9mBJ1LSIkWnSGSw0jst92rt0jGwlarxzYppeKrBPEqupWO4DUw6MzS54_0mzGoa-36F646EAmp_aYS",
    description:
      "Open outdoor ground for physical education, morning assembly, sports drills, and joyful lunchtime recreation.",
  },
  {
    id: "drinking-water",
    title: "Clean Drinking Water",
    colSpan: "lg:col-span-6",
    type: "info",
    icon: Droplets,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-800",
    description:
      "Filtered and hygienic potable drinking water stations situated across campus for students and staff safety.",
  },
  {
    id: "transportation",
    title: "Transportation Assistance",
    colSpan: "lg:col-span-6",
    type: "info",
    icon: Bus,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-800",
    description:
      "Coordinated local transportation assistance ensuring safe commute for students from nearby Kharagdiha settlements.",
  },
];

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

        {/* ── Asymmetric Bento Grid of Facilities (Hover Reveal Descriptions) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {FACILITIES.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}

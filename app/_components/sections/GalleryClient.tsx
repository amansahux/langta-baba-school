"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { ZoomIn, X } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "events" | "cultural" | "sports" | "classrooms" | "celebrations";
  categoryLabel: string;
  description: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "annual-day",
    title: "Annual Day Performance",
    category: "cultural",
    categoryLabel: "Cultural Activities",
    description: "Students showcasing regional dance and drama on the school stage.",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrBsjLGIPVSHJb45zrIUCJDvMVPjt2ALRtQMapZEAEiR1PZAcNtDryzIuEs3rEBWtx8uoCsHtem4DXaY6V3lHRH6opmaIZ7T0Jxv8XAzE39DM2wztpDFo17CEy__643E3kYyu3J7MvRf8ME011l9PpaAE7RIDaLhj1iVTFlG2ty_ak0KAZpTLgM_0jICArBjp-Et_qk8DpqhXYCJxj_OG1_ypV1ftVk1THh-KmzmhfrQKUDhbX7Kn057l5dsgQ_3bmeTn5lg0rJQ7jDQxQE",
  },
  {
    id: "sports-meet",
    title: "Annual Athletics Meet",
    category: "sports",
    categoryLabel: "Sports",
    description: "Track and field competitions cultivating sporting spirit and grit.",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrDAcm1Sx9X-6_jw7yc3U-1nsQTX3hveAgbuvUacuVGgRexXqUFzMm7g8KU3fjpmA58prbSGi1Uvnsb2IK8bblqMCJv7OuhN-r4tF7pPeIUZku_QVnVjEIO2gLW8K24jGVLaVFl4hZoMQGwInwta1V2y7bUJMzne1G90XPTz-9YqkHlT1aQtmPi3EOLZZ39vfIUluS9VHEJEbejVzIz6AkDACtiXROg1jezr6Jkw8BTFtMSjO43uRwnNElkZ04GnPOGQKMfge8E",
  },
  {
    id: "science-exhibition",
    title: "Science Exhibition",
    category: "events",
    categoryLabel: "School Events",
    description: "Handmade models demonstrating physics, biology, and environmental science.",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrAPM-p3ivThQI6h1QPUElggD9IlOiUgVW6_zUSdKVNI080TbUFWs2cjqF8EZaajZ8bEeYoGZlSlJAmIcqrPCSxuHcMORAVd7LQbtMI62u-7dqjAHhLV8C8PuoGvBWPfr8pXu9VBOrnxX1QW24vzkszKdJ_LQ5_ZgFKT2Zg0C2V6SLTz8sDPefeF2agcgTDTV_va6URxIpG367MMvnV8Y8KEkK3IxPwpyEoGmRaHhOmkd9zUsO7pl4iCqk7JbxtjylTsZNATkQVP-cNa7-n3ew",
  },
  {
    id: "republic-day",
    title: "Republic Day Assembly",
    category: "celebrations",
    categoryLabel: "Celebrations",
    description: "Patriotic songs, tricolor assembly, and speeches on Republic Day.",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrDQqor582YwbfA57zYLwHYTwhYqBVcX9bSUhHVUj8DSd1K-fvhtkr6YH0UFM0F-j_h80_ahL_Y0lgG0AiF_pfQQ06142ajYZgAYM-V8UbNMU2jzzWJ_PJQ20i2qIVyoN5ctmczoZbVUp_NF8mulA0rXgeqLOw5NVLlNXMZ_qQx6oE6MbMKMvhPlT-ASBnxvQOgfh8b11JT0bB3dI1kvh3l8kcXQzV9vTQ_-IyJRTMSVwX80XxbJcrwW9ASSii8ZbsQtzACyD7-Evg",
  },
  {
    id: "classroom-session",
    title: "Interactive Classroom Session",
    category: "classrooms",
    categoryLabel: "Classrooms",
    description: "Students engaged in collaborative group reading and arithmetic exercises.",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrCAPnDE4wUCg5ctEr1aD3M-0575wLbrYvx_wwshnPZfVSZHmGAoP1o24Um5gj-O61MCy74FlF8yFJnu7TNH2bpnphEK6aC8qAgXFYem2qX9Ysydeds-loRzotRGrlZHj8o681hrPrjksmqdnmrgsi7NIUj3LjEvjS3IN_tngrrbs9rps2yhEWnUZFAuNH6fLVYSS2nh4lMG3HWY5QPdLuqgzU4ra716b9rlMQLpJbEKxUJCbRxErAGdH6m5WRzMvAvoKpNL_YRBBnDu6HjGQA",
  },
  {
    id: "campus-friendship",
    title: "Campus Life & Friendship",
    category: "events",
    categoryLabel: "School Events",
    description: "Wholesome camaraderie during morning assembly and extracurricular clubs.",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrAB2FJgrH794PizLNbdiZGulgcORsJu2R56WE1M8_N7tqOvB09c38cxz7jIaFyijmLhpbpH62YbYi3LD2MabVT-eWxUQeIAv3YNU_KOdVGPgzm1pmBsDjGvQxAk2E7jySXjCa8tYszQCp5OeR9VyiV8POWt9mWTm8TISIl9OHyFpj2wWhWQmWBHtmb_foc6wZO59ivVD25s5tUL1cmwNGIsdokJh4BfTVAXqWw9WPA9XrztLN9nzM9hWK5HrhHGY2eOI1HTWJlhjMH4fsA",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "events", label: "School Events" },
  { id: "cultural", label: "Cultural Activities" },
  { id: "sports", label: "Sports" },
  { id: "classrooms", label: "Classrooms" },
  { id: "celebrations", label: "Celebrations" },
] as const;

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [, startTransition] = useTransition();

  const filteredItems = activeFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleFilterChange = (catId: string) => {
    startTransition(() => {
      setActiveFilter(catId);
    });
  };

  return (
    <>
      {/* ── Category Filter Tabs ── */}
      <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Gallery filters">
        {CATEGORIES.map((cat) => {
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleFilterChange(cat.id)}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-display)] text-xs font-bold transition-all ${
                isActive
                  ? "bg-[#17265B] text-white shadow-sm"
                  : "bg-white text-[#17265B] hover:bg-[#F6CF45] border border-[#E2DFC8]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* ── Photo Masonry Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card cursor-pointer bg-white transition-all duration-300 hover:shadow-xl hover:border-[#F6CF45]"
          >
            <div className="h-72 relative w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#17265B]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
              <span className="text-xs text-[#F6CF45] font-bold uppercase tracking-wider">
                {item.categoryLabel}
              </span>
              <h4 className="font-[family-name:var(--font-display)] font-bold text-lg text-white">
                {item.title}
              </h4>
              <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/80">
                <ZoomIn className="w-4 h-4" />
                Click to inspect
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox Modal ── */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#17265B]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E2DFC8]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#F8F6EF] text-[#17265B] hover:bg-[#F6CF45] flex items-center justify-center shadow-md transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] bg-black flex items-center justify-center relative h-[60vh] sm:h-[68vh]">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="text-xs font-bold text-[#862D48] tracking-widest uppercase">
                {activeItem.categoryLabel}
              </span>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-xl mb-1">
                {activeItem.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C]">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

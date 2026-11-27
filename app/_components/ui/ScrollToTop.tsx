"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        bg-[#17265B] text-[#F6CF45]
        flex items-center justify-center
        shadow-lg shadow-[#17265B]/30
        transition-all duration-300 ease-in-out
        hover:bg-[#1f3480] hover:scale-110 hover:shadow-xl hover:shadow-[#17265B]/40
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6CF45] focus-visible:ring-offset-2
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

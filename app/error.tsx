"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service if needed
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F8F6EF] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#E2DFC8] shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-[#862D48]/10 text-[#862D48] flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined !text-[32px]">warning</span>
        </div>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[#17265B] mb-2">
          Something went wrong!
        </h2>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] mb-6">
          We encountered an unexpected error while loading the page. Please try refreshing or click the button below.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#17265B] text-white font-[family-name:var(--font-display)] font-bold text-sm rounded-full shadow-md hover:bg-[#1e3278] transition-colors"
        >
          <span className="material-symbols-outlined !text-[18px]">refresh</span>
          Try Again
        </button>
      </div>
    </div>
  );
}

export default function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`skeleton rounded-3xl p-8 border border-[#E2DFC8] min-h-[220px] flex flex-col justify-between ${className}`}
      aria-hidden="true"
    >
      <div className="space-y-4">
        <div className="h-6 w-28 bg-[#17265B]/10 rounded-full" />
        <div className="h-8 w-3/4 bg-[#17265B]/10 rounded-lg" />
        <div className="h-4 w-full bg-[#17265B]/10 rounded" />
        <div className="h-4 w-5/6 bg-[#17265B]/10 rounded" />
      </div>
      <div className="h-10 w-36 bg-[#17265B]/10 rounded-full mt-6" />
    </div>
  );
}

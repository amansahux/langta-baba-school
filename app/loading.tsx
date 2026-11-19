import SkeletonCard from "./_components/ui/SkeletonCard";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F8F6EF] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navbar skeleton */}
        <div className="skeleton h-20 w-full rounded-2xl mb-8" />

        {/* Hero skeleton */}
        <div className="skeleton h-[70vh] w-full rounded-3xl p-8 sm:p-12 flex flex-col justify-end space-y-4">
          <div className="h-6 w-48 bg-[#17265B]/10 rounded-full" />
          <div className="h-12 w-3/4 max-w-xl bg-[#17265B]/10 rounded-xl" />
          <div className="h-6 w-full max-w-lg bg-[#17265B]/10 rounded-lg" />
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-44 bg-[#17265B]/15 rounded-full" />
            <div className="h-12 w-44 bg-[#17265B]/15 rounded-full" />
          </div>
        </div>

        {/* Section cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}

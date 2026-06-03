export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-zinc-950">
      {/* Spacer for navbar */}
      <div className="h-24" />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 animate-pulse">
        {/* Back button skeleton */}
        <div className="mb-10 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-black/20" />
          <div className="w-36 h-5 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
        </div>

        {/* Hero image skeleton */}
        <div className="w-full h-[50vh] bg-zinc-200 dark:bg-zinc-800 border-4 border-black dark:border-zinc-700 rounded-2xl mb-8" />

        {/* Title skeleton */}
        <div className="mb-4 w-2/3 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg border-4 border-black/10" />
        <div className="mb-12 w-1/4 h-8 bg-brand-primary/30 rounded-lg" />

        {/* Info bar skeleton */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-zinc-800 border-4 border-black dark:border-zinc-700 rounded-xl p-5">
              <div className="w-16 h-3 bg-zinc-200 dark:bg-zinc-700 rounded mb-3" />
              <div className="w-24 h-5 bg-zinc-200 dark:bg-zinc-700 rounded" />
            </div>
          ))}
        </div>

        {/* Content columns skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-4">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-4/6" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-zinc-200 dark:bg-zinc-800 border-4 border-black/10 rounded-xl p-4 h-24" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

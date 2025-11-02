import { Search, PlayCircle } from "lucide-react";
import { useState } from "react";

export default function HeroSection({ onSearch }) {
  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-fuchsia-500/10 to-amber-300/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
              <PlayCircle className="h-3.5 w-3.5" />
              Discover • Rate • Track
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              The smarter way to explore movies and shows
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-lg max-w-prose">
              BetterMDb brings a sleek browsing experience, smart ratings, and curated lists so you can decide what to watch in seconds.
            </p>

            <form onSubmit={submit} className="mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search movies, shows, people..."
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 backdrop-blur px-11 py-3.5 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition-shadow"
                >
                  Search
                </button>
              </div>
              <p className="mt-3 text-sm text-zinc-500">
                Try: "Blade Runner", "Dune", "Oppenheimer"
              </p>
            </form>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 shadow-inner overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-white/70 dark:bg-zinc-800/70 border border-white/50 dark:border-zinc-700/50 shadow-sm" />
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="mx-auto max-w-md rounded-xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur border border-zinc-200/80 dark:border-zinc-800/80 p-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Cinematic Mode</p>
                      <p className="text-xs text-zinc-500">A cleaner, more immersive browsing experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Film, Star, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white grid place-items-center shadow-sm">
            <Film className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Better<span className="text-indigo-600">MDb</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#top" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</a>
          <a href="#trending" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Trending</a>
          <a href="#top-rated" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Top Rated</a>
          <a href="#genres" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Genres</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 text-amber-500 text-sm font-medium">
            <Star className="h-4 w-4 fill-amber-400" />
            <span>Rate smarter</span>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 py-2 text-sm font-medium shadow-sm hover:shadow transition-shadow">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

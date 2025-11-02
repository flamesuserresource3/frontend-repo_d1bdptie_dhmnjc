import { Star } from "lucide-react";

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.7,
    poster: "https://images.unsplash.com/photo-1526312426976-593c2d0aba1c?q=80&w=800&auto=format&fit=crop",
    genres: ["Sci‑Fi", "Adventure"],
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.6,
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    genres: ["Drama", "History"],
  },
  {
    id: 3,
    title: "Spider‑Verse",
    year: 2023,
    rating: 8.9,
    poster: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800&auto=format&fit=crop",
    genres: ["Animation", "Action"],
  },
  {
    id: 4,
    title: "The Batman",
    year: 2022,
    rating: 7.9,
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
    genres: ["Crime", "Mystery"],
  },
  {
    id: 5,
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    poster: "https://images.unsplash.com/photo-1520975922215-230f3c1f5ed0?q=80&w=800&auto=format&fit=crop",
    genres: ["Sci‑Fi", "Neo‑Noir"],
  },
  {
    id: 6,
    title: "Arrival",
    year: 2016,
    rating: 7.9,
    poster: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=800&auto=format&fit=crop",
    genres: ["Sci‑Fi", "Drama"],
  },
];

function MovieCard({ movie }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 text-xs font-medium shadow-sm">
          <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
          {movie.rating}
        </div>
      </div>
      <div className="p-3.5">
        <h3 className="font-semibold leading-tight line-clamp-1">{movie.title}</h3>
        <p className="mt-0.5 text-sm text-zinc-500">{movie.year} • {movie.genres.join(" • ")}</p>
      </div>
    </article>
  );
}

export default function MovieGrid({ title = "Trending Now", anchor = "trending" }) {
  return (
    <section id={anchor} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
          <p className="text-zinc-600 dark:text-zinc-300">Hand‑picked highlights from critics and fans</p>
        </div>
        <a href="#top-rated" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View top rated →</a>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}

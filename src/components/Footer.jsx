export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-600 dark:text-zinc-300">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} BetterMDb. Made for movie lovers.
          </p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
            <a href="#press" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Press</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

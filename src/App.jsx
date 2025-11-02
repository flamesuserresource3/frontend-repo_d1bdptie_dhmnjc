import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";

function App() {
  const [lastSearch, setLastSearch] = useState("");

  const handleSearch = (q) => {
    setLastSearch(q);
    // Future: hook up to backend API for real results
  };

  return (
    <div id="top" className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar />
      <HeroSection onSearch={handleSearch} />

      {lastSearch ? (
        <MovieGrid title={`Results for “${lastSearch}”`} anchor="results" />
      ) : (
        <>
          <MovieGrid title="Trending Now" anchor="trending" />
          <MovieGrid title="Top Rated" anchor="top-rated" />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;

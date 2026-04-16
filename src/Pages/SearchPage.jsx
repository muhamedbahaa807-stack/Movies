import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFilm } from "react-icons/fa";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // دالة البحث من الـ API
  const searchMovies = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.length > 2) {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchTerm}`
        );
        const data = await res.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
          Explore Movies
        </h1>
        
        <div className="relative group">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-red-600 transition-colors" />
          <input
            type="text"
            value={query}
            onChange={searchMovies}
            className="w-full bg-zinc-900 border-2 border-zinc-800 text-white h-16 pl-14 pr-6 rounded-full text-xl focus:outline-none focus:border-red-700 transition-all shadow-2xl placeholder:text-zinc-600"
            placeholder="Search for movies, actors, or genres..."
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {loading && <p className="col-span-full text-center text-red-600 animate-pulse">Searching...</p>}
        
        {results.length > 0 ? (
          results.map((movie) => (
            <Link 
              to={`/moviepage/${movie.id}`} 
              key={movie.id}
              className="group bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="relative">
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                  alt={movie.title}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                   <button className="bg-red-700 px-4 py-2 rounded-lg font-bold">View Details</button>
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-bold truncate">{movie.title}</h3>
                <span className="text-yellow-500 text-sm">⭐ {movie.vote_average?.toFixed(1)}</span>
              </div>
            </Link>
          ))
        ) : (
          !loading && query.length > 2 && (
            <div className="col-span-full text-center text-zinc-500 mt-10">
              <FaFilm className="text-5xl mx-auto mb-3 opacity-20" />
              <p>No movies found for "{query}"</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
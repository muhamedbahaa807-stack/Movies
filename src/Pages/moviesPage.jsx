import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import Spinner from "../components/spinner";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.log("ERROR", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <Spinner loading={loading} />;

  return (
    <section className="min-h-screen bg-zinc-950 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-l-4 border-red-600 pl-6">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Popular Movies</h1>
          <p className="text-zinc-500 mt-2">Explore the most watched movies this week</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {movies.map((movie) => (
            <Link 
              to={`/moviepage/${movie.id}`} 
              key={movie.id}
              className="group bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 border border-zinc-800 hover:border-red-600/50 shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-yellow-500 font-bold border border-white/10">
                  <FaStar className="text-sm" /> {movie.vote_average?.toFixed(1)}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-white font-bold text-lg truncate group-hover:text-red-500 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2 text-zinc-500 text-sm mt-2">
                  <FaCalendarAlt className="text-xs" />
                  <span>{movie.release_date?.split('-')[0]}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesPage;
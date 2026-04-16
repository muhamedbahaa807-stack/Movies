import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { FaStar, FaChevronRight } from "react-icons/fa";

const OneCard = () => { 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const data = await res.json();
        setMovies(data.results); 
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section className="bg-zinc-950 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Trending Now</h2>
            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
          </div>
          <Link to="/moviesPage" className="text-red-500 hover:text-red-400 flex items-center gap-2 font-bold transition-colors">
            View All Movies <FaChevronRight className="text-xs" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {movies.slice(0, 10).map((movie) => (
            <Link 
              to={`moviepage/${movie.id}`} 
              key={movie.id}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border border-zinc-800/50 hover:border-red-600/50 shadow-xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[320px] object-cover group-hover:opacity-50 transition-opacity"
              />
              <div className="p-4">
                <h3 className="text-white font-bold truncate mb-1">{movie.title}</h3>
                <div className="flex justify-between items-center">
                   <span className="text-zinc-500 text-sm font-medium">{movie.release_date?.split('-')[0]}</span>
                   <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                      <FaStar /> {movie.vote_average?.toFixed(1)}
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OneCard;
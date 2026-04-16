import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import { FaArrowRight, FaStar, FaPlay, FaPlus } from "react-icons/fa6";

export const movieLoader = async ({ params }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
  );
  const data = await response.json();
  return data;
};

const MoviePage = () => {
  const movie = useLoaderData();

  // خلفية سينمائية كبيرة
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
    
      <div 
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 px-12 pb-10 flex items-end gap-8 w-full">
          <div className="hidden md:block w-64 shadow-2xl rounded-lg overflow-hidden border-4 border-zinc-800 shadow-red-900/20">
            <img src={posterUrl} alt={movie.title} className="w-full" />
          </div>

          <div className="flex-1">
            <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-4 uppercase tracking-widest">
              <Link to="/" className="hover:text-red-500 transition">Home</Link>
              <FaArrowRight className="text-[10px]" />
              <Link to="/moviespage" className="hover:text-red-500 transition">Movies</Link>
              <FaArrowRight className="text-[10px]" />
              <span className="text-red-600">{movie.title}</span>
            </nav>

            <h1 className="text-6xl font-black mb-4 drop-shadow-lg">{movie.title}</h1>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/50 px-3 py-1 rounded-full">
                <FaStar className="text-yellow-500" />
                <span className="font-bold text-yellow-500">{movie.vote_average?.toFixed(1)}</span>
                <span className="text-xs text-zinc-400 ml-1">IMDB</span>
              </div>
              <span className="text-zinc-400 border-l border-zinc-700 pl-6">{movie.release_date?.split('-')[0]}</span>
              <span className="text-zinc-400 border-l border-zinc-700 pl-6">{movie.runtime} min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-red-600 pl-4">Overview</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            {movie.overview}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/WatchPage" className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
              <FaPlay /> Watch Trailer
            </Link>
            <button className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-xl font-bold transition-all border border-zinc-700">
              <FaPlus /> Add to Playlist
            </button>
          </div>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
          <div className="mb-6">
            <h4 className="text-zinc-500 text-sm mb-1 uppercase">Status</h4>
            <p className="font-medium text-red-500">{movie.status}</p>
          </div>
          <div className="mb-6">
            <h4 className="text-zinc-500 text-sm mb-1 uppercase">Genres</h4>
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map(g => (
                <span key={g.id} className="bg-zinc-800 px-3 py-1 rounded-md text-sm">{g.name}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-zinc-500 text-sm mb-1 uppercase">Budget</h4>
            <p className="font-medium text-green-500">${movie.budget?.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviePage

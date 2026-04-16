import { Link } from 'react-router-dom';
import { FaExclamationCircle, FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-zinc-950 text-center px-6">
      <div className="relative">
        <h1 className="text-[150px] font-black text-zinc-900 leading-none">404</h1>
        <FaExclamationCircle className="text-red-600 text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
      
      <h2 className="text-4xl font-bold text-white mt-4">Lost in Space?</h2>
      <p className="text-zinc-500 text-xl mt-4 max-w-md">
        The page you are looking for doesn't exist or has been moved to another galaxy.
      </p>

      <Link
        to="/"
        className="mt-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-red-600/20"
      >
        <FaHome /> Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
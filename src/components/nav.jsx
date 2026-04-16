import logo from '../images/clapperboard.png'
import { CgProfile } from "react-icons/cg";
import { FaSearch, FaFilter } from "react-icons/fa";
import { Link} from 'react-router-dom' 

const Nav = () => {
  return (
    <nav className="bg-zinc-950/90 backdrop-blur-md sticky top-0 z-[100] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="logo" className='w-10 group-hover:rotate-12 transition-transform' />
          <span className="text-white text-2xl font-black tracking-tighter">MOVIES</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link 
            to="/search"
            className="p-3 text-zinc-400 hover:text-red-600 hover:bg-zinc-900 rounded-full transition-all"
            title="Search"
          >
            <FaSearch className="text-xl" />
          </Link>
          <Link 
            to="/filter"
            className="p-3 text-zinc-400 hover:text-red-600 hover:bg-zinc-900 rounded-full transition-all"
            title="Filter"
          >
            <FaFilter className='text-xl' />
          </Link>
          <Link 
            to="/profile"
            className="ml-2 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold transition-all shadow-lg shadow-red-900/20"
          >
            <CgProfile className="text-xl" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
        </div>
      </div>
    </nav>  
  )
}
export default Nav;
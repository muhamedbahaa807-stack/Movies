import logo from '../images/clapperboard.png'

const Hero = () => {
  const title = "MOVIES";
  const description = "Discover the latest blockbusters and hidden gems. Just a better place for watching online movies for free!"; 
  
  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-zinc-900">
     
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <img src={logo} alt="logo" className='w-24 h-24 mx-auto mb-6 animate-bounce-slow' />
        <h1 className="text-7xl font-black text-white mb-4 tracking-tight">
          THE <span className="text-red-600">MOVIES</span> HUB
        </h1>
        <p className="text-zinc-400 text-xl leading-relaxed mb-8">
          {description}
        </p>
        
      </div>
    </section>
  )
}
export default Hero;
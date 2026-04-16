import Hero from "../components/Hero";
import Cards from "../components/cards";

const HomePage = () => {
  return (
    <section className="bg-zinc-950 min-h-screen">
      <Hero />
      <div className="mt-[-50px] relative z-20"> {}
        <Cards />
      </div>
    </section>
  )
}

export default HomePage;
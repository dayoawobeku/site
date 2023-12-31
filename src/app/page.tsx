import Hero from "./components/hero";
import Posts from "./components/posts";

async function Home() {
  return (
    <>
      <Hero />
      <h2 className="relative flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl z-20">
        Latest
      </h2>
      <hr className="relative border-gray-200 dark:border-gray-700 z-20" />
      <div className="relative z-50">
        <Posts />
      </div>
    </>
  );
}

export default Home;

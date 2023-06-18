import Hero from './components/hero'
import Post from './components/post';
import { Site } from '../../lib/info';

const site = Site;

async function Home() {
  const res = await fetch(`${site}/wp-json/wp/v2/posts?per_page=3`, { next: { revalidate: 10 } })
  const data = await res.json();

  const posts = data.map((post: any) => {
    return (
      <Post id={post.id} key={post.id} />
    );
  });

  return (
    <>
      <Hero />
      <h2 className='relative flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl z-20'>
        Latest
      </h2>
      <hr className='relative border-gray-200 dark:border-gray-700 z-20' />
      <div className='relative z-50'>
        {posts}
      </div>
    </>
  )
}

export default Home
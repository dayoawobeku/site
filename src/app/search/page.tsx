import { redirect } from 'next/navigation';
import Post from "../components/post";
import NoPost from '../components/nopost';
import { Site } from '../../../libs/info';

const site = Site;

async function SearchRoot({ searchParams }: {searchParams: any}) {
  // Track state for posts, current page and number of pages

  const res = await fetch(`${site}/wp-json/wp/v2/search/?subtype=post&search=${searchParams.q}`, { next: { revalidate: 10 } })
  const posts = await res.json();

  redirect(`/search/${searchParams.q ? searchParams.q : '404'}`);

  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  Search
              </h1>
              <form className="relative max-w-lg" method="GET" action="/search/" autoComplete="off">
                <input name="q" type="search" defaultValue={decodeURI(searchParams.q)} aria-label="Search blog" placeholder="Search blog" className="block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100" />
                <button typeof="submit" className="absolute right-3 top-3 ">
                  <svg className="h-5 w-5 stroke-current text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </form>
              <hr className="!mt-8 border-gray-800"/>
          </div>
      </div>

        {posts.length ? posts.map((post: any) => {
            return (
                <Post id={post.id} key={post.id} />
            );
        }) : <NoPost />}
    </>
  );
}

export default SearchRoot
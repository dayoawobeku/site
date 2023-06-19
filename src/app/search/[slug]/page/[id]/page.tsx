import Post from "../../../../components/post";
import Link from "next/link";
import { Site } from "../../../../../../lib/info";
import Error404 from "@/app/not-found";

const site = Site;

export async function generateMetadata({ params }: { params: any }) {
  return {
      title: decodeURI(params.slug)
  };
}

async function SearchPages({ params }: {
      params: { slug: string, id: number }
  }) {
  // Track state for posts, current page and number of pages

  const res = await fetch(`${site}/wp-json/wp/v2/search/?subtype=post&per_page=10&page=${params.id}&search=${params.slug}`, { next: { revalidate: 10 } })
  const posts = await res.json();
  const totalPages = await res.headers.get('X-WP-TotalPages');
  const morePages = ( Number(totalPages) > Number(params.id) );

  const prevPage = Number(params.id) - 1;
  const nextPage = Number(params.id) + 1;

  if ( !posts ) {
    return (
      <Error404 />
    );
  }

  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Search
              </h1>
              <form className="relative max-w-lg" method="GET" action="/search/" autoComplete="off">
                <input name="q" type="search" defaultValue={decodeURI(params.slug)} aria-label="Search blog" placeholder="Search blog" className="block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100" />
                <button typeof="submit" className="absolute right-3 top-3 ">
                  <svg className="h-5 w-5 stroke-current text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </form>
              <hr className="!mt-8 border-gray-800"/>
          </div>
      </div>

        {posts.length &&
          posts.map((post: any) => {
            return (
                <Post id={post.id} key={post.id} />
            );
        })}
        {
            <nav className="mt-12 flex flex-row gap-4">
                {
                    prevPage === 1 &&
                    <Link
                        href={`/search/${params.slug}`}
                        className="py-4 px-6 text-xl bg-transparent bg-opacity-20 transition-all duration-100 md:hover:-translate-y-1 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow-lg z-20"
                    >
                        Newer entries
                    </Link>
                }
                {
                    prevPage > 1 &&
                    <Link
                        href={`/search/${params.slug}/page/${prevPage}`}
                        className="py-4 px-6 text-xl bg-transparent bg-opacity-20 transition-all duration-100 md:hover:-translate-y-1 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow-lg z-20"
                    >
                        Newer entries
                    </Link>
                }
                {
                    morePages && 
                    <Link
                        href={`/search/${params.slug}/page/${nextPage}`}
                        className="ml-auto py-4 px-6 text-xl bg-transparent bg-opacity-20 transition-all duration-100 md:hover:-translate-y-1 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow-lg z-20"
                    >
                        Older entries
                    </Link>
                }
            </nav>
        }
    </>
  );
}

export default SearchPages
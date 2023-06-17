import Link from "next/link";
import Post from "../../../components/post";
import { Site } from "../../../../../lib/info";
// import SearchForm from "@/app/components/searchForm";

export async function generateMetadata() {
    return {
      title: 'Blog'
    };
}

const site = Site;

async function BlogPages({ params }: {
        params: { id: number }
    }) {
  // Track state for posts, current page and number of pages

    const res = await fetch(`${site}/wp-json/wp/v2/posts?per_page=10&page=${params.id}`, { next: { revalidate: 10 } })
    const posts = await res.json();
    const totalPages = await res.headers.get('X-WP-TotalPages');
    const morePages = ( Number(totalPages) > Number(params.id) );

    const prevPage = Number(params.id) - 1;
    const nextPage = Number(params.id) + 1;

    return (
        <>
        <div className="mx-auto max-w-6xl divide-y divide-gray-400">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Blog
                </h1>
                {/* <SearchForm /> */}
                <hr className="!mt-8 border-gray-800"/>
            </div>
        </div>

            {posts &&
            posts.length &&
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
                            href={`/blog/`}
                            className="py-4 px-6 text-xl transition duration-100 md:hover:scale-105 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md"
                        >
                            Newer entries
                        </Link>
                    }
                    {
                        prevPage > 1 &&
                        <Link
                            href={`/blog/page/${prevPage}`}
                            className="py-4 px-6 text-xl transition duration-100 md:hover:scale-105 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md"
                        >
                            Newer entries
                        </Link>
                    }
                    {
                        morePages && 
                        <Link
                            href={`/blog/page/${nextPage}`}
                            className="ml-auto py-4 px-6 text-xl transition duration-100 md:hover:scale-105 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md"
                        >
                            Older entries
                        </Link>
                    }
                </nav>
            }
        </>
    );
}

export default BlogPages
import Link from "next/link";
import PostTag from "@/app/components/tag";
import { Site } from "../../../../../../../lib/info";
import Post from "@/app/components/post";

const site = Site;

export async function generateMetadata({ params }: { params: any }) {
    const res = await fetch(`${site}/wp-json/wp/v2/tags?search=${params?.slug}`, { next: { revalidate: 10 } })
    const data = await res.json();
    return {
        title: data.shift()?.name
    }
}

async function TagPage({ params }: {
    params: { slug: string, id: number }
  }) {
  // Track state for posts, current page and number of pages

  const res = await fetch(`${site}/wp-json/wp/v2/posts?per_page=10&filter[tag]=${params?.slug}&page=${params?.id}`, { next: { revalidate: 10 } })
  const posts = await res.json();

  const totalPages = await res.headers.get('X-WP-TotalPages');
  const morePages = ( Number(totalPages) > Number(params?.id) );

  const prevPage = Number(params?.id) - 1;
  const nextPage = Number(params?.id) + 1;

  const resTag = await fetch(`${site}/wp-json/wp/v2/tags/?search=${params?.slug}`, { next: { revalidate: 10 } })
  const tags = await resTag.json();

  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  Tag:&nbsp;<PostTag tag={tags.shift()?.id} place="archive" />
              </h1>
          </div>
      </div>

        {posts &&
          posts.length &&
          posts.map((post: any) => {
            return (
                <Post id={post?.id} key={post?.id} />
            );
        })}
        {
            <nav className="mt-12 flex flex-row gap-4">
                {
                    prevPage === 1 &&
                    <Link
                        href={`/blog/tag/${params?.slug}`}
                        className="py-4 px-6 text-xl bg-transparent bg-opacity-20 transition-all duration-100 md:hover:-translate-y-1 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow-lg z-20"
                    >
                        Newer entries
                    </Link>
                }
                {
                    prevPage > 1 &&
                    <Link
                        href={`/blog/tag/${params?.slug}/page/${prevPage}`}
                        className="py-4 px-6 text-xl bg-transparent bg-opacity-20 transition-all duration-100 md:hover:-translate-y-1 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow-lg z-20"
                    >
                        Newer entries
                    </Link>
                }
                {
                    morePages && 
                    <Link
                        href={`/blog/tag/${params?.slug}/page/${nextPage}`}
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

export default TagPage
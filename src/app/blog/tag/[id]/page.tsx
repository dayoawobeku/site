import Link from "next/link";
import { format } from "date-fns";
import PostTag from "@/app/components/tag";
import { Site } from "../../../../../libs/info";
import Post from "@/app/components/post";

const site = Site;


async function Tag({ params }: {
    params: { id: number }
}) {
  // Track state for posts, current page and number of pages

  const res = await fetch(`${site}/wp-json/wp/v2/posts?per_page=999&tags[]=${params.id}`, { next: { revalidate: 10 } })
  const posts = await res.json();

  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  Tag:&nbsp;<PostTag tag={params.id} place="archive" key={params.id} />
              </h1>
          </div>
      </div>

        {posts &&
          posts.length &&
          posts.map((post: any) => {
            return (
                <Post id={post.id} key={post.id} />
            );
          })}
    </>
  );
}

export default Tag
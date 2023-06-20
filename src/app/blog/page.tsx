import Link from "next/link";
import Post from "../components/post";
import { fetchPosts } from "@/app/api";
// import SearchForm from "../components/searchForm";

export async function generateMetadata() {
  return {
    title: 'Blog'
  };
}

async function Blog() {
  const { data: posts, totalPages } = await fetchPosts(10, 1);

  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog
          </h1>
          {/* <SearchForm /> */}
          <hr className="!mt-8 border-gray-800" />
        </div>
      </div>

      {posts && posts.map((post: any) => {
          return <Post id={post.id} key={post.id} />;
        })}

      {Number(totalPages) > 1 && (
        <nav className="mt-12 flex flex-row gap-4">
          <span></span>
          <Link
            href={`/blog/page/2`}
            className="ml-auto py-4 px-6 text-xl bg-transparent bg-opacity-20 transition-all duration-100 md:hover:-translate-y-1 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow-lg z-20"
          >
            Older entries
          </Link>
        </nav>
      )}
    </>
  );
}

export default Blog;

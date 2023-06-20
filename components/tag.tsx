import Link from "next/link";
import { Site } from "../lib/info";

const site = Site;

async function PostTag({tag, place}: {tag: any, place: string}) {

    const res = await fetch(`${site}/wp-json/wp/v2/tags/${tag}`, { next: { revalidate: 10 } })
    const data = await res.json();

    const tagURL = `/blog/tag/${data.slug}`;

    if ( place === 'archive' ) {
        return (
            <>
                <span className="text-2xl sm:text-3xl md:text-5xl text-black/50 dark:text-white/50">{data.name}</span>
            </>
        );
    } else if ( place === 'blog' ) {
        return (
            <>
                <span className="mt-2 mr-3 rounded-lg border border-primary-500 py-1 px-3 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out">{data.name}</span>
            </>
        );
    } else if ( place === 'meta' ) {
        return (
            data.name
        );
    } else {
        return (
            <>
                <Link
                    href={tagURL}
                    className="mt-2 mr-3 rounded-lg border border-primary-500 py-1 px-3 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out hover:bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900"
                >
                    {data.name}
                </Link>
            </>
        );
    }
}

export default PostTag
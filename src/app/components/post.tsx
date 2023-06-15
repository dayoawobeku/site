import Link from "next/link";
import { format } from "date-fns";
import { Site } from "../../../libs/info";
import PostTag from "./tag";

const site = Site;

async function Post({id}: {id: number}) {
    const res = await fetch(`${site}/wp-json/wp/v2/posts/${id}`, { next: { revalidate: 10 } })
    const post = await res.json();
    const postURL = `/blog/${post.slug}`;
    const postDate = format( new Date( post.date_gmt ), 'MMMM do, yyyy' );
    const postViews = post.views ? post.views.toLocaleString() : '0';
    const postViewsSuffix = post.views === 1 ? ' view' : ' views';

    const postTags = post.tags.map((tag: any) => {
        return(
            <PostTag tag={tag} place="blog" key={tag} />
        );
    })

    return (
        <Link
            key={post.id}
            href={postURL}
            className="relative group flex bg-transparent bg-opacity-20 px-8 mx-[-2.375rem] transition duration-100 md:hover:scale-105 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md z-20"
        >
            <div className='py-6 w-full'>
            <div className='space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                    {postDate}&nbsp;&bull;&nbsp;{postViews}{postViewsSuffix}
                </dd>
                </dl>
                <div className='space-y-5 xl:col-span-4'>
                <div className='space-y-1'>
                    <div>
                        <h2 className='text-2xl font-bold leading-8 tracking-tight' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
                    </div>
                    <div className="flex flex-wrap">
                        {postTags}
                    </div>
                    <div className='prose max-w-none pt-5 text-gray-500 dark:text-gray-400' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                </div>
                </div>
            </div>
            </div>
        </Link>
    );
}

export default Post
import React from "react";
import Parser from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import PostTag from "../../../../components/tag";
import { PrevPost, NextPost } from "../../../../components/adjacentPosts";
import Views from "../../../../components/views";
import { RoughNotation } from "react-rough-notation";
import Blocks from "../../../../components/blocks";
import { fetchPost } from "@/app/api";

export async function generateMetadata({ params }: { params: any }) {
    const { data: post } = await fetchPost(params?.slug);
    const postTitle = Parser(`${post[0]?.title?.rendered}`);
    const postDescription = Parser(`${post[0]?.description?.rendered}`);
    const postImage = post[0]?.featured_images?.medium_large;
    return {
        title: postTitle,
        description: postDescription,
        openGraph: {
            title: postTitle,
            description: postDescription,
            images: [`${postImage}`]
        },
    };
}


async function BlogHead({ params }: {
        params: { slug: string }
    }) {


    const { data: post } = await fetchPost(params.slug);
    const postDate = format( new Date( post[0]?.date_gmt ), 'EEEE, MMMM do, yyyy' );
    if ( post[0]?.sticky ) {
        return (
            <RoughNotation
                animate={true}
                type="bracket"
                brackets={['left','right']}
                show={true}
                color="#ff0000"
                animationDelay={0}
                animationDuration={500}
            >
                <div className="space-y-1 text-center">
                    <dl className="space-y-10">
                        <div>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-sm md:text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                className="mr-1.5 -mt-1.5 inline h-5 w-5 fill-current"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"><path d="M2.9 4.7a3 3 0 0 1 1.8-.8h.9V3c0-.5.5-1 1-1s1 .5 1 1v.8h8.8V3c0-.5.5-1 1-1s1 .5 1 1v.8h1a3 3 0 0 1 1.7.9c.5.5.7 1.1.8 1.8l.1 2.3v10.5a3 3 0 0 1-.9 1.8 3 3 0 0 1-1.8.8L17 22H4.7a3 3 0 0 1-1.8-.9 3 3 0 0 1-.8-1.8L2 17V6.5c.2-.7.4-1.3.9-1.8ZM4 17v2c.1.5.2.6.3.7 0 0 .2.2.6.2L7 20h12c.5-.1.6-.2.7-.3 0 0 .2-.2.2-.6L20 17v-6H4v6Zm4.5.5c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm4.5 0c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm-4.5-4c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm4.5 0c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm4.5 0c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm0 4c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1ZM4 8.8V9h16V6.8c-.1-.5-.2-.6-.3-.7 0 0-.2-.2-.6-.2a7 7 0 0 0-.7 0v.7c0 .5-.5 1-1 1a1 1 0 0 1-1-1v-.8H7.6v.8c0 .5-.5 1-1 1a1 1 0 0 1-1-1v-.8a7 7 0 0 0-.7 0l-.6.3s-.2.2-.2.6L4 8.8Z"/></svg>
                                {postDate}
                            </dd>
                        </div>
                    </dl>
                    <div>
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                            {Parser(`${post[0]?.title?.rendered}`)}
                        </h1>
                    </div>
                    <div className="flex justify-center gap-5 py-4 text-sm md:text-base">
                        <span className="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current" height="1em" width="1em"><path d="M14.4 15.8c-.6.7-1.1 1.2-1.6 1.5a3 3 0 0 1-2 .8 3 3 0 0 1-1-.2 3 3 0 0 1-1.5-1.5l-1-2.5-.2-.2c-.3-.7-.3-.9-.5-1a2 2 0 0 0-.3-.5l-1-.5c-.7-.4-1.3-.6-1.7-1-.4-.2-.8-.5-1.1-1a3 3 0 0 1-.4-2c.2-.6.4-1 .8-1.4l1.3-1.4.7-.7 1.4-1.3c.4-.4.8-.6 1.3-.8a3 3 0 0 1 2.1.4c.5.3.8.7 1 1.1.4.4.6 1 1 1.7l.5 1 .4.3 1 .5.3.1 2.5 1.1a3 3 0 0 1 1.5 1.5l.2 1c0 .8-.3 1.5-.8 2-.3.5-.8 1-1.5 1.6l5 4.9a1 1 0 0 1-1.5 1.4l-4.9-4.9Zm-10.2-7 .5.3 1.5.8 1.3.8.8.8L9 13v.3l1 2.2c.3.5.5.6.6.6l.3.1s.3 0 .7-.3l1.8-1.7.7-.7 1.7-1.8c.3-.4.3-.6.3-.7v-.3c0-.1-.2-.3-.7-.5l-2.2-1-.3-.1-1.4-.7a4 4 0 0 1-.8-.8l-.8-1.3a21.7 21.7 0 0 0-1.2-2 1 1 0 0 0-.7-.1s-.2 0-.5.3L6.3 5.6l-.7.7-1.2 1.2-.3.5.1.7Z"/></svg>
                            Pinned
                        </span>
                        <span className="hidden md:flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current" height="1em" width="1em"><path d="m15.7 3.4.8-.7a3 3 0 0 1 3.3 0l.8.7.7.8a3 3 0 0 1 0 3.4l-.7.8L9.8 19.2a5 5 0 0 1-.7.6l-.8.5-1 .4c-1.3.5-2.2 1-2.8 1-.8.2-1.3 0-1.7-.4-.4-.4-.6-1-.5-1.8.1-.6.5-1.5 1-2.8l.5-1 .4-.7.6-.7L15.7 3.4Zm-2 4.9-7.5 7.4-.3.4-.3.5-.4 1-.9 2v.1c.6-.1 1.3-.5 2.2-.9l1-.4.5-.2.4-.4 7.4-7.4-2.2-2.1Zm3.5.7 2-2 .5-.5a1 1 0 0 0 0-1.2l-.5-.5-.5-.4a1 1 0 0 0-1.1 0c-.2 0-.3.2-.5.4l-2 2L17 9Z"/></svg>
                            {post[0]?.read_time?.words.toLocaleString()} words
                        </span>
                        <span className="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="h-5 w-5 fill-current" height="1em" width="1em"><path d="M11 6a5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5Zm-1 0a4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4ZM5.5 4a.5.5 0 0 1 1 0v1.8L7.9 7A.5.5 0 0 1 7 8L5.6 6.4 5.5 6V4Z"/></svg>
                            {post[0]?.read_time?.time?.minutes.toLocaleString()} min read
                        </span>
                        <span className="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="h-5 w-5 fill-current" height="1em" width="1em"><path d="M.8 5.8a5.5 5.5 0 0 1 10.4 0v.4a5.5 5.5 0 0 1-10.4 0v-.4Zm1 .2a4.5 4.5 0 0 0 8.4 0 4.5 4.5 0 0 0-8.4 0ZM8 6a2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2ZM7 6c0-.5-.5-1-1-1a1 1 0 0 0-1 1c0 .5.5 1 1 1s1-.5 1-1Z"/></svg>
                            <Views id={post[0]?.id} />
                        </span>
                    </div>
                </div>
            </RoughNotation>
        );
    } else {
        return (
            <div className="space-y-1 text-center">
                <dl className="space-y-10">
                    <div>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg"
                            className="mr-1.5 -mt-1.5 inline h-5 w-5 fill-current"
                            viewBox="0 0 24 24"><path d="M2.9 4.7a3 3 0 0 1 1.8-.8h.9V3c0-.5.5-1 1-1s1 .5 1 1v.8h8.8V3c0-.5.5-1 1-1s1 .5 1 1v.8h1a3 3 0 0 1 1.7.9c.5.5.7 1.1.8 1.8l.1 2.3v10.5a3 3 0 0 1-.9 1.8 3 3 0 0 1-1.8.8L17 22H4.7a3 3 0 0 1-1.8-.9 3 3 0 0 1-.8-1.8L2 17V6.5c.2-.7.4-1.3.9-1.8ZM4 17v2c.1.5.2.6.3.7 0 0 .2.2.6.2L7 20h12c.5-.1.6-.2.7-.3 0 0 .2-.2.2-.6L20 17v-6H4v6Zm4.5.5c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm4.5 0c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm-4.5-4c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm4.5 0c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm4.5 0c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1Zm0 4c0 .5-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1s1 .5 1 1ZM4 8.8V9h16V6.8c-.1-.5-.2-.6-.3-.7 0 0-.2-.2-.6-.2a7 7 0 0 0-.7 0v.7c0 .5-.5 1-1 1a1 1 0 0 1-1-1v-.8H7.6v.8c0 .5-.5 1-1 1a1 1 0 0 1-1-1v-.8a7 7 0 0 0-.7 0l-.6.3s-.2.2-.2.6L4 8.8Z"/></svg>
                            {postDate}
                        </dd>
                    </div>
                </dl>
                <div>
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                        {Parser(`${post[0]?.title?.rendered}`)}
                    </h1>
                </div>
                <div className="flex justify-center gap-5 py-4">
                    <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current" height="1em" width="1em"><path d="m15.7 3.4.8-.7a3 3 0 0 1 3.3 0l.8.7.7.8a3 3 0 0 1 0 3.4l-.7.8L9.8 19.2a5 5 0 0 1-.7.6l-.8.5-1 .4c-1.3.5-2.2 1-2.8 1-.8.2-1.3 0-1.7-.4-.4-.4-.6-1-.5-1.8.1-.6.5-1.5 1-2.8l.5-1 .4-.7.6-.7L15.7 3.4Zm-2 4.9-7.5 7.4-.3.4-.3.5-.4 1-.9 2v.1c.6-.1 1.3-.5 2.2-.9l1-.4.5-.2.4-.4 7.4-7.4-2.2-2.1Zm3.5.7 2-2 .5-.5a1 1 0 0 0 0-1.2l-.5-.5-.5-.4a1 1 0 0 0-1.1 0c-.2 0-.3.2-.5.4l-2 2L17 9Z"/></svg>
                        {post[0]?.read_time?.words.toLocaleString()} words
                    </span>
                    <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="h-5 w-5 fill-current" height="1em" width="1em"><path d="M11 6a5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5Zm-1 0a4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4ZM5.5 4a.5.5 0 0 1 1 0v1.8L7.9 7A.5.5 0 0 1 7 8L5.6 6.4 5.5 6V4Z"/></svg>
                        {post[0]?.read_time?.time?.minutes.toLocaleString()} min read
                    </span>
                    <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="h-5 w-5 fill-current" height="1em" width="1em"><path d="M.8 5.8a5.5 5.5 0 0 1 10.4 0v.4a5.5 5.5 0 0 1-10.4 0v-.4Zm1 .2a4.5 4.5 0 0 0 8.4 0 4.5 4.5 0 0 0-8.4 0ZM8 6a2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2ZM7 6c0-.5-.5-1-1-1a1 1 0 0 0-1 1c0 .5.5 1 1 1s1-.5 1-1Z"/></svg>
                        <Views id={post[0]?.id} />
                    </span>
                </div>
            </div>
        );
    }
}

async function BlogPost({ params }: {
        params: { slug: string }
    }) {
    const { data: post } = await fetchPost(params.slug);

    return (
        <>
           {post.map((post: any) => {
                const author = post?._embedded?.author[0];
                const mastodonUsername = author?.acf?.mastodon.split('@').pop();

                const postTags = post.tags.map((tag: any) => {
                    return(
                        <PostTag tag={tag} place="post" key={tag} />
                    );
                })
                
                return (
                    <article key={post?.id}>
                        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                            <header className="pt-6 xl:pb-5">
                                <BlogHead params={params} />
                            </header>
                            <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0" style={{gridTemplateRows: "auto 1fr"}}>
                                <dl className="h-max pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                                    <dt className="sr-only">Writer</dt>
                                    <dd>
                                        <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                            <li className="flex items-center space-x-2">
                                                <Image
                                                    alt={author?.name}
                                                    src={author?.avatar_urls[96]}
                                                    width={38}
                                                    height={38}
                                                    className="h-10 w-10 rounded-full"
                                                />
                                                <dl className="whitespace-nowrap text-sm font-medium leading-5">
                                                    <dt className="sr-only">Name</dt>
                                                    <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                                                    <dt className="sr-only">Mastodon</dt>
                                                    <dd>
                                                        <a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href={author.acf.mastodon} target="_blank">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-0.5 inline-block h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.94,14C20.66,15.41 18.5,16.96 15.97,17.26C14.66,17.41 13.37,17.56 12,17.5C9.75,17.39 8,16.96 8,16.96V17.58C8.32,19.8 10.22,19.93 12.03,20C13.85,20.05 15.47,19.54 15.47,19.54L15.55,21.19C15.55,21.19 14.27,21.87 12,22C10.75,22.07 9.19,21.97 7.38,21.5C3.46,20.45 2.78,16.26 2.68,12L2.67,8.57C2.67,4.23 5.5,2.96 5.5,2.96C6.95,2.3 9.41,2 11.97,2H12.03C14.59,2 17.05,2.3 18.5,2.96C18.5,2.96 21.33,4.23 21.33,8.57C21.33,8.57 21.37,11.78 20.94,14M18,8.91C18,7.83 17.7,7 17.15,6.35C16.59,5.72 15.85,5.39 14.92,5.39C13.86,5.39 13.05,5.8 12.5,6.62L12,7.5L11.5,6.62C10.94,5.8 10.14,5.39 9.07,5.39C8.15,5.39 7.41,5.72 6.84,6.35C6.29,7 6,7.83 6,8.91V14.17H8.1V9.06C8.1,8 8.55,7.44 9.46,7.44C10.46,7.44 10.96,8.09 10.96,9.37V12.16H13.03V9.37C13.03,8.09 13.53,7.44 14.54,7.44C15.44,7.44 15.89,8 15.89,9.06V14.17H18V8.91Z" /></svg>
                                                            {mastodonUsername}
                                                        </a>
                                                    </dd>
                                                </dl>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                                    <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                                        <Blocks data={post?.blocks} />
                                    </div>
                                </div>
                                <footer>
                                    <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                                        <div className="py-4 xl:py-8" style={{ display: post.tags.length ? 'block' : 'none' }}>
                                            <h2 className="pb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                                Tags
                                            </h2>
                                            <div className="flex flex-wrap">
                                                {postTags}
                                            </div>
                                        </div>
                                        <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                                            <PrevPost post={post?.previous} />
                                            <NextPost post={post?.next} />
                                        </div>
                                    </div>
                                    <div className="pt-4 xl:pt-8">
                                        <Link
                                            href="/blog/"
                                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                        >
                                            ← Back to the blog
                                        </Link>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default BlogPost
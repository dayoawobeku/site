import React, { useEffect, useState } from "react";
import Parser from "html-react-parser";
import Link from "next/link";
import { format } from "date-fns";
import { Site } from "../../../lib/info";
import PostTag from "./tag";

const site = Site;

async function fetchPostData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function Post({ id }: { id: number }) {
  const post = await fetchPostData(id);
  console.log(post, "post");

  if (!post) {
    return null; // Return null or a loading state while the data is being fetched
  }

  const postURL = `/blog/${post?.id}`;

  return (
    <Link
      key={post?.id}
      href={postURL}
      as={postURL}
      className="relative group flex bg-transparent bg-opacity-20 px-8 mx-[-2.375rem] transition-all duration-100 md:hover:-translate-y-5 transform-gpu rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow-2xl z-20"
    >
      {/* Rest of your JSX code */}
    </Link>
  );
}

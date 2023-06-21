"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api";
import Post from "./post";

function Posts() {
  const { data: posts, status } = useQuery(["posts"], () => fetchPosts());

  console.log(posts);

  return (
    <>
      {status === "loading"
        ? "Loading..."
        : posts?.map((post: any) => <Post id={post?.id} key={post?.id} />)}
    </>
  );
}

export default Posts;

'use client'

import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../lib/api';
import Post from './post';

function PostLoop({ limit, perPage, tag }: { limit: number, perPage: number, tag: string }) {
    const { data: posts, status } = useQuery([], () => fetchPosts( limit, perPage, tag ));

    console.log(posts);

    if ( status === 'loading' ) {
        return <p>Loading...</p>;
    }

    return (
        posts?.data.map((post: any) => {
            return (
              <Post id={post?.data?.id} key={post?.data?.id} />
            );
        })
    )
}

export default PostLoop;
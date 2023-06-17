import Link from "next/link";

export function PrevPost({post}: { post: any }) {

    if (!post) {
        return;
    }

    const prevURL = `/blog/${post?.slug}`;

    return (
        <div>
            <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Previous Entry
            </h2>
            <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                <Link
                    href={prevURL}
                    dangerouslySetInnerHTML={{__html: post?.title}}
                ></Link>
            </div>
        </div>
    );
}

export function NextPost({post}: { post: any }) {

    if (!post) {
        return;
    }

    const nextURL = `/blog/${post?.slug}`;

    return (
        <div>
            <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Next Entry
            </h2>
            <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                <Link
                    href={nextURL}
                    dangerouslySetInnerHTML={{__html: post?.title}}
                ></Link>
            </div>
        </div>
    );
}

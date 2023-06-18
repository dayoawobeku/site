import Parser from "html-react-parser"
import Link from "next/link";
import { Site } from "../../../lib/info";
import BookCover from "./bookCover";


const site = Site;

async function ReadingList({feedURL}: {feedURL: string}) {
    const res = await fetch(`${site}/davidmc/rssloader/?url=${encodeURIComponent(feedURL)}`, { next: { revalidate: 10800 } });
    const feed = await res.json();

    return (
        <>
            {feed.map((book: any) => {
                return (
                    <>
                        <div key={book?.id}>
                            <Link
                                href={book?.link}
                                target="_blank"
                                className="relative mt-12 group flex flex-row gap-6 bg-transparent bg-opacity-20 px-8 py-6 transition-all duration-100 md:hover:-translate-y-5 rounded-xl hover:bg-gray-100/75 dark:hover:bg-gray-800/75 hover:backdrop-blur-md border border-solid border-white/0 outline outline-1 outline-neutral-200/0 hover:border-white hover:outline-neutral-200 dark:outline-neutral-950/0 dark:hover:border-white/5 dark:hover:outline-neutral-950 hover:shadow-2xl z-20 hover:z-50"
                            >
                                {book?.cover &&
                                   <BookCover book={book} />
                                }
                                <div className="flex flex-col grow">
                                    <h3 className="text-xl line-clamp-2">
                                        {Parser(`${book?.title}`)}
                                    </h3>
                                    {book?.subtitle && 
                                        (
                                            <h4 className="text-md text-black/75 dark:text-white/75 line-clamp-1">{book?.subtitle}</h4>
                                        )
                                    }
                                    <div className="text-black/75 dark:text-white/75 line-clamp-4 md:line-clamp-3 mt-2 mb-3">
                                        {Parser(`${book?.description}`)}
                                    </div>
                                    <div className="flex flex-row mt-auto pb-2">
                                        <span className="flex flex-row leading-5 gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current" height="1em" width="1em"><path d="m15.7 3.4.8-.7a3 3 0 0 1 3.3 0l.8.7.7.8a3 3 0 0 1 0 3.4l-.7.8L9.8 19.2a5 5 0 0 1-.7.6l-.8.5-1 .4c-1.3.5-2.2 1-2.8 1-.8.2-1.3 0-1.7-.4-.4-.4-.6-1-.5-1.8.1-.6.5-1.5 1-2.8l.5-1 .4-.7.6-.7L15.7 3.4Zm-2 4.9-7.5 7.4-.3.4-.3.5-.4 1-.9 2v.1c.6-.1 1.3-.5 2.2-.9l1-.4.5-.2.4-.4 7.4-7.4-2.2-2.1Zm3.5.7 2-2 .5-.5a1 1 0 0 0 0-1.2l-.5-.5-.5-.4a1 1 0 0 0-1.1 0c-.2 0-.3.2-.5.4l-2 2L17 9Z"></path></svg>
                                            {book?.author}
                                        </span>
                                        <span className="flex flex-row leading-5 gap-2 ml-auto">
                                            {Math.round(book?.rating * 10) / 10}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" className="h-5 w-5" height="1em" width="1em"><path fill="url(#a)" d="m731 728.5 110.3-341.9c27.6-85.2 48.8-139.3 69.7-164.9 26.3-32.4 56.6-44.4 89-44.4s62.7 12 89 44.4c20.8 25.6 42.1 79.7 69.7 164.9L1269 728.5h306.9c89.5 0 147.3 3.6 178.1 15.6 38.9 15.1 59.6 40.1 69.5 70.9 10 30.8 7.9 63.2-14.8 98.2-17.8 27.7-62.7 64.5-135.2 116.9l-263.1 190.3-.1.1v.1l111.5 344.8c27.2 84.6 41.4 140.3 39.5 173-2.4 41.5-19.8 68.8-45.9 87.7-26.1 18.9-57.4 26.9-97.4 16.6-31.8-8.3-80.4-38.9-152.5-91L1000 1559.8l-265.7 191.9c-72 52-120.7 82.7-152.4 90.9-40 10.4-71.3 2.4-97.4-16.5l-.1-.1c-26.2-19-43.4-46.2-45.8-87.7-1.9-32.7 12.2-88.5 39.5-173l111.5-344.8v-.1l-.1-.1L326.4 1030c-72.4-52.4-117.3-89.2-135.2-116.9-22.7-35-24.8-67.4-14.8-98.2 9.9-30.8 30.6-55.8 69.5-70.9 30.8-12 88.6-15.6 178.1-15.6h307v.1Z"/><defs><linearGradient id="a" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(37.3 -834 1000.7) scale(1667.82)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd16b"/><stop offset=".9" stop-color="#ffb000"/><stop offset="1" stop-color="#ffb000"/></linearGradient></defs></svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default ReadingList
import { RoughNotation } from "react-rough-notation"
import WpImage from "./components/wpimage"
import ReadingList from "./components/readingList"
import Blocks from "./components/blocks"

export function Page({data}: {data: any}) {
    return (
        <>
            {data.map((page: any) => {
                return (
                    <div key={page.id} className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14" dangerouslySetInnerHTML={{__html: page?.title?.rendered}}></h1>
                        <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                            <Blocks data={page.blocks} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export function PageAbout({data}: {data: any}) {
    return (
        <>
            {data.map((page: any) => {
                console.log(page);
                const email = `mailto:${page.acf.email_address}`

                return (
                    <div key={page.id}>
                        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14" dangerouslySetInnerHTML={{__html: page?.title?.rendered}}></h1>
                        </div>
                        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                            <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
                                <div className="relative">
                                    <RoughNotation
                                        animate={true}
                                        type="circle"
                                        show={true}
                                        color="#ff0000"
                                        animationDelay={0}
                                        animationDuration={500}
                                    >
                                        <WpImage
                                            id={page?.acf?.profile_image}
                                            className="h-48 w-48 rounded-full xl:rounded-full"
                                            width={192}
                                            height={192}
                                            alt={page.acf.name}
                                        />
                                    </RoughNotation>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1421.2 651.6" className="absolute scale-50 translate-y-[-200%] -translate-x-3/4 fill-black dark:fill-white"><path d="M783 303.6c22.6-28 33.6-39.6 33-34.7a324 324 0 0 0-1.5 33.6 576 576 0 0 1-1.5 39.4c-.8 8.6-.5 14.1.9 16.5 1.3 2.3 4.7 3.6 10.2 3.7 5.4.2 8.8-.6 10.1-2.4a24 24 0 0 0 3.3-6.6c.8-2.7 1.8-7 2.8-13 1-5.9 5-15 11.9-27.2s12.4-18.7 16.7-19.5c4.2-.8 7 2 8.5 8.5a274.3 274.3 0 0 1 5.5 35.8c.6 6.2 1.9 10.2 3.9 12.2 2 1.9 4.6 2.8 8 2.9 3.2 0 6-2.3 8.3-6.8 2.3-4.6 3.5-8 3.7-10.2.3-2.2 1.3-7.3 3.2-15.4a87.7 87.7 0 0 1 10.4-24.7l12.1-19.3c3-4.5 6.2-7.6 9.7-9.3 3.5-1.7 7-1 10.5 1.9s9.2 7.3 17 13.2a112 112 0 0 0 19 12 61 61 0 0 0 14.2 4.6c4.7 1 9.2.1 13.6-2.3a46 46 0 0 0 12.8-9.9l.6.3a50 50 0 0 0 10.9 4.9 43.4 43.4 0 0 0 34.3-7.5 65 65 0 0 0 13.6-12.2c3.1-4 7.1-9.6 11.8-16.7 4.8-7.1 8.5-14 11.1-20.6a453 453 0 0 0 6.6-16.9c1.8-4.6 1.2-4.4-1.6.5l-9.2 15.4a85.2 85.2 0 0 1-19.4 19.7 168.6 168.6 0 0 1-20.5 14.7 33 33 0 0 1-11.8 3.8c-2.6.3-5.2-.1-7.9-1.2 2.6-2.4 5-4.9 7.5-7.4 5.4-5.7 3.1-3.8-6.9 5.7l-1.4 1.3a25 25 0 0 1-3.6-2.2c-4.2-3-7-6.8-8.2-11.4a28 28 0 0 1 .5-15c0-.6.5-.9 1.4-.9a34.3 34.3 0 0 0 9.5-1.7c2.3-.7 4.7-2 7.3-4a135 135 0 0 0 20.5-21c4.8-6.4 6.3-13 4.6-19.8-1.8-6.8-4.5-12-8-15.8-3.6-3.7-10.6-3.6-21 .2a62.8 62.8 0 0 0-21 17.8 94.1 94.1 0 0 0-12.2 20.7c-2.7 6.4-4.4 14-5.4 23a59 59 0 0 0 1.6 23.3c2 6.7 4.4 11.8 7.3 15.2 1.6 2 3.4 3.7 5.3 5.2-5 .3-11.2-1-18.6-4.3-7.5-3.2-15.7-9.3-24.4-18.3s-15.8-15.8-21-20.3c-5-4.5-10.3-7-15.6-7.6-5.4-.5-11.1 1.9-17.4 7.2-6.3 5.4-12.8 14.5-19.3 27.4s-10.5 19.1-11.6 18.8c-1.2-.4-2.5-2.8-4.1-7.1a47 47 0 0 0-5.8-11.2c-2.3-3.2-6.3-5.2-11.9-6.3-5.6-1-11 .5-16.2 4.7a66.4 66.4 0 0 0-15.7 24.9c-5.4 12.4-6.4 10.9-3-4.7 3.3-15.6 3.9-25.6 1.7-30a85.2 85.2 0 0 0-10.6-17.2c-2-2.5-4.8-3.4-8.7-2.6-4 .8-7.7 6.1-11.3 16.1-3.7 10-10.4 21-20 33a676.7 676.7 0 0 0-28.7 38.5c-9.5 13.7-3 6.6 19.6-21.4Zm258.3-89.2c1.2-3.3 3.6-6.7 7.4-10.2 3.7-3.5 6.3-4.8 7.7-4 2.5 1.6 3 4 1.1 7-1.8 3-4.4 6.3-7.9 9.7s-6 4.8-7.6 4c-1.7-1-1.9-3.1-.7-6.5Zm108.6-47.3c4.3 5.3 7.8 5.5 10.5.6 2.7-5 3.6-8.5 2.6-10.6-1-2.1-.4-6.7 1.7-13.9 2-7 3-17.6 2.5-31.5-.3-13.9-.2-22.8.3-26.7.6-4 2.4-12 5.4-24.3 3-12.2 5-20 6.2-23.4 1-3.4 1.7-8.9 2-16.5.1-7.6-1-13-3.7-16-2.5-3-6-4.6-10.1-4.8s-8.3 2.7-12.4 8.7a84 84 0 0 0-10 31.8c-2.5 15.1-4 37-4.5 65.6-.6 28.5-.2 44.5 1.1 48a54 54 0 0 0 8.4 13Zm22.6 86.9c-2.1 0-5.4-.4-9.8-1.2-4.3-.8-7.4-.4-9.1 1.3-1.6 1.5-3 3-4.2 4.7-1.2 1.6-2 4.7-2.3 9.3-.4 4.6 1 8.1 4.5 10.6 3.5 2.4 7.5 4 12.2 4.7 4.7.7 8.2.6 10.6-.3 2.4-1 3.8-2.6 4.3-4.9.5-2.3.7-5.8.7-10.6s-.7-8.3-1.9-10.4c-1.2-2.2-2.9-3.2-5-3.2Zm-486.8 26.3a66.5 66.5 0 0 0-30.2 27.9 46 46 0 0 0-5.6 19c-.5 6.8 2.1 16 8 27.7 5.8 11.6 9.3 19.2 10.5 22.7a37 37 0 0 1 1.7 12.2 26.7 26.7 0 0 1-11.4 22.4 10 10 0 0 1-12.5.6c-4.3-2.7-1.2-13.8 9.4-33.3 10.5-19.4 9.2-18.5-3.8 2.7s-18.2 34.6-15.5 40.2c2.8 5.7 6.7 8.8 11.8 9.4 5 .6 9.5.4 13.5-.8 4-1.1 8.6-3.2 13.8-6.3 5.2-3 9.3-6.6 12.2-10.7 3-4.1 5.1-10 6.6-17.5a40 40 0 0 0-4-24.5c-4-8.8-7.1-14.6-9.2-17.4-2.1-2.9-4-8.6-5.6-17.1a39.5 39.5 0 0 1 2.8-24.3c3.5-7.6 7.4-12.2 11.8-14a15 15 0 0 0 9.2-8.4c1.7-3.9 1.4-7.3-1-10.3-2.2-3-6.4-3-12.5-.2Zm-38-96.5c2-1.3 2.3-3.2.7-5.8a26 26 0 0 0-6-7 14.2 14.2 0 0 0-9.6-3c-3.8 0-8.2 2-13.3 5.9-5 3.8-13 19.2-23.8 46s-16 42-15.7 45.7a40 40 0 0 0 2.4 10.2c1.2 3 3 5.3 5 6.8 2.2 1.4 4.4 2 6.7 1.6 2.3-.3 4-4.4 5.2-12.3s5.6-19.4 13.2-34.7c7.7-15.2 15-27.6 21.8-37.2s11.3-15 13.4-16.2Zm-38.6 152a195.3 195.3 0 0 1-33.9 8.2c-7.3.8-12.6 1-15.8.5-3.2-.5-5-6.1-5.4-17-.4-10.9-.6-19.4-.6-25.5 0-6 .3-11.1 1-15.1.8-4 0-7.4-2.2-10.2-2.1-2.8-4.5-5-7-6.7-2.6-1.7-6-2-10.2-1.2s-7 2.7-8.2 5.4a35 35 0 0 0-1 15.3 420 420 0 0 0 1.6 17.4c.6 4.2.9 13 1 26.3 0 13.3-2.2 20.6-6.6 22a36.7 36.7 0 0 0-14 8.8c-4.9 4.5-6.7 9-5.5 13.5 1.2 4.6 3.6 6.3 7.1 5.2a86 86 0 0 0 12-4.8c4.3-2.1 6.7-1.6 7 1.5.5 3.2-.1 11.7-1.6 25.5a479.3 479.3 0 0 0-2.8 35.6c-.3 9.9 1.1 15 4.3 15.5 3.2.4 6.5-.3 9.7-2.3 3.2-2 5.7-4.2 7.3-6.7 1.7-2.6 2.7-6.9 3.1-13l2.8-37c1.4-18.6 3.3-28.6 5.7-30.3 2.4-1.6 7.3-4.6 14.9-9a444 444 0 0 1 35.7-17.8c16.3-7.4 16.8-8.7 1.6-4Zm-93.6 85.8c-4.6 7.6-9 12.4-13 14.4s-7.6 2.4-10.5 1.4c-3-1-5.9-3.4-8.7-7.4a23 23 0 0 1-4.4-13.7c0-5.1.3-8.5 1-10.2.6-1.6.4-3.5-.5-5.8a21 21 0 0 0-6.2-7 18 18 0 0 0-9.9-4.3c-3.4-.3-10.2 4-20.3 12.7a233 233 0 0 0-24.4 24.1l-13.9 16.5c-3 3.6-4.4 4.4-4.4 2.2.1-2.2 2.1-7.7 6.1-16.6a136.6 136.6 0 0 1 24-36.9l10-9.7c3.4-3.2 7.4-3.6 12-1.1 4.7 2.4 9 2 13-1.4 3.8-3.4 3.7-7.7-.4-13.1a30.5 30.5 0 0 0-11-10c-3.2-1.3-7-1.6-11.6-1-4.5.6-8.5 2-11.9 4-3.3 2-8.8 7-16.6 14.6A149.4 149.4 0 0 0 393 399a216 216 0 0 0-17.6 34.8 119.4 119.4 0 0 0-8.8 26.8v1.7a37 37 0 0 1-11.4 9.3c-6.6 3.7-11.9 4.4-15.7 2-3.9-2.2-7-5.3-9.2-9.1-2.3-3.8-4-10-5.1-18.5-1-8.5-3-16.5-5.4-23.8s-5.2-12.2-7.8-14.5c-2.7-2.4-5.9-4-9.7-4.9-3.7-.9-7.5-.4-11.3 1.5a54 54 0 0 0-9.9 6.3 54.8 54.8 0 0 0-8.8 10 198.4 198.4 0 0 0-15.3 24.8c-2.3 4.6-3.4-.4-3.3-15 0-13.9 1.9-37.2 5.4-70.1l.8-.3a27 27 0 0 0 14.5-9c3.2-4 2-7.1-3.2-9.3-2.4-1-5.7-1.5-9.8-1.5 3.4-28 7-47.3 10.8-57.7 4.5-12 3.5-19.3-2.9-21.8s-13.4-1.5-21.1 2.7c-3.5 9.6-5.3 18-5.4 25-.2 6.7-1.9 25-5 55-10.4 2-18 3.4-22.5 4a1425.5 1425.5 0 0 0-89.6 18c-6.4 1.5-24.7 6.4-55 14.6s-47.6 14.3-52 18.3A89 89 0 0 0 6.5 412l-6.4 8.9c-.5.8 0 2 1.3 3.4s5.1 2.6 11.4 3.8c6.2 1 11.6-.3 16-4.1a59 59 0 0 1 18.4-10.1c7.8-2.8 19.5-6.6 35.3-11.4 15.7-4.8 27.6-8.6 35.9-11.4 8.2-2.8 9.6 5 4.2 23.3-5.4 18.3-11.3 37.8-17.7 58.5a878.3 878.3 0 0 0-12.7 43.7c-2 8.4-3.3 16.3-4 23.7a54 54 0 0 0 1.5 19.5c1.6 5.5 4 11.6 7 18.3A22 22 0 0 0 110 591c5.8 1.9 11.7 1.8 17.8-.3s12.7-8.2 19.7-18.2a106 106 0 0 0 13.6-23.6c2-5.7 5.2-13 9.6-21.7s4.4-10-.2-4a144 144 0 0 1-13.4 15.7 58.3 58.3 0 0 1-10.4 8.8 86 86 0 0 0-10.3 7.5c-4.3 3.5-8.4 4.5-12.1 3.1-3.8-1.4-6.6-5.3-8.5-11.8-1.9-6.5-1-16.6 2.5-30.3l11.4-43a476.3 476.3 0 0 1 24.4-69.4l7.5-15.3c1.9-4 5.4-6.8 10.5-8.5 5.1-1.6 14.9-4 29.3-7.1a3045.4 3045.4 0 0 0 34.3-7.4c-2.6 28.5-4 57.2-4.4 86.1-.5 34.4 0 53.8 1.3 58.5 1.4 4.7 3.5 8 6.5 9.9 3 1.9 6.6 2.8 10.9 2.8 4.2 0 6.7-4 7.4-11.8.6-7.8 2.3-17.6 5-29.4a89 89 0 0 1 16.7-34.4c8.5-11.2 14.5-16 17.8-14.3 3.3 1.7 6.4 9.1 9.3 22.2 3 13 6 22.4 9.2 28.1 3.1 5.7 7.2 9.6 12 11.7 5 2.1 9.3 2.6 13.1 1.4a64.4 64.4 0 0 0 27.5-25.1l.4 1a23 23 0 0 0 6.3 9.1c2.9 2.6 5.2 3.8 7 3.8 1.8 0 5.4-1.6 10.7-4.7 5.2-3.2 11-7.7 17-13.7s12.5-13.1 19-21.6a99 99 0 0 1 14.4-16c2.9-2.4 5.9-2.7 8.9-1 3 1.8 5 3.5 6.2 5.3 1.2 1.8 3.4 4.5 6.4 8.1a33.2 33.2 0 0 0 31.7 11.4c2.3-.6 5-2.6 8.3-6A74 74 0 0 0 516 426c4.3-10.5 4.2-12-.4-4.3Zm815.9 61.5a3703 3703 0 0 0-149-74.3c-7.7-3.7-17.4-.7-17 10.1.6 11.8 11.5 20.6 20.1 24.6 43.5 20.5 86.7 41.9 129.6 64.3 15 7.9 30 15.7 44.8 23.8-94.2 1.5-188.5.5-282.6-5.9a1990.3 1990.3 0 0 1-358-54.7 13.2 13.2 0 0 0-16.4 12.8 22 22 0 0 0 16.4 21.4c41.4 10.8 83 20 125 27.7 159.4 29.4 321.1 37.6 482.6 36.6-39.5 8.7-80 14.4-119.8 21.2-47.2 8-94.3 15.7-141.6 23.3-21.5 3.5 5.1 40 20.9 37.5 56.4-9.2 113-18.3 169.3-28.2a5207 5207 0 0 0 83-15.1c23.7-4.5 51-7.6 70.1-25.6 47.2-44-54-87.2-77.4-99.4Z"/></svg>
                                </div>
                                <div className="text-gray-500 dark:text-gray-400 pt-3" dangerouslySetInnerHTML={{__html: page?.acf?.occupation}}></div>
                                <div className="flex flex-col pt-3">
                                    <a
                                        href={email}
                                        className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-primary-400 hover:bg-primary-400 hover:text-black hover:shadow dark:text-white"
                                    >
                                        <svg className="mr-2 mb-0.5 inline h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M8 4h8l3.3.1c1 .2 1.5.5 1.8.8.3.3.6.8.8 1.8L22 10v4l-.1 3.3c-.1 1-.5 1.5-.8 1.8-.3.3-.8.6-1.8.8L16 20H8l-3.3-.1c-1-.1-1.5-.5-1.8-.8-.4-.3-.6-.8-.8-1.8L2 14v-4l.1-3.3c.1-1 .5-1.5.8-1.8.3-.4.8-.7 1.8-.8L8 4Zm10.3 2H5.7l4.5 3.4 1.3 1 .5.1c.2 0 .3 0 .5-.2l1.3-.9L18.3 6ZM4.1 7.3 4 10v7l.3.7c.1.1.3.2.7.2l3 .1h11l.7-.3c.1-.1.2-.3.2-.7l.1-3V7.3L15 11c-1.4 1-2.2 1.5-3 1.5-.8 0-1.6-.4-3-1.5L4 7.3Z"/></svg>
                                        Say Hi!
                                    </a>
                                </div>
                            </div>
                            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
                                <Blocks data={page.blocks} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export function PageReadingList({data}: {data: any}) {
    return (
        <>
            {data.map((page: any) => {
                return (
                    <div key={page.id}>
                        {
                            page.content.rendered && (
                                <>
                                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14" dangerouslySetInnerHTML={{__html: page.title.rendered}}></h1>
                                    <div className="prose max-w-none py-8 dark:prose-dark xl:col-span-2">
                                        <Blocks data={page.blocks} />
                                    </div>
                                </>
                            )
                        }
                        {
                            <ReadingList feedURL={page.acf.feed_url_currently_reading} /> && (
                                <>
                                    <h2 className="-mb-8 xl:mb-0 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">Currently Reading</h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        <ReadingList feedURL={page.acf.feed_url_currently_reading} />
                                    </div>
                                </>
                            )
                        }
                        {
                            <ReadingList feedURL={page.acf.feed_url_reading_list} /> && (
                                <>
                                    <h2 className="mt-8 xl:mt-24 -mb-8 xl:mb-0 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">Plan to Read</h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        <ReadingList feedURL={page.acf.feed_url_reading_list} />
                                    </div>
                                </>
                            )
                        }
                    </div>
                )
            })}
        </>
    )
}
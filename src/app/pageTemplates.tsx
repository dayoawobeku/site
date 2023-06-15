import Image from "next/image"
import WpImage from "./components/wpimage"

export function Page({data}: {data: any}) {
    return (
        <>
            {data.map((page: any) => {
                return (
                    <div key={page.id} className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14" dangerouslySetInnerHTML={{__html: page.title.rendered}}></h1>
                        <div className="prose max-w-none pt-10 pb-8 dark:prose-dark" dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
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
                const email = `mailto:${page.acf.email_address}`

                return (
                    <div key={page.id}>
                        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14" dangerouslySetInnerHTML={{__html: page.title.rendered}}></h1>
                        </div>
                        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                            <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
                                <WpImage
                                    id={page.acf.profile_image}
                                    className="h-48 w-48 rounded-full xl:rounded-full"
                                    width={192}
                                    height={192}
                                    alt={page.acf.name}
                                />
                                <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight" dangerouslySetInnerHTML={{__html: page.acf.name}}></h3>
                                <div className="text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{__html: page.acf.occupation}}></div>
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
                            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2" dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
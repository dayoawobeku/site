import Image from "next/image";
import { Site } from "../lib/info";

const site = Site;

const AuthorInfo = async ({id}: {id: number}) => {
    const res = await fetch(`${site}/wp-json/wp/v2/users/${id}`, { next: { revalidate: 10 } })
    const data = await res.json();

    return (
        <>
            {data.map((author: any) => {
                return (
                    <Image
                        key={author.id}
                        alt={author.name}
                        src={author.avatar_urls[96]}
                        width={38}
                        height={38}
                        className="h-10 w-10 rounded-full"
                    />
                 )
            })}
        </>
    )
}

export default AuthorInfo